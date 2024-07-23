import { Button } from "@aws-amplify/ui-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import feedbackImg from "/./src/assets/feedback.jpg";
import { postReview } from "./Crud";
import { clientContext } from "./clientContext";

export default function Feedback() {
  const client = useContext(clientContext);

  const [closePopUp, setClosePopUp] = useState<Boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };
  const createReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postReview(textAreaValue, client).then(() => setClosePopUp(!closePopUp));
  };
  return (
    <>
      <section className="feedback">
        <img className="feedback-img" src={feedbackImg} alt="feedback image" />
        <h1>We'd Like Your Feedback</h1>
        <form onSubmit={(event) => createReview(event)} action="" method="post">
          <label htmlFor="feedback">Share Your Experience:</label>
          <textarea
            className="styled-textarea"
            name="feedback"
            id="feedback"
            cols={30}
            rows={10}
            value={textAreaValue}
            onChange={handleChange}
            placeholder="Enter your text here"
          ></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </section>
      <section
        className="feedback-popup"
        style={{ display: `${!closePopUp ? "none" : "flex"}` }}
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
