import { Component } from "react";

export default class Producto extends Component {
  render() {
      const {producto} = this.props
    return (
      <div>
          <img alt={producto.name} src={producto.img}/>
      </div>
    );
  }
}
