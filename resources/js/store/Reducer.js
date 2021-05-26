const Reducer = (state, action)=>{
    switch (action.type){
        case 'ADD_PRODUCT':{
                let exist = state.products.filter(obj=>{
                    if(obj.id == action.payload.id){
                        return obj
                    }
                })
                if(exist.length == 0){
                    return{
                        ...state,
                        products: [...state.products, action.payload]
                    }
                }else{
                    return state
                }
        }
        case 'REMOVE_PRODUCT':{
            let newState = state.products.filter(obj=>{
                if(obj.id != action.payload.id){
                    return obj
                }
            })
            return {
                ...state,
                products: newState
            }
    }
    case 'SET_TARGET':{
        return {
            ...state,
            target: action.payload
        }
}
    }
}
export default Reducer;