import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import home_style from "./Home.css";
import logo_codepeak from "./Images/logo.png";
import hill from "./Images/mtpnggg.png";
import clueless from "./Images/clueless.png";
import dagshub from "./Images/dagshub.png";
import avl from "./Images/avl.png";
import campusmemories from "./Images/Campusmemories.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Timeline from "../components/Timeline";
//import ScrollButton from '../components/ScrollButton'
import Footer from "../components/footer";
//import git from '../pages/Images/GitHub-Mark.png'
import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgGitPull } from "react-icons/cg";
import { FaUniversity } from "react-icons/fa";
//import git_spons from '../pages/Images/githublogoweb.svg'
import dig_ocean from "../pages/Images/DO_Logo_Vertical_Blue.png";
//import jetbrain from '../pages/Images/jetbrains-variant-1.png'
import gfgLogo from "../pages/Images/gfgLogo.png";
import taskadeLogo from "../pages/Images/taskadeLogo.png";
import cssbattleLogo from "../pages/Images/cssbattleLogo.png";
import gmcLogo from "../pages/Images/gmcLogo.png";
import Artboardlogo from "../pages/Images/Artboard.svg";
//import logo_codepeak from './Images/LOGOCODEPEAK.png'
import CountUp from "../components/Counter_up";
import Animatedbg from "../components/Animatedbg";
import Counter from "../components/PRcounter/Counter";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <div style={home_style}>
        <Navigation />
        <Animatedbg />
        <marquee
          id="marq"
          behavior="scroll"
          direction="left"
          scrollamount="10"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "70px",
          }}
        >
          CODEPEAK 2022 is here!
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#99c1e7" }}
          >
            {" "}
            Register Now{" "}
          </Link>
          as a student. Coding period has started!!
        </marquee>

        {/* ---------LOGO----------- */}
        <div className="logo">
          <img
            src={logo_codepeak}
            alt=""
            srcset=""
            className="logo_img"
            data-aos="zoom-in"
            data-aos-once="true"
          />
          <p>Powered By</p>
          <div className="main_spons_box">
            <a
              href="https://www.geeksforgeeks.org/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={gfgLogo}
                alt=""
                srcset=""
                className="main_spons_img"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>

            <a
              href="https://www.clueless.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={clueless}
                alt=""
                srcset=""
                className="main_spons_img1"
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </a>
          </div>
          <img src={hill} alt="" srcset="" className="hill_img" />
        </div>

        {/* -------------ABOUT US------------------- */}
        <div className="abt">
          <h1 data-aos="fade-up" data-aos-once="true">
            About Us
          </h1>
          <hr />
          <p data-aos="fade-up" data-aos-once="true">
            CODE PEAK is a month-long program that helps students understand the
            paradigm of Open Source contribution and gives them real-world
            software development experience. The event targets first-timers who
            wish to participate in Free and Open Source(FOSS) Contributions and
            the experienced developers who want to show their skills by
            contributing to real-world projects.
          </p>
        </div>

        {/* ----------TIMELINE-------------- */}
        <div className="container nwoc_time">
          <div className="head_time">
            <p>Timeline</p>
            <hr />
          </div>
          <div className="row">
            <div className="col">
              <div className="main-timeline">
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="5 NOV" desc="Mentors Registration Starts" />
                </div>

                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline
                    date="15 NOV."
                    desc="Student Registration starts."
                  />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="28 NOV" desc="Mentor Registration ends." />
                </div>

                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="2 DEC" desc="Project Announcement" />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="3 DEC" desc="Orientation" />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="4 DEC" desc="Git and GitHub Workshop" />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="5 DEC" desc="Coding Period Starts." />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="5 JAN" desc="Coding Period Ends." />
                </div>
                <div
                  className="timeline"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <Timeline date="8 JAN" desc="Closing Ceremony." />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Counter />
        {/* ---------------PAST STATISTICS---------------- */}
        <div className="head_stats">
          <p data-aos="zoom-in" data-aos-once="true">
            Past Statistics
          </p>
          <hr />
        </div>
        <div className="counter">
          <div
            className="count_block c1"
            style={{ background: "rgb(16, 31, 46)" }}
          >
            <VscGithubInverted />
            <CountUp end="5200" />
            <p>Participants</p>
          </div>
          <div
            className="count_block c2"
            style={{ background: "rgb(18, 34, 51)" }}
          >
            <CgGitPull />
            <CountUp end="3300" />
            <p>Pull Requests</p>
          </div>
          <div
            className="count_block c3"
            style={{ background: "rgb(21, 38, 56)" }}
          >
            <AiOutlineFundProjectionScreen />
            <CountUp end="140" />
            <p>Projects Done</p>
          </div>
          <div
            className="count_block c4"
            style={{ background: "rgb(23, 44, 66)" }}
          >
            <FaUniversity />
            <CountUp end="340" />
            <p>Universities</p>
          </div>
        </div>

        {/* ----------SPONSORS------------- */}
        <div className="head_stats">
          <p data-aos="zoom-in" data-aos-once="true">
            Sponsors
          </p>
          <hr />
        </div>
        <div className="spons_box">
          <a
            href="https://www.geeksforgeeks.org/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={gfgLogo}
              alt=""
              srcset=""
              className="main_spons_img"
              data-aos="zoom-in"
              data-aos-once="true"
            />
          </a>
          <a href="https://www.clueless.tech/" target="_blank" rel="noreferrer">
            <img
              src={clueless}
              alt=""
              srcset=""
              className="main_spons_img1"
              data-aos="zoom-in"
              data-aos-once="true"
              style={{ height: "100px", width: "auto" }}
            />
          </a>
          <a href="https://dagshub.com/" target="_blank" rel="noreferrer">
            <img
              src={dagshub}
              alt=""
              srcset=""
              className="main_spons_img1"
              data-aos="zoom-in"
              data-aos-once="true"
            />
          </a>

          <a href="https://www.taskade.com/" target="_blank" rel="noreferrer">
            <img
              src={taskadeLogo}
              alt=""
              srcset=""
              data-aos="zoom-out"
              data-aos-once="true"
              style={{ height: "60px", width: "auto" }}
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
