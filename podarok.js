(function () {
  var newDomain = "fox-harko.pp.ua";

  // Якщо вже на новому домені, нічого не робимо
  if (window.location.hostname === newDomain) {
    return;
  }

  // Зберігаємо шлях сторінки, параметри і hash
  var target =
    "https://" +
    newDomain +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  // Перенаправлення без збереження старої сторінки в історії
  window.location.replace(target);
})();
