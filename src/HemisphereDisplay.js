import React from "react";
import northpic from "./image/northern.jpg"
import southpic from "./image/southern.jpg"

const hemisphereConfig={
    Northern:{
        text:"It is northern hemisphere",
        picture:northpic
    },
    southern:{
        text:"It is southern hemisphere",
        picture:southpic
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere=latitude>0 ? "Northern":"southern"
    const { text , picture}=hemisphereConfig[hemisphere]
  return(
    <div>
        You are in {text}
        <img src={picture}  alt="not a picture"/>
    </div>
  );
};


export default HemisphereDisplay;