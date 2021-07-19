import { Component } from "react";
import "./app.styles.scss";
import Card from "./components/card";
import Grids from "./components/grids";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <>
        <Card />
        <h2>grids</h2>
        <Grids />
        <h2>Animations</h2>
        <Button>Animated Button</Button>
      </>
    );
  }
}

export default App;
