import React from "react";
import { Button, Form } from "react-bootstrap";

class Person extends React.Component {
  state = {
    FullName: "Karama Mrakben",
    Bio: "Currently a student at GOMYCODE",
    Profession: "student",
    Image: "https://thumbs.dreamstime.com/b/flat-young-attractive-woman-high-tech-world-concept-girl-character-mobile-device-augmented-reality-modern-future-156326570.jpg",
  };

  // componentDidMount
  componentDidMount() {
    console.log("Counter Component did mount");
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("Counter Component wil unmount");
  }

  // componentDidUpdate
  componentDidUpdate(prevprops, prevstate) {
    console.log("Counter Component did update");
    console.log(prevprops, prevstate);
  }

  render() {
    console.log("render");
    return (
      <div className="Bio">
        <img src={this.state.Image}></img>
        <h1>FullName:{this.state.FullName}</h1>
        <h2>Bio:{this.state.Bio}</h2>
        <h2>Profession:{this.state.Profession}</h2>
      </div>
    );
  }
}
export default Person;