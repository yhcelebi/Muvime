import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
<div className="container footer">
  <footer className="py-5">
    <div className="row footer-top">
      <div className="col-6 col-md-2 mb-3">
        <h5>THE BASICS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About TMDB</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Support Forums</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">API</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">System Status</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>GET INVOLVED</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contribution Bible</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">3rd Party Applications</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Add New Movie</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Add New TV Show</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>COMMUNITY</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Guidelines</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Discussions</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Leaderboard</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between border-top legacy">
      <div className="wrap-legacy row">
        <ul className="legacy-list">
          <li><p className="rights"><span className="legacy-logo">MUVIME</span> © 2023 Tübitak, Inc. All rights reserved.</p></li>
          <div className="traits">
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </div>
        </ul>
        
        
      </div>
    </div>
  </footer>
</div>
    )
}