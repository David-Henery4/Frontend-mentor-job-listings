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
              <img src="/images/photosnap.svg" alt="" />
            </div>
            <h4 class="job__company-name">Photosnap</h4>
            <div class="job__status">
              <p>NEW!</p>
              <p>FEATURED</p>
            </div>
            <h3 class="job__title">Senior Frontend Developer</h3>
            <ul class="job__listing-details">
              <li>
                <p>1d ago</p>
              </li>
              
              <li>
                <p>Full Time</p>
              </li>
              
              <li>
                <p>USA only</p>
              </li>
            </ul>
          </div>
  
          <div class="middle-line"></div>
  
          <div class="job__tech">
            <button class="job__tech--btns">Frontend</button>
  
            <button class="job__tech--btns">senior</button>
  
            <button class="job__tech--btns">HTML</button>
  
            <button class="job__tech--btns">CSS</button>
  
            <button class="job__tech--btns">Javascript</button>
          </div>
        </div>`;
      })
      .join("");
  }
}

export default new Jobs();
