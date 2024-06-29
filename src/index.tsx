import { render } from "preact";
import { Route, Switch, Router } from "wouter-preact";

import { Home } from "./pages/Home/home";
import { NotFound } from "./pages/_404";
import "./global.css";

export function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

render(<App />, document.getElementById("root")!);
