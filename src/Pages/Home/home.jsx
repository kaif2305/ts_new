import React from 'react'

import Carousel from './carousel'

import { Countdown } from './countdown'

import ColabClgHome from '../Header/colab_clg_home'

import '../../Static/css/home.css'

export default function Home() {
    return (
        <div>
            <ColabClgHome />
            <Carousel />
            <div className="marq">
                <marquee behavior="slider" width="100%" direction="left"> Thank you for the overwhelming response. &emsp; &emsp; &emsp; Abstract submissions stands closed. &emsp; &emsp; &emsp; Abstract decision communication is now under way.</marquee>
            </div>
            <Countdown />

        </div>
    )
}
