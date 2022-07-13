import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  { id: 1, post: 'Hi. how are U?', likesCount: 12 },
  { id: 2, post: 'It\' my firs post', likesCount: 15 },
]

let dialogs = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' },
  { id: 4, name: 'User4' },
  { id: 5, name: 'User5' },
]
let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'goodbye' },
  { id: 3, message: 'no' },
  { id: 4, message: 'see u soon' },
  { id: 5, message: 'ok' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
