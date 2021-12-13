const inputElement = (type, name, label, placeholder) => {
    return `
        <div>
            <input type="${type}" name="${name}" placeholder="${placeholder}">
            <label>${label}</label>
        </div>
    `
}

const formElement = `
    <form id="form">
        <h1>Visszajelzés</h1>
        ${inputElement("text", "subject", "", "Tárgy")}
        ${inputElement("text", "comment", "", "Megjegyzés")}
        ${inputElement("checkbox", "terms", "Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót</span>.", "")}
        <button>Mentés</button>
`;

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
}

window.addEventListener("load", loadEvent)