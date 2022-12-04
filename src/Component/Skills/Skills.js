import React from "react";
import Card from "../UI/Card";
import classes from "./Skills.module.css";

var Skills = () => {
  return (
    <div className={classes.layout}>
      <h1>Skills</h1>
      <Card className={classes.card_data}>
        <div>
          <label>Data Structure</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `75%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Algorithm</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `70%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <h3>Languages</h3>
        <div>
          <label>JavaScript</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `90%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Solidity</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `95%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>C Language</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `60%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>

        <h3>Technologies</h3>
        <div>
          <label>Blockchain</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Web3</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>NodeJs</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Chainlink</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `60%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Git</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `60%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <h3>Frameworks</h3>
        <div>
          <label>NodeJs</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>ReactJs</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `75%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Truffle/Hardhat</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <h3>Database</h3>
        <div>
          <label>MySQL</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `80%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>SQL</label>
          <div style={{ border: "2px solid #3498db", width: "90%" }}>
            <div
              style={{
                backgroundColor: "#3498db",
                width: `60%`,
                height: "10px",
              }}
            ></div>
          </div>
        </div>
      </Card>
      <h1>Achievement</h1>
      <Card>
        <ul>
          <li>Twas brillig, and the slithy toves.</li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>Twas brillig, and the slithy toves</li>
        </ul>
      </Card>
    </div>
  );
};

export default Skills;
