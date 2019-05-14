import { createAction, NavigationActions, Storage } from '../utils'
import * as billService from '../services/bill'
import { delay } from '../utils'

export default {
  namespace: 'bill',
  state: {
    page: 1,
    pageSize: 10,
    list: [],
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    loadMoreBills(state, {list, page}){
        return {...state, ...list, ...page}
    }
  },
  effects: {
    *loadBills({payload}, { call, put }) {
     
      const list = yield call(billService.getBillList, payload)

      yield put(createAction('updateState')({ list }))
    },
    *loadMoreBills({payload}, { call, put }) {
      console.log('_loadMoreBills')
      console.log(payload)
      const list = yield call(billService.getBillList, payload)
      yield put(createAction('loadMoreBills')({ list,  page: payload.page}))
    },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("loadBills")
       dispatch({ type: 'loadBills',payload:{page: 1} })
    }
  },
}
