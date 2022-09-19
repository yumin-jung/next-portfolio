import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/animation-404.json'

const Animation404 = () => {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
        />
    )
}

export default Animation404