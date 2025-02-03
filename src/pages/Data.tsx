import { useState } from "react";
import { dashboards } from "../libs/dashboards.d";
import { Card, CardContent } from "../components/ui/card";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

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

  const handleDashboardChange = (value: string) => {
    const selected = dashboards.find(
      (dashboard) => dashboard.id === parseInt(value)
    );
    if (selected) {
      setSelectedDashboard(selected);
      setIsLoading(true);
      setError("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-[5rem] bg-gradient-to-r from-blue-50 to-white sm:p-6 lg:p-8">
      {/* Header Section */}
      <Card className="mb-6 shadow-lg rounded-lg bg-[#122e46]">
        <CardContent className="p-4 sm:p-6 text-white">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Live Data Insights
              </h1>
              <p className="text-sm">
                View and analyze real-time business metrics
              </p>
            </div>

            <Select
              value={selectedDashboard.id.toString()}
              onValueChange={handleDashboardChange}
            >
              <SelectTrigger className="w-full sm:w-[280px] bg-[#122e46] text-white border border-gray-400 rounded-md shadow-md focus:ring-2 focus:ring-[#122e46]">
                <SelectValue placeholder="Select dashboard" />
              </SelectTrigger>
              <SelectContent className="bg-[#122e46] text-white border border-gray-400">
                {dashboards.map((dashboard) => (
                  <SelectItem
                    key={dashboard.id}
                    value={dashboard.id.toString()}
                    className="text-white hover:bg-[#4C9EBC] hover:text-[#122e46] transition duration-200"
                  >
                    {dashboard.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Card className="flex-1 shadow-lg rounded-lg bg-[#122e46] text-white">
        <CardContent className="p-0 relative min-h-[500px] lg:min-h-[600px]">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-blue-100 to-white backdrop-blur-sm rounded-lg">
              <div className="flex flex-col items-center p-4 space-y-4 text-center">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-pulse" />
                  <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#122e46] rounded-full border-t-transparent animate-spin" />
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    Loading dashboard
                  </p>
                  <p className="text-sm">
                    Please wait while we fetch your data
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="m-4 bg-[#122e46] text-white rounded-lg shadow-md">
              <AlertCircle className="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              title={selectedDashboard.name}
              className="w-full h-full min-h-[500px] lg:min-h-[600px] rounded-lg"
              src={selectedDashboard.url}
              frameBorder="0"
              allowFullScreen={true}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PowerBIDashboard;
