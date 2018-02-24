import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from './constants';
import { dataLoaded, dataLoadingError } from 'containers/HomePage/actions';
import request from '../../utils/request';

export function* loadData(handleData) {
  const url = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
  const options = {
    method: 'GET',
  };

  try {
    const response = yield call(request, url, options);
    yield put(dataLoaded(handleData(response.data.data)));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export default function* loaddataWrapper() {
  yield takeLatest(LOAD_DATA);
}
