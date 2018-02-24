import { createSelector } from 'reselect';

const selectState = (state) => state.get('global');

const makeDataList = () =>
createSelector(selectState, state => state.get('dataReducer').get('app_data'));

// const makeHackathonList = () =>
//     createSelector(selectState, state => state.get('listingReducer').get('hackathonList'));
