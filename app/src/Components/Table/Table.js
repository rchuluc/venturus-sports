import React, { PureComponent } from 'react'
import { getTableData, handleSearch } from '../../Utils/Api'
import './Table.scss'

export default class Table extends PureComponent {
  constructor() {
    super()
    this.state = {
      data: [],
      filtered: []
    }
  }

  componentDidMount = async () => {
    const apiData = await getTableData()
    this.setState({
      data: apiData,
      filtered: apiData
    })
  }

  onSearch = async event => {
    if (event.target.value.length > 3) {
      const searchResults = await handleSearch(event.target.value)
      this.setState({ filtered: searchResults })
    } else {
      this.setState({ filtered: this.state.data })
    }
  }

  render() {
    return (
      <div className="table">
        <div className="table-header">
          <h1>Users</h1>
          <span className="separator" />
          <div className="table-header-form">
            <i className="fas fa-search" />
            <input
              onKeyUp={event => this.onSearch(event)}
              placeholder="Filter table content"
            />
          </div>
        </div>
        <div className="table-content">
          <div className="table-content-head">
            <p>Username</p>
            <p>Name</p>
            <p>E-mail</p>
            <p>City</p>
            <p>Ride in group</p>
            <p>Day of the week</p>
            <p>Posts</p>
            <p>Albums</p>
            <p>Photos</p>
          </div>
          <div className="table-content-data">
            {this.state.filtered.map(item => (
              <div>
                <p>{item.username}</p>
                <p>{item.name}</p>
                <a href="#">{item.email}</a>
                <a href="#">{item.address.city}</a>
                <p>Ride in group</p>
                <p>Day of the week</p>
                <a href="#">{item.posts.length}</a>
                <a href="#">{item.albums.length}</a>
                <p>{item.albums.numberOfPhotos}</p>
                <span className="delete-btn">
                  <i className="fas fa-trash" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
