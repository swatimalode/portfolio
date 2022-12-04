import React from "react";
import classes from "./About.module.css";

var About = () => {
  return (
    <div className={classes.layout}>
      <h1>ABOUT ME</h1>
      <div className={classes.sub_layout}>
        <div>
          <p>
            <h3>Hello! I'm "".</h3>
            <p>
              "Twas brillig, and the slithy toves Did gyre and gimble in the
              wabe; All mimsy were the borogoves, And the mome raths outgrabe.
              Beware the Jabberwock, my son! The jaws that bite, the claws that
              catch! Beware the Jubjub bird, and shun The frumious
              Bandersnatch!"
            </p>
            <p>
              My focus is on delivering cutting-edge solutions that are secure,
              reliable, and scalable. I'm excited to share my skills and
              experience and work on projects that help to make the world a
              better place.
            </p>
          </p>
        </div>
        <div className={classes.personal_data}>
          <div>
            <label>
              <b>Age:</b>
            </label>
            <label>
              <b>Gmail:</b>
            </label>
            <label>
              <b>Contact Number:</b>
            </label>
            <label>
              <b>Residence:</b>
            </label>
            <label>
              <b>Status:</b>
            </label>
          </div>
          <div>
            <label>2</label>
            <label>example@gmail.com</label>
            <label>(+91) 3333333333</label>
            <label>India</label>
            <label>Available</label>
          </div>
        </div>
      </div>
      <div className={classes.sub_layout_2}>
        <h1>MY SERVICES</h1>
        <p>
          "Twas brillig, and the slithy toves Did gyre and gimble in the wabe;
          All mimsy were the borogoves, And the mome raths outgrabe. Beware the
          Jabberwock, my son! The jaws that bite, the claws that catch! Beware
          the Jubjub bird, and shun The frumious Bandersnatch!"
        </p>
        <div>
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Bar Chart</title>
              <path d="M496 496H16V16h32v448h448v32z" />
              <path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z" />
            </svg>
            <label>
              <b>Analysis</b>
            </label>
          </section>
          {/* <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Build</title>
              <path d="M230 209.2L32 405.58 106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78 40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06-52.32-52.13 87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54z" />
            </svg>
            <label>
              <b>Design</b>
            </label>
          </section> */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Construct</title>
              <path d="M497.14 111.38l-81.09 80.84-48.58-48.41L448.56 63c-45.22-22-108.65-22.09-146.2 15.35-35.32 35.2-39.73 90.61-22.54 134.2L99.57 391.37a12 12 0 000 17l52.27 52.11a12 12 0 0017 0l180-180.5c43.16 16.21 98 11.64 132.74-23 37.5-37.45 37.42-100.34 15.56-145.6z" />
              <path d="M365.45 308.62l-71.83 72 75.53 79.92a10.88 10.88 0 0015.65.21l60-60.46a11 11 0 00-.24-15.69zM119 212c0-4.87-4-9.33-7.45-12.78l-.25-.24-1.54-1.47a1.06 1.06 0 01-.26-.8 16.16 16.16 0 019.52-2c1.27.13 5.91.9 12.4 4.91 3.38 2.09 32.63 30.23 43.93 40.7a11 11 0 00.14 15.35l7.43 7.86 65.66-65.17-8.25-7.84a10.87 10.87 0 00-15.31-.06c-23-24.68-29-35.45-31-42.45-4.42-15.47 4.14-28 14-36 5.84-4.62 17.88-8.08 29-9a52.72 52.72 0 0111.61.6c3.47.5 6.3 1.14 7.39 1.4a68.51 68.51 0 0111 4l12-19a88.38 88.38 0 00-13.4-17.7 115.05 115.05 0 00-5.19-5.1c-7.78-7.15-28-19.2-54.59-19.2a117.38 117.38 0 00-44.77 8.82c-37.44 15.34-61.88 36.25-73.11 47.35l-.07.07A219.55 219.55 0 0067 128.56c-5.35 7.53-4.77 15.84-4.38 21.34 0 .32 0 .67.07 1a18.41 18.41 0 00-10.78-3.5A18 18 0 0039 152.73L2 189.62a6.79 6.79 0 000 9.6L65 262a6.72 6.72 0 009.5 0l37.06-37c3.44-3.44 7.44-8.14 7.44-13z" />
            </svg>
            <b>Development</b>
          </section>
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Cloud Upload</title>
              <path d="M473.66 210c-16.56-12.3-37.7-20.75-59.52-24-6.62-39.18-24.21-72.67-51.3-97.45-28.69-26.3-66.63-40.76-106.84-40.76-35.35 0-68 11.08-94.37 32.05a149.61 149.61 0 00-45.32 60.49c-29.94 4.6-57.12 16.68-77.39 34.55C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-48 48-22.63-22.63L256 169.17l86.63 86.62L320 278.42l-48-48v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19zM240 383.79h32v80.41h-32z" />
            </svg>
            <b>Deployment</b>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
