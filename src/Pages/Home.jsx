import React from 'react'
import Video from '../Components/Home/Video'
import HomeHerotext from '../Components/Home/HomeHerotext'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed ' >
        <Video/>
      </div>
      <div className='h-screen w-screen relative pb-5 flex flex-col justify-between'>
        <HomeHerotext/>
        <HomeBottomText/>

      </div>
    </div>
  )
}

export default Home