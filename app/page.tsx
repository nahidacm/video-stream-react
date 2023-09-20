import React from 'react';
import Image from 'next/image'
import VideoJsPlayer from './components/VideoJsPlayer'

export default function Home() {


  return (
    <main className="">
      <div className='video-player'>
      <VideoJsPlayer />
      </div>
    </main>
  )
}
