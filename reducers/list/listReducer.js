import { UPDATE_LIST } from './listTypes';

const initialState = {
  items: []
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIST:
      const nState = Object.assign({}, state, {
        items: action.items
      });
      return nState;
    default:
      return state;
  }
}

export default listReducer;
