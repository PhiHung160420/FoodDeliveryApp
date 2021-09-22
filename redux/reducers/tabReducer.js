import * as TabActiontype from '../actions/tabActions';

const initialState = {
  selectedTab: '',
};

const TabReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TabActiontype.SET_SELECTED_TAB:
      return {...state, selectedTab: payload.selectedTab};

    default:
      return state;
  }
};

export default TabReducer;
