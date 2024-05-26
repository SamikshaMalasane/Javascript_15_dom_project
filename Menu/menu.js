const menu = [
    {
        id: 1,
        title: "Fluffy Pancake",
        category: "Breakfast",
        price: 15.99,
        img: "menu1.jpg",
        desc: `Fluffy pancakes are a type of breakfast food known for
        their light, airy texture and soft, tender crumb. They are typically
        thicker than regular pancakes and rise significantly during cooking, 
        thanks to the incorporation of a leavening agent like baking powder.`,

    },
    {
        id: 2,
        title: "Berry Yogurt Smoothie",
        category: "Shakes",
        price: 10.39,
        img: "menu2.jpg",
        desc: `Looking for a quick and healthy drink? Try making berry yogurt smoothies.
        Easy to the tummy and packed with health benefits, this smoothie features a blend 
        of vibrant, antioxidant-rich berries, such as strawberries, blueberries, and raspberries.`,
    },
    {
        id: 3,
        title: "Fruit Salad",
        category: "Breakfast",
        price: 12.55,
        img: "menu3.jpg",
        desc:`The fruits give you nutrition that other flour-based desserts usually can’t. You can also go 
        beyond the typical tropical fruits and add coconut and apples. Oh, and don’t forget to sprinkle little 
        cheese cubes on top!`,
    },
    {
        id: 4,
        title: "Pav Bhaji",
        category: "Breakfast",
        price: 12.55,
        img: "menu4.webp",
        desc:`Pav Bhaji is a fast food dish from Mumbai (Bombay), India, consisting of a vegetable curry (bhaji) 
        cooked in tomato gravy and served with a soft bread roll (pav).`,
    },
    {
        id: 5,
        title: "Instant Pot Beef Curry",
        category: "Lunch",
        price: 20.15,
        img: "menu6.jpeg",
        desc:`You wouldn't believe this hearty, filling lunch bowl requires just 15 minutes of prep time and you'll 
        do a double take when you hear it requires just five ingredients total.`,
    },
    {
        id: 6,
        title: "Tomato Panzanella",
        category: "Lunch",
        price: 25.15,
        img: "menu7.jpg",
        desc:`Perfectly ripe tomatoes, hearty Italian bread, and a tangy vinaigrette make this easy panzanella salad! 
        Drying and toasting the bread with a little olive oil in the oven gives you the best texture. Check out more tips 
        on how to make this delicious summer salad recipe`,
    },
    {
        id: 7,
        title: "Authentic Indian",
        category: "Lunch",
        price: 30.25,
        img: "menu8.jpg",
        desc:`delicious and satisfying Indian lunch, you might consider options like Chicken Biryani, Vegetable Biryani, 
        Butter Chicken, Paneer Tikka Masala, or Chana Masala. Pair it with naan or rice for a complete and flavorful meal.`,
    },
    {
        id: 8,
        title: "Mango Milkshake",
        category: "Shakes",
        price: 12.65,
        img: "menu9.jpg",
        desc:`Mango Milkshake made with fresh ripe mangoes is absolutely the perfect summer drink! It's refreshing, drink and 
        dessert rolled into one! It not only fills your hungry tummy, but also soothes you satisfies your tooth & cools you 
        down on a hot summer day`,
    },
    {
        id: 9,
        title: "Freak Shake",
        category: "Shakes",
        price: 10.65,
        img: "menu10.webp",
        desc:`Freak Shake is an over the top milkshake that's surely shareable with your friends and family, but is often first 
        shared on social media thanks to its mouthwatering appearance.`,

    },
    {
        id: 10,
        title: "Oreo Protein Shake",
        category: "Shakes",
        price: 15.65,
        img: "menu11.jpg",
        desc:`An Oreo shake is a delicious and indulgent milkshake made with Oreo cookies, ice cream, and milk. It's a popular 
        treat for both kids and adults, known for its creamy texture and rich, chocolatey flavor.`,
    },
    {
    
        id: 11,
        title: "Masala Dosa",
        category: "Lunch",
        price: 35.65,
        img: "menu12.jpg",
        desc:`Prepared from rice and lentils, dosa is a fermented breakfast option, which makes it easy for your body to assimilate
        and digest it. You can also use some other healthy ingredients instead of rice such as oats or raw to alter the taste.
`,    
    },
    {
        id: 12,
        title: "Sandwich",
        category: "Breakfast",
        price: 35.65,
        img: "menu13.jpg",
        desc:`A sandwich is a versatile and popular food item consisting of one or more types of food, such as vegetables, sliced cheese, 
        or meats, placed between slices of bread. The sandwich can be served cold or hot, and it can be customized in countless.`,
    },
    {
        id: 13,
        title: "Biryani",
        category: "Dinner",
        price: 52.65,
        img: "menu14.jpg",
        desc:`The taste of biryani is complex and rich, characterized by a harmonious blend of spices and flavors biryani has a multi-layered
        taste that combines savory, spicy, and slightly sweet elements, making it a beloved dish in many cultures`,
    },
    {
        id: 14,
        title: "Shahi Paneer",
        category: "Dinner",
        price: 40.85,
        img: "menu15.webp",
        desc:`It is a delicious North Indian curry made with paneer (cottage cheese) and tomato based spicy gravy laced with spices.
        This shahi paneer recipe uses cashew nut based tomato gravy to bring in the rich texture and flavor.`,
    },
    {
    id: 14,
        title: "Aaloo Paratha",
        category: "Dinner",
        price: 25.15,
        img: "menu16.webp",
        desc:`The most popular paratha variation, which is made with boiled and mashed potatoes and seasoned with salt, pepper, onion,
         chilli, coriander leaves, and chaat masala.`,
    },
    {
    id: 15,
        title: "Dal Makhani",
        category: "Dinner",
        price: 35.15,
        img: "menu17.webp",
        desc:`Dal Makhani is a popular Indian dish known for its rich and creamy texture, with a taste that is deeply satisfying and flavorful.
        Dal Makhani has a comforting, indulgent taste that combines creamy, tangy, and spiced elements, making it a favorite in Indian cuisine.`,
    },                                     
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["All"]);
    
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    
    const filterBtns = container.querySelectorAll(".filter-btn");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "All"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}