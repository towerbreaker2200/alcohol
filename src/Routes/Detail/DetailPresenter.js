import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
`;

const Viewer = styled.div`
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
`;

const TextArea = styled.div`
  padding: 20px;
`;

const Name = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Ingred = styled.div`
  :not(:first-child) {
    padding: 5px 0px;
  }
`;

const Description = styled.div`
  padding: 20px 0px;
`;

const DetailPresenter = ({ result, error, loading, isIngred }) =>
  loading ? (
    <Loader />
  ) : isIngred ? (
    <Container></Container>
  ) : (
    <Container>
      <Viewer>
        <Image bgUrl={result[0].strDrinkThumb} />
        <TextArea>
          <Name>{result[0].strDrink}</Name>
          <Ingred>
            {result[0].strIngredient1} {result[0].strMeasure1}
          </Ingred>
          <Ingred>
            {result[0].strIngredient2} {result[0].strMeasure2}
          </Ingred>
          <Ingred>
            {result[0].strIngredient3} {result[0].strMeasure3}
          </Ingred>
          <Ingred>
            {result[0].strIngredient4} {result[0].strMeasure4}
          </Ingred>
        </TextArea>
      </Viewer>
      <Description>{result[0].strInstructions}</Description>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
