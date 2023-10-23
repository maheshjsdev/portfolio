// skill testimonilas
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    margin: 25,
    responsiveClass: true,
    responsive: {
      424: {
        items: 1,
        nav: false
      },
      785: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    }

  });
});

// projectDetails in tableData 
let tableData = [
  { id: 1, proName: "Solo", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "/assets/projects/solo/index.html" },
  { id: 2, proName: "Crud App", build: 'HTML, CSS, Bootstrap, AngularJS', path: "/assets/projects/crudApp/index.html" },
  { id: 3, proName: "Organic", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "/assets/projects/organic/index.html", },
  { id: 4, proName: "3lLogics", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "/assets/projects/3lLogics/index.html" },
  { id: 5, proName: "Zenith", build: 'HTML, CSS, Bootstrap, JS, Jquery', path: "/assets/projects/zenith/index.html" },
  { id: 6, proName: "Zenith Form", build: 'HTML, CSS, Bootstrap, AngularJS', path: "/assets/projects/zenithform/index.html" },
  { id: 7, proName: "Currency Converter", build: 'HTML, CSS, Bootstrap, JS', path: 
    "/assets/projects/currencyConverter/index.html" },
  { id: 8, proName: "Dropdown Select", build: 'HTML, CSS, AngularJS', path: "/assets/projects/dropdownSelect/index.html" },
  { id: 9, proName: "Filter Table Data", build: 'HTML, CSS, Bootstrap, JS', path: "/assets/projects/filterTableData/index.html" 
  },
  { id: 10, proName: "Full Page Scroll", build: 'HTML, CSS, Jquery', path: "/assets/projects/fullPageScroll/index.html" },
  { id: 11, proName: "Calculator", build: 'HTML, CSS, JS', path: "/assets/projects/calculator/index.html" },
  { id: 12, proName: "Adding Box", build: 'HTML, CSS, Bootstrap, AngularJS', path: "/assets/projects/addingBox/index.html" },
  { id: 13, proName: "Interest Calculator", build: 'HTML, CSS, AgnularJS', path: "/assets/projects/interestCalculator/index.html" },
  { id: 14, proName: "Create Placeholder", build: 'HTML, CSS, JS', path: "/assets/projects/createplaceholder/index.html" },
  { id: 15, proName: "Modern Furniture", build: 'HTML, CSS, Bootstrap, JS', path: "/assets/projects/modernFurniture/index.html" },
  { id: 16, proName: "Crud Bank App", build: 'HTML, CSS, Bootstrap, OOPs JS', path: "/assets/projects/oopsCrud/crud.html" }
];

// Dark theme colors
let darkTheme = [
  { id: "1", colorVar: "--bgColor", colorCode: "hsl(230, 30%, 8%)" },
  { id: "2", colorVar: "--parimeryColor", colorCode: "hsl(230, 28%, 12%)" },
  { id: "3", colorVar: "--textColor", colorCode: "#fff" },
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
  let root = document.querySelector(":root");
  if (isChecked == "true") {
    checkbox.checked = true;
    darkTheme.forEach(ele => {
      root.style.setProperty(ele.colorVar, ele.colorCode);
    })
  } else {
    checkbox.checked = false;
    darkTheme.forEach(ele => {
      root.style.removeProperty(ele.colorVar, ele.colorCode);
    })
  }
}

// Theme click event
checkbox.addEventListener("change", function () {
  localStorage.setItem("checkboxState", this.checked)
  themeToggleFun()
})


function init() {
  displayTableData()
  themeToggleFun()
}
init()

