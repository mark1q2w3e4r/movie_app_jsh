import React from 'react';
import Movie from './Movie';

function InnerComponent(){ // 내부 컴포넌트 호출 테스트
  return <h1>Inner Component TEST Sentence</h1>
}

function Car(props){ // 속성값으로 유동적인 컴포넌트 사용
return <div>I Love {props.name} {props.model}. <h3>'{props.model}' is {props.reason} Car.</h3></div>;
}

function germanCar(props){
  console.log(props);
  return <Car name={props.name} model={props.model} reason={props.reason}/>
}
var myFavoriteCar = [
  {
    name: "BMW",
    model: "2Series",
    reason: "Stylish"
  },
  {
    name: "Mercedes",
    model: "CLS Class",
    reason: "Elegance"
  },
  {
    name: "KIA",
    model: "EV6",
    reason: "Innovation"
  }
];

function App() {
  return (
    <div className="App">
      First React App<h1>Hello React!</h1> 
      <Movie />
      <InnerComponent />
      {/*myFavoriteCar.map(function(prop){ // foreach문처럼 속성값에 따라 동적으로..
        return <Car name={prop.name} model={prop.model} reason={prop.reason} />
      })*/}

      <h2>{myFavoriteCar.map(germanCar)/*함수룰 파라미터로 받아주어 return 시 컴포넌트를 그려줌*/}</h2>
    </div>
  ); // 외부 자손 컴포넌트를 불러들일경우 import를 해주지만
     // 같은 파일 내 function 선언으로 컴포넌트 생성 시 바로 호출가능
}

export default App;
