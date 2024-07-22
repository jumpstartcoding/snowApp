import { Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import feedbackImg from "/./src/assets/feedback.jpg";

export default function Feedback() {
  const [closePopUp, setClosePopUp] = useState<Boolean>(false);
  return (
    <>
      <section className="feedback">
        <img className="feedback-img" src={feedbackImg} alt="feedback image" />
        <h1>We'd Like Your Feedback</h1>
        <form action="" method="post">
          <label htmlFor="feedbak">Share Your Experience:</label>
          <textarea
            className="styled-textarea"
            name="feedback"
            id="feedback"
            cols={30}
            rows={10}
          ></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </section>
      <section
        className="feedback-popup"
        style={{ display: `${closePopUp ? "none" : "flex"}` }}
      >
        <Button onClick={() => setClosePopUp(!closePopUp)}> X</Button>
        <img
          className="feedback-img"
          style={{ maxWidth: "300px" }}
          src={feedbackImg}
          alt="feedback image"
        />
        <h1 style={{ textAlign: "center" }}>Thank You For Sharing</h1>
        <Link to="/"> Go To Homepage</Link>
      </section>
    </>
  );
}
