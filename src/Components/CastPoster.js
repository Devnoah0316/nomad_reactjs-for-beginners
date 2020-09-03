import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin-top: 3%;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 10%;
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Name = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const CastPoster = ({ imageUrl, character, name }) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require("../assets/noPosterSmall.png")
        }
      />
    </ImageContainer>
    <Name>
      {character.length > 18 ? `${character.substring(0, 18)}...` : character}
      {name.length > 18 ? `${name.substring(0, 18)}...` : name}
    </Name>
  </Container>
);
CastPoster.propTypes = {
  imageUrl: PropTypes.string,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CastPoster;
