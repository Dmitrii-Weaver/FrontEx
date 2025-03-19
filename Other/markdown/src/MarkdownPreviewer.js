import { useState } from "react";
import { marked } from "marked";
import { motion } from "framer-motion";

export default function MarkdownPreviewer() {

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const [markdown, setMarkdown] = useState("# Hello, Markdown!\n\nType here...");

  console.log("Raw Markdown:", markdown);
  console.log("Converted HTML:", marked(markdown));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full mx-auto p-8 bg-gradient-to-br from-gray-200 to-gray-100 shadow-2xl rounded-2xl border border-gray-300"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">📝 Markdown Previewer</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <textarea
            className="w-full md:w-1/2 h-64 p-4 border border-gray-400 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 h-64 p-4 bg-white border border-gray-400 rounded-xl shadow-md overflow-auto text-left"
          >
            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
