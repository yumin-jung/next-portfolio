import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/animation-home.json'

const AnimationHome = () => {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
        />
    )
}

export default AnimationHome