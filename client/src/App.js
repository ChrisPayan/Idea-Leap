import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./util/auth";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import PrivatePage from "./components/PrivatePage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar1 from "./components/Navbar/NavBar1";
import { Footer } from "./components/Footer/Footer";
import IdeaPage from "./components/IdeaPage";
import LoginPageTA from "./components/LoginPageTA";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar1 />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPageTA />
          </Route>
          <Route path="/ideas">
            <IdeaPage />
          </Route>
          <PrivateRoute path="/private">
            <PrivatePage />
          </PrivateRoute>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
