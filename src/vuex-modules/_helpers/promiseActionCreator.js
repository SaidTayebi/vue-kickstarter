import syncActionCreator from './syncActionCreator';

export default function promiseActionCreator({commit}, promiseToExecute, moduleName) {
  moduleName = moduleName.toUpperCase();
  const requestAction = syncActionCreator(`${moduleName}_REQUEST`, 'payload');
  const successAction = syncActionCreator(`${moduleName}_SUCCESS`, 'payload');
  const failedAction = syncActionCreator(`${moduleName}_FAILED`, 'error');

  commit(requestAction(promiseToExecute));
  return promiseToExecute
    .then(response => response.json())
    .then(data => {
      commit(successAction(data))
    })
    .catch(response => {
      return response.json().then(error => {
        commit(failedAction(error))
      })
    })
}
