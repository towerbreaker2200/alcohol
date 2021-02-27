import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ivory;
  font-weight: 600;
  font-size: 36px;
`;

const Message = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
