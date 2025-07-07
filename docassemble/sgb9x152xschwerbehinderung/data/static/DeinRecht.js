// enforce light color scheme fighting racing conditions
const html = document.firstElementChild;
const enforceLight = _ => { html.dataset.bsTheme = "light"; };
enforceLight();
html.addEventListener("change", enforceLight);
setTimeout(1, enforceLight);
// set_logo
const url = new URL(document.URL);
const template = document.createElement("template");
let logo;
let logos_span;
let set_logo;
(async _ => {
  const r = await fetch(url.search + "&action=" + btoa(JSON.stringify({action: "get_logo"})));
  if (!r.ok){
    return Promise.reject(r);
  }
  template.innerHTML = await r.text();
  if (template.content.childNodes.length != 1){
    return Promise.reject(template.innerHTML);
  }
  logo = template.content.firstElementChild;
  [...document.getElementById("dapagetitle").children].forEach(span => span.replaceChildren(logo.cloneNode()));
  logos_span = document.createElement("span");
  logos_span.innerHTML = document.getElementById("dapagetitle").innerHTML;
  set_logo = _ => document.getElementById("dapagetitle").replaceChildren(...logos_span.cloneNode(true).children);
  $(document).on('daPageLoad', set_logo);
})();