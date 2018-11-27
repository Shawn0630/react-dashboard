import { DvaAction, DvaModel } from "./DvaModel";

interface UserState {
   loggedIn: boolean;
}
const userModel: DvaModel<UserState> = {
    namespace: "user",
    state: {
        loggedIn: false
    },
    reducers: {
        login: (state: UserState, action: DvaAction<{}>): UserState => {
            return {
                ...state,
                loggedIn: true
            };
        },
        logout: (state: UserState, action: DvaAction<{}>): UserState => {
            return {
                ...state,
                loggedIn: false
            };
        },
    }
};
export { UserState, userModel };
