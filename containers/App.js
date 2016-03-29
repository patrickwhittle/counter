import React from 'react'
import { connect } from 'react-redux'
import CounterContainer from './counter-container'

// transform the current Redux store state into the props
const mapStateToProps = (state) => {
  return {
  	state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		dispatch
  }
}

const App = (props) => (
  	<div><CounterContainer /></div>
)

export default connect(mapStateToProps, mapDispatchToProps)(App)

