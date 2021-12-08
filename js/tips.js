//tips transition
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
const tip1 = document.getElementById("tip1");
observer.observe(tip1)
const tip2 = document.getElementById("tip2");
observer.observe(tip2)
const tip3 = document.getElementById("tip3");
observer.observe(tip3)
const tip4 = document.getElementById("tip4");
observer.observe(tip4)
const tip5 = document.getElementById("tip5");
observer.observe(tip5)
const tip6 = document.getElementById("tip6");
observer.observe(tip6)
