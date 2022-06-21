import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ width: '100vw', height: '100vh' }}>
                    <Routes>
                        <Route exact path="" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
