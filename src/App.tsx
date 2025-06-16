import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
    email: "",
    addressType: "Home",
    termsAccepted: false,
  });

  const countries = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "Russia",
    "Nepal",
    "Mexico",
    "Brazil",
  ];
  

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept terms and conditions before submitting.");
      return;
    }
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  }

  return (
    <div className="App">
      <h2>Shipping Address Form</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </label>

        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="123 Main St"
            required
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
        </label>

        <label>
          State/Province:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
        </label>

        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            required
          />
        </label>

        <label>
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Your Country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 9876543210"
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <fieldset className="radio-group">
          <legend>Address Type:</legend>
          <label>
            <input
              type="radio"
              name="addressType"
              value="Home"
              checked={formData.addressType === "Home"}
              onChange={handleChange}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              name="addressType"
              value="Office"
              checked={formData.addressType === "Office"}
              onChange={handleChange}
            />
            Office
          </label>
        </fieldset>

        <label className="checkbox">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I accept the Terms & Conditions
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
