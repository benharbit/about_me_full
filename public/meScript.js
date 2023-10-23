console.log("enter script 2")
window.onload = function () {
    buildWorkContainer();
  };
  function buildWorkContainer() {
    const work = document.getElementById("workContainer");
    var request = new XMLHttpRequest();
    console.log(window.screen.width)
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((project) => {
          work.innerHTML += `
              <div class="card">
                  <a href="${project.webLink}"><img src="${
            project.src
          }" alt="${project.alt}" height=200 width=250 /></a>
                  <div class="text-information">
                      <div class="subtitle">
                          
                          <div>
                          ${project.title}
                          </div>
                          <div>
                          ${
                            project.webLink
                              ? `<a href="${project.webLink}" aria-label="${project.description}"><img src="./external-link.png" width="15px" alt=${project.description}></a>`
                              : ""
                          }
                          ${
                            project.githubLink
                              ? ` <a class="blacklink" href="${project.githubLink}" color="black" aria-label="${project.description}"><i class="devicon-github-original" style="font-size: 15px"></i></a>`
                              : ""
                          }
                          </div>
                      </div>
                  
                      <div class="description">
                          ${project.description}    
                      </div>
                  
                  </div>
              </div>`;
        });
      });
  }
