import React from "react";
import Card from "../UI/Card";
import classes from "./Work.module.css";
import image_balances from "../../assets/balances.png";
import image_portfoilio from "../../assets/portfolio.png";

var Work = () => {
  return (
    <div className={classes.layout}>
      <h1>Experience</h1>
      <div>
        <Card>
          <div className={classes.card_data}>
            <header className={classes.header_data}>
              <label style={{ fontSize: "25px" }}>
                <b>Developer</b>
              </label>
              <label>Company name</label>
            </header>
            <div>
              <ul className={classes.div_data}>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <div className={classes.card_data}>
            <header className={classes.header_data}>
              <label style={{ fontSize: "25px" }}>
                <b>Designer</b>
              </label>
              <label>Comapny name</label>
            </header>
            <div>
              <ul className={classes.div_data}>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
                <li>
                Twas brillig, and the slithy toves
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <h1>My Work</h1>
      <div>
        <Card>
          <div className={classes.project_data}>
            <img
              className={classes.profile_picture}
              src={image_balances}
              alt="balances"
            />
            <section>
            <button
                onClick={() =>
                  window.open(
                    "https://example.app/",
                    "_blank"
                  )
                }
              >
                <b>Link</b>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/name/repo",
                    "_blank"
                  )
                }
              >
                <b>Github</b>
              </button>
            </section>
          </div>
        </Card>
        <Card>
          <div className={classes.project_data}>
            <img
              className={classes.profile_picture}
              src={image_portfoilio}
              alt="portfolio"
            />
            <section>
              <button
                onClick={() =>
                  window.open(
                    "https://example.app/",
                    "_blank"
                  )
                }
              >
                <b>Link</b>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/name/repo",
                    "_blank"
                  )
                }
              >
                <b>Github</b>
              </button>
            </section>
          </div>
        </Card>
      </div>
      <h1>Education</h1>
      <div className={classes.card_data}>
        <Card>
          <header className={classes.header_data}>
            <label style={{ fontSize: "25px" }}>
              <b>Masters</b>
            </label>
            <label>specialization</label>
            <label>date</label>
          </header>
        </Card>
        <Card>
          <header className={classes.header_data}>
            <label style={{ fontSize: "25px" }}>
              <b>Degree</b>
            </label>
            <label>specialization</label>
            <label>Grade</label>
          </header>
        </Card>
      </div>
    </div>
  );
};

export default Work;
