import { h } from 'preact';
import style from './style.css';

const Signup = () => {
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
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