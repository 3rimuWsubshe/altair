
import {first} from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Store } from '@ngrx/store';

import { WindowService } from '../window.service';
import { NotifyService } from '../notify/notify.service';

import * as fromRoot from '../../store';
import * as fromHeader from '../../store/headers/headers.reducer';

import * as queryActions from '../../store/query/query.action';
import * as docsActions from '../../store/docs/docs.action';
import * as windowsMetaActions from '../../store/windows-meta/windows-meta.action';
import * as windowsActions from '../../store/windows/windows.action';
import { debug } from 'app/utils/logger';
import { BackupService } from '../backup/backup.service';

@Injectable()
export class ElectronAppService {

  windowIds: string[];
  activeWindowId = '';

  private ipc: Electron.IpcRenderer = (window as any).ipc;

  constructor(
    private electron: ElectronService,
    private store: Store<fromRoot.State>,
    private windowService: WindowService,
    private notifyService: NotifyService,
    private backupService: BackupService,
    private zone: NgZone,
  ) {
    this.store.subscribe(data => {
      this.windowIds = Object.keys(data.windows);
      this.activeWindowId = data.windowsMeta.activeWindowId;
    })
  }

  connect() {
    if (this.electron.isElectronApp) {
      this.ipc.on('file-opened', (evt: any, content: string) => {
        this.zone.run(() => this.windowService.importStringData(content));
      });

      this.ipc.on('certificate-error', (evt: any, error: Error) => {
        this.zone.run(() => this.notifyService.warning(`
          Your request has an invalid certificate.
          You should check that your request is coming from a trusted source.
        `));
      });

      this.ipc.on('import-app-data', () => {
        this.zone.run(() => this.backupService.importBackupData());
      });

      this.ipc.on('export-app-data', () => {
        this.zone.run(() => this.backupService.exportBackupData());
      });

      this.ipc.on('create-tab', () => {
        this.zone.run(() => this.windowService.newWindow().pipe(first()).subscribe());
      });
      this.ipc.on('close-tab', () => {
        this.zone.run(() => {
          if (this.windowIds.length > 1) {
            this.windowService.removeWindow(this.activeWindowId).subscribe();
          }
        });
      });

      this.ipc.on('next-tab', () => {
        this.zone.run(() => this.store.dispatch(new windowsMetaActions.SetNextWindowActiveAction()));
      });

      this.ipc.on('previous-tab', () => {
        this.zone.run(() => this.store.dispatch(new windowsMetaActions.SetPreviousWindowAction()));
      });

      this.ipc.on('reopen-closed-tab', () => {
        this.zone.run(() => this.store.dispatch(new windowsActions.ReopenClosedWindowAction()));
      });

      this.ipc.on('send-request', () => {
        this.zone.run(() => this.store.dispatch(new queryActions.SendQueryRequestAction(this.activeWindowId)));
      });
      this.ipc.on('reload-docs', () => {
        this.zone.run(() => this.store.dispatch(new queryActions.SendIntrospectionQueryRequestAction(this.activeWindowId)));
      });
      this.ipc.on('show-docs', () => {
        this.zone.run(() => this.store.dispatch(new docsActions.ToggleDocsViewAction(this.activeWindowId)));
      });
      this.ipc.on('show-settings', () => {
        this.zone.run(() => this.store.dispatch(new windowsMetaActions.ShowSettingsDialogAction({ value: true })));
      });
      debug.log('Electron app connected.');

      this.ipc.send('get-file-opened');
    }
  }

  setHeaders(headers: fromHeader.Header[]) {
    if (this.electron.isElectronApp) {
      this.ipc.sendSync('set-headers-sync', headers);
    }
  }

  isElectronApp() {
    return this.electron.isElectronApp;
  }
}
