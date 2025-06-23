'use client';
import React, { useState } from "react";
import { Header } from "@/app/LandingComponent/Header";
import { Footer } from "../LandingComponent/Footer";
import { Howitworks } from "../LandingComponent/Howitworks";
import { ConvexProvider } from "convex/react";
import { Contact } from "../LandingComponent/contact";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery, useMutation } from "convex/react";
import { IoPlayOutline,IoAlertCircleOutline } from "react-icons/io5";


export default function dashboard() {
  const alerts = useQuery(api.alerts.getAlerts);
  const addAlert = useMutation(api.alerts.addAlert);
  const toggleAlert = useMutation(api.alerts.toggleAlert);
  const deleteAlert = useMutation(api.alerts.deleteAlert);

  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    advocateName: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await addAlert(formData);
      setShowForm(false);
      setFormData({ advocateName: "", email: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add alert");
    }
  };

 const handleToggle = async (id: string) => {
  await toggleAlert({ id: id as Id<"alerts"> });
};

const handleDelete = async (id: string) => {
  if (confirm("Are you sure you want to delete this alert?")) {
    await deleteAlert({ id: id as Id<"alerts"> });
  }
};

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w mx-auto p-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
        
          {/* <p className="text-gray-600 mb-6">
            Helping advocates stay informed with automated case listing notifications from high court cause lists.
          </p> */}
          
   <div className="flex justify-between items-center mb-8">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Alert Dashboard</h1>
  <button
    onClick={() => setShowForm(!showForm)}
    className="bg-black hover:bg-slate-800 text-white px-3 py-2 sm:px-3 mb-2 sm:py-2 md:px-4 md:py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-sm md:text-base min-h-[36px] sm:min-h-[36px] md:min-h-[40px]"
  >
    <span>+ Add Alert</span>
  </button>
</div>
        </div>

        {/* Add Alert Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Add New Alert Preference</h3>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Advocate Name</label>
                  <input
                    type="text"
                    name="advocateName"
                    value={formData.advocateName}
                    onChange={(e) => setFormData({...formData, advocateName: e.target.value})}
                    placeholder="Enter advocate name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <br></br>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <button
                  type="submit"
                  className="bg-black hover:bg-slate-300 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Add Alert
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setError("");
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                
              </div>
            </form>
          </div>
        )}

        {/* Alert Preferences List */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  {/* Alert Preferences Card */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-gray-200">
    {alerts?.length === 0 ? (
      <div className="p-6 text-center text-gray-500">
        No alert preferences found. Click "+ Add Alert" to create one.
      </div>
    ) : (
      alerts?.map((alert) => (
        <div
          key={alert._id}
          className="p-6 border-b border-gray-200 last:border-b-0 transition-colors"
        >
          <div className="border border-gray-200 p-4 rounded-lg">
            {/* Advocate name */}
            <h3 className="font-bold text-lg text-gray-900">{alert.advocateName}</h3>

     <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
  <p className="text-gray-600 flex-1 truncate">{alert.email}</p>

  <div className="flex items-center gap-2 flex-shrink-0">
    {/* Run Alert Button */}
    <button
      className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-200 rounded-md transition-colors border border-slate-300"
      title="Run alert now"
    >
      <span className="text-xl text-black">
        <IoPlayOutline />
      </span>
      <span className="text-sm font-medium text-black sm:inline">Run Alert</span>
    </button>

    {/* Delete Button */}
    <button
      onClick={() => handleDelete(alert._id)}
      className="p-1.5 text-white bg-red-500 hover:bg-red-600 transition-colors rounded-md"
      title="Delete alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
</div>
            {/* Active/Inactive Toggle Button */}
            <div className="mt-4">
              <button
                onClick={() => handleToggle(alert._id)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  alert.isActive
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {alert.isActive ? 'Active' : 'Inactive'}
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  {/* Recent Alerts Card */}
  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Alerts</h2>
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-500 text-center">No alerts sent yet.</p>
    </div>
  </div>
</div>
{/* End of Alert Preferences List */}
      </div>
      </div>
     
      <Footer />
    </div>
  );
}