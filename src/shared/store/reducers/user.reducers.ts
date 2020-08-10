import { User } from "../../models/user.models";
import { Action } from "redux";
import { setUserType } from "../actions/user.actions";

export const userInitialState: User = {
    username: ''
}

export const userState = (state: User = userInitialState, action: Action | any): User => {
    console.log(action.type);
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