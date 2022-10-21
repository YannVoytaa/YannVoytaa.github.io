import { useState, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import sages from "./assets/sages.png";
import amazon from "./assets/amazon.png";
import uw from "./assets/uw.png";
import oi from "./assets/oi.png";
import globe from "./assets/27-globe-gradient.svg";
import arrows from "./assets/212-arrow-1-rounded-gradient.svg";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import {
  GrCircleQuestion,
  GrGithub,
  GrJava,
  GrLinkedin,
  GrReactjs,
} from "react-icons/gr";
import {
  SiAmazonaws,
  SiCplusplus,
  SiGit,
  SiJavascript,
  SiJira,
  SiLatex,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiPuppet,
  SiPython,
  SiRust,
  SiScala,
  SiSlack,
  SiTypescript,
} from "react-icons/si";
import { SkillDiv } from "./components/SkillDiv";
import { Board } from "./components/Board";
import { Scroll } from "./components/Scroll";
import { End } from "./components/End";
import { Skill } from "./components/Skill";
import { Color } from "./components/Color";
import {
  OIDesc,
  UWDesc,
  SagesDesc,
  AmazonDesc,
} from "./components/Description/index";
import {
  OITitle,
  UWTitle,
  SagesTitle,
  AmazonTitle,
} from "./components/Title/index";
emailjs.init("VjgqziiUEyPwnY4fO");

const content = ({ name }) => {
  switch (name) {
    case "oi":
      return { title: <OITitle />, description: <OIDesc /> };
    case "uw":
      return { title: <UWTitle />, description: <UWDesc /> };
    case "sages":
      return { title: <SagesTitle />, description: <SagesDesc /> };
    case "amazon":
      return { title: <AmazonTitle />, description: <AmazonDesc /> };
    default:
      return { title: null, description: null };
  }
};
function App() {
  const [toDisplay, setToDisplay] = useState(null);
  const [start, setStart] = useState(true);
  const animate = (name) => {
    setToDisplay(name);
    gsap.to("#triangle", { opacity: 1, duration: 1 });
    gsap.to("#title", { opacity: 1, duration: 1, delay: 1 });
    gsap.to("#content", { opacity: 1, duration: 1, delay: 1 });
    gsap.to("#back", { opacity: 1, duration: 1, delay: 2 });
  };
  const animateBack = () => {
    gsap.to("#back", { opacity: 0, duration: 1 });
    gsap.to("#title", { opacity: 0, duration: 1, delay: 1 });
    gsap.to("#content", { opacity: 0, duration: 1, delay: 1 });
    gsap.to("#triangle", { opacity: 0, duration: 1, delay: 1 });
    setTimeout(() => setToDisplay(null), 2000);
  };
  useEffect(() => {
    gsap.to("#arrows", { transform: "translateX(0)", duration: 1 });
    gsap.to("#arrows", {
      rotationZ: "720deg",
      duration: 5,
      delay: 1,
    });
    gsap.to("#globe", {
      rotationZ: "720deg",
      duration: 5,
      delay: 1,
      repeat: -1,
    });
    setTimeout(() => {
      document.getElementById("arrows").style.display = "none";
      document.getElementById("globe").style.display = "inline-block";
      gsap.to("#start-button", { opacity: 1, duration: 1 });
    }, 6000);
    gsap.to("#name", { opacity: 1, duration: 5, delay: 2 });
    gsap.to("#role", { opacity: 1, duration: 5, delay: 2 });
    gsap.to("#bio", { opacity: 1, duration: 5, delay: 2 });
  }, []);
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0, 70],
          rotation: [0, 0, 0],
          far: 500,
        }}
        gl={{
          preserveDrawingBuffer: true,
        }}
      >
        <Color />
        <Stars radius={300} count={50000} />
        <Scroll start={start} />
        <Board
          img={oi}
          position={[0, 0, -20]}
          onClick={() => {
            animate("oi");
          }}
          shouldLookAt={toDisplay === "oi"}
        />
        <Board
          img={uw}
          position={[0, 0, -120]}
          onClick={() => {
            animate("uw");
          }}
          shouldLookAt={toDisplay === "uw"}
        />
        <Board
          img={sages}
          position={[0, 0, -220]}
          onClick={() => {
            animate("sages");
          }}
          shouldLookAt={toDisplay === "sages"}
        />
        <Board
          img={amazon}
          position={[0, 0, -320]}
          onClick={() => {
            animate("amazon");
          }}
          shouldLookAt={toDisplay === "amazon"}
        />
        <Skill
          title="React JS"
          id="1"
          position={[-100, -40, -320]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="Java"
          id="2"
          position={[-80, -40, -120]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="Scala"
          id="3"
          position={[-60, -40, -220]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="C++"
          id="4"
          position={[-100, -20, -20]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="Python"
          id="5"
          position={[-80, -20, -120]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="JavaScript"
          id="6"
          position={[-60, -20, -120]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="TypeScript"
          id="7"
          position={[-100, 0, -320]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="Rust"
          id="8"
          position={[-80, 0, -120]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="Puppet"
          id="9"
          position={[-60, 0, -220]}
          rotation={[0, 1, 0]}
        />
        <Skill
          title="PSQL"
          id="10"
          position={[60, 0, -120]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Mongo DB"
          id="11"
          position={[80, 0, -120]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Git"
          id="12"
          position={[100, 0, -220]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Jira"
          id="13"
          position={[60, -20, -220]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Slack"
          id="14"
          position={[80, -20, -220]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="AWS"
          id="15"
          position={[100, -20, -320]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Linux"
          id="16"
          position={[60, -40, -120]}
          rotation={[0, -1, 0]}
        />
        <Skill
          title="Latex"
          id="17"
          position={[80, -40, -120]}
          rotation={[0, -1, 0]}
        />
      </Canvas>
      <End />
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          fontFamily: "'Silkscreen', cursive",
          color: "white",
          height: "0",
          width: "0",
          borderLeft: "80vw solid rgba(255, 255, 255, 0.5)",
          borderBottom: "150vh solid transparent",
          margin: 0,
          display: toDisplay ? "block" : "none",
          opacity: 0,
        }}
        id="triangle"
      />
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: "0vw",
          left: "20vh",
          fontFamily: "'Silkscreen', cursive",
          color: "black",
          height: "25vh",
          textAlign: "left",
          width: "calc(100vw - 20vh)",
          fontSize: "1rem",
          display: toDisplay ? "block" : "none",
          opacity: 0,
          overflowY:
            window.innerHeight < 600 || window.innerWidth < 500
              ? "scroll"
              : "hidden",
          overflowX:
            window.innerHeight < 600 || window.innerWidth < 500
              ? "scroll"
              : "hidden",
        }}
        id="title"
      >
        {content({ name: toDisplay })?.title}
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: "25vh",
          left: "0vh",
          fontSize: "1rem",
          color: "black",
          height: "75vh",
          textAlign: "left",
          fontFamily: "'Poppins', sans-serif",
          width: "30vw",
          display: toDisplay ? "block" : "none",
          opacity: 0,
          overflowY: "scroll",
        }}
        id="content"
      >
        {content({ name: toDisplay })?.description}
      </div>
      <button
        style={{
          cursor: "pointer",
          width: "25vh",
          height: "25vh",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 100, 200, 0.7)",
          position: "fixed",
          left: "-7vh",
          top: "-5vh",
          zIndex: 2000,
          color: "rgba(255, 255, 255, 1)",
          display: toDisplay ? "block" : "none",
          opacity: 0,
        }}
        onClick={animateBack}
        id="back"
      >
        <h1 style={{ margin: "10vh 9vh", fontFamily: "'Silkscreen', cursive" }}>
          Back
        </h1>
      </button>
      {!toDisplay && (
        <div
          style={{
            position: "fixed",
            zIndex: 100,
            top: 0,
            left: 0,
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            height: "5vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: "0 1vw", fontSize: "4vh" }}>Jan Wojtach</h1>
          <div
            style={{
              width: "15%",
              marginTop: "0.5vh",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <a
              href="https://www.linkedin.com/in/jan-wojtach-1205141b5/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              <GrLinkedin size={"4vh"} />
            </a>
            <a
              href="https://github.com/YannVoytaa"
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              <GrGithub size={"4vh"} />
            </a>
          </div>
        </div>
      )}
      {!toDisplay && (
        <div
          title="Scroll to explore the page, click the images to read about specific experience"
          style={{
            position: "fixed",
            zIndex: 100,
            right: 0,
            bottom: 0,
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            height: "5vh",
            width: "5vh",
            margin: "auto",
          }}
        >
          <GrCircleQuestion size={"5vh"} />
        </div>
      )}
      <SkillDiv id="1">
        <GrReactjs size={"100%"} />
      </SkillDiv>
      <SkillDiv id="2">
        <GrJava size={"100%"} />
      </SkillDiv>
      <SkillDiv id="3">
        <SiScala size={"100%"} />
      </SkillDiv>
      <SkillDiv id="4">
        <SiCplusplus size={"100%"} />
      </SkillDiv>
      <SkillDiv id="5">
        <SiPython size={"100%"} />
      </SkillDiv>
      <SkillDiv id="6">
        <SiJavascript size={"100%"} />
      </SkillDiv>
      <SkillDiv id="7">
        <SiTypescript size={"100%"} />
      </SkillDiv>
      <SkillDiv id="8">
        <SiRust size={"100%"} />
      </SkillDiv>
      <SkillDiv id="9">
        <SiPuppet size={"100%"} />
      </SkillDiv>
      <SkillDiv id="10">
        <SiPostgresql size={"100%"} />
      </SkillDiv>
      <SkillDiv id="11">
        <SiMongodb size={"100%"} />
      </SkillDiv>
      <SkillDiv id="12">
        <SiGit size={"100%"} />
      </SkillDiv>
      <SkillDiv id="13">
        <SiJira size={"100%"} />
      </SkillDiv>
      <SkillDiv id="14">
        <SiSlack size={"100%"} />
      </SkillDiv>
      <SkillDiv id="15">
        <SiAmazonaws size={"100%"} />
      </SkillDiv>
      <SkillDiv id="16">
        <SiLinux size={"100%"} />
      </SkillDiv>
      <SkillDiv id="17">
        <SiLatex size={"100%"} />
      </SkillDiv>
      <div
        id="tooltip"
        style={{
          color: "white",
          position: "fixed",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "50%",
        }}
      ></div>
      <div
        id="landing"
        style={{
          overflowY: "scroll",
          color: "white",
          position: "fixed",
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          top: 0,
          left: 0,
          cursor: "auto",
        }}
      >
        <div
          style={{ width: "30vw", margin: "10vh auto", textAlign: "center" }}
          className="no-margin-when-small"
        >
          <h1
            style={{ fontFamily: "'Silkscreen', sans", opacity: 0 }}
            id="name"
          >
            Jan Wojtach
          </h1>
          <img
            src={globe}
            width="100%"
            height="100%"
            alt="globe"
            aria-label="globe"
            id="globe"
            style={{ display: "none" }}
            cursor="pointer"
          />
          <img
            src={arrows}
            width="100%"
            height="100%"
            alt="arrows"
            aria-label="arrows"
            id="arrows"
            style={{ transform: "translateX(-100vw)" }}
          />
          <h1
            style={{ fontFamily: "'Silkscreen', sans", opacity: 0 }}
            id="role"
          >
            Software Developer
          </h1>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", opacity: 0 }}
            id="bio"
          >
            A Bachelor’s student (Computer Science) at the University of Warsaw.
            Passionate about algorithms, advanced data structures and with first
            work experience in Software Development.
          </p>
          <button
            onClick={() => {
              gsap.to("#landing", { opacity: 0, duration: 2 });
              setTimeout(() => {
                document.getElementById("landing").style.display = "none";
              }, 2000);
              setStart(false);
            }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "45%",
              opacity: 0,
              cursor: "pointer",
            }}
            id="start-button"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
