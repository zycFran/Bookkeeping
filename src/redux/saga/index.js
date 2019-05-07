import { takeEvery } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'

import { 
  saveAccountSagas,
  initializationDataSagas,
} from './dataSagas';

function* saga() {
  yield all([
    call(saveAccountSagas),
    call(initializationDataSagas),
  ])
}

export default saga;