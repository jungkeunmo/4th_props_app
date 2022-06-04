import React from "react";

// type : date, checlbox
                //props
const Minsu = ({ kimchi }) => {
    return <input type={`${kimchi}`} />
};

const App = () => {
    return (
        <div>
            Hello Props
            <Minsu kimchi="text"/>
            <Minsu kimchi="checkbox"/>
            <Minsu kimchi="password"/>
            <Minsu kimchi="date"/>
        </div>
    )
};

export default App;