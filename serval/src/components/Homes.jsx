import { useState } from "react";

import Hero from "./Hero";
import FeaturedNews from "./FeaturedNews";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import NewsCard from "./NewsCard";

import newsData from "../data/newsData";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredNews = newsData.filter((news) => {
  const matchesSearch =
    news.title.toLowerCase().includes(search.toLowerCase()) ||
    news.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    news.category === selectedCategory;

  return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      <Hero />
      <FeaturedNews />
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">
          🔥 Breaking News
        </h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <p className="text-red-500 mt-4">
            Search: {search}
        </p>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="bg-slate-100 overflow-hidden hover:shadow-2xl transition duration-300 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
          <NewsCard
          key={news.id}
          id={news.id}
          image={news.image}
          title={news.title}
          description={news.description}
          category={news.category}
          date={news.date}
          />
          ))
          ) : (
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-bold text-gray-600">
            No news found
            </h2>
            <p className="text-gray-500 mt-2">
            Try searching with another keyword.
            </p>
          </div>
          )}
        </div>
        
      </section>
    </>
  );
}

export default Home;