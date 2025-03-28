import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.error("Fetch Error:", err));
  }, [page]);

  // ✅ Handle user deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id)); // ✅ Remove user from UI
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md rounded">
            <img src={user.avatar} alt={user.first_name} className="rounded-full w-16 h-16 mb-2" />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <button onClick={() => navigate(`/edit/${user.id}`)} className="bg-yellow-500 text-white px-2 py-1 mt-2">Edit</button>
            <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1 mt-2 ml-2">Delete</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="mr-2 bg-gray-200 p-2">Prev</button>
        <button onClick={() => setPage(page + 1)} className="bg-gray-200 p-2">Next</button>
      </div>
    </div>
  );
};

export default UsersList;






