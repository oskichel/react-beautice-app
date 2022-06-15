import React from 'react';
import './Service.css';
import ServiceList from "./ServiceList";

function Service() {
    return(
        <div className={'Service'}>
            <div className={'Module-second'}>
                <p className={'Module-subtitle second'}>
                    Main services
                </p>
                <h2 className={'Module-title second'}>
                    Our focus services
                </h2>
                <p className={'Module-text second'}>
                    Lorem ipsum dolor sit amet. Ist.
                </p>
            </div>
            <ServiceList/>
        </div>
    );
}

export default Service;