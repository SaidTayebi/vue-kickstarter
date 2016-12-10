import {signinService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'
import {SIGN_IN} from './constants'

const actions = {
  signIn(store, data) {
    return promiseActionCreator(store, signinService.signIn(data), SIGN_IN)
  }
}

export default actions
