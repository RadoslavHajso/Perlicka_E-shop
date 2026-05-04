/*Newslatter text*/
document.addEventListener("DOMContentLoaded", function () {
  if (document.documentElement.lang !== "pl") return;

  const label = document.querySelector('.consents.consents-first label');
  if (!label) return;

  label.innerHTML = 'Wpisując adres e-mail, wyrażasz zgodę z <a href="/podmienky-ochrany-osobnych-udajov/" rel="noopener noreferrer">zasadami ochrony danych osobowych</a>';
});