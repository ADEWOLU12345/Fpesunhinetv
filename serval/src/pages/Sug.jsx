import { Link } from "react-router-dom";
import SugCard from "../components/SugCard";
import Sugs from "../data/sugData";


function Sug() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900 ">Federal Polytechnic Ede <br/>Students Union Leadership<br/>Representative </h1>
      
      <h2 className="font-3xl mb-8 mt-4 font-bold"> This Student Union Leadership under leadership of comrade Ajayi Sodiq (Shurdman)</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Sugs.map((sugs) => (
                <SugCard
                  key={sugs.id}
                  sug={sugs}

                />
              ))}
      </div>
    </div>
  );
}

export default Sug;