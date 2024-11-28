import DetailJobOverview from "@/modules/detail-jobs/details-job-overview";
import { GET_DETAIL_METADATA_JOB } from "@/utils/api-url";
import { axiosInstanceNotToken } from "@/utils/axios";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Fetch dữ liệu từ server hoặc API (nếu cần thiết)
  const res = await axiosInstanceNotToken.get(GET_DETAIL_METADATA_JOB, {
    params: { jobSlug: params.id },
  });

  const data = res.data;

  return {
    title: data?.title || "Default Title",
    description: data?.shortDes || "Default Description",
    keywords: [data?.keyWord],
    authors: [{ name: data?.author }],
    openGraph: {
      title: data?.title,
      description: data?.shortDes,
      images: data?.linkImage ? [{ url: data?.linkImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.shortDes,
      images: data?.coverFullLink
        ? [{ url: data?.linkImage, alt: data?.title }]
        : undefined,
    },
  };
}

export default function DetailJob({ params }: { params: { id: string } }) {
  const { id } = params;
  return <DetailJobOverview id={id} />;
}
