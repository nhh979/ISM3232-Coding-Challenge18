import {useState} from 'react'
import UploadButton from './UploadButton.js'
import MovieSelector from './MovieSelector.js'

export default function App() {
  return (
    <div className='App'>
      <h1>Interactive Media Toolbar Enhancement</h1>
      <MovieSelector/>
    </div>
  )
}