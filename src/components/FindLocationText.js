
export default function FindLocationText(data,width,height, type) {
    var initialValues = [];

    for (var i = 0; i < data.length; i++) {
      initialValues.push({
        option: "",
        option_1: data[i].text1,
        option_2: data[i].text2,
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        size_text: data[i].size_text,
        rotation: 0,
        id: "text1_" + (i + 2),
        id_2: "text2_" + (i + 2),
        id_img: "img_" + (i + 2),
        url: data[i].img,
        x_i: 0,
        y_i: 0,
        width_i: data[i].size_img,
        height_i: data[i].size_img,
        rotation_i: 0
      });
    }
  
    const slicesCount = initialValues.length;
  
    const max_width = width / 2;
    const max_height = height / 2;
    const ChuViNho = width / 9;
    const ChuViVuong = ChuViNho * 3;
  
    const DoXoayCoBan = 360 / slicesCount;
  
    let DoXoay = DoXoayCoBan / 2;
  
    function start_values() {
      for (let i = 0; i < initialValues.length; i++) {
        initialValues[i].x = getPositionX(i, ChuViNho, 1);
        initialValues[i].y = getPositionY(i, ChuViNho, 1);
        if (type === 1){
          initialValues[i].option = initialValues[i].option_1;
          initialValues[i].x = getPositionX(i, ChuViNho, 1);
          initialValues[i].y = getPositionY(i, ChuViNho, 1);
        }else{
          initialValues[i].option = initialValues[i].option_2;
          initialValues[i].x = getPositionX(i, ChuViNho, 2);
          initialValues[i].y = getPositionY(i, ChuViNho, 2);
        }
        initialValues[i].rotation = getRotation(i);
  
        initialValues[i].x_i = getPositionX(i, ChuViVuong, 0);
        initialValues[i].y_i = getPositionY(i, ChuViVuong, 0);
        initialValues[i].rotation_i = getRotation(i);
      }
    }
  
    const getPositionX = (index, ChuVi, type) => {
      let ToaDo = max_width + ChuVi * Math.cos((getRotation2(index, type)));
      return ToaDo;
    };
  
    const getPositionY = (index, ChuVi, type) => {
      let ToaDo = max_height + ChuVi * Math.sin((getRotation2(index, type)));
      return ToaDo;
    };
  
    const getRotation = (index) => {
      return DoXoay + index * DoXoayCoBan - 90 ;
    };
  
    const getRotation2 = (index, type) => {
      let Xoay = 0;
      let XuLy = initialValues.length - 5;
      for (let j = 0; j <= index; j++) {
        Xoay += DoXoayCoBan;
      }
      XuLy = 130 - XuLy * 4;
      if (slicesCount >= 8) {
        XuLy += (slicesCount - 8) * 2;
      }
      if (initialValues[index].option_1.length > 0 && initialValues[index].option_2.length > 0) {
        if (type === 1) {
          XuLy += initialValues[index].size_text / 2;
        } else if (type === 0) {
          XuLy += 0;
        } else {
          XuLy -= initialValues[index].size_text / 2;
        }
      }
      return (Xoay - XuLy) * Math.PI / 180;
    };
  
    start_values();
  
    return initialValues;
}