import React, { useState } from "react";
import { render } from "react-dom";

const App = () =>
{
    const [countGet, countSet] = useState(5);
    const handler = () => countSet(countGet+1);

    return (
        <div>
            <strong>v 1.0</strong>
            <p>{countGet}</p>
            <button onClick={handler}>++</button>
        </div>
    )
}

render(<App/>, document.querySelector("#app"));