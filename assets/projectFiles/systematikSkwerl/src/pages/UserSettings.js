import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';

function UserSettings() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
      fetch('https://randomuser.me/api/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setUserData(data.results.map(user => ({
          picture: `${user.picture.large}`,
          firstName: `${user.name.first}`,
          lastName: `${user.name.last}`,
          emailAddress: `${user.email}`,
          contactNumber: `${user.cell}`,
          address: `${user.location.street.number} ${user.location.street.name}`,
          city: `${user.location.city}`,
          userState: `${user.location.state}`,
          zipCode: `${user.location.postcode}`,
          country: `${user.location.country}`,
          username: `${user.login.username}`,
          password: `${user.login.password}`,
        })));
      })
      .catch ((err) => {
        console.log("You're dumb app just caused an ERROR!!", err);
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
    // You can make this into a tirenary in the return statement. Build a loading component. if loaded ? do this : err
    if (loading) return <p style={styles.loadingStyle}>'Loading...'</p>;
    if (err) return "Error!";
      
  return (
    <div>
      {/* You could add the tirenary here. */}
      <h1 style={styles.title}>Settings</h1>
      <h2 style={styles.h2}>{loading}</h2>
        {!loading && userData.length > 0 ? userData.map(user => {
          const {picture, firstName, lastName, emailAddress, contactNumber, address, city, userState, zipCode, country, username, password} = user;
          return <UserForm img={picture} alt="this is a user photo" firstName={firstName} lastName={lastName} emailAddress={emailAddress} 
          contactNumber={contactNumber} address={address} city={city} userState={userState} zipCode={zipCode} country={country} username={username} 
          password={password}/>
        }) : null
      }
    </div>
  )
}
export default UserSettings;

const styles = {
    loadingStyle: {
        fontSize: '3rem',
        color: 'rgba(126, 217, 87, 1)',
    },
    h1: {
        fontSize: '3rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '2.25rem',
        color: 'rgba(255, 235, 245, 1)',
        width: '75rem',
        marginTop: '2rem',
    }
}