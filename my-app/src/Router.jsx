import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Animation from './Animation'
import Banner from './Banner'
function Router() {
  return (
    <div>
        
<BrowserRouter>
<Routes>
<Route path="/" element={<><Animation/><Banner/></>}> </Route>
</Routes>
</BrowserRouter>  
    </div>
  )
}

export default Router
