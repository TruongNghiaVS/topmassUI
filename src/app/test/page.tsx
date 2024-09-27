"use client";
import { useEffect, useRef, useState } from "react";

export default function DynamicHeightComponent() {
  const [content, setContent] = useState<string[]>([]);
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to add new content (HTML tags)
  const addContent = () => {
    setContent((prevContent) => [
      ...prevContent,
      `<p>New HTML content added at ${new Date().toLocaleTimeString()}</p>`,
    ]);
  };

  // Dynamically adjust height when content changes
  useEffect(() => {
    if (contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={addContent}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md"
      >
        Add Content
      </button>

      <div
        className="transition-all duration-500 overflow-hidden bg-gray-200 w-full"
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        <div
          className="p-4"
          dangerouslySetInnerHTML={{ __html: content.join("") }}
        />
      </div>
    </div>
  );
}
