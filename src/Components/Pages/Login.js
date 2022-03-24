import React from 'react';
import { useHistory } from 'react-router-dom';


const Login = ({isAuth,toggleAuth}) => {
    const history = useHistory()

    function nextPage() {
        history.push('/blog')
        toggleAuth(true)
        console.log(isAuth)

    }
    return (
        <div>
            <button type="button" onClick={nextPage}>inloggen</button>
        </div>
    );
};

export default Login;