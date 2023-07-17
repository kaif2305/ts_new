import React from 'react'

import Carousel from './carousel'

import { Countdown } from './countdown'

import ColabClgHome from '../Header/colab_clg_home'

export default function Home() {
    return (
        <div>
            <ColabClgHome />
            <Carousel />

            <Countdown />

        </div>
    )
}
