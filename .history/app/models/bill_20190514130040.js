import { createAction, NavigationActions, Storage } from '../utils'
import * as billService from '../services/bill'
import { delay } from '../utils'

export default {
  namespace: 'bill',
  state: {
    page: 1,
    pageSize: 10,
    loading: 10,
    list: [{
      data: []
    }],
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    loadMore(state, { payload }) {
      // console.log( {...state, ...list, ...page})

      console.log('loadMoreBills reducers')
      console.log(payload)
      let list = {
        list: [
          {
            data: state.list[0].data.concat(payload.list[0].data)
          }

        ]
      };
      let page = { page: payload.page }

      return { ...state, ...list, ...page }
    }
  },
  effects: {
    *loadBills({ payload }, { call, put }) {

      const list = yield call(billService.getBillList, payload)

      yield put(createAction('updateState')({ list }))
    },
    *loadMoreBills({ payload }, { call, put }) {
      console.log('loadMoreBills effects');
      console.log(payload);
      const list = yield call(billService.getBillList, payload)
      yield put(createAction('loadMore')({ list, page: payload.page }))
    },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("loadBills")
      dispatch({ type: 'loadBills', payload: { page: 1 } })
    }
  },
}
