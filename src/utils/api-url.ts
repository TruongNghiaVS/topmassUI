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
export const VALIDATE_ACCOUNT = "/api/Authen/ValidAccount";
export const REVALIDATE_ACCOUNT = "/api/Email/RequestMailValidAccount";
export const REQUEST_RESENDMAIL_CHANGPASSWORD =
  "/api/Email/RequestSendMailChangePassword";

//----------------- Job -------------------//
export const APPLY_CV_WITH_FILE = "/api/Job/ApplyJobWithCreateCV";
export const APPLY_CV_WITH_CV = "/api/Job/ApplyJob";
export const ADD_SAVE_JOB = "/api/JobUtilities/AddJobSave";
export const REMOVE_SAVE_JOB = "/api/JobUtilities/RemoveJobSave";
export const ADD_VIEW_JOB = "/api/Job/AddViewForJob";
export const DETAIL_JOB = "/api/JobWeb/GetDetailInfo";
export const RELATION_JOB = "/api/JobWeb/GetRelationJob";
export const JOB_LIKE = "/api/JobWeb/GetRecommended";
export const GET_HOT_JOB = "/api/JobSearch/GetAttractiveJobs";
export const GET_SUITABLEJOB = "/api/JobSearch/GetSuitableJob";

//------------ cv -----------//
export const GET_ALL_CV = "/api/CV/GetAllCV";
export const ADD_CV = "/api/CV/CreateCV";

//------------ User ------------//
export const GET_JOB_APPLY = "/api/User/GetAllCVApply";
export const GET_JOB_SAVE = "/api/User/GetAllJobSave";
export const SAVE_JOB_SETTING = "/api/UserSetting/SaveJobSetting";
export const GET_JOB_SETTING = "/api/UserSetting/GetJobSetting";
export const GET_PROFILE_SHARE_LINK = "/api/GateWeb/GetInfoCandidate";

//------------ Company ------------//
export const GET_ALL_COMPANY = "/api/Company/GetAllCompany";
export const GET_COMPANY_DETAIL = "/api/Company/GetDetail";
export const GET_COMPANY_GETALLJOB = "/api/Company/GetAllJobOfCompany";
export const POST_COMPANY_ADDFOLLOW = "/api/Company/AddFolow";

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
export const GET_FULL_PROFILE_USER_CV = "/api/User/GetFullProfileUser";
export const GET_ALL_RECRUITER_SEEN_CV = "/api/User/GetAllNTD";

//------------- JobSearch -----------------//
export const GET_JOBSEARCH_HOTJOB = "/api/JobSearch/GetAllBestJobOptimization";
export const SEARCH_JOBS = "/api/JobSearch/SearchJob";

//------------- blog -----------------//
export const GET_ALLBLOGS_BYCATEGORY = "/api/Web/GetAllArticle";
export const GET_BLOG_DETAIL = "/api/Web/GetArticle";
export const GET_BLOG_REATION = "/api/Web/GetAllArticleRelationship";
export const GET_ALL_BLOG_WITH_CATEGORY = "/api/Web/GetAllCategoryWithBlogs";
export const GET_ARTICLE_FOR_TOOL = "/api/Web/GetArticleForTool";

//---------------- Master data ------------------//
export const GET_PROVINCE = "/api/Location/GetAllProvinces";
export const GET_CAREER = "/api/MasterData/GetAllCareer";
export const GET_MASTERDATA_REALMS = "/api/MasterData/InfoRealms";
export const GET_MASTERDATA_EXPERIENCE = "/api/MasterData/GetAllExperience";
export const GET_MASTER_DATA_CAREER = "/api/MasterData/GetAllCareer";
export const GET_MASTERDATA_RANK = "/api/MasterData/GetAllRankCandidate";
export const GET_EDUCATION_LEVEL = "/api/MasterData/AllEducationLevel";
export const GET_JOB_TYPE = "/api/MasterData/GetAllJobType";
export const GET_PROVINCE_SEARCH = "/api/GateWeb/GetRegionalSearch";

//--------------- Digital --------------------//
export const CHECK_CREATE_CV = "/api/DigitalCV/CheckGenFileCV";
export const CREATE_OR_UPDATE_TEMPLATE_CV =
  "/api/DigitalCV/CreateOrUpdateCVWithTemplate";

//----------------- METADATA ---------------//
export const GET_METADATA = "/api/GateWeb/GetInfoMetadata";
export const GET_DETAIL_METADATA_JOB = "/api/JobWeb/GetDetailMetadata";
