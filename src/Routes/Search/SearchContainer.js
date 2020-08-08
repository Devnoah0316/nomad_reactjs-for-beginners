import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResult: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResult },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResult });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResult, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
