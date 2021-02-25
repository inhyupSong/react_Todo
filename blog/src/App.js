/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let post = 'Easy data binding';

  let cssExample = { color: 'Red', fontSize: '40px' };

  let [textTitle, titleChange] = useState(['react', 'vue', 'angular']);
  let [like0, likeChange0] = useState(0);
  let [like1, likeChange1] = useState(0);
  let [like2, likeChange2] = useState(0);

  function greatNum() {
    return 'this tis greatNum function!';
  }

  function changingTitle() {
    var newArray = [...textTitle];
    newArray[0] = 'apple';
    titleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={cssExample}> Development Blog </div>
      </div>
      <h4> {greatNum()} </h4>
      <h5> {post} </h5>

      <button onClick={changingTitle}> Click </button>
      <div className="list">
        <h3>
          {' '}
          {textTitle[0]}{' '}
          <span
            onClick={() => {
              likeChange0(like0 + 1);
            }}
          >
            {' '}
            👌{' '}
          </span>{' '}
          {like0}{' '}
        </h3>
        <p>Date: 22.02.2021 </p>
      </div>
      <div className="list">
        <h3>
          {' '}
          {textTitle[1]}{' '}
          <span
            onClick={() => {
              likeChange1(like1 + 1);
            }}
          >
            {' '}
            👌{' '}
          </span>{' '}
          {like1}{' '}
        </h3>
        <p>Date: 22.02.2021 </p>
      </div>
      <div className="list">
        <h3>
          {' '}
          {textTitle[2]}{' '}
          <span
            onClick={() => {
              likeChange2(like2 + 1);
            }}
          >
            {' '}
            👌{' '}
          </span>{' '}
          {like2}{' '}
        </h3>
        <p>Date: 22.02.2021 </p>
      </div>
    </div>
  );
}

export default App;
