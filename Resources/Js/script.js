let cocktailName = document.getElementById('name');
let cocktailImage = document.getElementById('image');
let glass = document.getElementById('glass');
let method = document.getElementById('method');
let ice = document.getElementById('ice');
let garnish = document.getElementById('garnish');

let button = document.getElementById('btn');
let title = document.getElementById('title');
let srch = document.getElementById('search');
let ingredientsList = document.getElementById('ingredientsList');

let cocktailsArr = [];
let newIngredients;

// Hides the whole content below the searchbar
document.getElementById('hidden').hidden = true;

const cocktail = (name, ingredients, glass, ice, method, garnish) => {
    return {
        name,
        ingredients,
        glass,
        method,
        ice,
        garnish,
    }
}

const aperolSpritz = cocktail('Aperol Spritz', ['50ml Aperol', '100ml Le Altane Prosecco'], 'Red Wine Glass', 'Ice cubes', 'Build', 'Orange peel');
cocktailsArr.push(aperolSpritz);

const amarettoSour = cocktail('Amaretto Sour', ['2 dash. Angostura Bitters', '15ml Simple Syrup', '25ml Lemon juice', '50ml Amaretto Disaronno', '25ml Egg white'], 'Double rocks glass', 'Ice balls', 'Dry shake / Shake', 'Dehyd. lemon wheel, Cherry');
cocktailsArr.push(amarettoSour);

const caipirinha = cocktail('Caipirinha', ['20ml Demerara simple syrup', '20ml Lime juice', '50ml Velho Barrerio Cachaca'], 'Double rocks glass', 'Ice cubes, top crushed', 'Build', 'Dehyd. lime wheel, Short straw');
cocktailsArr.push(caipirinha);

const cosmopolitan = cocktail('Cosmopolitan', ['5ml Simple Syrup', '15ml Lime juice', '15ml Cranberry juice', '20ml Cointreau', '50ml Roberto Cavalli Vodka'], 'Tall Coupe', 'Shake', 'No ice', 'Orange peel');
cocktailsArr.push(cosmopolitan);

const daiquiri = cocktail('Daiquiri', ['20ml Simple Syrup /Flavour', '30ml Lime juice', '60ml Hava Club 3yo Rum'], 'Short coupe', 'No ice', 'Shake', 'Dehyd. lime wheel');
cocktailsArr.push(daiquiri);

const espressoMartini = cocktail('Espresso Martini', ['Double espresso shot', '10ml Simple Syrup', '20ml Coffee Liqueur', '50ml Vanilla inf. Roberto Cavalli vodka'], 'Short coupe', 'No ice', 'Shake', 'Grated tonka bean');
cocktailsArr.push(espressoMartini);

const ginBasilSmash = cocktail('Gin Basil Smash', ['6-8 Basil leaves', '20ml Simple Syrup', '20ml Lemon juice', '50ml Larios gin'], 'Double rocks glass', 'Ice cubes', 'Shake', 'Basil spring');
cocktailsArr.push(ginBasilSmash);

const ginFizz = cocktail('Gin Fizz', ['20ml Simple Syrup', '20ml Lemon juice', '50ml Larios gin', '25ml Egg white', 'Top Soda water'], 'Highball', 'Ice cubes', 'Shake', 'Lemon peel');
cocktailsArr.push(ginFizz);

const hugo = cocktail('Hugo', ['6-8 Mint leaves', '50ml Elderflower liqueur', '100ml Le Altane prosecco'], 'Red wine glass', 'Ice cubes', 'Shake', 'Mint spring, dehyd. lime wheel');
cocktailsArr.push(hugo);

const longIslandIcedTea = cocktail('Long Island Iced Tea', ['5ml Simple Syrup', '25ml Lemon juice', '10ml Cointreau', '10ml Larios gin', '10ml Havanna Club 3yo', '10ml Sierra Antiguo Plata', 'Top Coca Cola'], 'Highball', 'Ice cubes', 'Shake', 'Dehyd. lemon wheel');
cocktailsArr.push(longIslandIcedTea);

const maiTai = cocktail('Mai Tai', ['10ml Orgeat', '20ml Lime juice', '15ml Cointreau', '45ml Plantation Dark Rum'], 'Double rock glass', 'Ice cubes', 'Shake', 'Mint spring, dehyd. lime wheel');
cocktailsArr.push(maiTai);

const manhattanSweet = cocktail('Manhattan Sweet', ['2 dash. Angostura bitters', '30ml Antica Formula', '60ml Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Cherry');
cocktailsArr.push(manhattanSweet);

const manhattanDry = cocktail('Manhattan Dry', ['2 dash. Angostura bitters', '30ml Martini Extra Dry', '60ml Four Roses bourbon'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel');
cocktailsArr.push(manhattanDry);

const manhattanPerfect = cocktail('Manhattan Perfect', ['2 dash. Angostura bitters', '15ml Martini Extra Dry', '15ml Antica Formula'], 'Tall coupe', 'No ice', 'Stir', 'Orange peel');
cocktailsArr.push(manhattanPerfect);

const margarita = cocktail('Margarita', ['1 brsp Agave Nectar', '/20ml Flavour', '25ml Lime juice', '25ml Cointreau', '50ml Sierra Antiquo Plata'], 'Double rocks glass', 'Ice balls', 'Shake', 'Dehyd. lime wheel');
cocktailsArr.push(margarita);

const martiniDry = cocktail('Martini Dry', ['5ml Martini Extra Dry', '85ml Gin Mare <br>/85ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or 3 olives on the side');
cocktailsArr.push(martiniDry);

const martiniWet = cocktail('Martini Wet', ['30ml Martini Extra Dry', '60ml Gin Mare <br>/60ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', 'Lemon peel or 3 olives on the side');
cocktailsArr.push(martiniWet);

const martiniDirty = cocktail('Martini Dirty', ['Pinch Salt', '15ml Martini Extra Dry', '75ml Gin Mare <br>/75ml Grey Goose vodka'], 'Tall coupe', 'No ice', 'Stir', '3 olives on the side');
cocktailsArr.push(martiniDirty);



const negroni = cocktail('Negroni', ['30ml Larios', '30ml Antica Formula', '30ml Campari'], 'Clear double rock glass', 'Stir', 'Clear ice block', 'Orange peel'); 
cocktailsArr.push(negroni);


let reset = () => {

        cocktailName.style.display = 'none';
        cocktailImage.style.display = 'none';

        // Removes ingredients
        for (i = newIngredients.length-1; i >= 0; i--) {
            newIngredients[i].remove();
        }

        glass.hidden = true;
        method.hidden = true;
        ice.hidden = true;
        garnish.hidden = true;
}

let search = () => {

    for (i = 0; i < cocktailsArr.length; i++) {
        if (srch.value === cocktailsArr[i].name) {
            document.getElementById('hidden').hidden = false; //this is the whole content
    
            cocktailName.style.display = 'block';
            cocktailName.innerHTML = cocktailsArr[i].name;
    
            cocktailImage.style.display = 'block';
    
            for (let ii = 0; ii < cocktailsArr[i].ingredients.length; ii++) {
                let ingredient = document.createElement('li');
                ingredient.innerHTML = cocktailsArr[i].ingredients[ii];
                ingredientsList.appendChild(ingredient);
            }
            
            newIngredients = ingredientsList.children;
    
            glass.innerHTML = cocktailsArr[i].glass;
            method.innerHTML = cocktailsArr[i].method;
            ice.innerHTML = cocktailsArr[i].ice;
            garnish.innerHTML = cocktailsArr[i].garnish;
    
            glass.hidden = false;
            method.hidden = false;
            ice.hidden = false;
            garnish.hidden = false;    
        }
    }
}

/*
let search = () => {
    reset();
    if (srch.value === cocktailsArr[0].name) {

        document.getElementById('hidden').hidden = false; //this is the whole content

        cocktailName.style.display = 'block';
        cocktailName.innerHTML = cocktailsArr[0].name;

        cocktailImage.style.display = 'block';

        for (let i = 0; i < negroni.ingredients.length; i++) {
            let ingredient = document.createElement('li');
            ingredient.innerHTML = negroni.ingredients[i];
            ingredientsList.appendChild(ingredient);
        }
        
        newIngredients = ingredientsList.children;

        glass.innerHTML = negroni.glass;
        method.innerHTML = negroni.method;
        ice.innerHTML = negroni.ice;
        garnish.innerHTML = negroni.garnish;

        glass.hidden = false;
        method.hidden = false;
        ice.hidden = false;
        garnish.hidden = false;

    
    } else 
    if (srch.value === 'reset') {
        reset();
    }
}
*/

button.addEventListener('click', reset);
button.addEventListener('click', search);
