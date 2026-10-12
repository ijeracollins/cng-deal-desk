(function () {
  "use strict";

  /* ---------- icons ---------- */
  var P = function (d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; };
  var I = {
    back: P('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    menu: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    shield: P('<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    store: P('<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/>'),
    user: P('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'),
    bag: P('<path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 016 0v2"/>'),
    drop: P('<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>'),
    shieldOk: P('<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    yen: P('<circle cx="12" cy="12" r="9"/><path d="M8.5 7l3.5 5 3.5-5M12 12v5M9.5 13h5M9.5 15h5"/>'),
    cal: P('<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4M8 14h2M12 14h2M16 14h0M8 17h2M12 17h2"/>'),
    card: P('<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M6 15h4"/>'),
    dollar: P('<path d="M12 3v18M16 7.5c0-1.7-1.8-3-4-3s-4 1.1-4 3 1.8 2.6 4 3 4 1.1 4 3-1.8 3-4 3-4-1.3-4-3"/>'),
    doc: P('<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>'),
    check: P('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    checkc: P('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>'),
    alertc: P('<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.5"/>'),
    clip: P('<path d="M20 11l-8 8a5 5 0 01-7-7l8-8a3.5 3.5 0 015 5l-8 8a2 2 0 01-3-3l7-7"/>'),
    clipboard: P('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h6"/>'),
    handshake: P('<path d="M3 11l4-4 4 2 3-2 4 3 3 3-4 4-3 1-3-1-3 1-4-4z"/>'),
    lock: P('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>'),
    info: P('<path d="M12 11v6M12 7.5v.5"/>'),
    hourglass: P('<path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>'),
    plant: P('<path d="M12 21v-8M12 13c0-4-3-6-7-6 0 4 3 6 7 6zM12 13c0-3 2-5 6-5 0 3-2 5-6 5z"/>'),
    receipt: P('<path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6"/>'),
    wallet: P('<path d="M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2zM4 7l11-3v3M16 14h2"/>'),
    people: P('<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5M15 15c3 0 6 1.5 6 5"/>'),
    file: P('<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/>'),
    q: P('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-1 .7-1.5 1.2-1.5 2.5M12 17v.5"/>'),
    bell: P('<path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4"/>'),
    brief: P('<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>'),
    person: P('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>')
  };

  function status() {
    return '<div class="status"><span>9:41</span><span class="ico">'
      + '<svg width="18" height="12" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>'
      + '<svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M2 6a15 15 0 0120 0M6 10.5a9 9 0 0112 0M10 15a3 3 0 014 0"/></svg>'
      + '<span class="bat"></span></span></div>';
  }
  function row(icon, k, v, cls) {
    return '<div class="row"><span class="k">' + (icon ? I[icon] : '') + k + '</span><span class="v ' + (cls || '') + '">' + v + '</span></div>';
  }

  /* ---------- screens ---------- */
  var screens = [
    {
      say: "Buyer requirement is captured. Maize price and CNG fee are separate. Fee response is still open in this example.",
      html:
        '<div class="s navy-s">' +
        '<div class="navy">' + status() +
        '<div class="hdr"><span class="nav-ico">' + I.back + '</span><h1>BUYER REQUIREMENT</h1><span class="badge">ILLUSTRATIVE</span></div></div>' +
        '<div class="body" style="background:#f4f6f9">' +
        '<div class="card"><h2><span class="circ">' + I.store + '</span>BUYER DETAILS</h2>' +
        row('user', 'Buyer', 'Lira Miller Co.') +
        row('user', 'Decision-maker', 'A. Buyer') +
        row('bag', 'Quantity', '2 tonnes') +
        row('drop', 'Moisture', '12-13%') +
        row('shieldOk', 'Quality', 'Unbroken Grade A') +
        row('yen', 'Price', '1,350 UGX/kg delivery') +
        row('cal', 'Window', 'This week') +
        row('card', 'Payment', 'Bank/mobile money') +
        '</div>' +
        '<div class="card"><h2><span class="circ">' + I.dollar + '</span>CNG SERVICE FEE</h2>' +
        row('', 'Verification', 'UGX 25,000') +
        row('', 'Per accepted tonne', 'UGX 30,000') +
        row('', 'Minimum', 'UGX 25,000') +
        '<div class="row"><span class="k"><span class="circ" style="width:26px;height:26px">' + I.doc + '</span>Fee response</span><span class="open">OPEN</span></div>' +
        '</div></div>' +
        '<div class="foot g"><span style="display:flex;gap:10px;align-items:center">' + I.checkc + '</span><span>REQUIREMENT CAPTURED</span><span>›</span></div>' +
        '</div>'
    },
    {
      say: "Supply starts as REPORTED. It is not verified stock until evidence and checks are complete.",
      html:
        '<div class="s">' +
        '<div class="navy">' + status() +
        '<div class="hdr"><span class="nav-ico">' + I.back + '</span><h1 style="text-align:center;font-size:20px">BATCH / SUPPLY</h1>' +
        '<span style="width:40px;height:40px;border-radius:50%;background:#fff;display:grid;place-items:center"><svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:#0b2a4f;fill:none;stroke-width:2.4;stroke-linecap:round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></span></div>' +
        '<div style="text-align:right;padding:0 12px 0;margin-bottom:-14px"><span class="badge" style="font-size:14px;padding:7px 14px;border-radius:16px;display:inline-block">ILLUSTRATIVE</span></div>' +
        '<div style="height:16px"></div></div>' +
        '<div class="body" style="padding-top:12px">' +
        '<div class="card"><h2><span class="circ navyc">' + I.clipboard + '</span>BATCH INFORMATION</h2>' +
        row('', 'Batch ID', 'BATCH-EX-001') +
        row('', 'Group', 'Amuru Farmer Group') +
        row('', 'Location', 'Amuru example') +
        '<div class="row"><span class="k">Quantity</span><span class="v">2 tonnes &nbsp;<span class="tag rep">REPORTED</span></span></div>' +
        row('', 'Verified qty', 'OPEN', 'red') +
        row('', 'Quality', 'REPORTED', 'grn') +
        '<div class="row"><span class="k">Evidence</span><span class="pill-none">' + I.clip + 'None attached</span></div>' +
        '</div>' +
        '<div class="card"><h2><span class="circ navyc">' + I.handshake + '</span>LINKED BUYER</h2>' +
        '<div class="pad"><div class="lbl">Buyer</div><div class="val">Lira Miller Co.</div></div></div>' +
        '<div class="card"><h2><span class="circ navyc">' + I.shield + '</span>MATCH STATUS</h2>' +
        '<div class="row"><span class="k">Match status</span><span class="ora">NOT VALIDATED</span></div></div>' +
        '</div>' +
        '<div class="foot y"><span>' + I.alertc + '</span><span>REPORTED — NOT VERIFIED</span><span>' + I.checkc + '</span></div>' +
        '</div>'
    },
    {
      say: "The app shows why the deal cannot proceed. Capturing a record or photo does not auto-approve.",
      html:
        '<div class="s s3">' +
        '<div class="hdr3">' + status() +
        '<div class="hdr"><span class="nav-ico">' + I.menu + '</span><span style="flex:1;text-align:center"><span class="outline">ILLUSTRATIVE</span></span><span class="nav-ico bell">' + I.bell + '</span></div></div>' +
        '<div class="body" style="padding:0">' +
        '<div class="title"><h1>EVIDENCE AND BLOCKERS</h1><p>Review required evidence and items blocking this deal.</p></div>' +
        '<div class="chk"><span class="box"></span>Buyer fee<span class="opts" id="feeOpts">' +
        '<button class="opt sel" data-v="YES">YES</button><button class="opt" data-v="NO">NO</button><button class="opt" data-v="COUNTER">COUNTER</button></span></div>' +
        '<div class="chk"><span class="box"></span>Weigh ticket</div>' +
        '<div class="chk"><span class="box"></span>Quality moisture result</div>' +
        '<div class="chk"><span class="box"></span>Stock authority</div>' +
        '<div class="chk"><span class="box on">' + I.check + '</span>Buyer requirement captured<span class="tick">✓</span></div>' +
        '<div class="blocker"><svg viewBox="0 0 48 48"><path d="M24 4L2 43h44z" fill="#d4202a"/><path d="M24 17v13M24 34v3" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>' +
        '<div><b>BLOCKER:</b><b>Supply not verified — quality evidence missing</b></div></div>' +
        '<div class="note"><i>i</i>Uploading a photo does NOT automatically verify stock</div>' +
        '<div class="blocked"><svg viewBox="0 0 24 24" style="fill:#fff;stroke:none"><circle cx="12" cy="12" r="11"/><path d="M12 6v8M12 16.5v1.5" stroke="#d4202a" stroke-width="2.6" stroke-linecap="round"/></svg>BLOCKED<span class="l">' + I.lock + '</span></div>' +
        '</div>' +
        '<div class="tabs">' +
        '<div class="tab on">' + I.brief + 'DEAL DESK</div>' +
        '<div class="tab">' + I.doc + 'DEAL</div>' +
        '<div class="tab">' + I.plant + 'STOCK</div>' +
        '<div class="tab">' + I.person + 'MORE</div></div>' +
        '</div>'
    },
    {
      say: "Only an authorised person changes status. The app does not invent verification or payment.",
      html:
        '<div class="s">' +
        '<div class="navy" style="position:relative">' + status() +
        '<span class="nav-ico hamb">' + I.menu + '</span>' +
        '<div class="hdr hdr4"><div class="ill">ILLUSTRATIVE</div><h1>APPROVAL</h1><div class="sub">' + I.shield + 'Deal Desk</div></div></div>' +
        '<div class="body">' +
        '<div class="card">' +
        '<div class="cs"><span class="circ">' + I.file + '</span><span>Current status: <b class="b" style="color:#1550c0">REPORTED</b></span></div>' +
        '<div class="cs"><span class="circ red">' + I.alertc + '</span><span><span class="r" style="color:#d4202a">Blocker</span> <span style="font-weight:500">Quality evidence missing</span></span></div></div>' +
        '<div class="card"><h2 style="color:#0b2a4f;font-size:17px;border-bottom:0">Choose action</h2><div id="acts">' +
        '<button class="act sel" data-a="checked"><span class="rad">' + I.check + '</span>Mark evidence checked</button>' +
        '<button class="act" data-a="verified"><span class="rad"></span><span>Move to <b>VERIFIED</b></span></button>' +
        '<button class="act" data-a="reject"><span class="rad"></span>Reject batch</button>' +
        '<button class="act" data-a="reported"><span class="rad"></span><span>Return to <b>REPORTED</b></span></button>' +
        '</div></div>' +
        '<div class="warn">' + I.alertc.replace('<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.5"/>', '<path d="M12 3L2 21h20z"/><path d="M12 10v5M12 18v.5"/>') +
        '<div><b>App does NOT auto-mark:</b><br>stock exists, funds available, farmer paid.</div></div>' +
        '<div class="card"><div class="cs"><span class="circ">' + I.hourglass + '</span><span class="stat"><small>STATUS</small><strong>AWAITING AUTHORISED CHECK</strong></span></div></div>' +
        '</div></div>'
    },
    {
      say: "We reconcile accepted quantity, external payment evidence, CNG fee and costs. Commodity value is not CNG revenue. CNG does not hold farmer or buyer commodity money.",
      html:
        '<div class="s s5">' +
        '<div class="hdr5">' + status() +
        '<div class="topline"><span class="nav-ico">' + I.back + '</span><span>ILLUSTRATIVE</span><span class="nav-ico">' + I.shield + '</span></div>' +
        '<h1>RECONCILIATION</h1><div class="sub">' + I.plant + 'Agricultural Deal Desk</div>' +
        '<svg class="field" viewBox="0 0 190 90" aria-hidden="true"><path d="M0 90C40 60 90 40 190 50V90z" fill="#2f6b3a" opacity=".7"/><path d="M0 90C50 72 110 62 190 70V90z" fill="#4c8f45" opacity=".8"/><path d="M60 50c0-18 10-28 24-30-2 14-8 26-24 30zM66 50c8-12 20-16 34-14-6 10-16 16-34 14z" fill="#8fc062"/><rect x="132" y="22" width="30" height="16" rx="3" fill="#c9b83a"/><rect x="136" y="14" width="14" height="10" rx="2" fill="#c9b83a"/><circle cx="140" cy="42" r="8" fill="#a99a2a"/><circle cx="162" cy="44" r="5" fill="#a99a2a"/></svg></div>' +
        '<div class="body">' +
        '<div class="card twin"><div><span class="circ" style="background:#e1f1e4;width:42px;height:42px"><svg viewBox="0 0 24 24" style="stroke:#1f7a3a;width:24px;height:24px;fill:none;stroke-width:2.5"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span><span class="lbl">ACCEPTED QUANTITY</span><br><b class="big" style="color:#1f7a3a">2.0 t</b></span></div>' +
        '<div><span class="circ" style="background:#fbe0e0;width:42px;height:42px"><svg viewBox="0 0 24 24" style="stroke:#d4202a;width:24px;height:24px;fill:none;stroke-width:2.5"><path d="M6 6l12 12M18 6L6 18"/></svg></span><span><span class="lbl">REJECTED</span><br><b class="big" style="color:#d4202a">0</b></span></div></div>' +
        '<div class="card com"><span class="circ" style="background:#e1f1e4;width:42px;height:42px"><svg viewBox="0 0 24 24" style="stroke:#1f7a3a;fill:none;stroke-width:2;width:24px;height:24px"><path d="M12 21v-8M12 13c0-4-3-6-7-6 0 4 3 6 7 6zM12 13c0-3 2-5 6-5 0 3-2 5-6 5z"/></svg></span>' +
        '<span class="t">COMMODITY<small>(Not CNG Income)</small></span><span class="val"><small>VALUE</small><b>2,700,000 <span>UGX</span></b></span></div>' +
        '<div class="card fee"><div class="head"><span class="circ" style="background:#e1f1e4;width:42px;height:42px"><svg viewBox="0 0 24 24" style="stroke:#1f7a3a;fill:none;stroke-width:2;width:24px;height:24px"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h3"/></svg></span><span class="t">CNG SERVICE FEE</span><span class="v"><small>VERIFICATION</small><b>25,000</b></span></div>' +
        '<div class="feebox"><span class="a">2t x 30,000</span><span class="b">=</span><span class="c">60,000</span><span class="d"><span class="credit">CREDIT RULE APPLIED</span><br>Total Service Fee</span><span class="e">60,000</span></div></div>' +
        '<div class="card"><div class="com costs" style="align-items:flex-start"><span class="circ" style="background:#e1f1e4;width:42px;height:42px"><svg viewBox="0 0 24 24" style="stroke:#1f7a3a;fill:none;stroke-width:2;width:24px;height:24px"><path d="M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2zM4 7l11-3v3M16 14h2"/></svg></span>' +
        '<div style="flex:1"><div class="t" style="font-weight:800;font-size:15px;margin-bottom:2px">CNG COSTS</div>' +
        '<div class="row" style="padding:5px 0"><span>Visit</span><span>25,000</span></div>' +
        '<div class="row" style="padding:5px 0"><span>Other</span><span style="color:#d98a0b;font-weight:800">OPEN</span></div></div></div></div>' +
        '<div class="card"><div class="sm"><span class="circ" style="background:#e4ecfb">' + I.people.replace('<svg', '<svg style="stroke:#1550c0"') + '</span>CASH CONTRIBUTION<span class="rt gr">+35,000</span></div>' +
        '<div class="sm"><span class="circ" style="background:#ece4fb">' + I.file.replace('<svg', '<svg style="stroke:#5b3fb5"') + '</span>PAYMENT EVIDENCE<span class="rt bl">EXTERNAL</span></div></div>' +
        '<div class="card"><div class="sm"><span class="circ" style="background:#f0f2f5">' + I.q.replace('<svg', '<svg style="stroke:#555"') + '</span>CNG HOLDS CUSTOMER FUNDS?<span class="rt rd">NO</span></div></div>' +
        '</div>' +
        '<div class="foot5">' + I.checkc + 'ILLUSTRATIVE RECONCILE</div>' +
        '</div>'
    }
  ];

  /* ---------- engine ---------- */
  var screenEl = document.getElementById("screen");
  var sayEl = document.getElementById("say");
  var labelEl = document.getElementById("stepLabel");
  var dotsEl = document.getElementById("dots");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var toastEl = document.getElementById("toast");
  var cur = 0, toastTimer;

  screenEl.innerHTML = screens.map(function (s) { return s.html; }).join("");
  var nodes = screenEl.querySelectorAll(".s");
  screens.forEach(function (_, i) {
    var d = document.createElement("button");
    d.className = "dot"; d.setAttribute("aria-label", "Go to screen " + (i + 1));
    d.addEventListener("click", function () { go(i); });
    dotsEl.appendChild(d);
  });

  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2800);
  }

  function go(i) {
    cur = Math.max(0, Math.min(screens.length - 1, i));
    nodes.forEach(function (n, k) { n.classList.toggle("active", k === cur); });
    dotsEl.querySelectorAll(".dot").forEach(function (d, k) { d.classList.toggle("on", k === cur); });
    labelEl.textContent = "Screen " + (cur + 1) + " of " + screens.length;
    sayEl.innerHTML = "<small>YOU SAY</small>“" + screens[cur].say + "”";
    prev.disabled = cur === 0;
    next.textContent = cur === screens.length - 1 ? "Restart ↺" : "Next →";
    try { history.replaceState(null, "", "#" + (cur + 1)); } catch (e) {}
  }

  prev.addEventListener("click", function () { go(cur - 1); });
  next.addEventListener("click", function () { go(cur === screens.length - 1 ? 0 : cur + 1); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") go(cur + 1);
    if (e.key === "ArrowLeft") go(cur - 1);
  });

  /* swipe on the phone */
  var sx = null;
  var phone = document.getElementById("phone");
  phone.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  phone.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 70) go(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- illustrative interactions (never change real status) ---------- */
  screenEl.addEventListener("click", function (e) {
    var opt = e.target.closest(".opt");
    if (opt) {
      screenEl.querySelectorAll(".opt").forEach(function (o) { o.classList.toggle("sel", o === opt); });
      toast("Fee response noted as “" + opt.dataset.v + "” — illustrative. Deal stays BLOCKED until supply is verified.");
      return;
    }
    var act = e.target.closest(".act");
    if (act) {
      screenEl.querySelectorAll(".act").forEach(function (a) {
        var on = a === act;
        a.classList.toggle("sel", on);
        a.querySelector(".rad").innerHTML = on ? '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>' : "";
      });
      toast("Illustrative only — status stays REPORTED. Only an authorised user changes status; the app never auto-marks stock, funds or payment.");
    }
  });

  /* ---------- side tools ---------- */
  var arc = document.getElementById("arcPanel"), ctl = document.getElementById("ctlPanel");
  document.getElementById("toggleArc").addEventListener("click", function () { arc.hidden = !arc.hidden; });
  document.getElementById("toggleCtl").addEventListener("click", function () { ctl.hidden = !ctl.hidden; });
  var tsay = document.getElementById("toggleSay");
  var tapp = document.getElementById("toggleApp");
  function appMode(on) {
    document.body.classList.toggle("app", on);
    tapp.textContent = on ? "Presenter view" : "Full-screen app view";
    tsay.textContent = on ? "Show script" : (sayEl.style.display === "none" ? "Show script" : "Hide script");
    document.body.classList.remove("showsay");
  }
  tapp.addEventListener("click", function () { appMode(!document.body.classList.contains("app")); });
  tsay.addEventListener("click", function () {
    if (document.body.classList.contains("app")) {
      var s = document.body.classList.toggle("showsay");
      tsay.textContent = s ? "Hide script" : "Show script";
      return;
    }
    var hide = sayEl.style.display !== "none";
    sayEl.style.display = hide ? "none" : "";
    tsay.textContent = hide ? "Show script" : "Hide script";
  });
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (window.innerWidth <= 600 || standalone) appMode(true);

  var start = parseInt((location.hash || "#1").slice(1), 10);
  go(isNaN(start) ? 0 : start - 1);

  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
