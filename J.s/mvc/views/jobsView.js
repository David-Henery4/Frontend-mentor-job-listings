import { MainView } from "./view.js";

class Jobs extends MainView {
  _parentElement = document.querySelector(".jobs-container");

  _generateMarkup() {
    console.log(this._data)
    return this._data
      .map((job) => {
        return `<div class="job">
          <div class="job__info">
            <div class="job__logo">
              <img src="${job.logo}" alt="" />
            </div>
            <h4 class="job__company-name">${job.company}</h4>
            <div class="job__status">
              ${job.new ? "<p>NEW!</p>" : ""}
              ${job.featured ? "<p>FEATURED</p>" : ""}
            </div>
            <h3 class="job__title">${job.position}</h3>
            <ul class="job__listing-details">
              <li>
                <p>${job.postedAt}</p>
              </li>
              
              <li>
                <p>${job.contract}</p>
              </li>
              
              <li>
                <p>${job.location}</p>
              </li>
            </ul>
          </div>
  
          <div class="middle-line"></div>
  
          <div class="job__tech">
          
          ${job.languages
            .map((language) => {
              return `
            <button class="job__tech--btns">${language}</button>
              `;
            })
            .join("")}

          ${job.tools
            .map((tool) => {
              return `
            <button class="job__tech--btns">${tool}</button>
              `;
            })
            .join("")}
  
            <button class="job__tech--btns">${job.level}</button>
  
            <button class="job__tech--btns">${job.role}</button>
          </div>
        </div>`;
      })
      .join("");
  }
}

export default new Jobs();
