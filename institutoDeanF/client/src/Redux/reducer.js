import {GET_ALL_STUDENTS} from "./actionsTypes"
const initialState={
    students:[],


}



const reducer =(state=initialState,action)=>{

switch(action.type){

    case GET_ALL_STUDENTS:
    return{
            ...state,
            students:action.payload
    }



    default:
        return{...state}
}

}


export default reducer