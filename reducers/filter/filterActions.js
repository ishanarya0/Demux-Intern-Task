import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

export function fetchFilter() {
  return {
    type: FETCH_FILTER_REQUEST,
  };
}

export function updateFilter(company,topic, typeOfInterview, college, natureOfJob) {
    return{
      type: UPDATE_LIST_RESULTS,
      company: company,
      topic: topic,
      typeOfInterview: typeOfInterview,
      college: college,
      natureOfJob : natureOfJob
    };
}
