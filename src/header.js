import React,{Component} from 'react';
import './css/header.css'

class Header extends Component{
    render()
    {
        return(
            <div className="header">{this.props.headline}</div>
        )
    }
}
export default Header;