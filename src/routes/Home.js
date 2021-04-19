import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
// state갖기위해 class component가질 필요없다!!! react hook이라는 것 때문에
// setState()안에 state추가는 자유 / 하지만 state안에 모든 default값 선언할 필요는 없음
// axios : fetch위에 있는 작은 layer
// yts api는 불법사이트로 계속url바껴서 니꼬가 만든 url사용함.

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //  axios.get은 오래걸림 / 시간필요해서 async await넣음 /그래서 axios끝날때까지 기다리고 계속함/ JS꺼임
  //  async비동기 : "이걸 기다려라"
  //  함수내부 = 뭘기다려? axio? "응"
  // const movies.data.data.movies가 아니라 단축하기 {data: {data: {movies}}}

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // this.setState({movies(state에서온):movies(axios에서온)})을 단축해서 ({movies})
  };
  componentDidMount() {
    this.getMovies();

    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);      //setTimeout은 js꺼임/ 6초후 동작
  }
  render() {
    const { isLoading, movies } = this.state; //state에서 isLoading,movies가져오기
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id} //key가 필요해서 중복없는 id로 넣음
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
    // 로딩중(데이터 fetch하고) : 로딩끝나면 map만들어 movie render하기
    // 리액트가 class component랑 js class랑 혼동해서 classname사용
  }
}

export default Home;
