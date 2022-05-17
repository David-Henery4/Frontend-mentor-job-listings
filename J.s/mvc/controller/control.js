// Control
import * as model from "../model/model.js";
import * as view from "../views/view.js"; // might not need
import * as jobsView from "../views/jobsView.js";
import Jobs from "../views/jobsView.js"


console.log("control working")
// console.log(model.jsonData)

const jobsDisplay = ()=>{
    Jobs.render(model.jsonData)
}

const init = () =>{
    jobsDisplay()
}

init()
