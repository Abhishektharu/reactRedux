import {createStore} from 'react-redux'

import counter from './reducers'

const store = createStore(counter);

export default store;

