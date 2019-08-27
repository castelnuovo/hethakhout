import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import { unregister } from 'register-service-worker';

// import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));

unregister();
