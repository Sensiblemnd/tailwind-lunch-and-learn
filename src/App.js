import { Component } from "react";
import "./app.styles.scss";
import Card from "./components/card";
import Grids from "./components/grids";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <div className="p-5">
        <Card />
        <h2 className="my-4">grids</h2>
        <Grids />
        <h2 className="my-4">Animations</h2>
        <Button>Animated Button</Button>
      </div>
    );
  }
}

export default App;
