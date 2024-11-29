import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Für ein besseres Erlebnis herunterladen Sie <br/> KEBABHAUS App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play-store-img" />
        <img src={assets.app_store} alt="app-store-img" />
      </div>
    </div>
  )
}

export default AppDownload
