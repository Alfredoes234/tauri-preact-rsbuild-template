import { render } from "preact";
import { Router, Route } from "preact-router";
import Home from "./pages/Home/home";
import "./main.css";

export function App() {
    return (
        <Router>
            <Route path="/" component={Home} />
        </Router>
    )
}

render(<App />, document.getElementById("root")!);
