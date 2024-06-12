import { combineReducers } from 'redux';
import userReducer from './userReducer';
import debtReducer from './debtReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
    user: userReducer,
    debts: debtReducer,
    payment: paymentReducer,
});

export default rootReducer;