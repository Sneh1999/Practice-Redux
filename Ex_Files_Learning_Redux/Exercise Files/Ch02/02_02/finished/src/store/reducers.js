import C from '../constants'

export const goal = (state=10, action) => {
    action.type === C.SET_GOAL ? parseInt(action.payload) : state
   

}

export const skiDay = (state=null , action) => {

    if(action.type===C.ADD_DAY){
        return action.payload
    }
    else{
        return state
    }
}

export const errors = (state=[],action) => {

    switch(action.type) {

        case C.ADD_ERROR :
            return [
                ...state,
                action.payload
            ]

        case C.CLEAR_ERROR :
            return state.filter((messages,i) => i!==action.payload )


        default:
            return state
    }
}

export const allSkiDays = (state=[], action) => {

    switch(action.type){

        case C.ADD_DAY :

        const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)
            return (hasDayAlready) ?
            state :
            [
                ...state,
                skiDay(null,action)
            ]
        
        case C.REMOVE_DAY :
            return state.filter(skiday => skiDay !==action.payload)
        
            default:
               return(state)
    }
}