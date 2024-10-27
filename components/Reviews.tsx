import { useContext, useEffect, useState } from "react";
import { allReviews } from "./Crud";
import { clientContext } from "./clientContext";
import React from "react";
import "./Reviews.css";

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
      <table className="reviews-table">
        <thead>
          <tr>
            <th className="id-header" scope="col">
              ID
            </th>
            <th scope="col">Name</th>
            <th scope="col">Review</th>
            <th scope="col">Date of Lesson</th>
          </tr>
        </thead>
        <tbody>
          {reviewss.map((review: any, index: number) => (
            <React.Fragment key={index}>
              <tr className="index-row">
                <th scope="row" className="index-header">
                  {index + 1}.
                </th>

                <td className="name-data">{review.name}</td>
                <td className="content-data">
                  <p>{review.content}</p>
                </td>

                <td className="date-data">
                  {new Date(review.date).toLocaleDateString()}
                </td>
              </tr>

              <tr className="divider-row">
                <td colSpan={4} className="divider-cell"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
