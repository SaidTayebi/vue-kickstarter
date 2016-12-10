export default function mutationsCreator(moduleName, keyForData = 'data') {
  moduleName = moduleName.toUpperCase()
  const requestAction = `${moduleName}_REQUEST`
  const successAction = `${moduleName}_SUCCESS`
  const failedAction = `${moduleName}_FAILED`

  return {
    [requestAction] (state) {
      state.success = false
      state.loading = true
    },
    [successAction] (state, mutation) {
      state[keyForData] = mutation.payload.data
      state.success = mutation.payload.success
      state.loading = false
      state.error = ''
    },
    [failedAction] (state, mutation) {
      state.success = mutation.error.success
      state.loading = false
      state.error = mutation.error.message
      console.error(`Error in ${moduleName}: ${mutation.error.message}`)
    }
  }
}
