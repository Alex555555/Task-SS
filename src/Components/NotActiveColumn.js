import React from 'react';
import NotActiveElements from './NotActiveElements';
class NotActiveColumn extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="not-active-column-names"  >
               <NotActiveElements searchNames = {this.props.searchNames} category = {this.props.category} columnsNames = {this.props.columnsNames} handlerApply = {this.props.handlerApply} handlerDropApply = {this.props.handlerDropApply} notRightColumn = {this.props.notRightColumn}/>
            </div>
        )
    }
}
export default NotActiveColumn;