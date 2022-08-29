const TOKEN = "92c841556ba4d130c4b9573355c82479c31b5b82"

class API{

  static loginUser(body) {
    return (fetch(`http://127.0.0.1:8000/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( body )
    }).then( resp => resp.json())
    )
  }

  static getSets() {
      return (
          fetch("http://127.0.0.1:8000/api/sets/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`
          }
        })
        .then(resp => resp.json())
      )
    }



}

export default API;