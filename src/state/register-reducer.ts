type InitialStateType = any
let initialState = "";

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "xxx" : {
            return state
        }
        default: {
            return state
        }
    }
}

type ActionsType = any