import { Component } from "react";
import "./app.styles.scss";
import FlexCard from "./components/flex-card";
import Grids from "./components/grids";
import Button from "./components/button";
import GridCard from "./components/grid-card";

class App extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="my-4 ">
          <FlexCard />
        </div>
        <div className="my-4 ">
          <GridCard />
        </div>

        <h2 className="my-4">grids</h2>
        <Grids />
        <h2 className="my-4">Animations</h2>
        <Button>Animated Button</Button>
      </div>
    );
  }
}

export default App;
