import { useEffect } from "react"
import Skills from "../components/skills"


export function Me(): JSX.Element {
    useEffect(() => {
        const head = document.querySelector("head");
        console.log(`head: ${head}`)
        const script = document.createElement("script");

        script.setAttribute("src", './meScript.js');
        console.log(`script: ${JSON.stringify(script)}`)
        head?.appendChild(script);

    }, [])
    
    return (
      <>
        <div>
        <div className="grid-container">
        <div className="about-me-main">
          <div className="background-shape"></div>
          <img className="first-image" src="./omar.jpeg" alt="programmer portrait" />
  
          <h1>About Me</h1>
          I am a full stack developer with a background in trading and
          derivatives. I am knowedgeable in Typescript/Javascript, Python, HTML,
          CSS, Tailwind, MUI, Solidity and Web3. Please check out my projects
          below and contact me if you have any questions
  
          <div className="about-me-links">
             <a
              className="blacklink"
              href="https://www.github.com/benharbit"
              ><i className="devicon-github-original"> </i
            ></a>
          </div>
        </div>
  
        <div className="work1">
          <h1>My Front End Projects</h1>
  
          <div className="work-container" id="workContainer"></div>
        </div>
        
      </div>
      
      </div>
      <div>
      <Skills />
      </div>
      <div className="contact-container">
          <div className="contact-info">
            <h1>Contact Me</h1>
            <p>Please get in touch if you think our work could be beneficial.</p>
            <a href="emailto: benharbit@gmail.com"
              ><i
                style={{fontSize: "15px",
                  display: "relative",
                  transform: "translate(0, -3px)"
                }}
                className="fa fa-envelope"
              ></i>
              benharbit@gmail.com
            </a>
  
            <a href="https://www.github.com/benharbit" className="blacklink"
              ><i className="devicon-github-original"></i
            ></a>
          </div>
          <div>
            <img src="./omar2.jpeg" alt="progammer portrait" width="330px"  />
          </div>
        </div>
      </>
    )
}

