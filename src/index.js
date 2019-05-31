
import store from './store/index';

import addArticle from './actions/index'

console.log("getting state");
console.log(store.getState());

console.log("subscibing...");
store.subscribe(() => console.log('Look ma, Redux!!'));

console.log("dispatching....");
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners part 2', id: 2 }) );
console.log("getting the final state...")
console.log(store.getState().articles[1].title);
