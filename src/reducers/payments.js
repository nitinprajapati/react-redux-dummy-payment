const uuidv1 = require('uuid/v1');

const initialState = {
    paymentError: '',
    paymentSuccess: '',
    paymentId: ''
};

const DoPayment = (state, action) => {
    let payments = GeneratePaymentId(action.payload.amount);
    return {
        ...state,
        paymentSuccess: payments.message,
        paymentId: payments.paymentId
    }
}

const GeneratePaymentId = (amount) => {
    return {
        message : `We have successfully recieved payment of ${amount}$ .`,
        paymentId : uuidv1()
    }
}

export default (state=initialState, action) => {
    switch(action.type){
        case "PAY": return DoPayment(state, action);
            
        default: return state;
    }
};