import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>💻 by Pritesh Jain </p>
    </footer>
  );
}

export default Footer;
