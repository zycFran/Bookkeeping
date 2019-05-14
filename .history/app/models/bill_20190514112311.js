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
    loadMoreBills(state, {moreList}){
        return {...state, list: state.list.concat(moreList), page: state.page + 1 }
    }
  },
  effects: {
    *loadBills({payload}, { call, put }) {
     
      const list = yield call(billService.getBillList, payload)

      yield put(createAction('updateState')({ list }))
    },
    *loadMoreBills({payload}, { call, put }) {
      console.log('_loadMoreBills')
      const list = yield call(billService.getBillList, payload)
      yield put(createAction('loadMoreBills')({ list }))
    },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("loadBills")
       dispatch({ type: 'loadBills',payload:{page: 1} })
    }
  },
}
