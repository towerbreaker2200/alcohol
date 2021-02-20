import React from "react";
import { lookupapi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isIngred: pathname.includes("/ingredient/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isIngred } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/cocktail");
    }
    let result = null;
    try {
      if (isIngred) {
        ({
          data: { ingredients: result },
        } = await lookupapi.lookupIngredient(parsedId));
      } else {
        ({
          data: { drinks: result },
        } = await lookupapi.lookupCocktail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find it" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
