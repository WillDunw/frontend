import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

/**
 * Determines the layout of the page.
 * @returns The layout of the main page with a header at the top and footer at the bottom
 */
function MainLayout(){
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export {MainLayout};