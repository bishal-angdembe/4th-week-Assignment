function showSidebar() {
    const sidebar = document.querySelector('.hamburgur_list')
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex"
    }
    else {
        sidebar.style.display = "none"
    }
}

const hoodie_cloths_container=document.querySelector('.hoodie_cloths_container');
const cards =[{
    imgUrl:"images/blog-lg1.jpg",
    itemName:"Grey Hoodie",
    star:`<i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>`,
    rating:"5.0",
    price: "$18.00",    
},
{
    imgUrl:"images/item2.jpg",
    itemName:"Blue Jeans",
    star:`<i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>`,
    rating:"4.0",
    price: "$17.00",
},
{
    imgUrl:"images/item3.jpg",
    itemName:"Pink Vest",
    star:`<i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>`,
    rating:"3.0",
    price: "$15.00",
},
{
    imgUrl:"images/item4.jpg",
    itemName:"Black Coat",
    star:`<i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                             <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>`,
    rating:"5.0",
    price: "$20.00",
}
];
const transformedData =cards.map(function(data){
    return `<div class="grey_hoodie card_container">
                    <div class="hoodie_img_card img_card">
                        <img src="${data.imgUrl}" alt="dog_wearing_cloth">
                    </div>
                    <div class="hoodie_text_section text_section">
                        <div class="hoodie_txt txt">${data.itemName}</div>
                        <div class="hoodie_rating rating">
                            ${data.star}
                            ${data.rating}
                        </div>
                        <div class="price">${data.price}</div>
                    </div>
                    <div class="card_love_btn_wrapper">
                        <div class="cart_btn">ADD TO CART</div>
                        <div class="love_react_btn">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>`
});
hoodie_cloths_container.innerHTML=transformedData.join(" ");