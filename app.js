console.log("WebAR Indoor Map Loaded");

document.addEventListener("markerFound", () => {
console.log("Marker detected");
});

document.addEventListener("markerLost", () => {
console.log("Marker lost");
});