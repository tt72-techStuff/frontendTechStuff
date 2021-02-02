import React, { Component } from 'react';

import { axiosAuth } from '../utils/axiosAuth';

export class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axiosAuth()
      .post('/api/posts', {
        name: this.state.name,
        description: this.state.description,
      })
      .then(res => {
        console.log('Posts', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return <div>{/* todo */}</div>;
  }
}

export default CreateItem;
