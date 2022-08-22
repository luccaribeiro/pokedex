function procuraPoke(){
    let nome = document.getElementById("nome-poke").value
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        document.getElementById("demo").innerHTML = `Nome: ${data['name']}`
        let img = data['sprites']['front_default']
        document.getElementById("pic").setAttribute('src', img)
    })
}