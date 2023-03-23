import "./App.css";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}/>
            
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pageSize} country="in" catagory="science" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pagesize={this.pageSize} country="in" catagory="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pageSize} country="in" catagory="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pageSize} country="in" catagory="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country="in" catagory="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pageSize} country="in" catagory="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pageSize} country="in" catagory="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technolog" pagesize={this.pageSize} country="in" catagory="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
// M - mongodb
// E - Express (Node.js)
// R - Reactd
// N - Node.js



