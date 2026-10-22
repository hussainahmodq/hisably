// ---- EDIT THESE after you publish the APK (leave apkUrl empty until then) ----
var SITE = {
  apkUrl: "",          // direct link to the signed release APK (for example a GitHub Releases link)
  version: "1.0.0",
  size: "",            // for example "18 MB"
  sha256: ""           // SHA-256 of the APK file (see the checklist)
};
// ------------------------------------------------------------------------------
(function () {
  var root = document.documentElement, lang = "en";
  try { lang = localStorage.getItem("hisably-lang") || ((navigator.language || "").indexOf("bn") === 0 ? "bn" : "en"); } catch (e) {}
  function setLang(l) {
    lang = l; root.setAttribute("data-lang", l); root.lang = l;
    try { localStorage.setItem("hisably-lang", l); } catch (e) {}
    var b = document.getElementById("lang"); if (b) b.textContent = l === "bn" ? "English" : "বাংলা";
  }
  setLang(lang);
  var b = document.getElementById("lang"); if (b) b.addEventListener("click", function () { setLang(lang === "bn" ? "en" : "bn"); });
  var dl = document.getElementById("dl");
  if (dl) {
    if (SITE.apkUrl) { dl.href = SITE.apkUrl; dl.setAttribute("download", ""); }
    else { dl.setAttribute("aria-disabled", "true"); dl.removeAttribute("href"); dl.querySelector(".en").textContent = "Download coming soon"; dl.querySelector(".bn").textContent = "ডাউনলোড শীঘ্রই আসছে"; }
  }
  [["v", SITE.version], ["sz", SITE.size]].forEach(function (p) { var e = document.getElementById(p[0]); if (e) { if (p[1]) e.textContent = p[1]; else if (e.parentNode) e.parentNode.style.display = "none"; } });
  var sh = document.getElementById("sha"), box = document.getElementById("shabox");
  if (sh && box) { if (SITE.sha256) sh.textContent = SITE.sha256; else box.style.display = "none"; }
  var cp = document.getElementById("copy");
  if (cp) cp.addEventListener("click", function () { try { navigator.clipboard.writeText(SITE.sha256); cp.querySelector(".en").textContent = "Copied"; cp.querySelector(".bn").textContent = "কপি হয়েছে"; } catch (e) {} });
})();
