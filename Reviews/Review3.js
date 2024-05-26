const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        job: "UX Designer",
        img: "person.jpg",
        text:
            "I am meggings twee health goth +1. Bicycle rights turmeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Susan Smith",
        job: "Web Designer",
        img: "person2.jpeg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe. Photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "Bill Anderson",
        job: "Senior Developer",
        img: "person3.jpg",
        text:
            "Edison bulb put a bird on it humblebrag marfa pok pok heirloom fashion axe cray stumptown venmo actually seita. VHS farm-tp-table schitz, edison bulb pop-uo 3 wolf moon tote bag street art snabby chic."
    },
    {
    id: 4,
        name: "Peter Jones",
        job: "Intern",
        img: "person4.webp",
        text:
            "Srirancha literally flexitarian irony, vape, marfa unicorn.Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raciette post-ironic-jinbing swag."
        
    }       
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
