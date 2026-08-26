import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Links Columns */}
        <div className={styles.linksContainer}>
          <ul className={styles.linksColumn}>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
          <ul className={styles.linksColumn}>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul className={styles.linksColumn}>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul className={styles.linksColumn}>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Copyright Text */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
