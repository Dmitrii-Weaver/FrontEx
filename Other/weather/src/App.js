import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, CloudRain, CloudSnow, Cloud, Search } from "lucide-react";

function App()  {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    try {
      const response = await fetch(
        `https://wttr.in/${city}?format=%C+%t`
      );
      const data = await response.text();
      if (!data) throw new Error("Invalid response");
      const [condition, temperature] = data.split(" ");
      setWeather({ condition, temperature });
    } catch (error) {
      alert("City not found or API error");
    }
  };

  const getWeatherIcon = (condition) => {
    if (condition.includes("Sunny")) return <Sun size={48} className="text-yellow-400" />;
    if (condition.includes("Rain")) return <CloudRain size={48} className="text-blue-400" />;
    if (condition.includes("Snow")) return <CloudSnow size={48} className="text-gray-200" />;
    return <Cloud size={48} className="text-gray-400" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl rounded-2xl border border-gray-300 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-6">🌎 Weather App</h2>
      <div className="flex gap-2 mb-6">
        <input
          className="border p-3 flex-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-lg shadow-md font-semibold transition flex items-center gap-2"
          onClick={fetchWeather}
        >
          <Search size={20} /> Search
        </button>
      </div>
      {weather && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-6 bg-white text-gray-900 rounded-xl shadow-lg flex flex-col items-center"
        >
          {getWeatherIcon(weather.condition)}
          <h3 className="text-2xl font-bold mt-4">{city}</h3>
          <p className="text-lg text-gray-700 mt-2">{weather.condition}</p>
          <p className="text-5xl font-extrabold mt-2">{weather.temperature}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
export default App;
