import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="container-fluid about-page">
        <h3 className="page--title"> About Myself</h3>
        <hr></hr>
        <section className="aboutMe container-fluid">
          <p>
            It is my pleasure to introduce myself as a Frontend web developer
            from Glen Allen, Virginia. Among the languages I use to build
            user-friendly web applications and websites are HTML, CSS,
            JAVASCRIPT and REACT.{" "}
          </p>

          <p>
            Being able to learn new things quickly is part of my interest in
            learning more and growing my skills. As the technologies I use are
            constantly evolving, I am learning and improving my skills. My goal
            is to showcase my knowledge, collaborate, and work as a team in a
            challenging and rewarding environment. If you would like to get in
            touch, please do so.
          </p>

          <p>
            My previous work experience in the Customer Service industry
            primarily involved problem solving. After moving into the USA, I had
            worked as an office aministrative assistant, which helped me
            understand the key aspects of organizational skills, time
            management, communication skills, quick learning, critical thinking
            and last but not the least, attention to details.
          </p>
        </section>
      </div>
    </>
  );
}
