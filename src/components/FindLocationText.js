
export default function FindLocationText() {
    const initialValues = [
        {
            option: "1 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0.25,
            values: "A",
            id: "1",
            id_img: "img_1",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },

        {
            option: "2 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0.25,
            values: "",
            id: "2",
            id_img: "img_2",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },
        {
            option: "3 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "ADFG",
            id: "3",
            id_img: "img_3",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },
        {
            option: "4 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "4",
            id_img: "img_4",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },

        {
            option: "5 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "5",
            id_img: "img_5",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },

        {
            option: "6 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "6",
            id_img: "img_6",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },

        {
            option: "7 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "7",
            id_img: "img_7",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        },
        {
            option: "8 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "8",
            id_img: "img_8",
            url:"https://phuclong.com.vn/uploads/dish/f70a14ee207180-60000694banhtrachaylavacaphe.png",
            x_i: 0,
            y_i: 0,
            width_i: 0,
            height_i: 0,
            rotation_i: 0
        }
    ];

    const slicesCount = initialValues.length;

    const ChuViLon = 500 / 2;
    const ChuViNho = 70;
    const ChuViVuong = 180;

    const DoXoayCoBan = 360 / slicesCount;

    let DoXoay = DoXoayCoBan / 2;

    function start_values() {
        for (let i = 0; i < initialValues.length; i++) {
            initialValues[i].x = getPositionX(i,ChuViNho);
            initialValues[i].y = getPositionY(i,ChuViNho);
            initialValues[i].rotation = getRotation(i);

            initialValues[i].x_i = getPositionX(i,ChuViVuong);
            initialValues[i].y_i = getPositionY(i,ChuViVuong);
            initialValues[i].rotation_i = getRotation(i);
            initialValues[i].width_i = 50;
            initialValues[i].height_i = 50;
        }
    }

    const getPositionX = (index, ChuVi) => {
        let ToaDo = ChuViLon + ChuVi * Math.cos((getRotation2(index)));
        return ToaDo;
    };

    const getPositionY = (index, ChuVi) => {
        let ToaDo = ChuViLon + ChuVi * Math.sin((getRotation2(index)));
        return ToaDo;
    };

    const getRotation = (index) => {
        return DoXoay + index * DoXoayCoBan - 90;
    };

    const getRotation2 = (index) => {
        let Xoay = 0;
        let XuLy = initialValues.length - 5;
        for (let j = 0; j <= index; j++) {
            Xoay += DoXoayCoBan;
        }
        XuLy = 130 - XuLy * 4;
        if (slicesCount >= 8) {
            XuLy += (slicesCount - 8) * 2;
        }
        return (Xoay - XuLy) * Math.PI / 180;
    };

    start_values();

    return initialValues;
}