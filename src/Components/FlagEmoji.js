import React from "react";
import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";

const FlagEmoji = ({ country }) => (
  <ReactCountryFlag
    className="emojiFlag"
    countryCode={country}
    style={{
      fontSize: "2em",
      lineHeight: "2em",
    }}
    aria-label="United States"
  />
);

FlagEmoji.propTypes = {
  country: PropTypes.string,
};

export default FlagEmoji;
