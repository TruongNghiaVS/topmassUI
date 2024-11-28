"use client";
import React, { useEffect, useRef } from "react";

export default function ScrollableContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current?.scrollTop ?? 0;
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[300px_1fr] h-screen">
        <div className="bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold">Fixed Box</h1>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
          <p>This box is fixed in height and width.</p>
        </div>

        <div className="overflow-y-auto bg-gray-100 p-4">
          <h1 className="text-xl font-bold">Scrollable Box</h1>
          <div className="space-y-4">
            <p>Content Block 1</p>
            <p>Content Block 2</p>
            <p>Content Block 3</p>
            <p>Content Block 4</p>
            <p>Content Block 5</p>
            <p>Content Block 6</p>
            <p>Content Block 7</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 8</p>
            <p>Content Block 9</p>
            <p>Content Block 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
