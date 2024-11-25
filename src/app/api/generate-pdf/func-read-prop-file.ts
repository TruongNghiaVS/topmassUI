import path from "path";
import dayjs from "dayjs";
import { starActive, starNotActive } from "./star";
import { promises as fs } from "fs";
const listLevel = [1, 2, 3, 4, 5];

export const getContact = async (data: any) => {
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
    .replace("{phoneNumber}", data.phoneNumber)
    .replace("{dayOfBirth}", dayjs(data.dateOfBirth).format("DD/MM/YYYY"));
  return htmlContent;
};

export const getEducation = async (data: any) => {
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
                    <div class="mt-10 font-semibold" style="font-size:15px;">Học vấn</div>`;

  for (const item of data) {
    content += htmlContent
      .replace("{schoolName}", item.schoolName)
      .replace("{major}", item.major)
      .replace("{rank}", item.rank);
  }
  content += "</div>";

  return content;
};

export const getExperience = async (data: any) => {
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
  <div class="title-cv font-semibold" style="margin-top: 10px; font-size: 15px">
    Kinh nghiệm làm việc
  </div>`;
  for (const item of data) {
    content += htmlContent
      .replace("{position}", item.position)
      .replace(
        "{fromDate}",
        dayjs(`${item.fromYear}-${item.fromMonth}-1`).format("MM/YYYY")
      )
      .replace(
        "{toDate}",
        item.isEnd
          ? "Còn học"
          : dayjs(`${item.fromYear}-${item.fromMonth}-1`).format("MM/YYYY")
      )
      .replace("{companyName}", item.companyName)
      .replace("{introduction}", item.introduction);
  }
  content += "</div>";

  return content;
};

export const getProject = async (data: any) => {
  const projectPath = path.join(
    process.cwd(),
    "public",
    "files/properties/project.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let content = `<div>
  <div class="title-cv font-semibold" style="margin-top: 10px; font-size:15px">
    Dự án
  </div>`;
  const htmlContent = await fs.readFile(projectPath, "utf8");
  for (const item of data) {
    content += htmlContent
      .replace("{projectName}", item.projectName)
      .replace(
        "{fromDate}",
        dayjs(`${item.fromYear}-${item.fromMonth}-1`).format("MM/YYYY")
      )
      .replace(
        "{toDate}",
        item.isEnd
          ? "Còn làm"
          : dayjs(`${item.fromYear}-${item.fromMonth}-1`).format("MM/YYYY")
      )
      .replace("{customerName}", item.customerName)
      .replace("{position}", item.position);
    // .replace("{introduction}", item.introduction);
  }
  content += "</div>";
  return content;
};

export const getReward = async (data: any) => {
  const rewardPath = path.join(
    process.cwd(),
    "public",
    "files/properties/reward.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let content = `<div style="margin-top: 20px;">
  <div class="font-semibold mt-10" style="font-size:15px;">Giải thưởng</div>`;
  const htmlContent = await fs.readFile(rewardPath, "utf8");
  for (const item of data) {
    content += htmlContent
      .replace("{fullName}", item.fullName)
      .replace("{companyName}", item.companyName);
  }
  content += "</div>";
  return content;
};

export const getCertificate = async (data: any) => {
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
  <div class="mt-10 font-semibold" style="font-size: 15px">Chứng chỉ</div>`;
  for (const item of data) {
    content += htmlContent.replace("{fullName}", item.fullName);
  }
  content += "</div>";
  return content;
};

export const getSkill = async (data: any) => {
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
                    <div class="mt-10 font-semibold" style="font-size: 15px">Kỹ năng</div>`;
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

export const getSoftSkill = async (data: any) => {
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
                    <div class="mt-2" style="font-size: 15px">Kỹ năng mềm</div>`;
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

export const getTools = async (data: any) => {
  const toolPath = path.join(
    process.cwd(),
    "public",
    "files/properties/tool.html"
  );
  if (!data || data?.length === 0) {
    return "";
  }
  let htmlContent = await fs.readFile(toolPath, "utf8");
  let content = `<div style="margin-top: 20px;">
                    <div class="mt-10 font-semibold" style="font-size: 15px">Công cụ</div>`;
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
