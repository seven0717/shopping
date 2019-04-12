import * as actTYPES from '../constants'
const inits = {};

export default function userinfo(state = inits, action) {
   switch (action.type) {
      case actTYPES.USERINFO_CITY: return action.data;
      default: return state;
   }
}