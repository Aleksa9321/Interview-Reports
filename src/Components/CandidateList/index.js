import React, { Component } from 'react';
import "./style.css"
import {Candidate} from "../Candidate/index"

class CandidateList extends Component {
    render() {
        return (
            <div className="candidate-list">
                {this.props.data.map(el => <Candidate data={el} enterUser={this.props.enterUser} key={el.id}></Candidate>)}
            </div>
        );
    }
}

export {CandidateList};