// PRODUCTS

let books = [
  {
    id: 1,
    title: 'i Phone',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_1.jpg',
    categories: 'electronics',
    price: 199
  },
  {
    id: 2,
    title: 'Galaxy',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_2.jpg',
    categories: 'science',
    price: 229
  },
  {
    id: 3,
    title: 'Astronaut',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_3.jpg',
    categories: 'science',
    price: 109
  },
  {
    id: 4,
    title: 'Tulip',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_4.jpg',
    categories: 'flower',
    price: 390
  },
  {
    id: 5,
    title: 'Orange Flowers',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_5.jpg',
    categories: 'flower',
    price: 490
  },
  {
    id: 6,
    title: 'Abstract',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_6.jpg',
    categories: 'Flower',
    price: 245
  },
  {
    id: 7,
    title: 'Rubber Toys',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_12.jpg',
    categories: 'Toys',
    price: 235
  },
  {
    id: 8,
    title: 'Rubber Toys',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_7.jpg',
    categories: 'Unknown',
    price: 539
  },
  {
    id: 9,
    title: 'Ladies Coupe',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_8.jpg',
    categories: 'Birds',
    price: 129
  },
  {
    id: 10,
    title: 'Ladies Coupe',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_9.jpg',
    categories: 'Decoration',
    price: 099
  },
  {
    id: 11,
    title: 'Ladies Coupe',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_10.jpg',
    categories: 'Toys',
    price: 290
  },
  {
    id: 12,
    title: 'Ladies Coupe',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_11.jpg',
    categories: 'Toys',
    price: 119
  }
];


books.forEach(function(items){

  let productshow = `<div class="col-lg-3 col-md-4 mb-4">
                    <div class="card">
                        <div class="bg-img">
                          <img class="card-img-top w-100" style="height: auto;" src="${items.image}">              
                        </div>
                      <div class="card-body bg-light">
                            <h4 class="font-weight-bold text-center text-info py-2">${items.title}</h4>
                        <hr>
                        <h5 class="text-secondary"> Categories: ${items.categories}</h5>
                        <p class="dark-grey-text mt-4">
                           ${items.desc}
                        </p>
                        <p class="dark-grey-text mt-4">
                           Price: ${items.price}
                        </p>
                        <button id="${items.id}" type="button" class="btn btn-sm btn-outline-primary buybtn ml-0 px-5" style="position: relative; display: inline;">BUY</button>
                      </div>
                    </div>
                  </div>`;
  
  $('#showproducts').append(productshow);
});

let cartarray = [];

  // ADD TO CART
function addToCart(buybooks){
      let list = `<div class="d-flex my-3">
                        <button  type="button" class="btn btn-outline-danger btn-sm px-2 crossbtn"><i class="far fa-times-circle"></i></button> 
                        <div class="d-flex justify-content-between">
                          <h5 class="px-3 text-warning">${buybooks.title}</h5>
                          <h5 class="pl-4 text-dark">${buybooks.price} kr</h5>
                        </div>                     
                    </div>`;
                        
      $('#cart').append(list);                 
}

function removeItem(cartarray, deleteitem){
    cartarray.splice(deleteitem, 1);
}


$('#showproducts div .card .card-body .buybtn').on('click', function(e){
  let btnid = $(this).attr('id');
  // console.log(+btnid);
  books.forEach(function(items){
      if(+btnid === items.id){
          addToCart(items);
          cartarray.push(items);
      }
  });
  $('.itemsnum').text(cartarray.length); 
  $('#total-price').text(totalPrice)
});

// TO REMOVE ITEM FROM CARTLSIT
$('#cart').on('click', 'button', function(e){
    $(this).closest('div').remove();
    removeItem(cartarray);
    $('.itemsnum').text(cartarray.length); 
    $('#total-price').text(totalPrice)
});

// TO CALCULATE PRICE
function totalPrice(){
  let total = 0;
     cartarray.forEach(function(book){ 
    total += book.price;   
  })
  return total + ' Kr';
}






// STICKY NAVBAR
window.onscroll = function(){
    stickyNav();
};
let navContainer = document.querySelector("#sticky");
let sticky = navContainer.offsetTop;
function stickyNav() {
    if (window.pageYOffset > sticky) {
        // console.log(pageYOffset);
      navContainer.classList.add("sticky")
    } else {
      navContainer.classList.remove("sticky");
    }
  }




