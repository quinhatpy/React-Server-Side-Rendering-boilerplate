import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export function getHomeData() {
    console.log('getHomeData');
}