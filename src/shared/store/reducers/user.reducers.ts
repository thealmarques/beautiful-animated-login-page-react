import { User } from "../../models/user.models";
import { Action } from "redux";
import { setUserAction } from "../actions/user.actions";

export const userInitialState: User = {
    username: ''
}

export const userState = (state: User = userInitialState, action: Action | any): User => {
    switch (action.type) {
        case setUserAction:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}