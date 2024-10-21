import { Button } from "@aws-amplify/ui-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import feedbackImg from "/./src/assets/feedback.jpg";
import { postReview } from "./Crud";
import { clientContext } from "./clientContext";

export default function Feedback() {
  const client = useContext(clientContext);

  const [closePopUp, setClosePopUp] = useState<Boolean>(false);
  const [review, setReview] = useState<any>({
    name: "",
    date: new Date().toISOString(),
    feedback: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "date") {
      setReview({
        ...review,
        [name]: new Date(value).toISOString(),
      });
    } else setReview({ ...review, [name]: value });
  };

  const createReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postReview(review, client).then(() => setClosePopUp(!closePopUp));
  };
  return (
    <>
      <section className="feedback">
        <img className="feedback-img" src={feedbackImg} alt="feedback image" />
        <h1>We'd Like Your Feedback</h1>
        <form onSubmit={(event) => createReview(event)} action="" method="post">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
          />
          <label htmlFor="date"> Date Of Lesson:</label>
          <input onChange={handleChange} type="date" name="date" id="date" />
          <label htmlFor="feedback">Share Your Experience:</label>
          <textarea
            className="styled-textarea"
            name="feedback"
            id="feedback"
            cols={30}
            rows={10}
            value={review.feedback}
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
