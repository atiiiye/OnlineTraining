$(document).ready(function () {
  $(".dropdown-menu li.dropdown").on("click", function (e) {
    $(this).toggleClass("show");
    var $subMenu = $(this).find("ul:nth-child(1)").addClass("show");
    $subMenu.toggleClass("show");

    return false;
  });

  $("li.dropdown-item").on("click", function (e) {
    $(this).parents("ul.dropdown-menu.show").removeClass("show");
    $(this).parents("li.nav-item.dropdown.show").removeClass("show");
    $(this)
      .parents("div.collapse")
      .prev("div.hamburger-menu.navbar-toggler")
      .addClass("collapsed");
  });

  $("li#list-item").on("click", function (e) {
    $(this).parents("div.collapse.navbar-collapse").toggleClass("show");
    $(this)
      .parents("div.navbar-right")
      .children("div.navbar-toggler")
      .children("span.navbar-toggler-icon")
      .toggleClass("change");
  });

  $("li.dropdown-item").on("click", function (e) {
    $(this).parents("div.collapse.navbar-collapse.show").removeClass("show");
    $(this)
      .parents("div.navbar-right")
      .children("div.navbar-toggler")
      .children("span.navbar-toggler-icon")
      .toggleClass("change");
  });

  let nanBarTogglerIcon = document.querySelector(".navbar-toggler-icon");
  let listItemShow = document.querySelector("li.list-item.dropdown");
  let sub22 = document.querySelector("li#sub2-2");
  let sub21 = document.querySelector("li#sub2-1");
  let navItemDropdown = document.querySelector("li#nav-item");
  let navItemDropdowns = document.querySelectorAll("li.nav-item.dropdown");

  nanBarTogglerIcon.addEventListener("click", function (e) {
    nanBarTogglerIcon.classList.toggle("change");
  });

  sub22.addEventListener("click", function () {
    sub21.classList.remove("show");
  });

  sub21.addEventListener("click", function () {
    sub22.classList.remove("show");
  });

  navItemDropdown.addEventListener("click", function () {
    sub21.classList.remove("show");
    sub22.classList.remove("show");
  });

  navItemDropdowns.forEach((navItem) =>
    navItem.addEventListener("mouseover", function () {
      navItem.classList.add("show");
      let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
      dropdownMenus.classList.add("show");
    })
  );

  navItemDropdowns.forEach((navItem) =>
    navItem.addEventListener("mouseleave", function () {
      navItem.classList.remove("show");
      let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
      dropdownMenus.classList.remove("show");
    })
  );

  sub22.addEventListener("mouseover", function () {
    this.classList.add("show");
  });

  sub22.addEventListener("mouseleave", function () {
    this.classList.remove("show");
  });

  sub21.addEventListener("mouseover", function () {
    this.classList.add("show");
  });

  sub21.addEventListener("mouseleave", function () {
    this.classList.remove("show");
  });
});
