import { Button } from "@aws-amplify/ui-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { addListing, getListings, editListing, removeListing } from "./Crud";
import { clientContext } from "./clientContext";
import "./ListingsPage.css"; // Import custom styling

export default function ListingsPage() {
  const [search, setSearch] = useState<string>("");

  const [forceRender, setForceRender] = useState(false);
  const [popUp, setPopUp] = useState<boolean>(false);
  const [remove, setRemove] = useState(false);

  const [listing, setListing] = useState<{
    id?: string; // Ensure id is included for updates
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

  const [filteredListings, setFill] = useState<any>([]);

  const [listings, setListings] = useState<any>([]); // State to hold the list of all listings
  const [editing, setEditing] = useState<number | null>(null); // Track the index of the listing being edited

  const client = useContext(clientContext);

  // Fetch the listings when the component is mounted
  useEffect(() => {
    async function fetchData() {
      const lis = await getListings(client);
      setListings(lis.data.listListings?.items);
    }
    fetchData();
  }, [client, forceRender]);

  useEffect(() => {
    setFill(
      listings
        .filter(
          (listing: any) =>
            listing &&
            listing.title !== undefined &&
            listing.description !== undefined
        ) // Ensure valid listings
        .filter((listing: any) => {
          return (
            listing.title.toLowerCase().includes(search.toLowerCase()) ||
            listing.description.toLowerCase().includes(search.toLowerCase())
          );
        })
    );
  }, [search, listings]);

  // Handle form input changes for listing
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
      setFill(
        listings
          .filter(
            (listing: any) =>
              listing &&
              listing.title !== undefined &&
              listing.description !== undefined
          ) // Ensure valid listings
          .filter((listing: any) => {
            return (
              listing.title.toLowerCase().includes(value.toLowerCase()) ||
              listing.description.toLowerCase().includes(value.toLowerCase())
            );
          })
      );
    } else {
      setListing({ ...listing, [name]: value });
    }
  };

  // Submit a new listing or update an existing one
  const submitListing = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editing === null) {
      // Adding a new listing
      try {
        await addListing(listing, client);
        setForceRender((prev) => !prev);

        setListings([...listings, listing]); // Add the new listing to the state
        setListing({
          title: "",
          long: 0,
          lat: 0,
          description: "",
          url: "",
          image: "",
        });
      } catch (error) {
        console.log("Error adding listing:", error);
        alert("Failed to add listing.");
      }
    } else {
      // Updating an existing listing
      try {
        await editListing(listing, client, listings[editing].id); // Call the editListing function
        const updatedListings = [...listings];
        updatedListings[editing] = listing; // Update the listing in the local state
        setListings(updatedListings); // Update the listings array in the state
        setEditing(null); // Clear the editing state
        setListing({
          title: "",
          long: 0,
          lat: 0,
          description: "",
          url: "",
          image: "",
        });
      } catch (error) {
        console.log("Error updating listing:", error);
        alert("Failed to update listing.");
      }
    }
  };

  // Handle editing a listing
  const handleEdit = (index: number) => {
    setPopUp((e) => !e);
    const listingToEdit = listings[index];
    setListing(listingToEdit); // Pre-fill the form with the current listing data
    setEditing(index); // Set the current listing as being edited
  };

  // Handle cancel editing
  const handleCancel = () => {
    setEditing(null); // Clear the editing state without saving changes
    setListing({
      title: "",
      long: 0,
      lat: 0,
      description: "",
      url: "",
      image: "",
    }); // Reset the form fields
  };

  const handleRemove = async (listingId: string) => {
    try {
      const updatedListings = listings.filter(
        (elt: any) => elt.id !== listingId
      );
      setListings(updatedListings);
      setFill(
        updatedListings
          .filter(
            (listing: any) =>
              listing &&
              listing.title !== undefined &&
              listing.description !== undefined
          ) // Ensure valid listings
          .filter((listing: any) => {
            return (
              listing.title.toLowerCase().includes(search.toLowerCase()) ||
              listing.description.toLowerCase().includes(search.toLowerCase())
            );
          })
      ); // Update filtered listings
      await removeListing(listingId, client);
    } catch (error) {
      console.log("Error removing listing:", error);
      alert("Failed to remove listing.");
    }
  };

  return (
    <div className="listings-page">
      <section className={`form-section ${popUp ? "show" : "hide"}`}>
        <button
          onClick={() => {
            setPopUp(!popUp);
            handleCancel();
          }}
          className="btn-secondary btn"
        >
          Close
        </button>
        <h2 style={{ textAlign: "center" }}>
          {editing === null ? "Add a Listing" : "Edit Listing"}
        </h2>

        <form onSubmit={submitListing} className="listing-form">
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              value={listing.title}
              required
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="long">Longitude</label>
            <input
              onChange={handleChange}
              id="long"
              name="long"
              type="number"
              value={listing.long}
              required
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lat">Latitude</label>
            <input
              onChange={handleChange}
              name="lat"
              id="lat"
              type="number"
              value={listing.lat}
              required
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="input-field styled-textarea"
              name="description"
              id="description"
              rows={5}
              value={listing.description}
              onChange={handleChange}
              placeholder="Enter a description"
            />
          </div>

          <div className="input-group">
            <label htmlFor="url">URL</label>
            <input
              onChange={handleChange}
              type="text"
              name="url"
              id="url"
              value={listing.url}
              className="input-field"
            />
          </div>

          <div className="button-group">
            <Button type="submit" className="submit-btn">
              {editing === null ? "Submit Listing" : "Update Listing"}
            </Button>
            {editing !== null && (
              <Button
                type="button"
                onClick={handleCancel}
                className="cancel-btn"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </section>

      <section className="listings-section">
        <header className="listings-header">
          <h2>All Listings</h2>

          <input
            type="text"
            name="search"
            id="search"
            placeholder="search"
            onChange={handleChange}
            value={search}
          />
        </header>
        <button
          onClick={() => setPopUp(!popUp)}
          className="btn btn-primary btn-add-listing"
        >
          {" "}
          Add a Listing
        </button>

        {listings.length > 0 ? (
          <ul className="listings-list">
            {filteredListings.map((listing: any, index: number) => (
              <li key={listing.id} className="listing-item">
                {remove && (
                  <div className="remove-prompt">
                    <h1>Remove the Listing?</h1>
                    <button
                      onClick={() => handleRemove(listing.id)}
                      className="btn btn-danger btn-lg"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setRemove(!remove)}
                      className="btn btn-lg  ms-2 btn-outline-primary"
                    >
                      No
                    </button>
                  </div>
                )}
                <h3>{listing.title}</h3>
                <p>Description: {listing.description}</p>
                <p>
                  Location: {listing.lat}, {listing.long}
                </p>
                {listing.url && (
                  <span
                    style={{
                      display: "block",
                      overflow: "auto",
                      paddingBottom: "10px",
                    }}
                  >
                    <label htmlFor="url"> URL:</label>
                    <a
                      style={{ display: "inline" }}
                      href={listing.url}
                      className="more-info-link"
                    >
                      {" " + listing.url}
                    </a>
                  </span>
                )}
                {listing.image && (
                  <img
                    src={listing.image}
                    alt={listing.title}
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                )}
                <div className="listing-buttons">
                  <Button
                    onClick={() => handleEdit(index)}
                    className="edit-btn"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => setRemove(!remove)}
                    className="remove-btn"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No listings available.</p>
        )}
      </section>
    </div>
  );
}
