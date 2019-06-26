const getTableData = async () => {
  let data = []
  const users = await getUsers()
  const posts = await groupPostsByUser()
  const albums = await groupAlbumsAndPhotos()
  const days = await getDays()
  const rideInGroup = await getRideInGroup()

  users.map(item => {
    let obj = Object.assign(
      item,
      { posts: posts[item.id - 1] },
      { albums: albums[item.id - 1] },
      days[item.id - 1],
      rideInGroup[item.id - 1]
    )
    return data.push(obj)
  })
  return data
}

const getUsers = async () => {
  let userReq = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
  })
  let userRes = await userReq.json()
  return userRes
}

const getPosts = async () => {
  let postReq = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  })
  let postRes = await postReq.json()
  return postRes
}

const getAlbums = async () => {
  let albumReq = await fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET'
  })
  let albumRes = await albumReq.json()
  return albumRes
}

const getPhotos = async () => {
  let photoReq = await fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET'
  })
  let photoRes = await photoReq.json()
  return photoRes
}

const getDays = () => {
  const mockDays = JSON.stringify([
    {
      days: 'Fri, Sat, Sun'
    },
    {
      days: 'Tue, Thu, Sat'
    },
    {
      days: 'Mon, Wed, Fri'
    },
    {
      days: 'Mon, Tue, Wed'
    },
    {
      days: 'Weekend'
    },
    {
      days: 'Weekend'
    },
    {
      days: 'Wed, Thu, Fri'
    },
    {
      days: 'Week days'
    },
    {
      days: 'Tue, Thu, Sat'
    },
    {
      days: 'Every day'
    }
  ])
  return JSON.parse(mockDays)
}

const getRideInGroup = () => {
  const mockRides = JSON.stringify([
    {
      ride: 'Never'
    },
    {
      ride: 'Sometimes'
    },
    {
      ride: 'Always'
    },
    {
      ride: 'Never'
    },
    {
      ride: 'Never'
    },
    {
      ride: 'Never'
    },
    {
      ride: 'Sometimes'
    },
    {
      ride: 'Sometimes'
    },
    {
      ride: 'Sometimes'
    },
    {
      ride: 'Always'
    }
  ])
  return JSON.parse(mockRides)
}

const groupPostsByUser = async () => {
  const postRes = await getPosts()
  const posts = await postRes.reduce((prev, curr) => {
    prev[curr.userId - 1] = prev[curr.userId - 1] || []
    prev[curr.userId - 1].push(curr)
    return prev
  }, [])
  return posts
}

const groupAlbumsAndPhotos = async () => {
  const albumsRes = await getAlbums()
  const photosRes = await getPhotos()

  const groupAlbumsByUser = await albumsRes.reduce((prev, curr) => {
    prev[curr.userId - 1] = prev[curr.userId - 1] || []
    prev[curr.userId - 1].push(curr)
    return prev
  }, [])

  const groupPhotosByAlbum = await photosRes.reduce((prev, curr) => {
    prev[curr.albumId - 1] = prev[curr.albumId - 1] || []
    prev[curr.albumId - 1].push(curr)
    return prev
  }, [])

  let userAlbum = []

  await groupAlbumsByUser.map(albums => {
    let _albumTEMP = []
    let photoQuantity = 0

    albums.map(album => {
      let obj = Object.assign(album, {
        photos: groupPhotosByAlbum[album.id - 1]
      })
      photoQuantity += groupPhotosByAlbum[album.id - 1].length
      return _albumTEMP.push(obj)
    })

    let _userAlbumTEMP = Object.assign(_albumTEMP, {
      numberOfPhotos: photoQuantity
    })
    return userAlbum.push(_userAlbumTEMP)
  })

  return userAlbum
}

const handleSearch = async query => {
  const data = await getTableData()

  const filtered = await data.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.username.toLowerCase().includes(query.toLowerCase())
    )
  })
  return filtered
}

const handleDelete = async (id, data) => {
  return await data.filter(item => item.id !== id)
}

const validateForm = async () => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const emptyRegex = /^$/

  const _rideInputs = [...document.querySelectorAll('input[name=ride]')]
  const _daysInputs = [...document.querySelectorAll('input[name=days]')]
  const _usernameField = document.getElementById('Username')
  const _nameField = document.getElementById('Name')
  const _emailField = document.getElementById('Email')

  const _ride = await _rideInputs.some(item => item.checked)
  const _days = await _daysInputs.some(item => item.checked)

  const _username = await !emptyRegex.test(_usernameField.value)
  const _name = await !emptyRegex.test(_nameField.value)
  const _email = await emailRegex.test(_emailField.value)

  if (_ride && _days && _username && _name && _email) {
    return true
  } else {
    _usernameField.setCustomValidity(_username ? '' : 'invalid')
    _nameField.setCustomValidity(_name ? '' : 'invalid')
    _emailField.setCustomValidity(_email ? '' : 'invalid')
    if (!_ride) {
      _rideInputs.map(item => item.setCustomValidity('invalid'))
    }
    if (!_days) {
      _daysInputs.map(item => item.setCustomValidity('invalid'))
    }

    return false
  }
}

const clearForm = () => {
  const form = [...document.querySelectorAll('div.form > div > div input')]

  form.map(item => {
    if (item.getAttribute.type === 'checkbox' || 'radio') {
      item.checked = false
      item.setCustomValidity('')
    }
    if (item.getAttribute.type === 'text' || 'email') {
      item.value = ''
      item.setCustomValidity('')
    }
  })
}

const resetInput = element => {
  /**
   Reset Input
   @param {DOMElement} element DOM element to reset validity
   */

  const type = element.getAttribute('type')
  if (type === 'checkbox' || 'radio') {
    console.log(' text')

    const inputName = element.getAttribute('name')
    ;[...document.querySelectorAll(`input[name=${inputName}]`)].map(item =>
      item.setCustomValidity('')
    )
  }
  if (type === 'text' || 'email') {
    console.log(' text')
    if (!element.validity.valid) {
      element.value = ''
    }
    element.setCustomValidity('')
  }
}

const createPayload = async () => {
  let ride = await [...document.querySelectorAll('input[name=ride]')].filter(
    item => item.checked
  )

  if (ride.length > 0) {
    ride = ride[0].value
  } else {
    ride = ''
  }

  let days = await [...document.querySelectorAll('input[name=days]')]
    .filter(item => item.checked)
    .reduce((prev, curr) => {
      prev = prev || []
      prev.push(curr.value)
      return prev
    }, [])
    .join()

  if (days.includes('Mon,Tue,Wed,Thu,Fri,Sat,Sun')) {
    days = 'Every day'
  } else if (days.includes('Mon,Tue,Wed,Thu,Fri')) {
    days = 'Week days'
  } else if (days.includes('Sat,Sun')) {
    days = 'Weekend'
  }

  const username = document.getElementById('Username').value
  const name = document.getElementById('Name').value
  const email = document.getElementById('Email').value
  const city = document.getElementById('City').value

  let newUser = await {
    id: Date.now()
      .toString()
      .slice(10),
    name: name,
    username: username,
    email: email,
    address: { city: city },
    posts: [],
    albums: await Object.assign([], {
      numberOfPhotos: 0
    }),
    days: await days,
    ride: await ride
  }

  return newUser
}

export {
  getTableData,
  handleSearch,
  handleDelete,
  createPayload,
  validateForm,
  resetInput,
  clearForm
}
