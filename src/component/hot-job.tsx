"use client";
import { Box, Tab, useTheme } from "@mui/material";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { SliderJob } from "./slider-job";

export const HotJob = () => {
  let theme = useTheme();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "#eaeaea",
                  "& .Mui-selected": {
                    color: "#981B1E !important",
                  },
                }}
              >
                <TabList onChange={handleChange}>
                  <Tab
                    className="text-[22px] text-defaultText font-bold leading-[44px] text-uppercase hover:text-default"
                    label="Việc làm nổi bật"
                    value="1"
                  />
                  <Tab
                    className="text-[22px] text-defaultText font-bold leading-[44px] text-uppercase hover:text-default"
                    label="Việc làm mới"
                    value="2"
                  />
                </TabList>
              </Box>
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
