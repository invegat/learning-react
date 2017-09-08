import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Summary extends Component {
    static propTypes = {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error("A title must be a string") :
                (props[propName].length > 20) ?
                    new Error(`title is over 20 characters`) :
                    null
    }
    static defaultProps = {
        ingredients: 0,
        steps: 0,
        title: "[recipe]"
    }

    constructor(props) {
        super(props)
    }
    render() {
        const {title, ingredients, steps} = this.props
        return (
            <div className='summary'>
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients |</span>
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

