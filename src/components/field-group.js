import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup} from 'react-bootstrap';

export const FieldGroup = ({ id, label, help, validationState, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}



export const InputGroupCustom = ({ id, label, help, icon, validationState, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <InputGroup>
                <InputGroup.Addon>{icon}</InputGroup.Addon>
                <FormControl {...props}/>
            </InputGroup>
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
 
    );
}
