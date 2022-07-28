import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// TODO
// - change config keyboard +-
// - change btn logic +-
// - add caret logic -
// - delete/backspace logic -
