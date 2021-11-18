import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReddit } from '../redux/actions'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    }
  }
  render() {
    const { redirect } = this.state;
    const { getTopic, post } = this.props;
    return (
      <div>
        <button 
        type='button'
        onClick={ () => {
          getTopic()
          return this.setState({redirect: true})
        }}
        >
          Buscar por Topicos sobre React
        </button>
        {(redirect) && <h1>{post}</h1>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTopic: (state) => dispatch(fetchReddit(state))
})

const mapStateToProps = (state) => ({
  post: state.data
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)