import { useContext, useEffect, useState } from "react";
import { allReviews } from "./Crud";
import { clientContext } from "./clientContext";

export default function Reviews() {
  const [reviewss, setReviews] = useState<any>([]);
  const client = useContext(clientContext);

  useEffect(() => {
    async function fetchData() {
      const reviews = await allReviews(client);
      setReviews(reviews.data.listReviews?.items);
      console.log(reviews.data.listReviews?.items);
    }
    fetchData();
    console.log(reviewss, "dasd");
  }, []);

  return (
    <section className="reviews">
      {reviewss.map((review: any, index: number) => (
        <div key={index}>
          {" "}
          <h1>
            {index + 1}: {review.createdAt}
          </h1>
          {review.content} hot cake
        </div>
      ))}
    </section>
  );
}
