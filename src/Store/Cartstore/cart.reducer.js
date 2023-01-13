


let inititalstate={
    cartdata:[]
}

export function cartreducer(state = inititalstate, { type, payload }) {
    switch (type) {
        case "ADD_DATA": {
            console.log(payload)
            return { ...state, cartdata:payload }
        }
        default: {
            return state;
        }
    }
}