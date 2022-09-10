
export default function FindLocationText() {
    const initialValues = [
        {
            option: "1 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0.25,
            values: "A",
            id: "1"
        },

        {
            option: "2 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0.25,
            values: "",
            id: "2"
        },
        {
            option: "3 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "ADFG",
            id: "3"
        },
        {
            option: "4 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "4"
        },

        {
            option: "5 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "5"
        },

        {
            option: "6 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "6"
        },

        {
            option: "7 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "7"
        },
        {
            option: "8 Không gầy",
            x: 0,
            y: 0,
            rotation: 0,
            chance: 0,
            values: "",
            id: "8"
        }
    ];

    const slicesCount = initialValues.length;

    const ChuViLon = 500 / 2;
    const ChuViNho = 75;

    const DoXoayCoBan = 360 / slicesCount;

    let DoXoay = DoXoayCoBan / 2;

    function start_values() {
        for (let i = 0; i < initialValues.length; i++) {
            initialValues[i].x = getPositionX(i);
            initialValues[i].y = getPositionY(i);
            initialValues[i].rotation = getRotation(i);
        }
    }

    const src_url = "https://quayso.vn/img/AnhVongQuay/Mau1/Mau1_" + (slicesCount) + ".png";

    const getPositionX = (index) => {
        let ToaDo = ChuViLon + ChuViNho * Math.cos((getRotation2(index)));
        return ToaDo;
    };

    const getPositionY = (index) => {
        let ToaDo = ChuViLon + ChuViNho * Math.sin((getRotation2(index)));
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