import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import Login from './components/Login';
import Register from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import NavbarItem from './components/NavbarItem';
import Footer from './components/Footer';
import Appointments from './components/Appointments';
import Emergency from './components/Emergency';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarItem />
        {/* <Login /> */}
        {/* <Header /> */}
        {/* <DoctorRegister /> */}
        {/* <Register /> */}
        <BrowserRouter>
          <Switch>
            <Route
              path="/Login"
              component={Login}

            />
            <Route
              path="/Doctors"
              component={DoctorRegister}

            />
            <Route
              path="/patients"
              component={Register}

            />
            <Route
              path="/appointment"
              component={Appointments}

            />
            <Route
              path="/emergency"
              component={Emergency}

            />

            <Route
              path=""
              component={Header}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}

export default App;
