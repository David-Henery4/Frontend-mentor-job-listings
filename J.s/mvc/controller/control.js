console.log("control working");
// Control
import * as model from "../model/model.js";
import * as jobsView from "../views/jobsView.js"; // not needed
import Jobs from "../views/jobsView.js";


export const filterQuery = (query) =>{
  // const query = Jobs.sendFilterQuery()
  console.log(query)
}

const jobsDisplay = () => {
  Jobs.render(model.jsonData);
};

const init = () => {
  jobsDisplay();
  // filterQuery()
};

init();
