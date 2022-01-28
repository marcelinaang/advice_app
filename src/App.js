import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
    const [advice, setAdvice] = useState("");

    const getAdvice = () => {
        axios
            .get("	https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const fetch = getAdvice();
        return fetch;
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={getAdvice}>
                    <span>Give me advice!</span>
                </button>
            </div>
        </div>
    );
};

export default App;
