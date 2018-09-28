import React, { Component } from 'react';
import Header from './header'
import Screen from './screen'
import Buttons from './buttons'

import { extractTimeParts } from '../helpers/timers'

class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isRunning: false,
            start: 0,
            current: 0
        }

        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

    handleStart() {
        if(this.state.isRunning) {
            //no hacer nada
            return
        } else {
            // ejecutar cronometro
            this.setState({
                isRunning: true,
                start: Date.now(),
                current: Date.now()
            })

            this._interval = setInterval(() => {
                this.setState({
                    current: Date.now()
                })
            }, 100)
        }
    }

    handleStop() {
        if(this.state.isRunning) {
            // detener cronometro
            clearInterval(this._interval)
            this.setState({
                isRunning: false
            })
        } else {
            // poner a cero cronometro
            this.setState({
                start: 0,
                current: 0
            })
        }
    }

    render() {
        const { start, current } = this.state,
        {
            hours,
            minutes,
            seconds,
            milliseconds
        } = extractTimeParts(current - start)
        return (
            <div className="crono">
                <Header />
                <Screen
                    hours = {hours}
                    minutes = {minutes}
                    seconds = {seconds}
                    milliseconds = {milliseconds}
                />
                <Buttons
                    onStart = {this.handleStart}
                    onStop = {this.handleStop}
                />
            </div>
        )
    }

}

export default App