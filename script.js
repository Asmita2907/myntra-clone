
let BagItems=[ ]
output();
function addToBag(itemId){
  BagItems.push(itemId)
  

}
function output(){
let itemContainerElement = document.querySelector(".items-container");

let innerHTML=" "
items.forEach(item=>{
  innerHTML +=`<div class="item-container">
    <img class="item-img" src="${item.item_img}"/>

    <div class="ratings">
      <span style="color: green;">★</span>${item.rating.start} |${item.rating.end}
    </div>

    <div class="company">${item.company}</div>

    <div class="item-name">${item.item_name}</div>

    <div class="price">
      <span class="current-price">Rs${item.current_price}</span>
      <span class="og-price">Rs ${item.og_price}</span>
      <span class="discount">(${item.discount}% OFF)</span>
    </div>

    <button class="btn-to-wish items-center justify-center" onclick="addToBag(${item.id}>
      <span class="heart")">♡</span>
      Wishlist
    </button>
  </div>
`
})


itemContainerElement.innerHTML = innerHTML
}