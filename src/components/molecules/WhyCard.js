export default function WhyCard({ icon, bgColor, title, description, num }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition text-left">
      {/* Icon Circle */}


      {num ? <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold mb-4">
        {num}
      </div> : <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${bgColor}`}
      >
        {icon}
      </div>}

      <h3 className="text-lg font-semibold text-blue-950 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
