import React,{Component} from 'react';
import './css/ShowBook.css'
import {Link} from 'react-router-dom'
class Search extends Component
{
    render()
    {
        return (
            <Link to="/search">
            <button className="add">
            </button>
            </Link>
        )
    }
}
export default Search;