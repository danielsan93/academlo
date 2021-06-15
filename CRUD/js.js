let cars = [
    {
      name: "Mazda 2",
      model: "2019",
      doors: 5,
      color: "red",
      brand: "mazda"
    },
    {
        name: "Toyota",
        model: "2019",
        doors: 5,
        color: "red",
        brand: "mazda"
      }
  ]
  //DOM
let containerCards = document.getElementById("containerCards");
let form = document.getElementById("form");

const printData = () => {
    cars.forEach((element,index) => {
        //INNER HTML
    //     let div = document.createElement("div");
    //     containerCards.appendChild(div);
    //     div.innerHTML =`<div class="cards">
    //     <div class="cards-text">
    //         <h3 class="cards-item">${element.name}</h3>
    //         <h3 class="cards-item">2020</h3>
    //         <h3 class="cards-item">2</h3>
    //         <h3 class="cards-item">rosa</h3>
    //         <h3 class="cards-item">Donofrio</h3>
    //     </div>
    //     <div class="cards-button">
    //         <button>Editar</button>
    //         <button>Borrar</button>
    //     </div>
    // </div>`

        let cards = document.createElement("div");
        cards.setAttribute("class","cards");
        containerCards.appendChild(cards);

        let cardText = document.createElement("div");
        cardText.setAttribute("class","cards-text");
        cards.appendChild(cardText);

        let name = document.createElement("h3");
        name.setAttribute("class","cards-item");
        cardText.appendChild(name);
        
        let modelo = document.createElement("h3");
        modelo.setAttribute("class","cards-item");
        cardText.appendChild(modelo);

        let puertas = document.createElement("h3");
        puertas.setAttribute("class","cards-item");
        cardText.appendChild(puertas);

        let color = document.createElement("h3");
        color.setAttribute("class","cards-item");
        cardText.appendChild(color);

        let marca = document.createElement("h3");
        marca.setAttribute("class","cards-item");
        cardText.appendChild(marca);
        
        name.innerText = element.name;
        modelo.innerText = element.model;
        puertas.innerText = element.doors;
        color.innerText = element.color;
        marca.innerText = element.brand;

    });
}

printData();