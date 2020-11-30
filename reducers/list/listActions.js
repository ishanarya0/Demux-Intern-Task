
import { UPDATE_LIST } from './listTypes';
export function updatelist(items) {
    return{
      type: UPDATE_LIST,
      items: items
    };
}
