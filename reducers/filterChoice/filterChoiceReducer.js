import { FETCH_FILTER_REQUEST, UPDATE_LIST_RESULTS } from './filterTypes';

const initialState = {
  company: ['Adobe', 'Facebook','Microsoft'],
  topic: [],
  typeInterview: [],
  college: [],
  nature: []
};

export const dataSource = [
  { name: 'Rated above 3 stars', isSelected: false },
  { name: 'Valet Parking Available', isSelected: false },
  { name: 'Disco', isSelected: false },
  { name: 'Card Paymnent Accepted', isSelected: false },
  { name: 'Bar Only', isSelected: false },
  { name: 'Lounge Only', isSelected: false },
  { name: 'Stag Entry Only', isSelected: false },
  { name: "Opne's in Night", isSelected: false },
  { name: 'Live Music', isSelected: false },
];

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
