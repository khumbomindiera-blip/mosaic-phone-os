function processIntent() {
    const inputField = document.getElementById("user-intent");
    const feed = document.getElementById("mosaic-feed");
    const leftStatus = document.getElementById("left-status");
    const rightStatus = document.getElementById("right-status");

    const userText = inputField.value.trim();
    if (!userText) return;

    // Simulate Bi-Cameral Processing
    leftStatus.textContent = "Verifying Perms";
    leftStatus.style.background = "#d97706";
    rightStatus.textContent = "Inferring Intent";
    rightStatus.style.background = "#d97706";

    setTimeout(() => {
        leftStatus.textContent = "Secure Core OK";
        leftStatus.style.background = "#059669";
        rightStatus.textContent = "SLM Executed";
        rightStatus.style.background = "#059669";

        // Create new Mosaic Tile output
        const newTile = document.createElement("div");
        newTile.className = "tile";
        newTile.innerHTML = `
            <h4>Sealine Processed: "${userText}"</h4>
            <p>Executed locally via bi-cameral sync. Zero cloud packets transmitted.</p>
        `;

        feed.prepend(newTile);
        inputField.value = "";
    }, 800);
}
