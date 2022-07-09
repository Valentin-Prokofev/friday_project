
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {loginReducer} from "./login-reducer";
import {registerReducer} from "./register-reducer";
import {passwordRecoveryReducer} from "./password-recovery-reducer";
import {newPasswordReducer} from "./new-pqssword-reducer";
import {profileReducer} from "./profile-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    passwordRecovery: passwordRecoveryReducer,
    newPassword: newPasswordReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
