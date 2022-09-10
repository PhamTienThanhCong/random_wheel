
import { Transformer, Text } from "react-konva";
import React from 'react';

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

    return (
      <React.Fragment>
        <Text
          onClick={onSelect}
          onTap={onSelect}
          ref={shapeRef}
          {...shapeProps}
          text={shapeProps.option}
          x={shapeProps.x}
          y={shapeProps.y}
          rotation={shapeProps.rotation}
          fontSize={20}
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