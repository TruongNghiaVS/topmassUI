import React, { useEffect } from "react";
import * as cheerio from "cheerio";

interface TableOfContentsProps {
  content: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const addTOCInContent = (tocItems: TocItem[]) => {
  let content = ` <nav class="inline-block p-4 space-y-1 bg-gray-300 mb-4">
      <div class="font-bold mb-1">Nội dung bài viết</div>
      <ul class="list-disc ">`;
  tocItems.forEach((item) => {
    content += `<li
              key={item.id}
              style="margin-left: ${(item.level - 1) * 20}px"
              class="font-medium"
            >
              <a href=#${item.id}>${item.text}</a>
            </li>`;
  });
  content += " </ul> </nav>";
  return content;
};

const scrollToId = (id: string, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -offset; // Adjust as needed
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault(); // Prevent the default anchor behavior
        const id = target.getAttribute("href")?.substring(1);
        if (id) scrollToId(id, 100); // Adjust offset as needed
      }
    };

    // Add event listener to capture clicks on links
    document.addEventListener("click", handleLinkClick);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const parseHeadings = (html: string): TocItem[] => {
    const $ = cheerio.load(html);
    const headings: TocItem[] = [];

    $("h2, h3").each((_, element) => {
      const level = parseInt(element.tagName[1], 10); // Lấy cấp độ tiêu đề (1, 2, 3, ...)
      const text = $(element).text(); // Nội dung tiêu đề
      const id = text.toLowerCase().replace(/\s+/g, "-"); // Tạo id từ nội dung
      $(element).attr("id", id); // Gắn id vào tiêu đề để scroll
      headings.push({ id, text, level });
    });

    const contentTOC = addTOCInContent(headings);
    const firstH2 = $("h2").first();
    if (firstH2.length) {
      firstH2.before(contentTOC);
    }

    content = $.html();

    return headings;
  };

  const tocItems = parseHeadings(content);

  return (
    <div className="my-4">
      <div
        className="content mt-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default TableOfContents;
