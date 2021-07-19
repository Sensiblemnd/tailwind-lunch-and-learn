import { Component } from "react";
import "./app.styles.scss";
import Card from "./components/card";
import Card2 from "./components/card2";

class App extends Component {
  render() {
    return (
      <>
        <Card />
        <Card2 />
      </>
    );
  }
}

export default App;
