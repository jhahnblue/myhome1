import {BrowserRouter, Routes ,Route} from 'react-router-dom'

import { useState } from 'react'

// 파일경로를 지정해서 가져와주기 import export defaul 이름 from '파일경로'
import Layout from '../page/Layout'
import Home from '../page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* 라우터 전체를 감쌈 */}
      <BrowserRouter>
      {/* 루트는 여러 루트를 묶음 */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
