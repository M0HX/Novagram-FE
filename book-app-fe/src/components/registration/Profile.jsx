
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Profile(props) {
  console.log("props.userid",props.user);

const [user, setUser] = useState({
id: '',
username: '',
email: '',
// Add other user properties
});

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await Axios.get(`/user/detail?id=${props.user.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log(response.data, 'data response');

      if (response.data && response.data.user) {
        setUser(response.data.user);
      } else {
        console.log('User data not found');
        // Handle the case where user data is not available
      }
    } catch (error) {
      console.error(error);
      // Handle error (e.g., redirect to login page)
    }
  };

  // Check if props.user has the 'id' property before calling fetchUserData
  if (props.user && props.user.id) {
    fetchUserData();
  }
}, [props.user]);




  return (
        <div class="container emp-profile">
    
    <form method="post"  >
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={user.avatar} alt=""/>
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                        <h5>
                                            {user.firstname}
                                        </h5>
                                       
                                        <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a><br/>
                                <a href="">Bootsnipp Profile</a><br/>
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br/>
                                <a href="">Web Developer</a><br/>
                                <a href="">WordPress</a><br/>
                                <a href="">WooCommerce</a><br/>
                                <a href="">PHP, .Net</a><br/>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Kshiti123</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{user.firstname}i</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{user.email}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{user.phoneNumber}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Profession</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Web Developer and Designer</p>
                                                </div>
                                            </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </form>  
    
    
    
        
        </div>
      );
    }


