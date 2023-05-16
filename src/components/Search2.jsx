import React, {useState} from 'react';

const Search = (props)=> {
  const {
    searchMovie = Function.prototype,
  } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');


  const  handleClickBtn = () => {
        searchMovie(search, type);
    };
    const  handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovie(search, type);
        }
    };
    const  handleFilter = (e) => {
      setType(e.target.dataset.type);
      searchMovie(search, e.target.dataset.type);
    };

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value )
                        }
                        onKeyDown={handleKey}
                    />
                    <input
                        className='btn red darken-4' 
                        type='button'
                        value='search'
                        onClick={()=>
                        searchMovie(search, type)
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
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    
                </div>
            </div>
        );
    
}
export { Search };
