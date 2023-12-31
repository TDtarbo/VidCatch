import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/HeaderAndFooter.css";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="app">
      <header>
        <div className="logo_container">
          <img className="logo" src={Logo} alt="logo" />
          <span className="logo_title">VidCatch</span>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer class="footer-distributed">
        <div class="footer-left">
        <div className="logo_container">
          <img className="logo" src={Logo} alt="logo" />
          <span className="logo_title">VidCatch</span>
        </div>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Copurights@vidChat © 2023</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Colombo 7</span> Colombo, Sri-Lanka
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@VidCatch.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
