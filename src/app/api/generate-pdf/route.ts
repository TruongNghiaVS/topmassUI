import { NextResponse } from "next/server";
import path from "path";
import puppeteer from "puppeteer";
import { promises as fs } from "fs";
import { GET_FULL_PROFILE_USER_CV } from "@/utils/api-url";
import { cookies } from "next/headers";
import axios from "axios";
import { HOST_API } from "@/config-global";
import dayjs from "dayjs";
import { starActive, starNotActive } from "./star";

const listLevel = [1, 2, 3, 4, 5];

const getContact = async (data: any) => {
  const contactPath = path.join(
    process.cwd(),
    "public",
    "files/properties/contact.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let htmlContent = await fs.readFile(contactPath, "utf8");
  htmlContent = htmlContent
    .replace("{email}", data.email)
    .replace("{addressInfo}", data.addressInfo)
    .replace("{phoneNumber}", data.phoneNumber);
  return htmlContent;
};

const getEducation = async (data: any) => {
  const educationPath = path.join(
    process.cwd(),
    "public",
    "files/properties/education.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  const htmlContent = await fs.readFile(educationPath, "utf8");
  let content = ` <div style="margin-top: 20px;">
                    <div class="mt-2">Học vấn</div>`;

  for (const item of data) {
    content += htmlContent
      .replace("{schoolName}", item.schoolName)
      .replace("{major}", item.major)
      .replace("{rank}", item.rank);
  }
  content += "</div>";

  return content;
};

const getExperience = async (data: any) => {
  const experiencePath = path.join(
    process.cwd(),
    "public",
    "files/properties/experience.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  const htmlContent = await fs.readFile(experiencePath, "utf8");
  let content = `<div>
  <div class="title-cv" style="margin-top: 10px;">
    Kinh nghiệm làm việc
  </div>`;
  for (const item of data) {
    content += htmlContent
      .replace("{position}", item.position)
      .replace(
        "{fromDate}",
        dayjs(new Date(+item.fromYear, item.fromMonth, 1)).format("MM-YYYY")
      )
      .replace(
        "{toDate}",
        item.isEnd
          ? "Còn học"
          : dayjs(new Date(+item.fromYear, item.fromMonth, 1)).format("MM-YYYY")
      )
      .replace("{companyName}", item.companyName)
      .replace("{introduction}", item.introduction);
  }
  content += "</div>";

  return content;
};

const getProject = async (data: any) => {
  const projectPath = path.join(
    process.cwd(),
    "public",
    "files/properties/project.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let content = `<div>
  <div class="title-cv" style="margin-top: 10px;">
    Dự án
  </div>`;
  const htmlContent = await fs.readFile(projectPath, "utf8");
  for (const item of data) {
    content += htmlContent
      .replace("{projectName}", item.projectName)
      .replace(
        "{fromDate}",
        dayjs(new Date(+item.fromYear, +item.fromMonth, 1)).format("MM-YYYY")
      )
      .replace(
        "{toDate}",
        item.isEnd
          ? "Còn làm"
          : dayjs(new Date(+item.fromYear, item.fromMonth, 1)).format("MM-YYYY")
      )
      .replace("{customerName}", item.customerName)
      .replace("{position}", item.position)
      .replace("{introduction}", item.introduction);
  }
  content += "</div>";
  return content;
};

const getReward = async (data: any) => {
  const rewardPath = path.join(
    process.cwd(),
    "public",
    "files/properties/reward.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let content = `<div style="margin-top: 20px;">
  <div class="mt-2">Giải thưởng</div>`;
  const htmlContent = await fs.readFile(rewardPath, "utf8");
  for (const item of data) {
    content += htmlContent.replace("{fullName}", item.fullName);
  }
  content += "</div>";
  return content;
};

const getCertificate = async (data: any) => {
  const certificatePath = path.join(
    process.cwd(),
    "public",
    "files/properties/certificate.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let htmlContent = await fs.readFile(certificatePath, "utf8");
  let content = `<div style="margin-top: 20px;">
  <div class="mt-2">Chứng chỉ</div>`;
  for (const item of data) {
    content += htmlContent
      .replace("{companyName}", item.companyName)
      .replace("{fullName}", item.fullName);
  }
  content += "</div>";
  return content;
};

const getSkill = async (data: any) => {
  const skillPath = path.join(
    process.cwd(),
    "public",
    "files/properties/skill.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let htmlContent = await fs.readFile(skillPath, "utf8");
  let content = `<div style="margin-top: 20px;">
                    <div class="mt-2">Kỹ năng</div>`;
  for (const item of data) {
    let level = "";
    listLevel.forEach((idx) => {
      level += idx <= item.level ? starActive : starNotActive;
    });
    content += htmlContent
      .replace("{fullName}", item.fullName)
      .replace("{level}", level);
  }
  content += "</div>";
  return content;
};

const getSoftSkill = async (data: any) => {
  const softskillPath = path.join(
    process.cwd(),
    "public",
    "files/properties/soft-skill.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let htmlContent = await fs.readFile(softskillPath, "utf8");
  let content = `<div style="margin-top: 20px;">
                    <div class="mt-2">Kỹ năng mềm</div>`;
  for (const item of data) {
    let level = "";
    listLevel.forEach((idx) => {
      level += idx <= item.level ? starActive : starNotActive;
    });
    content += htmlContent
      .replace("{fullName}", item.fullName)
      .replace("{level}", level);
  }
  content += "</div>";
  return content;
};

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const url = HOST_API + GET_FULL_PROFILE_USER_CV;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
        "Content-Type": "application/json",
      },
    });

    const filePath = path.join(
      process.cwd(),
      "public",
      "files/cv-template.html"
    );

    let htmlContent = await fs.readFile(filePath, "utf8");
    if (!htmlContent) {
      return NextResponse.json(
        { error: "HTML string is required" },
        { status: 400 }
      );
    }

    const profileUser = res.data.data.profileCv;

    const certificate = await getCertificate(res.data.data.allCertify);
    const contact = await getContact(profileUser);
    const education = await getEducation(res.data.data.educations);
    const experience = await getExperience(res.data.data.experiences);
    const project = await getProject(res.data.data.allProjects);
    const reward = await getReward(res.data.data.allReward);
    const skill = await getSkill(res.data.data.allSkill);
    const softSkill = await getSoftSkill(res.data.data.allsoftSkill);

    htmlContent = htmlContent
      .replace(`{contact}`, contact)
      .replace("{education}", education)
      .replace("{soft_skill}", softSkill)
      .replace("{skill}", skill)
      .replace("{reward}", reward)
      .replace("{certificates}", certificate)
      .replace("{introduction}", profileUser.introduction)
      .replace("{name}", profileUser.fullName)
      .replace("{linkProFile}", profileUser.avatarLink)
      .replace("{position}", profileUser.position)
      .replace("{experiences}", experience)
      .replace("{project}", project);

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // // Set the content of the page to the HTML string
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // // Close the browser
    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="document.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to generate PDF", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
