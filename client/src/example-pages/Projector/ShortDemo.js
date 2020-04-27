import React, { Fragment } from 'react';
import {PrismCode} from "./PrismCode"

const code = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
`

const Demo = () =>  {
		return (
			<Fragment>
				 <PrismCode
				    code={code}
				    language="js"
				    plugins={["line-numbers"]}
				  />
			</Fragment>
		);
}

export default Demo