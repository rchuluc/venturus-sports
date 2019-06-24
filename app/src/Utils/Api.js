const getTableData = async () => {
  let data = []
  const users = await getUsers()
  const posts = await groupPostsByUser()
  const albums = await groupAlbumsAndPhotos()

  users.map(item => {
    let obj = Object.assign(
      item,
      { posts: posts[item.id - 1] },
      { albums: albums[item.id - 1] }
    )
    data.push(obj)
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
  console.log(filtered)
  return filtered
}

export { getTableData, handleSearch }
