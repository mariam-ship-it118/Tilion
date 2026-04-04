import React, { useState } from "react";
import "./Contact.css";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabaseUrl = "https://elwkarirhzlqhmiqhaer.supabase.co";
const supabaseKey = "sb_publishable_bZtttSKF-aNyPl4zLXr6Gg_7cvmd3rc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.from("ContactForm").insert([
      {
        name,
        email,
        message,
      },
    ]);

    alert("Message sent ✅");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="body-wrapper">
      <div className="container">
        <div className="background-group">
          <div className="dashed-border"></div>
          <div className="solid-background"></div>
        </div>

        <div className="form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                className="form-input"
              />
            </div>

            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}