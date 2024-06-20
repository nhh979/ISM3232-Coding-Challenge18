//Hoang Nguyen
//U12840485

import {useState} from 'react'
import UploadButton from './UploadButton.js'
import MovieSelector from './MovieSelector.js'
import "./App.css"

export default function App() {
  return (
    <div className='App'>
      <h1>Interactive Media Toolbar Enhancement</h1>
      <MovieSelector/>
      <UploadButton/>
    </div>
  )
}