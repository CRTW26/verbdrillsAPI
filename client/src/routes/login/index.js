import { h } from 'preact';
import style from './style.css';

const Login = () => (
    <div class={style.login}>
        <form> 
            <h1>Login</h1>
            <input type="email" placeholder="Email" required></input>
            <input type="password" placeholder="Password" required></input>
            <input type="submit" value="Login" />
            <a href="/signup"><p>Not a user?</p></a>
        </form>
    </div>
);

export default Login; 