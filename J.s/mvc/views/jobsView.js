import { MainView } from "./view.js";
import {filterQuery} from "../controller/control.js"

class Jobs extends MainView {
  _parentElement = document.querySelector(".jobs-container");
  _jobTechContainer = document.querySelector(".job__tech");
  _jobsContainer = document.querySelector(".jobs-container")

  
  constructor(){
  super()
  this._filterTagsEvent()
  }
  
  _filterTagsEvent(){
    this._jobsContainer.addEventListener("click", (e) => {
      const clicked = e.target.closest(".job__tech--btns");
      if (!clicked) return
      console.log(clicked.textContent)
      // this._filterJobs(clicked.textContent);
      this.sendFilterQuery(clicked.textContent);
    })
  }

  sendFilterQuery(query){
    filterQuery(query)
    // return query
  }

  // _filterJobs(filterStr){
  //   console.log(filterStr)
  //   const dataRay = this._data
  //   console.log(dataRay)
  //   const newRay = dataRay.filter(e => {
  //     if (e.role === filterStr) return e
  //   })
  //   console.log(newRay)
  //   this._data = newRay
  //   console.log(this._data)
  // }




  _generateMarkup() {
    console.log(this._data);
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
