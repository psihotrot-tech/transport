(function () {
  var PHONE_WA = "381606553500";

  // Mobile menu
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Copy phone number
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var txt = btn.getAttribute("data-copy");
      var done = btn.getAttribute("data-done") || "OK";
      var orig = btn.textContent;
      function ok() {
        btn.textContent = done;
        setTimeout(function () { btn.textContent = orig; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(ok, function () {});
      }
    });
  });

  // Send my location via WhatsApp
  document.querySelectorAll("[data-locate]").forEach(function (btn) {
    var note = document.getElementById(btn.getAttribute("data-note"));
    btn.addEventListener("click", function () {
      var msg = btn.getAttribute("data-msg");
      if (!navigator.geolocation) {
        if (note) note.textContent = btn.getAttribute("data-err");
        return;
      }
      if (note) note.textContent = btn.getAttribute("data-wait");
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          var lat = pos.coords.latitude.toFixed(6);
          var lng = pos.coords.longitude.toFixed(6);
          var link = "https://maps.google.com/?q=" + lat + "," + lng;
          var url = "https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(msg + " " + link);
          if (note) note.textContent = "";
          window.location.href = url;
        },
        function () {
          if (note) note.textContent = btn.getAttribute("data-err");
        },
        { enableHighAccuracy: true, timeout: 12000 }
      );
    });
  });

  // Year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
