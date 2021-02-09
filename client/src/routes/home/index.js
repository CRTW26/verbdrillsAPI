import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>verbdrills API</h1>
		<p>The verbdrills API provides access to a database of over 600 Spanish verbs with each verb conjugated 18 ways. To get started using the API sign-up
            for an account and registed your app to generate a key to allow you access to the endpoints. 
        </p>
	</div>
);

export default Home;
