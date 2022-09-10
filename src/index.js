import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const data = [
  {
    text1: "",
    text2: "chưa chắc",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 15
  },
  {
    text1: "Không giòn",
    text2: "",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 15
  },
  {
    text1: "Không giòn",
    text2: "",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 16
  },
  {
    text1: "Không giòn",
    text2: "chưa chắc",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 20
  },
  {
    text1: "Không giòn",
    text2: "chưa chắc",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 20
  },
  {
    text1: "Không giòn",
    text2: "chưa chắc",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 20
  },
  {
    text1: "Không giòn",
    text2: "",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 17
  },
  {
    text1: "Không giòn",
    text2: "chưa chắc",
    img: "https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
    size_img: 50,
    size_text: 17
  }
];
const width = 500;
const height = 500;
const type = "Mau2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App 
      data= {data}
      width= {width}
      height= {height}
      type= {type}
    />
  </StrictMode>
);
