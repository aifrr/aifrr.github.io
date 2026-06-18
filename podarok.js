(function () {
  var target = "https://fox-harko.pp.ua/" + window.location.hash;

  window.addEventListener("load", function () {
    window.location.replace(target);
  });

  setTimeout(function () {
    window.location.href = target;
  }, 1);
})();
