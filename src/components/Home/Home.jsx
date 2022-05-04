import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "./content.png";
import Content2 from "./content2.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

import Spin from "react-reveal/Spin";

function Home() {
  return (
    <>
      <Box>
        <Container>
          <Roll left cascade>
                      <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginTop: "12%",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: "45px",
                }}
              >
                Reactjs Animation
              </Typography>
              <Typography
                sx={{
                  justifyContent: "center",
                  textAlign: "justify",
                }}
              >
                React-animations — the library is built on all animations with
                animate. css. It is easy to use and has a lot of animation
                collections. React-animation works with any inline style library
                that supports the use of objects to define keyframe animations,
              </Typography>

              <button
                spacing={2}
                style={{
                  justifyContent: "space-between",
                  marginLeft: "1%",
                }}
              >
                Button
              </button>

              <button
                style={{
                  justifyContent: "space-between",
                  marginLeft: "2%",
                }}
              >
                Button
              </button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                sx={{
                  // animationName: "rotate",
                  // animationDuration: "2s",
                  // animationIterationCount: "infinite",
                  // animationTimingFunction: "linear",
                  display: "inline-block",
                  animationDelay: "0s",
                  maxWidth: "100%",
                  height: "auto",
                  // animation: "suspension 2s linear infinite",
                  // animation:"${rotate} 2s linear infinite",

                  // "@keyframes": {
                  //   from: {
                  //     transform: "rotate(0deg)",
                  //   },
                  //   to: {
                  //     transform: "rotate(360deg)",
                  //   },
                  // },
                }}
                src={Banner}
              ></Box>
            </Grid>
          </Grid>
          </Roll>

          <Fade left cascade>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                src={Content2}
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  animationName:"rotate",
                  animationDuration:"3s",
                  animationIterationCount:"infinite",
                  animation:"${rotate} 5s linear infinite",
                  // "@keyframes rotate": {
                  //   from: {
                  //     transform: "rotate(0deg)",
                  //   },
                  //   to: {
                  //     transform: "rotate(360deg)",
                  //   },
                  // },

                  // animation: "suspension 2s linear infinite",
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginTop: "9%",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: "45px",
                }}
              >
                Reactjs Illustrations
              </Typography>
              <Typography
                sx={{
                  justifyContent: "center",
                  textAlign: "justify",
                }}
              >
                As a UI Designer & Developer, my illustration skills are not the
                best. So, when I have to create illustrations for products, I
                always try to make them simple, reusable and able to cover
                different scenarios
              </Typography>
            </Grid>
          </Grid>

          </Fade>
                <Bounce right cascade>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginTop: "9%",
              }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: "45px",
                }}
              >
                Reactjs Illustrations
              </Typography>
              <Typography
                sx={{
                  justifyContent: "center",
                  textAlign: "justify",
                }}
              >
                As a UI Designer & Developer, my illustration skills are not the
                best. So, when I have to create illustrations for products, I
                always try to make them simple, reusable and able to cover
                different scenarios
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                src={Content2}
                sx={{
                  marginBottom: { xs: "7%", md: "5%" },
                  animation: "suspension 2s linear infinite",
                  maxWidth: "100%",
                  height: "auto",
                  animation: "suspension 2s linear infinite",
                }}
              ></Box>
            </Grid>
          </Grid>
          </Bounce>
        </Container>
      </Box>
    </>
  );
}

export default Home;
