import * as settings from './settings.action';
import { getAltairConfig } from '../../config';
import { jsonc } from 'app/utils';
import { ICustomTheme } from 'app/services/theme';

const config = getAltairConfig();
export type SettingsTheme = typeof config.themes[number];
export type SettingsLanguage = keyof typeof config.languages;

export interface State {

  /**
   * Specifies the theme
   * Options: 'light', 'dark', 'dracula'
   */
  theme: SettingsTheme;

  /**
   * Specifies the language e.g. 'en-US', 'fr-FR', 'ru-RU', etc
   */
  language: SettingsLanguage;

  /**
   * Specifies how deep the 'Add query' functionality would go
   */
  addQueryDepthLimit: number;

  /**
   * Specifies the tab size in the editor
   */
  tabSize: number;

  /**
   * Enable experimental features in Altair.
   * Note: The features might be unstable
   */
  enableExperimental?: boolean;

  /**
   * Specifies the base font size
   * (Default size - 24)
   */
  'theme.fontsize'?: number;

  /**
   * Specifies the font family for the editors
   */
  'theme.editorFontFamily'?: string;

  /**
   * Specifies the font size for the editors
   */
  'theme.editorFontSize'?: number;

  /**
   * Specifies if the push notifications should be disabled
   */
  disablePushNotification?: boolean;

  /**
   * Specifies a list of enabled plugins
   */
  'plugin.list'?: string[];

  /**
   * Specifies if requests should be sent with credentials (with cookies) or not
   */
  'request.withCredentials'?: boolean;

  /**
   * Specifies if the schema should be reloaded when the app starts
   */
  'schema.reloadOnStart'?: boolean;

  /**
   * Specifies if warning alerts should be disabled
   */
  'alert.disableWarnings'?: boolean;

  /**
   * Specifies the number of items allowed in the history pane
   */
  historyDepth?: number;

  /**
   * Theme config object
   */
  themeConfig?: ICustomTheme;
}

export const getInitialState = (): State => {
  const altairConfig = getAltairConfig();
  const initialSettings = altairConfig.initialData.settings || {};
  return {
    theme: <SettingsTheme>altairConfig.defaultTheme,
    language: <SettingsLanguage>altairConfig.default_language,
    addQueryDepthLimit: altairConfig.add_query_depth_limit,
    tabSize: altairConfig.tab_size,
    ...initialSettings,
  };
};

export function settingsReducer(state = getInitialState(), action: settings.Action): State {
  switch (action.type) {
    case settings.SET_SETTINGS_JSON:
      const newState = { ...getInitialState(), ...jsonc(action.payload.value) };

      return newState;
    default:
      return state;
  }
}
