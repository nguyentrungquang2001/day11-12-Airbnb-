import React, { useState } from "react";
const Profile = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  const [dao, setdao] = useState(true);
  function toggleFavorite() {
    setdao((contact.isFavorite = !contact.isFavorite));

    console.log(dao);
  }
  return (
    <main>
      <article className="card">
        <img
          src="https://images.pexels.com/photos/825904/pexels-photo-825904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card--image"
        />
        <div className="card--info">
          {dao ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1601/1601243.png"
              className="card--favorite"
              onClick={toggleFavorite}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
              className="card--favorite"
              onClick={toggleFavorite}
            />
          )}

          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default Profile;
