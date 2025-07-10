export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Entrepreneurs Onboarded" },
    { value: "50+", label: "Cities Represented" },
    { value: "200+", label: "Networking Events" },
    { value: "98%", label: "Member Satisfaction" },
  ];

  return (
    <section className="py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat, idx) => {
            const isLeftBorderMobile = idx % 2 !== 0; // index 1, 3
            const isLeftBorderDesktop = idx !== 0;    // index 1, 2, 3

            return (
              <div
                key={idx}
                className={`px-4 py-6 
                  ${isLeftBorderMobile ? 'border-l border-gray-300 md:border-0' : ''} 
                  ${isLeftBorderDesktop ? 'md:border-l md:border-gray-300' : ''}`}
              >
                <div className="text-4xl font-bold text-yellow-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
