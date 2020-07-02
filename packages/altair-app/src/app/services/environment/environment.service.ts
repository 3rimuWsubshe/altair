import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store';
import * as fromEnvironments from '../../store/environments/environments.reducer';
import * as fromHeaders from '../../store/headers/headers.reducer';
import { IDictionary } from 'app/interfaces/shared';

export const VARIABLE_REGEX = /(?<!\\){{\s*[\w\.]+\s*}}/g;
interface IEnvironment extends IDictionary<any> {
  headers?: IDictionary<string>;
}
interface HydrateEnvironmentOptions {
  activeEnvironment?: IEnvironment;
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  environmentsState: fromEnvironments.State;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.store.subscribe(data => {
      this.environmentsState = data.environments;
    });
  }

  getActiveEnvironment(): IEnvironment {
    let baseEnvironment = {};
    let subEnvironment = {};

    try {
      baseEnvironment = JSON.parse(this.environmentsState.base.variablesJson);
    } catch (ex) {}

    if (this.environmentsState.activeSubEnvironment) {
      const activeSubEnvState = this.environmentsState.subEnvironments.find(env => {
        return env.id === this.environmentsState.activeSubEnvironment;
      });

      if (activeSubEnvState) {
        try {
          subEnvironment = JSON.parse(activeSubEnvState.variablesJson);
        } catch (ex) {}
      }
    }

    return { ...baseEnvironment, ...subEnvironment };
  }

  /**
   * Update all variables in content with values from the environment variables.
   * Variables are written with double curly braces .e.g. {{ VARIABLE_ONE }}
   * @param content {string}
   */
  hydrate(content: string, options: HydrateEnvironmentOptions = {}): string {

    if (!content) {
      return content;
    }

    const activeEnvironment = options.activeEnvironment ? options.activeEnvironment : this.getActiveEnvironment();

    return content.replace(VARIABLE_REGEX, (match) => {
      const matches = match.match(/[\w\.]+/);
      if (matches) {
        const variable = matches[0];
        return activeEnvironment[variable];
      }
    });
  }

  hydrateHeaders(headers: fromHeaders.Header[], options: HydrateEnvironmentOptions = {}): fromHeaders.Header[] {
    const hydratedHeaders = headers.map(header => {
      return {
        key: this.hydrate(header.key, options),
        value: this.hydrate(header.value, options),
        enabled: header.enabled,
      };
    });

    const activeEnvironment = options.activeEnvironment ? options.activeEnvironment : this.getActiveEnvironment();

    const environmentHeadersMap = activeEnvironment.headers;

    if (environmentHeadersMap) {
      const environmentHeaders = Object.keys(environmentHeadersMap).map(key => {
        return {
          key: this.hydrate(key, options),
          value: this.hydrate(environmentHeadersMap[key], options),
          enabled: true,
        }
      });

      return [ ...environmentHeaders, ...hydratedHeaders ];
    }

    return hydratedHeaders;
  }
}
