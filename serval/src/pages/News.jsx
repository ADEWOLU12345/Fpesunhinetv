import { useState } from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

function News() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold text-center mb-4">
        Latest News
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Stay updated with the latest news from FPE Sunshine TV.
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="my-6">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {filteredNews.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No news found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              image={news.image}
              title={news.title}
              description={news.description}
              category={news.category}
              date={news.date}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default News;