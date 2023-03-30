import React from 'react'
export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.countryName}</strong>
    <select
      className="form-control"
      name="{props.countryName}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.countryName}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.countryName}
        </option>
      ))}
    </select>
  </div>
)
export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8081/api/study/countries')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-0" width="60px">
        Study Countries
        <CustomDropdown
          name={this.state.countryName}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}