import './Feedback.css';
import {useEffect, useState} from 'react';
import React from "react";
import {useForm} from "@formspree/react";

function Feedback() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailClick, setEmailClick] = useState(false)
    const [messageClick, setMessageClick] = useState(false)
    const [emailError, setEmailError] = useState('Required field')
    const [messageError, setMessageError] = useState('Required field')
    const [formValid, setFormValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailClick(true)
                break
            case 'message':
                setMessageClick(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is invalid')
        } else {
            setEmailError("")
        }
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
        if(e.target.value.length <30) {
            setMessageError('Message must be longer than 30 characters')
            if(!e.target.value) {
                setMessageError('Required field')
            }
        } else {
            setMessageError("")
        }
    }

    useEffect(() => {
        if (emailError || messageError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, messageError])

    const [state, handleSubmit] = useForm("myyoyznd");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className={'Form-submit'}>
                <div className={'Form-submit-area'}>
                    <input
                        className={'Form-submit-input name-input'}
                        type='name'
                        name='name'
                        placeholder={'Full name'}
                    />
                </div>
                <div className={'Form-submit-area'}>
                    <input
                        className={'Form-submit-input email-input'}
                        type='email'
                        name='email'
                        required
                        placeholder={'Email address'}
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}
                    />
                    {(emailError && emailClick) && <div className={'Form-submit-error email-error'}>{emailError}</div>}
                </div>
                <div className={'Form-submit-area'}>
                    <textarea
                        className={'Form-submit-textarea'}
                        name='message'
                        required
                        placeholder={'Your inquiry here'}
                        value={message}
                        onChange={e => messageHandler(e)}
                        onBlur={e => blurHandler(e)}
                    />
                    {(messageError && messageClick) && <div className={'Form-submit-error message-error'}>{messageError}</div>}
                </div>
                <button className={'Form-submit-button'} type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Feedback;