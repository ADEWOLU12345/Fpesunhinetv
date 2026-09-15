function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "Campus News",
    "Scholarship",
    "Jobs",
    "Entertainment",
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;