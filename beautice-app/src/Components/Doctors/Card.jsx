import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    static defaultProps = {
        id: 0,
        email: '',
        firstName: '',
        lastName: '',
        avatar: ''
    }
    render() {
        const { email, firstName, lastName, avatar } = this.props;
        return (
            <div className={'Card'}>
                <div className="Card-image">
                    <img src={avatar}/>
                </div>
                <h2 className={'Card-title'}>{firstName} {lastName}</h2>
                <div className={'Card-subtitle'}>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }
}