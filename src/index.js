import React from 'react'; // 컴포넌트를 사용해서 HTML처럼 작성하기위해 필요하다. 이를 jsx라고 부른다.
import ReactDOM from 'react-dom';
import App from './App'; // 아래에 alias 개념으로 <App /> 으로 해당내용을 선언했다.

ReactDOM.render(
    <App />, document.getElementById('movie') 
); //<App /> 을 root 라는 ID를 사용하는 태그 안에 넣어서 그려준다. - 이것을 컴포넌트라고 부른다.
   // 컴포넌트(Component)는 HTML 을 반환하는 함수이다.

