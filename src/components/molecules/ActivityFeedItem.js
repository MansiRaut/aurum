import { UserPlus } from "lucide-react";

export default function ActivityFeedItem({ icon, title, time }) {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex items-start space-x-4">
      <div className="bg-blue-100 text-blue-900 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-blue-950 font-medium">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}
