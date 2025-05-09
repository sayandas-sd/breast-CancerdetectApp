"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  // State for input values and error
  const [textureMean, setTextureMean] = useState("");
  const [radiusMean, setRadiusMean] = useState("");
  const [error, setError] = useState("");

 
  // Handle form submission
const handleSubmit = async () => {
  try {
    // Validate inputs
    if (!textureMean || !radiusMean) {
      const message = "Please enter both texture mean and radius mean.";
      setError(message);
      alert(`Error: ${message}`);
      return;
    }

    // Make POST request to FastAPI backend
    const response = await axios.post("http://localhost:8000/predict", {
      texture_mean: parseFloat(textureMean),
      radius_mean: parseFloat(radiusMean),
    });

    // Show prediction result in an alert
    const result = response.data.result;
    alert(`Prediction Result: ${result}`);
    setError("");
  } catch (err) {
    const message =
     
      "An error occurred while fetching prediction. Please try again.";
    setError(message);
    alert(`Error: ${message}`);
  }
};



  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Breast Cancer Prediction</h1>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Texture Mean:
        </label>
        <input
          type="number"
          step="any"
          value={textureMean}
          onChange={(e) => setTextureMean(e.target.value)}
          placeholder="Enter texture mean (e.g., 10.38)"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Radius Mean:
        </label>
        <input
          type="number"
          step="any"
          value={radiusMean}
          onChange={(e) => setRadiusMean(e.target.value)}
          placeholder="Enter radius mean (e.g., 17.99)"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit
      </button>

      {error && (
        <div style={{ marginTop: "20px", textAlign: "center", color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}