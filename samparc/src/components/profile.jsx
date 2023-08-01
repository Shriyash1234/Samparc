import React,{useEffect, useState} from 'react'
import Header from './header'

import './CSS/profile.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BadgeX } from 'lucide-react';

const Profile = () => {

    const myState = useSelector((state)=>state.setUserNameMail)
    const userName = myState.name?myState.name:''
    const Navigate = useNavigate();
    const [userData,setuserData] = useState({
        name: '',
        phone: '',
        email: '',
        DOB: '',
        class: 'Choose',
        address: '',
        AccountBalance:'',
        userImage:'',
      });;
    function redirect(){
        if(userName===''){
            Navigate('/Register')
        }
    }
    useEffect(()=>{
        redirect()
    },[])
    function extractData(data){
        for(let i =0;i<data.length;i++){
            if (data[i].responses.email === myState.mail) {
            const updatedUserData = {
                ...userData,
                name: data[i].responses.name,
                phone: data[i].responses.phone,
                email: data[i].responses.email,
                DOB: data[i].responses.DOB,
                class:data[i].responses.class,
                address: data[i].responses.address,
                AccountBalance:data[i].responses.AccountBalance,
                userImage:data[i].responses.userImage
              };
              setuserData(updatedUserData);
              break;
            }
        }
    }
    function calculateAge(dateOfBirth) {
        const [year, month, day] = dateOfBirth.split('-').map(Number);
      
        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();
      
        let age = currentDate.getFullYear() - birthDate.getFullYear();
      
        const hasBirthdayPassed = currentDate.getMonth() > birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
      
        if (!hasBirthdayPassed) {
          age--;
        }
      
        return age;
      }
      
    useEffect(() => {
        fetch("http://localhost:4000/registerations")
        .then(response => response.json())
        .then(data =>extractData(data));
    }, []);
  return (
    <div className='Profile-page'>
        <Header/>
        <div className='profile-div'>
            <div className='profile-img-div'>
                <img className='profile-img' src={userData.userImage}></img>
                <div class="container">
                    <div class="fileUploadInput">
                    <label>Upload File</label>
                    <input type="file" />
                    <button>+</button></div>
                </div>
            </div>
            <div className='profile-Info'>
                <p className='profile-name'>{userData.name}</p>
                <div className='Account-balance-withdraw'>
                    <p className='Account-balance'>Account Balance: {userData.AccountBalance}</p>
                    <div className='withdraw'>Withdraw</div>
                </div>
                <hr className='horizontal-line'/>
                <div className='profile-details-div-div'>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Address:</div>
                        <div className='Address profile-details'>{userData.address}</div>
                    </div>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Email:</div>
                        <div className='verifiable-details'>
                            <div className='profile-details'>{userData.email}</div>
                            <BadgeX style={{marginTop:"5px"}}/>
                        </div>
                    </div>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Class:</div>
                        <div className='Address profile-details'>{userData.class}</div>
                    </div>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Date of birth:</div>
                        <div className='Address profile-details'>{userData.DOB}</div>
                    </div>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Age:</div>
                        <div className='Address profile-details'>{calculateAge(userData.DOB)}</div>
                    </div>
                    <div className='profile-details-div'>
                        <div className='profile-detail profile-details-input'>Phone:</div>
                        <div className='verifiable-details'>
                            <div className='profile-details'>{userData.phone}</div>
                            <BadgeX />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
