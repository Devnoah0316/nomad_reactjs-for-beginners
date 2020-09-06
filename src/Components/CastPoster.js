import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin-top: 3%;
  margin-left: 1%;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  width: 130px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Name = styled.span`
  display: flex;
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
    ${Name} {
      opacity: 1;
    }
  }
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
      <Name>
        {character.length > 18
          ? `Character: ${character.substring(0, 18)}...`
          : `Character: ${character}`}
      </Name>
      <Name>
        {name.length > 18
          ? `Name: ${name.substring(0, 18)}...`
          : `Name: ${name}`}
      </Name>
    </ImageContainer>
  </Container>
);
CastPoster.propTypes = {
  imageUrl: PropTypes.string,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CastPoster;
