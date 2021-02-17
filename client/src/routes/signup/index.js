import { h } from 'preact';
import style from './style.css';

const Signup = () => (
    <div class={style.signup}>
        <form>
        <h1>Register</h1>
        <input type="email" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <input type="password" placeholder="Confirm Password" required></input>
        <input type="submit" value="Register" />
    </form>
    </div>
);

export default Signup;