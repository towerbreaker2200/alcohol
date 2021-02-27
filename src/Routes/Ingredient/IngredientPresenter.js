import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Menu from "../../Components/Menu";
import Message from "../../Components/Message";

const Container = styled.div``;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 24px;
  width: 100%;
`;

const IngredientPresenter = ({
  name,
  IngredResult,
  error,
  loading,
  handleSubmit,
  updateName,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search your Ingredient"
          value={name}
          onChange={updateName}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {IngredResult && IngredResult.length > 0 && (
            <Section title="Ingredient Result">
              {IngredResult.map((Ingredient) => (
                <Menu
                  key={Ingredient.idIngredient}
                  id={Ingredient.idIngredient}
                  imageUrl={`https://www.thecocktaildb.com/images/ingredients/${Ingredient.strIngredient}-Small.png`}
                  name={Ingredient.strIngredient}
                  instruction={
                    Ingredient.strDescription &&
                    `${Ingredient.strDescription.substring(0, 100)}...`
                  }
                  isIngred={true}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error} />}
      {IngredResult && IngredResult === 0 && (
        <Message text="I can't find it. Try another word." />
      )}
    </Container>
  );
IngredientPresenter.propTypes = {
  name: PropTypes.string,
  IngredResult: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default IngredientPresenter;
