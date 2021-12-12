//bestillingsformular
const url = new URL(window.location.href);

const navn = url.searchParams.get("navn");
const nummer = url.searchParams.get("nummer");
const email = url.searchParams.get("email");
const adresse = url.searchParams.get("adresse");
const oplysninger = url.searchParams.get("oplysninger");

document.getElementById("navn").innerText = navn
document.getElementById("nummer").innerText = nummer
document.getElementById("email").innerText = email
document.getElementById("adresse").innerText = adresse
document.getElementById("oplysninger").innerText = oplysninger

//img transititon
function handler(entries) {
    for (const entry of entries) {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
        } else {
            entry.target.classList.remove("transition");
        }

    }
}
const observer = new IntersectionObserver(handler, {
    threshold: 0.50,
});
const img = document.getElementById("img1");
observer.observe(img)
