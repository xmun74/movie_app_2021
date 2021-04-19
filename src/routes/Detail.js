import React from "react";
import "./Detail.css";

// function Detail({ location }) {
//   console.log(location);
//   return <span>hello</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        // <div className="movie_detail_back">
        <div className="movie_detail">
          <div
            style={{ backgroundImage: `url(${location.state.poster})` }}
            className="movie_detail_back"
          ></div>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
            className="movie_detail_img"
          ></img>
          <div className="detail_data">
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <ul className="movie__genres">
              {location.state.genres.map((genres, index) => (
                //map은 arg2개 있음(현재item, item number) / map의 각 item은 key필요함 key={index}
                <li key={index} className="genres__genres">
                  {genres}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
