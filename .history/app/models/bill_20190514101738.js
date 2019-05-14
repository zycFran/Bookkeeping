import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
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
  },
  effects: {
    *loadBills({payload}, { call, put }) {
      const login = yield call(authService.login, payload)
      yield put(createAction('updateState')({ loading: false }))
    },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("dispatch")
       dispatch({ type: 'loadBills' })
    }
  },
}
