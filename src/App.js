import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import PostItemScreen from "./screens/PostItemScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductsDetailsScreen from "./screens/ProductsDetailsScreen";
import AdminScreen from "./screens/AdminScreen";
import EditPostComponent from "./components/EditPostComponent";
import Footer from "./components/footercomponent/Footer";
import SubCategoryProductListScreen from './screens/SubCategoryProductListScreen';


function App() {


  const [title, setTitle] = useState('ZOOM');
  const [href, setHref] = useState(window.location.pathname);


  useEffect(() => {
    localStorage.getItem('userId') !== null && setTitle('Khan')
  });
  return (
    <>
      <Router>

        <Navbar title={title} />

        <Switch>
          <div className="mainContent">

            <Route exact path="/item/:id" component={ProductsDetailsScreen} />
            <Route exact path="/signin">
              <SignInScreen />
            </Route>
            <Route exact path="/signup">
              <SignUpScreen />
            </Route>
            <Route exact path="/postitem">
              <PostItemScreen />
            </Route>
            <Route exact path="/editpost" component={EditPostComponent}>
            </Route>
            <Route exact path="/adminpanel">
              <AdminScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route
              exact
              path="/productList"
              component={ProductListScreen}
            ></Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
