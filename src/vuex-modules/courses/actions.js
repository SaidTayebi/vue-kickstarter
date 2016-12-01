import {coursesService} from '../courses/services'
import promiseActionCreator from '../_helpers/promiseActionCreator'
import {GET_COURSES} from './constants'

const actions = {
  getCourses(store) {
    return promiseActionCreator(store, coursesService.getCourses(), GET_COURSES)
  }
}

export default actions
