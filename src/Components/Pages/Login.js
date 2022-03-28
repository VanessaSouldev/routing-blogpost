import React from 'react';
import { useHistory } from 'react-router-dom';


const Login = ({toggleAuth}) => {
    const history = useHistory()

    function signIn() {
        toggleAuth(true)
        history.push('/')


    }
    return (
        <section>
            <h1>Druk op de knop om in te loggen!</h1>
            <button type="button" onClick={signIn}>Inloggen</button>
        </section>
    );
};

export default Login;