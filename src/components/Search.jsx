import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleClickBtn = () => {
        this.props.searchMovie(this.state.search, this.state.type);
    };
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    };
    handleFilter = (e) => {
      this.setState(
        ()=> ({type: e.target.dataset.type}),
        ()=> {
        this.props.searchMovie(this.state.search, this.state.type)
      })
      
        // this.setState({ type: e.target.dataset.type });
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <input
                        className='btn red darken-4' 
                        type='button'
                        value='search'
                        // onClick={this.handleClickBtn}
                        onClick={()=>
                        this.props.searchMovie(this.state.search, this.state.type)
                        }
                    />
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    
                </div>
            </div>
        );
    }
}
export { Search };
