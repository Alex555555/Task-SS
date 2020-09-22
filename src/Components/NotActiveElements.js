import React from 'react';
class NotActiveElements extends React.Component{
    constructor(props){
        super(props);
        this.handlerApply = this.handlerApply.bind(this);
        this.dragEnd = this.dragEnd.bind(this); 
    }
    handlerApply(name){
        this.props.handlerApply(name)
    }
   
    dragEnd(event){
      if(this.props.notRightColumn){
        return;
      }
        let name = event.target.innerText;
        this.props.handlerDropApply(name);
    }
    render(){
      let notUseColumnsNames = [];
      let allColumnsNamesArr = Object.keys(this.props.columnsNames.category);
      for(let i = 0; allColumnsNamesArr.length > i; i++){
        if(this.props.columnsNames.category[allColumnsNamesArr[i]] == false){
          notUseColumnsNames.push(allColumnsNamesArr[i])
        } else {
          continue;
        }
      }
      let notUseColumnsAnchors = notUseColumnsNames.map((item) =>{
        let name = item;
      return <a href="#"  onClick={() => this.handlerApply(name)} className ="notActivItem" draggable = 'true'  onDragEnd = {this.dragEnd}>{item}</a>
      });
        return(
            <div className = 'not-active-column'>
                {this.props.searchNames.length != 0 ? this.props.searchNames : notUseColumnsAnchors}
            </div>
        )
        
            
         
            
        
    }
}
export default NotActiveElements; 