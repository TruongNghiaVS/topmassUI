export const REGISTER = "/api/Register/RegisterUser";
export const LOGIN = "/api/Authen/LoginUser";
export const FORGOT_PASSWORD = "/api/Forget/RequestChangePassword";
export const CONFIRM_FORGOT_PASSWORD =
  "/api/Forget/ConfirmToPageChangePassword";
export const FORGOT_CHANGE_PASSWORD = "/api/Forget/ChangePassword";
export const UPDATE_BASIC_INFO = "/api/Profile/UpdateBasicInfo";
export const CURRENT_USER = "/api/Authen/GetUserCurrent";
export const UPDATE_MODE = "/api/Profile/UpdateMode";
export const UPLOAD_IMG = "/Media/UploadAvatar";

//----------------- Job -------------------//
export const APPLY_CV_WITH_FILE = "/api/Job/ApplyJobWithCreateCV";
export const APPLY_CV_WITH_CV = "/api/Job/ApplyJob";
export const ADD_SAVE_JOB = "/api/JobUtilities/AddJobSave";
export const REMOVE_SAVE_JOB = "/api/JobUtilities/RemoveJobSave";
export const ADD_VIEW_JOB = "/api/Job/AddViewForJob";
export const DETAIL_JOB = "/api/JobWeb/GetDetailInfo";
export const RELATION_JOB = "/api/JobWeb/GetRelationJob";
export const JOB_LIKE = "/api/JobWeb/GetRecommended";

//------------ cv -----------//
export const GET_ALL_CV = "/api/CV/GetAllCV";
export const ADD_CV = "/api/CV/CreateCV";

//------------ User ------------//
export const GET_JOB_APPLY = "/api/User/GetAllCVApply";
export const GET_JOB_SAVE = "/api/User/GetAllJobSave";

//------------ Company ------------//
export const GET_All_Company = "/api/Company/GetAllCompany";
export const GET_Company_Detail = "/api/Company/GetDetail";
export const GET_Company_GetAllJob = "/api/Company/GetAllJobOfCompany";
export const Post_Company_AddFolow = "/api/Company/AddFolow";

//------------ Location ------------//
export const GET_All_Provinces = "/api/Location/GetAllProvinces";

//------------ Education ------------//
export const GET_ALL_EDUCATION = "/api/Education/GetAllEducation";
export const ADD_OR_UPDATE_EDUCATION = "/api/Education/SaveEducations";

//-------------- Experiences ------------------//
export const ADD_OR_UPDATE_EXPERIENCE = "/api/Experience/SaveExperiences";
export const GET_ALL_EXPERIENCES = "/api/Experience/GetAllExperience";

//------------- Project ---------------------//
export const GET_ALL_PROJECT = "/api/ProjectUser/GetAllProjectUser";
export const ADD_OR_UPDATE_PROJECT = "/api/ProjectUser/SaveProjectUsers";

//----------- Skill & Shoft Skill ------------//
export const GET_ALL_SKILL = "/api/User/GetAllSkills";
export const ADD_OR_UPDATE_SKILL = "/api/User/SaveSkills";
export const GET_ALL_SOFT_SKILL = "/api/User/GetAllSoftSkills";
export const ADD_OR_UPDATE_SOFT_SKILL = "/api/User/SaveSoftSkills";

//-------- Tools -----------//
export const GET_ALL_TOOL = "/api/User/GetAllTools";
export const ADD_OR_UPDATE_TOOL = "/api/User/SaveTools";

//------- Rewards ---------//
export const GET_ALL_REWARD = "/api/CertifyUser/GetAllRewardUser";
export const ADD_OR_UPDATE_REWARD = "/api/CertifyUser/SaveRewardUsers";
export const GET_ALL_CERTIFI = "/api/CertifyUser/GetAllCertifyUser";
export const ADD_OR_UPDATE_CERTIFY = "/api/CertifyUser/SaveCertifyUsers";

//------------- UserCv -----------------//
export const SAVE_USER_CV = "/api/User/SaveProfileCv";
export const GET_INFOMATION_USER_CV = "/api/User/GetProfileUserCV";
