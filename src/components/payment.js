import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Alert} from 'react-bootstrap';
import { Pay } from './../actions/payments.js';
import FieldGroup from './field-group.js'
import './payment.css';


class Payments extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            email: '',
            name: '',
            amount: '',
            show: true
        };
        this.changeHandle = this.changeHandle.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
    }

    changeHandle(e){
        this.setState({[e.target.id]: e.target.value});
    }

    submit(){
        this.setState({ show: true });
        this.props.pay(this.state);
    }
    
    handleDismiss() {
        this.setState({ show: false });
    }
    
    paymentRecieved(){
        if(this.props.paymentStatus.paymentId && this.state.show){
            return(
                <div className="payment-status">
                    <Alert bsStyle="success" onDismiss={this.handleDismiss} closeLabel="close">
                        {this.props.paymentStatus.paymentSuccess} Your transaction id is: <strong>{this.props.paymentStatus.paymentId}</strong>
                    </Alert>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                {this.paymentRecieved()}
                <form className="payment-section">
                    <FieldGroup id="name" value={this.state.name} onChange={this.changeHandle} type="text" label="Name" placeholder="Name" required />
                    <FieldGroup id="email" value={this.state.email} onChange={this.changeHandle} type="email" label="Email" placeholder="Email" required />
                    <FieldGroup id="mobile" value={this.state.mobile} onChange={this.changeHandle} type="number" label="Mobile Number" placeholder="Mobile Number" required />
                    <FieldGroup id="amount" value={this.state.amount} onChange={this.changeHandle} type="number" label="Payment Amount" placeholder="Amount" required />
                    <Button type="button" onClick={() => this.submit()} className="btn btn-primary">Pay</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        paymentStatus: state.payments
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pay: Pay
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);