import { user1 } from "@/media";
import Image from "next/image";

export default function LiveActivityFeed({ feed }) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-blue-50 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-950">Live Activity Feed</h3>
                <div className="flex">
                    <div className="relative flex items-center justify-center mr-2">
                        {/* Animated outer ring */}
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>

                        {/* Solid center dot */}
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                    Live
                </div>
            </div>

            {/* Feed Items (Scrollable) */}
            <div className="p-4 space-y-4 max-h-90 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {feed.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-start bg-white border border-gray-100 rounded-md shadow-sm p-4"
                    >
                        <Image
                            src={user1.src} // Rotating mock avatars
                            alt={item.message}
                            className="w-10 h-10 rounded-full object-cover mr-4"
                            width={40}
                            height={40}
                        />
                        <div className="flex-1">
                            <p className="text-sm text-blue-950 font-medium">{item.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
