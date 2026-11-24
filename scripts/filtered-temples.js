const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Set Date object
const today = new Date();

// Get Year and set it on page
document.getElementById("current-year").textContent = today.getFullYear();

// Set lastModified property
document.getElementById("last-modified").textContent = document.lastModified;

// Array of Temple Objects:
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
   {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-thumb.jpg"
    },
    {
    templeName: "Mendoza Argentina",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 21999,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-thumb.jpg"
    },
     {
    templeName: "Bahía Blanca Argentina",
    location: "Bahía Blanca, Argentina",
    dedicated: "2025, November, 23",
    area: 23400,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-thumb.jpg"
    },
    {
    templeName: "Buenos Aires Argentina",
    location: "Ciudad Evita, Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088-thumb.jpg"
  },
];

// Call temple card creation function
createTempleCard(temples);

// Change active class on any clicked links
navigation.addEventListener("click", (event) => {
    const activeLink = event.target.closest("a");
    if (!activeLink || !navigation.contains(activeLink)) return;

    navigation.querySelector(".active")?.classList.remove("active");
    activeLink.classList.add("active");
})

// OnClick link event listener's filters
const home = document.getElementById("home");
const oldTemplesLink = document.getElementById("old-temples");
const newTemplesLink = document.getElementById("new-temples");
const largeTemplesLink = document.getElementById("large-temples");
const smallTemplesLink = document.getElementById("small-temples");

// Home
home.addEventListener("click", () => createTempleCard(temples));
// Old
oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(", ")[0] < 1900));
});
// New
newTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(", ")[0] > 2000));
});
// Large
largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});
// Small
smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});


// Create temple cards function
function createTempleCard(filteredTemples) {
    const templeGrid = document.querySelector(".temple-grid");
    templeGrid.innerHTML = "";
    filteredTemples.forEach(
    (temple) => (templeGrid.innerHTML +=
        `<section class="temple-card">
            <h3>${temple.templeName}</h3>
            <dl>
                <dt>Location: </dt>
                <dd>${temple.location}</dd>
            </dl>
            <dl>
                <dt>Dedicated: </dt>
                <dd>${temple.dedicated}</dd>
            </dl>
            <dl>
                <dt>Size: </dt>
                <dd>${temple.area} sq ft</dd>
            </dl>
            <figure>
            <img alt="Image of ${temple.templeName} Temple" src="${temple.imageUrl}" sizes="(max-width: 500px) 400px, 250px" loading="lazy">
            </figure>
            </section>`
    ));
}


// Respond to the main nav items by filtering and displaying the temples
