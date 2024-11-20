import { Button } from "@aws-amplify/ui-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { addListing, getListings, editListing, removeListing } from "./Crud"; // Assuming editListing is available in Crud
import { clientContext } from "./clientContext";
import "./ListingsPage.css"; // Import custom styling

export default function ListingsPage() {
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
  }, [client]);

  // Handle form input changes for listing
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setListing({ ...listing, [name]: value });
  };

  // Submit a new listing or update an existing one
  const submitListing = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editing === null) {
      // Adding a new listing
      try {
        await addListing(listing, client);
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
        console.log("buterrr", listings[editing]);
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
  const handleRemove = async (listingId: string, index: number) => {
    try {
      await removeListing(listingId, client); // Call the removeListing function to delete from the server
      const updatedListings = listings.filter(
        (x: any, i: number) => i !== index
      ); // Remove the listing from the local state
      setListings(updatedListings); // Update the listings state
    } catch (error) {
      console.log("Error removing listing:", error);
      alert("Failed to remove listing.");
    }
  };
  return (
    <div className="listings-page">
      <section className="form-section">
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
        <h2>All Listings</h2>
        {listings.length > 0 ? (
          <ul className="listings-list">
            {listings.map((listing: any, index: number) => (
              <li key={listing.id} className="listing-item">
                <h3>{listing.title}</h3>
                <p>Description: {listing.description}</p>
                <p>
                  Location: {listing.lat}, {listing.long}
                </p>
                {listing.url && (
                  <p rel="noopener noreferrer" className="more-info-link">
                    URL:{listing.url}
                  </p>
                )}
                {listing.image && (
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="listing-image"
                  />
                )}
                <Button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </Button>
                <Button
                  onClick={() => handleRemove(listing.id, index)}
                  className="remove-btn"
                >
                  Remove{" "}
                </Button>
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
