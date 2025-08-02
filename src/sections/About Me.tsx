import './About Me.css'
import MacDialog from "./experience/components/MacDialog";
export default function AboutMe() {

    return <div id="about-me">
        <div id="header-wrapper-aboutme">
            <p id="header-aboutme">OKAY, BUT WHO AM I?</p>
            {/*<div style={{height: "20px", width: "120%", right: "10px", top: "10px", position: "relative", backgroundColor: "white"}}/>*/}
            <div id="divider-aboutme"/>
        </div>
        {/*<Card id="about-me-card" elevation={20} color="primary">*/}
        {/*    <div style={{backgroundColor: "lightgrey", height: "32px", display: "flex", flexDirection: "row"}}>*/}
        {/*        /!*<div id="about-me-header">About me.</div>*!/*/}
        {/*        <div style={{display: "flex", flexDirection: "row"}}>*/}
        {/*            <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                <circle fill="red" cx="16" cy="14" r="8" />*/}
        {/*            </svg>*/}
        {/*            <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                <circle fill="orange" cx="16" cy="14" r="8" />*/}
        {/*            </svg>*/}
        {/*            <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                <circle fill="green" cx="16" cy="14" r="8" />*/}
        {/*            </svg>*/}
        {/*        </div>*/}
        {/*        {window.innerWidth > 450 && <div style={{width: "fit-content", margin: "auto", fontSize: "14px", position: "relative", right: "24px"}}>ABOUT ME</div>}*/}
        {/*    </div>*/}
        {/*    /!*<CardHeader sx={{backgroundColor: "lightgrey"}}>*!/*/}
        {/*    /!*    <p style={{color: "white"}}>test</p>*!/*/}
        {/*    /!*</CardHeader>*!/*/}
        {/*    <CardContent>*/}
        {/*        <div id="about-me-card-content">*/}
        {/*            /!*<img id="about-me-img" src="https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2Fthis%20is%20me.png?alt=media&token=c7072754-b79b-4e35-8f3f-e38849bc02ba" loading="lazy" alt="Picture of me on mountain in the Azores."/>*!/*/}
        {/*            <p id="about-me-text">*/}
        {/*            Hey I'm Hayden! I'm a 25-year old Computer Science Graduate from Western University who happens to be interested in all things tech, such as building full-stack websites like the one you see here. In my spare time, I do music production, bouldering, working out, board sports, making new friends and travelling. Want to connect and/or grab a coffee with me? Feel free to reach out at <a href="mailto:haydenhoffman@gmail.com">haydennhoffman@gmail.com!</a></p>*/}
        {/*        </div>*/}
        {/*    </CardContent>*/}
        {/*</Card>*/}
        <div style={{ position: "relative"}}>
            <MacDialog key={1} leftDesktop={10} topDesktop={15} leftMobile={10} topMobile={0} zIndex={2} title={"Some bio."} description={"Hello! I'm a 25-year old Computer Science graduate from Western University. I have dual citizenship for both Canada and the U.S., so I'm eligible to work in both countries. I like building websites like the one you see here. In my spare time, I make music, rock climb, do bodybuilding, snowboard and travel the world. "}/>
            <MacDialog key={2} leftDesktop={60} topDesktop={20} leftMobile={10} topMobile={0} zIndex={1} title={"Sandboarding in Peru."} image={"https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2FPXL_20230812_224013487%20(1).jpg?alt=media&token=1fefd6a7-50b7-461e-89a2-882cd027c06f"}/>
            <MacDialog key={3} leftDesktop={40} topDesktop={40} leftMobile={10} topMobile={45} zIndex={0} title={"This is me in the Azores."} image={"https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2Fthis%20is%20me.png?alt=media&token=c7072754-b79b-4e35-8f3f-e38849bc02ba"}/>
        </div>
    </div>
}
