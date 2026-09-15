import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

function NewsDetails() {
  const { id } = useParams();

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">
          News Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">

      {/* Image */}
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      {/* Category */}
      <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mt-8">
        {news.category}
      </span>

      {/* Title */}
      <h1 className="text-5xl font-bold mt-6">
        {news.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 mt-6 text-gray-600">

        <span className="flex items-center gap-2">
          <FaUser />
          {news.author}
        </span>

        <span className="flex items-center gap-2">
          <FaCalendarAlt />
          {news.date}
        </span>

        <span className="flex items-center gap-2">
          <FaTag />
          {news.category}
        </span>

      </div>

      {/* Article */}
      <div className="mt-10 text-lg leading-9 text-gray-700">
        <p>{news.description}</p>

        <p className="mt-6">
          {news.content}
        </p>
      </div>

    </section>
  );
}

export default NewsDetails;