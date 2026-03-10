/* ==========================================================================
   components.js — Shared navbar, footer injection + mobile nav toggle
   Loaded on every page before page-specific scripts.
   ========================================================================== */

// ========== NAVBAR ==========

document.getElementById("navbar-placeholder").innerHTML = `
    <nav class="navbar">
        <div class="navbar__container">
            <a href="index.html" id="navbar__logo">
                <i class="logo fa-solid fa-basketball"></i>
                HOME
            </a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="about.html" class="navbar__links">ABOUT</a>
                </li>
                <li class="navbar__item">
                    <a href="projects.html" class="navbar__links">PROJECTS</a>
                </li>
                <li class="navbar__btn">
                    <a href="contact.html" class="button">CONTACT ME</a>
                </li>
            </ul>
        </div>
    </nav>`;

// ========== FOOTER ==========

document.getElementById("footer-placeholder").innerHTML = `
    <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>Socials</h2>
                    <a href="https://www.instagram.com/justpaddyplz/">Instagram</a>
                    <a href="https://www.tiktok.com/@just_hoopz">TikTok</a>
                    <a href="https://github.com/yzhuangintcd">Github</a>
                    <a href="https://www.linkedin.com/in/yuchen-zhuang-246085217/">LinkedIn</a>
                </div>
                <div class="footer__link--items">
                    <h2>About Me</h2>
                    <a href="about.html">About Me Page</a>
                    <a href="https://yzhuangintcd.github.io/yzhuangintcd.github-weatherapp.io/" target="_blank">Simple Weather App</a>
                </div>
            </div>
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>Website Inspo</h2>
                    <a href="https://www.youtube.com/watch?v=FazgJVnrVuI" target="_blank">YouTube Video that guided me to make this page</a>
                    <a href="https://github.com/briancodex/html-css-website-v1" target="_blank">The Video's source code</a>
                </div>
                <div class="footer__link--items">
                    <h2>Contact Me</h2>
                    <a href="https://www.instagram.com/justpaddyplz/" target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/in/yuchen-zhuang-246085217/" target="_blank">LinkedIn</a>
                    <a href="mailto:yzhuang@tcd.ie">Email</a>
                </div>
            </div>
        </div>
        <div class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="index.html" id="footer__logo">
                        <i class="logo fa-solid fa-basketball"></i>
                        WEBSITE
                    </a>
                </div>
                <p class="website__rights">© Yuchen Zhuang. All rights reserved.</p>
                <div class="social__icon">
                    <a href="https://www.instagram.com/justpaddyplz/" class="social__icon--link" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@just_hoopz" class="social__icon--link" target="_blank">
                        <i class="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yuchen-zhuang-246085217/" class="social__icon--link" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/yzhuangintcd" class="social__icon--link" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>`;

// ========== MOBILE NAV TOGGLE ==========

const menu = document.querySelector("#mobile-menu");
const menuLink = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLink.classList.toggle("active");
});
