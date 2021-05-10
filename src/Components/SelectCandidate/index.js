import React, { Component } from 'react';
import "./style.css"
import {Search} from "../Search/index"
import {Candidate} from "../Candidate/index"

class SelectCandidate extends Component {

    state = {
        candidates: [],
        filteredCandidates: ""
    }

    componentDidMount = () => {
        fetch("http://localhost:3333/api/candidates")
        .then(response => response.json())
        .then(results => this.setState({
            candidates: results
        }))
    }

    search = (event) => {
        this.setState({
            filteredCandidates: this.state.candidates.filter(el => el.name.toLowerCase().includes(event.target.value))
        })
    }

    render() {
        return (
            <div className="select-candidate">
                <Search search={this.search}></Search>
                <div className="select-candidate-list">
                {this.state.filteredCandidates === "" ? this.state.candidates.map(el => <Candidate data={el} enterUser={this.props.enterUser} mode="select-candidate"></Candidate>) : this.state.filteredCandidates.map(el => <Candidate data={el} enterUser={this.props.enterUser} mode="select-candidate"></Candidate>)}
                </div>
                <button className="next-button" onClick={this.props.goToSelectCompany}>Next</button>
            </div>
        );
    }
}

export {SelectCandidate};