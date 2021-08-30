import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SearchBar from "./SearchBar";
import products from "./products";
import "./pp.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <Header />
                    <div className="pp">
                        <SearchBar
                            placeholder="Enter the product Name..."
                            data={products}
                        />
                    </div>
                    <main className="py-3">
                        <Container>
                            <HomeScreen />
                        </Container>
                    </main>
                    <Footer />
                </Route>
                <Route path="/search/:keyword" component={HomeScreen} />
            </Switch>
        </Router>
    );
};

export default App;
