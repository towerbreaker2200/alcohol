import React from "react";
import { randomapi, searchapi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    randomCocktails: [],
    name: "",
    cocktailResult: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      let tempArray = [];
      while (tempArray.length < 3) {
        const {
          data: { drinks: randomcoctail },
        } = await randomapi.randomAlcohol();
        tempArray = tempArray.concat(randomcoctail);
      }
      this.setState({
        randomCocktails: this.state.randomCocktails.concat(tempArray),
      });
    } catch {
      this.setState({ error: "Can't find it" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    if (name !== "") {
      this.searchByName();
    }
  };

  updateName = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ name: value });
  };

  searchByName = async () => {
    const { name } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { drinks: cocktailResult },
      } = await searchapi.searchCocktailName(name);
      if (cocktailResult === null) {
        throw Error();
      }
      this.setState({ cocktailResult });
    } catch {
      this.setState({ error: "Can't find result" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      randomCocktails,
      name,
      cocktailResult,
      error,
      loading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        randomCocktails={randomCocktails}
        name={name}
        cocktailResult={cocktailResult}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateName={this.updateName}
      />
    );
  }
}
