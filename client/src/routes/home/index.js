import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>verbdrills API</h1>
		<p>
            The verdrills API provides access to one of the largest databases of conjugated Spanish verbs,
            as well as lists of verbs grouped according to type and tense.
        </p>
        <p>
            To view the available endpoints and see a sample response <a href='endpoints'>click here</a>. 
        </p>
        <p>
            To access the API you must sign-up for an account and provide a description of your usage to generate 
            an API key. 
        </p>
	</div>
);

export default Home;
