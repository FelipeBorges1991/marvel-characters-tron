import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "../routeComponents/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="vh-100">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
