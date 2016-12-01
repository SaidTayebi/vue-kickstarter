import mutationsCreator from '../_helpers/mutationsCreator'

import {GET_COURSES} from './constants'

export default {
  ...mutationsCreator(GET_COURSES)
}
