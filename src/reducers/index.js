import {combineReducers} from 'redux';
import paymentsReducer from './payments';

const allReducers = combineReducers({
    payments: paymentsReducer
});

export default allReducers;