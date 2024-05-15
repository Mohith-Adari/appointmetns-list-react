// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date} = appointmentDetails
  return (
    <li className="list-style">
      <h1>{title}</h1>
      <p>Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
