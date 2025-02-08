const products = [
    { id: "p1", name: "LEGO© Technic Ferrari Daytona SP3" },
    { id: "p3", name: "LEGO© Technic McLaren Formula 1" },
    { id: "p4", name: "LEGO© Technic McLaren P1" },
    { id: "p2", name: "LEGO© Technic Mercedes-AMG F1 W14" }
];

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

window.onload = function () {

    // Products
    const productSelect = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });

    // Ratings
    const ratingContainer = document.getElementById("rating");

    for (let i = 1; i <= 5; i++) {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "rating" + i;
        radio.name = "rating";
        radio.value = i;
        radio.required = true;

        const label = document.createElement("label");
        label.setAttribute("for", radio.id);

        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "☆";
        }
        label.innerHTML = stars;

        const container = document.createElement("div")
        container.classList.add("rating-level");

        container.appendChild(label);
        container.appendChild(radio);
        ratingContainer.appendChild(container);
    }

    // Features
    const features = ["Durability", "Ease of Use", "Performance", "Design"];
    const featuresContainer = document.getElementById("usefulFeatures");

    features.forEach(feature => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = feature;
        checkbox.name = "usefulFeatures";
        checkbox.value = feature;

        const label = document.createElement("label");
        label.setAttribute("for", feature);
        label.innerText = feature;

        const container = document.createElement("div")
        container.classList.add("feature-level");

        container.appendChild(checkbox);
        container.appendChild(label);
        featuresContainer.appendChild(container);
    });

    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", 0);
    }
};

document.getElementById("reviewForm").onsubmit = function (event) {
    event.preventDefault();

    let count = parseInt(localStorage.getItem("reviewCount"));
    if (isNaN(count)) {
        count = 0;
    }

    localStorage.setItem("reviewCount", count + 1);
    window.location.href = "review.html";
};
