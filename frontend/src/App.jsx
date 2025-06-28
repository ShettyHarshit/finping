import TradeForm from "./components/TradeForm";
import TradeList from "./components/TradeList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-12">
      <section>
        <h1 className="text-2xl font-bold text-center mb-6">Log a Trade</h1>
        <TradeForm />
      </section>

      <section>
        <TradeList />
      </section>
    </div>
  );
}

export default App;
