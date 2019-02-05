import React,{Component} from 'react';
import './css/ShowBook.css'
class ShowBook extends Component{
    state={
        headline:this.props.heading,
        book:this.props.book
    }
    render()
    {

        return(
            // <div>
            //     <h1>{this.state.headline}</h1>
            //     {
            //         this.state.book.map(data=>[
            //             <div>
            //                 <img src={data.imageLinks.smallThumbnail}></img>
            //             </div>
            //         ])
            //     }
            // </div>
            <h1>hello world</h1>
            )
    }
}
export default ShowBook;