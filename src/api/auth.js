// save a user to mongodb
export const saveUser = userInfo => {

    fetch('http://localhost:5000/users', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// get user roll
export const getRole = async email => {
    const response = await fetch(`http://localhost:5000/users/${email}`)
    const user = await response.json()
    return user?.role;
}