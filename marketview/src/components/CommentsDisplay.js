import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/CommentsDisplay.css'

function CommentsDisplay({ username }) {

    const [commentsList, setCommentsList] = useState([])

    //get & set list of comments(object of username, comment, date_time(will use later)
    //and commenter_username) for the user on inital render
    useEffect(() => {
        Axios.get("http://localhost:3001/getCommentsInfo", {
            params: {
                username: username
            }
        }).then((response) => {
            setCommentsList(response.data.map((row) => {
                return row
            }))
        })
    }, [])

    return (
        <div className = "folderContainer">
            <div className = "headingContainer2">
                <h1>Comments</h1>
            </div>
            <div className = "folderButtonContainer">
                {commentsList.map((commentObject, index) => {
                    return (
                        <p key = {index}>
                            {commentObject.commenter_username} said: {commentObject.comment}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default CommentsDisplay