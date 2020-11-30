import React from 'react'

export default class HomeIndexView extends React.Component {
  constructor(props) {
    super(props)

    let defaultTimerValues = {
      seconds: 0,
      minutes: 40,
      hours: 0
    }

    this.state = {
      isRunning: false,
      timerStartDateTime: null,
      countdownTimerIntervalId: null,
      timerDuration: { ...defaultTimerValues },
      timer: { ...defaultTimerValues }
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.runCountdownTimer = this.runCountdownTimer.bind(this)
  }

  runCountdownTimer() {
    let timeDifference = new Date() - this.state.timerStartDateTime
    let seconds = Math.floor(timeDifference / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    seconds %= 60
    minutes %= 60

    let elapsedTime = { ...this.state.timerDuration }
    elapsedTime = {
      seconds: elapsedTime.seconds - seconds,
      minutes: elapsedTime.minutes - minutes,
      hours: elapsedTime.hours - hours
    }

    if (elapsedTime.seconds < 0) {
      elapsedTime.seconds += 60
      elapsedTime.minutes -= 1
    }

    if (elapsedTime.minutes < 0) {
      elapsedTime.minutes += 60
      elapsedTime.hours -= 1
    }

    let timer = this.state.timer
    let timerNeedsUpdate =
      elapsedTime.seconds != timer.seconds ||
      elapsedTime.minutes != timer.minutes ||
      elapsedTime.hours   != timer.hours

    if (timerNeedsUpdate) {
      this.setState({ timer: elapsedTime })
    }

    let timerFinished =
      elapsedTime.seconds === 0 &&
      elapsedTime.minutes === 0 &&
      elapsedTime.hours === 0

    if (timerFinished) {
      document.getElementById('start-pause').textContent = 'Start'
      clearInterval(this.state.countdownTimerIntervalId)
      this.setState({
        isRunning: !this.state.isRunning,
        timerStartDateTime: null,
        countdownTimerIntervalId: null
      })
    }

    return
  }

  handleButtonClick() {
    let isRunning = !this.state.isRunning

    if (isRunning) {
      document.getElementById('start-pause').textContent = 'Pause'
      let countdownTimerIntervalId = setInterval(
        this.runCountdownTimer,
        100
      )
      this.setState({
        isRunning: isRunning,
        timerStartDateTime: new Date(),
        countdownTimerIntervalId: countdownTimerIntervalId
      })
    } else {
      document.getElementById('start-pause').textContent = 'Start'
      clearInterval(this.state.countdownTimerIntervalId)
      this.setState({
        isRunning: isRunning,
        timerStartDateTime: null,
        countdownTimerIntervalId: null
      })
    }
  }

  render() {
    let seconds = this.state.timer.seconds
    let minutes = this.state.timer.minutes
    let hours   = this.state.timer.hours

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    if (hours < 10) {
      hours = `0${hours}`
    }

    let dateTimeAttribute = `PT${hours}H${minutes}M${seconds}S`
    let timeDisplay = `${hours}:${minutes}:${seconds}`

    return (
      <div>
        <time id='timer' dateTime={dateTimeAttribute}>{timeDisplay}</time>
        <button id='start-pause' onClick={this.handleButtonClick}>Start</button>
      </div>
    )
  }
}
