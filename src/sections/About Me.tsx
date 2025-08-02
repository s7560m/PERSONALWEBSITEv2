import './About Me.css'
import MacDialog from "./experience/components/MacDialog";
import {useDarkMode} from "../hooks/useDarkMode";
export default function AboutMe() {

    const { background } = useDarkMode()
    return <div id="about-me">
        <div id="header-wrapper-aboutme">
            <p id="header-aboutme">OKAY, BUT WHO AM I?</p>
            {/*<div style={{height: "20px", width: "120%", right: "10px", top: "10px", position: "relative", backgroundColor: "white"}}/>*/}
            <div id="divider-aboutme"/>
        </div>

        <div style={{ position: "relative", background}}>
            <MacDialog key={1} leftDesktop={10} topDesktop={15} leftMobile={10} topMobile={0} zIndex={2} title={"Some bio."} description={"Hello! I'm a 25-year old Computer Science graduate from Western University. I have dual citizenship for both Canada and the U.S., so I'm eligible to work in both countries. I like building websites like the one you see here. In my spare time, I make music, rock climb, do bodybuilding, snowboard and travel the world. "}/>
            <MacDialog key={2} leftDesktop={60} topDesktop={20} leftMobile={10} topMobile={0} zIndex={1} title={"Sandboarding in Peru."} image={"https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2FPXL_20230812_224013487%20(1).jpg?alt=media&token=1fefd6a7-50b7-461e-89a2-882cd027c06f"}/>
            <MacDialog key={3} leftDesktop={40} topDesktop={40} leftMobile={10} topMobile={45} zIndex={0} title={"This is me in the Azores."} image={"https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2Fthis%20is%20me.png?alt=media&token=c7072754-b79b-4e35-8f3f-e38849bc02ba"}/>
        </div>
    </div>
}
