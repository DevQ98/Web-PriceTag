import React, { Component } from 'react'
import Tag from './Move'
export default class Contents extends Component {
        constructor (){
            super();
            this.postID=0 ;
            this.Body= "";
            this.state = {
                postArray :[                   
                ]
            }

        }
        deleteEvent = (index) =>{
            const copyPostArray =Object.assign([], this.state.postArray);
            copyPostArray.splice(index,1);
            
            this.setState({
                postArray: copyPostArray
            })
        }
        setPost = (element)=>{
            this.Body = element.target.value
        }
        addPost = ()=>{
            this.postID = this.postID +1;
            const copyPostArray = Object.assign([], this.state.postArray);
            copyPostArray.push({
                id : this.postID , 
                body :this.Body 
            })
            this.setState({
                postArray : copyPostArray
            })
        }
    
    render() {      
        return (
            <div>
                <input type='text' onBlur={this.setPost} />
                <button onClick ={this.addPost}> Add Post</button>
                <ul>
                    {
                        this.state.postArray.map((tag , index) =>{
                            return( 
                                <Tag
                                key={tag.id}
                                id ={tag.id}
                                body = {tag.body}
                                 delete ={this.deleteEvent.bind(this. index)}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}