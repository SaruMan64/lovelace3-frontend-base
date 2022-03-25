// const $ = require("jquery")(window);
const url = "https://rickandmortyapi.com/api";

async function getCharacterById(num) {
    let res = await fetch(`${url}/character/${num}`);
    let obj = await res.json();
    let name = obj.name;

    $("#result").html(`
    <div id="searched-name">Personagem: ${name}</div>
    `);
    console.log(name);

    res = await fetch(`${url}/character/?name=${name}`);
    obj = await res.json();
    console.log(obj.results);
    let content = obj.results.map((el) => {
        return `<div class="content">
                <img src="${el.image}"/>
                <a class="image-link" href="${el.image}">
                    Image link: ${el.image}
                </a>
                <div class="infos">
                    <div class="id">
                       id: ${el.id}
                    </div>
                    <div class="name">
                        name: ${el.name}
                    </div>
                </div>     
            </div>`;
    });
    $("#result").append(content);
}

$(document).on('click', "#get-character-id", function () {
    let num = $("#character-id").val();
    console.log(num);
    getCharacterById(num);
});