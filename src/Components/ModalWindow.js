import React from 'react';
import NotActiveColumn from './NotActiveColumn';
import ActiveColumn from './ActiveColumn'
class ModalWindow extends React.Component{
    constructor(props){
      super(props);
      this.columnsNames = this.props.columnsNames;
      this.state = {
        arrNames : [],
        value : '',
        searchNames : [],
        lastNames : {},
        notRightColumn : false

      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handlerRemove = this.handlerRemove.bind(this);
      this.handlerApply = this.handlerApply.bind(this);
      this.handlerAdd = this.handlerAdd.bind(this);
      this.handlerDropApply = this.handlerDropApply.bind(this);
      this.dragOver = this.dragOver.bind(this);
      this.dragEnd = this.dragEnd.bind(this); 
    }
    handlerRemove(name){
      this.props.handleRemover(name);
     this.setState({arrNames : []})
    }
    handlerAdd(arrNames){
      this.props.handleAdder(arrNames);
      this.setState({
        value : '',
        searchNames : []
      })
        this.handleClick();
    }
    handlerApply(name){
      this.state.arrNames.push(name);
    }
    handlerDropApply(name){
        this.state.arrNames.push(name);
        this.props.handleAdder(this.state.arrNames);
        this.setState({
           arrNames : [],
           searchNames : [],
           value : ''
          })
    }
    handleClick(){
      this.props.handleClick();
    }
    handleSearch(event){
        this.setState({
            value : event.target.value,
            searchNames : [],
            lastNames : {}
        });
      
    }
    dragOver(event){
      if(event.target.className == 'not-active-column-names' || event.target.className == "notActivItem" || event.target.className == "itemName" || event.target.className == "column-names" ){
        this.setState({
          notRightColumn : true
        })
      } else{
          this.setState({
            notRightColumn : false
        })
      }
    }
    dragEnd(event){
      if(this.state.notRightColumn){
        return;
      }
        let name = event.target.innerText;
        this.handlerDropApply(name);
      
    }
    render(){

    //*************************************Search**********************************************************************

      let allColumnsNames = Object.keys(this.columnsNames.category);
      let falseColumnsNames  = [];
      allColumnsNames.forEach((item) => {
        if(this.columnsNames.category[item] == false){
          falseColumnsNames.push(item)
        }
      });
      
        falseColumnsNames.forEach((item) =>{
          if(item[0].indexOf(this.state.value[0]) != -1){
            if(item in this.state.lastNames){
              return;
            } else {
              this.state.lastNames[item] = true;
              let name = item;
            let itemName = <p className = 'itemName'style={{color: 'blue'}}><span style={{color: 'black'}}>{item[0]}</span>{item.slice(1)}</p> 
              let a =<a href="#"  onClick={() => this.handlerApply(name)} className ="notActivItem" draggable = 'true' onDragEnd = {this.dragEnd}>{itemName}</a>;
              this.state.searchNames.push(a);
            }
          }
        });
      return(
        <div>
       <div className = 'modal-window disabel'>
         <div className = 'chapter'><p>Select columns for the grid</p></div>
         <form>
           <input className = 'input' type ="text" placeholder='search'  onChange = {this.handleSearch} value = {this.state.value} ></input>
         </form>
         <div className = 'column-names'onDragOver = {this.dragOver}>
             <NotActiveColumn searchNames = {this.state.searchNames} category = {this.state.category} columnsNames = {this.columnsNames} handlerApply = {this.handlerApply} handlerDropApply = {this.handlerDropApply} notRightColumn = {this.state.notRightColumn}/>
             <ActiveColumn category = {this.state.category} handlerRemove = {this.handlerRemove} columnsNames = {this.columnsNames} handlerDropApply = {this.handlerDropApply}/>
         </div>
         <button className = 'button-apply'onClick={() => this.handlerAdd(this.state.arrNames)}>apply</button>
       </div>
       </div>
      )
    }
  }
  export default ModalWindow;