import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Layout.module.css";
import About from "../About/About";

import Introduction from "../Introduction/Introduction";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

var Layout = () => {
  let [info, setInfo] = useState({
    about: true,
    work: false,
    skills: false,
    contact: false,
  });
  return (
    <div className={classes.layout}>
      <div className={classes.side_bar}>
        <Card className={classes.menu_symbol}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Grid</title>
            <path d="M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z" />
          </svg>
        </Card>
        <Card className={classes.menu}>
          <button
            onClick={() =>
              setInfo({
                about: true,
                work: false,
                skills: false,
                contact: false,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Person</title>
              <path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
            </svg>
            ABOUT
          </button>
          <button onClick={() =>
              setInfo({
                about: false,
                work: true,
                skills: false,
                contact: false,
              })
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Desktop</title>
              <path d="M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1113.79 13.79 16 16 0 01-13.79-13.79z" />
            </svg>
            WORK
          </button>
          <button onClick={() =>
              setInfo({
                about: false,
                work: false,
                skills: true,
                contact: false,
              })
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>School</title>
              <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" />
              <path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" />
            </svg>
            <label>SKILLS</label>
          </button>
          <button
            onClick={() =>
              setInfo({
                about: false,
                work: false,
                skills: false,
                contact: true,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>At Circle</title>
              <path d="M256.41 48.74c-114.85 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.16-208-208-208zM381.22 252c-2.85 32.63-16.78 49.7-28 58.26s-24.69 12.34-36.33 10.26a41.63 41.63 0 01-27-17.52 60.84 60.84 0 01-43.72 17.9 51.65 51.65 0 01-38.55-16.83c-11.39-12.42-17-30.36-15.33-49.23 3.05-35 30.92-57.39 56.87-61.48 27.21-4.29 52.24 6.54 62.91 19.46l3.84 4.66-6.34 50.38c-1.19 14.34 3.29 23.48 12.29 25.1 2.39.42 8.11-.13 14.38-4.93 6.72-5.15 15.14-16 17.1-38.47 2.32-26.55-4.35-49.19-19.28-65.49-15.5-16.9-39.1-25.84-68.24-25.84-54 0-101.81 44.43-106.57 99-2.29 26.2 5.66 50.68 22.39 68.93C198 344 221 353.88 246.29 353.88c19 0 30.61-2.05 49.49-8.78l13.22-4.69 9.39 26.37-13.19 4.7c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77-22.09-24.11-32.62-56.17-29.65-90.29 2.91-33.33 18.46-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.94 12.08 88.88 34.93 20.05 21.91 29.48 52.75 26.5 86.86z" />
              <path d="M253.51 221c-14.83 2.33-31.55 15.84-33.34 36.26-1 11.06 2 21.22 8.08 27.87a23.63 23.63 0 0017.91 7.75c19.7 0 33.8-14.79 36.8-38.59l1.75-13.89h.09l1.65-13.11a49.63 49.63 0 00-32.94-6.3z" />
            </svg>
            CONTACT
          </button>
        </Card>
      </div>
      <div className={classes.portfolio}>
        <Card className={classes.introduction}>
          <Introduction></Introduction>
        </Card>
        <Card className={classes.information}>
          {info.about && <About></About>}
          {info.work && <Work></Work>}
          {info.skills && <Skills></Skills>}
          {info.contact && <Contact></Contact>}
        </Card>
      </div>
    </div>
  );
};

export default Layout;
