import React from "react";
import IngredientPresenter from "./IngredientPresenter";
import { searchapi } from "../../api";

export default class extends React.Component {
  state = {
    name: "",
    IngredResult: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
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
      const {
        data: { drinks: IngredResult },
      } = await searchapi.searchIngredientName(name);
      this.setState({ IngredResult });
    } catch {
      this.setState({ error: "Can't find result" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { name, IngredResult, error, loading } = this.state;
    console.log(this.state);

    return (
      <IngredientPresenter
        name={name}
        IngredResult={IngredResult}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
