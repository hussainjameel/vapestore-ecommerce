import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="container-fluid bg-dark text-white text-center text-lg-start mt-5">
        <div className="container p-4">
          <h3 className="text-uppercase mb-5 text-center">Let's be friends.</h3>

          <p>
            <strong> Address: </strong> 18-g center point plaza, Block E 2
            Gulberg III, Lahore (See Location)
          </p>
          <p>
            <strong> Phone: </strong> +92 123 456 7890 (Call)
          </p>
          <p>
            <strong> Email: </strong> info@vapemall.com
          </p>

          <h5 className="mt-5 text-center pb-2">Our social media</h5>
          <ul className="list-unstyled list-inline d-flex justify-content-center">
            <li className="list-inline-item">
              <FacebookIcon />
            </li>
            <li className="list-inline-item">
              <TwitterIcon />
            </li>
            <li className="list-inline-item">
              <InstagramIcon />
            </li>
          </ul>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          © 2023 VAPE MALL
        </div>
      </footer>
    </>
  );
};

export default Footer;
