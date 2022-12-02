const { createStore } = require('redux');

// define constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// state
const initialState = {
    count: 0
}

// action - object - type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const resetCounter = () => {
    return {
        type: RESET
    }
}

// reducer
const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }
        default:
            state
    }
}

// store - getState(), dispatch(), subscribe()
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());