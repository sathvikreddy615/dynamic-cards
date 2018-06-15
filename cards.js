const container = document.querySelector("#container");
const frag = document.createDocumentFragment();
const createBtn = document.querySelector("#createBtn");

const dynamicCardCreator = () => {

    createBtn.addEventListener("click", () => {
    
        const cardCreator = () => {
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            return card;
        }
    
        const card = cardCreator();
    
        const deleteBtnCreator = () => {
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("id", "deleteBtn");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.addEventListener("click", () => {
                event.target.parentNode.remove();
            });
            return deleteBtn;
        };
    
        const addUserText = () => {
            let userInput = document.querySelector("#userInput").value;
            let injectText = document.createElement("p");
            injectText.innerHTML += userInput;
            return injectText;
        };
    
        card.appendChild(deleteBtnCreator());
        card.appendChild(addUserText());
        frag.appendChild(card);
        container.appendChild(frag);
    
    });

}

dynamicCardCreator();



