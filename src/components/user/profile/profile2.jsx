import React, { useState } from 'react'
import './profile2.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateUser } from '../../../redux/user/userSlice'


function Profile2() {
  const [profilePicture, setProfilePicture] = useState('');
  const [imageUrl,setImageUrl]=useState(null)

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const dispatch=useDispatch()

  const { username, userId, image } = useSelector(state => state.user)
  console.log(username, userId, image);

  const imageUpload = async(e) =>{
    e.preventDefault()
    const formData = new FormData()
        
        formData.append('image', imageUrl)
        formData.append("userId", userId)

        const config = {
          header: {
              "content-type": "multipart/form-data",
               userId: userId
          },
          withCredentials: true
      }

      try {
        const { data } = await axios.post("http://localhost:4000/profile", formData, config)
        dispatch(updateUser({ image: data.imageUrl, username, userId }))
        console.log(data);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='bodyProfile'>

    <div className="container">
           <h1>Profile Page</h1>
             <div className="profile-img">
             {imageUrl && <img  width="20px" height="250"  src={`/Images/${image}`}  alt="Profile" />}
             </div>
             <div className="profile-info">
                 <label for="name">{username}</label> 
                 {/* <input type="text" id="name" name="name" placeholder="Enter your name" /> */}

                 <input type="file" onChange={handleProfilePictureChange} />

                 <button className="btn" onClick={imageUpload} >Save</button>
             </div>
         </div>  
    </div>
  );
}



// function Profile2() {
//     const [image,setImage]=useState([])

//     return (
//         <div className="container">
//             <h1>Profile Page</h1>
//             <div className="profile-img">
//                 <img  alt="Profile Picture" width="200px" height="170px" src={image ? image:''} />
//             </div>
//             <div className="profile-info">
//                 <label for="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" />

//                 {/* <label for="address">Address:</label>
//                 <textarea id="address" name="address" placeholder="Enter your address"></textarea> */}

//                 <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="photo" name="photo" />

//                 <button className="btn">Save</button>
//             </div>
//         </div>
//     )
// }

export default Profile2



