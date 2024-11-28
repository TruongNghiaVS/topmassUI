import { getMetadataToScreen } from "@/modules/helper/api-generate-metadata";
import InsuranceOneTimeOverview from "@/modules/insuarance-one-time/insuarance-one-time-overivew";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch dữ liệu từ server hoặc API (nếu cần thiết)

  const data = await getMetadataToScreen("tool_bhxh");

  return {
    title: data?.metaTitle || "Default Title",
    description: data?.metaDes || "Default Description",
    keywords: [data?.metaKeyWord],
    authors: [{ name: data?.metaAuthor }],
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDes,
      images: data?.metaImage ? [{ url: data?.metaImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: data?.metaTitle,
      description: data?.metaDes,
      images: data?.coverFullLink
        ? [{ url: data?.metaImage, alt: data?.metaTitle }]
        : undefined,
    },
  };
}

export default function InsuranceOneTime() {
  return <InsuranceOneTimeOverview />;
}
