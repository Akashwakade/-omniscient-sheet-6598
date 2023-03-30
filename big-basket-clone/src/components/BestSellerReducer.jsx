const BestSellerReducer=(state,action)=>{
    switch(action.type){
       case "FETCHLOADING":{
       return{
           loading:true,
           error:false,
           data:[]
       } 

       }
       case"FETCHSUCCESS":{
           return{
               loading:false,
               error:false,
               data:action.payload
           } 
       }
       case"FETCHERROR":{
           return{
               loading:false,
               error:true,
               data:[]
           } 
       }
       default:{
           throw new Error("action not defined")
       }
    }
}
export default BestSellerReducer