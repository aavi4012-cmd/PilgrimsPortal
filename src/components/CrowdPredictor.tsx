"use client";
import { useState, useEffect } from "react";

export default function CrowdPredictor() {
  const [form, setForm] = useState({
    "Special Day Type": "",
    "Time Slot": "",
    "Month": "",
    "Weekday": "",
    "Day": "",
    "Group Size": ""
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-fill current date values
  useEffect(() => {
    const today = new Date();
    setForm((prev) => ({
      ...prev,
      Month: String(today.getMonth() + 1), // JS months start from 0
      Day: String(today.getDate()),
      Weekday: String(today.getDay()) // 0 = Sunday, 6 = Saturday
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch("http://127.0.0.1:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Special Day Type": Number(form["Special Day Type"]),
          "Time Slot": Number(form["Time Slot"]),
          "Month": Number(form["Month"]),
          "Weekday": Number(form["Weekday"]),
          "Day": Number(form["Day"]),
          "Group Size": Number(form["Group Size"])
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setPrediction(data.prediction);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-24 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#0EA5A4]">
        Crowd Predictor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Special Day Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Day Type
          </label>
          <select
            name="Special Day Type"
            value={form["Special Day Type"]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Special Day</option>
            <option value="0">Normal Day</option>
            <option value="1">Festival</option>
            <option value="2">Holiday</option>
          </select>
        </div>

        {/* Time Slot */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time Slot
          </label>
          <select
            name="Time Slot"
            value={form["Time Slot"]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Time Slot</option>
            <option value="0">Morning</option>
            <option value="1">Afternoon</option>
            <option value="2">Evening</option>
            <option value="3">Night</option>
          </select>
        </div>

        {/* Group Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group Size
          </label>
          <select
            name="Group Size"
            value={form["Group Size"]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Group Size</option>
            <option value="1">Solo</option>
            <option value="2">Couple</option>
            <option value="3">Family (3–5)</option>
            <option value="4">Large Group (6+)</option>
          </select>
        </div>

        {/* Auto-filled date info */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Month
            </label>
            <input
              type="number"
              name="Month"
              value={form["Month"]}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Day
            </label>
            <input
              type="number"
              name="Day"
              value={form["Day"]}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weekday
            </label>
            <input
              type="number"
              name="Weekday"
              value={form["Weekday"]}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] text-white py-2 rounded-lg hover:opacity-90"
        >
          Predict Crowd
        </button>
      </form>

      {prediction !== null && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Predicted Crowd Level:{" "}
            <span className="text-[#F59E0B]">{prediction.toFixed(2)}</span>
          </p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-center text-red-500 font-medium">⚠️ {error}</p>
      )}
    </div>
  );
}
