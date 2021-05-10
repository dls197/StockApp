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
            setFullName(response.data[0].full_name)
        })

        Axios.get("http://localhost:3001/getBio", {
            params: {
                username: username
            }
        }).then((response) => {
            setBio(response.data[0].bio)
        }) 
    }, [])

    const handleNameChange = (event) => {
        event.preventDefault()
        setFullName(newFullName) 
        Axios.put("http://localhost:3001/updateFullName", {
            username: username,
            fullName: newFullName //i would have just sent fullName instead of newFullName, but the set methods are really slow and don't update the values before the request is sent
        }).then((response) => {
            console.log(response)
            console.log(`the new full name = ${newFullName}`)
        })
    }

    const handleBioChange = (event) => {
        event.preventDefault()
        setBio(newBio)
        Axios.put("http://localhost:3001/updateBio", {
            username: username,
            bio: newBio //same as above
        })
    }
    
    return (
        <div className = "folderContainer">
            <div className = "headingContainer3">
                <h1>Your Info</h1>
            </div>
            <div className = "folderButtonContainer2">
            <p id = "currentFullName" title = "newFullName">Your Full Name: {fullName}</p>
            {/*submit sends the new info to the database*/}
            <form onSubmit = {(event) => handleNameChange(event)}>
                <div className = "inputPair">  
                    <input
                        id = "change12" 
                        type = "text"
                        title = "changeFullName"
                        value = {newFullName}
                        placeholder = "Change Full Name to..."
                        onChange = {(event) => {
                            setNewFullName(event.target.value)
                        }}
                    />
                    <input
                        title = "nameSubmit"
                        type = "submit"
                        id = "submit8"
                    />
                </div> 
            </form>
            <p id = "currentBio" title = "newBio">Your Bio: {bio}</p>
            <form onSubmit = {handleBioChange}>
                <div className = "inputPair">  
                    <input
                        id = "change13" 
                        type = "text"
                        title = "changeBio"
                        value = {newBio}
                        placeholder = "Change Bio to..."
                        onChange = {(event) => {
                            setNewBio(event.target.value)
                        }}
                    />
                    <input
                        title = "bioSubmit"
                        type = "submit"
                        id = "submit9"
                    />
                </div> 
            </form>
            </div>
        </div>
    )
}

export default Personal