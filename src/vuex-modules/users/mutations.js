import mutationsCreator from '../_helpers/mutationsCreator'

import {GET_USERS} from './constants'

export default {
  ...mutationsCreator(GET_USERS)
}
