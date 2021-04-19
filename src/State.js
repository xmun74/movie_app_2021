// import React from 'react';

// State
// - 리액트는 class App component의 render mothod를 자동실행함
// - state는 Object다 / this.setState로 새로운 state받아옴 / 동적인 데이터
// - setState 호출시=> 리액트는 state를 refresh하고=> 새로운 state와 함께 render function을 호출함

class App extends React.Component{
  constructor(props) {
    super(props)
    console.log("constructor:render전에 호출/ js에서 옴")
  }
  state = {
    count: 0
  };
  add=() => {
    this.setState(current => ({ count : current.count + 1 })); 
    //this.setState({ count : this.state.count - 1 })
    // this.stste.count~ 이렇게 하는건 좋지 않음 나중에 성능문제생김. setState에서 this사용말고 current사용추천
    // current 로 현재 state얻기
    // this.setState(current => ({count : current.count + 1}));  객체 반환하는 경우 '=> ({})'
    // this.setState(current => {return current.count += 1});  return쓰는 경우 '=> {}'
  };
  minus=() => {
    this.setState(current => ({ count : current.count - 1 }));
  };

  componentDidMount() {
    // 이 component는 처음 render됐다는 뜻
    console.log("component rendered");
  }
  componentDidUpdate() {
    // component가 setState로 업데이트시 호출됨
    console.log("I just updated");
  }
  componentWillUnmount() {
    // component가 떠날떄 호출됨
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("renderring")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// export default App;