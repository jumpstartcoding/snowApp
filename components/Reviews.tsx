import { useContext, useEffect, useState } from "react";
import { allReviews } from "./Crud";
import { clientContext } from "./clientContext";

export default function Reviews() {
  const [reviewss, setReviews] = useState<any>([]);
  const client = useContext(clientContext);

  useEffect(() => {
    async function fetchData() {
      const reviews = await allReviews(client);
      setReviews(
        reviews.data.listReviews?.items.sort(
          (a, b) =>
            new Date(a?.createdAt ?? "").getTime() -
            new Date(b?.createdAt ?? "").getTime()
        )
      );
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
          <header>
            {index + 1}.
            <h5>{new Date(review.createdAt).toLocaleDateString()}</h5>
          </header>
          <p>{review.content}</p>
        </div>
      ))}
    </section>
  );
}
