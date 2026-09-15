import newsData from "../data/newsData";

function FeaturedNews() {
  const featured = newsData[0];
  const sideNews = newsData.slice(1);

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-8">
        Featured News
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Story */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-[500px] object-cover"
          />

          <div className="p-6 bg-white">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
              {featured.category}
            </span>

            <h2 className="text-3xl font-bold mt-4">
              {featured.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {featured.description}
            </p>

            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
              Read Full Story
            </button>
          </div>
        </div>

        {/* Side News */}
        <div className="space-y-6">
          {sideNews.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedNews;