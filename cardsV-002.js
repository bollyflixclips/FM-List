
/* =====================================================
   1. EDIT HERE: site info
   ===================================================== */
const SITE = {
  name: "Where To Watch List",
  initials: "",                 // text shown in the logo tile
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyX6DGZ9bW3y9u7mJrzcykskuAAvNK6AC2LbXah5O8AYznvwmES_w8KrAsJ0W7mZpon_d3-Wk0UQ1FQ0ChqGwUV6o6t6LjMdF1-4MbEEYuIQULwYAL-7KJ8ynY6MJghJPNELdt-4ikG5bb85OJNMHeIpdkU8MjNoqS7hAi3YH4wE8I1q1Q3bgCgclFxAPR/s1600/logo.png",                       // optional: logo image URL (replaces the initials)
  title: "Where To Watch List",
  tagline: "A curated directory of the best sites, For You To Check Out",
  footer: "Find top sites for entertainment, and more.",
  disclosure: "Some links open a sponsored page first.",
  /* Smart links, used in rotation: every new smart-link click uses the NEXT link in this list,
     and it never repeats the previous one. Add 5-6 links here. */
  smart: [
    "https://www.profitableratecpmnetwork.com/ft0366kf?key=a2018bee0d93064ca2101bfb115514f9",
    "https://www.profitableratecpmnetwork.com/dvezps5nyb?key=86a0dd0eaddaee8723f9390bf11411c3",
    "https://www.profitableratecpmnetwork.com/n0p8fsn198?key=b8670bf4ca8feb3f4a8d5202e2507527",
    "https://www.profitableratecpmnetwork.com/wbkr21v3?key=240e5a544d061b3da5af447e007258a7"
  ]
};

/* =====================================================
   2. EDIT HERE: categories + cards
   Category icon = any Font Awesome class (fontawesome.com/icons)
   Card: name, url, logo (image URL, leave "" for placeholder),
         desc, price ("free" | "paid"), score (0-10),
         star (true = filled star, false/omitted = empty star; set by you, not clickable),
         tag (optional small badge on the card, e.g. "trusted" or "new")
   Tip: wide transparent PNG/SVG logos look best (TBCPL style).
   ===================================================== */
const ALL_ICON = "fa-solid fa-table-cells-large";

const CATEGORIES = [
  { id: "Streaming Sites", name: "Streaming Sites", icon: "fa-solid fa-tv", sites: [
    { name: "1Show",   url: "https://www.1shows.org/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0K52807W8pqIpmHCha5CzxQGKJeHsIerted24-LTOXM7XMb-Z9j7SUf-oL9NyXMM6rNm6rYgJEqeDr-LXjYsqMNVD8HGXRyLAaCHou3dv9x5MAtGx7a2PfZyRPDFfnRyC2lomC7awr8TL8Ds3yjAoFljbz4vhtPhabrNLQIa-0rGor1Rue_mCTywgVPQ_/s1600/1shows.png", desc: "Movies TV and more", price: "free", score: 10, star: true, tag: "trusted" },
    { name: "HollymoviesHD",   url: "https://hollymoviehd.cc/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD6m9FDi4jHVRLMNW0pwFquFOnz207KVOej6dURsSnFoyKkG8eSA8K_IwrMDcvNUmAZf8RoIdBdkWA1D82EX6Tzt668OS6iwCTZm42heZjZMk_yDiMTyAzpBrF6ufYb7WnMbOxpsgl4UjwzvF1iYsKqGBkuidQSoOws4rqXDmZ_7TytZD0ouYPpS-B9q9o/s1600/hollymoviehd.png", desc: "Movies TV and more", price: "paid", score: 9, star: true, tag: "trusted" },
    { name: "Prmovies", url: "https://prmovies.coffee/", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZXuy5hVwJo2J-hK6mosuAxhhT-fSFcWAuDcSqE_KQg6ARPrUDb0cNMCe2tjc556NGFvp2HGlGtbab2OcbGXna0tFLLq-bg7D5XTTzmmA6slm9ZMbtL00CVMU3J9LZBatU20DJfb5sq9Tuf-QQmWuGmi32GnoN8i8ChNLF2EZSZy08X8QNm1g0B8til_-4/s1600/pr-movies.png", desc: "Movies TV and more", price: "free", score: 9, star: true, tag: "trusted" },
    { name: "Desicinemas",  url: "https://www.desicinemas.pk/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZIbL8QpXtfXiz9rOMLbkNgOY9ViJdeEqZg7QRnVeECcyLFwF8JI9NcNs9gfJ1lKlLMq1gVlevzETHq-ch3c8ZsSBLbz2SkCrGxhs6_8OqqP7GzgluPvp0hroy0Wd4p0HJZqOLPHQrrlLepVlzaNr-yWHIqEkJOU9Dxxt-j8C8lL3xxiPTXemTxWfhETxc/s1600/desicinemas.png", desc: "Movies TV and more", price: "free", score: 8 },
    { name: "Moviesbazar",  url: "https://www.moviesbazar.su/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvpo9YjFfK6nGpHiBckDItUx-vI7maQuhe0Y8fQqzAUyFOE8bPtM8YqdaAbWIZ7bW9eCiGFwKR0iBvNyIdLwxDpo0eTtda0lXTXZOHsZXPh5-7IJA_0Vng2h6jbauYToPagHbYbcykdPWvdzVzxFDcOs3eIP3sY92NRkTXbdwrkw0g3aUvGti0QHC0q1yH/s1600/moviesbazar.png", desc: "Movies TV and more", price: "paid", score: 8 },
    { name: "NetMirror",  url: "https://net77.cc/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirTl_pXAQutY81LeCyWzENDGokiw757e-8pzEmjD9mJWPHE3_8t_Qs1gwwR1wGgNAQ9qKzA23jqn5bFCED7_wRxhxO-E102y96D_4Ws6d3oPx9qmA5bOsoGvJNzzDQn_kxn_owvvyzvyvEoSzezLoUpnJlSmcTVDBigVI9cB09inVJzUsUHy-j8_UN12Fy/s1600/netmirror.png", desc: "Movies TV and more", price: "paid", score: 8 },
    { name: "Netnaija",  url: "https://netnaija.film/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM_Q2Aa_2OYcLgATFShNRtZv8MMYPsIjL-0AOBddkU4Df5xf-tzCPbyssbbW3Ha6p2K2AYuyS8whHK_Tvzz2M6kwW080rCNfa_mHhLKemgbqWp7-iwlzvT9weUQYNBtCKRZyLHuLBztu5N5Iq8-vtbX0u9SuyY4_jVGz1okzRGzLJNB6CZidjSrrujH0-A/s1600/netnaija.png", desc: "Movies TV and more", price: "paid", score: 8 },
    { name: "Multimovies",  url: "https://multimovies.wtf/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig__FK5IjE9RaaAdVSuLl2OTCBDoqgrrWcTWGCZgdYsgOHt0yNxC0xnbCNzRonb3yjz8cBrHHzt6oavAeB7r3laFrKAR3Of2TYOVVAqVdjHTrGyD42eAmKS579I04f-KN37M9CCAzEXZzlvUuVCjPnS1zqyT58edzhIgY4FZaRqlCwfI2x3VHG4iCBaonU/s1600/multi-movies.jpg", desc: "Movies TV and more", price: "paid", score: 8 },
    { name: "Hindilinks4u",  url: "https://hindilinks4u.cafe/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhU1UKTV74MTEIMnThbaDHtzS3Cfaw9Ry3ymWUCqM-RxTD7opMFUi6ItSKOfR8dwIdCGiKZwcSQrHkw8QyJg7qB-78GM56n19YhNKwWZcocC7NUkWQng5V3kmKSyGnXHU8Vo9m2e6ldgZ1xLv6jRdXSrxkHwRkh36v1rTrdqyR4651zuKoA5jKFO2quXr6/s1600/hindilinks4u.png", desc: "Movies TV and more", price: "paid", score: 8 },
    { name: "Cinephile",  url: "https://cinephile.live/",  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKg_XSE97BqlwktotMxcSlxUBz4otJtuXUa4t8390UxCXHNBm3QhPVJfbfRwSdOZFAHsEc2X2ywvQA6DEHh2OScpWgJsGFV6PgPIvD3VWbRooWhZLMvLRBOqsg-DjrKatRCuYNQvCSF83qnHqdTflh684wRqD3PZk5tcUyAoxIa8vuGWeW8dWAOD5Aa4NA/s1600/cinephile.png", desc: "Movies TV and more", price: "paid", score: 8 }
  ]},
  { id: "Streaming Apps", name: "Streaming Apps", icon: "fa-brands fa-google-play", sites: [
    { name: "Playtorrio",   url: "https://playtorrio.pages.dev/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0AS7WgSc5wE71Ofuyj8LjaVCUpZ8PMv-mpQS8c0XGSabpT94xvZuVPMXLAVv3bh9xhYDoIZHmwP63Z1zU6tzEQNp5xvuqsvDSpy3HBqoBuc86eruVBFATstBggVSIDaAPYkfcTbMznThmDCmjSzPNZj_6iWfkv_ynRMk326U0UXkVsl35ZIIwojEvAzDb/s1600/playtorrio.png", desc: "4K Streaming Movies TV and More", price: "free", score: 9, star: true },
    { name: "Anivortex",    url: "https://anivortex.in/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtLBp5_tBVCX9FvMghKrUAYoNS81udpl3Wz8wJsVJtF1LDMdaUIofPlU38zy75m6RwdJULLWpbrvrBReUq4VkbBU9PdimYI5SK6BpUAA699Q8MMr7tpfxD9IOFcX8KPSuqq15VqbDiKlz2wYvMxazmn-HeX6ZMM0zTOQ4nc_SOxjD9xQd0v4d_WYBjxrfJ/s1600/anivortex.png", desc: "4K Streaming Movies TV and More", price: "free", score: 8 },
    { name: "Hdobox",   url: "https://hdobox.net/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzARw55m_dfIXb8G6yGCWQWKY0bI9p6HDixRPqO6PS443Pcz0ix9gBN0nl8yJEbK1a5D-VWT1fKfcOE3bbIHGluarHbKBYeVxDovUb5n7WiXs8nTeHDDZWFBdeW9MBM6Pxr4gcUWieKONlO7m2lflME57XjvCnLdOxkXDWxF9kPwrzAaJMJKgNDU5fZ9g5/s1600/hdobox.png", desc: "4K Streaming Movies TV and More", price: "paid", score: 7 },
    { name: "Beetvs",   url: "https://beetvs.com.co/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlyovWA9gX3Gcd8gBKdcY7pqKhkW8JGHKxEyPXwmp3HLPfbCHTg_URJoaCQ-CSMa8avKvLwxNXGgkDZAGkILTZOB9td8YmgAN22_dyIPH-GuF7KB8CYowdPFgyzkwHDBm_daDnS-qhzQfs98nzyL3-1mb0dPU_Q_EEnyCj_Gb8h6fN7ntgoBcYW05wkWdb/s1600/beetv.png", desc: "4K Streaming Movies TV and More", price: "paid", score: 7 },
    { name: "Moviesbox",   url: "https://www.moviesbox.com.co/home/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8SHm7iJoJNMD7kMLbtwQQRaOBjeDCHpr3VjC7E1FWWIYmt3Nxt8QZ0mI3qcjHcenTmRarGPk-aAwQgttfXpIZDYx0z64Phwpf6-iX_howmDLimUIwtbqKJRcbT-GWOAzx0qerUDK7FJZJ4Mro0jeoe5NlDdbrpBy_wuqnMB5SUr2Lz6n6NaSJtDTtcsxn/s1600/moviebox.png", desc: "4K Streaming Movies TV and More", price: "paid", score: 7 },
    { name: "NetMirror",   url: "https://net77.cc/mobile/app-info.php",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivnJ_LflhGBp58zdcCY6geN4leAAlUQHUBZy2YnIOBaNRCtqg8vqop6CwdfR3h-9LJK1mLAqTuLyhGY3YBk1zuPxq14m8bjxxA8dRpc-7K3MVgtSPsp952raKlmt5iHRvlBPuf_wl1PA1_GzHN9ifzEImHPf_cctrtOQQcOfpD2RAFuUhWMJAPDo8EEDuW/s1600/netmirror.png", desc: "4K Streaming Movies TV and More", price: "paid", score: 7 },
    { name: "Pikashowtv",   url: "https://pikashowtv.in/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3VEmt3SmOj9lQgzj7bbzSWY6VlniNQo9GTGSSc7MGj1Zwbg_7POLEaDilGz2lJ_VQGmpwtxdZAMZGxGlDulT8Fk5_vUIOEr-0U2VudFyO9YlVlSz0FmUP1F3oMLvaz6xDXmuj-CSZEN0A-BdWs-o5IY45syEm_8Ym7cwNUXC3kLRWypQuSC67RzNFa_h/s1600/pikashow.png", desc: "4K Streaming Movies TV and More", price: "free", score: 6 }
  ]},
  { id: "Downloading Sites", name: "Downloading Sites", icon: "fa-solid fa-download", sites: [
    { name: "Bollyflix ",    url: "https://bollyflix.photo/",   logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj648YBuiFJ967eyBifaE8nos0udqS7llOIuODVa_4Rhw-q8LblUF9H3skY75m1FS1lHz4fVCP3iX8rLfwa-Rwt2PTTDR_kuln0eNOL_v1FX2TWV3oBb-IvdjYyyzdFTwun6TJE6A36JP94mCk-rn_SPHarnjAHOsXqZsuLtUYJPVGM2hpwmjndvhrcFn6A/s1600/Bollyflix-movies.png", desc: "Movies TV and More", price: "Free", score: 9, star: true },
    { name: "Vega Movies",  url: "https://vegamovies.gallery/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNTIIMNPOhdzS_bFnNl9LeSgHxpWfHioodzubN8cxu_ezq6COffitkUnLtMyw813NG0DUkC0qTtiv6GOzNRY0tq3aWKQuY8br34ksL433n_H15utf6i98yQ3VS9xA5cXSiOM4NFR2J9Gno8oS4-Jb6LRQ3f4D_Wk35fLYlCClJ_602hHKNqG6mxezLiBZv/s1600/vegamovies.png", desc: "Movies TV and More", price: "Free", score: 8 },
    { name: "Moviesmod",  url: "https://moviesmod.ai.in/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZm5cHeXZUhyphenhyphenPTrK5TqBXMIhNgQlIgNmYDZA1Gr0owYg64MRB1-D57Lu5ULGGtkTPSuxbhRlVr4K-N2zGMDHrZkPC5XYrws-trfPNN1yvs54gjpCDnNmmfdMHbwTikYzmaThZXepW6lBI99MsrWQ6JVdYPX5_XwM_1iKF9OCSDuld6NglYMzZqII3yHanT/s1600/moviesmod.png", desc: "Movies TV and More", price: "Free", score: 8 },
    { name: "HDhub4u",  url: "https://new7.hdhub4u.cl/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCyyspIRJqSE6EXli4Mm8RmKkJ11tml51wSO-ifZz4BTE32mwK_z38Qs5ddr0RmH8h-el-kKSCHd09J-hHeEw4RTDxXTlN7cmmolFFwvwMPlvSz-xVreBEWdsXrShiMlMXAObdlFLMloKwyyA5X9VXRtm8e9KYkLDjHXAbpBRzFMCvQrCDlBuHt-nKpf0z/s1600/hdhub4u.png", desc: "Movies TV and More", price: "Free", score: 8 },
    { name: "Kmmovies",  url: "https://kmmovies.cfd/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGnOPeIE3oDcSyzxP0q6hvOPEhdy-SnBWkuVLr9LLiyPB7vSzw3xjvuBWd5xpaHY3RSkLg76yYwKXv_A4hG2zWrT8WLu-haMYt1_tLQixCXP6p71vHgXO4HHWrFNDqj8MaTBiupqZPXisKKlMANHEpowCZ7Hu7mQnXojcB2kBXKlcejRAr-fZfl9Y-VqwL/s1600/kmmovies.png", desc: "Movies TV and More", price: "Free", score: 8 },
    { name: "Yupflix",    url: "https://yupflix.com/",    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaN8MpHP52fGzY0FDz5h7Gj5A-dt5tyTQJjTzc5PiCR8N2ZnAQRQNs6m0b-mr7YI5Rxe0wCE2jWU4eGxoLVEn3T_ctig6Q6atsMT-g9Y1W5Su8ILq9yvY-JSsNRgb2djvmI5LHZJrls6c9IFdLVamD_DLNsIDmnsYaX1Uh3vgwFMtEFvnMm2ksgGzQZleb/s1600/yupflix.png", desc: "Movies TV and More", price: "Free", score: 8 }
  ]},
  // { id: "Paid Streaming Sites", name: "Paid Streaming Sites", icon: "fa-solid fa-sack-dollar", sites: [
  //   { name: "Watch Place",  url: "https://example.com/watch",  logo: "", desc: "Dummy description for an entertainment site.", price: "free", score: 8 },
  //   { name: "Play Zone",    url: "https://example.com/play",   logo: "", desc: "Dummy description for games and fun.", price: "free", score: 7 },
  //   { name: "Listen Up",    url: "https://example.com/listen", logo: "", desc: "Dummy description for music and podcasts.", price: "paid", score: 7 },
  //   { name: "Read Nook",    url: "https://example.com/read",   logo: "", desc: "Dummy description for reading and stories.", price: "free", score: 6 }
  // ]}
];

/* =====================================================
   3. RENDERING (no need to edit below)
   ===================================================== */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const COLORS = ["#6366f1", "#ec4899", "#14b8a6", "#f97316", "#8b5cf6", "#0ea5e9", "#22c55e", "#ef4444"];
const colorFor = (s) => COLORS[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % COLORS.length];
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return u; } };
/* Placeholder image used until you add a real logo URL */
const placeholder = (name) => "https://placehold.co/96x96/" + colorFor(name).slice(1) + "/ffffff?text=" + encodeURIComponent(name.trim().charAt(0).toUpperCase());

function avatar(name) {
  return '<div class="card-logo avatar" style="background:' + colorFor(name) + '">' + esc(name.trim().charAt(0).toUpperCase()) + "</div>";
}

function cardHTML(s, cat, idx) {
  const price = s.price === "paid" ? "paid" : "free";
  const star = s.star === true;
  return '<a class="card" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" title="' + esc(s.name) + '" data-cat="' + esc(cat) + '" data-idx="' + idx + '">' +
    (s.tag ? '<span class="tag">' + esc(s.tag) + "</span>" : "") +
    '<span class="star' + (star ? " on" : "") + '" role="img" aria-label="' + (star ? "Top rated" : "Not top rated") + '"><i class="' + (star ? "fa-solid" : "fa-regular") + ' fa-star" aria-hidden="true"></i></span>' +
    '<div class="card-logo-wrap">' +
      '<img class="card-logo' + (s.logo ? "" : " ph") + '" src="' + esc(s.logo || placeholder(s.name)) + '" alt="' + esc(s.name) + ' logo" loading="lazy" data-name="' + esc(s.name) + '">' +
    "</div>" +
    '<div class="card-domain"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i><span>' + esc(hostOf(s.url)) + "</span></div>" +
    '<div class="card-note" hidden>Click once again to visit the site.</div>' +
    '<span class="sr-only"><span class="card-name">' + esc(s.name) + '</span> <span class="card-desc">' + esc(s.desc) + '</span> <span class="badge ' + price + '">' + (price === "paid" ? "Paid" : "Free") + '</span> <span class="score">' + esc(s.score) + "/10</span></span>" +
  "</a>";
}

/* Broken image -> letter avatar */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName !== "IMG" || !img.dataset.name) return;
  const d = document.createElement("div");
  d.className = "card-logo avatar";
  d.style.background = colorFor(img.dataset.name);
  d.textContent = img.dataset.name.trim().charAt(0).toUpperCase();
  img.replaceWith(d);
}, true);

function renderStatic() {
  document.title = SITE.title;
  ["#logoTile", "#footLogo"].forEach((id) => {
    $(id).innerHTML = SITE.logo ? '<img src="' + esc(SITE.logo) + '" alt="">' : esc(SITE.initials);
  });
  $("#brandName").textContent = SITE.name;
  $("#footName").textContent = SITE.name;
  $("#heroTitle").textContent = SITE.title;
  $("#heroText").textContent = SITE.tagline;
  $("#footText").innerHTML = esc(SITE.footer) + (SITE.disclosure ? "<br><small>" + esc(SITE.disclosure) + "</small>" : "");
  $("#copy").innerHTML = "&copy; " + new Date().getFullYear() + ' <a href="#top">' + esc(SITE.name) + "</a>, All rights reserved";
}

function renderCats() {
  const pill = (id, icon, name, on) => '<button class="pill" data-cat="' + id + '" aria-pressed="' + on + '"><i class="' + icon + '" aria-hidden="true"></i>' + esc(name) + "</button>";
  $("#cats").innerHTML = pill("all", ALL_ICON, "All Categories", true) + CATEGORIES.map((c) => pill(c.id, c.icon, c.name, false)).join("");
  $("#sections").innerHTML = CATEGORIES.map((c) =>
    '<section class="section" id="sec-' + c.id + '" data-cat="' + c.id + '"><h2>' + esc(c.name) + '</h2><div class="grid">' + c.sites.map(function (s, i) { return cardHTML(s, c.id, i); }).join("") + "</div></section>"
  ).join("");
}

$("#cats").addEventListener("click", (e) => {
  const b = e.target.closest(".pill");
  if (!b) return;
  const id = b.dataset.cat;
  document.querySelectorAll(".pill").forEach((p) => p.setAttribute("aria-pressed", p === b));
  document.querySelectorAll(".section").forEach((s) => { s.hidden = id !== "all" && s.dataset.cat !== id; });
  b.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
});

/* =====================================================
   Smart link
   Click 1 on a card -> opens the next smart link + shows "click once again"
   Click 2 on the card -> goes to the real site, card resets to step 1
   Links rotate in order, never the same one twice in a row.
   ===================================================== */
const kv = (area) => ({
  get: (k) => { try { return window[area].getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { window[area].setItem(k, v); } catch (e) {} }
});
const lsx = kv("localStorage");

const withProto = (u) => /^https?:\/\//i.test(u) ? u : "https://" + String(u).replace(/^\/\//, "");
const SMART = (SITE.smart || []).filter(Boolean).map(withProto);

/* Rotation pointer: random start for each new visitor, then saved so it continues */
let smartIdx = parseInt(lsx.get("sl_i"), 10);
if (!Number.isFinite(smartIdx)) smartIdx = Math.floor(Math.random() * SMART.length);

function nextSmart() {
  if (!SMART.length) return null;
  const url = SMART[smartIdx % SMART.length];
  smartIdx = (smartIdx + 1) % SMART.length;
  lsx.set("sl_i", smartIdx);
  return url;
}

function resetCard(card) {
  card.dataset.armed = "";
  card.classList.remove("opened");
  card.querySelector(".card-note").hidden = true;
}

$("#sections").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

  /* 2nd click: let the link open the real site, then reset the card */
  if (card.dataset.armed === "1") {
    resetCard(card);
    return;
  }

  /* 1st click: pop the next smart link, arm the card */
  const url = nextSmart();
  if (!url) return;
  e.preventDefault();
  window.open(url, "_blank", "noopener");
  card.dataset.armed = "1";
  card.classList.add("opened");
  card.querySelector(".card-note").hidden = false;
});

/* =====================================================
   4. THEME: light / dark / system with full-screen reveal
   ===================================================== */
const root = document.documentElement;
const mq = matchMedia("(prefers-color-scheme: dark)");
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const resolve = (m) => (m === "system" ? (mq.matches ? "dark" : "light") : m);
const BG = { dark: "#0f0f10", light: "#f7f7f5" };

function paint(mode) {
  root.dataset.mode = mode;
  root.dataset.theme = resolve(mode);
  try { localStorage.setItem("theme-mode", mode); } catch (e) {}
  const i = ["light", "dark", "system"].indexOf(mode);
  $("#thumb").style.transform = "translateX(" + i * 34 + "px)";
  document.querySelectorAll("#modeSwitch button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.mode === mode));
}

function setMode(mode, origin) {
  const next = resolve(mode);
  if (next === root.dataset.theme || reduce.matches) return paint(mode);

  const r = origin.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const clip = ["circle(0px at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)"];
  const opts = { duration: 650, easing: "cubic-bezier(.65,0,.35,1)" };

  if (document.startViewTransition) {
    const t = document.startViewTransition(() => paint(mode));
    t.ready.then(() => root.animate({ clipPath: clip }, { ...opts, pseudoElement: "::view-transition-new(root)" })).catch(() => {});
  } else {
    /* Fallback: a coloured circle floods the screen, then the theme switches */
    const o = document.createElement("div");
    o.style.cssText = "position:fixed;inset:0;z-index:999;pointer-events:none;background:" + BG[next];
    document.body.appendChild(o);
    o.animate({ clipPath: clip }, opts).onfinish = () => { paint(mode); o.remove(); };
  }
}

$("#themeBtn").addEventListener("click", (e) => setMode(root.dataset.theme === "dark" ? "light" : "dark", e.currentTarget));
$("#modeSwitch").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) setMode(b.dataset.mode, b);
});
mq.addEventListener("change", () => { if (root.dataset.mode === "system") paint("system"); });

/* ---------- init ---------- */
renderStatic();
renderCats();
paint(root.dataset.mode);

