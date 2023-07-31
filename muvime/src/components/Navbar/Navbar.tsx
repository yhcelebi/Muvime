import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">MUVIME</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Filmler</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Diziler</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Kişiler</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="addition">Daha Fazla +</a>
                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */} 
        </div>  
        </div>
        <div className="dropdown">
        <button className="lang dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            EN
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">TR</a>
            <a className="dropdown-item" href="#">ES</a>
            <a className="dropdown-item" href="#">EN</a>
        </div>
        </div>
        
        <div className="row name-occup">
         
            <div className="name">Serkan Konakçı</div>

            <div className="occupation">FrontEnd Developer</div>
            
        </div>
        <img src="https://avatars.githubusercontent.com/u/98681?v=4" alt="mdo" width="32" height="32" className="rounded-circle pp"></img>
        </nav>
    );
}