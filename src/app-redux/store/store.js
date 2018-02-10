import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const composeEnhancers = composeWithDevTools({});

export default function configureStore(preloadedState = null) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
    )),
  );
}
