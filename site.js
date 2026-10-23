// Hisably website: download details are loaded from release.json.
// For future APK updates, edit release.json only; site.js does not need to change.
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
  function showUnavailable() {
    if (!dl) return;
    dl.setAttribute("aria-disabled", "true"); dl.removeAttribute("href");
    var en = dl.querySelector(".en"), bn = dl.querySelector(".bn");
    if (en) en.textContent = "Download temporarily unavailable";
    if (bn) bn.textContent = "ডাউনলোড সাময়িকভাবে unavailable";
  }
  fetch("release.json?t=" + Date.now(), { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error("release.json not found"); return r.json(); })
    .then(function (data) {
      var url = typeof data.downloadUrl === "string" ? data.downloadUrl.trim() : "";
      if (dl && url) { dl.href = url; dl.removeAttribute("aria-disabled"); dl.setAttribute("rel", "noopener noreferrer"); }
      else showUnavailable();
      var v = document.getElementById("v"), sz = document.getElementById("sz");
      if (v && data.version) v.textContent = data.version;
      if (sz) { if (data.size) sz.textContent = data.size; else if (sz.parentNode) sz.parentNode.style.display = "none"; }
      var sh = document.getElementById("sha"), box = document.getElementById("shabox");
      if (sh && box) { if (data.sha256) sh.textContent = data.sha256; else box.style.display = "none"; }
      var notes = document.getElementById("release-notes"); if (notes && data.releaseNotes) notes.textContent = data.releaseNotes;
      var min = document.getElementById("minimum-android"); if (min && data.minimumAndroid) min.textContent = data.minimumAndroid;
    })
    .catch(function () { showUnavailable(); var v = document.getElementById("v"); if (v) v.textContent = "—"; });
  var cp = document.getElementById("copy");
  if (cp) cp.addEventListener("click", function () {
    var sh = document.getElementById("sha"); if (!sh || !sh.textContent) return;
    try { navigator.clipboard.writeText(sh.textContent); cp.querySelector(".en").textContent = "Copied"; cp.querySelector(".bn").textContent = "কপি হয়েছে"; } catch (e) {}
  });
})();
