
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Accordian from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

//import projectData from "./projectData.json"
//const myData = require("./public/projectData.json");

console.log(`screen width: ${window.screen.width}`);

const Skills = () => {
  const [currentSkill, setCurrentSkill] = React.useState("All");
  const [uniqueSkills, setUniqueSkills] = React.useState<any[]>([]);
  const [myData, setMyData] = React.useState<any[]>([]);
  console.log(`current skill: ${currentSkill}`);

   
  function AccordianSkills() {
    return (
      <Box sx={{ display: "flex", flexDirection: "rows", flexWrap: "wrap" }}>
        {uniqueSkills.map((skill) => {
          return (
            <button
              className={
                skill === currentSkill ? "buttonActive" : "buttonClass1"
              }
              onClick={setSkills}
              value={skill}
            >
              {skill}
            </button>
          );
        })}
      </Box>
    );
  }

  function DropDownBox() {
    return (
      <Select
        labelId="selectSkill"
        id="selectSkillId"
        value={currentSkill}
        label={currentSkill}
        onChange={(e) => setSkills(e)}
        style={{ width: "90%", minWidth: "100px" }}
      >
        {uniqueSkills.map((skill) => (
          <MenuItem value={skill} onClick={setSkills}>
            {" "}
            {skill}
          </MenuItem>
        ))}
      </Select>
    );
  }

  const setSkills = (e: any) => {
    console.log(`skill: ${e?.target}`);
    for (let x in e.target) {
      console.log(`fff: ${JSON.stringify(x)} ${e.target[x]}}`);
    }
    setCurrentSkill(e.target.value);
  };
  useEffect(() => {
    //myData.forEach((project: any) => project.skills.unshift('All'))
    function setSkills(data1: any[]){
      setUniqueSkills(
        data1.reduce((acc: any[], current: any) => {
          console.log(`current: ${JSON.stringify(current.skills)}`)
          current.skills.forEach((skill: any) => {
            if (!acc.includes(skill)) {
              acc.push(skill);
            }
          });
          return acc;
        }, [])
      );
    }
      async function fetchData() {
          const response = await fetch('./projectData.json')
          const json = await response.json()
          console.log(`data1: ${JSON.stringify(json)}`)
          json.forEach((project: any) => project.skills.unshift('All'))
          setMyData(json);
          setSkills(json);
      }
      fetchData();
      
      }, [])

  return (
    <Box
      id="aboutContainer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 0, 0.2))",
        p: 2,
      }}
    >
      <Typography
	  	textAlign="center"
        variant={window.screen.width > 600 ? "h4" : "h4"}
        sx={{ mb: 3, mt: window.screen.width > 600 ? 10 : 0 }}
      >
       All My Projects
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            border: 1,
            borderColor: "grey",
            borderRadius: "10px",
            background: "white",
            p: "10px",
            mb: "10px",
            width: "50%",
            minWidth: "250px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              ml: 2,
              color: "red",
              fontWeight: "bold",
              hover: {
                color: "red",
                backgroundColor: "blue",
              },
            }}
          >
            Select A Skill
          </Typography>
          {window.screen.width > 500 ? <AccordianSkills /> : <DropDownBox />}
        </Box>

        {myData
          .filter(
            (project: any) =>
              !currentSkill ||
              currentSkill === "All" ||
              project.skills.includes(currentSkill)
          )
          .map((project: any) => {
            return (
              <Accordian
                sx={{
                  borderRadius: "10px",
                  width: "40%",
                  minWidth: "250px",
                  overflow: "auto",
                  mb: "10px",
                }}
              >
                <AccordionSummary
                  sx={{ borderRadius: "4px" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography variant={window.screen.width > 600 ? "h6" : "body1"}>{project.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography display="inline" sx={{ color: "black" }}>
                    {" "}
                    Description:
                  </Typography>
                  <Typography variant={window.screen.width > 600 ? "h6" : "body1"} sx={{ ml: 1 }}>
                    {project.description}
                  </Typography>
                  <Typography display="inline" sx={{ color: "black" }}>
                    {" "}
                    Technology Used:
                  </Typography>
                  <Typography variant={window.screen.width > 600 ? "h6" : "body1"} sx={{ ml: 1 }}>
                    {project.skills.join(", ")}
                  </Typography>

                  <Typography>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      {project.github ? (
                        <Typography display="inline" sx={{ color: "blue" }}>
                          {" "}
                          <a href={project.github}> Github Link </a>{" "}
                        </Typography>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Typography>
                  {project.github ? (
                    <Typography display="inline" sx={{ color: "blue" }}>
                      {" "}
                      <a href={project.website}> Website Link </a>{" "}
                    </Typography>
                  ) : (
                    ""
                  )}
                </AccordionDetails>
              </Accordian>
            );
          })}
      </Box>
    </Box>
  );
};

export default Skills;
