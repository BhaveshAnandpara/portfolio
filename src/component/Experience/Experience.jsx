import React from "react";
import coditasLogo from "../../assets/coditas.png";
import devkitLogo from "../../assets/devkit.jpg";
import kreedyLogo from '../../assets/kreedy.jpg'
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";

export default function Experience() {
  const Experience = [
    {
      icon: coditasLogo,
      name: "DevOps Interns at Coditas Solution LLP",
      duration: "01/2024 - Current",
      main: ["During my internship, I gained hands-on experience with AWS and its core services, enhancing my cloud computing skills. "," I learned Docker, enabling me to efficiently containerize and deploy applications."],
    },
    {
      icon: devkitLogo,
      name: "Open Source Developer at DevKit",
      duration: "05/2023 - 08/2023",
      main: [
        "Devkit is The Ultimate Developer Toolkit",
        "My responsibility was to manage the GitHub repository and develop a chrome extension that provides daily reminders on both Chrome webpages and Discord to assist in maintaining consistent LeetCode streaks.",
      ],
    },
    {
        icon: kreedyLogo,
        name: "Intern Team Lead at Kreedy",
        duration: "02/2023 - 08/2023",
        main: [
            "Kreedy is a Saas platform that facilitates the turf booking process by replacing the hassle of booking turfs traditionally.",
            "I managed technical team of 6 members tasked to develop 2 mobile applications. developed scalable APIs, implemented unit testing and integration testing with other tasks such as code reviews, pull requests and CI/CD integration."
        ],
      },
  ];

  const expSecStyle = {
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <section id="experience" className="exp-section" style={expSecStyle}>
      <p className="title white">Experience</p>

      <ExperienceContainer data={Experience} />
    </section>
  );
}
