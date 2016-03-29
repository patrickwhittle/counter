import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/counter'

const CounterContainer = ({counter, dispatch}) => (
	  <Counter
	    value={counter}
	    onIncrement={() =>
	      	dispatch({
	        type: 'INCREMENT'           
	      })            
	    }
	    onDecrement={() =>
	    		dispatch({
	      	type: 'DECREMENT'           
	      })            
	    }
	  />
);

// transform the current Redux store state into the props
const mapStateToProps = (state) => {
  return {
  	counter: state.counter
  }
}

// return callback props to inject into the presentational component
const mapDispatchToProps = (dispatch) => {
  return {
		dispatch
  }
}	
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
