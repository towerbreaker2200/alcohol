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
      while (this.state.randomCocktails.length < 3) {
        const {
          data: { drinks: randomcoctail },
        } = await randomapi.randomAlcohol();
        this.setState({
          randomCocktails: this.state.randomCocktails.concat(randomcoctail),
        });
      }
    } catch {
      this.setState({ error: "Can't find it" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSubmit = () => {
    const { name } = this.state;
    if (name !== "") {
      this.searchByName();
    }
  };

  searchByName = async () => {
    const { name } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { drinks: cocktailResult },
      } = await searchapi.searchCocktailName(name);
      this.setState({ cocktailResult });
    } catch {
      this.setState({ error: "Can't find result" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { randomAlcohol, name, cocktailResult, error, loading } = this.state;
    return (
      <HomePresenter
        randomAlcohol={randomAlcohol}
        name={name}
        cocktailResult={cocktailResult}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
