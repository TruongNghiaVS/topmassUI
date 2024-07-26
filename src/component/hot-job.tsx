"use client";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { SliderJob } from "./slider-job";
import { ScrollFilter } from "./scrol-filter";

export const HotJob = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="bg-white max-1280:px-2">
        <div className="container mx-auto">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderColor: "#eaeaea",
                  "& .Mui-selected": {
                    color: "#D14B00 !important",
                  },
                }}
              >
                <div className="lg:flex items-center justify-between">
                  <TabList
                    onChange={handleChange}
                    TabIndicatorProps={{
                      sx: {
                        background: "#D14B00 !important",
                      },
                    }}
                    className="lg:pl-[50px] pl-2"
                  >
                    <Tab
                      className="text-[22px] px-0 overflow-visible mx-4 text-defaultText font-bold capitalize leading-[44px]  relative after:absolute after:content-[''] after:right-[-16px] after:top-[10px] after:bottom-0 after:h-4/6 after:w-0.5 after:bg-black z-[2]"
                      label="Việc làm nổi bật"
                      value="1"
                    />
                    <Tab
                      className="text-[22px] px-0 mx-4 text-defaultText font-bold leading-[44px] capitalize"
                      label="Việc làm mới"
                      value="2"
                    />
                  </TabList>
                  <ScrollFilter />
                </div>
              </Box>
              <div className="pl-2.5 py-1.5 rounded-md border-[1px] border-solid border-[#8BCAFC] my-5 text-sm flex items-center bg-[#f0f6ff]">
                <img src="/imgs/light-note.png" alt="" className="w-4 mr-2" />
                Gợi ý:{" "}
                <span>
                  Di chuột vào tiêu đề làm việc để xem thêm thông tin chi tiết
                </span>
              </div>
              <TabPanel value="1" className="p-0 mt-2">
                <SliderJob />
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
};
