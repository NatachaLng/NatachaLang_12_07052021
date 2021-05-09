/**
 * retrieves the information of the users of the application via an API using the "fetch" method
 * @date
 * @param {string} id - User id
 * @param {string} option - The optional route of the API request
 * @returns {Promise} - Result of the request
 */
const fetchData =  async (id, option) => {
    let url = option ? `http://localhost:3001/user/${id}/${option}` : `http://localhost:3001/user/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data.data
}

export default fetchData