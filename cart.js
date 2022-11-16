let basket = (window.localStorage.getItem("elem"))? JSON.parse(window.localStorage.getItem("elem")) : [];

console.log(basket);

basket.forEach(element => {
    if (element) {
        let div = document.createElement('div');
        div.classList.add('elem');
        div.innerHTML = `
            <img src="${element.source}" alt="" class="elem-image">
            <div class="elem-info">
                <h3 class="elem-head">${element.name}</h3>
                <p class="elem-description">${element.description}</p>
                <button class="counter" id="plus">+</button>
                <span class="elem-num">${element.count}</span>
                <button class="counter" id="minus">-</button>
            </div>
        `;
        document.querySelector('.elems').append(div);
    }
});
