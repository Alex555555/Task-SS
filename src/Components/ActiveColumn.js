import React from 'react';
import ActiveElements from './ActiveElements'
class ActiveColumn extends React.Component{
    constructor(props){
        super(props);
        this.dragOver = this.dragOver.bind(this); 
        this.dragLeave = this.dragLeave.bind(this); 
    }
    
    dragOver(event){
        event.preventDefault();
        let elem = document.getElementsByClassName("active-columns-names")[0];
        elem.style.paddingBottom = '40px';
    }
    dragLeave(event){
        event.preventDefault();
        let elem = document.getElementsByClassName("active-columns-names")[0];
        elem.style.paddingBottom = '10px';
    }
    
    render(){
        
        return(
            <div className = 'active-columns-names'  onDragOver = {this.dragOver} onDragLeave = {this.dragLeave}>
               <ActiveElements category = {this.props.category} handlerRemove = {this.props.handlerRemove} columnsNames = {this.props.columnsNames}/> 
            </div>
        )
    }
}
export default ActiveColumn;