import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const [message, setMessage] = useState("");

  // Fetch user details
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.error("Fetch Error:", err));
  }, [id]);

  // Handle update request
  const handleUpdate = async () => {
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      setMessage("User details updated successfully!");
      setTimeout(() => navigate("/users"), 1500); // Redirect after success
    } catch (error) {
      console.error("Update Error:", error);
      setMessage("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit User</h2>
        {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
        <input
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          placeholder="First Name"
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          placeholder="Last Name"
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <button
          onClick={handleUpdate}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditUser;
