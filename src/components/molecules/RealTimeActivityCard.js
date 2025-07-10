import Image from "next/image";

export default function RealTimeActivityCard({ avatar, name, activity, time }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex space-x-4 items-start">
      <Image
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
        width={48}
        height={48}
      />
      <div>
        <p className="text-sm text-blue-950 font-medium">
          {name} <span className="font-normal text-gray-600">{activity}</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}
