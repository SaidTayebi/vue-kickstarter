import syncActionCreator from './syncActionCreator';

export default function promiseActionCreator({commit}, promiseToExecute, moduleName) {
  moduleName = moduleName.toUpperCase();
  const requestAction = syncActionCreator(`${moduleName}_REQUEST`, 'payload');
  const successAction = syncActionCreator(`${moduleName}_SUCCESS`, 'payload');
  const failedAction = syncActionCreator(`${moduleName}_FAILED`, 'error');

  commit(requestAction(promiseToExecute));
  return promiseToExecute
    .then(response => {
      return response.json()
    })
    .then(data => {
      if (data.success) {
        commit(successAction(data))
      } else {
        commit(failedAction(data))
      }
    })
    .catch(response => {
      return response.json().then(error => {
        commit(failedAction(error))
      })
    })
}
