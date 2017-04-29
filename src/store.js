import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import reducer from 'reducers'
import rootSaga from 'sagas'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const routerMiddleware = createRouterMiddleware(browserHistory)

export default createStore(
  reducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware,
      logger
    )
  )
)

sagaMiddleware.run(rootSaga)