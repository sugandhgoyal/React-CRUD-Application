import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

export function loadData() {
  return { type: LOAD_DATA };
}

export function dataLoaded(appData) {
  return { type: LOAD_DATA_SUCCESS, appData };
}

export function dataLoadingError(err) {
  return { type: LOAD_DATA_ERROR, err };
}
