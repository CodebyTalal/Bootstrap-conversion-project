document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    const icon = button.querySelector('i');

    button.addEventListener('click', function () {
      // Toggle the icon for the clicked button
      if (button.classList.contains('collapsed')) {
        icon.classList.remove('bi-dash-circle');
        icon.classList.add('bi-plus-circle');
      } else {
        icon.classList.remove('bi-plus-circle');
        icon.classList.add('bi-dash-circle');
      }

      // Change other icons back to plus circle
      accordionButtons.forEach(otherButton => {
        if (otherButton !== button) {
          const otherIcon = otherButton.querySelector('i');
          if (!otherButton.classList.contains('collapsed')) {
            otherIcon.classList.remove('bi-dash-circle');
            otherIcon.classList.add('bi-plus-circle');
          }
        }
      });
    });
  });

  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.addEventListener('show.bs.collapse', function () {
      const otherAccordions = document.querySelectorAll('.accordion-collapse.show');
      otherAccordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion) {
          otherAccordion.previousElementSibling.querySelector('.accordion-button').click();
        }
      });
    });
  });
});

localStorage.removeItem("menuTitleClicked");

function showResidentailSubMenu(event) {
  const clickedButton = event.target;
  const listGroup = clickedButton.parentElement;
  const buttons = Array.from(listGroup.querySelectorAll("button"));
  const index = buttons.indexOf(clickedButton);

  // Add a CSS class to the clicked button
  clickedButton.classList.add("custom-menu-button");

  // Remove the class from other buttons (optional)
  buttons.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.remove("custom-menu-button");
    }
  });

  const menuTitleClicked = localStorage.getItem("menuTitleClicked");
  if (menuTitleClicked !== null) {
    document
      .getElementById(`${menuTitleClicked}-preview-images`)
      .classList.add("d-none");

    document
      .getElementById(`${menuTitleClicked}`)
      .classList.remove("d-block");

    document.getElementById(`${menuTitleClicked}`).classList.add("d-none");
  }

  localStorage.setItem("menuTitleClicked", "residential");
  document.getElementById("residential").classList.remove("d-none");
  document.getElementById("residential").classList.add("d-block");

  const itemsGroup = document
    .getElementById("residential")
    .querySelector(".list-group");

  // Get all buttons within the items-group
  const subMenuButtons = itemsGroup.querySelectorAll("button");

  // Remove the custom-submenu-button-effect class from each button
  subMenuButtons.forEach((button) => {
    button.classList.remove("custom-submenu-button-effect");
  });
}

function showCommertialSubMenu(event) {
  const clickedButton = event.target;
  const listGroup = clickedButton.parentElement;
  const buttons = Array.from(listGroup.querySelectorAll("button"));
  const index = buttons.indexOf(clickedButton);

  // Add a CSS class to the clicked button
  clickedButton.classList.add("custom-menu-button");

  // Remove the class from other buttons (optional)
  buttons.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.remove("custom-menu-button");
    }
  });

  const menuTitleClicked = localStorage.getItem("menuTitleClicked");
  if (menuTitleClicked !== null) {
    document
      .getElementById(`${menuTitleClicked}-preview-images`)
      .classList.add("d-none");

    document
      .getElementById(`${menuTitleClicked}`)
      .classList.remove("d-block");

    document.getElementById(`${menuTitleClicked}`).classList.add("d-none");
  }

  localStorage.setItem("menuTitleClicked", "commertial");
  document.getElementById("commertial").classList.remove("d-none");
  document.getElementById("commertial").classList.add("d-block");

  const itemsGroup = document
    .getElementById("commertial")
    .querySelector(".list-group");

  // Get all buttons within the items-group
  const subMenuButtons = itemsGroup.querySelectorAll("button");

  // Remove the custom-submenu-button-effect class from each button
  subMenuButtons.forEach((button) => {
    button.classList.remove("custom-submenu-button-effect");
  });
}

function showInstitutionalSubMenu(event) {
  const clickedButton = event.target;
  const listGroup = clickedButton.parentElement;
  const buttons = Array.from(listGroup.querySelectorAll("button"));
  const index = buttons.indexOf(clickedButton);

  // Add a CSS class to the clicked button
  clickedButton.classList.add("custom-menu-button");

  // Remove the class from other buttons (optional)
  buttons.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.remove("custom-menu-button");
    }
  });

  const menuTitleClicked = localStorage.getItem("menuTitleClicked");
  if (menuTitleClicked !== null) {
    document
      .getElementById(`${menuTitleClicked}-preview-images`)
      .classList.add("d-none");

    document
      .getElementById(`${menuTitleClicked}`)
      .classList.remove("d-block");

    document.getElementById(`${menuTitleClicked}`).classList.add("d-none");
  }

  localStorage.setItem("menuTitleClicked", "institutional");
  document.getElementById("institutional").classList.remove("d-none");
  document.getElementById("institutional").classList.add("d-block");

  const itemsGroup = document
    .getElementById("institutional")
    .querySelector(".list-group");

  // Get all buttons within the items-group
  const subMenuButtons = itemsGroup.querySelectorAll("button");

  // Remove the custom-submenu-button-effect class from each button
  subMenuButtons.forEach((button) => {
    button.classList.remove("custom-submenu-button-effect");
  });
}

function showIndustrialSubMenu(event) {
  const clickedButton = event.target;
  const listGroup = clickedButton.parentElement;
  const buttons = Array.from(listGroup.querySelectorAll("button"));
  const index = buttons.indexOf(clickedButton);

  // Add a CSS class to the clicked button
  clickedButton.classList.add("custom-menu-button");

  // Remove the class from other buttons (optional)
  buttons.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.remove("custom-menu-button");
    }
  });

  const menuTitleClicked = localStorage.getItem("menuTitleClicked");
  if (menuTitleClicked !== null) {
    document
      .getElementById(`${menuTitleClicked}-preview-images`)
      .classList.add("d-none");

    document
      .getElementById(`${menuTitleClicked}`)
      .classList.remove("d-block");

    document.getElementById(`${menuTitleClicked}`).classList.add("d-none");
  }

  localStorage.setItem("menuTitleClicked", "industrial");
  document.getElementById("industrial").classList.remove("d-none");
  document.getElementById("industrial").classList.add("d-block");

  const itemsGroup = document
    .getElementById("industrial")
    .querySelector(".list-group");

  // Get all buttons within the items-group
  const subMenuButtons = itemsGroup.querySelectorAll("button");

  // Remove the custom-submenu-button-effect class from each button
  subMenuButtons.forEach((button) => {
    button.classList.remove("custom-submenu-button-effect");
  });
}

function showPreviewImage(event) {
  const clickedButton = event.target;

  const listGroup = clickedButton.parentElement;

  const buttons = Array.from(listGroup.querySelectorAll("button"));

  const index = buttons.indexOf(clickedButton);

  // Add a CSS class to the clicked button
  clickedButton.classList.add("custom-submenu-button-effect");

  // Remove the class from other buttons (optional)
  buttons.forEach((btn, i) => {
    if (i !== index) {
      btn.classList.remove("custom-submenu-button-effect");
    }
  });

  const menuTitleClicked = localStorage.getItem("menuTitleClicked");

  // Get all images in the industrial div
  const industrialImages = document.getElementById(
    `${menuTitleClicked}-preview-images`
  ).children;

  // Hide all images initially
  for (const img of industrialImages) {
    img.classList.add("d-none");
  }

  // Show the corresponding image based on index
  if (industrialImages[index]) {
    industrialImages[index].classList.remove("d-none");
  }

  document
    .getElementById(`${menuTitleClicked}-preview-images`)
    .classList.remove("d-none");
}