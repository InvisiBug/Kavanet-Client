// Components
import React from "react";
import Container from "react-bootstrap/Container";
import { apiPost } from "../../../../Helpers/fetch";

import ColourWheel from "../../../Ui Library/ColourWheel/ColourWheel";

class ScreenLEDs extends React.Component {
  constructor() {
    super();

    this.state = {
      titleColour: "white",
    };
  }

  componentWillMount = () => this.getCurrentColour();

  getCurrentColour = () => {
    var cache = JSON.parse(localStorage.getItem("Screen LEDs"));
    try {
      this.setState({ titleColour: "white" });
      this.setState({
        colour: "rgb(" + cache.red + ", " + cache.green + ", " + cache.blue + ")",
      });
    } catch (error) {
      this.setState({ titleColour: "orangered" });
      this.setState({ colour: "rgb(" + 0 + ", " + 0 + ", " + 0 + ")" });
    }
  };

  colourUpdate = (rgb) => {
    var cache = JSON.parse(localStorage.getItem("Screen LEDs"));
    // console.log(cache.ambientMode);

    // console.log("Here");

    this.setState({ colour: rgb });

    var a = rgb.split("(")[1].split(")")[0];
    a = a.split(",");
    var colours = a.map(function (x) {
      return parseInt(x);
    });

    apiPost("/api/screenLEDs/update", {
      red: colours[0],
      green: colours[1],
      blue: colours[2],
      ambientMode: cache.ambientMode,
    });
  };

  render() {
    return (
      <div className="screenLEDsColourWheel">
        <ColourWheel
          name={"screenLEDs"}
          radius={125}
          padding={10}
          lineWidth={40}
          onColourSelected={(rgb) => this.colourUpdate(rgb)}
          onRef={(ref) => (this.colourWheel = ref)}
          spacers={{
            colour: "whitesmoke",
            shadowColour: "grey",
            shadowBlur: 0,
          }}
          preset
          presetColour={this.state.colour}
          animated
        />
      </div>
    );
  }
}

export default ScreenLEDs;

// Radius    - Overall Size
// Padding   - White Line Width
// LineWidth - Colour tile thickness
// Middle is drawn behind everything

// All these variables depend on each other so it takes a while to tune
