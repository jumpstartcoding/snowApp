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
        <tbody>
          {reviewss.map((review: any, index: number) => (
            <React.Fragment key={index}>
              <tr className="index-row">
                <th className="index-header">{index + 1}.</th>
                <td className="index-data">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
              </tr>
              <tr className="name-row">
                <th className="name-header">Name:</th>
                <td className="name-data">{review.name}</td>
              </tr>
              <tr className="content-row">
                <th className="content-header">Review</th>
                <td className="content-data">
                  <p>{review.content}</p>
                </td>
              </tr>
              <tr className="date-row">
                <th className="date-header">Date of Lesson:</th>
                <td className="date-data">
                  {new Date(review.date).toLocaleDateString()}
                </td>
              </tr>
              <tr className="divider-row">
                <td colSpan={2} className="divider-cell"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
