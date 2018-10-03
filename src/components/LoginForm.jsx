import React from 'react';
import {glossary} from '../data/glossary';

export const  LoginForm = ({password, login, error, onHandleLogin, onHandlePassword, onHandleSubmit}) => {
    return (
        <div className="loginOuter">
            <form method="post" action="" className="login" onSubmit={(e) => onHandleSubmit(e)}>
                <p>
                    <label htmlFor="login">{glossary.login}:</label>
                    <input type="text" name="login" id="login" value={login} onChange={onHandleLogin} />
                </p>

                <p>
                    <label htmlFor="password">{glossary.password}:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => onHandlePassword(event)} />
                </p>

                <p className="login-submit">
                    <button type="submit" className="login-button">{glossary.submit}</button>
                </p>
                {
                    error ? <p className="login-error">{glossary.invalidAuth}</p> : null
                }
                
            </form>
      </div>
    )
}