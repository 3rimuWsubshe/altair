import { Action } from '@ngrx/store';

import * as layout from '../../store/layout/layout.action';

export interface State {
  isLoading: boolean;
  title: string;
  collectionId?: number;
  windowIdInCollection?: string;
  hasDynamicTitle?: boolean;
}

export const getInitialState = (): State => {
  return {
    isLoading: false,
    title: 'New window',
    hasDynamicTitle: true,
  };
};

export function layoutReducer(state = getInitialState(), action: layout.Action): State {
  switch (action.type) {
    case layout.START_LOADING:
      return { ...state, isLoading: true };
    case layout.STOP_LOADING:
      return { ...state, isLoading: false };
    case layout.SET_WINDOW_NAME:
      return { ...state, title: action.payload.title, hasDynamicTitle: !action.payload.setByUser };
    default:
      return state;
  }
}
