import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #2b1d0e;
  box-shadow: 0px 1px 5px 2px #2b1d0e;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 0px 20px;
  height: 50px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "brown" : "transparent")};
  transition: border-bottom 0.5s linear;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/ingredient"}>
        <SLink to="/ingredient">Ingredient</SLink>
      </Item>
    </List>
  </Header>
));
