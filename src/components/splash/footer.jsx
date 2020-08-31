import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <h1 className="about">~ Meet the Engineers ~</h1>
        <div className="footer-desc">
          <div className="githubs">
            <h3>
              <FontAwesomeIcon icon={faGithub} /> &nbsp;Github Links
            </h3>
            <section className="github-links">
              <a href="https://github.com/lordrickyz/mintrello" target="_blank">
                Github Repo
              </a>
              <a href="https://github.com/lordrickyz" target="_blank">
                Ricky Zheng
              </a>
              <a href="https://github.com/CGodl" target="_blank">
                Carl Godlewski
              </a>
              <a href="https://github.com/LouisVelz" target="_blank">
                Louis Velazquez
              </a>
            </section>
          </div>

          <div className="linkedins">
            <h3>
              <FontAwesomeIcon icon={faLinkedin} /> &nbsp;Linkedin Links
            </h3>
            <section className="linkedin-links">
              <a
                href="https://www.linkedin.com/in/rickyzhengs/"
                target="_blank"
              >
                Ricky Zheng
              </a>
              <a
                href="https://www.linkedin.com/in/louis-velazquez-bb63085a/"
                target="_blank"
              >
                Louis Velazquez
              </a>
              <a
                href="https://www.linkedin.com/in/carl-godlewski-b64b0512/"
                target="_blank"
              >
                Carl Godlewski
              </a>
            </section>
          </div>
        </div>
      </footer>
    );
  } 
}

export default Footer;