import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/Personal.css'

function Personal({ username }) {

    const [fullName, setFullName] = useState("")
    const [newFullName, setNewFullName] = useState("")
    const [bio, setBio] = useState("")
    const [newBio, setNewBio] = useState("")

    //get & set full name & bio of user, and allow them to change it
    useEffect(() => {
        Axios.get("http://localhost:3001/getFullName", {
            params: {
                username: username
            }
        }).then((response) => {
            setFullName(response.data.full_name)
            console.log(response.data.full_name)
        })

        Axios.get("http://localhost:3001/getBio", {
            params: {
                username: username
            }
        }).then((response) => {
            setBio(response.data.bio)
        }) 
    }, [])

    const handleNameChange = (event) => {
        event.preventDefault()
        setFullName(newFullName)
        Axios.put("http://localhost:3001/updateFullName", {
            username: username,
            fullName: fullName
        })
    }

    const handleBioChange = (event) => {
        event.preventDefault()
        setBio(newBio)
        Axios.put("http://localhost:3001/updateBio", {
            username: username,
            bio: bio
        })
    }
    

    return (
        <div className = "folderContainer">
            <div className = "headingContainer3">
                <h1>Your Info</h1>
            </div>
            <div className = "folderButtonContainer2">
            <p id = "currentFullName">Your Full Name: {fullName}</p>
            {/*submit sends the new info to the database*/}
            <form onSubmit = {handleNameChange}>
                <div className = "inputPair">  
                    <input
                        className = "change" 
                        type = "text"
                        value = {newFullName}
                        placeholder = "Change Full Name to..."
                        onChange = {(event) => {
                            setNewFullName(event.target.value)
                        }}
                    />
                    <input
                        type = "submit"
                        className = "submit"
                    />
                </div> 
            </form>
            <p id = "currentBio">Your Bio: {bio}</p>
            <form onSubmit = {handleBioChange}>
                <div className = "inputPair">  
                    <input
                        className = "change" 
                        type = "text"
                        value = {newBio}
                        placeholder = "Change Bio to..."
                        onChange = {(event) => {
                            setNewBio(event.target.value)
                        }}
                    />
                    <input
                        type = "submit"
                        className = "submit"
                    />
                </div> 
            </form>
            </div>
        </div>
    )
}

export default Personal