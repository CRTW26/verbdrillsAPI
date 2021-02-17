import { h } from 'preact';
import style from './style.css';

const Signup = () => {
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);

        const url = 'http://localhost:3000/users/';
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target[0].value,
                password: event.target[1].value
            })
        };
        fetch(url, options)
            .then(response => {
                console.log(response.status);
                console.log(response);
            });
    }

    return(
        <div class={style.signup}>
            <form onSubmit={(event) => submitHandler(event)}>
                <h1>Register</h1>
                <input type="email" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>
                <input type="password" placeholder="Confirm Password" required></input>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Signup;