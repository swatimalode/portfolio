import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useStatusMenu } from "../UI/Data";

var Contact = () => {
  let menu = useStatusMenu();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMessage] = useState("");

  var formSubmitHandler = async () => {
    let templateParams = {
      from_name: name,
      email_id: email,
      message: msg,
    };
    await emailjs
      .send(
        '<servicesid>',
        "<template_id>",
        templateParams,
        "<public_id>"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          menu.setStatus(true);
          setEmail("");
          setName("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          setEmail("");
          setName("");
          setMessage("");
        }
      );
  };
  return (
    <div className={classes.layout}>
      <Card className={classes.card_details}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email_id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={msg}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button className={classes.button_data} onClick={formSubmitHandler}>
            <b>Send</b>
          </button>
        </div>
      </Card>
      <div className={classes.card_details}>
        <p>
          <h3>Let’s talk how I can help you!</h3>
          <p>
            If you like my work and want to collaborate on a new experiment then drop me a
            message using the contact form.
          </p>
          <p>Or get in touch using my email or my contact number.</p>
          <p>See you!</p>
          <p>Email: example@gmail.com</p>
          <p>Phone: (+91) 333333333</p>
        </p>
      </div>
      {menu.status && <Card className={classes.pop}><h2>Thank You for getting in touch!</h2></Card> }
    </div>
  );
};

export default Contact;
