import React from 'react'

const UserCard = ({user}) => {
    console.log(user , "user card")
//     {
//     "_id": "68cf5e9b79ec9fc3693cdc1d",
//     "firstName": "Ganesh",
//     "lastName": "Kumar",
//     "emailId": "gkbhai2323@gmail.com",
//     "password": "$2b$10$8jGOKFXqG9ydzCnr4ukUueyTmHfGHGz5D7ea/hUIY1eEc7v4ha5.6",
//     "photoUrl": "https://www.shutterstock.com/image-vector/simple-gray-avatar-icons-representing-600nw-2473353263.jpg",
//     "skills": [],
//     "default": "This is default about the user",
//     "createdAt": "2025-09-21T02:10:35.635Z",
//     "updatedAt": "2025-09-28T02:25:31.405Z",
//     "__v": 0,
//     "about": "passioante to achieve something big in life",
//     "age": 20,
//     "gender": "male"
// }
    const { firstName , lastName , photoUrl , about , skills,age} = user;
  return <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    {age && gender && <p>{age} years old, {gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center mt-2 flex items-center">
      <button className="btn btn-primary">Interested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
}

export default UserCard
