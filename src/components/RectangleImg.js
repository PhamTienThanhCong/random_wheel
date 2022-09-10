
import { Transformer, Image } from "react-konva";
import React from 'react';
import useImage from "use-image";

const URLImageIcon = ({ x, y, rotation, width, height, src }) => {
  const [image] = useImage(src);
  return <Image x={x} y={y} image={image} width={width} height={height} rotation={rotation} />;
};


export default function Rectangle({ shapeProps, isSelected, onSelect, onChange }){
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
      if (isSelected) {
        // we need to attach transformer manually
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);

    const [image] = useImage(shapeProps.url);
    return (
      <React.Fragment>
        <Image
          onClick={onSelect}
          onTap={onSelect}
          ref={shapeRef}
          {...shapeProps}

          x={shapeProps.x_i} 
          y={shapeProps.y_i} 
          image={image} 
          width={shapeProps.height_i} 
          height={shapeProps.width_i} 
          rotation={shapeProps.rotation_i}

          draggable
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            onChange({
              ...shapeProps,
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </React.Fragment>
    );
  };