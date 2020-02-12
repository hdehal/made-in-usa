import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeLoc = this.onChangeLoc.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            company: '',
            url: '',
            loc: '',
            gender: '',
            tags:''
        }
    }

    onChangeCompanyName(e) {
    this.setState({
        company: e.target.value
    });
    }
    onChangeUrl(e) {
    this.setState({
        url: e.target.value
    });
    }
    onChangeLoc(e) {
      this.setState({
        loc: e.target.value
    });
    }
    onChangeGender(e) {
      this.setState({
        gender: e.target.value
    });
    }
    onChangeTags(e) {
      this.setState({
        tags: e.target.value
    });
    }
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.company}, ${this.state.url}, ${this.state.loc}, ${this.state.gender}, and ${this.state.tags}`)
      this.setState({
        company: '',
        url: '',
        loc: '',
        gender: '',
        tags: ''
    })
    }

    render() {
        return (

        )
    }
}