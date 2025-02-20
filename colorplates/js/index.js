let colorRow = document.querySelector('.colorRow');
let subRow = document.querySelector('.subRow');
let shadeImg = document.querySelector('.shadeImg');
let colorCol;

let colorArr = [
  {
    mainColor: "#D7B899",
    shades: ["#D7B899", "#E5C7A6", "#F2DDC3", "#F9E8D2", "#FAF1E6"]
  },
  {
    mainColor: "#A3B8FF",
    shades: ["#A3B8FF", "#B2C7FF", "#C6D6FF", "#D9E3FF", "#EBF0FF"]
  },
  {
    mainColor: "#C9A7F2",
    shades: ["#C9A7F2", "#D4B5F5", "#DFCCFA", "#EAD6FD", "#F4E8FF"]
  },
  {
    mainColor: "#FFC4B0",
    shades: ["#FFC4B0", "#FFD0BF", "#FFDCCC", "#FFE8DB", "#FFF2EA"]
  },
  {
    mainColor: "#D9D9D9",
    shades: ["#D9D9D9", "#E2E2E2", "#ECECEC", "#F5F5F5", "#FAFAFA"]
  },
  {
    mainColor: "#FFC8DD",
    shades: ["#FFC8DD", "#FFD1E3", "#FFDAE9", "#FFE3EF", "#FFEFF6"]
  },
  {
    mainColor: "#FFF1D6",
    shades: ["#FFF1D6", "#FFF5E1", "#FFF8EB", "#FFFBEF", "#FFFCF5"]
  },
  {
    mainColor: "#FFE8D1",
    shades: ["#FFE8D1", "#FFEDD9", "#FFF1E1", "#FFF5E9", "#FFF9F2"]
  },
  {
    mainColor: "#D3A7E5",
    shades: ["#D3A7E5", "#DCB5EA", "#E6C6F0", "#EFD8F5", "#FAEAFB"]
  },
  {
    mainColor: "#FFA890",
    shades: ["#FFA890", "#FFB5A0", "#FFC3AF", "#FFD1BF", "#FFE3D7"]
  },
  {
    mainColor: "#A0E6D6",
    shades: ["#A0E6D6", "#B2EDE1", "#C6F2EA", "#D9F7F2", "#EBFCFA"]
  },
  {
    mainColor: "#A3DAFF",
    shades: ["#A3DAFF", "#B2E0FF", "#C6E8FF", "#D9F0FF", "#EBF8FF"]
  },
  {
    mainColor: "#E6D6FA",
    shades: ["#E6D6FA", "#EBDFFA", "#F0E8FC", "#F5F2FE", "#FAF8FF"]
  }
];

colorArr.forEach((val) => {
  colorCol = document.createElement('div');
  colorCol.classList.add("colorCol");

  colorCol.style.backgroundColor = val.mainColor;

  colorCol.addEventListener("click", () => {
    subRow.innerHTML = ""
    // console.log(val.mainColor);
    val.shades.forEach((shade) => {
      subCol = document.createElement('div');
      subCol.classList.add("subCol");
      subCol.style.backgroundColor = shade;

      subCol.addEventListener("click",()=>{
        shadeImg.style.backgroundColor = shade;
      })
      subRow.appendChild(subCol)
    })

  });

  colorRow.appendChild(colorCol);


})