import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/OtherUserPersonal.css'


function OtherUserPersonal({ searchedUsername }) {

    const [searchedUserFullName, setSearchedUserFullName] = useState("")
    const [searchedUserBio, setSearchedUserBio] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/getFullName", {
            params: {
                username: searchedUsername
            }
        }).then((response) => {
            setSearchedUserFullName(response.data[0].full_name)
        })

        Axios.get("http://localhost:3001/getBio", {
            params: {
                username: searchedUsername
            }
        }).then((response) => {
            setSearchedUserBio(response.data[0].bio)
        }) 
    })

    return (
        <div className = "searchedUserNameBioContainer" title = "otherUserBio">
            <h1>User Profile: {searchedUsername} ({searchedUserFullName})</h1>
            <h3>{searchedUsername}'s Bio: {searchedUserBio}</h3>
        </div>
    )
}

export default OtherUserPersonal