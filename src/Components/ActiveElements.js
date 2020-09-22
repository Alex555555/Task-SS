import React from 'react';
class ActiveElements extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handlerMouseOver(e){
        let elem = e.currentTarget.querySelector('.delate');
        elem.classList.remove('disabel');
        elem.classList.add('active');
    }
    handlerMouseOut(e){
        let elem = e.currentTarget.querySelector('.delate');
        elem.classList.add('disabel');
        elem.classList.remove('active');
    }
    handleRemove(name){
        this.props.handlerRemove(name)
    }
    render(){
        let useColumnsNames = [];
        let allColumnsNamesArr = Object.keys(this.props.columnsNames.category);
        for(let i = 0; allColumnsNamesArr.length > i; i++){
            if(this.props.columnsNames.category[allColumnsNamesArr[i]] == true){
              useColumnsNames.push(allColumnsNamesArr[i])
            } else {
             continue;
            }
        }
        let useColumnsAnchors = useColumnsNames.map((item) =>{
            let name = item;
            return <a href='#' className = 'remove-item' onMouseOver={(event) => this.handlerMouseOver(event)}  onMouseOut={(event) => this.handlerMouseOut(event)}>
              {item}
              <div onClick={() => this.handleRemove(name)} className = 'delate disabel'>X</div>
            </a>
          });
        return(
            <div>
                {useColumnsAnchors}
            </div>
        )
    }
}
export default ActiveElements;