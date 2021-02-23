import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Menu from "../../Components/Menu";

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

const HomePresenter = ({
  randomCocktails,
  name,
  cocktailResult,
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
          placeholder="Search your cocktail"
          value={name}
          onChange={updateName}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {cocktailResult && cocktailResult.length > 0 && (
            <Section title="Cocktail Result">
              {cocktailResult.map((cocktail) => (
                <Menu
                  key={cocktail.idDrink}
                  id={cocktail.idDrink}
                  imageUrl={cocktail.strDrinkThumb}
                  name={cocktail.strDrink}
                  instruction={
                    cocktail.strInstructions > 100
                      ? `${cocktail.strInstructions.substring(0, 100)}...`
                      : cocktail.strInstructions
                  }
                  isIngred={false}
                />
              ))}
            </Section>
          )}
        </>
      )}

      {randomCocktails && randomCocktails.length > 0 && !cocktailResult && (
        <Section title="Random Cocktail">
          {randomCocktails.map((cocktail) => (
            <Menu
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              imageUrl={cocktail.strDrinkThumb}
              name={cocktail.strDrink}
              instruction={
                cocktail.strInstructions > 100
                  ? `${cocktail.strInstructions.substring(0, 100)}...`
                  : cocktail.strInstructions
              }
              isIngred={false}
            />
          ))}
        </Section>
      )}
      {error && <Error text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  randomCocktails: PropTypes.array,
  name: PropTypes.string,
  cocktailResult: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HomePresenter;
