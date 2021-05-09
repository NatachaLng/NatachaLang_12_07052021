
const fetchData =  async (id, option) => {
    let url = option ? `http://localhost:3001/user/${id}/${option}` : `http://localhost:3001/user/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data.data
}

export default fetchData