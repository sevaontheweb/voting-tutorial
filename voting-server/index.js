import makeStore from './src/store';
import {startServer as StartServer} from './src/server';


export const store = makeStore();
StartServer(store);
