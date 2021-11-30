import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReddit } from '../redux/actions'

class Search extends Component {
  render() {
    const { getTopic, topics, isLoading } = this.props;
    return (
      <div>
        <button 
        type='button'
        onClick={ () => {
          getTopic()
        }}
        >
          Buscar por Topicos sobre React
        </button>
        {(isLoading) && topics.map((elem) => <p>{elem}</p>)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTopic: (state) => dispatch(fetchReddit(state))
})

const mapStateToProps = (state) => ({
  topics: state.reducer.topics,
  isLoading: state.reducer.isLoading
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)