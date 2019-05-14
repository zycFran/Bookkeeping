import { createAction, NavigationActions, Storage } from '../utils'
import * as billService from '../services/bill'
import { delay } from '../utils'

export default {
  namespace: 'bill',
  state: {
    list: [],
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    loadMoreBills(state, {payload}){
      
    }
  },
  effects: {
    *loadBills({payload}, { call, put }) {
      const list = yield call(billService.getBillList, payload)
      yield put(createAction('updateState')({ list }))
    },
    *loadMoreBills({payload}, { call, put }) {
      const list = yield call(billService.getBillList, payload)
      yield put(createAction('updateState')({ list }))
    },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("loadBills")
       dispatch({ type: 'loadBills' })
    }
  },
}
