import React, {memo, useEffect, useLayoutEffect, useMemo, useRef} from 'react';
import './App.css';
import Home from "./sections/home/Home";
import Navigation from "./components/Navigation";
import {createTheme, ThemeProvider} from "@mui/material";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import AboutMe from "./sections/About Me";
import NavigationMobile from "./components/NavigationMobile";
import {useThemeStore} from "./zustandStore";
import {useDarkMode} from "./hooks/useDarkMode";
import {Routes, Route, BrowserRouter} from "react-router";
import Blog from "./sections/blog/blog";

function App() {

    const darkMode = useThemeStore((state) => state.darkMode);
    const theme = useMemo(() => createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
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
    }), [darkMode])

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

        useEffect(() => {
            document.body.className = darkMode ? "dark" : "light";
        }, [darkMode]);

        const {color} = useDarkMode()

        return (
          <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
                <Route key="home" path="/" element={
                    <div className="App" style={{color}}>
                        <div id="navigation">
                            <Navigation navBtnEventListener={(section: string) => scrollToComponent(section, true)}/>
                        </div>
                        <div id="navigation-mobile">
                            <NavigationMobile
                                navBtnEventListener={(section: string) => scrollToComponent(section, false)}/>
                        </div>
                        <div ref={homeRef}>
                            <Home/>
                        </div>
                        <div ref={experienceRef}>
                            <Experience/>
                        </div>
                        <div ref={projectRef}>
                            <Projects/>
                        </div>
                        <div ref={aboutRef}>
                            <AboutMe/>
                        </div>
                    </div>}/>
                <Route key="blog" path="/blog" element={<Blog/>}/>
            </Routes>
          </BrowserRouter>
          </ThemeProvider>
        );
}

export default memo(App);
