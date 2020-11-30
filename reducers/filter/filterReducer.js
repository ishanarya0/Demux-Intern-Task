import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

const initialState = {
  company: ['Adobe', 'Facebook','Microsoft'],
  topic: [],
  typeInterview: [],
  college: [],
  nature: []
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTER_REQUEST:
      return {
        ...state
      };
    case UPDATE_LIST_RESULTS:
/*       console.log("HELLLO"); */
      return {
          company: action.company,
          topic: action.topic,
          typeInterview: action.typeInterview,
          college: action.college,
          nature: action.nature
      };
    default:
      return state;
  }
}

export default filterReducer;
