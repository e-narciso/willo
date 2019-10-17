import React from 'react';
import AuthService from '../auth-comps/AuthService';

const AddWisp = () => {

    const addWisp = e =>{
        e.preventDefault();
        new AuthService()
    }

    return (
        <div>
            
        </div>
    );
};

export default AddWisp;