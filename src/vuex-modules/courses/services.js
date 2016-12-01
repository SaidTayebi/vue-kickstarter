import Vue from 'vue'
import {backendAPI} from '../_helpers/config'

export const coursesService = {
  getCourses() {
    return Vue.http.get(`${backendAPI}/courses/`)
  }
}
