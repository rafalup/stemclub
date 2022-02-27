import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";
/* import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export class  Carrossel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "430px", color: "#fff", backgroundColor:"black" }}>this is slide 1</div>
        <div style={{ height: "430px", color: "#fff",backgroundColor:"black" }}>this is slide 2</div>
        <div style={{ height: "430px", color: "#fff",backgroundColor:"black" }}>this is slide 3</div>
      </Carousel>
    );
  }
}
export default Carrossel;