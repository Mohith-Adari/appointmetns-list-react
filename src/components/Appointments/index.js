// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: v4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {title, date, appointmentsList} = this.state
    console.log(date)
    const nd = date.split('-')
    const year = Number(nd[0])
    const day = Number(nd[2])
    const month = Number(nd[1])
    console.log(year, day, month)

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="input-container">
            <form className="form-control" onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title" className="label-element">
                TITLE
              </label>
              <input
                type="text"
                placeholder="title"
                id="title"
                className="input-type"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date" className="label-element">
                DATE
              </label>
              <input
                type="date"
                id="date"
                className="input-type"
                value={date}
                onChange={this.onChangeDate}
              />
              <button className="btn-style" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img-style"
            />
          </div>

          <hr className="break-line" />
          <div className="appointments-container">
            <h2>Appointments</h2>
            <button type="button" data-testid="star" className="star-btn">
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {appointmentsList.map(each => (
              <AppointmentItem key={each.id} appointmentDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
