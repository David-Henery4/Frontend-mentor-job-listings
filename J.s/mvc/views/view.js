// Main View

export class MainView {
_data;

constructor(){
    // super()
}

clear(){
    this._parentElement.innerHTML= ""
}

render(data){
    this._data = data;
    const markup = this._generateMarkup();
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
}


}