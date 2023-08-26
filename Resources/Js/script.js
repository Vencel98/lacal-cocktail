let button = document.getElementById('btn');
let title = document.getElementById('title');
let search = document.getElementById('search');



let cocktail = {
    name : 'Negroni',
    ingredients : ['30ml Larios', '30ml Antica Formula', '30ml Campari'],
    glass : 'Clear double rock glass',
    ice : 'Clear ice block',
    method : 'Stir',
    garnish : 'Orange peel'
}

let test = () => {
    if (search.value === "Negroni") {
        document.getElementById('hidden').style.display = 'block';
        document.getElementById('name').innerHTML = cocktail.name;
        document.getElementById('ing1').innerHTML = cocktail.ingredients[0];
        document.getElementById('ing2').innerHTML = cocktail.ingredients[1];
        document.getElementById('ing3').innerHTML = cocktail.ingredients[2];
        document.getElementById('ing4').remove();
        document.getElementById('ing5').remove();
        document.getElementById('ing6').remove();


        document.getElementById('glass').innerHTML = cocktail.glass;
        document.getElementById('method').innerHTML = cocktail.method;
        document.getElementById('ice').innerHTML = cocktail.ice;
        document.getElementById('garnish').innerHTML = cocktail.garnish;
    
    } else {
        document.getElementById('hidden').style.display = 'block';
    }
}

button.addEventListener('click', test);
