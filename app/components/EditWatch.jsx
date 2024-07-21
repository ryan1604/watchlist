"use client";

import { useState } from "react";
import updateEntry from "@/app/server-actions/updateWatch";

const EditWatch = ({ entry }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    type: entry.type,
    name: entry.name,
    rating: entry.rating,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <span
              onClick={() => setShowModal(false)}
              className="text-white text-2xl hover:text-gray-400 focus:outline-none float-right cursor-pointer"
            >
              &times;
            </span>
            <form action={updateEntry} onSubmit={() => setShowModal(false)} className="space-y-4">
              <input type="hidden" name="id" value={entry.id} />
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300">
                  Category
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-2 p-2 block w-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="Anime">Anime</option>
                  <option value="KDrama">KDrama</option>
                  <option value="CDrama">CDrama</option>
                  <option value="Novel">Novel</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-2 block w-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-300">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-2 p-2 block w-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Entry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditWatch;
