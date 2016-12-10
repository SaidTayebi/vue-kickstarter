import {signupService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'
import {SIGN_UP} from './constants'

const actions = {
  signUp(store, data) {
    return promiseActionCreator(store, signupService.signUp(data), SIGN_UP)
  }
}

export default actions
