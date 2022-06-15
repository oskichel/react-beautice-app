import React from 'react';
import contact from './contact.png';
import mail from './mail.png';
import phone from './phone.png';
import pin from './pin.png';
import Feedback from "./Feedback";

function Contact() {
    return(
        <div className={'Contact'}>
            <div className={'Module-first'}>
                <img src={contact} className={'Module-img'} alt={'img'}/>
                <div className={'Module-info'}>
                    <p className={'Module-subtitle first'}>
                        Contact us
                    </p>
                    <h2 className={'Module-title first'}>
                        Contact service for our customers
                    </h2>
                    <p className={'Module-text first'}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero.
                        Nunc, ipsum ornare mauris sit quam quis enim.
                        Varius tellus in suspendisse placerat.
                    </p>
                </div>
            </div>
            <Feedback/>
            <div className={'Module-second'}>
                <p className={'Module-subtitle second'}>
                    Get in Touch
                </p>
                <h2 className={'Module-title second'}>
                    Get direct handling by us
                </h2>
                <p className={'Module-text second'}>
                    Lorem ipsum dolor sit amet.
                </p>
                <div className={'Module-third'}>
                    <div className={'Module-item'}>
                        <img src={pin} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>101 Baker Street, NY</h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={'Module-item'}>
                        <img src={phone} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>
                            <a className={'Module-item-subtitle'} href={'tel:+8961205889'}>
                                +896 120 5889
                            </a>
                        </h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={'Module-item'}>
                        <img src={mail} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>
                            <a className={'Module-item-subtitle'} href={'mailto:mail@company.com'}>
                                mail@company.com
                            </a>
                        </h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;