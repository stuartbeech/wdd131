const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg",
        alt: "Payson Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Temple"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Temple"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg",
        alt: "Johannesburg Temple"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7",
        area: 42775,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-784251-wallpaper.jpg",
        alt: "London Temple"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo City Center, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg",
        alt: "Provo City Center Temple"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg",
        alt: "Rexburg Temple"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg",
        alt: "Rome Temple"
    }
];

function createTempleCards(filteredTemples) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = '';

    filteredTemples.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        const templeName = document.createElement("h2");
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement("p");
        templeLocation.textContent = `Location: ${temple.location}`;

        const templeDedicated = document.createElement("p");
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const templeArea = document.createElement("p");
        templeArea.textContent = `Size: ${temple.area} sq ft`;

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.alt;
        templeImage.loading = "lazy";

        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);

        container.appendChild(templeCard);
    });
}

function filterTemples(type) {
    let filteredTemples = [];

    switch (type) {
        case "home":
            filteredTemples = temples;
            break;
        case "old":
            filteredTemples = temples.filter((temple) => {
                const dedicationYear = parseInt(temple.dedicated.split(',')[0], 10);
                return dedicationYear < 1900;
            });
            break;
        case "new":
            filteredTemples = temples.filter((temple) => {
                const dedicationYear = parseInt(temple.dedicated.split(',')[0], 10);
                return dedicationYear > 2000;
            });
            break;
        case "large":
            filteredTemples = temples.filter((temple) => {
                const area = temple.area;
                return area > 90000;
            });
            break;
        case "small":
            filteredTemples = temples.filter((temple) => {
                const area = temple.area;
                return area < 10000;
            });
            break;
        default:
            filteredTemples = temples;
            break;
    }

    createTempleCards(filteredTemples);
}

document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old-temples").addEventListener("click", () => filterTemples("old"));
document.getElementById("new-temples").addEventListener("click", () => filterTemples("new"));
document.getElementById("large-temples").addEventListener("click", () => filterTemples("large"));
document.getElementById("small-temples").addEventListener("click", () => filterTemples("small"));

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const hambutton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const main = document.querySelector('.page-container');

document.addEventListener("DOMContentLoaded", () => {
    filterTemples("home");
});

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    nav.classList.toggle('show');
    main.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        hambutton.classList.remove('show');
        nav.classList.remove('show');
    }
})
