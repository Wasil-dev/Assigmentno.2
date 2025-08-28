    // simple data
    const mobileData = {
      Samsung: ["Galaxy S24", "Galaxy A55", "Galaxy A15"],
      Apple: ["iPhone 15", "iPhone 14"],
      Oppo: ["Reno 11", "A58"]
    };

    const branddrop = document.getElementById("brand");
    const modeldrop = document.getElementById("model");
    const searchBtn = document.getElementById("searchBtn");
    const result = document.getElementById("result");

    // load brands
    for (let brand in mobileData) {
      let opt = document.createElement("option");
      opt.value = brand;
      opt.textContent = brand;
     branddrop.appendChild(opt);
    }

    // when brand changes
   branddrop.addEventListener("change", function() {
      modeldrop.innerHTML = '<option value="">-- Select Model --</option>';
      if (this.value) {
        mobileData[this.value].forEach(model => {
          let opt = document.createElement("option");
          opt.value = model;
          opt.textContent = model;
          modeldrop.appendChild(opt);
        });
        modeldrop.disabled = false;
      } else {
        modeldrop.disabled = true;
      }
      searchBtn.disabled = true;
    });

    // enable button
    modeldrop.addEventListener("change", function() {
      searchBtn.disabled = this.value === "";
    });

    // show result
    searchBtn.addEventListener("click", function() {
      result.textContent = `You selected ${branddrop.value} - ${modeldrop.value}`;
    });