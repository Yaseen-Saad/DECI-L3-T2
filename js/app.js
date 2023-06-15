const sections = document.querySelectorAll("body main > section");
const ul = document.querySelector(".navbar__menu #navbar__list");
for (const section of sections) {
  const ele = document.createElement("li");
  ele.setAttribute("section-id", section.id);
  ele.classList.add("menu__link");
  ele.textContent = section.getAttribute("data-nav");
  ul.appendChild(ele);
}

ul.addEventListener("click", (e) => {
  const target = e.target.getAttribute("section-id");
  if (e.target.tagName == "LI") {
    // scrollTo({
    //   top: document.getElementById(target).offsetTop,
    //   behavior: "smooth",
    // });
    document.getElementById(target)
      .scrollIntoView({ block: "end", behavior: "smooth" });
    document
      .querySelectorAll(".navbar__menu #navbar__list li")
      .forEach((li) =>
        li.getAttribute("section-id") == target
          ? li.classList.add("active")
          : li.classList.remove("active")
      );
  }
});
/** TODO: Add an active state **/

/** TODO: Add a comment form **/
