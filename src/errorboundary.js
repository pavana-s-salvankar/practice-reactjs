import React, { Component } from 'react';
import './Styles/navbar.scss';
class ErrorBoudary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) return <p className='errorMessage'> Not visible</p>;
    else return this.props.children;
  }
}
export default ErrorBoudary;
