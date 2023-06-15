const title = document.createElement("h2");
title.textContent = "Comments";

const nameInput = document.createElement("input");
nameInput.placeholder = "Your Name";

const emailInput = document.createElement("input");
emailInput.placeholder = "Your Email";

const commentInput = document.createElement("textarea");
commentInput.placeholder = "Your Comment";

const submitButton = document.createElement("input");
submitButton.value = "Comment";
submitButton.type = "submit";

const form = document.createElement("form");
form.append(nameInput, emailInput, commentInput, submitButton);
form.onsubmit = submitComment;

const comments = document.createElement("div");
comments.classList.add("comments")
const sectionForm = document.createElement("section");
sectionForm.id = "Comments";
sectionForm.classList.add("landing__container", "Section");
sectionForm.setAttribute("data-nav", "Comments");
sectionForm.append(title, comments, form);

function submitComment(event) {
  event.preventDefault();
  const data = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    comment: commentInput.value.trim(),
  };
  if (!data.name) {
    alert("Please enter a name");
  } else {
    if (data.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      if (data.comment.split(" ").length < 5) {
        alert("Comment should be at least 5 words!");
      } else {
        if (data.comment.split(" ").length > 50) {
          alert(" You've exceeded the maximum number of words");
        } else {
          nameInput.value = "";
          emailInput.value = "";
          commentInput.value = "";
          addComment(data);
        }
      }
    } else {
      alert("Please enter a valid email");
    }
  }
}
function addComment(comment) {
  const article = document.createElement("article");
  const name = document.createElement("h3");
  name.innerText = comment.name;
  const comm = document.createElement("p");
  comm.innerText = comment.comment;
  const email = document.createElement("p");
  email.innerText = comment.email;
  article.append(comm, name, email);
  comments.append(article);
}

document
  .querySelector("footer")
  .insertAdjacentElement("beforebegin", sectionForm);

const sections = document.querySelectorAll("body section.Section");
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
    const element = document.getElementById(target);
    element.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });

    // another way to add the functionality of scrolling on clicking
    /* scrollTo({
        top: document.getElementById(target).offsetTop,
        behavior: "smooth",
      }); */

    document
      .querySelectorAll(".navbar__menu #navbar__list li")
      .forEach((li) =>
        li.getAttribute("section-id") == target
          ? li.classList.add("active")
          : li.classList.remove("active")
      );
  }
});
function addingActive() {
  const lies = [...document.querySelectorAll("li")];
  for (const section of sections) {
    const sectionRect = section.getBoundingClientRect();
    if (sectionRect.y > 0 && sectionRect.bottom <= window.innerHeight + 200) {
      section.classList.add("active");
      lies.map((li) =>
        li.getAttribute("section-id") == section.id
          ? li.classList.add("active")
          : li.classList.remove("active")
      );
    } else {
      section.classList.remove("active");
    }
  }
}
addingActive();

onscroll = addingActive;
// another way for adding active class to sections

/*  
    sections.forEach((section) =>
      section.id == target
        ? section.classList.add("active")
        : section.classList.remove("active")
    );
    */
