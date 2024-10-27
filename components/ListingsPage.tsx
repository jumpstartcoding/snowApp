import { Button } from "@aws-amplify/ui-react";
import { FormEvent, useContext } from "react";
import { ChangeEvent, useState } from "react";
import { addListing } from "./Crud";
import { clientContext } from "./clientContext";

export default function ListingsPage() {
  const [listing, setListing] = useState<{
    lat: number;
    long: number;
    title: string;
    description: string;
    url: string;
    image: string;
  }>({
    title: "",
    long: 0,
    lat: 0,
    description: "",
    url: "",
    image: "",
  });
  const client = useContext(clientContext);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setListing({ ...listing, [name]: value });
  };

  const submitListing = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addListing(listing, client);
  };
  return (
    <section>
      <form onSubmit={(event) => submitListing(event)} className="listing-form">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          id="title"
          value={listing.title} // Make it a controlled input
          required
        />

        <label htmlFor="long">Longitude</label>
        <input
          onChange={handleChange}
          id="long"
          name="long"
          type="number"
          value={listing.long}
          required
        />

        <label htmlFor="lat">Latitude</label>
        <input
          onChange={handleChange}
          name="lat"
          id="lat"
          type="number"
          value={listing.lat}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="styled-textarea"
          name="description"
          id="description"
          cols={10}
          rows={5}
          value={listing.description}
          onChange={handleChange}
          placeholder="Enter your text here"
        ></textarea>

        <label htmlFor="url">URL</label>
        <input
          onChange={handleChange}
          type="text"
          name="url"
          id="url"
          value={listing.url}
        />

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
