import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { About_us } from "./pages/about_us";
import { Edit_pet } from "./pages/edit_pet";
import { Favorite } from "./pages/favorite";
import { Login } from "./pages/login";
import { Pet_details } from "./pages/pet_details";
import { Pet_registration } from "./pages/pet_registration";
import { Private } from "./pages/private";
import { Signup } from "./pages/signup";
import { Account_settings } from "./pages/account_settings";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<Pet_registration />} path="/pet_registration" />
                        <Route element={<Edit_pet />} path="/edit_pet" />
                        <Route element={<Pet_details />} path="/:name" />
                        <Route element={<Favorite />} path="/favorite" />
                        <Route element={<Account_settings />} path="/account_settings" />
                        <Route element={<About_us />} path="/about_us" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
