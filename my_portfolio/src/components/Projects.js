import React from "react";
import "./Projects.css";
import projectData from "../project_components/projectData";
import ProjectCards from "../project_components/ProjectCards";
import Skills from "./Skills";
import BusinessCard from "../images/digi_card.png";
import SurveyForm from "../images/SurveyForm_snippet.png";
import PortfolioSnippet from "../images/portfolioSnippet.png";
import TicTacToe from "../images/ticTacToe.png";
import ExpenseTrackerDemo from "../images/expenseTrackerDemo.png";

export default function Projects() {
  const data = projectData.map((element) => {
    let image = PortfolioSnippet;
    if (element.id === "ticTacToe") {
      image = TicTacToe;
    } else if (element.id === "digital_business_card") {
      image = BusinessCard;
    } else if (element.id === "survey_form") {
      image = SurveyForm;
    } else if (element.id === "expenseTrackerDemo") {
      image = ExpenseTrackerDemo;
    }
    return (
      <ProjectCards
        title={element.title}
        image={image}
        description={element.description}
        liveurl={element.liveUrl}
        githuburl={element.githubUrl}
        key={element.title}
        isDemoAvailable={element.isDemoAvailable}
      />
    );
  });

  return (
    <div className="container-fluid project-page">
      <h3 className="page--title">PROJECTS</h3>
      <div className="projects container-fluid">{data}</div>
      <Skills />
    </div>
  );
}
