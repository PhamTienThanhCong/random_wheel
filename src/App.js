import { useEffect, useState } from "react";
import { Layer, Stage, Image, Text } from "react-konva";
import "./styles.css";

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

const initialValues = [
  {
    option: "1 Không gầy",
    chance: 0.25,
    values: "ADFG"
  },
  {
    option: "2 Không gầy",
    chance: 0.25,
    values: ""
  },
  {
    option: "3 Không gầy",
    chance: 0,
    values: "ADFG"
  },
  {
    option: "4 Không gầy",
    chance: 0,
    values: ""
  },

  {
    option: "5 Không gầy",
    chance: 0,
    values: ""
  },

  {
    option: "6 Không gầy",
    chance: 0,
    values: ""
  },

  {
    option: "7 Không gầy",
    chance: 0,
    values: ""
  },
  {
    option: "8 Không gầy",
    chance: 0,
    values: ""
  }
];

export default function App() {
  const slicesCount = initialValues.length;

  const ChuViLon = 500 / 2;
  const ChuViNho = 75;
  
  const DoXoayCoBan = 360 / slicesCount;

  let DoXoay = DoXoayCoBan / 2 ;

  const src_url = "https://quayso.vn/img/AnhVongQuay/Mau1/Mau1_" + (slicesCount) + ".png";
  
  const getPositionX = (index) => {
    let ToaDo = ChuViLon + ChuViNho * Math.cos((getRotation2(index)));
    return ToaDo ;
  };

  const getPositionY = (index) => {
    let ToaDo = ChuViLon + ChuViNho * Math.sin((getRotation2(index))) ;
    return ToaDo;
  };

  const getRotation = (index) => {
    return DoXoay + index * DoXoayCoBan - 90;
  };

  const getRotation2 = (index) => {
    let Xoay = 0;
    let XuLy = initialValues.length - 5;
    for (let j = 0 ; j <= index ; j++) {
      Xoay += DoXoayCoBan;
    }
    XuLy = 130 - XuLy * 4;
    if (slicesCount >= 8){
      XuLy += (slicesCount - 8) * 2;
    }
    return (Xoay - XuLy) * Math.PI / 180;
  };



  return (
    <div className="App">
      <Stage width={500} height={500}>
        <Layer>
          <URLImage
            src={src_url}
            x={0}
            y={0}
          />
          {initialValues.map((item, index) => (
            <Text
              text={item.option}
              x={getPositionX(index)}
              y={getPositionY(index)}
              rotation={getRotation(index)}
              fontSize={20}
              key={index}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
