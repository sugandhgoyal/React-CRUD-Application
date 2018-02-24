import { fromJS } from 'immutable';

import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from 'containers/HomePage/constants';

const initialState = fromJS({ loading: false, err: false, app_data: [] });

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('err', false)
        .set('app_data', []);
    case LOAD_DATA_SUCCESS:
      return state
        .set('app_data', action.appData)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('loading', false)
        .set('err', action.err);
    default:
      return state;
  }
}

export default dataReducer;
