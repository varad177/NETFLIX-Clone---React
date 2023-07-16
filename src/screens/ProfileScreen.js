import React from 'react'
import './profileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

import { getAuth , signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";





const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const signout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          alert("Sign out successfully")
        }).catch((error) => {
        console.log("error in logout");
        }); 
    }
 
    const navigate = useNavigate();


    return (
        <div className='profilescreen'>
            <Nav />

            <div className="profilescreen__body">
                <h1>My Profile</h1>
                <div className="profilescreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                    <div className="profilescreen__details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen__plans">
                            <h2>plans</h2>
                            <div className="plans">

                                <div className="planrow"> <h4>HD + 1 Month </h4> <button onClick={()=>{navigate("/")}}>299 /- Go To Home</button>
                                </div>
                                <div className="planrow">
                                    <h4>HD + 2 Month </h4><button onClick={()=>{navigate("/")}}>399 /- Go To Home</button>
                                </div>
                                <div className="planrow">
                                    <h4>HD + 3 Month </h4><button onClick={()=>{navigate("/")}}>499 /- Go To Home</button>
                                </div>
                                <div className="planrow">

                                    <h4>4k + HDR + 4 Month </h4><button onClick={()=>{navigate("/")}}>599 /- Go To Home</button>
                                </div>

                            </div>
                            <button className='profilescreen__signout' onClick={signout} >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileScreen
