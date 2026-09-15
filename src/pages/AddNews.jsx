import { useState } from "react";

function AddNews() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("News submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">

      <h1 className="text-3xl font-bold mb-8">
        Add News
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <input
          type="text"
          name="title"
          placeholder="News Title"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="category"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select Category</option>
          <option>Campus News</option>
          <option>Scholarships</option>
          <option>Sports</option>
          <option>Entertainment</option>
          <option>Jobs</option>
        </select>

        <textarea
          name="description"
          rows="6"
          placeholder="Write the news..."
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />

        <button
          type="submit"
          className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
        >
          Publish News
        </button>

      </form>

    </div>
  );
}

export default AddNews;