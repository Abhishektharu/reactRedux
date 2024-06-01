const initialState = {
    count: 0,
};

const counter = (initialState, actions) =>{
    switch (actions.type) {
        case 'INCREMENT':   
            return {...state,
            count: state.count++ };
        
        case 'DECREMENT':
            return {
                ...state, 
                count: state.count--,
            }
        default:
            return {
                state
            };
    }
}

export default counter;