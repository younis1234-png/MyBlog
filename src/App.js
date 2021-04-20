import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import pageRender from "./pageRender";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

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
        <Route path="/blog" component={Blog}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="*">{/* <Error /> */}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
