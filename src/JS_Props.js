// import React from 'react';
// import PropTypes from "prop-types";

// 리액트는 컴포낸트 한개만 rendering함/ index.js엔 한개 컴포낸트만 있고/ App.js에 컴포낸트 여러개 사용가능
// <Component명 />
// JSX : JS + HTML의 조합
// props , 리스트명.map
// propTypes

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "1",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "2",
    rating: 5,
  },
  {
    id: 3,
    name: "Ramen",
    image: "3",
    rating: 3.5,
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "4",
    rating: 1,
  },
  {
    id: 5,
    name: "Doncasu",
    image: "5",
    rating: 2.5,
  },
];

// function 컴포낸트명( {fav}쓰거나 props.fav 쓰는 건 같은것임)
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <span>img {picture}</span>
    </div>
  );
}

// .propTypes 체크하는 것 : isRequired면 반드시 요구되는 것/ PropTypes.~.isRequired / 나중에 실수한 것 확인하려고 씀
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// 밑에건 function Component다. 이와 다른 class Component도 있다
function App() {
  return (
    <div>
      {foodILike.map((
        dish // foodILike리스트에 있는 element마다 돌면서(.map) Food컴포넌트 실행
      ) => (
        <Food
          key={dish.id} // <component명 prop(property명)="value" />
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
