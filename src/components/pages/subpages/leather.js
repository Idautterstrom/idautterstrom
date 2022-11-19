import React from "react";
import styled from "styled-components";
import Green from "../../../img/Greenbag.JPG";
import Black from "../../../img/Blackbag.JPG";
import Computercase from "../../../img/Computercase.JPG";

const Leather = () => {
  return (
    <section>
      <div>
        <div>
          <img src={Green} alt="Green" />
        </div>
        <div>
          <img src={Black} alt="Black" />
        </div>
        <div>
          <img src={Computercase} alt="Computercase" />
        </div>
      </div>
    </section>
  );
};

export default Leather;
