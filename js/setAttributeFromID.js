window.addEventListener("mouseup", function (event) {
  let hiddenContainer = document.getElementById("hiddenContainer");
  if (
    event.target != hiddenContainer &&
    event.target.parentNode != hiddenContainer
  ) {
    hiddenContainer.style.display = "none";
  }
});
function unBlock() {
  document.getElementById("hiddenContainer").style.display = "block";
  getIframeAdd();
  // getIdValueAdd();
  // // getIdData();
  alert("Oop! Error, もう2度クリックしてください。");
}

//get id from iframe
const getIframeSrc = document.getElementById("iframe");

// const getIframeValue = getIframeSrc.getAttribute("value");

//get data-id from a-link

//tao ham get data-id
// function getDataIdFrom() {
//   const getDataFrom = document.getElementsByClassName("gird-box");
//   let getDataFrom = getDataFrom.getAttribute("data-id");
//   // let getterId = $(this).data("id");
//   console.log(getDataId);
//   // return getDataFrom;
// }
// console.log(getDataIdFrom.getData);
//khoi tao array
const myArray = [
  { id: 2, src: "https://www.google.com" },
  { id: 1, src: "http://doommad.byethost16.com/" },
  { id: 0, src: "./secondary-index.html" },
];

// const getId = document.getElementsByClassName("grid");
// const getIdValue = getId.getAttribute("value");
// const getIdFirst = document.getElementsByClassName("gird1");
// const getIdSecondary = document.getElementsByClassName("gird2");
// const getIdThird = document.getElementsByClassName("gird3");

// function getIdValueAdd() {
//   let iframeId = getIdValue;
//   let idAdd = getIframeSrc.setAttribute("value", iframeId);
//   console.log(idAdd);
// }
// let idAdded = "idAdd";

//get src by id
function getIframeAdd() {
  $(document).ready(function () {
    $(".main .section .work-grid a").on("click", function (event) {
      event.preventDefault();
      let dataId = $(this).attr("data-id");
      console.log(dataId);
      let newSrc = myArray.find(({ id }) => id == dataId); // *main getIframeValue
      // document.getElementById("iframe").srcdoc = newSrc.src; //hien thi noi dung ra man hinh
      let link = getIframeSrc.setAttribute("src", newSrc.src);
    });
  });
}
