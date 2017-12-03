import { combineReducers } from 'redux';
import { ADD_TO_LIST } from './actions';
import { DELETE_PERSON} from './actions';
import { REVERSE_START, REVERSE_SUCCEED} from './actions';

//要返回的格式
const initialPerson = {
  personList:[],
  count: 0,
  succeed: false
}

function manipulatingItems(state = initialPerson, action) {
 
  switch (action.type) {
    case ADD_TO_LIST:
      state.personList.push(action.person)   
      return {
        personList: Object.assign([],state.personList),
        count: state.count + 1
      }
    
    case DELETE_PERSON:      
      state.personList.splice(Number(action.index), 1);   
      return {
        personList: Object.assign([], state.personList),
        count: state.count - 1
      }

    case REVERSE_START:
      return {
         succeed: false
      }

    case REVERSE_SUCCEED: //personlist para entered
      return {
        personList: Object.assign([], action.personList.reverse()),
        succeed: true
      }
      

    default: 
      return state;
  }
}



const app = combineReducers({
  manipulatingItems
})
  
export default app;
