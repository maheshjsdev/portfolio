// skill testimonilas
$(document).ready(function () {
  $('.responsive').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    mobileFirst: true,
    nav: true

  });
});

// projectDetails in tableData 
let tableData = [
  { id: 1, proName: "Solo", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "./assets/projects/solo/index.html" },
  { id: 2, proName: "Crud App", build: 'HTML, CSS, Bootstrap, AngularJS', path: "./assets/projects/crudApp/index.html" },
  { id: 3, proName: "Organic", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "./assets/projects/organic/index.html", },
  { id: 4, proName: "3lLogics", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "./assets/projects/3lLogics/index.html" },
  { id: 5, proName: "Zenith", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "./assets/projects/zenith/index.html" },
  { id: 6, proName: "Zenith Form", build: 'HTML, CSS, Bootstrap, AngularJS', path: "./assets/projects/zenithform/index.html" },
  {
    id: 7, proName: "Currency Converter", build: 'HTML, CSS, Bootstrap, JS', path:
      "./assets/projects/currencyConverter/index.html"
  },
  { id: 8, proName: "Dropdown Select", build: 'HTML, CSS, AngularJS', path: "./assets/projects/dropdownSelect/index.html" },
  {
    id: 9, proName: "Filter Table Data", build: 'HTML, CSS, Bootstrap, JS', path: "./assets/projects/filterTableData/index.html"
  },
  { id: 10, proName: "Full Page Scroll", build: 'HTML, CSS, Jquery', path: "./assets/projects/fullPageScroll/index.html" },
  { id: 11, proName: "Calculator", build: 'HTML, CSS, JS', path: "./assets/projects/calculator/index.html" },
  { id: 12, proName: "Adding Box", build: 'HTML, CSS, Bootstrap, AngularJS', path: "./assets/projects/addingBox/index.html" },
  { id: 13, proName: "Interest Calculator", build: 'HTML, CSS, AgnularJS', path: "./assets/projects/interestCalculator/index.html" },
  { id: 14, proName: "Create Placeholder", build: 'HTML, CSS, JS', path: "./assets/projects/createplaceholder/index.html" },
  { id: 15, proName: "Modern Furniture", build: 'HTML, CSS, Bootstrap, JS', path: "./assets/projects/modernFurniture/index.html" },
  { id: 16, proName: "Crud Bank App", build: 'HTML, CSS, Bootstrap, OOPs JS', path: "./assets/projects/oopsCrud/crud.html" }
];

// Dark theme colors
let darkTheme = [
  { id: "1", colorVar: "--bgColor", colorCode: "hsl(230, 30%, 8%)" },
  { id: "2", colorVar: "--parimeryColor", colorCode: "hsl(230, 28%, 12%)" },
  { id: "3", colorVar: "--textColor", colorCode: "#F5EBE0" },
  { id: "4", colorVar: "--menuColor", colorCode: "#fff" },
  { id: "5", colorVar: "--headerColor", colorCode: "#27374D" },
  { id: "6", colorVar: "--hoverColor", colorCode: "#04364A" },
  { id: "7", colorVar: "--borderColor", colorCode: "darkcyan" }
];

// show project details function
function displayTableData() {
  var k = "";
  for (var i = 0; i < tableData.length; i++) {
    k += `<tr value="${tableData[i].id}">
     <td class="para"> ${tableData[i].id}  </td>
     <td class="para"> ${tableData[i].proName} </td>
     <td class="para"> ${tableData[i].build}  </td>
     </tr>`;
  }
  let tbody = document.getElementById("tbody").innerHTML = k;
  var trParent = document.querySelectorAll("tr");
  openProjectClicked(trParent)
}

// open project clicked function
function openProjectClicked(tr) {
  tr.forEach(ele => {
    let getVal = ele.getAttribute('value');
    ele.addEventListener("click", () => {
      let getId = tableData.find(x => x.id == getVal);
      window.open(getId.path)
    })
  })
}


// Theme toggle function
var checkbox = document.getElementById("theme");
function themeToggleFun() {
  const isChecked = localStorage.getItem("checkboxState");
  let logo = document.querySelector("img.logo");
  let root = document.querySelector(":root");
  let whiteLogoPath = "assets/img/mdlogoWhite.svg";
  let defaultLogoPath = "/assets/img/mdlogo.svg"
  if (isChecked == "true") {
    checkbox.checked = true;
    darkTheme.forEach(ele => {
      root.style.setProperty(ele.colorVar, ele.colorCode);
      logo.src = whiteLogoPath;
    })
  } else {
    checkbox.checked = false;
    darkTheme.forEach(ele => {
      root.style.removeProperty(ele.colorVar, ele.colorCode);
      logo.src = defaultLogoPath;
    })
  }
}

// Theme click event
checkbox.addEventListener("change", function () {
  localStorage.setItem("checkboxState", this.checked)
  themeToggleFun()
})

// mobile menu 
const navbar = document.querySelector("nav.navbar")
let mobileBtn = document.querySelectorAll(".mobileBtn i");

function mobileMenuToggle() {
  mobileBtn.forEach(ele => {
    ele.addEventListener("click", () => {
      if (ele.className == "fa fa-bars menuOpen") {
        navbar.classList.add("mobileWidth");
      } else {
        if (ele.className == "fa fa-times menuClose") {
          navbar.classList.remove("mobileWidth");
        }
      }
    })
  });
}
//  class remove with window resize event
window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    navbar.classList.remove("mobileWidth");
  }
});

// class remove after menu clicked
let menu = document.querySelectorAll(".menuList li");
menu.forEach((ele) => {
  ele.addEventListener("click", () => {
  })
})

function init() {
  displayTableData()
  themeToggleFun()
  mobileMenuToggle()

}
init()

