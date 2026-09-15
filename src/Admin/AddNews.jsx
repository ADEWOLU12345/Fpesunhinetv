function AddNews() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">
        Add News
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="News Title"
          className="w-full border p-3 rounded"
        />

        <select className="w-full border p-3 rounded">
          <option>Campus News</option>
          <option>Scholarship</option>
          <option>Jobs</option>
          <option>Entertainment</option>
        </select>

        <textarea
          rows="8"
          placeholder="News Content"
          className="w-full border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Publish News
        </button>
      </form>
    </div>
  );
}

export default AddNews;