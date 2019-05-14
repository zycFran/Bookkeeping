import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import { delay } from '../utils'

export default {
  namespace: 'bill',
  state: {
    login: false,
    loading: true,
    list: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *loadStorage({payload}, { call, put }) {
      const login = yield call(authService.login, payload)
      yield put(createAction('updateState')({ loading: false }))
    },
    // *login({ payload }, { call, put }) {
    //   yield put(createAction('updateState')({ fetching: true }))
    //   const login = yield call(authService.login, payload)
    //   if (login) {
    //     yield put(NavigationActions.back())
    //   }
    //   yield put(createAction('updateState')({ login, fetching: false }))
    //   Storage.set('login', login)
    // },
    // *logout(action, { call, put }) {
    //   yield call(Storage.set, 'login', false)
    //   yield put(createAction('updateState')({ login: false }))
    // },
  },
  subscriptions: {
    setupss({ dispatch }) {
      console.log("dispatch")
       dispatch({ type: 'loadStorage' })
    }
  },
}
