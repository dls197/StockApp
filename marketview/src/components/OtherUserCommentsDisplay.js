import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/OtherUserCommentsDisplay.css'


function OtherUserCommentsDisplay({ yourUsername, searchedUsername }) {

    const [searchedUserCommentsList, setSearchedUserCommentsList] = useState([])
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/getSearchedUserCommentsInfo", {
            params: {
                searchedUsername: searchedUsername
            }
        }).then((response) => {
            setSearchedUserCommentsList(response.data.map((row) => {
                return row
            }))
        })
    }, [])

    const handleNewComment = (event) => {
        event.preventDefault()
        let date = new Date()
        let today = date.toLocaleString()
        Axios.post("http://localhost:3001/insertNewComment", {
            username: yourUsername,
            searchedUsername: searchedUsername,
            comment: newComment,
            dateTime: today
        }).then(() => {
            setSearchedUserCommentsList([
                ...searchedUserCommentsList,
                {
                    username: searchedUsername,
                    comment: newComment,
                    date_time: today,
                    commenter_username: yourUsername
                }
            ])
        })
    }
    
    return (
        <div className = "bigContainer3" title = "otherComments">
            <div className = "headingContainer6">
                <h1>Comments</h1>
            </div>
            <div className = "commentsElementContainer8">
                {searchedUserCommentsList.map((commentObject, index) => {
                    return (
                        <p key = {index}>
                            {commentObject.commenter_username} said: "{commentObject.comment}" on {commentObject.date_time}
                        </p>
                    )
                })}
                <form onSubmit = {(event) => handleNewComment(event)}>
                    <div className = "theBigDiv5">
                    <input
                        title = "otherCommentsInput"
                        id = "leaveComment" 
                        type = "text" value = {newComment} 
                        placeholder = "Leave a comment..." 
                        onChange = {(event) => {setNewComment(event.target.value)}} 
                    />
                    <input id = "submit69" type = "submit" title = "otherCommentsSubmit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OtherUserCommentsDisplay