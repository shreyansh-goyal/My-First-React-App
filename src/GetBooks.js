import React,{Component} from 'react'; 
import './css/ShowBook.css'
import {search,update} from './bookAPI'
import {Link,Route} from 'react-router-dom'
class GetBooks extends Component{
    state = {
        book:[],
        buttonClicked:false,
        buttonkey:undefined
    }
    initalizebutton=(key)=>{
        this.setState({
            buttonkey:key,
            buttonClicked:true
        })
    }
    update = (value)=>{
        console.log(typeof(value));
        search(value).then(data=>{

            if(!(data.error))
            {
                this.setState({
                    book:data
                })
            }

        }).catch(e=>{ 
            this.setState({
                book:[]
            })
            console.log(e);
        }
        )
    }
    changeShelf=(shelf,data)=>{
        update(data,shelf).then(data=>{
            ;
            })
            this.setState({
                buttonClicked:false,
                buttonkey:undefined        
            })        
    }
    render()
    {
        return(
        <Route path="/" render={()=>(
            <div>
            <form>
                <input autoFocus onChange={(e)=>{this.update(e.target.value)}} type="text" placeholder="Search books from here"/>
            </form>
            <div class="bookshelfbox">
            {
            this.state.book.map(data=>[
                <div key={data.id} class="bookbox">
                    <img key={data.id}  src={data.imageLinks.smallThumbnail}></img>
                    <p key={data.id}>{data.title}</p>
                    <p key={data.id}>{data.publisher}</p>
                    <button key={data.id} onClick={()=>{this.initalizebutton(data.id);console.log(data.id)}} className="icon"/>
                    {this.state.buttonkey==data.id&&this.state.buttonClicked&&(
                    <select name="shelf" onClick={(e)=>{this.changeShelf(e.target.value,data)}} value="currentlyReading" class="change-shelf" multiple>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    )}
                </div>
            ])
            }
            </div>
            <Link to="/">
            <button className="backtolibrary" />
            </Link>
        </div>          
        )} />

)
    }
}
export default GetBooks;