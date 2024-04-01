
const loadCards = (setCards) => {
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'

    fetch(API, {method: 'GET'})
            .then(response => response.json())
            .then(result => {
                let promises = []
                result.results.forEach(d => {
                    promises.push(fetch(d.url).then(res => res.json()).then(cc => cc))
                })

                Promise.all(promises).then((values) => {
                    setCards(values);
                });
            })
}

export default loadCards

