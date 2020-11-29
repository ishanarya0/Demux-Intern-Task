import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

const initialState = {
  company: ['Nunnu', 'Loda'],
  topic: ['Intresting', 'Sexy'],
  typeJob: ['Nice'],
  college: ['IIITG','pUSSY'],
  nature: ['gOOD'],
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTER_REQUEST:
      return {
        ...state
      };
    case UPDATE_LIST_RESULTS:
      const nState = Object.assign({}, state, {
          company: action.company,
          topic: action.topic,
          typeJob: action.typeJob,
          college: action.college,
          nature: action.nature
      });
      return nState;
    default:
      return state;
  }
}

export default filterReducer;
