import React from 'react';
import './Doctors.css';
import DoctorList from "./DoctorList";

export default class Doctors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?per_page=10')
            .then((response) => response.json())
            .then((result) => {
                this.setState({users: result.data});
            })
    }

    renderUsers() {
        if (this.state.users.length) {
            return <DoctorList userList={this.state.users}/>
        }

        return <div>Loading...</div>
    }

    render() {
        return (
            <div className="Doctors">
                <div className={'Module-team'}>
                    <p className={'Module-subtitle second'}>
                        Our team
                    </p>
                    <h2 className={'Module-title second'}>
                        We are professionals
                    </h2>
                    <p className={'Module-text second'}>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                {this.renderUsers()}
            </div>
        );
    }
}