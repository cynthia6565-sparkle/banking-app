import react from "react";
import {link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand mx-3 mx-lg-5">EPIC BANK</a>

                <form className="d-flex">
                    <link
                    className="btn btn-outline-light mx-3 mx-lg-5"
                    type="button"
                    to={'/'}
                    >
                        sign out
                    </link>
                </form>
            </div>
        </nav>
    );
}