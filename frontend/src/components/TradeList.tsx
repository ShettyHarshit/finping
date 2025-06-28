import { useEffect, useState } from "react";
import axios from "axios";

type Trade = {
  id: number;
  symbol: string;
  entryPrice: number;
  targetPrice: number;
  stopLoss: number;
  notes?: string;
  createdAt: string;
};

export default function TradeList() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const res = await axios.get("http://localhost:3000/trades");
        setTrades(res.data);
      } catch (err) {
        console.error("Failed to fetch trades", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrades();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading trades...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        📈 Your Logged Trades
      </h2>
      {trades.length === 0 ? (
        <p className="text-gray-500 text-center">
          No trades yet. Log your first one above.
        </p>
      ) : (
        <div className="grid gap-4">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-indigo-600">
                  {trade.symbol.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(trade.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <span className="font-medium">Entry:</span> ₹
                  {trade.entryPrice}
                </div>
                <div>
                  <span className="font-medium">Target:</span> ₹
                  {trade.targetPrice}
                </div>
                <div>
                  <span className="font-medium">Stop Loss:</span> ₹
                  {trade.stopLoss}
                </div>
              </div>
              {trade.notes && (
                <p className="text-sm text-gray-600 mt-3 italic border-t pt-2">
                  {trade.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
