import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = (props) => {
    
    let nav = null; 

    if (props.authenticated[0]) {
        console.log(props.authenticated)
        nav = (
            <nav>
                <Link activeClassName={style.active} href="/">Home</Link>
                <Link activeClassName={style.active} href="/endpoints">Endpoints</Link>
                <Link activeClassName={style.active} href="/login">Logout</Link>
            </nav>
        );
        console.log("logged in")
    } else {
        console.log(props.authenticated)
        nav = (
            <nav>
                <Link activeClassName={style.active} href="/">Home</Link>
                <Link activeClassName={style.active} href="/endpoints">Endpoints</Link>
                <Link activeClassName={style.active} href="/login">Login</Link>
            </nav>
        );
        console.log("not logged in");
    }

    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            { nav }
	    </header>

    );
}

export default Header;
