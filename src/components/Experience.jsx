import React from "react";

const experiences = [
  {
    id: 1,
    role: "React Developer Intern",
    company: "Celebal Technologies",
    duration: "June 2024 - August 2024",
    description:
      "At Celebal Technologies, I interned as a React Developer, where I learned and contributed to building scalable and maintainable front-end solutions using modern JavaScript (ES6+) and React. I worked closely with a 5-member Agile team, actively participating in daily stand-ups, sprint planning, and code reviews. My key responsibilities included implementing responsive UI components, integrating REST APIs, managing global state using Redux and Context API, and optimizing performance through Chrome DevTools. This hands-on experience enhanced my understanding of cross-device compatibility, collaborative development practices, and front-end architecture, solidifying my skills in building production-ready web applications.",
    tech: ["HTML", "TailwindCSS", "React", "JavaScript", "Redux", "REST API", "Git"],
    certificate: "/Kushagra Internship_certificate Celebal_Tech.pdf",
  },
  {
    id: 2,
    role: "FullStack Intern",
    company: "The Drive Sales",
    duration: "May 2024 - July 2024",
    description:
      "I worked as a Full Stack Developer intern at Drive Sales, where I learned to building and improving web applications. I worked on both the frontend and backend using technologies like ReactJS, Node.js, and MongoDB. My tasks included creating web pages, connecting them to the database, and fixing small bugs. I also learned how to work with APIs and use Git for version control. I worked closely with the team and followed simple development steps. This internship helped me understand how websites work from start to finish and improved my skills as a beginner full stack developer.",
    tech: ["Html", "CSS", "JavaScript", "APIs", "Git", "Node.js", "MongoDB"],
    certificate: "/Kushagra Internship_certificate Drive_Sales.pdf",
  },
];

const Experience = () => (
  <div
    name="experience"
    className="w-full min-h-screen py-16 bg-[#0a192f] text-gray-300"
  >
    <div className="max-w-4xl mx-auto p-4 flex flex-col justify-center w-full">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase mb-4 w-fit mx-auto text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <h4 className="text-base text-gray-400 mb-8 text-center font-medium">
        My Internship Experience
      </h4>
      <div className="flex flex-col gap-8">
        {experiences.map(
          ({ id, role, company, duration, description, tech, certificate }) => (
            <div
              key={id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-md shadow-black/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:border-opacity-50 hover:bg-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {role}
                </span>
                <span className="text-sm text-gray-400">{duration}</span>
              </div>
              <div className="text-lg font-semibold mb-1">{company}</div>
              <div className="text-sm text-gray-300 mb-2">{description}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-gray-400 group-hover:bg-white/20 group-hover:text-gray-200 transition-all duration-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* View Certificate Button */}
              {certificate && (
                <a
                  href={certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0a192f] font-semibold shadow hover:scale-105 transition-transform duration-300"
                >
                  View Certificate
                </a>
              )}
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default Experience;