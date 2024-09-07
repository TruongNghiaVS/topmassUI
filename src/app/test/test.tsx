import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";

interface Props {
  htmlContent: string;
}

const MyPage: React.FC<Props> = ({ htmlContent }) => {
  console.log(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "public", "files/cv.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      htmlContent,
    },
  };
};

export default MyPage;
