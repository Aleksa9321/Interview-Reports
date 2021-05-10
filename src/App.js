import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import {AdminPage} from "./Components/AdminPage/index"
import {HomePage} from "./Components/HomePage/index"

class App extends Component {

  state = {
    data: [],
    searchText: "",
    filteredData: [],
    accessToken: ""
  }

  componentDidMount = () => {
    fetch ("http://localhost:3333/api/candidates")
    .then(response => response.json())
    .then(results => this.setState({
      data: results,
      filteredData: results
    }))
  }

  filterUsers = (event) => {
    this.setState({
      filteredData: this.state.data.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
    })
  }

  userListReturn = () => {
    this.setState({
      filteredData: this.state.data
    })
  }

  getLoginData = (response) => {
    this.setState({
      accessToken: response
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {!this.state.accessToken && <Redirect from="/admin" to="/"></Redirect>}
          <Route path="/admin">
            <AdminPage token={this.state.accessToken}></AdminPage>
          </Route>
          <Route path="/">
            <HomePage data={this.state.filteredData} search={this.filterUsers} userListReturn={this.userListReturn} getLoginData={this.getLoginData} accessToken={this.state.accessToken}></HomePage>
          </Route>
        </Switch>
      </div>
    );
  }
}

export {App};