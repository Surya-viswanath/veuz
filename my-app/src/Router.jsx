import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Animation from './Animation'
import Banner from './Banner'
import Menu from './Menu'
import Card1 from './Cardslider/Card1'
import Card2 from './Cardslider/Card2'
import Card3 from './Cardslider/Card3'
import Banner2 from './Banner2'
import Footer from './Footer'
function Router() {
  return (
    <div>
        
<BrowserRouter>
<Routes>
<Route path="/" element={<><Animation/><Menu/><Banner/><Card1/><Card2/><Card3/><Banner2/><Footer/></>}> </Route>
</Routes>
</BrowserRouter>  
    </div>
  )
}

export default Router
