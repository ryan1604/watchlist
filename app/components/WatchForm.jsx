"use client";

import { useState } from "react";

import addEntry from "@/app/server-actions/addEntry";

const WatchForm = () => {
  const initialFormData = {
    type: "Anime",
    name: "",
    rating: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} action={addEntry} className="space-y-6 bg-gray-800  rounded-lg shadow-md">
      <div>
        <label htmlFor="type" className="block text-sm font-semibold text-gray-300">
          Category
        </label>
        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-2 p-2 block w-full pl-3 pr-10 py-2 bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="Anime">Anime</option>
          <option value="KDrama">KDrama</option>
          <option value="CDrama">CDrama</option>
          <option value="Novel">Novel</option>
        </select>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 p-2 block w-full bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <div>
        <label htmlFor="rating" className="block text-sm font-semibold text-gray-300">
          Rating
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="10"
          step="0.1"
          className="mt-2 p-2 block w-full bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Entry
      </button>
    </form>
  );
};

export default WatchForm;
