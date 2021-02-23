import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 10px 0px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 100%;
  background-size: cover;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 24px;
`;

const Inst = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;

const Menu = ({ id, imageUrl, name, instruction, isIngred = false }) => (
  <Link to={isIngred ? `/ingredient/${id}` : `/cocktail/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={isIngred ? imageUrl : imageUrl + "/preview"} />
      </ImageContainer>
      <TextArea>
        <Name>{name}</Name>
        <Inst>{instruction}</Inst>
      </TextArea>
    </Container>
  </Link>
);

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  instruction: PropTypes.string,
  isIngred: PropTypes.bool,
};

export default Menu;
