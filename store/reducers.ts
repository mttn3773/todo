import ACTIONS from "./actions";

export interface Payload {
  error?: string;
  success?: string;
  loading?: boolean;
}

export interface IAction {
  type: string;
  payload: Payload;
}

export interface State {
  notify: Payload;
}

const reducers = (state: State, action: IAction) => {
  switch (action.type) {
    case ACTIONS.NOTIFY: {
      return {
        ...state,
        notify: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducers;
