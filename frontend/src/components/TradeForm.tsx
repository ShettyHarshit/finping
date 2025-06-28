import { useState } from "react";
import axios from "axios";

export default function TradeForm() {
  const [form, setForm] = useState({
    symbol: "",
    entryPrice: "",
    targetPrice: "",
    stopLoss: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/trades", {
        ...form,
        entryPrice: parseFloat(form.entryPrice),
        targetPrice: parseFloat(form.targetPrice),
        stopLoss: parseFloat(form.stopLoss),
      });

      alert("Trade logged successfully");

      setForm({
        symbol: "",
        entryPrice: "",
        targetPrice: "",
        stopLoss: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to log trade.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200 space-y-5"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Log a New Trade
      </h2>

      <input
        name="symbol"
        value={form.symbol}
        onChange={handleChange}
        placeholder="Stock Symbol (e.g. RELIANCE)"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        name="entryPrice"
        value={form.entryPrice}
        onChange={handleChange}
        placeholder="Entry Price"
        type="number"
        step="any"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        name="targetPrice"
        value={form.targetPrice}
        onChange={handleChange}
        placeholder="Target Price"
        type="number"
        step="any"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        name="stopLoss"
        value={form.stopLoss}
        onChange={handleChange}
        placeholder="Stop Loss"
        type="number"
        step="any"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes (optional)"
        rows={3}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition"
      >
        Submit Trade
      </button>
    </form>
  );
}
