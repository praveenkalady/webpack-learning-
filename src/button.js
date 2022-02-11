const makeButton = (buttonName) => {
    const button = document.createElement("button");
    button.textContent = buttonName;
    return button;
}

module.exports = makeButton;