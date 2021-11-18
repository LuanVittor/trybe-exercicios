import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReddit } from '../redux/actions'

class Search extends Component {
  render() {
    const { getTopic } = this.props;
    return (
      <div>
        <button 
        type='button'
        onClick={ () => getTopic()}
        >
          Buscar por Topicos sobre React
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTopic: (state) => dispatch(fetchReddit(state))
})

export default connect(null, mapDispatchToProps)(Search)