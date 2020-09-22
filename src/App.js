import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ModalWindow from './Components/ModalWindow'
let root = document.getElementById('root');
class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleRemover =  this.handleRemover.bind(this);
    this.handleAdder = this.handleAdder.bind(this);
    this.state = {
      category : {
        "ID" : true,
        "First Name" : true,
        "Last Name" : true,
        "Password" : true,
        "Email" : false,
        "Phone" : false,
        "Country" : false,
        "Birthday" : false
      },
      users : [
        {'ID': 1, 'First Name' : 'Dima', "Last Name" : 'Petrov', "Password" : 123, "Email" : 'dima@mail.com', "Phone" : +38012345678, "Country" : "Ukraine", "Birthday" : "25.05.89" },
        {'ID': 2, 'First Name' : 'Alex', "Last Name" : 'Stepanov', "Password" : 222, "Email" : 'alex@mail.com', "Phone" : +38023456789, "Country" : "USA", "Birthday" : "01.02.99" },
        {'ID': 3, 'First Name' : 'Petro', "Last Name" : 'Ivanov', "Password" : 321, "Email" : 'petro@mail.com', "Phone" : +38034567891, "Country" : "Germany", "Birthday" : "03.07.80" },
        {'ID': 4, 'First Name' : 'Oleg', "Last Name" : 'Bird', "Password" : 213, "Email" : 'oleg@mail.com', "Phone" : +38056789101, "Country" : "Spain", "Birthday" : "23.06.89" },
        {'ID': 5, 'First Name' : 'Grisha', "Last Name" : 'Kylanov', "Password" : 333, "Email" : 'grisha@mail.com', "Phone" : +38067891011, "Country" : "Italy", "Birthday" : "15.08.89" },
        {'ID': 6, 'First Name' : 'Kostya', "Last Name" : 'Terminov', "Password" : 444, "Email" : 'kostya@mail.com', "Phone" : +38078910112, "Country" : "China", "Birthday" : "17.07.89" }
      ] 
  
      
    };
  }
  handleClick(){
    let modalWindow = document.getElementsByClassName('modal-window')[0];
    if(modalWindow.classList.contains('disabel')){
      modalWindow.classList.remove('disabel');
      modalWindow.classList.add('active');
    } else {
      modalWindow.classList.remove('active');
      modalWindow.classList.add('disabel');
    }
  }
  handleRemover(name){
    let {category} = this.state;
    category[name] = false;
    this.setState({category});
  }
  handleAdder(arrNames){
    let {category} = this.state;
    arrNames.forEach((item) => {
      category[item] = true;
    })
    this.setState({category});
  }
  
  render(){
    let trArr = [];
    let tdArr = [];
    let useColumnsNames = [];
    let notUseColumnsnames = [];
    let categoryNames = Object.keys(this.state.category);
    for(let i = 0; categoryNames.length > i; i++){
      if(this.state.category[categoryNames[i]] == true){
        useColumnsNames.push(categoryNames[i]);
      } else {
        notUseColumnsnames.push(categoryNames[i]);
      }
    }
    
    let ColumnsNames = [];
    for(let i = 0; useColumnsNames.length > i; i++){
    let th = <th className = "th" key = {i}>{useColumnsNames[i]}</th>
    ColumnsNames.push(th)
    }
    for(let i = 0; this.state.users.length > i; i++){
      for(let a = 0; useColumnsNames.length > a; a++){
        let currentUser = this.state.users[i];
        if(useColumnsNames[a] in currentUser){
          let td = <td className="td" key ={a}>{currentUser[useColumnsNames[a]]}</td>
          tdArr.push(td)
        }
        
      }
      let tr = <tr key ={i}>{tdArr}</tr>
      trArr.push(tr);
      tdArr = [];
    }
    
    return(
      <div>
       <ModalWindow columnsNames = {this.state}  handleAdder = {this.handleAdder} handleRemover = {this.handleRemover} handleClick = {this.handleClick}/>
       <button className = 'button' onClick={() => this.handleClick()}>Select Grid Columns</button>
    <div className = 'tabel__container'>
      <tabel>
      <tr>
      {ColumnsNames}
      </tr>
      {trArr}
    </tabel>
    </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, root);
export default App;
