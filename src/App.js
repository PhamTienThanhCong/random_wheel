import React from 'react';
import { useEffect, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import "./styles.css";
import  Rectangle  from "./components/Rectangle";
import  RectangleImg  from "./components/RectangleImg";
import FindLocationText from "./components/FindLocationText";

const URLImage = ({ x, y, rotation, width, height, src }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
      loadImage();
  });
  const loadImage = () => {
      let img = new window.Image();
      img.src = src;
      img.onload = () => {
          setImage(img);
      };
  };
  return <Image x={x} y={y} image={image} width={width} height={height} rotation={rotation} />;
};

export default function App() {
  const initialValues = FindLocationText();
  const initialValueImgaes = FindLocationText();
  const src_url = "https://quayso.vn/img/AnhVongQuay/Mau1/Mau1_" + (initialValues.length) + ".png";

  const [rectangles, setRectangles] = React.useState(initialValues);
  const [selectedId, selectShape] = React.useState(null);
  
  const [Image, setImage] = React.useState(initialValueImgaes);

  const checkDeselect = (e) => {

    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
    console.log(e.target)
    if(e.target.attrs.height === 500){
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
            rotation={0}
            width={500}
            height={500}
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
          {initialValueImgaes.map((rect, i) => {
            return (
                <RectangleImg
                  key={i}
                  shapeProps={rect}
                  isSelected={rect.id_img === selectedId}
                  onSelect={() => {
                    selectShape(rect.id_img);
                  }}
                  onChange={(newAttrs) => {
                    const rects = Image.slice();
                    rects[i] = newAttrs;
                    setImage(rects);
                  }}
                />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}
