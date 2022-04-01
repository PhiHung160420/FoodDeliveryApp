export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const setSelectedTabSuccess = selectedTab => {
  return {
    type: SET_SELECTED_TAB,
    payload: {selectedTab},
  };
};

export const setSelectedTab = selectedTab => {
  return dispatch => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
};
