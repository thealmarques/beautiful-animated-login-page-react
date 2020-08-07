import { User } from "../../models/user.models";

export const setUserType = '[USER] Set user';
export const setUserAction = (user: User) => {
    return {
        type: setUserType,
        payload: user
    };
}