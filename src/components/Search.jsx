import React from 'react'

class Search extends React.Component{
  state = {
    search: '',
  }

  handleClickBtn = ()=> {
    this.props.funcMovie(this.state.search)
  }
  handleKey = (e)=> {
    if(e.key === 'Enter') {
      this.props.funcMovie(this.state.search)
    }
   
  }

  render(){
    return  <div className="row">
      <div className="input-field">
        <input 
        className="validate"
        placeholder='search' 
        type="search" 
        value={this.state.search}
        onChange={e=> this.setState({search:e.target.value})}
        onKeyDown={this.handleKey}
         />
         <input className='btn'
                type="button" 
                value="search"
                onClick={this.handleClickBtn}
           />
      </div>
  </div>
  }

}
export {Search}