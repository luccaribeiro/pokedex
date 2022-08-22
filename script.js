
function procuraPoke(){
    let nome = document.getElementById("nome-poke").value
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("result-name").innerHTML = `Nome: ${data['name']}`
        let imgFront = data['sprites']['front_default']
        let imgBack = data['sprites']['back_default']
        document.getElementById("pic-front").setAttribute('src', imgFront)
        document.getElementById("pic-back").setAttribute('src', imgBack)
        console.log(data)
    },
    (error) => {
        console.log("POKEMON NÃO ENCONTRADO")
    }
)
}
