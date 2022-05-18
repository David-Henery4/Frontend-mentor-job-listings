console.log("control working");
// Control
import * as model from "../model/model.js";
import * as jobsView from "../views/jobsView.js";
import Jobs from "../views/jobsView.js";

const jobsDisplay = () => {
  Jobs.render(model.jsonData);
};

const init = () => {
  jobsDisplay();
};

init();
