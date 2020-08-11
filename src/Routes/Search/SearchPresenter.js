import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResult,
  loading,
  searchTerm,
  handleSubmit,
  error,
}) => null;

SearchPresenter.PropTypes = {
  movieResults: PropTypes.array,
  tvResult: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
