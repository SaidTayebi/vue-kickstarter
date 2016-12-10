import {usersService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'
import {GET_USERS} from './constants'

const actions = {
  getUsers(store) {
    return promiseActionCreator(store, usersService.getUsers(), GET_USERS)
  }
}

export default actions
