import { useState } from "react";
import emailjs from "@emailjs/browser";

export const End = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "rgba(150, 150, 150, 0.7)",
        borderRadius: "5px",
        height: "60%",
        width: "60%",
        margin: "10vh auto 0 auto",
        opacity: 0,
        display: "none",
        transform: "translateY(100vh)",
        position: "fixed",
        top: "0",
        left: "20%",
        overflowY: "scroll",
      }}
      id="modal"
    >
      <h1>Contact me:</h1>
      <div
        style={{
          padding: "1vh",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          placeholder="First name"
          value={name}
          style={{
            width: "40%",
            height: "2rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          style={{
            width: "40%",
            height: "2rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          value={surname}
          onChange={(ev) => setSurname(ev.target.value)}
        />
      </div>
      <div
        style={{
          padding: "1vh",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <input
          type="email"
          placeholder="Email address"
          style={{
            width: "90%",
            height: "2rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>
      <div
        style={{
          padding: "1vh",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          style={{
            width: "90%",
            height: "2rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          onChange={(ev) => setSubject(ev.target.value)}
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Drop your message here"
          value={message}
          style={{
            width: "90%",
            height: "14rem",
            fontSize: "1.5rem",
            borderRadius: "1rem",
          }}
          onChange={(ev) => setMessage(ev.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            const serviceID = "service_k19neos";
            const templateID = "template_41m4059";

            emailjs
              .send(serviceID, templateID, {
                name,
                surname,
                email,
                subject,
                message,
              })
              .then(() => alert("Email sent. Thanks!"))
              .catch(() => alert("Failed to send email"));
            setName("");
            setSurname("");
            setEmail("");
            setSubject("");
            setMessage("");
          }}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          style={{
            width: "90%",
            height: "2rem",
            fontSize: "1.5rem",
            backgroundColor: hovered ? "green" : "#c3f7bc",
            border: "0px",
            borderRadius: "1rem",
          }}
          disabled={!(name && surname && email && subject && message)}
        >
          Send
        </button>
      </div>
    </div>
  );
};
