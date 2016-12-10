import Vue from 'vue'
import {backendAPI} from '../_helpers/config'

export const signinService = {
  signIn(data) {
    return Vue.http.post(`${backendAPI}/authenticate/`, data)
  }
}
