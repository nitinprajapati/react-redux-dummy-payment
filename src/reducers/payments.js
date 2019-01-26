const uuidv1 = require('uuid/v1');

const initialState = {
    paymentError: '',
    paymentSuccess: '',
    paymentId: ''
};

const DoPayment = (state, action) => {
    let payments = GeneratePaymentId(action.payload.amount, action.payload.mobile);
    if(payments.status === true){
        return {
            ...state,
            paymentSuccess: payments.message,
            paymentId: payments.paymentId
        }
    }
    else {
        return {
            ...state,
            paymentError: payments.message
        }
    }
}

const GeneratePaymentId = (amount, mobile) => {
    if(mobile.length !== 10){
        return {
            status: false,
            message : `We regret to inform you that payment of ${amount}$ can not be proceed. Please verify your number and try again.`
        }
    }
    else{
        return {
            status: true,
            message : `We have successfully recieved payment of ${amount}$ .`,
            paymentId : uuidv1()
        }
    }
}

export default (state=initialState, action) => {
    switch(action.type){
        case "PAY": return DoPayment(state, action);
            
        default: return state;
    }
};