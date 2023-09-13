import { Amplify,Auth } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Navigation from './navigation';
import './App.css'

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ServiceSelection from './ServiceSelection';
import companyLogo from './dnts-logo2.png';
// import GenAi from './GenAi.jpg'

Amplify.configure(awsExports);

const formFields = {
  signUp: {
    family_name: {
      placeholder:'Enter Your First Name',
      label:'First Name',
      order:1
    },
    given_name: {
      placeholder:'Enter Your Last Name',
      label:'Last Name',
      order: 2
    },
    email: {
      order: 3
    },
    phone_number: {
      order: 3
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
  },
 }

const signUpAttributes=['phone_number', 'family_name', 'given_name',]


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {checkAuthStatus();}, []);

  async function checkAuthStatus() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsAuthenticated(!!user);
      setUserFirstName(user.attributes.family_name || '');
    } catch (error) {
      setIsAuthenticated(false);
    }
  
  }

  // Define a function to handle sign-out
  async function handleSignOut() {
    try {
      await Auth.signOut();
      // After sign-out, update the isAuthenticated state to false
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  
  const handleSelection = (selectedServices) => {
    // Handle the selected services here
    selectedServices(selectedServices);
  };

  return (
    <div className="app-container">
      {/* Conditional rendering of the navbar */}

      {isAuthenticated && 
       <Navigation onSignOut={handleSignOut} className ='navbar'/>}

      {/* Render content based on authentication status */}
      <div className="content">
      {!isAuthenticated ? (
        // Render the Authenticator for login and signup
        <div>
          {/* <div className="login-signup-container"/> */}
          {/* <img src={GenAi} alt='Background Image' className='bg-image'/> */}
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <br/>
          <Authenticator formFields={formFields} signUpAttributes={signUpAttributes} />
        </div>
      ) : (
        // Render the Dashboard or other authenticated pages
        // <Dashboard />

        <div>
        {/* Your authenticated content goes here */}
        <h1 style={{ color: 'white' }}><center>Welcome {userFirstName}</center></h1>
        <br/>
        <ServiceSelection handleSelection={handleSelection} />
        {/* Sign out button */}
        {/* <button onClick={handleSignOut}>Sign out</button> */}
        </div>
      )}
      </div>
    </div>
  );
}