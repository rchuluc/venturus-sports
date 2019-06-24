import React, { PureComponent } from 'react'
import { getTableData, handleSearch, handleDelete } from '../../Utils/scripts'
import Modal from '../Modal/Modal'
import './Table.scss'

export default class Table extends PureComponent {
  constructor() {
    super()

    this.state = {
      data: [],
      filtered: [],
      showModal: false,
      itemId: ''
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

  delete = async id => {
    const newData = await handleDelete(id, this.state.filtered)
    this.setState({
      filtered: newData,
      data: newData,
      showModal: false,
      itemId: ''
    })
  }

  showModal = id => {
    this.setState({ showModal: true, itemId: id })
  }

  closeModal = () => {
    this.setState({ showModal: false, itemId: '' })
  }

  render() {
    console.log(this.state.filtered)
    return (
      <React.Fragment>
        {this.state.showModal ? (
          <Modal
            primaryAction={() => this.delete(this.state.itemId)}
            secondaryAction={() => this.closeModal()}
          />
        ) : null}
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
                <div key={item.id}>
                  <p>{item.username}</p>
                  <p>{item.name}</p>
                  <a href="#">{item.email}</a>
                  <a href="#">{item.address.city}</a>
                  <p>{item.ride}</p>
                  <p>{item.days}</p>
                  <a href="#">{item.posts.length}</a>
                  <a href="#">{item.albums.length}</a>
                  <p>{item.albums.numberOfPhotos}</p>
                  <span
                    className="delete-btn"
                    onMouseUp={
                      () => this.showModal(item.id) /*this.delete(item.id)*/
                    }>
                    <i className="fas fa-trash" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
