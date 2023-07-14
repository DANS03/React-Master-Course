import React from 'react';
import  ReactDOM  from 'react-dom/client';
//import { App } from './FirstApp';
//import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css'
//<App title="Hello I'm a prop!" subtitle={ 123 } ></App>
//<CounterApp value={ 123 }></CounterApp>

ReactDOM.createRoot( document.getElementById('root') ) .render(

    <React.StrictMode>
       <CounterApp value={ 123 }></CounterApp>
    </React.StrictMode>

);
