import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./firebase/PrivateRoute";
import AllApartments from "./pages/Apartments/AllApartments";
import Signin from "./pages/authentication/signin/Signin";
import Signup from "./pages/authentication/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/profile/Profile";
import ApartmentDetails from "./pages/shared/Apartment/ApartmentDetails";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import useAuth from "./context/useAuth";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
  return (
    <>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/apartments/:id">
          <ApartmentDetails />
        </PrivateRoute>
        <Route path="/profile" component={Profile} />
        <Route path="/apartments" component={AllApartments} />
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
