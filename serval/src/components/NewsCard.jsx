import { Link } from "react-router-dom";
function NewsCard({
  id,
  image,
  title,
  description,
  category,
  date,
}) {
  return (
    <div className="bg-slate-100 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-150 object-cover"
      />

      <div className="p-5">
        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
          {category}
        </span>

        <h3 className="text-2xl font-bold mt-4">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-6">
          <small className="text-gray-500">
            {date}
          </small>

          <Link
            to={`/news/${id}`}
            className="text-blue-700 font-semibold hover:underline">
             Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;