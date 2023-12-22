import React from "react";
import {Game, Banner, Footer, Navbar} from "../../../../components";
import About from "../About";
import Contact from "../Contact";
import Tools from "../Tools/index.jsx";
import StorePlan from "../../../StorePlan/index.jsx";

const Home = () => {
    return (
        <>
            <div className="dark:bg-boxdark">
                <Navbar />
                <div className="sticky max-w-7xl justify-center items-center mx-auto">
                    {/*<Banner />*/}
                    {/*<About />*/}
                    <Tools />
                </div>
                <StorePlan/>
                <div className="sticky max-w-7xl justify-center items-center mx-auto">
                    <Contact />
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
