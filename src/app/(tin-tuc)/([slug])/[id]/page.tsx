import ArticalDetail from "@/sessions/article/detail-artical";
import { GET_BLOG_DETAIL } from "@/utils/api-url";
import { axiosInstanceNotToken } from "@/utils/axios";
import { Metadata } from "next";

type PageProps = {
  params: { id: string };
};

// Hàm tạo metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params;

  // Fetch dữ liệu từ server hoặc API (nếu cần thiết)
  const res = await axiosInstanceNotToken.get(GET_BLOG_DETAIL, {
    params: { articleSlug: id },
  });

  const data = res.data;

  return {
    title: data?.title || "Default Title",
    description: data?.shortDes || "Default Description",
    openGraph: {
      title: data?.title,
      description: data?.shortDes,
      images: data?.coverFullLink ? [{ url: data?.coverFullLink }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.shortDes,
      images: data?.coverFullLink ? [data?.coverFullLink] : undefined,
    },
  };
}

export default function Page({ params }: PageProps) {
  return <ArticalDetail params={params} />;
}
