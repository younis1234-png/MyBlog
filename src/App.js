import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import pageRender from "./pageRender";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Algorithms from "./pages/Algorithms";
import EditPost from "./pages/EditPost";
import Cloud from "./pages/Cloud";
import Health from "./pages/Health";
import Post from "./pages/Post";
import WebDev from "./pages/WebDev";

function App() {
  const user = {
    firstName: "Younis",
    lastName: "Saleh",
  };

  return (
    <BrowserRouter>
      <Navigation user={user} />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/algorithms" component={Algorithms}></Route>
        <Route path="/cloud" component={Cloud}></Route>
        <Route path="/health" component={Health}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/post/:id" component={Post}></Route>
        <Route path="/web-dev" component={WebDev}></Route>
        <Route path="/edit-post" component={EditPost}></Route>
        <Route path="*">{/* <Error /> */}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
