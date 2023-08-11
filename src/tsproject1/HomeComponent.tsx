import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import {

  Box,
} from "@mui/material";
import { MainComponent } from "./MainComponent";
import { NasaApi } from "./nasaApi";
import { FreeDemo } from "./FreeDemo";
import { VideoComponent } from "./Video";
import styled from "@emotion/styled";
import { ResponsiveAppBar } from "./header";

const pages = ["Home", "Offering", "Pricing", "Resources"];
const MainBox = styled(Box)({
  '@media (max-width: 768px)': {
     width:''
  }
})

export function HomeComponent() {
  return(
  <div>
        <header>
          <ResponsiveAppBar/>
        </header>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainComponent />}></Route>
              <Route path="Api" element={<NasaApi />}></Route>
              <Route path="Form" element={<FreeDemo />}></Route>
              <Route path="Video" element={<VideoComponent />}></Route>
            </Routes>
          </BrowserRouter>
        </div>


  );
}
