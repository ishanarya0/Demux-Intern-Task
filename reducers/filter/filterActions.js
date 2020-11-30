import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

export function fetchFilter() {
  return {
    type: FETCH_FILTER_REQUEST,
  };
}

// eslint-disable-next-line import/prefer-default-export
export function updateFilter(company,topic, typeOfInterview, college, natureOfJob) {
    //dispatch(fetchFilter());
    return{
      type: UPDATE_LIST_RESULTS,
      company: company,
      topic: topic,
      typeOfInterview: typeOfInterview,
      college: college,
      natureOfJob : natureOfJob
    };
}
