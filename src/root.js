import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import PostPage from './components/PostPage/PostPage'

const Root =({store})=>(
<Router store={store}>
<Route path="/" exact render={(match)=>{return (<HomePage store={store} match={match} />)}} />
<Route path="/detail/:id" exact render={(match)=>{return (<PostPage store={store} match={match}/>)}} />

</Router>)

export default Root