import React from 'react'
import './home.css'
import TimeHome from '../../components/home/timeHome'
import WeatherHome from '../../components/home/weatherHome'
import Spinner from '../spinner/Spinner'

function Home() {
  return (
    <div className="page page-home" style={{ display: 'block' }}>
      <div className="bg"></div>
      <div className="overlay"></div>
      <div className="panel panel-time">
        <TimeHome />
      </div>
      <WeatherHome />
      <div className="panel panel-calendar">
        <ul>
          <li>
            <div className="time">8:00 - 9:00</div>
            <div className="title">Shopping</div>
          </li>
          <li>
            <div className="time">10:00 - 12:00</div>
            <div className="title">Meet Tom</div>
          </li>
          <li>
            <div className="time">18:00 - 20:00</div>
            <div className="title">Go to cinema</div>
          </li>
        </ul>
      </div>
      <div className="panel panel-tasks">
        <ul>
          <li className="checked">
            <div className="check"></div>
            <div className="title">Milk</div>
          </li>
          <li>
            <div className="check"></div>
            <div className="title">Bread & cheese</div>
          </li>
          <li>
            <div className="check"></div>
            <div className="title">Beer & wine</div>
          </li>
          <li className="other">
            <div className="plus"></div>
            <div className="title">... and 15 other tasks</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
