import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      credits: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      button: false,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let credits = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: credits } = await moviesApi.credits(parsedId));
        console.log(credits);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credits } = await tvApi.credits(parsedId));
        console.log(credits);
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  handleButton = (event) => {
    this.setState({
      button: !this.state.button,
    });
  };
  render() {
    const { result, credits, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        credits={credits}
        error={error}
        loading={loading}
        button={this.state.button}
        handleButton={this.handleButton}
      />
    );
  }
}
