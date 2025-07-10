import { Check } from "lucide-react";

export default function PricingCard({ title, price, features, color }) {
  return (
    <div
      className="group bg-white text-blue-950 rounded-xl p-6 border border-gray-200 shadow-sm 
                 hover:shadow-lg hover:border-blue-900 transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className={`text-2xl font-bold mb-6 ${color}`}>{price}</p>

        <ul className="space-y-3 text-sm text-gray-600 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start space-x-2">
              <Check className={`w-4 h-4 mt-0.5 ${color}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Horizontal Buttons */}
      <div className="flex gap-4 mt-auto">
        <button
          className="flex-1 px-4 py-2 rounded font-semibold transition 
                     border border-blue-950 text-blue-950 hover:bg-blue-50"
        >
          Read More
        </button>

        <button
          className="flex-1 px-4 py-2 rounded font-semibold transition 
                     bg-gray-300 text-blue-950 group-hover:bg-blue-950 group-hover:text-white"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
}
