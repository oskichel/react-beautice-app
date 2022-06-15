import React from 'react';
import './Doctors.css';
import Card from './Card';
import './DoctorList.css';

export default class DoctorList extends React.Component {
    static defaultProps = {
        userList: []
    }
    render() {
        return (
            <div className={'DoctorList'}>
                {
                    this.props.userList.map((user) => {
                        return (
                            <div className={'DoctorList-item'} key={user.id}>
                                <Card
                                    id={user.id}
                                    email={user.email}
                                    firstName={user['first_name']}
                                    lastName={user['last_name']}
                                    avatar={user['avatar']}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}