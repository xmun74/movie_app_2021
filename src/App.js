import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//exact="true"는 path="/"이거 아니면 렌더링 안한다는 뜻.
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>

    //  리액트 라우터 url 설명
    // <HashRouter>
    //   <Route path="/home">
    //     <h1>Home</h1>
    //   </Route>
    //   <Route path="/home/intro">
    //     <h1>Intro</h1>
    //   </Route>
    //   <Route path="/about">
    //     <h1>About</h1>
    //   </Route>
    // </HashRouter>
    // 라우터는 url"/home"을 가져와서 다 비교한다. 그래서 "/home"이 들어있는 라우터"/home/intro"까지 렌더링한다.
    // 그래서 맨위의 라우터처럼 exact="true"를 써야 ("/"을 포함한 "/about")도 렌더링하지않고 "/" 한개만 렌더링한다.

    // Navigaion Link 설명
    // 네비 링크를 쓴다면 라우터태그 안에서 써야 한다.

    // HashRouter 는 /#/이 url에 표시됨
    // BrowserRouter 는 /이 url에 표시됨 --github pages에 설정하기 짜증남. 그래서 해쉬라우터사용함
  );
}

export default App;
