import makeStore from './src/store';
import {startServer as StartServer} from './src/server';


export const store = makeStore();
StartServer(store);

store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});