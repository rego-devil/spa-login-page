import React from 'react';
import {glossary} from '../data/glossary';
import PropTypes from 'prop-types';

export const  LoginForm = ({password, login, errorMsg, onHandleInput, onHandleSubmit}) => {
    return (
        <div className="loginOuter">
            <form method="post" action="" className="login" onSubmit={(e) => onHandleSubmit(e)}>
                <p>
                    <label htmlFor="login">{glossary.login}:</label>
                    <input type="text" name="login" id="login" value={login} onChange={onHandleInput} data-field-name="login" />
                </p>

                <p>
                    <label htmlFor="password">{glossary.password}:</label>
                    <input type="password" name="password" id="password" value={password} onChange={onHandleInput} data-field-name="password" />
                </p>

                <p className="login-submit">
                    <button type="submit" className="login-button">{glossary.submit}</button>
                </p>
                {
                    errorMsg ? <p className="login-error">{errorMsg}</p> : null
                }
                
            </form>
      </div>
    )
}

LoginForm.propTypes = {
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onHandleInput: PropTypes.func.isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
    errorMsg: PropTypes.string
}