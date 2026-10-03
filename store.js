(function () {
  var note = document.getElementById("checkout-note");
  var buttons = document.querySelectorAll(".buy[data-sku]");

  function endpoint(sku) {
    var config = window.CHECKOUT_CONFIG || {};
    var value = config[sku];
    if (typeof value !== "string") {
      return "";
    }
    return value.trim();
  }

  function allowed(url) {
    try {
      var parsed = new URL(url);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch (err) {
      return false;
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var sku = button.getAttribute("data-sku") || "";
      var url = endpoint(sku);

      if (note) {
        button.insertAdjacentElement("afterend", note);
      }

      if (!url || !allowed(url)) {
        if (note) {
          note.textContent = "Checkout is not connected yet.";
          note.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
        return;
      }

      if (note) {
        note.textContent = "";
      }
      window.location.assign(url);
    });
  });
})();
