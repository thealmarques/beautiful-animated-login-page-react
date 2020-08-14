import { User } from "../../models/user.models";
import { Action } from "redux";
import { setUserType } from "../actions/user.actions";

interface UserActions extends Action {
    payload: {
        username: string;
    }
}

export const userInitialState: User = {
    username: ''
}

export const userState = (state: User = userInitialState, action: UserActions): User => {
    switch (action.type) {
        case setUserType:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}