/**
 * Created by roc on 23/09/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
require('./main.scss');

ReactDOM.render(<App />, document.getElementById('container1'));

if (module.hot) {
    module.hot.accept();
}