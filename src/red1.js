import {createStore,combineReducers} from 'redux';
const city=(state={city:"gnt"},action)=>{
    switch (action.type){
        case 'set':
            state.city=state.city+','+action.payload;
            break;
            case "set1":
                state.city=state.city+','+action.payload;

              break;
    }
    return state;   

}
const city1=(state={city1:"ind"},action)=>{
    switch (action.type){
        case 'set':
         state.city1=state.city1+','+action.payload;
              break;
    }
    return state;   
}
const time =(state={ss:0,mm:0,hh:0},action)=>{
    switch(action.type){
        case "start":
            state.ss=state.ss+1;
            if(state.ss>60){
                state.ss=0;
                state.mm=state.mm+1;
            }
            break;
         case "stop":
             state.st=state.st;
             break;
    }
    return state;
}
const store=createStore(combineReducers({city,city1,time}));
// store.subscribe(()=>{


//     console.log(JSON.stringify(store.getState()));
// });
store.dispatch({
    type:"set",
    payload:"hyd",
    
})

export default store;