import { createStore, compose } from 'redux';
import reducer from '../reducers/reducers';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(reducer, compose(extension));

export default store;