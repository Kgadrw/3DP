import { useState } from "react";
import { dashboards } from "../libs/dashboards.d";

const PowerBIDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError(
      "Failed to load Power BI dashboard. Please check your permissions and connection."
    );
  };

  const handleDashboardChange = (event: { target: { value: string } }) => {
    const selected: any = dashboards.find(
      (dashboard) => dashboard.id === parseInt(event.target.value)
    );
    setSelectedDashboard(selected);
    setIsLoading(true);
    setError("");
  };

  return (
    <div className="relative flex flex-col w-full h-screen bg-gray-50 mt-[5rem]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              Live Data Insights
            </h1>
            <div className="relative">
              <select
                value={selectedDashboard.id}
                onChange={handleDashboardChange}
                className="w-64 px-4 py-2 pr-8 text-sm bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {dashboards.map((dashboard) => (
                  <option key={dashboard.id} value={dashboard.id}>
                    {dashboard.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 p-6">
        <div className="relative h-full overflow-hidden bg-white rounded-lg shadow-lg">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
                <div className="text-lg font-medium text-gray-700">
                  Loading dashboard...
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-x-0 top-0 p-4 mx-4 mt-4 border border-red-200 rounded-lg bg-red-50">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-red-800">Error</h3>
                  <p className="mt-1 text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <iframe
            title={selectedDashboard.name}
            className="w-full h-full"
            src={selectedDashboard.url}
            frameBorder="0"
            allowFullScreen={true}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
