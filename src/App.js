import { useEffect, useState } from "react";
import React from 'react';
import { Layer, Stage, Image } from "react-konva";
import "./styles.css";
import  Rectangle  from "./components/Rectangle";
import FindLocationText from "./components/FindLocationText";

const URLImage = ({ x, y, src }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
      loadImage();
  }, [src]);
  const loadImage = () => {
      let img = new window.Image();
      img.src = src;
      img.onload = () => {
          setImage(img);
      };
  };
  return <Image x={x} y={y} image={image} width={500} height={500} />;
};

export default function App() {
  const initialValues = FindLocationText();
  const src_url = "https://quayso.vn/img/AnhVongQuay/Mau1/Mau1_" + (initialValues.length) + ".png";

  const [rectangles, setRectangles] = React.useState(initialValues);
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e) => {

    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
    if(e.target._id === 13){
      selectShape(null);
    }
  };

  return (
    <div className="App">
      <Stage
        width={500} height={500}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <URLImage
            src={src_url}
            x={0}
            y={0}
          />
          {initialValues.map((rect, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id);
                }}
                onChange={(newAttrs) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}
