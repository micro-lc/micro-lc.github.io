/*
 * Copyright 2021 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          element={
            <header className='app-header'>
              <img alt='logo' className='app-logo' src={logo} />
              <Link
                className='app-link'
                to='/about'
              >
                <p>{'Go To About Page'}</p>
              </Link>
            </header>
          }
          path='/'
        ></Route>
        <Route
          element={
            <header className='app-header'>
              <div style={{ fontSize: '40px', fontWeight: 700 }}>{'About'}</div>
              <Link
                className='app-link'
                to='/'
              >
                <p>{'Go Home'}</p>
              </Link>
            </header>
          }
          path='/about'
        ></Route>
      </Routes>
    </div>
  )
}

export default App
