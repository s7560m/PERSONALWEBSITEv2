import React, {CSSProperties, FC, memo, ReactFragment, useEffect, useLayoutEffect, useRef, useState} from 'react';
import './App.css';
// @ts-ignore
import * as Granim from 'granim';
import Home from "./sections/home/Home";
import Navigation from "./components/Navigation";
import {CircularProgress, createTheme, ThemeProvider} from "@mui/material";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import AboutMe from "./sections/About Me";
import NavigationMobile from "./components/NavigationMobile";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0971f1",
            light: "#FFFFFF",
        },
        info: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#000000"
        }
    }
})


function App() {

        const circularProgressStyle = {
            right: "20px",
            bottom: "20px",
            position: "fixed"
        } as CSSProperties;

        interface AppPropsProjects {
            setValue?: Function
        }

        const [value, setValue] = useState<number>(0);
        const [showCircularProgress, setShowCircularProgress] = useState<boolean>(false);
        const circularProgressRef = useRef<HTMLDivElement>(null);
        const [aboutMeVisible, setAboutMeVisible] = useState<boolean>(false);
        function getCircularProgressClass() {
            if (aboutMeVisible) return "hide-circular-progress";

            if (showCircularProgress) return "show-circular-progress"

            if (["show-circular-progress", "hide-circular-progress"].indexOf(circularProgressRef.current?.className as string) > -1) {
                return "hide-circular-progress"
            }

            return "init-circular-progress-class"
        }

        const homeRef = useRef<HTMLDivElement>(null);
        const experienceRef = useRef<HTMLDivElement>(null);
        const projectRef = useRef<HTMLDivElement>(null);
        const aboutRef = useRef<HTMLDivElement>(null);

        // scroll functionality via navigation
        function scrollToComponent(section: string, smooth: boolean) {
            switch(section) {
                case "home":
                    homeRef.current?.scrollIntoView({behavior: smooth ? "smooth" : "auto"});
                    break;
                case "experience":
                    experienceRef.current?.scrollIntoView({behavior: smooth ? "smooth" : "auto"});
                    break;
                case "projects":
                    projectRef.current?.scrollIntoView({behavior: smooth ? "smooth" : "auto"});
                    break;
                case "about":
                    aboutRef.current?.scrollIntoView({behavior: smooth ? "smooth" : "auto"});
                    break;
            }
        }

        useLayoutEffect(() => {
            window.scrollTo(0, 0);
        }, [])

        return (
          <ThemeProvider theme={theme}>
            <div className="App">
                <div id="navigation">
                    <Navigation navBtnEventListener={(section: string) => scrollToComponent(section, true)}/>
                </div>
                <div id="navigation-mobile">
                    <NavigationMobile navBtnEventListener={(section: string) => scrollToComponent(section, false)}/>
                </div>
                <div ref={homeRef}>
                    <Home/>
                </div>
                <div ref={experienceRef}>
                    <Experience/>
                </div>
                <div ref={projectRef}>
                    <Projects setValue={setValue} setShowCircularProgress={setShowCircularProgress}/>
                </div>
                <div ref={aboutRef}>
                    <AboutMe setAboutMeVisible={setAboutMeVisible}/>
                </div>
            </div>
              {window.innerWidth > 1030 && <div ref={circularProgressRef} style={circularProgressStyle} className={getCircularProgressClass()}>
                  <CircularProgress size={"60px"} color={"secondary"} thickness={10} value={value} variant="determinate"/>
              </div>}

          </ThemeProvider>
        );
}

export default memo(App);
