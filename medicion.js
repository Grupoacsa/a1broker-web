/* Google Analytics 4 de A1 Broker + eventos de contacto (WhatsApp, teléfono, mail, agenda). */
(function () {
  var ID = 'G-PM69XG050K';
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID; document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date()); gtag('config', ID);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href') || '', ev = null;
    if (/wa\.me|api\.whatsapp\.com/.test(h)) ev = 'click_whatsapp';
    else if (h.indexOf('tel:') === 0) ev = 'click_telefono';
    else if (h.indexOf('mailto:') === 0) ev = 'click_mail';
    else if (/^\/agenda\/?$/.test(h) || /calendar\.google\.com/.test(h)) ev = 'click_agenda';
    if (ev) gtag('event', ev, { ubicacion: location.pathname, texto: (a.innerText || '').trim().slice(0, 60) });
  }, true);
})();
