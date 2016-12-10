import Vue from 'vue'
import {backendAPI} from '../_helpers/config'

export const usersService = {
  getUsers(data) {
    return Vue.http.get(`${backendAPI}/users/`)
  }
}
