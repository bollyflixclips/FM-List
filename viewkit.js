/*! viewkit.js v2
 * Containers built entirely from JavaScript (markup + styling), tuned per screen size:
 *   top dock (above the navbar, sticky) | side rails (wide screens) | centre modal | bottom dock
 * Link at the end of <body>:  <script src="viewkit.js"></script>
 * Class names are generated at runtime.
 */
(function () {
  'use strict';

  /* ===================== SETTINGS (edit here) ===================== */
  var banner = function (key, w, h) {
    return { type: 'banner', key: key, w: w, h: h, src: 'https://www.highrevenueformat.com/' + key + '/invoke.js' };
  };
  var B320 = banner('4cfe4170548e0eaea704fae26b45e546', 320, 50);
  var B468 = banner('00b97a605e30bfe73e2faa456bd12f0b', 468, 60);
  var B728 = banner('6131f697fc22f7eb17629b244cdabae5', 728, 90);
  var B300 = banner('67def5fb13e10e1d0d5362175483af22', 300, 250);
  var B160x300 = banner('59295d0b4cd032bba98ad0d69811b95a', 160, 300);
  var B160x600 = banner('f56c9f86208b0eb7f3db3542af717365', 160, 600);
  var NATIVE = { type: 'native', w: 728, h: 100, id: 'container-4354f5cf819f6178b099c4822636bc35',
    src: 'https://pl24369501.profitableratecpmnetwork.com/4354f5cf819f6178b099c4822636bc35/invoke.js' };

  var CONFIG = {
    testMode: false,            // true = dashed placeholders instead of real ads
    navSelector: 'header',      // your navbar; it is nudged below the top dock while the dock is open
    mobileMax: 599,             // width <= this  -> mobile
    tabletMax: 1023,            // width <= this  -> tablet, above -> desktop
    gap: 10000,                 // min ms between one container appearing and the next
    quietAfterLink: 20000,      // pause after a smart-link tab was opened

    top:    { on: true, delay: 100,  cooldownHours: 0, stickyMaxFraction: 0.5, desktop: NATIVE, tablet: B468, mobile: B320 },
    rails:  { on: true, delay: 2000, cooldownHours: 0, minWidth: 1640, left: B160x300, right: B160x600, rightMinHeight: 720 },
    center: { on: true, delay: 3000, scrollPct: 50, scrollMinDelay: 1500, ad: B300 },
    bottom: { on: true, delay: 4000, desktop: B728, tablet: B468, mobile: B320, mobileStartsCollapsed: true }
  };

  /* ===================== Helpers ===================== */
  var P = 'k' + Math.random().toString(36).slice(2, 7);
  var q = function (n) { return '.' + P + n; };
  var make = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls.split(' ').map(function (c) { return P + c; }).join(' ');
    if (html) e.innerHTML = html;
    return e;
  };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var visible = function () {
    return new Promise(function (res) {
      if (!document.hidden) return res();
      var f = function () { if (!document.hidden) { document.removeEventListener('visibilitychange', f); res(); } };
      document.addEventListener('visibilitychange', f);
    });
  };
  var store = function (area) {
    return {
      get: function (k) { try { return window[area].getItem('vk_' + k); } catch (e) { return null; } },
      set: function (k, v) { try { window[area].setItem('vk_' + k, v); } catch (e) {} }
    };
  };
  var ls = store('localStorage'), ss = store('sessionStorage');
  var cooling = function (k, h) { var t = +ls.get(k); return !!t && Date.now() - t < h * 36e5; };
  var tier = function () {
    var w = innerWidth;
    return w <= CONFIG.mobileMax ? 'mobile' : w <= CONFIG.tabletMax ? 'tablet' : 'desktop';
  };
  var X = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var CHEV = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

  var last = 0, modalOpen = false;
  var canShow = function () {
    return !modalOpen && Date.now() - last >= CONFIG.gap && Date.now() - (+ss.get('sl') || 0) >= CONFIG.quietAfterLink;
  };
  async function quiet() {
    for (var i = 0; i < 40 && !canShow(); i++) await sleep(2000);
    return canShow();
  }

  /* ===================== Styling ===================== */
  var V = 'var(--surface,#1e1e20)', BD = 'var(--border,#343437)', TX = 'var(--text,#f4f4f5)', MU = 'var(--muted,#a1a1aa)';
  var EASE = 'cubic-bezier(.22,1,.36,1)';
  var css = [
    q('t') + '{position:sticky;top:0;z-index:60;display:grid;grid-template-rows:0fr;transition:grid-template-rows .6s ' + EASE + ';background:' + V + ';border-bottom:1px solid ' + BD + ';box-shadow:0 2px 14px rgba(0,0,0,.18)}',
    q('t') + q('o') + '{grid-template-rows:1fr}',
    q('ti') + '{position:relative;min-height:0;overflow:hidden}',
    q('tw') + '{max-width:1200px;margin:0 auto;padding:8px 46px}',
    q('hd') + '{display:flex;align-items:center;justify-content:space-between;height:22px;margin-bottom:2px}',
    q('lb') + '{position:absolute;top:7px;left:16px;font:500 11px/1 system-ui,sans-serif;color:' + MU + '}',
    q('hd') + ' ' + q('lb') + '{position:static}',
    q('x') + '{position:absolute;top:8px;right:10px;width:30px;height:30px;border-radius:50%;border:1px solid ' + BD + ';background:var(--surface-2,#2a2a2d);color:' + TX + ';display:grid;place-items:center;cursor:pointer;padding:0}',
    q('x') + q('xi') + '{position:static;width:22px;height:22px}',
    q('x') + q('xc') + '{top:50%;right:14px;margin-top:-13px;width:26px;height:26px;background:#000;color:#fff;border-color:rgba(255,255,255,.3)}',
    q('t') + ' ' + q('lb') + '{top:8px;left:14px}',
    '@media (max-width:' + CONFIG.mobileMax + 'px){' + q('tw') + '{padding:4px 30px 4px 6px}' + q('x') + q('xc') + '{right:4px}' + q('t') + ' ' + q('lb') + '{display:none}}',
    q('x') + ':hover{border-color:var(--accent,#f59e0b)}',
    q('s') + '{display:flex;justify-content:center;align-items:center;max-width:100%;overflow:hidden}',

    q('r') + '{position:fixed;top:50%;z-index:45;width:178px;padding:6px 8px 8px;background:' + V + ';border:1px solid ' + BD + ';border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.25);opacity:0;transition:opacity .6s,transform .6s ' + EASE + '}',
    q('rl') + '{left:calc(50vw - 810px);transform:translate(-40px,-50%)}',
    q('rr') + '{right:calc(50vw - 810px);transform:translate(40px,-50%)}',
    q('r') + q('o') + '{opacity:1;transform:translateY(-50%)}',
    '@media (max-width:' + (CONFIG.rails.minWidth - 1) + 'px){' + q('r') + '{display:none}}',

    q('b') + '{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;display:flex;justify-content:center;pointer-events:none}',
    q('bw') + '{position:relative;max-width:100%;pointer-events:auto;transform:translateY(calc(100% + 44px));transition:transform .6s ' + EASE + '}',
    q('bw') + q('o') + '{transform:none}',
    q('bw') + q('o') + q('c') + '{transform:translateY(100%)}',
    q('bp') + '{position:relative;padding:22px 8px calc(8px + env(safe-area-inset-bottom,0px));background:' + V + ';border:1px solid ' + BD + ';border-bottom:0;border-radius:14px 14px 0 0;box-shadow:0 -8px 30px rgba(0,0,0,.25)}',
    q('bh') + '{position:absolute;top:-30px;left:50%;margin-left:-30px;width:60px;height:30px;border:1px solid ' + BD + ';border-bottom:0;border-radius:10px 10px 0 0;background:' + V + ';color:' + TX + ';display:grid;place-items:center;cursor:pointer;padding:0}',
    q('bh') + ' svg{transition:transform .4s}',
    q('c') + ' ' + q('bh') + ' svg{transform:rotate(180deg)}',

    q('m') + '{position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:16px;background:rgba(0,0,0,.62);opacity:0;visibility:hidden;transition:opacity .35s,visibility .35s}',
    q('m') + q('o') + '{opacity:1;visibility:visible}',
    q('mp') + '{position:relative;max-width:100%;padding:34px 18px 18px;background:' + V + ';border:1px solid ' + BD + ';border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.45);transform:translateY(24px) scale(.95);transition:transform .45s ' + EASE + '}',
    q('m') + q('o') + ' ' + q('mp') + '{transform:none}',
    '@media (prefers-reduced-motion:reduce){' + q('t') + ',' + q('r') + ',' + q('bw') + ',' + q('m') + ',' + q('mp') + ',' + q('bh') + ' svg{transition:none!important}}'
  ].join('\n');

  /* ===================== Ad loaders ===================== */
  var chain = Promise.resolve();   // banner codes share one global, so they load one after another

  function placeholder(host, spec) {
    host.innerHTML = '<div style="display:grid;place-items:center;width:' + spec.w + 'px;max-width:100%;height:' + spec.h +
      'px;border:2px dashed ' + BD + ';border-radius:8px;color:' + MU + ';font:500 13px system-ui,sans-serif">' + spec.w + ' x ' + spec.h + '</div>';
  }
  function native(host, spec) {
    var box = document.createElement('div');
    box.id = spec.id; host.appendChild(box);
    var s = document.createElement('script');
    s.async = true; s.setAttribute('data-cfasync', 'false'); s.src = spec.src;
    host.appendChild(s);
  }
  function loadBanner(host, spec) {                        // sync "iframe" code, injected safely
    host.style.minWidth = spec.w + 'px'; host.style.minHeight = spec.h + 'px';
    chain = chain.then(function () {
      return new Promise(function (resolve) {
        if (!host.isConnected) return resolve();
        var ow = document.write, owl = document.writeln, finished = false;
        var opts = { key: spec.key, format: 'iframe', height: spec.h, width: spec.w, params: {} };
        var grab = function () {
          host.appendChild(document.createRange().createContextualFragment(Array.prototype.join.call(arguments, '')));
        };
        var done = function () { if (finished) return; finished = true; document.write = ow; document.writeln = owl; resolve(); };
        window.atOptions = opts;
        document.write = grab; document.writeln = grab;
        var s = document.createElement('script');
        s.src = spec.src; s.onload = done; s.onerror = done;
        host.appendChild(s);
        setTimeout(done, 8000);
        setTimeout(function () {                           // safety net if nothing rendered
          if (!host.isConnected || host.querySelector('iframe')) return;
          var f = document.createElement('iframe');
          f.width = spec.w; f.height = spec.h; f.scrolling = 'no'; f.style.border = '0';
          f.srcdoc = '<!doctype html><html><body style="margin:0"><script>atOptions=' + JSON.stringify(opts) +
            ';<\/script><script src="' + spec.src + '"><\/script></body></html>';
          host.appendChild(f);
        }, 4000);
      });
    });
  }
  function mount(host, spec) {
    if (CONFIG.testMode) return placeholder(host, spec);
    if (spec.type === 'native') native(host, spec); else loadBanner(host, spec);
  }
  function ifEmpty(host, fn) {                             // no blank boxes
    if (CONFIG.testMode) return;
    setTimeout(function () { if (!host.querySelector('iframe,img,a,video,canvas')) fn(); }, 10000);
  }
  var closeBtn = function (inline) {
    var b = make('button', inline ? 'x xi' : 'x', X);
    b.type = 'button'; b.setAttribute('aria-label', 'Close'); return b;
  };
  var tag = function (el, label) { el.setAttribute('role', 'complementary'); el.setAttribute('aria-label', label); };
  var onFrames = function (fn) { requestAnimationFrame(function () { requestAnimationFrame(fn); }); };

  /* ===================== 1) Top dock (very top of the site, sticky, navbar sticks below it) ===================== */
  async function runTop() {
    var c = CONFIG.top;
    if (!c.on || cooling('top', c.cooldownHours)) return;
    await sleep(c.delay); await visible();
    if (!(await quiet())) return;
    var spec = c[tier()];
    if (!spec) return;

    var nav = document.querySelector(CONFIG.navSelector);
    var wrap = make('div', 't'), inner = make('div', 'ti'), box = make('div', 'tw');
    var label = make('span', 'lb'); label.textContent = 'Sponsored';
    var close = make('button', 'x xc', X); close.type = 'button'; close.setAttribute('aria-label', 'Close');
    var host = make('div', 's');
    box.appendChild(host);
    inner.appendChild(label); inner.appendChild(close); inner.appendChild(box); wrap.appendChild(inner);
    tag(wrap, 'Sponsored');
    document.body.insertBefore(wrap, document.body.firstChild);   // above the navbar

    /* Dock sticks at the very top; the navbar sticks right below it.
       It only stops sticking if it grows taller than CONFIG.top.stickyMaxFraction of the screen. */
    var sync = function () {
      var stuck = wrap.offsetHeight <= innerHeight * c.stickyMaxFraction;
      wrap.style.position = stuck ? 'sticky' : 'static';
      if (nav) nav.style.top = stuck ? wrap.offsetHeight + 'px' : '';
    };
    if (window.ResizeObserver) new ResizeObserver(sync).observe(wrap);
    addEventListener('resize', sync);
    var shut = function (remember) {
      wrap.classList.remove(P + 'o');
      if (remember) ls.set('top', Date.now());
      setTimeout(function () {
        wrap.remove(); if (nav) nav.style.top = ''; removeEventListener('resize', sync);
      }, 800);
    };
    close.addEventListener('click', function () { shut(true); });
    mount(host, spec);
    onFrames(function () { wrap.classList.add(P + 'o'); });
    last = Date.now();
    ifEmpty(host, function () { shut(false); });
  }

  /* ===================== 2) Side rails (very wide screens only) ===================== */
  async function runRails() {
    var c = CONFIG.rails;
    if (!c.on || cooling('rails', c.cooldownHours) || innerWidth < c.minWidth) return;
    await sleep(c.delay); await visible();
    if (innerWidth < c.minWidth || !(await quiet())) return;

    var items = [['rl', c.left]];
    if (innerHeight >= c.rightMinHeight) items.push(['rr', c.right]);
    items.forEach(function (it) {
      var el = make('div', 'r ' + it[0]), hd = make('div', 'hd'), label = make('span', 'lb'), host = make('div', 's');
      label.textContent = 'Sponsored';
      var close = closeBtn(true);
      hd.appendChild(label); hd.appendChild(close); el.appendChild(hd); el.appendChild(host);
      tag(el, 'Sponsored'); document.body.appendChild(el);
      var shut = function (remember) {
        el.classList.remove(P + 'o');
        if (remember) ls.set('rails', Date.now());
        setTimeout(function () { el.remove(); }, 700);
      };
      close.addEventListener('click', function () { shut(true); });
      mount(host, it[1]);
      onFrames(function () { el.classList.add(P + 'o'); });
      ifEmpty(host, function () { shut(false); });
    });
    last = Date.now();
  }

  /* ===================== 3) Centre modal ===================== */
  async function runCenter() {
    var c = CONFIG.center;
    if (!c.on || ss.get('mid')) return;
    var t0 = Date.now();
    await new Promise(function (res) {
      var fired = false;
      var go = function () { if (!fired) { fired = true; removeEventListener('scroll', onScroll); res(); } };
      var onScroll = function () {
        var max = document.documentElement.scrollHeight - innerHeight;
        if (max > 0 && scrollY / max * 100 >= c.scrollPct && Date.now() - t0 >= c.scrollMinDelay) go();
      };
      addEventListener('scroll', onScroll, { passive: true });
      setTimeout(go, c.delay);
    });
    await visible();
    if (!(await quiet())) return;

    var veil = make('div', 'm'), panel = make('div', 'mp'), label = make('span', 'lb');
    label.textContent = 'Sponsored';
    var close = closeBtn(false), host = make('div', 's');
    panel.appendChild(label); panel.appendChild(close); panel.appendChild(host); veil.appendChild(panel);
    veil.setAttribute('role', 'dialog'); veil.setAttribute('aria-modal', 'true'); veil.setAttribute('aria-label', 'Sponsored');
    document.body.appendChild(veil);

    var prevFocus = document.activeElement, prevOverflow = document.documentElement.style.overflow;
    var shut = function () {
      if (!modalOpen) return;
      modalOpen = false; last = Date.now();
      veil.classList.remove(P + 'o');
      document.documentElement.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
      setTimeout(function () { veil.remove(); }, 500);
    };
    var onKey = function (e) { if (e.key === 'Escape') shut(); };
    close.addEventListener('click', shut);
    veil.addEventListener('click', function (e) { if (e.target === veil) shut(); });
    document.addEventListener('keydown', onKey);

    modalOpen = true; ss.set('mid', '1');
    document.documentElement.style.overflow = 'hidden';
    mount(host, c.ad);
    onFrames(function () { veil.classList.add(P + 'o'); close.focus({ preventScroll: true }); });
    ifEmpty(host, shut);
  }

  /* ===================== 4) Bottom dock ===================== */
  async function runBottom() {
    var c = CONFIG.bottom;
    if (!c.on) return;
    await sleep(c.delay); await visible();
    if (!(await quiet())) return;
    var t = tier(), spec = c[t];
    if (!spec) return;

    var root = make('div', 'b'), bw = make('div', 'bw'), panel = make('div', 'bp');
    var handle = make('button', 'bh', CHEV), label = make('span', 'lb'), host = make('div', 's');
    handle.type = 'button'; label.textContent = 'Sponsored'; label.style.top = '6px';
    panel.appendChild(label); panel.appendChild(host);
    bw.appendChild(handle); bw.appendChild(panel); root.appendChild(bw);
    tag(root, 'Sponsored'); document.body.appendChild(root);

    var loaded = false;
    var load = function () {                               // load only once it is actually visible
      if (loaded) return; loaded = true;
      mount(host, spec); ifEmpty(host, function () { root.remove(); });
    };
    var set = function (collapsed) {
      bw.classList.toggle(P + 'c', collapsed);
      handle.setAttribute('aria-expanded', String(!collapsed));
      handle.setAttribute('aria-label', collapsed ? 'Show' : 'Hide');
      ss.set('bc', collapsed ? '1' : '0');
      if (!collapsed) load();
    };
    handle.addEventListener('click', function () { set(!bw.classList.contains(P + 'c')); });
    var saved = ss.get('bc');
    var startCollapsed = saved === null ? (t === 'mobile' && c.mobileStartsCollapsed) : saved === '1';
    onFrames(function () { bw.classList.add(P + 'o'); set(startCollapsed); });
    last = Date.now();
  }

  /* ===================== Start ===================== */
  function start() {
    var st = document.createElement('style');
    st.textContent = css; document.head.appendChild(st);
    runTop(); runRails(); runCenter(); runBottom();
  }
  if (document.readyState === 'complete') start(); else addEventListener('load', start);
})();
