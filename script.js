async function getMenu() {
    try {
        const menuItems = [
            {
              "id": 1,
              "name": "Cheeseburger",
              "price": 5.99,
              "imgSrc": "https://unsplash.com/photos/double-patty-cheeseburger-jh5XyK4Rr3Y"
            },
            {
              "id": 2,
              "name": "Pizza",
              "price": 8.99,
              "imgSrc": "https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM"
            },
            {
              "id": 3,
              "name": "Tacos",
              "price": 3.99,
              "imgSrc": "https://unsplash.com/photos/two-tortillas-with-vegetables-and-sauce-on-a-table-VMrIQ9hDaZk"
            },
            {
              "id": 4,
              "name": "Sushi",
              "price": 11.99,
              "imgSrc": "https://unsplash.com/photos/sushi-on-black-ceramic-plate-iOHJKJqO6E0"
            },
            {
              "id": 5,
              "name": "Pasta",
              "price": 9.99,
              "imgSrc": "https://unsplash.com/photos/closeup-photo-of-spaghetti-pasta-with-a-tomato-meat-sauce-shot-with-selective-focus-Gi4njnD6isM"
            },
            {
              "id": 6,
              "name": "Fried Chicken",
              "price": 7.99,
              "imgSrc": "https://unsplash.com/photos/food-lot-on-a-green-leaf-plate-nwmZhwOSVnM"
            },
            {
              "id": 7,
              "name": "Grilled Cheese Sandwich",
              "price": 4.99,
              "imgSrc": "https://unsplash.com/photos/bread-with-cheese-fillings-on-white-ceramic-plate-ZB8NK8cB4EE"
            },
            {
              "id": 8,
              "name": "Steak",
              "price": 15.99,
              "imgSrc": "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM"
            },
            {
              "id": 9,
              "name": "Caesar Salad",
              "price": 6.99,
              "imgSrc": "https://unsplash.com/photos/meat-with-lettuce-on-white-ceramic-plate-63mHpYEyjCA"
            },
            {
              "id": 10,
              "name": "Fish and Chips",
              "price": 8.49,
              "imgSrc": "https://unsplash.com/photos/fried-chicken-with-fries-and-sauce-Pf-bZQpCaMI"
            },
            {
              "id": 11,
              "name": "Ramen",
              "price": 9.49,
              "imgSrc": "https://unsplash.com/photos/a-bowl-of-ramen-with-chopsticks-and-a-glass-of-beer-mE6kjov4rTg"
            },
            {
              "id": 12,
              "name": "Burrito",
              "price": 7.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
            },
            {
              "id": 13,
              "name": "Pho",
              "price": 8.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
            },
            {
              "id": 14,
              "name": "Pad Thai",
              "price": 9.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
            },
            {
              "id": 15,
              "name": "Gyro",
              "price": 6.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
            },
            {
              "id": 16,
              "name": "Ice Cream",
              "price": 3.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
            },
            {
              "id": 17,
              "name": "Smoothie",
              "price": 4.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
            },
            {
              "id": "18",
              "name": "Apple Pie",
              "price": 4.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
            },
            {
              "id": 19,
              "name": "Chocolate Cake",
              "price": 5.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
            },
            {
              "id": 20,
              "name": "Pancakes",
              "price": 4.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
            },
            {
              "id": 21,
              "name": "Cupcake",
              "price": 2.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
            },
            {
              "id": 22,
              "name": "Crepes",
              "price": 5.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
            },
            {
              "id": 23,
              "name": "Club Sandwich",
              "price": 6.99,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
            },
            {
              "id": 24,
              "name": "Falafel",
              "price": 5.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
            },
            {
              "id": 25,
              "name": "Curry",
              "price": 9.49,
              "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
            }
          ];

        const menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = "<h2>Menu</h2>";
        menuItems.forEach(item => {
            menuDiv.innerHTML += `
                <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; text-align: center;">
                    <img src="${item.imgSrc}" alt="${item.name}" style="width: 200px; height: 150px; object-fit: cover;">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

// Function to simulate taking an order
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomItems = (arr, num) => {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, num);
            };

            const selectedItems = randomItems([
                'Cheeseburger',
                'Pizza',
                'Tacos',
                'Sushi',
                'Pasta',
                'Fried Chicken',
                'Grilled Cheese Sandwich',
                'Steak',
                'Caesar Salad',
                'Fish and Chips',
                'Ramen',
                'Burrito',
                'Pho',
                'Pad Thai',
                'Gyro',
                'Ice Cream',
                'Smoothie',
                'Apple Pie',
                'Chocolate Cake',
                'Pancakes',
                'Cupcake',
                'Crepes',
                'Club Sandwich',
                'Falafel',
                'Curry'
            ], 3);

            const order = {
                items: selectedItems
            };

            resolve(order);
        }, 2500);
    });
}

// Function to simulate order preparation
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function to simulate payment process
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function to show a thank you message
function thankyouFnc() {
    alert("Thank you for eating with us today!");
}

// Function to handle the order process
async function startOrderProcess() {
    const order = await takeOrder();
    console.log("Order taken:", order);

    const orderStatus = await orderPrep();
    console.log("Order prepared:", orderStatus);

    const paymentStatus = await payOrder();
    console.log("Payment status:", paymentStatus);

    if (paymentStatus.paid) {
        thankyouFnc();
    }
}

// Event listener for the order button
document.getElementById('orderBtn').addEventListener('click', startOrderProcess);

// Load the menu when the page loads
window.onload = getMenu;