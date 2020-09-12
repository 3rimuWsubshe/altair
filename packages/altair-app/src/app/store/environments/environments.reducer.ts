import { Action } from '@ngrx/store';
import * as uuid from 'uuid/v4';
import { getAltairConfig } from 'app/config';
import * as environmentsAction from './environments.action';
import { IDictionary } from 'app/interfaces/shared';

interface InitialEnvironmentState {
  id?: string
  title?: string,
  variables?: IDictionary,
};

export interface IInitialEnvironments {
  base?: InitialEnvironmentState,
  subEnvironments?: InitialEnvironmentState[]
}

export interface EnvironmentState {
  // Adding undefined for backward compatibility
  id?: string;
  title: string;
  variablesJson: string;
}

export interface State {
  base: EnvironmentState;
  subEnvironments: EnvironmentState[];
  // Adding undefined for backward compatibility
  activeSubEnvironment?: string;
}

export const getInitialEnvironmentState = (): EnvironmentState => {
  const { initialData: { environments } } = getAltairConfig();

  return {
    title: environments.base && environments.base.title || 'Environment',
    variablesJson: JSON.stringify(environments.base && environments.base.variables || {}),
  };
};

const getInitialSubEnvironmentState = (): EnvironmentState[] => {
  const { initialData: { environments } } = getAltairConfig();

  return (environments.subEnvironments || []).map((env, idx) => {
    return {
      id: env.id || uuid(),
      title: env.title || `Environment ${idx + 1}`,
      variablesJson: JSON.stringify(env.variables || {})
    }
  });
}

export const getInitialState = (): State => {
  return {
    base: getInitialEnvironmentState(),
    subEnvironments: getInitialSubEnvironmentState(),
  }
};

export function environmentsReducer(state = getInitialState(), action: environmentsAction.Action): State {
  switch (action.type) {
    case environmentsAction.ADD_SUB_ENVIRONMENT:
      return {
        ...state,
        subEnvironments: [
          ...state.subEnvironments,
          {
            ...getInitialEnvironmentState(),
            id: action.payload.id,
            title: `Environment ${state.subEnvironments.length + 1}`
          }
        ]
      };
    case environmentsAction.DELETE_SUB_ENVIRONMENT: {
      return { ...state, subEnvironments: state.subEnvironments.filter(env => env.id !== action.payload.id) };
    }
    case environmentsAction.UPDATE_BASE_ENVIRONMENT_JSON:
      const base = state.base;
      base.variablesJson = action.payload.value;
      return { ...state, base };
    case environmentsAction.UPDATE_SUB_ENVIRONMENT_JSON: {
      const subEnvironments = state.subEnvironments.map(env => {
        if (env.id === action.payload.id) {
          env.variablesJson = action.payload.value;
        }
        return env;
      });
      return { ...state, subEnvironments };
    }
    case environmentsAction.UPDATE_SUB_ENVIRONMENT_TITLE: {
      const subEnvironments = state.subEnvironments.map(env => {
        if (env.id === action.payload.id) {
          env.title = action.payload.value;
        }
        return env;
      });
      return { ...state, subEnvironments };
    }
    case environmentsAction.SELECT_ACTIVE_SUB_ENVIRONMENT: {
      return { ...state, activeSubEnvironment: action.payload.id };
    }
    case environmentsAction.REPOSITION_SUB_ENVIRONMENT: {
      const curPos = action.payload.currentPosition;
      const newPos = action.payload.newPosition;

      if (curPos > -1 && curPos < state.subEnvironments.length && newPos > -1 && newPos < state.subEnvironments.length) {
        const arr = [ ...state.subEnvironments ];
        arr.splice(newPos, 0, arr.splice(curPos, 1)[0]);

        return { ...state, subEnvironments: [ ...arr ] };
      }
      return state;
    }
    default:
      return state;
  }
}
