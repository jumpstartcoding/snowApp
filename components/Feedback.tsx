import { Button } from "@aws-amplify/ui-react";

const feedbackImg = "./src/assets/feedback.jpg";
export default function Feedback() {
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
    </>
  );
}
