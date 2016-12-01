export default function mutationsCreator(moduleName, keyForData = 'data') {
  moduleName = moduleName.toUpperCase()
  const requestAction = `${moduleName}_REQUEST`
  const successAction = `${moduleName}_SUCCESS`
  const failedAction = `${moduleName}_FAILED`

  return {
    [requestAction] (state) {
      state.loading = true
    },
    [successAction] (state, mutation) {
      state[keyForData] = mutation.payload.results
      state.count = mutation.payload.count
      state.next = mutation.payload.next
      state.previous = mutation.payload.previous
      state.loading = false
      state.success = true
    },
    [failedAction] (state, mutation) {
      state.success = false
      state.loading = false
      state.error = mutation.error.detail
      console.error(`Error while retrieving topics: ${mutation.error.detail}`)
    }
  }
}
