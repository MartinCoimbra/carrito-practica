import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default class Button extends Component {
  render() {
    /* {...this.props} con esto pasamos todas las propiedades que tenemos */
    return <button style={styles.button} {...this.props} />;
  }
}
