import React from "react";
import "./styles/index.css";
const App: React.FC = () => {
    return (
        <div className="keyboard">
            <div className="panel"></div>
            <div className="board">
                <div className="row">
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button">7</div>
                    <div className="button">8</div>
                </div>
                <div className="row">
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button">7</div>
                    <div className="button">8</div>
                </div>
                <div className="row">
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button">7</div>
                    <div className="button">8</div>
                </div>
            </div>
        </div>
    );
};

export default App;
