import './App.css';
import { useState } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!\n\nType here...");

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4">Markdown Previewer</h2>
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
}

export default App;
