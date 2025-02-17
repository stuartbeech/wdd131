const legoTopics = [
    { id: "p1", name: "LEGO© Icons" },
    { id: "p3", name: "LEGO© Star Wars" },
    { id: "p4", name: "LEGO© Technic" },
    { id: "p2", name: "Other" }
];

function showPopup() {
    const contactData = JSON.parse(localStorage.getItem('userContact'));

    if (contactData) {
        const popupContent = document.getElementById("popupContent");
        popupContent.innerHTML = `
            Hi ${contactData.name}, thanks for reaching out to us about 
            ${getTopicName(contactData.topic)}! <br>
            <br>
            A fellow enthusiast will be in touch soon to help with your building journey. 
            We can't wait to see what you create! <br>
            <br>
            Happy Building!
        `;

        document.getElementById("popup").style.display = "block";
        document.getElementById("popup-overlay").style.display = "block";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";

    document.getElementById('contact-form').reset();
}

function getTopicName(topicId) {
    const topic = legoTopics.find(t => t.id === topicId);
    return topic ? topic.name : "Unknown Topic";
}

document.addEventListener("DOMContentLoaded", () => {
    const topicSelect = document.getElementById("topic");

    legoTopics.forEach(topic => {
        const option = document.createElement("option");
        option.value = topic.id;
        option.textContent = topic.name;
        topicSelect.appendChild(option);
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('name').value;
    const userSurname = document.getElementById('surname').value;
    const userEmail = document.getElementById('email').value;
    const userTopic = document.getElementById('topic').value;
    const userMessage = document.getElementById('message').value;

    const contactData = {
        name: userName,
        surname: userSurname,
        email: userEmail,
        topic: userTopic,
        message: userMessage
    };

    localStorage.setItem('userContact', JSON.stringify(contactData));

    showPopup();
});
