import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const contentTarget = document.querySelector("main")
    let HTMLString;
    MenuManger.getFoods()
    .then (unsortedArray => {
        unsortedArray.sort(function(x, y) 
            {var firstNumber = new Date(x.menuId),
                SecondNumber = new Date(y.menuId);
                if (firstNumber < SecondNumber) return -1;
                if (firstNumber > SecondNumber) return 1;   return 0; });
                return(unsortedArray);
    })
    .then(foodArray => {
        HTMLString = `<div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
    
}