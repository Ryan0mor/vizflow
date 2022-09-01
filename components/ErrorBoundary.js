import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
    	hasError: true
    })
  }
  render() {
    if (this.state.hasError) {
      return <div className='flex flex-col justify-center h-full text-center'>
        <h2 className='header05'>There was an ERROR loading the 3D component</h2>
        <p className='paragraph'>Please reload the page</p>
      </div>
    }
    return this.props.children;
  }
}