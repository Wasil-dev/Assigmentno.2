const mobileData = {
  Samsung: ["Galaxy S24", "Galaxy A55", "Galaxy A15"],
  Apple: ["iPhone 15", "iPhone 14"],
  Oppo: ["Reno 11", "A58"],
};

const brandDrop = document.getElementById("brand");
const modelDrop = document.getElementById("model");
const searchbtn = document.getElementById("searchbtn");
const result = document.getElementById("result");

// appear brands :
for (let brand in mobileData) {
    let opt = document.createElement("option");
    opt.value = brand;
    opt.textContent = brand;
    brandDrop.appendChild(opt);
}

// changing brand label by selecting
brandDrop.addEventListener("change", function()  {
  modelDrop.innerHTML = '<option value="">-- Select Model --</option>';
  if(brandDrop.value) {
    mobileData[brandDrop.value].forEach(function(model) {
      let opt = document.createElement("option");
      opt.value = model;
      opt.textContent = model;
      modelDrop.appendChild(opt);
    });
    modelDrop.disabled = false;
    searchbtn.disabled = false;
  } else {
    modelDrop.disabled = true;
    searchbtn.disabled = true;
  }
});

// Search button click event 
searchbtn.addEventListener("click", function() {
  result.textContent = `You selected ${brandDrop.value} - ${modelDrop.value}`;
});

// enable button 
modelDrop.addEventListener("change", function() {
  searchbtn.disabled = !modelDrop.value;
});