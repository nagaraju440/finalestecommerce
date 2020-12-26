import {createStore,combineReducers} from 'redux';

var hlo={y:0,shopuserdetails:{},shopuseritems:[],shopuseremail:null,wholeitems:[],selecteditem:null,shopselectedbyuser:"",shopselectedbyuseritems:[],cartitems:[],price:null}
const city=(state,action)=>{
    switch (action.type){
        case 'set':
            state.city=state.city+','+action.payload;
            break;
            case "set1":
                state.city=state.city+','+action.payload;

              break;
        case 'ls':
            state.y=1;
            break;
        case "shopuser":
            state.shopuserdetails=action.payload; 
             break;
        case 'shopitems':
              state.shopuseritems=action.payload;
              break;
        case 'email':
            state.shopuseremail=action.payload;   
            break;
         case 'whole' :
             state.wholeitems=action.payload;
             break; 
         case 'select':
             state.selecteditem=action.payload;   
             break;
         case 'shopsel':
             state.shopselectedbyuser=action.payload;
             break;
         case 'items':         
             state.shopselectedbyuseritems=action.payload;  
             break;
         case 'addingtocart':
             state.cartitems=state.cartitems.concat(action.payload) ;
             var l=parseInt(action.payload.cost)
             state.price=state.price+l;
             break;
         case 'justdelete':
            //  alert(x)
            var x;
            // console.log("hloooooooooooooooooooo",state.cartitems.length)

            for(var i=0;i<state.cartitems.length;i++){
                if(state.cartitems[i]==action.payload ){

                    x=i;
                   console.log(x)
                   var l=parseInt(action.payload.cost)
             state.price=state.price-l;
                    break;
                }
            }
            state.cartitems.splice(x,1);
            

             break;                    
    }
    return state;   

}










const store1=createStore(city,hlo);

store1.subscribe(()=>{
    // console.log(store1.getState(),"hloooooooooo")
}
)

export default store1;