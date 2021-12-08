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
