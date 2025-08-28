    // simple data
    const mobileData = {
      Samsung: ["Galaxy S24", "Galaxy A55", "Galaxy A15"],
      Apple: ["iPhone 15", "iPhone 14"],
      Oppo: ["Reno 11", "A58"]
    };

    const brandDropdown = document.getElementById("brand");
    const modelDropdown = document.getElementById("model");
    const btnSearch = document.getElementById("searchBtn");
    const resultBox = document.getElementById("result");

    // load brands
    for (let brand in mobileData) {
      let opt = document.createElement("option");
      opt.value = brand;
      opt.textContent = brand;
      brandDropdown.appendChild(opt);
    }

    // when brand changes
    brandDropdown.addEventListener("change", function() {
      modelDropdown.innerHTML = '<option value="">-- Select Model --</option>';
      if (this.value) {
        mobileData[this.value].forEach(model => {
          let opt = document.createElement("option");
          opt.value = model;
          opt.textContent = model;
          modelDropdown.appendChild(opt);
        });
        modelDropdown.disabled = false;
      } else {
        modelDropdown.disabled = true;
      }
      btnSearch.disabled = true;
    });

    // enable button
    modelDropdown.addEventListener("change", function() {
      btnSearch.disabled = this.value === "";
    });

    // show result
    btnSearch.addEventListener("click", function() {
      resultBox.textContent = `You selected ${brandDropdown.value} - ${modelDropdown.value}`;
    });