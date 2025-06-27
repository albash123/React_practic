import React, { useEffect, useState } from "react";
import Singleusers from "./Singleusers";

const Apis = () => {
  const api = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 dark:text-white">
          GitHub Users
        </h1>

        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-300 text-lg font-medium">
            Loading users...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {users.map((item) => (
              <Singleusers key={item.id} user={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apis;
