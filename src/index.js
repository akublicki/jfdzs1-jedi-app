import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchItem from './routes/search/Search.component';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/search" component={SearchItem} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

