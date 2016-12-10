import Vue from 'vue'
import {backendAPI} from '../_helpers/config'

export const signupService = {
  signUp(data) {
    return Vue.http.post(`${backendAPI}/users/`, data)
  }
}
