import React from "react";

const Singleusers = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border dark:border-gray-700">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white text-center">
        <h2 className="text-xl font-bold">{user.login}</h2>
        <p className="text-sm">GitHub ID: {user.id}</p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-10 mb-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-md"
        />
      </div>

      {/* Body Section */}
      <div className="px-6 pb-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Type: <span className="font-medium">{user.type}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Site Admin:{" "}
          <span className="font-medium">{user.site_admin ? "Yes" : "No"}</span>
        </p>

        <div className="flex flex-col gap-2 mt-4 text-sm">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-1 rounded-full hover:bg-blue-700 transition"
          >
            View GitHub Profile
          </a>
          <a
            href={user.repos_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Repositories
          </a>
          <a
            href={user.followers_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Followers List
          </a>
          <p className="text-xs text-gray-400 mt-2 break-all">
            Following URL: {user.following_url.replace("{/other_user}", "")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singleusers;
