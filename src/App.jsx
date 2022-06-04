import React from "react";

// type : date, checlbox
                //props
// 객체 한개 {
const Minsu = ({ kimchi }) => {
    return <input type={`${kimchi}`} />
};
// }

// {} === {} 는 같지 않다.
// 1 === 1 은 같다.

// const a = { a: 10 } 금학동 101번지
// const b = a; 금학동 101번지
// a === b

// {} <= 4byte
// style={} <= 스코프


// 객체 === {}
// Object
// Class
// Instance

const App = () => {

    const boxStyle = {
        width: "100px",
        height: "100px",
        background: "skyblue",
        margin: "10px",
        borderRadius: "10px",
        color: "#fff",
        boxShadow: "2px 2px 4px #b8b8b8"
    }

    return (
        <div>
            Hello Props
             {/* 객체 1개 4 byte */}
            <Minsu kimchi="text"/>
            <Minsu kimchi="checkbox"/>
            <Minsu kimchi="password"/>
            <Minsu kimchi="date"/>

            {/* 객체 4개 16 byte */}
            <input />
            <input />
            <input />
            <input />

            <div style={boxStyle}>Hello Word</div>
            <div style={boxStyle}>Hello Word</div>
            <div style={boxStyle}>Hello Word</div>
            <div style={boxStyle}>Hello Word</div>
            <div style={boxStyle}>Hello Word</div>
        </div>
    )
};

export default App;