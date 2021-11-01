import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    border: "none",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

export default class BubbleAlert extends Component {
  render() {
    return <span style={styles.bubbleAlert}>5</span>;
  }
}
