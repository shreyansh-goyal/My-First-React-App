import React,{Component} from 'react';
import './css/ShowBook.css'
import {getAll,update} from './bookAPI'
import Search from './Search'
import {Link} from 'react-router-dom'
class ShowBook extends Component{
    state={
        headline:this.props.heading,
        headline1:this.props.heading2,
        headline2:this.props.heading3,
        book:[],
        book1:[],
        book2:[],
        buttonClicked:false,
        buttonkey:undefined,
        readData:{},
        toRead:false,
    }
    sendToLib=()=>{
        this.setState({
            readData:{},
            toRead:false
        })
    }
    initalizebutton=(key)=>{
        this.setState((prev)=>({
            buttonClicked:!prev.buttonClicked,
            buttonkey:key
            
        }))
    }
    setRead=(data)=>{
        this.setState({
            readData:data,
            toRead:true
        })
    }
    changeShelf=(shelfName,data)=>{
        
        update(data,shelfName).then(data=>{
        ;
        })
        this.setState((prev)=>({
            buttonClicked:!prev.buttonClicked,
            buttonkey:undefined
            
        }))
        if(data.shelf==this.state.headline)
        {
            this.setState((prev)=>({
                buttonClicked:!prev.buttonClicked,
                buttonkey:undefined,
                book:prev.book.filter(e=>e.id!=data.id)                
            }),()=>{
                if(shelfName==this.state.headline)
                {
                    console.log(this.state.book);
                    var a = this.state.book;
                    a.push(data)
                    this.setState({
                        book:a
                    }) 
                }
                else if(shelfName==this.state.headline1)
                {
                    var a = this.state.book1;
                    a.push(data)
                    this.setState({
                        book1:a
                    }) 
                }
                else if(shelfName==this.state.headline2)
                {
                    var a = this.state.book2;
                    a.push(data)
                    this.setState({
                        book2:a
                    }) 
                }
    
            })
        }
        else if(data.shelf==this.state.headline1)
        {
            this.setState((prev)=>({
                book1:prev.book1.filter(e=>e.id!=data.id)
            }))
            if(shelfName==this.state.headline)
            {
                var a = this.state.book;
                a.push(data)
                this.setState({
                    book:a
                }) 
            }
            else if(shelfName==this.state.headline1)
            {
                var a = this.state.book1;
                a.push(data)
                this.setState({
                    book1:a
                }) 
            }
            else if(shelfName==this.state.headline2)
            {
                var a = this.state.book2;
                a.push(data)
                this.setState({
                    book2:a
                }) 
            }
        }
        else if(data.shelf==this.state.headline2)
        {
            this.setState((prev)=>({
                book2:prev.book2.filter(e=>e.id!=data.id)
            }))
            if(shelfName==this.state.headline)
            {
                var a = this.state.book;
                a.push(data)
                this.setState({
                    book:a
                }) 
            }
            else if(shelfName==this.state.headline1)
            {
                var a = this.state.book1;
                a.push(data)
                this.setState({
                    book1:a
                }) 
            }
            else if(shelfName==this.state.headline2)
            {
                var a = this.state.book2;
                a.push(data)
                this.setState({
                    book2:a
                }) 
            }
        }
    }
    componentWillMount()
    {
        getAll().then(data=>{
            this.setState({
                book:data.filter(e=>e.shelf===this.state.headline),
                book1:data.filter(e=>e.shelf===this.state.headline1),
                book2:data.filter(e=>e.shelf===this.state.headline2)
            })
console.log(data);
        })

    }

    render()
    {

        return(
            <div>
            {this.state.toRead==false&&(
            <div>
            <div >
            <h1>{this.state.headline}</h1>
            <div key={this.state.headline} className="bookshelfbox">
                {
                this.state.book.map(data=>[
                    <div key={data.id} class="bookbox">
                        <img key={data.id}  src={data.imageLinks.smallThumbnail}></img>
                        <p key={data.id}>{data.title}</p>
                        <p key={data.id}>{data.publisher}</p>
                        <button key={data.id} onClick={()=>{this.initalizebutton(data.id);console.log(data.id)}} className="icon"/>
                        <button onClick={()=>{this.setRead(data);}} className="readbtn"></button>
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
        </div>
        <div >
        <h1>{this.state.headline1}</h1>
        <div key={this.state.headline1} className="bookshelfbox">
            {
            this.state.book1.map(data=>[
                <div key={data.id} class="bookbox">
                    <img key={data.id}  src={data.imageLinks.smallThumbnail}></img>
                    <p key={data.id}>{data.title}</p>
                    <p key={data.id}>{data.publisher}</p>
                    <button key={data.id} onClick={()=>{this.initalizebutton(data.id);console.log(data.id)}} className="icon"/>
                    <button onClick={()=>{this.setRead(data);}} className="readbtn"></button>

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
    </div>
        <div>
        <h1>{this.state.headline2}</h1>
        <div key={this.state.headline2} className="bookshelfbox">
            {
            this.state.book2.map(data=>[
                <div key={data.id} class="bookbox">
                    <img key={data.id}  src={data.imageLinks.smallThumbnail}></img>
                    <p key={data.id}>{data.title}</p>
                    <p key={data.id}>{data.publisher}</p>
                    <button key={data.id} onClick={()=>{this.initalizebutton(data.id);console.log(data.id)}} className="icon"/>
                    <button onClick={()=>{this.setRead(data);}} className="readbtn"></button>
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
                <Search />
                </div>
        </div>
        </div>
    )}
    {this.state.toRead==true&&(
         <div>
         <div className="bookpage">
        <img src={this.state.readData.imageLinks.thumbnail} /> 
        <p>
          {this.state.readData.description}  
        </p>
        </div>
            <button onClick={this.sendToLib} className="backtolibrary" />
        </div>
        
    )}
</div>
            )
    }
}
export default ShowBook;