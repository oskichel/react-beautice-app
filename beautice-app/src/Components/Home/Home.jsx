import React from 'react';
import './Home.css';
import Slider from './Slider';
import img from './img.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

function Home() {
    return(
        <div>
            <Slider/>
            <div className={'Module-first'}>
                <img src={img} className={'Module-img'} alt={'img'}/>
                <div className={'Module-info'}>
                    <p className={'Module-subtitle first'}>
                        About us
                    </p>
                    <h2 className={'Module-title first'}>
                        We are the best beauty clinic
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
            <div className={'Module-second'}>
                <p className={'Module-subtitle second'}>
                    Main services
                </p>
                <h2 className={'Module-title second'}>
                    Our focus services
                </h2>
                <p className={'Module-text second'}>
                    Lorem ipsum dolor sit amet.
                </p>
                <div className={'Module-third'}>
                    <div className={'Module-item'}>
                        <img src={icon1} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>Beauty consultation</h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={'Module-item'}>
                        <img src={icon2} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>Skin treatments</h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={'Module-item'}>
                        <img src={icon3} className={'Module-item-icon'} alt={'icon'}/>
                        <h3 className={'Module-item-subtitle'}>Beauty product</h3>
                        <p className={'Module-item-text'}>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;