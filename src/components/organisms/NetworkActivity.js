"use client"
import { Chart } from "react-google-charts";
import LiveActivityFeed from "@/components/molecules/LiveActivityFeed";
import JoinButton from "../atoms/JoinButton";

export default function NetworkActivity() {
    const chartData = [
        ["Time", "Activity"],
        ["10:00", 5],
        ["10:30", 8],
        ["11:00", 12],
        ["11:30", 10],
        ["12:00", 14],
    ];

    const chartOptions = {
        hAxis: { title: "Time" },
        vAxis: { title: "Activities" },
        legend: "none",
        colors: ["#f4b400"],
        chartArea: { width: "80%", height: "70%" },
    };

    const liveFeed = [
        { message: "Ritika Shah joined Mumbai Founders Circle", time: "2 mins ago" },
        { message: "Arjun Mehta booked a coaching session", time: "7 mins ago" },
        { message: "Tanvi Patel published a success story", time: "10 mins ago" },
        { message: "Ritika Shah joined Mumbai Founders Circle", time: "2 mins ago" },
        { message: "Arjun Mehta booked a coaching session", time: "7 mins ago" },
    ];

    return (
        <section className="bg-white py-16" id="events">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: chart + heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">
                        Real-time Network Activity
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        See how members engage, collaborate, and grow their network inside Aurum.
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="300px"
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>

                    <JoinButton />
                </div>

                {/* Right: Live feed */}
                <LiveActivityFeed feed={liveFeed} />
            </div>
        </section>
    );
}
