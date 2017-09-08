import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { title } = this.props
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}
App.propTypes = {
    title: PropTypes.number.isRequired
}