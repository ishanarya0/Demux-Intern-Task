import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

const initialState = {
  company: [],
  topic: [],
  typeOfInterview: [],
  college: [],
  natureOfJob: []
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTER_REQUEST:
      return {
        ...state
      };
    case UPDATE_LIST_RESULTS:
      return {
          company: action.company,
          topic: action.topic,
          typeOfInterview: action.typeOfInterview,
          college: action.college,
          natureOfJob: action.natureOfJob
      };
    default:
      return state;
  }
}

export default filterReducer;
