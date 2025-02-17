const legoBuilds = [
    { name: "Technic™", category: "Technic", image: "images/builds/ducati-panigale-build.webp" },
    { name: "Technic™", category: "Technic", image: "images/builds/emirates-yacht-build.webp" },
    { name: "Technic™", category: "Technic", image: "images/builds/mclaren-p1-build.webp" },
    { name: "Technic™", category: "Technic", image: "images/builds/mercedes-g500-build.webp" },
    { name: "Technic™", category: "Technic", image: "images/builds/peugeot-lemans-build.webp" },
    { name: "Technic™", category: "Technic", image: "images/builds/redbull-f1-build.webp" },

    { name: "LEGO® Icons", category: "Icons", image: "images/builds/atari-game-station.webp" },
    { name: "LEGO® Icons", category: "Icons", image: "images/builds/eiffel-tower.webp" },
    { name: "LEGO® Icons", category: "Icons", image: "images/builds/landrover-defender.webp" },
    { name: "LEGO® Icons", category: "Icons", image: "images/builds/pac-man.webp" },
    { name: "LEGO® Icons", category: "Icons", image: "images/builds/tudor-corner.webp" },
    { name: "LEGO® Icons", category: "Icons", image: "images/builds/vespa.webp" },

    { name: "Star Wars™", category: "Starwars", image: "images/builds/at-at.webp" },
    { name: "Star Wars™", category: "Starwars", image: "images/builds/jabba-sail-barge.webp" },
    { name: "Star Wars™", category: "Starwars", image: "images/builds/mos-eisley-cantina.webp" },
    { name: "Star Wars™", category: "Starwars", image: "images/builds/r2-d2.webp" },
    { name: "Star Wars™", category: "Starwars", image: "images/builds/razor-crest.webp" },
    { name: "Star Wars™", category: "Starwars", image: "images/builds/tie-interceptor.webp" }
];

function displayBuilds(builds) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = '';

    const fragment = document.createDocumentFragment();

    builds.forEach(build => {
        const figureElement = document.createElement('figure');
        const imageElement = document.createElement('img');

        imageElement.src = build.image;
        imageElement.alt = build.name;
        imageElement.loading = "lazy";

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = build.name;

        figureElement.appendChild(imageElement);
        figureElement.appendChild(figcaption);

        fragment.appendChild(figureElement);
    });

    gallery.appendChild(fragment);
}

function filterBuilds() {
    const categoryFilter = document.getElementById("category-filter").value;
    let filteredBuilds = legoBuilds;

    if (categoryFilter !== "all") {
        filteredBuilds = legoBuilds.filter(build => build.category === categoryFilter);
    }

    displayBuilds(filteredBuilds);
}

document.addEventListener("DOMContentLoaded", () => {
    displayBuilds(legoBuilds);

    const categoryFilterElement = document.getElementById("category-filter");
    if (categoryFilterElement) {
        categoryFilterElement.addEventListener("change", filterBuilds);
    }
});
