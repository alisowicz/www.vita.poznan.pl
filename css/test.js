google.maps.__gjsload__('controls', function(_) {
  var RM,
    SM,
    TM,
    UM,
    cN,
    dN,
    fN,
    gN,
    iN,
    jN,
    kN,
    lN,
    mN,
    oN,
    pN,
    qN,
    rN,
    sN,
    tN,
    uN,
    xN,
    wN,
    vN,
    yN,
    zN,
    AN,
    BN,
    CN,
    EN,
    GN,
    FN,
    IN,
    JN,
    HN,
    KN,
    LN,
    MN,
    NN,
    QN,
    PN,
    RN,
    SN,
    WN,
    UN,
    VN,
    XN,
    YN,
    ZN,
    $N,
    aO,
    bO,
    cO,
    eO,
    fO,
    dO,
    gO,
    hO,
    jO,
    iO,
    oO,
    lO,
    nO,
    mO,
    pO,
    qO,
    sO,
    rO,
    tO,
    uO,
    vO,
    yO,
    xO,
    wO,
    zO,
    AO,
    BO,
    CO,
    DO,
    MO,
    LO,
    KO,
    NO,
    SO,
    VO,
    TO,
    WO,
    XO,
    YO,
    $O,
    aP,
    dP,
    cP,
    eP,
    bP,
    gP,
    fP,
    hP,
    iP,
    jP,
    kP,
    pP,
    mP,
    lP,
    nP,
    oP,
    rP,
    uP,
    vP,
    sP,
    tP,
    xP,
    wP,
    zP,
    AP,
    yP,
    BP,
    CP,
    DP,
    EP,
    MP,
    NP,
    OP,
    JP,
    LP,
    IP,
    HP,
    GP,
    KP,
    PP,
    RP,
    QP,
    SP,
    TP,
    UP,
    VP,
    aQ,
    WP,
    ZP,
    YP,
    XP,
    $P,
    bQ,
    cQ,
    fQ,
    gQ,
    hQ,
    iQ,
    dQ,
    eQ,
    jQ,
    kQ,
    lQ,
    mQ,
    nQ,
    oQ,
    pQ;
  _.QM = function() {
    var a = _.xm;
    return 1 == a.b.type
      ? "CSS1Compat" != a.b.B
      : !1
  };
  RM = function(a) {
    a.style.textAlign = _.$w.b
      ? "right"
      : "left"
  };
  SM = function(a, b, c, d) {
    b = a.l.ca[String(b)];
    if (!b)
      return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.mb && g.capture == c) {
        var h = g.listener,
          l = g.Ub || g.src;
        g.Kd && _.Kn(a.l, g);
        e = !1 !== h.call(l, d) && e
      }
    }
    return e && 0 != d.vi
  };
  TM = function(a, b) {
    var c = a.D;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.D)
        d.push(c),
        ++e
    }
    a = a.H;
    c = b.type || b;
    _.Fa(b)
      ? b = new _.Dn(b, a)
      : b instanceof _.Dn
        ? b.target = b.target || a
        : (e = b, b = new _.Dn(c, a), _.Wz(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; !b.b && 0 <= f; f--) {
        var g = b.currentTarget = d[f];
        e = SM(g, c, !0, b) && e
      }
    b.b || (g = b.currentTarget = a, e = SM(g, c, !0, b) && e, b.b || (e = SM(g, c, !1, b) && e));
    if (d)
      for (f = 0; !b.b && f < d.length; f++)
        g = b.currentTarget = d[f],
        e = SM(g, c, !1, b) && e
  };
  UM = function(a, b, c) {
    for (var d = _.Fa(a)
      ? a.split("")
      : a, e = a.length - 1; 0 <= e; --e)
      e in d && b.call(c, d[e], e, a)
  };
  _.bN = function(a) {
    if (!VM.test(a))
      return a;

- 1 != a.indexOf("&") && (a = a.replace(WM, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(XM, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(YM, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(ZM, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace($M, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(aN, "&#0;"));
    return a
  };
  cN = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
      return c.toUpperCase()
    })
  };
  dN = function(a) {
    var b = _.Fa(void 0)
      ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
      : "\\s";
    return a.replace(new RegExp("(^" + (b
      ? "|[" + b + "]+"
      : "") + ")([a-z])", "g"), function(a, b, e) {
      return b + e.toUpperCase()
    })
  };
  fN = function() {
    var a = eN,
      b;
    for (b in a)
      return !1;
    return !0
  };
  gN = function(a, b) {
    b instanceof _.Ze || b instanceof _.Ze || (b = b.Zd
      ? b.Hb()
      : String(b), _.OA.test(b) || (b = "about:invalid#zClosurez"), b = _.$e(b));
    b instanceof _.Ze && b.constructor === _.Ze && b.f === _.Ye
      ? b = b.b
      : (_.Ia(b), b = "type_error:SafeUrl");
    a.href = b
  };
  _.hN = function(a, b) {
    1 == _.X.type
      ? a.style.styleFloat = b
      : a.style.cssFloat = b
  };
  iN = function(a) {
    var b = _.W(2);
    a.style.WebkitBorderTopLeftRadius = b;
    a.style.WebkitBorderTopRightRadius = b;
    a.style.borderTopLeftRadius = b;
    a.style.borderTopRightRadius = b;
    a.style.MozBorderTopLeftRadius = b;
    a.style.MozBorderTopRightRadius = b
  };
  jN = function(a) {
    var b = _.W(2);
    a.style.WebkitBorderBottomLeftRadius = b;
    a.style.WebkitBorderBottomRightRadius = b;
    a.style.borderBottomLeftRadius = b;
    a.style.borderBottomRightRadius = b;
    a.style.MozBorderBottomLeftRadius = b;
    a.style.MozBorderBottomRightRadius = b
  };
  kN = function(a) {
    var b = _.W(2);
    a.style.WebkitBorderBottomLeftRadius = b;
    a.style.WebkitBorderTopLeftRadius = b;
    a.style.borderBottomLeftRadius = b;
    a.style.borderTopLeftRadius = b;
    a.style.MozBorderBottomLeftRadius = b;
    a.style.MozBorderTopLeftRadius = b
  };
  lN = function(a) {
    var b = _.W(2);
    a.style.WebkitBorderBottomRightRadius = b;
    a.style.WebkitBorderTopRightRadius = b;
    a.style.borderBottomRightRadius = b;
    a.style.borderTopRightRadius = b;
    a.style.MozBorderBottomRightRadius = b;
    a.style.MozBorderTopRightRadius = b
  };
  mN = function(a, b) {
    b = b || {};
    var c = a.style;
    c.color = "black";
    c.fontFamily = "Roboto,Arial,sans-serif";
    _.Am(a);
    _.zm(a);
    b.title && a.setAttribute("title", b.title);
    c = _.jm()
      ? 1.38
      : 1;
    a = a.style;
    a.fontSize = _.W(b.no
      ? 9
      : 11);
    a.backgroundColor = "#fff";
    for (var d = [], e = 0, f = _.xb(b.padding); e < f; ++e)
      d.push(_.W(c * b.padding[e]));
    a.padding = d.join(" ");
    b.width && (a.width = _.W(c * b.width))
  };
  oN = function(a, b) {
    var c = nN[b];
    if (!c) {
      var d = cN(b);
      c = d;
      void 0 === a.style[d] && (d = (_.Hh
        ? "Webkit"
        : _.Gh
          ? "Moz"
          : _.Eh
            ? "ms"
            : _.Dh
              ? "O"
              : null) + dN(d), void 0 !== a.style[d] && (c = d));
      nN[b] = c
    }
    return c
  };
  pN = function(a, b, c) {
    if (_.Fa(b))
      (b = oN(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = oN(c, d);
        f && (c.style[f] = e)
      }
    };
  qN = function(a, b, c) {
    if (b instanceof _.Lk) {
      var d = b.x;
      b = b.y
    } else
      d = b,
      b = c;
    a.style.left = _.tB(d, !1);
    a.style.top = _.tB(b, !1)
  };
  rN = function() {
    _.sq();
    return _.zq
  };
  sN = _.pa("b");
  tN = function(a, b) {
    a.b = a.b || [];
    var c = a.b[b] = a.b[b] || {},
      d = _.JL(a, b);
    if (!c.ab) {
      a.j = a.j || new _.y(0, 0);
      var e = a.b[0] && a.b[0].ab || new _.y(0, 0);
      c.ab = new _.y(e.x + a.j.x * b, e.y + a.j.y * b)
    }
    return {
      url: d,
      size: c.Fa || a.Fa,
      scaledSize: a.f.size,
      origin: c.ab,
      anchor: c.anchor || a.anchor
    }
  };
  uN = function(a, b, c, d, e, f, g) {
    this.label = a || "";
    this.alt = b || "";
    this.l = f || null;
    this.ub = c;
    this.b = d;
    this.j = e;
    this.f = g || null
  };
  xN = function(a, b) {
    var c = this;
    this.B = a;
    b = b || ["roadmap", "satellite", "hybrid", "terrain"];
    var d = _.Rj(b, "terrain") && _.Rj(b, "roadmap"),
      e = _.Rj(b, "hybrid") && _.Rj(b, "satellite");
    this.j = {};
    this.l = [];
    this.f = this.m = this.b = null;
    _.F.addListener(this, "maptypeid_changed", function() {
      var a = c.get("mapTypeId");
      c.f && c.f.set("display", "satellite" == a);
      c.b && c.b.set("display", "roadmap" == a)
    });
    _.F.addListener(this, "zoom_changed", function() {
      if (c.b) {
        var a = c.get("zoom");
        c.b.set("enabled", a <= c.m)
      }
    });
    b = _.Ca(b);
    for (var f = b.next(); !f.done; f = b.next())
      if (f = f.value, "hybrid" != f || !e)
        if ("terrain" != f || !d) {
          var g = a.get(f);
          if (g) {
            var h = null;
            "roadmap" == f
              ? d && (this.b = vN(this, "terrain", "roadmap", "terrain", void 0, "Pomniejsz, aby wy\u015bwietli\u0107 map\u0119 ulicy z terenem"), h = [
                [this.b]
              ], this.m = a.get("terrain").maxZoom)
              : "satellite" != f && "hybrid" != f || !e || (this.f = wN(this), h = [
                [this.f]
              ]);
            this.l.push(new uN(g.name, g.alt, "mapTypeId", f, null, null, h))
          }
        }
      };
  wN = function(a) {
    a = vN(a, "hybrid", "satellite", "labels", "Etykiety");
    a.set("enabled", !0);
    return a
  };
  vN = function(a, b, c, d, e, f) {
    var g = a.B.get(b);
    e = new uN(e || g.name, g.alt, d, !0, !1, f);
    a.j[b] = {
      ua: c,
      xd: d,
      value: !0
    };
    a.j[c] = {
      ua: c,
      xd: d,
      value: !1
    };
    return e
  };
  yN = _.pa("f");
  zN = function(a, b, c) {
    if (!a || !b || !_.Ga(c))
      return null;
    c = Math.pow(2, -c);
    var d = a.fromLatLngToPoint(b);
    return _.Tz(a.fromPointToLatLng(new _.y(d.x + c, d.y)), b)
  };
  AN = function(a) {
    _.Cn.call(this);
    this.f = a;
    this.b = {}
  };
  BN = function(a, b, c, d, e, f) {
    if (_.Ja(c))
      for (var g = 0; g < c.length; g++)
        BN(a, b, c[g], d, e, f);
  else
      (b = _.Mn(b, c, d || a.handleEvent, e, f || a.f || a)) && (a.b[b.key] = b)
    };
    CN = function(a) {
      _.ab(a.b, function(a, c) {
        this.b.hasOwnProperty(c) && _.$n(a)
      }, a);
      a.b = {}
    };
    EN = function(a) {
      a = _.Pa(a);
      delete eN[a];
      fN() && DN && DN.stop()
    };
    GN = function() {
      DN || (DN = new _.ko(function() {
        FN()
      }, 20));
      var a = DN;
      a.oc() || a.start()
    };
    FN = function() {
      var a = _.Sa();
      _.ab(eN, function(b) {
        HN(b, a)
      });
      fN() || GN()
    };
    IN = function() {
      _.io.call(this);
      this.j = 0;
      this.endTime = this.startTime = null
    };
    JN = function(a, b, c, d) {
      IN.call(this);
      if (!_.Ja(a) || !_.Ja(b))
        throw Error("Start and end parameters must be arrays");
      if (a.length != b.length)
        throw Error("Start and end points must be the same length");
      this.m = a;
      this.O = b;
      this.duration = c;
      this.F = d;
      this.coords = [];
      this.f = 0
    };
    HN = function(a, b) {
      b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
      a.f = (b - a.startTime) / (a.endTime - a.startTime);
      1 < a.f && (a.f = 1);
      KN(a, a.f);
      1 == a.f
        ? (a.j = 0, EN(a), a.b("finish"), a.b("end"))
        : 1 == a.j && a.b("animate")
    };
    KN = function(a, b) {
      _.La(a.F) && (b = a.F(b));
      a.coords = Array(a.m.length);
      for (var c = 0; c < a.m.length; c++)
        a.coords[c] = (a.O[c] - a.m[c]) * b + a.m[c]
    };
    LN = function(a, b) {
      _.Dn.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.state = b.j
    };
    MN = function(a) {
      return 3 * a * a - 2 * a * a * a
    };
    NN = function(a) {
      this.data = a || []
    };
    QN = function(a) {
      _.XG.call(this, a, ON);
      _.WF(a, ON) || _.$F(a, ON, {
        options: 0
      }, [
        "div",
        ,
        1,
        0,
        [
          " ",
          [
            "div",,, 2
          ],
          " ",
          [
            "div", 576, 1, 1
          ],
          " ",
          [
            "div",,, 3
          ],
          " ",
          [
            "div",,, 4
          ],
          " <div> ",
          ["div",,, 5, ["Obr\u00f3\u0107 widok"]
          ],
          " ",
          [
            "div",,, 6
          ],
          " ",
          [
            "div",,, 7
          ],
          " </div> "
        ]
      ], [
        [
          "css",
          ".gm-style .gm-compass-icon{background-image:url(https://maps.gstatic.com/mapfiles/api-3/images/sv9.png);background-size:164px 175px}",
          "css",
          ".gm-style.gm-china .gm-compass-icon{background-image:url(http://maps.gstatic.cn/mapfiles/api-3/images/sv9.png)}",
          "css",
          "@media (-webkit-min-device-pixel-ratio:1.2),(min-resolution:1.2dppx),(min-resolution:116dpi){.gm-style .gm-compass-icon{background-image:url(https://maps.gstatic.com/mapfiles/api-3/images/sv9_hdpi.png)}.gm-style.gm-china .gm-compass-icon{background-image:url(http://maps.gstatic.cn/mapfiles/api-3/images/sv9_hdpi.png)}}",
          "css",
          ".gm-compass-background{height:48px;width:48px;overflow:hidden;position:absolute}",
          "css",
          ".gm-compass{position:relative;width:48px;height:48px}",
          "css",
          ".gm-compass-needle{cursor:pointer;overflow:hidden;width:20px;height:39px;position:absolute;left:14.5px;top:4px}",
          "css",
          ".gm-compass-needle{background-position:110px -5.5px}",
          "css",
          ".gm-compass-needle:hover{background-position:88px -5.5px}",
          "css",
          ".gm-compass-needle:active{background-position:66px -5.5px}",
          "css",
          ".gm-compass-turn{cursor:pointer;overflow:hidden;width:12px;height:35px;position:absolute;left:2px;top:8px}",
          "css",
          ".gm-compass-turn{background-position:46px -8px}",
          "css",
          ".gm-compass-turn:hover{background-position:30px -8px}",
          "css",
          ".gm-compass-turn:active{background-position:14px -8px}",
          "css",
          ".gm-compass-turn-opposite{-ms-transform:scaleX(-1);-ms-transform-origin:22.5px 0;-moz-transform:scaleX(-1);-moz-transform-origin:22.5px 0;-webkit-transform:scaleX(-1);-webkit-transform-origin:22.5px 0;transform:scaleX(-1);transform-origin:22.5px 0}",
          "css",
          ".gm-compass:hover .gm-compass-tooltip-text,.gm-compass:hover .gm-compass-arrow-right{opacity:1;-webkit-transition-delay:1.5s;-moz-transition-delay:1.5s;transition-delay:1.5s}",
          "css",
          ".gm-compass-tooltip-text{opacity:0;background-color:#222;width:112px;height:23px;right:58px;top:7px;position:absolute;border:1px solid #ccc;text-align:center;color:#ccc;padding-top:7px;font-family:Roboto,Arial;font-size:12px;font-weight:bold}",
          "css",
          ".gm-compass-arrow-right{opacity:0;width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent;top:16px;position:absolute}",
          "css",
          ".gm-compass-arrow-right-outer{right:52px;border-left:7px solid #ccc}",
          "css",
          ".gm-compass-arrow-right-inner{right:53px;border-left:7px solid #222}"
        ]
      ], PN())
    };
    PN = function() {
      return [
        [
          "$t",
          "t-avKK8hDgg9Q",
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass"
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-icon"
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-needle"
          ],
          "$a",
          [
            4,
            ,
            ,
            ,
            function(a) {
              return "-webkit-transform: rotate(" + String(_.Z(a.options, 0, -1)) + "deg);-ms-transform: rotate(" + String(_.Z(a.options, 0, -1)) + "deg);-moz-transform: rotate(" + String(_.Z(a.options, 0, -1)) + "deg);transform: rotate(" + String(_.Z(a.options, 0, -1)) + "deg);"
            },
            "style",,,
            1
          ],
          "$a",
          [
            22,
            ,
            ,
            ,
            "compass.north",
            "jsaction"
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-icon",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-background",,
            1
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-icon",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-turn",,
            1
          ],
          "$a",
          [
            22,
            ,
            ,
            ,
            "compass.counterclockwise",
            "jsaction",,
            1
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-icon",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-turn",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-turn-opposite",,
            1
          ],
          "$a",
          [
            22,
            ,
            ,
            ,
            "compass.clockwise",
            "jsaction",,
            1
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-tooltip-text",,
            1
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-arrow-right",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-arrow-right-outer",,
            1
          ]
        ],
        [
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-arrow-right",,
            1
          ],
          "$a",
          [
            7,
            ,
            ,
            ,
            ,
            "gm-compass-arrow-right-inner",,
            1
          ]
        ]
      ]
    };
    RN = function(a) {
      this.f = a;
      a.S.setAttribute("controlWidth", 48);
      a.S.setAttribute("controlHeight", 48);
      a.addListener("compass.clockwise", "click", (0, _.t)(this.oi, this, !0));
      a.addListener("compass.counterclockwise", "click", (0, _.t)(this.oi, this, !1));
      a.addListener("compass.north", "click", (0, _.t)(this.Oo, this));
      this.b = null;
      this.j = !1
    };
    SN = function(a, b, c, d, e) {
      var f = new AN;
      a.b && a.b.stop();
      b = a.b = new JN([
        b, d
      ], [
        c, e
      ], 1200, MN);
      f.listen(b, "animate", (0, _.t)(a.Qi, a, !1));
      a = (0, _.t)(a.Qi, a, !0);
      BN(f, b, "finish", a, void 0);
      a : {
        if(0 == b.j)
          b.f = 0,
          b.coords = b.m;
        else if (1 == b.j)
          break a;
        EN(b);
        f = _.Sa();
        b.startTime = f;
        -1 == b.j && (b.startTime -= b.duration * b.f);
        b.endTime = b.startTime + b.duration;
        b.f || b.b("begin");
        b.b("play");
        -1 == b.j && b.b("resume");
        b.j = 1;
        a = _.Pa(b);
        a in eN || (eN[a] = b);
        GN();
        HN(b, f)
      }
    };
    WN = function(a, b, c) {
      var d = this;
      this.j = a;
      this.m = b;
      b.style.cursor = "pointer";
      a = TN[0];
      this.B = c;
      this.b = this.j == (window.document.fullscreenElement || window.document.webkitFullscreenElement || window.document.mozFullScreenElement || window.document.msFullscreenElement);
      this.B.set(this.b);
      this.f = null;
      this.l = [];
      if (window.document.fullscreenEnabled || window.document.webkitFullscreenEnabled || window.document.mozFullScreenEnabled || window.document.msFullscreenEnabled)
        this.f = _.ZB(_.Lm("api-3/images/sv9"), b, this.b
          ? new _.y(a.close, a.top)
          : new _.y(a.Ud, a.top), new _.z(164, 175)),
        b.style.width = _.W(25),
        b.style.height = _.W(25),
        this.f.setAttribute("class", "gm-fullscreen-control"),
        b.style.overflow = "hidden",
        _.F.addDomListener(b, "click", function() {
          if (d.b)
            for (var a = _.Ca(["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"]), b = a.next(); !b.done; b = a.next()) {
              if (b = b.value, b in window.document) {
                window.document[b]();
                break
              }
            } else
              for (a = _.Ca(["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"]), b = a.next(); !b.done; b = a.next())
                if (b = b.value, b in d.j) {
                  d.j[b]();
                  break
                }
              }),
        this.l = [
          _.F.addDomListener(window.document, "fullscreenchange", function() {
            return UN(d)
          }),
          _.F.addDomListener(window.document, "webkitfullscreenchange", function() {
            return UN(d)
          }),
          _.F.addDomListener(window.document, "mozfullscreenchange", function() {
            return UN(d)
          }),
          _.F.addDomListener(window.document, "MSFullscreenChange", function() {
            return UN(d)
          })
        ];
      _.F.addListener(this, "disabledefaultui_changed", function() {
        return VN(d)
      });
      _.F.addListener(this, "display_changed", function() {
        return VN(d)
      });
      _.F.addListener(this, "maptypeid_changed", function() {
        var a = d.get("mapTypeId");
        d.set("controlStyle", "streetview" == a
          ? 1
          : 0);
        d.m.style.margin = "streetview" == a
          ? "10px 20px"
          : "10px 14px";
        VN(d)
      });
      _.F.addListener(this, "constrolstyle_changed", function() {
        if (d.f) {
          var a = TN[d.get("controlStyle")];
          d.f.style.left = _.W(d.b
            ? a.close
            : a.Ud)
        }
      });
      VN(this)
    };
    UN = function(a) {
      _.F.trigger(a.j, "resize");
      a.b = a.j == (window.document.fullscreenElement || window.document.webkitFullscreenElement || window.document.mozFullScreenElement || window.document.msFullscreenElement);
      a.B.set(a.b);
      if (a.f) {
        var b = TN[a.get("controlStyle") || 0];
        a.f.style.left = _.W(a.b
          ? b.close
          : b.Ud)
      }
    };
    VN = function(a) {
      var b = a.get("display"),
        c = !!a.get("disableDefaultUI");
      a.get("mapTypeId");
      _.fB(a.m, !_.p(b) && !c || !!b);
      _.F.trigger(a.m, "resize")
    };
    XN = function(a, b) {
      this.b = a;
      this.f = [];
      this.l = (0, _.t)(3 == b || 12 == b || 6 == b || 9 == b
        ? UM
        : _.x, this, this.f);
      a.setAttribute("controlWidth", 0);
      a.setAttribute("controlHeight", 0)
    };
    YN = function(a) {
      for (var b = _.Ca(["mousedown", "touchstart", "pointerdown", "MSPointerDown"]), c = b.next(); !c.done; c = b.next())
        new _.oC(a, c.value, function() {
          a.style.outline = "none"
        });
      new _.oC(a, "focusout", function() {
        a.style.outline = ""
      })
    };
    ZN = function(a) {
      var b = window.document.createElement("button");
      b.style.background = "none";
      b.style.display = "block";
      b.style.padding = b.style.margin = b.style.border = "0";
      b.style.position = "relative";
      b.style.cursor = "pointer";
      _.zm(b);
      b.style.outline = "";
      b.setAttribute("title", a);
      b.setAttribute("aria-label", a);
      b.setAttribute("type", "button");
      new _.oC(b, "contextmenu", function(a) {
        _.Dc(a);
        _.Ec(a)
      });
      YN(b);
      return b
    };
    $N = function(a, b) {
      var c = window.document.createElement("div");
      c.className = "infomsg";
      a.appendChild(c);
      var d = c.style;
      d.background = "#F9EDBE";
      d.border = "1px solid #F0C36D";
      d.borderRadius = "2px";
      d.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
      d.fontFamily = "Roboto,Arial,sans-serif";
      d.fontSize = "12px";
      d.fontWeight = "400";
      d.left = "10%";
      d.b = "2px";
      d.padding = "5px 14px";
      d.position = "absolute";
      d.textAlign = "center";
      d.top = "10px";
      d.webkitBorderRadius = "2px";
      d.width = "80%";
      d.zIndex = 24601;
      c.innerText = "Korzystasz z przegl\u0105darki, kt\u00f3ra nie obs\u0142uguje interfejsu API Map Google w j\u0119zyku JavaScript. U\u017cyj innej.";
      d = window.document.createElement("a");
      b && (c.appendChild(d), d.innerText = "Wi\u0119cej informacji", d.href = b, d.target = "_blank");
      b = window.document.createElement("a");
      c.appendChild(b);
      b.innerText = "Zamknij";
      b.target = "_blank";
      d.style.paddingLeft = b.style.paddingLeft = "0.8em";
      d.style.color = b.style.color = "black";
      d.style.cursor = b.style.cursor = "pointer";
      d.style.textDecoration = b.style.textDecoration = "underline";
      b.onmouseup = function() {
        a.removeChild(c)
      }
    };
    aO = function(a) {
      this.b = a.replace("www.google", "maps.google")
    };
    bO = function(a) {
      a.style.marginLeft = _.W(5);
      a.style.marginRight = _.W(5);
      _.wm(a, 1E6);
      this.j = a;
      a = this.f = _.Y("a", a);
      var b = a.style;
      b.position = "static";
      b.overflow = "visible";
      _.hN(a, "none");
      a.style.display = "inline";
      a.setAttribute("target", "_blank");
      b = _.Y("div");
      var c = new _.z(66, 26);
      _.Qf(b, c);
      a.appendChild(b);
      this.b = _.ZB(null, b, _.ni, c);
      _.Am(b);
      _.vm(b, "pointer")
    };
    cO = function(a, b) {
      a = a.b;
      _.XB(a, b
        ? _.Lm("api-3/images/google_white5", !0)
        : _.Lm("api-3/images/google4", !0), a.m)
    };
    eO = function(a, b, c) {
      function d() {
        var b = f.get("hasCustomStyles"),
          c = a.getMapTypeId();
        cO(e, b || "satellite" == c || "hybrid" == c)
      }
      var e = dO(a, b, c),
        f = a.__gm;
      _.F.addListener(f, "hascustomstyles_changed", d);
      _.F.addListener(a, "maptypeid_changed", d);
      d();
      return e
    };
    fO = function(a, b, c) {
      a = dO(a, b, c);
      cO(a, !0);
      return a
    };
    dO = function(a, b, c) {
      function d() {
        var d = c && a.get("passiveLogo");
        f.setUrl(d
          ? null
          : b.get("url"))
      }
      var e = _.Y("div"),
        f = new bO(e);
      _.F.addListener(a, "passivelogo_changed", d);
      _.F.addListener(b, "url_changed", d);
      d();
      return f
    };
    gO = function(a, b, c, d) {
      function e() {
        0 != f.get("enabled") && (null != d && f.get("active")
          ? f.set("value", d)
          : f.set("value", c))
      }
      var f = this;
      _.F.addListener(this, "value_changed", function() {
        f.set("active", f.get("value") == c)
      });
      new _.oC(a, b, e);
      "click" == b && "button" != a.tagName.toLowerCase() && new _.oC(a, "keydown", function(a) {
        "Enter" == a.key && e()
      });
      _.F.addListener(this, "display_changed", function() {
        _.fB(a, 0 != f.get("display"))
      })
    };
    hO = function(a, b, c, d) {
      return new gO(a, b, c, d)
    };
    jO = function(a, b, c, d, e) {
      var f = this;
      this.b = window.document.createElement("div");
      a.appendChild(this.b);
      this.b.setAttribute("role", "button");
      this.b.setAttribute("tabindex", 0);
      this.b.setAttribute("title", d.title);
      this.b.setAttribute("aria-label", d.title);
      this.b.setAttribute("aria-pressed", !1);
      YN(this.b);
      _.Xz(this.b);
      this.f = this.b.style;
      this.f.overflow = "hidden";
      d.Ef
        ? RM(this.b)
        : this.f.textAlign = "center";
      this.f.position = "relative";
      mN(this.b, d);
      d.ye && kN(this.b);
      d.bg && lN(this.b);
      this.b.style.webkitBackgroundClip = "padding-box";
      this.b.style.backgroundClip = "padding-box";
      this.b.style.MozBackgroundClip = "padding";
      this.l = d.Ug || !1;
      this.m = d.ye || !1;
      _.rB(this.b, "0 1px 4px -1px rgba(0,0,0,0.3)");
      this.b.appendChild(b);
      d.km
        ? (a = _.ZB(_.Lm("arrow-down"), this.b), _.om(a, new _.y(6, 0), !_.$w.b), a.style.top = "50%", a.style.marginTop = _.W(-2), this.set("active", !1))
        : (a = e(this.b, "click", c), a.bindTo("value", this), this.bindTo("active", a), a.bindTo("enabled", this));
      d.Ug && (this.f.fontWeight = "500");
      this.j = _.kk(this.f.paddingLeft) || 0;
      d.Ef || (this.f.fontWeight = "500", d = this.b.offsetWidth - this.j - (_.kk(this.f.paddingRight) || 0), this.f.fontWeight = "", _.Hb(d) && 0 <= d && (this.f.minWidth = _.W(d)));
      new _.oC(this.b, "mousedown", function(a) {
        0 != f.get("enabled") && _.F.trigger(f, "mousedown", a)
      });
      new _.oC(this.b, "mouseover", function() {
        return iO(f, !0)
      });
      new _.oC(this.b, "mouseout", function() {
        return iO(f, !1)
      });
      _.F.addListener(this, "enabled_changed", function() {
        return iO(f, !1)
      });
      _.F.addListener(this, "active_changed", function() {
        return iO(f, !1)
      })
    };
    iO = function(a, b) {
      var c = !!a.get("active") || a.l;
      0 == a.get("enabled")
        ? (a.f.color = "gray", b = c = !1)
        : (a.f.color = c || b
          ? "#000"
          : "#565656", a.b.setAttribute("aria-pressed", c));
      a.m || (a.f.borderLeft = "0");
      _.Hb(a.j) && (a.f.paddingLeft = _.W(a.j));
      a.f.fontWeight = c
        ? "500"
        : "";
      a.f.backgroundColor = b
        ? "#ebebeb"
        : "#fff"
    };
    _.kO = function(a, b, c, d) {
      return new jO(a, b, c, d, hO)
    };
    oO = function(a, b, c, d, e) {
      var f = this.j = _.Y("div", a);
      mN(f, e);
      a = _.$w.b;
      _.Xz(f);
      RM(f);
      var g = this.b = _.Y("span", f);
      g.setAttribute("role", "checkbox");
      this.f = _.$B(_.Lm("mv/imgs8"), g, new _.y(52, 44), new _.z(13, 11), new _.y(1, -2), null, {
        cache: !0
      });
      lO(this);
      var h = _.Y("label", f);
      h.innerHTML = b;
      g.style.verticalAlign = h.style.verticalAlign = "middle";
      _.vm(h, "pointer");
      f.style.backgroundColor = "#fff";
      f.style.whiteSpace = "nowrap";
      f.style[a
          ? "paddingLeft"
          : "paddingRight"] = _.W(8);
      var l = this;
      _.F.addListener(l, "active_changed", function() {
        g.checked = !!l.get("active");
        mO(l, !1)
      });
      _.F.addListener(l, "enabled_changed", function() {
        var a = 0 != l.get("enabled");
        f.style.color = a
          ? "#000"
          : "#b8b8b8";
        g.disabled = !a;
        mO(l, !1);
        (a = a
          ? e.title
          : e.lh) && f.setAttribute("title", a)
      });
      _.F.addDomListener(f, "mouseover", function() {
        0 != l.get("enabled") && nO(l, !0)
      });
      _.F.addDomListener(f, "mouseout", function() {
        nO(l, !1)
      });
      b = hO(f, "click", c, d);
      b.bindTo("value", this);
      b.bindTo("display", this);
      b.bindTo("enabled", this);
      this.bindTo("active", b)
    };
    lO = function(a) {
      var b = a.b.style;
      b.WebkitBoxSizing = b.mozBoxSizing = b.boxSizing = "border-box";
      b.position = "relative";
      b.fontSize = b.lineHeight = "0";
      b.margin = _.$w.b
        ? "0 0 0 5px"
        : "0 5px 0 0";
      b.display = "inline-block";
      b.backgroundColor = "#fff";
      b.border = _.W(1) + " solid";
      _.sB(a.b, _.W(1));
      b = 13;
      _.QM() && (b -= 2);
      _.Qf(a.b, new _.z(b, b));
      _.fB(a.f, !1);
      mO(a, !1)
    };
    nO = function(a, b) {
      a.j.style.backgroundColor = b
        ? "#ebebeb"
        : "#fff";
      mO(a, b)
    };
    mO = function(a, b) {
      var c = a.b,
        d = c.checked;
      c.style.borderColor = c.disabled
        ? "#f1f1f1"
        : b
          ? "#666"
          : "#c6c6c6";
      _.fB(a.f, d)
    };
    pO = function(a, b, c, d) {
      var e = _.Y("div", a);
      mN(e, d);
      _.pm(b, e);
      e.style.backgroundColor = "#fff";
      _.F.bind(this, "active_changed", this, function() {
        e.style.fontWeight = this.get("active")
          ? "500"
          : ""
      });
      _.F.bind(this, "enabled_changed", this, function() {
        var a = 0 != this.get("enabled");
        e.style.color = a
          ? "black"
          : "gray";
        (a = a
          ? d.title
          : d.lh) && e.setAttribute("title", a)
      });
      a = hO(e, "mouseup", c);
      a.bindTo("value", this);
      a.bindTo("display", this);
      a.bindTo("enabled", this);
      this.bindTo("active", a);
      _.F.Y(e, "mouseover", this, function() {
        0 != this.get("enabled") && (e.style.backgroundColor = "#ebebeb", e.style.color = "#000")
      });
      _.F.addDomListener(e, "mouseout", function() {
        e.style.backgroundColor = "#fff";
        e.style.color = "#565656"
      })
    };
    qO = function(a) {
      var b = _.Y("div", a);
      b.style.margin = "1px 0";
      b.style.borderTop = "1px solid #ebebeb";
      _.F.bind(this, "display_changed", this, function() {
        _.fB(b, 0 != this.get("display"))
      })
    };
    sO = function(a, b, c, d) {
      this.j = b;
      d = d || {};
      b = this.b = _.Y("div", b);
      b.style.backgroundColor = "white";
      _.wm(b, -1);
      b.style.padding = _.W(2);
      jN(b);
      _.rB(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
      d.position
        ? _.om(b, d.position, d.b)
        : (b.style.position = "absolute", b.style.top = "100%", b.style.left = "0", b.style.right = "0");
      RM(b);
      for (_.gB(b); _.xb(c);) {
        d = c.shift();
        for (var e = 0; e < _.xb(d); ++e) {
          var f = d[e],
            g,
            h = {
              title: f.alt,
              lh: f.l || void 0,
              no: !1,
              padding: [6]
            };
          null != f.j
            ? g = new oO(b, f.label, f.b, f.j, h)
            : g = new pO(b, f.label, f.b, h);
          g.bindTo("value", a, f.ub);
          g.bindTo("display", f);
          g.bindTo("enabled", f)
        }
        var l = [];
        _.x(c, function(a) {
          l = l.concat(a)
        });
        l.length && (e = new qO(b), rO(e, d, l))
      }
    };
    rO = function(a, b, c) {
      function d() {
        function d(a) {
          for (var b = 0; b < _.xb(a); ++b)
            if (0 != a[b].get("display"))
              return !0;
        return !1
        }
        a.set("display", d(b) && d(c))
      }
      _.x(b.concat(c), function(a) {
        _.F.addListener(a, "display_changed", d)
      })
    };
    tO = function(a) {
      var b = a.b;
      if (!b.ca) {
        var c = a.j;
        b.ca = [
          _.F.addDomListener(c, "mouseout", function() {
            b.timeout = window.setTimeout(function() {
              a.set("active", !1)
            }, 1E3)
          }),
          _.F.Y(c, "mouseover", a, a.f),
          _.F.addDomListener(window.document.body, "mouseup", function(b) {
            for (b = b.target; b;) {
              if (b == c)
                return;
              b = b.parentNode
            }
            a.set("active", !1)
          })
        ]
      }
      _.tm(b)
    };
    uO = function(a, b, c, d) {
      return new sO(a, b, c, d)
    };
    vO = _.ra(".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}\n");
    yO = function(a, b, c, d) {
      var e = this;
      this.f = a;
      this.b = [];
      _.F.addListener(this, "fontloaded_changed", function() {
        if (e.get("fontLoaded")) {
          for (var a = e.b.length, b = 0, c = 0; c < a; ++c) {
            var d = _.Rf(e.b[c].parentNode),
              f = c == a - 1;
            e.b[c].sh && _.om(e.b[c].sh.b, new _.y(f
              ? 0
              : b, d.height), f);
            b += d.width
          }
          e.b.length = 0
        }
      });
      _.F.addListener(this, "mapsize_changed", function() {
        return wO(e)
      });
      _.F.addListener(this, "display_changed", function() {
        return wO(e)
      });
      for (var f = b.length, g = 0, h = 0; h < f; ++h)
        g = xO(this, c, d, b[h], g, 0 == h, h == f - 1);
      _.mB();
      _.vm(a, "pointer")
    };
    xO = function(a, b, c, d, e, f, g) {
      var h = window.document.createElement("div");
      a.f.appendChild(h);
      _.hN(h, "left");
      _.cn(vO);
      _.am(h, "gm-style-mtc");
      var l = _.pm(d.label, a.f, !0);
      b = b(h, l, d.b, {
        title: d.alt,
        padding: [
          8, 8
        ],
        ye: f,
        bg: g
      });
      h.style.position = "relative";
      f = b.ia();
      new _.oC(f, "focusin", function() {
        h.style.zIndex = 1
      });
      new _.oC(f, "focusout", function() {
        h.style.zIndex = 0
      });
      d.ub && b.bindTo("value", a, d.ub);
      f = null;
      l = _.Rf(h);
      d.f && (f = c(a, h, d.f, {
        position: new _.y(g
          ? 0
          : e, l.height),
        b: g
      }), zO(h, b, f));
      a.b.push({parentNode: h, sh: f});
      return e += l.width
    };
    wO = function(a) {
      var b = a.get("mapSize");
      b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
      _.fB(a.f, b);
      _.F.trigger(a.f, "resize")
    };
    zO = function(a, b, c) {
      new _.oC(a, "mousedown", function() {
        return c.set("active", !0)
      });
      new _.oC(a, "mouseover", function() {
        b.get("active") && c.set("active", !0)
      });
      _.F.addDomListener(b, "active_changed", function() {
        b.get("active") || c.set("active", !1)
      })
    };
    AO = function(a, b) {
      _.mB();
      _.vm(a, "pointer");
      RM(a);
      a.style.width = _.jm()
        ? _.W(104)
        : _.W(85);
      _.cn(vO);
      _.am(a, "gm-style-mtc");
      var c = _.pm("", a, !0),
        d = _.kO(a, c, null, {
          title: "Zmie\u0144 styl mapy",
          km: !0,
          Ef: !0,
          Ug: !0,
          padding: [
            8, 8
          ],
          ye: !0,
          bg: !0
        }),
        e = {},
        f = [b];
      _.x(b, function(a) {
        "mapTypeId" == a.ub && (e[a.b] = a.label);
        a.f && (f = f.concat(a.f))
      });
      _.F.bind(this, "maptypeid_changed", this, function() {
        _.eB(c, e[this.get("mapTypeId")] || "")
      });
      var g = uO(this, a, f);
      _.F.addListener(d, "mousedown", function() {
        g.set("active", !g.get("active"))
      });
      this.b = a
    };
    BO = function(a) {
      this.G = a;
      this.b = !1
    };
    CO = function(a, b, c) {
      a.get(b) !== c && (a.b = !0, a.set(b, c), a.b = !1)
    };
    DO = function(a) {
      var b = a.get("internalMapTypeId");
      _.yb(a.G, function(c, d) {
        d.ua == b && d.xd && a.get(d.xd) == d.value && (b = c)
      });
      CO(a, "mapTypeId", b)
    };
    MO = function(a, b) {
      var c = this;
      if (_.Sf[43]) {
        var d = EO;
        var e = FO;
        var f = "rgb(34, 34, 34)"
      } else
        d = GO,
        e = HO,
        f = "rgb(255, 255, 255)";
      this.f = _.$B(_.Lm("api-3/images/tmapctrl4", !0), a, d, IO, null, JO, b);
      this.b = _.$B(_.Lm("api-3/images/tmapctrl4", !0), a, e, IO, null, JO, b);
      this.m = a;
      this.j = !0;
      this.f.setAttribute("title", "Obr\u00f3\u0107 map\u0119 o 90 stopni");
      this.f.style.backgroundColor = this.b.style.backgroundColor = f;
      _.F.Y(this.f, "click", this, this.l);
      _.F.Y(this.b, "click", this, this.B);
      this.b.setAttribute("class", "gm-tilt");
      _.rB(this.f, "0 1px 4px -1px rgba(0,0,0,0.3)");
      _.rB(this.b, "0 1px 4px -1px rgba(0,0,0,0.3)");
      _.sB(this.f, _.W(2));
      _.sB(this.b, _.W(2));
      _.Am(this.f);
      _.Am(this.b);
      this.b.style.top = _.W(38);
      _.vm(this.f, "pointer");
      _.vm(this.b, "pointer");
      a.setAttribute("controlWidth", IO.width);
      KO(this);
      _.F.addListener(this, "aerialavailableatzoom_changed", function() {
        return LO(c)
      });
      _.F.addListener(this, "tilt_changed", function() {
        c.j = 0 != c.get("tilt");
        KO(c)
      });
      _.F.addListener(this, "mapsize_changed", function() {
        return KO(c)
      });
      _.F.addListener(this, "rotatecontrol_changed", function() {
        return KO(c)
      })
    };
    LO = function(a) {
      var b = !!a.get("aerialAvailableAtZoom"),
        c = a.m,
        d = NO(a, a.j),
        e = d != OO && a.j
          ? 38
          : 0;
      a.b.style.top = _.W(e);
      _.fB(a.f, !!e);
      a = e + (d == OO
        ? PO.height
        : IO.height);
      c.setAttribute("controlHeight", b
        ? a
        : 0);
      _.fB(c, b);
      _.F.trigger(c, "resize")
    };
    KO = function(a) {
      var b = NO(a, a.j);
      _.aC(a.b, b == OO
        ? PO
        : IO, b, JO);
      LO(a)
    };
    NO = function(a, b) {
      var c = a.get("mapSize");
      return a.get("rotateControl") || c && 200 <= c.width && 200 <= c.height
        ? _.Sf[43]
          ? b
            ? FO
            : QO
          : b
            ? HO
            : RO
        : OO
    };
    SO = function(a) {
      a = new MO(a, {
        cache: !0
      });
      a.bindTo("mapSize", this);
      a.bindTo("rotateControl", this);
      a.bindTo("aerialAvailableAtZoom", this);
      a.bindTo("heading", this, "heading");
      a.bindTo("tilt", this, "tilt")
    };
    VO = function(a, b) {
      this.j = a;
      this.l = !1;
      this.b = _.Y("div", a);
      _.Am(this.b);
      _.zm(this.b);
      _.rB(this.b, "0 1px 4px -1px rgba(0,0,0,0.3)");
      _.sB(this.b, _.W(2));
      this.b.style.cursor = "pointer";
      _.F.addDomListener(this.b, "mouseover", (0, _.t)(this.ci, this, !0));
      _.F.addDomListener(this.b, "mouseout", (0, _.t)(this.ci, this, !1));
      this.m = TO(this, this.b, 0);
      this.B = _.$B(UO, this.m);
      this.f = _.Y("div", this.b);
      this.f.style.position = "relative";
      this.f.style.overflow = "hidden";
      this.f.style.width = "67%";
      this.f.style.height = _.W(1);
      b
        ? this.f.style.right = "16%"
        : this.f.style.left = "16%";
      this.C = TO(this, this.b, 1);
      this.D = _.$B(UO, this.C)
    };
    TO = function(a, b, c) {
      var d = ZN(0 == c
        ? "Powi\u0119ksz"
        : "Pomniejsz");
      b.appendChild(d);
      _.F.addDomListener(d, "click", (0, _.t)(a.Nm, a, c));
      _.jm() || (_.F.addDomListener(d, "mouseover", (0, _.t)(a.lb, a, 1, c)), _.F.addDomListener(d, "mouseout", (0, _.t)(a.lb, a, 0, c)), _.F.addDomListener(d, "mousedown", (0, _.t)(a.lb, a, 2, c)), _.F.addDomListener(d, "mouseup", (0, _.t)(a.lb, a, 1, c)));
      new _.oC(d, "focus", function() {
        a.lb(1, c)
      });
      new _.oC(d, "focusout", function() {
        a.lb(0, c)
      });
      new _.oC(d, "keydown", function(b) {
        "Enter" == b.key && a.lb(2, c)
      });
      new _.oC(d, "keyup", function(b) {
        "Enter" == b.key && a.lb(1, c)
      });
      return d
    };
    WO = function() {
      function a(a, b, c, g, h) {
        a[b] = a[b] || {};
        a[b][c] = new _.y(g, h)
      }
      var b = {},
        c = b[0] = {};
      a(c, 0, 0, 0, 0);
      a(c, 1, 0, 30, 0);
      a(c, 2, 0, 45, 0);
      a(c, 0, 1, 0, 15);
      a(c, 1, 1, 30, 15);
      a(c, 2, 1, 45, 15);
      c = b[1] = {};
      a(c, 0, 0, 60, 0);
      a(c, 1, 0, 90, 0);
      a(c, 2, 0, 105, 0);
      a(c, 0, 1, 60, 15);
      a(c, 1, 1, 90, 15);
      a(c, 2, 1, 105, 15);
      return b
    };
    XO = function(a, b) {
      a = this.b = _.Y("div");
      _.jB(a);
      b = new VO(a, b);
      b.bindTo("mapSize", this);
      b.bindTo("display", this, "display");
      b.bindTo("mapTypeId", this);
      b.bindTo("zoom", this);
      this.Cd = b
    };
    YO = function(a) {
      a.Cd && (a.Cd.unbindAll(), a.Cd = null)
    };
    $O = function(a) {
      _.jB(a);
      _.wm(a, 1000001);
      this.b = a;
      this.f = _.BL(a);
      a = this.j = _.Y("a", this.f);
      a.style.textDecoration = "none";
      _.vm(a, "pointer");
      _.qm(a, ZO);
      a.href = _.dx;
      a.target = "_blank";
      a.style.color = "#444";
      this.Lf()
    };
    aP = function(a, b) {
      var c = a.D;
      if (c)
        b(c);
      else {
        var d = d
          ? Math.min(d, window.screen.width)
          : window.screen.width;
        var e = _.Y("div", window.document.body, new _.y(-window.screen.width, -window.screen.height), new _.z(d, window.screen.height));
        e.style.visibility = "hidden";
        a.B
          ? a.B ++: (a.B = 1, _.Y("div", e, _.ni).appendChild(a));
        window.setTimeout(function() {
          c = a.D;
          if (!c) {
            var f = a.parentNode,
              g = a.offsetWidth,
              h = a.offsetHeight;
            if (1 == _.X.type && 9 == window.document.documentMode || 4 == _.X.b)
              ++g,
              ++h;
            c = new _.z(Math.min(d, g), Math.min(window.screen.height, h));
            for (a.D = c; f.firstChild;)
              f.removeChild(f.firstChild);
            _.Zk(f)
          }
          a.B--;
          a.B || (a.D = null);
          _.Zk(e);
          e = null;
          b(c)
        }, 0)
      }
    };
    dP = function(a) {
      _.jB(a);
      _.wm(a, 1000001);
      this.b = a;
      var b = _.Y("div", a);
      a = _.BL(b);
      this.B = b;
      this.m = _.BL(_.Y("div"));
      b = _.Y("a", a);
      _.qm(b, "Dane mapy");
      b.style.textDecoration = "none";
      _.vm(b, "pointer");
      _.F.Za(b, "click", this);
      this.j = b;
      this.f = _.Y("span", a);
      this.l = bP(this);
      cP(this)
    };
    cP = function(a) {
      var b = a.get("size");
      b && aP(a.m, (0, _.t)(function(a) {
        var c = eP(this);
        _.ZA(this.f, c);
        a = a.width > b.width - this.l;
        var e = !this.get("hide");
        _.fB(this.b, e && !!c);
        _.fB(this.j, !(!c || !a));
        _.fB(this.f, !(!c || a));
        this.b.style.width = _.W(12 + _.Rf(this.f).width + _.Rf(this.j).width);
        _.F.trigger(this.b, "resize")
      },
      a))
    };
    eP = function(a) {
      return a.get("attributionText") || "Image may be subject to copyright"
    };
    bP = function(a) {
      var b = a.get("rmiWidth") || 0,
        c = a.get("tosWidth") || 0;
      a = a.get("scaleWidth") || 0;
      return b + c + a
    };
    gP = function(a) {
      a = _.Y("div", a);
      a.style.backgroundColor = "white";
      a.style.padding = _.W(15) + " " + _.W(21);
      a.style.border = _.W(1) + " solid #ababab";
      a.style.fontFamily = "Roboto,Arial,sans-serif";
      a.style.color = "#222";
      _.rB(a, "0 4px 16px rgba(0,0,0,0.2)");
      _.wm(a, 10000002);
      this.b = a;
      a = _.Y("div", this.b);
      a.style.padding = "0 0 10px 0";
      a.style.fontSize = "16px";
      _.pm("Dane mapy", a);
      a = _.Y("div", this.b);
      a.style.fontSize = "13px";
      this.j = _.pm("", a);
      new _.BH(this.b, (0, _.t)(this.f, this));
      fP(this)
    };
    fP = function(a) {
      var b;
      if (b = (b = a.get("size"))
        ? new _.z(Math.min(300, b.width - 10), Math.min(180, b.height - 10))
        : null) {
        _.Qf(a.b, new _.z(Math.max(0, b.width - 44), Math.max(0, b.height - 32)));
        var c = a.get("size");
        _.om(a.b, new _.y((c.width - b.width) / 2, (c.height - b.height) / 2))
      }
    };
    hP = function(a) {
      _.dB(a, "gmnoprint");
      _.am(a, "gmnoscreen");
      this.b = a;
      a = this.f = _.Y("div", a);
      a.style.fontFamily = "Roboto,Arial,sans-serif";
      a.style.fontSize = _.W(11);
      a.style.color = "#444";
      a.style.direction = "ltr";
      a.style.textAlign = "right";
      a.style.backgroundColor = "#f5f5f5"
    };
    iP = function(a, b) {
      var c = new dP(window.document.createElement("div"));
      c.bindTo("size", this);
      c.bindTo("rmiWidth", this);
      c.bindTo("attributionText", this);
      c.bindTo("fontLoaded", this);
      c.bindTo("isCustomPanorama", this);
      a = new gP(a);
      a.bindTo("size", this);
      a.bindTo("attributionText", this);
      _.F.addListener(c, "click", (0, _.t)(a.set, a, "visible", !0));
      a = new hP(window.document.createElement("div"));
      a.bindTo("attributionText", this);
      var d = new $O(window.document.createElement("div"));
      d.bindTo("fontLoaded", this);
      d.bindTo("mapTypeId", this);
      c.bindTo("tosWidth", d, "width");
      c.bindTo("mapTypeId", this);
      c.bindTo("scaleWidth", this);
      b && _.Sf[28]
        ? (c.bindTo("hide", b, "hideLegalNotices"), a.bindTo("hide", b, "hideLegalNotices"), d.bindTo("hide", b, "hideLegalNotices"))
        : (c.bindTo("isCustomPanorama", this), a.bindTo("hide", this, "isCustomPanorama"));
      this.b = c;
      this.f = a;
      this.j = d
    };
    jP = function(a) {
      _.Am(a);
      _.zm(a);
      a.style.fontFamily = "Roboto,Arial,sans-serif";
      a.style.fontSize = _.W(11);
      a.style.width = _.W(25);
      a.style.textAlign = "center";
      _.rB(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
      a.setAttribute("controlWidth", _.W(25));
      _.vm(a, "pointer");
      this.b = [];
      this.f = a
    };
    kP = function(a, b, c) {
      _.F.addDomListener(b, "mouseover", function() {
        b.style.color = "#bbb";
        b.style.fontWeight = "bold"
      });
      _.F.addDomListener(b, "mouseout", function() {
        b.style.color = "#999";
        b.style.fontWeight = "400"
      });
      _.F.Y(b, "click", a, function() {
        this.set("pano", c)
      })
    };
    pP = function(a) {
      var b = this;
      this.l = a;
      _.am(a, "gm-svpc");
      a.style.backgroundColor = "#fff";
      this.b = {
        Cf: null,
        active: null,
        Bf: null
      };
      this.f = 1;
      lP(this);
      this.set("position", mP(this).offset);
      _.F.Y(a, "mouseover", this, this.m);
      _.F.Y(a, "mouseout", this, this.B);
      a = this.j = new _.JH(a);
      a.bindTo("position", this);
      _.F.forward(a, "dragstart", this);
      _.F.forward(a, "drag", this);
      _.F.forward(a, "dragend", this);
      var c = this;
      _.F.addListener(a, "dragend", function() {
        c.set("position", mP(c).offset)
      });
      _.F.addListener(this, "mode_changed", function() {
        var a = b.get("mode");
        b.j.get("enabled") || b.j.set("enabled", !0);
        nP(b, a)
      });
      _.F.addListener(this, "display_changed", function() {
        return oP(b)
      });
      _.F.addListener(this, "mapsize_changed", function() {
        return oP(b)
      });
      this.set("mode", 1)
    };
    mP = function(a) {
      return 1 != a.f
        ? _.LM.Im || _.LM.hi
        : _.LM.hi
    };
    lP = function(a) {
      for (var b in a.b) {
        var c = a.b[b];
        c && c.parentNode && _.ef(c);
        a.b[b] = null
      }
      b = mP(a);
      c = a.l;
      if (0 == a.f)
        _.gB(c),
        _.F.trigger(c, "resize");
      else {
        _.tm(c);
        var d = _.W(1);
        _.rB(c, "0 1px 4px -1px rgba(0,0,0,0.3)");
        _.sB(c, _.W(2));
        c.style.width = _.W(qP.width);
        c.style.height = _.W(qP.height);
        var e = _.Y("div", c);
        e.style.position = "absolute";
        e.style.left = d;
        e.style.top = d;
        a.b.Cf = _.KL(e, b, 1);
        a.b.active = _.KL(e, b, 2);
        a.b.Bf = _.KL(e, b, 3);
        a.b.Cf.setAttribute("aria-label", "Sterowanie Pegmanem w Street View");
        a.b.active.setAttribute("aria-label", "Pegman znajduje si\u0119 na g\u00f3rze mapy");
        a.b.Bf.setAttribute("aria-label", "Sterowanie Pegmanem w Street View");
        c.setAttribute("controlWidth", qP.width);
        c.setAttribute("controlHeight", qP.height);
        _.F.trigger(c, "resize");
        nP(a, a.get("mode"))
      }
    };
    nP = function(a, b) {
      0 != a.f && (a = a.b, _.iB(a.Cf, 1 == b), _.iB(a.Bf, 2 == b), _.iB(a.active, 5 == b || 3 == b || 6 == b || 4 == b || 7 == b))
    };
    oP = function(a) {
      var b = a.get("mapSize");
      b = a.get("display") || b && 200 <= b.width && b && 200 <= b.height
        ? 1
        : 0;
      a.f != b && (a.f = b, lP(a))
    };
    rP = function(a) {
      var b = {
        clickable: !1,
        crossOnDrag: !1,
        draggable: !0,
        map: a,
        mapOnly: !0,
        pegmanMarker: !0,
        zIndex: 1E6
      };
      this.O = _.LM.tm;
      this.H = _.LM.um;
      this.F = _.LM.ph;
      this.U = _.LM.Xn;
      this.f = 0;
      this.B = this.l = -1;
      this.b = 0;
      this.j = this.m = null;
      a = this.R = new _.Ie(b);
      a.setDraggable(!0);
      var c = this.C = new _.Ie(b);
      b = this.D = new _.Ie(b);
      this.Pb(1);
      this.set("heading", 0);
      a.bindTo("icon", this, "pegmanIcon");
      a.bindTo("position", this, "dragPosition");
      a.bindTo("dragging", this);
      c.bindTo("icon", this, "lilypadIcon");
      c.bindTo("position", this, "position");
      c.bindTo("dragging", this);
      b.set("cursor", rN());
      b.set("icon", tN(this.U, 0));
      b.bindTo("position", this, "dragPosition");
      b.bindTo("dragging", this);
      _.F.addListener(this, "dragstart", this.sk);
      _.F.addListener(this, "drag", this.tk);
      _.F.addListener(this, "dragend", this.rk);
      _.F.forward(a, "dragstart", this);
      _.F.forward(a, "drag", this);
      _.F.forward(a, "dragend", this)
    };
    uP = function(a) {
      var b = a.zc(),
        c = _.LL(b);
      a.R.setVisible(c || 7 == b);
      a.set("pegmanIcon", c
        ? sP(a)
        : 7 == b
          ? tP(a)
          : void 0)
    };
    vP = function(a) {
      a.C.setVisible(!1);
      a.D.setVisible(_.LL(a.zc()))
    };
    sP = function(a) {
      var b = a.zc() - 3;
      return tN(a.F, b)
    };
    tP = function(a) {
      var b = wP(a);
      a.B != b && (a.B = b, a.m = tN(a.H, b));
      return a.m
    };
    xP = function(a) {
      var b = wP(a);
      a.l != b && (a.l = b, a.j = tN(a.O, b));
      return a.j
    };
    wP = function(a) {
      (a = _.kk(a.get("heading")) % 360) || (a = 0);
      0 > a && (a += 360);
      return Math.round(a / 360 * 16) % 16
    };
    zP = function(a, b, c, d, e, f, g) {
      this.G = a;
      this.F = e;
      this.B = d;
      this.H = g || null;
      this.m = this.j = !1;
      this.C = null;
      this.Ue(1);
      yP(this, c, b);
      this.b = new _.IL;
      this.b.bindTo("mapHeading", this);
      this.b.bindTo("tilt", this);
      this.b.bindTo("client", this);
      this.b.bindTo("client", a, "svClient");
      this.f = this.D = null;
      a = this.G.getDiv();
      this.l = _.rn(c, a)
    };
    AP = function(a, b) {
      return _.Cb(b - (a || 0), 0, 360)
    };
    yP = function(a, b, c) {
      var d = a.G.__gm,
        e = new pP(b);
      e.bindTo("mode", a);
      e.bindTo("mapSize", a);
      e.bindTo("display", a);
      var f = new rP(a.G);
      f.bindTo("mode", a);
      f.bindTo("dragPosition", a);
      f.bindTo("position", a);
      var g = new _.GC([
        "mapHeading", "streetviewHeading"
      ], "heading", AP);
      g.bindTo("streetviewHeading", a, "heading");
      g.bindTo("mapHeading", a.G, "heading");
      f.bindTo("heading", g);
      a.bindTo("pegmanDragging", f, "dragging");
      d.bindTo("pegmanDragging", a);
      var h = a.G.getDiv();
      _.F.bind(e, "dragstart", a, function() {
        this.l = _.rn(b, h);
        _.O("streetview", (0, _.t)(function(a) {
          if (!this.D) {
            var b = (0, _.t)(this.B.getUrl, this.B),
              c = d.get("panes");
            a = this.D = new a.uk(c.floatPane, b, this.F);
            a.bindTo("description", this);
            a.bindTo("mode", this);
            a.bindTo("thumbnailPanoId", this, "panoId");
            a.bindTo("pixelBounds", d);
            b = new _.uH;
            b.bindTo("center", d, "projectionCenterQ");
            b.bindTo("zoom", d);
            b.bindTo("offset", d);
            b.bindTo("projection", this.G);
            b.bindTo("latLngPosition", f, "dragPosition");
            a.bindTo("pixelPosition", b)
          }
        },
        this))
      });
      _.x([
        "dragstart", "drag", "dragend"
      ], function(a) {
        _.F.addListener(e, a, function() {
          _.F.trigger(f, a, {
            latLng: f.get("position"),
            pixel: e.get("position")
          })
        })
      });
      _.F.addListener(e, "position_changed", function() {
        var b = e.get("position");
        (b = c({
          clientX: b.x + a.l.x,
          clientY: b.y + a.l.y
        })) && f.set("dragPosition", b)
      });
      _.F.addListener(f, "dragend", (0, _.t)(a.bi, a, !1));
      _.F.addListener(f, "hover", (0, _.t)(a.bi, a, !0))
    };
    BP = function(a) {
      var b = a.G.overlayMapTypes,
        c = a.b;
      b.forEach(function(a, e) {
        a == c && b.removeAt(e)
      });
      a.j = !1
    };
    CP = function(a) {
      var b = a.get("projection");
      b && b.f && (a.G.overlayMapTypes.push(a.b), a.j = !0)
    };
    DP = function(a, b, c) {
      this.m = a;
      this.B = c;
      this.f = _.od(0);
      c = new _.Ok(9 == b.nodeType
        ? b
        : b.ownerDocument || b.document);
      this.C = _.Mk(c.b, "span");
      c.appendChild(b, this.C);
      this.b = _.Mk(c.b, "div");
      c.appendChild(b, this.b);
      pN(this.b, "position", "relative");
      pN(this.b, "display", "inline-block");
      this.b.style.height = _.tB(8, !0);
      pN(this.b, "bottom", "-1px");
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      _.uB(b, "100%", 4);
      pN(b, "position", "absolute");
      qN(b, 0, 0);
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      _.uB(b, 4, 8);
      qN(b, 0, 0);
      pN(b, "backgroundColor", "#fff");
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      _.uB(b, 4, 8);
      pN(b, "position", "absolute");
      pN(b, "backgroundColor", "#fff");
      pN(b, "right", "0px");
      pN(b, "bottom", "0px");
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      pN(b, "position", "absolute");
      pN(b, "backgroundColor", "#666");
      b.style.height = _.tB(2, !0);
      pN(b, "left", "1px");
      pN(b, "bottom", "1px");
      pN(b, "right", "1px");
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      pN(b, "position", "absolute");
      _.uB(b, 2, 6);
      qN(b, 1, 1);
      pN(b, "backgroundColor", "#666");
      b = _.Mk(c.b, "div");
      c.appendChild(this.b, b);
      _.uB(b, 2, 6);
      pN(b, "position", "absolute");
      pN(b, "backgroundColor", "#666");
      pN(b, "bottom", "1px");
      pN(b, "right", "1px");
      this.j = !0;
      this.l = 0;
      _.Nn(a, "click", (0, _.t)(this.F, this));
      _.yj(this.B, (0, _.t)(this.D, this))
    };
    EP = function(a, b, c, d) {
      var e = a;
      1 > a && (e = c, b = d);
      for (a = 1; e >= 10 * a;)
        a *= 10;
      e >= 5 * a && (a *= 5);
      e >= 2 * a && (a *= 2);
      return {
        An: Math.round(80 * a / e),
        ul: a + " " + b
      }
    };
    MP = function(a) {
      _.Pf.call(this);
      this.b = a.Th || null;
      this.Hl = a.vd;
      this.Va = a.Bm || null;
      this.Qb = a.el || null;
      this.G = a.map || null;
      this.l = a.qo || null;
      this.om = a.ro || null;
      this.Cl = a.po || null;
      this.xl = a.Di || null;
      this.Zc = this.dc = this.Yc = !1;
      this.j = this.Vc = null;
      this.Id = a.xh;
      this.cc = ZN("W\u0142\u0105cz widok pe\u0142noekranowy");
      this.D = null;
      this.ef = a.nd;
      this.C = null;
      this.xb = !1;
      this.Ba = this.m = this.O = null;
      this.za = [];
      this.H = null;
      this.Fd = {};
      this.f = {};
      this.F = this.U = this.R = this.sa = null;
      this.wb = _.Y("div");
      this.nb = null;
      _.Am(this.wb);
      FP || (FP = !0, _.Jm("@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}"));
      var b = this.yb = new aO(_.M(_.wf(_.Q), 14));
      b.bindTo("center", this);
      b.bindTo("zoom", this);
      b.bindTo("mapTypeId", this);
      b.bindTo("pano", this);
      b.bindTo("position", this);
      b.bindTo("pov", this);
      b.bindTo("heading", this);
      b.bindTo("tilt", this);
      a.map && _.F.addListener(b, "url_changed", function() {
        a.map.set("mapUrl", b.get("url"))
      });
      var c = new sN(_.wf(_.Q));
      c.bindTo("center", this);
      c.bindTo("zoom", this);
      c.bindTo("mapTypeId", this);
      c.bindTo("pano", this);
      c.bindTo("heading", this);
      this.Zl = c;
      GP(this);
      HP(this);
      IP(this);
      JP(this, a.ih);
      a.Ci && KP(this);
      _.Sf[35] && LP(this)
    };
    NP = function(a) {
      var b = a.get("streetViewControl"),
        c = a.get("disableDefaultUI"),
        d = !!a.je();
      (_.p(b) || c) && _.wn(a.G, b
        ? "Cvy"
        : "Cvn");
      null == b && (b = !c);
      a = d && !a.l;
      return b && a
    };
    OP = function(a) {
      return !a.get("disableDefaultUI") && !!a.l
    };
    JP = function(a, b) {
      var c = a.b;
      _.x(b, function(a, b) {
        function d(a) {
          if (a) {
            var d = a.index;
            _.Hb(d) || (d = 1E3);
            d = Math.max(d, -999);
            _.wm(a, Math.min(999999, a.style.zIndex || 0));
            c.addElement(a, b, !1, d)
          }
        }
        a && (a.forEach(d), _.F.addListener(a, "insert_at", function(b) {
          d(a.getAt(b))
        }), _.F.addListener(a, "remove_at", function(a, b) {
          c.Lb(b)
        }))
      })
    };
    LP = function(a) {
      if (a.G) {
        var b = new yN(window.document.createElement("div"));
        b.bindTo("card", a.G.__gm);
        b = b.getDiv();
        a.b.addElement(b, 1, !0, .1)
      }
    };
    IP = function(a) {
      a.D && (a.D.unbindAll(), a.D.release(), a.D = null, a.b.Lb(a.cc));
      var b = ZN("W\u0142\u0105cz widok pe\u0142noekranowy"),
        c = new WN(a.Id, b, a.ef);
      c.bindTo("display", a, "fullscreenControl");
      c.bindTo("disableDefaultUI", a);
      c.bindTo("mapTypeId", a);
      var d = a.get("fullscreenControlOptions") || {};
      a.b.addElement(b, d && d.position || 7, !0, -1007);
      a.D = c;
      a.cc = b
    };
    HP = function(a) {
      var b = new iP(a.Hl, a.G || a.l);
      b.bindTo("size", a);
      b.bindTo("rmiWidth", a);
      b.bindTo("attributionText", a);
      b.bindTo("fontLoaded", a);
      b.bindTo("mapTypeId", a);
      b.bindTo("isCustomPanorama", a);
      var c = b.b.getDiv();
      a.b.addElement(c, 12, !0, -1E3);
      c = b.f.getDiv();
      a.b.addElement(c, 12, !0, -1005);
      c = b.j.getDiv();
      a.b.addElement(c, 12, !0, -1002);
      a.Ba = b
    };
    GP = function(a) {
      if (!_.Sf[2]) {
        var b = !!_.Sf[21];
        b = (a.G
          ? eO(a.G, a.yb, b)
          : fO(a.l, a.yb, b)).getDiv();
        a.b.addElement(b, 10, !0, -1E3)
      }
    };
    KP = function(a) {
      var b = _.wf(_.Q);
      if (!_.jm()) {
        var c = window.document.createElement("div"),
          d = new _.GL(c, a.G, _.M(b, 14));
        a.b.addElement(c, 12, !0, -1003);
        d.bindTo("available", a, "rmiAvailable");
        d.bindTo("bounds", a);
        _.Sf[17]
          ? (d.bindTo("enabled", a, "reportErrorControl"), a.G.bindTo("rmiLinkData", d))
          : d.set("enabled", !0);
        d.bindTo("mapSize", a, "size");
        d.bindTo("mapTypeId", a);
        d.bindTo("sessionState", a.Zl);
        a.bindTo("rmiWidth", d, "width");
        _.F.addListener(d, "rmilinkdata_changed", function() {
          var a = d.get("rmiLinkData");
          this.G.set("rmiUrl", a && a.url)
        })
      }
    };
    PP = function(a) {
      a.fa && (a.fa.unbindAll && a.fa.unbindAll(), a.fa = null);
      a.sa && (a.sa.unbindAll(), a.sa = null);
      a.R && (a.R.unbindAll(), a.R = null);
      a.H && (a.si(a.H), _.Hg(a.H.S), a.H = null)
    };
    RP = function(a) {
      PP(a);
      if (a.Va) {
        var b = QP(a);
        if (b) {
          var c = _.Y("div");
          _.jB(c);
          c.style.margin = _.W(10);
          _.F.addDomListener(c, "mouseover", function() {
            _.wm(c, 1E6)
          });
          _.F.addDomListener(c, "mouseout", function() {
            _.wm(c, 0)
          });
          _.wm(c, 0);
          var d = a.get("mapTypeControlOptions") || {},
            e = a.R = new xN(a.Va, d.mapTypeIds);
          e.bindTo("aerialAvailableAtZoom", a);
          e.bindTo("zoom", a);
          var f = e.l;
          a.b.addElement(c, d.position || 1, !1, .2);
          d = null;
          2 == b
            ? (d = new AO(c, f), e.bindTo("mapTypeId", d))
            : d = new yO(c, f, _.kO, uO);
          b = a.sa = new BO(e.j);
          b.set("labels", !0);
          d.bindTo("mapTypeId", b, "internalMapTypeId");
          d.bindTo("labels", b);
          d.bindTo("terrain", b);
          d.bindTo("tilt", a, "desiredTilt");
          d.bindTo("fontLoaded", a);
          d.bindTo("mapSize", a, "size");
          d.bindTo("display", a, "mapTypeControl");
          b.bindTo("mapTypeId", a);
          _.F.trigger(c, "resize");
          a.H = {
            S: c,
            be: null
          };
          a.fa = d
        }
      }
    };
    QP = function(a) {
      if (!a.Va)
        return null;
      var b = (a.get("mapTypeControlOptions") || {}).style || 0,
        c = a.get("mapTypeControl"),
        d = a.gd();
      if (!_.p(c) && d || _.p(c) && !c)
        return _.wn(a.G, "Cmn"),
        null;

      1 == b
        ? _.wn(a.G, "Cmh")
        : 2 == b && _.wn(a.G, "Cmd");
      return 2 == b || 1 == b
        ? b
        : 1
    };
    SP = function(a, b) {
      b = new XO(b, _.$w.b);
      b = a.C = b;
      b.bindTo("zoomRange", a);
      b.bindTo("display", a, "zoomControl");
      b.bindTo("disableDefaultUI", a);
      b.bindTo("mapSize", a, "size");
      b.bindTo("mapTypeId", a);
      b.bindTo("zoom", a);
      return b.getDiv()
    };
    TP = function(a) {
      var b = new _.gH(QN, {tc: _.$w.b}),
        c = new RN(b);
      c.bindTo("pov", a);
      c.bindTo("disableDefaultUI", a);
      c.bindTo("panControl", a);
      c.bindTo("mapSize", a, "size");
      return b.S
    };
    UP = function(a) {
      var b = _.Y("div");
      _.jB(b);
      a.j = new SO(b);
      a.j.bindTo("mapSize", a, "size");
      a.j.bindTo("rotateControl", a);
      a.j.bindTo("heading", a);
      a.j.bindTo("tilt", a);
      a.j.bindTo("aerialAvailableAtZoom", a);
      return b
    };
    VP = function(a) {
      var b = _.Y("div"),
        c = a.U = new jP(b);
      c.bindTo("pano", a);
      c.bindTo("floors", a);
      c.bindTo("floorId", a);
      return b
    };
    aQ = function(a) {
      a.C && (YO(a.C), a.C.unbindAll(), a.C = null);
      a.j && (a.j.unbindAll(), a.j = null);
      a.U && (a.U.unbindAll(), a.U = null);
      _.x(a.za, (0, _.t)(a.si, a));
      a.za = [];
      var b = a.Yc = WP(a),
        c = a.Vc = XP(a),
        d = a.xb = NP(a),
        e = a.Zc = YP(a);
      a.dc = ZP(a);
      var f = (0, _.t)(function(a) {
          return (this.get(a) || {}).position
        },
        a),
        g = b && (f("panControlOptions") || 9);
      b = c && (f("zoomControlOptions") || 3 == c && 6 || 9);
      var h = 3 == c || _.jm();
      d = d && (f("streetViewControlOptions") || 9);
      e = e && (f("rotateControlOptions") || h && 6 || 9);
      var l = a.Fd,
        n = (0, _.t)(function(a) {
          if (!l[a]) {
            var b = window.document.createElement("div");
            _.jB(b);
            _.am(b, "gm-bundled-control");
            10 == a || 11 == a || 12 == a || 6 == a || 9 == a
              ? _.am(b, "gm-bundled-control-on-bottom")
              : _.dB(b, "gm-bundled-control-on-bottom");
            b.style.margin = _.W(10);
            _.zm(b);
            l[a] = new XN(b, a);
            this.b.addElement(b, a, !1, .1)
          }
        },
        a);
      f = (0, _.t)(function(a, b) {
        n(a);
        a = l[a];
        a.add(b);
        this.za.push({S: b, be: a})
      },
      a);
      b && (c = SP(a, c), f(b, c));
      d && ($P(a), f(d, a.wb));
      g && a.l && _.ym.b && (c = TP(a), f(g, c));
      e && (g = UP(a), f(e, g));
      a.F && (a.F.remove(), a.F = null);
      if (g = OP(a) && 9)
        c = VP(a),
        f(g, c);
      a.j && a.C && a.C.Cd && e == b && a.j.bindTo("mouseover", a.C.Cd);
      _.x(a.za, function(a) {
        _.F.trigger(a.S, "resize")
      })
    };
    WP = function(a) {
      var b = a.get("panControl"),
        c = a.gd();
      if (_.p(b) || c)
        return a.l || _.wn(a.G, b
          ? "Cpy"
          : "Cpn"),
        !!b;
      b = a.je();
      return _.jm() || !b
        ? !1
        : 400 <= b.width && 370 <= b.height || !!a.l
    };
    ZP = function(a) {
      return a.l
        ? !1
        : a.gd()
          ? 1 == a.get("myLocationControl")
          : 0 != a.get("myLocationControl")
    };
    YP = function(a) {
      var b = a.get("rotateControl"),
        c = a.gd();
      (_.p(b) || c) && _.wn(a.G, b
        ? "Cry"
        : "Crn");
      return !a.je() || a.l
        ? !1
        : c
          ? 1 == b
          : 0 != b
    };
    XP = function(a) {
      var b = a.get("zoomControl"),
        c = a.gd();
      return 0 == b || c && !_.p(b)
        ? (a.l || _.wn(a.G, "Czn"), null)
        : a.je()
          ? 1
          : null
    };
    $P = function(a) {
      if (!a.nb && a.Qb && a.G) {
        var b = a.nb = new zP(a.G, a.Qb, a.wb, a.om, _.Q, a.xl, a.Cl || void 0);
        b.bindTo("mapHeading", a, "heading");
        b.bindTo("tilt", a);
        b.bindTo("projection", a.G);
        b.bindTo("mapTypeId", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("display", a, "streetViewControl");
        b.bindTo("disableDefaultUI", a);
        a.streetView_changed()
      }
    };
    bQ = function(a) {
      _.Pf.call(this);
      this.f = a;
      _.F.Y(a, "resize", this, this.da);
      var b = this.b = {};
      _.x([
        1,
        2,
        3,
        5,
        4,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ], function(a) {
        b[a] = []
      })
    };
    cQ = function(a) {
      for (var b = 0, c = 0, d = a.length; c < d; ++c)
        b = Math.max(a[c].height, b);
      var e = d = 0;
      for (c = a.length; 0 < c; --c) {
        var f = a[c - 1];
        if (b == f.height) {
          f.width > e && f.width > f.height
            ? e = f.height
            : d = f.width;
          break
        } else
          e = Math.max(f.height, e)
      }
      return new _.z(d, e)
    };
    fQ = function(a, b, c, d) {
      for (var e = 0, f = 0, g, h = [], l = 0, n = a.length; l < n; ++l) {
        var q = a[l].element;
        g = dQ(q);
        var r = dQ(q, !0),
          u = eQ(q),
          B = eQ(q, !0),
          w = q.style;
        w[b] = _.W("left" == b
          ? e
          : e + (g - r));
        w[c] = _.W("top" == c
          ? 0
          : u - B);
        g = e + g;
        u > f && (f = u, d.push({minWidth: e, height: f}));
        e = g;
        a[l].border || h.push(new _.z(e, u));
        _.um(q)
      }
      return cQ(h)
    };
    gQ = function(a, b, c, d) {
      for (var e = 0, f = [], g = 0, h = a.length; g < h; ++g) {
        for (var l = a[g].element, n = dQ(l), q = eQ(l), r = dQ(l, !0), u = eQ(l, !0), B = 0, w = 0, C = d.length; w < C && d[w].minWidth <= n; ++w)
          B = d[w].height;
        e = Math.max(B, e);
        B = l.style;
        B[c] = _.W("top" == c
          ? e
          : e + q - u);
        B[b] = _.W("left" == b
          ? 0
          : n - r);
        e += q;
        a[g].border || f.push(new _.z(n, e));
        _.um(l)
      }
      return cQ(f)
    };
    hQ = function(a, b, c, d) {
      for (var e = 0, f = 0, g = 0, h = a.length; g < h; ++g) {
        var l = a[g].element,
          n = dQ(l),
          q = eQ(l),
          r = dQ(l, !0);
        "left" == b
          ? l.style.left = 0
          : "right" == b
            ? l.style.right = _.W(n - r)
            : l.style.left = _.W((c - r) / 2);
        e += q;
        a[g].border || (f = Math.max(n, f))
      }
      b = (d - e) / 2;
      g = 0;
      for (h = a.length; g < h; ++g)
        l = a[g].element,
        l.style.top = _.W(b),
        b += eQ(l),
        _.um(l);
      return f
    };
    iQ = function(a, b, c) {
      for (var d = 0, e = 0, f = 0, g = a.length; f < g; ++f) {
        var h = a[f].element,
          l = dQ(h),
          n = eQ(h),
          q = eQ(h, !0);
        h.style[b] = _.W("top" == b
          ? 0
          : n - q);
        d += l;
        a[f].border || (e = Math.max(n, e))
      }
      b = (c - d) / 2;
      f = 0;
      for (g = a.length; f < g; ++f)
        h = a[f].element,
        h.style.left = _.W(b),
        b += dQ(h),
        _.um(h);
      return e
    };
    dQ = function(a, b) {
      if (!_.hB(a))
        return 0;
      b = !b && _.kk(a.getAttribute("controlWidth"));
      if (!_.Hb(b) || (0, window.isNaN)(b))
        b = a.offsetWidth;
      a = _.on(a);
      b += _.kk(a.marginLeft) || 0;
      return b += _.kk(a.marginRight) || 0
    };
    eQ = function(a, b) {
      if (!_.hB(a))
        return 0;
      b = !b && _.kk(a.getAttribute("controlHeight"));
      if (!_.Hb(b) || (0, window.isNaN)(b))
        b = a.offsetHeight;
      a = _.on(a);
      b += _.kk(a.marginTop) || 0;
      return b += _.kk(a.marginBottom) || 0
    };
    jQ = function(a, b) {
      this.j = _.wf(_.Q);
      this.b = a;
      this.b.style.visibility = "hidden";
      this.b.style.fontSize = "13px";
      this.b.style.textOverflow = "ellipsis";
      this.b.style.overflow = "hidden";
      this.b.style.whiteSpace = "nowrap";
      this.b.style.fontFamily = "Roboto, Arial";
      this.b.style.padding = "6px";
      this.f = window.document.createElement("a");
      this.f.href = "";
      this.f.target = "_blank";
      this.f.textContent = "Zobacz w Mapach Google";
      this.f.style.cursor = "pointer";
      this.f.style.color = "#427fed";
      this.f.style.textDecoration = "none";
      this.b.appendChild(this.f);
      _.yj(b, (0, _.t)(this.l, this))
    };
    kQ = function(a, b) {
      this.f = a;
      this.b = !1;
      this.B = !!b;
      this.m = 0;
      this.l = null;
      _.F.Y(window, "focusout", this, this.vn);
      var c = this;
      _.F.Y(window.document, "click", this, this.dl);
      new _.oC(this.f, "focusin", function() {
        c.b = !0
      });
      new _.oC(this.f, "focusout", function(a) {
        c.f.contains(_.$k(a)) || (c.b = !1)
      });
      _.X.j && 2 == _.X.b
        ? (_.F.Y(window.document, "keydown", this, this.ah), _.F.Y(window.document, "keypress", this, this.Mh))
        : (_.F.Y(window.document, "keydown", this, this.Mh), _.F.Y(window.document, "keypress", this, this.ah));
      _.F.Y(window.document, "keyup", this, this.Ln);
      this.j = {}
    };
    lQ = function(a) {
      var b = a.xg();
      _.Hb(b) && a.yg(b + 1)
    };
    mQ = function(a) {
      var b = a.xg();
      _.Hb(b) && a.yg(b - 1)
    };
    nQ = function(a, b, c) {
      _.F.trigger(a, "panbyfraction", b, c)
    };
    oQ = function(a, b) {
      if (b.ctrlKey || b.altKey || b.metaKey || !a.b || 0 == a.get("enabled") || a.get("streetViewDisable"))
        return !0;
      a = _.$k(b);
      return !a || "INPUT" != a.nodeName && "SELECT" != a.nodeName && "TEXTAREA" != a.nodeName
        ? !1
        : !0
    };
    pQ = _.k();
    _.Ze.prototype.Wd = _.oj(6, _.ra(1));
    _.bf.prototype.Wd = _.oj(5, _.qa("b"));
    var WM = /&/g,
      XM = /</g,
      YM = />/g,
      ZM = /"/g,
      $M = /'/g,
      aN = /\x00/g,
      VM = /[\x00&<>"']/,
      nN = {};
    _.v(sN, _.G);
    sN.prototype.changed = function(a) {
      if ("sessionState" != a) {
        a = new _.eJ;
        var b = this.get("zoom"),
          c = this.get("center"),
          d = this.get("pano");
        if (null != b && null != c || null != d) {
          var e = this.b;
          (new _.gJ(_.N(a, 1))).data[0] = _.tf(e);
          (new _.gJ(_.N(a, 1))).data[1] = _.uf(e);
          e = _.tK(a);
          var f = this.get("mapTypeId");
          "hybrid" == f || "satellite" == f
            ? e.data[0] = 3
            : (e.data[0] = 0, "terrain" == f && (f = new _.tJ(_.N(a, 4)), _.Md(f, 0, 4)));
          f = new _.iJ(_.N(e, 1));
          f.data[0] = 2;
          if (c) {
            var g = c.lng();
            f.data[1] = g;
            c = c.lat();
            f.data[2] = c
          }
          _.Ga(b) && (f.data[5] = b);
          f.setHeading(this.get("heading") || 0);
          d && ((new _.kJ(_.N(e, 2))).data[0] = d);
          this.set("sessionState", a)
        } else
          this.set("sessionState", null)
      }
    };
    var qQ = [
        37, 38, 39, 40
      ],
      rQ = {
        38: [
          0, -1
        ],
        40: [
          0, 1
        ],
        37: [
          -1, 0
        ],
        39: [1, 0]
      };
    _.v(uN, _.G);
    _.Mj(xN, _.G);
    _.v(yN, _.G);
    yN.prototype.card_changed = function() {
      var a = this.get("card");
      this.b && this.f.removeChild(this.b);
      if (a) {
        var b = this.b = _.Y("div");
        b.style.backgroundColor = "white";
        b.appendChild(a);
        b.style.margin = _.W(10);
        b.style.padding = _.W(1);
        _.rB(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
        _.sB(b, _.W(2));
        this.f.appendChild(b);
        this.b = b
      } else
        this.b = null
    };
    yN.prototype.getDiv = _.qa("f");
    _.v(AN, _.Cn);
    var sQ = [];
    AN.prototype.listen = function(a, b, c, d) {
      _.Ja(b) || (b && (sQ[0] = b.toString()), b = sQ);
      for (var e = 0; e < b.length; e++) {
        var f = _.Nn(a, b[e], c || this.handleEvent, d || !1, this.f || this);
        if (!f)
          break;
        this.b[f.key] = f
      }
      return this
    };
    AN.prototype.Qa = function() {
      AN.vb.Qa.call(this);
      CN(this)
    };
    AN.prototype.handleEvent = function() {
      throw Error("EventHandler.handleEvent not implemented");
    };
    var eN = {},
      DN = null;
    _.v(IN, _.io);
    IN.prototype.b = function(a) {
      TM(this, a)
    };
    _.v(JN, IN);
    JN.prototype.stop = function(a) {
      EN(this);
      this.j = 0;
      a && (this.f = 1);
      KN(this, this.f);
      this.b("stop");
      this.b("end")
    };
    JN.prototype.Qa = function() {
      0 == this.j || this.stop(!1);
      this.b("destroy");
      JN.vb.Qa.call(this)
    };
    JN.prototype.b = function(a) {
      TM(this, new LN(a, this))
    };
    _.v(LN, _.Dn);
    _.v(NN, _.K);
    NN.prototype.getHeading = function() {
      return _.L(this, 0)
    };
    NN.prototype.setHeading = function(a) {
      this.data[0] = a
    };
    _.v(QN, _.$G);
    QN.prototype.fill = function(a) {
      _.YG(this, 0, _.UE(a))
    };
    var ON = "t-avKK8hDgg9Q";
    _.v(RN, _.G);
    _.m = RN.prototype;
    _.m.changed = function() {
      !this.j && this.b && (this.b.stop(), this.b = null);
      var a = this.get("pov");
      if (a) {
        var b = new NN;
        b.setHeading(_.Cb(-a.heading, 0, 360));
        _.hH(this.f, [b])
      }
    };
    _.m.Xf = function() {
      var a = this.get("mapSize"),
        b = this.get("panControl"),
        c = !!this.get("disableDefaultUI");
      _.iB(this.f.S, !!(b || !_.p(b) && !c && a && 200 <= a.width && 200 <= a.height));
      _.F.trigger(this.f.S, "resize")
    };
    _.m.mapSize_changed = RN.prototype.Xf;
    _.m.disableDefaultUI_changed = RN.prototype.Xf;
    _.m.panControl_changed = RN.prototype.Xf;
    _.m.oi = function(a) {
      var b = this.get("pov");
      if (b) {
        var c = _.qA(b.heading);
        SN(this, c, a
          ? 90 * Math.floor((c + 100) / 90)
          : 90 * Math.ceil((c - 100) / 90), b.pitch, b.pitch)
      }
    };
    _.m.Oo = function() {
      var a = this.get("pov");
      if (a) {
        var b = _.qA(a.heading);
        SN(this, b, 180 > b
          ? 0
          : 360, a.pitch, 0)
      }
    };
    _.m.Qi = function(a, b) {
      this.j = !0;
      var c = this.get("pov");
      c && (this.set("pov", {
        heading: b.coords[0],
        pitch: b.coords[1],
        zoom: c.zoom
      }), this.j = !1, a && (this.b = null))
    };
    _.Mj(WN, _.G);
    WN.prototype.release = function() {
      for (var a = _.Ca(this.l), b = a.next(); !b.done; b = a.next())
        _.F.removeListener(b.value);
      this.l.length = 0
    };
    var TN = [
      {
        Ud: -52,
        close: -78,
        top: -86
      }, {
        Ud: 0,
        close: -26,
        top: -86
      }
    ];
    XN.prototype.add = function(a) {
      this.b.appendChild(a);
      a.style.position = "absolute";
      a = {
        element: a
      };
      this.f.push(a);
      a.ag = _.F.addListener(a.element, "resize", (0, _.t)(this.j, this, a));
      this.j(a)
    };
    XN.prototype.remove = function(a) {
      this.b.removeChild(a);
      UM(this.f, (0, _.t)(function(b, c) {
        b.element == a && (this.f.splice(c, 1), b && (this.j(b), b.ag && (_.F.removeListener(b.ag), delete b.ag)))
      },
      this))
    };
    XN.prototype.j = function(a) {
      a.width = _.kk(a.element.getAttribute("controlWidth"));
      a.height = _.kk(a.element.getAttribute("controlHeight"));
      a.width || (a.width = a.element.offsetWidth);
      a.height || (a.height = a.element.offsetHeight);
      var b = 0;
      _.x(this.f, function(a) {
        var c = a.element;
        _.hB(c) && "hidden" != c.style.visibility && (b = Math.max(b, a.width))
      });
      var c = 0,
        d = !1;
      this.l(function(a) {
        var e = a.element;
        _.hB(e) && "hidden" != e.style.visibility && (d
          ? c += 10
          : d = !0, e = e.style, e.left = _.W((b - a.width) / 2), e.top = _.W(c), c += a.height)
      });
      a = this.b;
      var e = b,
        f = c;
      a.setAttribute("controlWidth", e);
      a.setAttribute("controlHeight", f);
      _.fB(this.b, e || f);
      _.F.trigger(this.b, "resize")
    };
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#666666;}</style><title>My Location 4</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#333333;}</style><title>My Location 5</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#111111;}</style><title>My Location 6</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#B3B3B3;}</style><title>My Location 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 10v11H-1V-1h22v11z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{fill:#E6E6E6;}</style><title>My Location 2</title><path class="st0" d="M10 3h2V0h-2v3zm9 9h3v-2h-3v2zM0 12h3v-2H0v2zm10 10h2v-3h-2v3z"/><path class="st0" d="M11 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7m0-16c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9"/><path class="st0" d="M11 7c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4"/></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#FFFFFF;}</style><title>My Location 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#4285F4;}</style><title>My Location Blue 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#3367D6;}</style><title>My Location Blue 2</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.bH('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#2A56C6;}</style><title>My Location Blue 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.v(aO, _.G);
    aO.prototype.changed = function(a) {
      if ("url" != a)
        if (this.get("pano"))
          c = this.get("pov"),
          b = this.get("position"),
          c && b && (a = _.zL(c, b, this.get("pano"), this.b), this.set("url", a));
        else {
          a = {};
          if (c = this.get("center"))
            c = new _.D(c.lat(), c.lng()),
            a.ll = c.toUrlValue();
          c = this.get("zoom");
          _.Hb(c) && (a.z = c);
          c = this.get("mapTypeId");
          "terrain" == c
            ? b = "p"
            : "hybrid" == c
              ? b = "h"
              : b = _.Tw[c];
          b && (a.t = b);
          if (c = this.get("pano")) {
            a.z = 17;
            a.layer = "c";
            var b = this.get("position");
            b && (a.cbll = b.toUrlValue());
            a.panoid = c;
            var c = this.get("pov");
            c && (a.cbp = "12," + c.heading + ",," + Math.max(c.zoom - 3) + "," + -c.pitch)
          }
          a.hl = _.tf(_.wf(_.Q));
          a.gl = _.uf(_.wf(_.Q));
          45 == this.get("tilt") && (a.deg = this.get("heading") || 0);
          a.mapclient = _.Sf[35]
            ? "embed"
            : "apiv3";
          var d = [];
          _.yb(a, function(a, b) {
            d.push(a + "=" + b)
          });
          this.set("url", this.b + "?" + d.join("&"))
        }
      };
    bO.prototype.getDiv = _.qa("j");
    bO.prototype.setUrl = function(a) {
      a
        ? (this.f.setAttribute("href", a), this.f.setAttribute("title", "Kliknij, aby wy\u015bwietli\u0107 ten obszar w serwisie Mapy Google"))
        : (this.f.removeAttribute("title"), this.f.removeAttribute("href"))
    };
    _.Mj(gO, _.G);
    _.Mj(jO, _.G);
    jO.prototype.ia = _.qa("b");
    _.v(oO, _.G);
    _.v(pO, _.G);
    _.v(qO, _.G);
    _.v(sO, _.G);
    sO.prototype.f = function() {
      var a = this.b;
      a.timeout && (window.clearTimeout(a.timeout), a.timeout = null)
    };
    sO.prototype.active_changed = function() {
      this.f();
      if (this.get("active"))
        tO(this);
      else {
        var a = this.b;
        a.ca && (_.x(a.ca, _.F.removeListener), a.ca = null);
        _.gB(a)
      }
    };
    _.Mj(yO, _.G);
    _.v(AO, _.G);
    AO.prototype.f = function() {
      var a = this.get("mapSize");
      a = !!(this.get("display") || a && 200 <= a.width && 200 <= a.height);
      _.fB(this.b, a);
      _.F.trigger(this.b, "resize")
    };
    AO.prototype.mapSize_changed = AO.prototype.f;
    AO.prototype.display_changed = AO.prototype.f;
    _.v(BO, _.G);
    BO.prototype.changed = function(a) {
      if (!this.b)
        if ("mapTypeId" == a) {
          a = this.get("mapTypeId");
          var b = this.G[a];
          b && b.ua && (a = b.ua);
          CO(this, "internalMapTypeId", a);
          b && b.xd && CO(this, b.xd, b.value)
        } else
          DO(this)
    };
    _.Mj(MO, _.G);
    MO.prototype.l = function() {
      var a =+ this.get("heading") || 0;
      this.set("heading", (a + 270) % 360)
    };
    MO.prototype.B = function() {
      this.j = !this.j;
      this.set("tilt", this.j
        ? 45
        : 0)
    };
    var JO = new _.z(170, 54),
      IO = new _.z(28, 28),
      PO = _.oi,
      GO = new _.y(141, -6),
      EO = new _.y(119, -6),
      RO = new _.y(141, 13),
      QO = new _.y(119, 13),
      HO = new _.y(141, 32),
      FO = new _.y(119, 32),
      OO = _.ni;
    _.v(SO, _.G);
    var tQ = new _.z(28, 27),
      uQ = new _.z(15, 15),
      vQ = new _.z(120, 54),
      UO = _.Lm("api-3/images/tmapctrl", !0),
      wQ = {},
      xQ = wQ[0] = {};
    xQ.backgroundColor = "#fff";
    xQ.nh = "#e6e6e6";
    var yQ = wQ[1] = {};
    yQ.backgroundColor = "#222";
    yQ.nh = "#1a1a1a";
    var zQ = WO();
    _.v(VO, _.G);
    _.m = VO.prototype;
    _.m.zh = _.cd("controlStyle");
    _.m.display_changed = VO.prototype.mapSize_changed = function() {
      var a = this.get("mapSize");
      if (this.l = a = a && 200 <= a.width && 200 <= a.height || !!this.get("display")) {
        _.tm(this.j);
        a = tQ.width;
        var b = 2 * tQ.height + 1;
        this.b.style.width = _.W(a);
        this.b.style.height = _.W(b);
        this.j.setAttribute("controlWidth", a);
        this.j.setAttribute("controlHeight", b);
        _.F.trigger(this.j, "resize");
        var c = tQ.width,
          d = tQ.height;
        a = this.m.style;
        a.width = _.W(c);
        a.height = _.W(d);
        a.left = a.top = "0";
        this.f.style.top = "0";
        a = this.C.style;
        a.width = _.W(c);
        a.height = _.W(d);
        a.left = a.top = "0";
        a = uQ.width;
        b = uQ.height;
        c = (c - a) / 2;
        d = (d - b) / 2;
        var e = this.B.style;
        e.width = _.W(a);
        e.height = _.W(b);
        e.left = _.W(c);
        e.top = _.W(d);
        e = this.D.style;
        e.width = _.W(a);
        e.height = _.W(b);
        e.left = _.W(c);
        e.top = _.W(d);
        this.lb(0, 0);
        this.lb(0, 1)
      } else
        _.gB(this.j)
    };
    _.m.mapTypeId_changed = function() {
      var a = this.get("mapTypeId");
      this.set("controlStyle", ("satellite" == a || "hybrid" == a) && _.Sf[43] || "streetview" == a
        ? 1
        : 0)
    };
    _.m.controlStyle_changed = function() {
      var a = this.zh();
      null != a && (a = wQ[a], this.b.style.backgroundColor = a.backgroundColor, this.f.style.backgroundColor = a.nh, this.lb(0, 0), this.lb(0, 1))
    };
    _.m.lb = function(a, b) {
      if (this.l) {
        var c = this.zh();
        null != c && (c = zQ[c]) && _.aC(0 == b
          ? this.B
          : this.D, uQ, c[a][b], vQ)
      }
    };
    _.m.ci = function(a) {
      this.set("mouseover", a)
    };
    _.m.Nm = function(a) {
      a = 0 == a
        ? 1
        : -1;
      this.set("zoom", this.get("zoom") + a)
    };
    _.v(XO, _.G);
    XO.prototype.getDiv = _.qa("b");
    _.v($O, _.G);
    var ZO = "Warunki korzystania z programu";
    _.m = $O.prototype;
    _.m.hide_changed = function() {
      var a = !this.get("hide");
      _.fB(this.b, a);
      this.Lf();
      a && _.mB()
    };
    _.m.Lf = function() {
      this.set("width", _.Rf(this.f).width)
    };
    _.m.mapTypeId_changed = function() {
      "streetview" == this.get("mapTypeId") && (_.CL(this.b), this.j.style.color = "#fff")
    };
    _.m.fontLoaded_changed = $O.prototype.Lf;
    _.m.getDiv = _.qa("b");
    _.v(dP, _.G);
    _.m = dP.prototype;
    _.m.fontLoaded_changed = dP.prototype.size_changed = function() {
      cP(this)
    };
    _.m.attributionText_changed = function() {
      _.ZA(this.m, eP(this));
      cP(this)
    };
    _.m.Wf = function() {
      this.l = bP(this);
      cP(this)
    };
    _.m.rmiWidth_changed = dP.prototype.Wf;
    _.m.tosWidth_changed = dP.prototype.Wf;
    _.m.scaleWidth_changed = dP.prototype.Wf;
    _.m.hide_changed = function() {
      var a = !this.get("hide");
      _.fB(this.b, a);
      a && _.mB()
    };
    _.m.mapTypeId_changed = function() {
      "streetview" == this.get("mapTypeId") && _.CL(this.B)
    };
    _.m.getDiv = _.qa("b");
    _.v(gP, _.G);
    gP.prototype.visible_changed = function() {
      this.get("visible")
        ? (_.mB(), _.tm(this.b))
        : this.f()
    };
    gP.prototype.f = function() {
      _.gB(this.b)
    };
    gP.prototype.attributionText_changed = function() {
      var a = this.get("attributionText") || "";
      _.eB(this.j, a);
      a || this.f()
    };
    gP.prototype.size_changed = function() {
      fP(this)
    };
    _.v(hP, _.G);
    hP.prototype.attributionText_changed = function() {
      var a = this.get("attributionText") || "";
      _.qm(this.f, a)
    };
    hP.prototype.hide_changed = function() {
      var a = !this.get("hide");
      _.fB(this.b, a);
      a && _.mB()
    };
    hP.prototype.getDiv = _.qa("b");
    _.v(iP, _.G);
    _.v(jP, _.G);
    jP.prototype.floors_changed = function() {
      var a = this.get("floorId"),
        b = this.get("floors"),
        c = this.f;
      if (1 < _.xb(b)) {
        _.tm(c);
        _.x(this.b, function(a) {
          _.Zk(a)
        });
        this.b = [];
        for (var d = b.length, e = d - 1; 0 <= e; --e) {
          var f = _.Y("div", c);
          b[e].jf == a
            ? (f.style.color = "#aaa", f.style.fontWeight = "bold", f.style.backgroundColor = "#333")
            : (kP(this, f, b[e].xn), f.style.color = "#999", f.style.fontWeight = "400", f.style.backgroundColor = "#222");
          f.style.padding = "5px";
          e == d - 1
            ? iN(f)
            : 0 == e && jN(f);
          _.pm(b[e].Jk, f);
          f.setAttribute("title", b[e].description);
          this.b.push(f)
        }
        _.F.trigger(c, "resize")
      } else
        _.gB(c)
    };
    var qP = new _.z(28, 28);
    _.Mj(pP, _.G);
    pP.prototype.m = function() {
      1 == this.get("mode") && this.set("mode", 2)
    };
    pP.prototype.B = function() {
      2 == this.get("mode") && this.set("mode", 1)
    };
    _.v(rP, _.G);
    _.m = rP.prototype;
    _.m.mode_changed = function() {
      uP(this);
      vP(this)
    };
    _.m.heading_changed = function() {
      7 == this.zc() && uP(this)
    };
    _.m.dragPosition_changed = function() {
      vP(this)
    };
    _.m.position_changed = function() {
      var a = this.zc();
      if (5 == a || 6 == a || 3 == a || 4 == a)
        this.get("position")
          ? (this.C.setVisible(!0), this.D.setVisible(!1), this.set("lilypadIcon", xP(this)))
          : (a = this.zc(), 5 == a
            ? this.Pb(6)
            : 3 == a && this.Pb(4));
      else {
        var b = this.get("position");
        b && 1 == a && this.Pb(7);
        this.set("dragPosition", b)
      }
    };
    _.m.sk = function(a) {
      this.set("dragging", !0);
      this.Pb(5);
      this.f = a.pixel.x
    };
    _.m.tk = function(a) {
      var b = this;
      a = a.pixel.x;
      a > b.f + 5
        ? (this.Pb(5), b.f = a)
        : a < b.f - 5 && (this.Pb(3), b.f = a);
      window.clearTimeout(b.b);
      b.b = window.setTimeout(function() {
        _.F.trigger(b, "hover");
        b.b = 0
      }, 300)
    };
    _.m.rk = function() {
      this.set("dragging", !1);
      this.Pb(1);
      window.clearTimeout(this.b);
      this.b = 0
    };
    _.m.zc = _.cd("mode");
    _.m.Pb = _.dd("mode");
    _.v(zP, _.G);
    _.m = zP.prototype;
    _.m.mode_changed = function() {
      var a = _.LL(this.Mg());
      a != this.j && (a
        ? CP(this)
        : BP(this))
    };
    _.m.tilt_changed = zP.prototype.heading_changed = function() {
      this.j && (BP(this), CP(this))
    };
    _.m.bi = function(a) {
      var b = this.get("dragPosition"),
        c = this.G.getZoom(),
        d = Math.max(50, 35 * Math.pow(2, 16 - c));
      this.set("hover", a);
      this.m = !1;
      _.O("streetview", (0, _.t)(function(a) {
        var c = this.H || void 0;
        this.f || (this.f = new a.mk(c), this.f.bindTo("result", this, null, !0));
        this.f.getPanoramaByLocation(b, d, c
          ? void 0
          : 100 > d
            ? "nearest"
            : "best")
      },
      this))
    };
    _.m.result_changed = function() {
      var a = this.get("result"),
        b = a && a.location;
      this.set("position", b && b.latLng);
      this.set("description", b && b.shortDescription);
      this.set("panoId", b && b.pano);
      this.m
        ? this.Ue(1)
        : this.get("hover") || this.set("panoramaVisible", !!a)
    };
    _.m.panoramaVisible_changed = function() {
      this.m = 0 == this.get("panoramaVisible");
      this.Mg();
      var a = this.get("panoramaVisible"),
        b = this.get("hover");
      a || b || this.Ue(1);
      a && this.notify("position")
    };
    _.m.Mg = _.cd("mode");
    _.m.Ue = _.dd("mode");
    DP.prototype.F = function() {
      this.j = !this.j;
      this.D()
    };
    DP.prototype.D = function() {
      var a = this.B.get();
      if (a) {
        a *= 80;
        a = this.j
          ? EP(a / 1E3, "km", a, "m")
          : EP(a / 1609.344, "mi", 3.28084 * a, "ft");
        var b = this.C;
        var c = a.ul + "\u00a0";
        if (c instanceof _.bf)
          var d = c;
        else
          d = null,
          c.Nh && (d = c.Wd()),
          c = _.bN(c.Zd
            ? c.Hb()
            : String(c)),
          d = _.cf(c, d);
        d instanceof _.bf && d.constructor === _.bf && d.jk === _.af
          ? d = d.tf
          : (_.Ia(d), d = "type_error:SafeHtml");
        b.innerHTML = d;
        this.b.style.width = _.tB(a.An + 4, !0);
        this.l || (this.l = _.ib.setTimeout((0, _.t)(this.H, this), 50))
      }
    };
    DP.prototype.H = function() {
      this.l = 0;
      var a = this.m;
      this.f.set((new _.QA(a.offsetWidth, a.offsetHeight)).width)
    };
    var FP;
    _.v(MP, _.Pf);
    _.m = MP.prototype;
    _.m.da = function() {
      this.f[1] && aQ(this);
      this.f[0] && RP(this);
      if (this.f[2]) {
        if (this.O) {
          var a = this.O;
          pN(a.m, "display", "none");
          a.f.set(0);
          this.O = null
        }
        this.m && (this.b.Lb(this.m), this.m = null);
        a = this.get("scaleControl");
        _.p(a) && _.wn(this.G, a
          ? "Csy"
          : "Csn");
        if (a) {
          this.m = _.Y("div");
          this.b.addElement(this.m, 12, !0, -1001);
          _.zm(this.m);
          _.Am(this.m);
          a = this.m;
          var b = _.BL(this.m);
          var c = _.Mq(this, "projection");
          var d = _.Mq(this, "bottomRight"),
            e = _.Mq(this, "zoom");
          c = new _.So([
            c, d, e
          ], zN);
          this.O = new DP(a, b, c);
          _.F.trigger(this.m, "resize");
          this.Ba && _.Kq(this.Ba, "scaleWidth", this.O.f)
        }
      }
      this.f[3] && IP(this);
      this.f = {};
      this.get("disableDefaultUI") && !this.l && _.wn(this.G, "Cdn")
    };
    _.m.je = _.cd("size");
    _.m.li = function() {
      if (XP(this) != this.Vc || WP(this) != this.Yc || YP(this) != this.Zc || NP(this) != this.xb || ZP(this) != this.dc)
        this.f[1] = !0;
      this.f[0] = !0;
      this.P()
    };
    _.m.disableDefaultUI_changed = MP.prototype.li;
    _.m.size_changed = MP.prototype.li;
    _.m.mapTypeId_changed = function() {
      NP(this) != this.xb && (this.f[1] = !0, this.P());
      this.F && this.F.setMapTypeId(this.get("mapTypeId"))
    };
    _.m.mapTypeControl_changed = MP.prototype.mapTypeControlOptions_changed = function() {
      this.f[0] = !0;
      this.P()
    };
    _.m.fullscreenControlOptions_changed = function() {
      this.f[3] = !0;
      this.P()
    };
    _.m.scaleControl_changed = MP.prototype.scaleControlOptions_changed = function() {
      this.f[2] = !0;
      this.P()
    };
    _.m.gd = _.cd("disableDefaultUI");
    _.m.Bb = function() {
      this.f[1] = !0;
      this.P()
    };
    _.m.panControl_changed = MP.prototype.Bb;
    _.m.panControlOptions_changed = MP.prototype.Bb;
    _.m.rotateControl_changed = MP.prototype.Bb;
    _.m.rotateControlOptions_changed = MP.prototype.Bb;
    _.m.streetViewControl_changed = MP.prototype.Bb;
    _.m.streetViewControlOptions_changed = MP.prototype.Bb;
    _.m.zoomControl_changed = MP.prototype.Bb;
    _.m.zoomControlOptions_changed = MP.prototype.Bb;
    _.m.myLocationControl_changed = MP.prototype.Bb;
    _.m.myLocationControlOptions_changed = MP.prototype.Bb;
    _.m.streetView_changed = function() {
      var a = this.nb;
      if (a) {
        var b = a.C,
          c = this.get("streetView");
        if (c != b) {
          if (b) {
            var d = b.__gm;
            d.unbind("result");
            d.unbind("heading");
            b.unbind("visible");
            b.unbind("passiveLogo");
            b.set("visible", null)
          }
          c && (d = c.__gm, null != d.get("result") && a.set("result", d.get("result")), d.bindTo("result", a), null != d.get("heading") && a.set("heading", d.get("heading")), d.bindTo("heading", a), null != c.get("visible") && a.set("panoramaVisible", c.get("visible")), c.bindTo("visible", a, "panoramaVisible"), c.bindTo("passiveLogo", this), a.bindTo("client", c));
          a.C = c
        }
      }
    };
    _.m.si = function(a) {
      a.be
        ? (a.be.remove(a.S), delete a.be)
        : this.b.Lb(a.S)
    };
    _.v(bQ, _.Pf);
    bQ.prototype.addElement = function(a, b, c, d) {
      if (b = this.b[b]) {
        d = _.Hb(d)
          ? d
          : b.length;
        var e;
        for (e = 0; e < b.length && !(b[e].index > d); ++e)
        ;
        b.splice(e, 0, {
          element: a,
          border: c,
          index: d,
          listener: _.F.addListener(a, "resize", (0, _.t)(this.P, this))
        });
        _.sm(a);
        a.style.visibility = "hidden";
        this.f.appendChild(a);
        this.P()
      }
    };
    bQ.prototype.Lb = function(a) {
      a.parentNode && a.parentNode.removeChild(a);
      _.yb(this.b, function(b, c) {
        for (b = 0; b < c.length; ++b)
          if (c[b].element == a) {
            var d = a;
            d.style.top = "auto";
            d.style.bottom = "auto";
            d.style.left = "auto";
            d.style.right = "auto";
            _.F.removeListener(c[b].listener);
            c.splice(b, 1)
          }
        });
      this.P()
    };
    bQ.prototype.da = function() {
      var a = _.Rf(this.f),
        b = a.width;
      a = a.height;
      var c = this.b,
        d = [],
        e = fQ(c[1], "left", "top", d),
        f = gQ(c[5], "left", "top", d);
      d = [];
      var g = fQ(c[10], "left", "bottom", d),
        h = gQ(c[6], "left", "bottom", d);
      d = [];
      var l = fQ(c[3], "right", "top", d),
        n = gQ(c[7], "right", "top", d);
      d = [];
      var q = fQ(c[12], "right", "bottom", d);
      d = gQ(c[9], "right", "bottom", d);
      var r = iQ(c[11], "bottom", b),
        u = iQ(c[2], "top", b),
        B = hQ(c[4], "left", b, a);
      hQ(c[13], "center", b, a);
      c = hQ(c[8], "right", b, a);
      this.set("bounds", new _.ic([
        new _.y(Math.max(B, e.width, g.width, f.width, h.width) || 0, Math.max(u, e.height, f.height, l.height, n.height) || 0),
        new _.y(b - (Math.max(c, l.width, q.width, n.width, d.width) || 0), a - (Math.max(r, g.height, q.height, h.height, d.height) || 0))
      ]))
    };
    jQ.prototype.l = function(a) {
      if (a && (a.placeId || a.query) && a.location) {
        var b = new _.ZH,
          c = new _.LH(_.N(new _.MH(_.N(b, 0)), 0));
        _.zk(new _.yk(_.N(c, 2)), a.location.lat());
        _.Ak(new _.yk(_.N(c, 2)), a.location.lng());
        a.placeId && (c.data[4] = a.placeId);
        a.query && c.setQuery(a.query);
        c = new _.XH(_.N(b, 1));
        c.data[0] = _.tf(this.j);
        c.data[1] = _.uf(this.j);
        b.data[5] = 1;
        c = _.Ej(this.j, 15)
          ? "http://maps.google.cn"
          : _.ax;
        b = "pb=" + _.lI(b);
        var d = this;
        _.Xm(_.cj, c + "/maps/api/js/jsonp/ApplicationService.GetEntityDetails", _.Lg, b, function(b) {
          b = new _.nI(b);
          var c = _.M(d.j, 14);
          b.f
            ? (c = (b = _.M(new _.LH((new _.mI(b.data[1])).data[0]), 3))
              ? c + ("?cid=" + b)
              : c + ("?ll=" + a.location.lat() + "," + a.location.lng()), gN(d.f, c), d.b.style.visibility = "")
            : (gN(d.f, c + "?ll=" + a.location.lat() + "," + a.location.lng()), d.b.style.display = "")
        })
      } else
        this.b.style.visibility = "hidden"
    };
    _.v(kQ, _.G);
    _.m = kQ.prototype;
    _.m.yg = _.dd("zoom");
    _.m.xg = _.cd("zoom");
    _.m.dl = function(a) {
      a = _.$k(a);
      this.f.contains(a)
        ? (this.b = !0, _.Rj(AQ, a.tagName) || window.focus())
        : this.b = !1
    };
    _.m.Mh = function(a) {
      if (oQ(this, a))
        return !0;
      var b = !1;
      switch (a.keyCode) {
        case 38:
        case 40:
          if (this.B) {
            _.F.trigger(this, "keydown", a);
            break
          }
        case 37:
        case 39:
          this.j[a.keyCode] = 1;
          this.m || (this.l = new _.Eu(100), this.oh());
          b = !0;
          break;
        case 34:
          nQ(this, 0, .75);
          b = !0;
          break;
        case 33:
          nQ(this, 0, -.75);
          b = !0;
          break;
        case 36:
          nQ(this, -.75, 0);
          b = !0;
          break;
        case 35:
          nQ(this, .75, 0);
          b = !0;
          break;
        case 187:
        case 107:
          lQ(this);
          b = !0;
          break;
        case 189:
        case 109:
          mQ(this),
          b = !0
      }
      switch (a.which) {
        case 61:
        case 43:
          lQ(this);
          b = !0;
          break;
        case 45:
        case 95:
        case 173:
          mQ(this),
          b = !0
      }
      b && (_.Dc(a), _.Ec(a));
      return !b
    };
    _.m.ah = function(a) {
      if (oQ(this, a))
        return !0;
      switch (a.keyCode) {
        case 38:
        case 40:
          if (this.B) {
            _.F.trigger(this, "keypress", a);
            break
          }
        case 37:
        case 39:
        case 34:
        case 33:
        case 36:
        case 35:
        case 187:
        case 107:
        case 189:
        case 109:
          return _.Dc(a),
          _.Ec(a),
          !1
      }
      switch (a.which) {
        case 61:
        case 43:
        case 45:
        case 95:
        case 173:
          return _.Dc(a),
          _.Ec(a),
          !1
      }
      return !0
    };
    _.m.Ln = function(a) {
      var b = !1;
      switch (a.keyCode) {
        case 38:
        case 40:
          if (this.B) {
            _.F.trigger(this, "keyup", a);
            break
          }
        case 37:
        case 39:
          this.j[a.keyCode] = null,
          b = !0
      }
      return !b
    };
    _.m.oh = function() {
      for (var a = 0, b = 0, c = !1, d = 0; d < _.xb(qQ); d++)
        this.j[qQ[d]] && (c = rQ[qQ[d]], a += c[0], b += c[1], c = !0);
      c
        ? (c = 1, _.Fu(this.l) && (c = this.l.next()), d = Math.round(35 * c * a), c = Math.round(35 * c * b), 0 == d && (d = a), 0 == c && (c = b), _.F.trigger(this, "panby", d, c, 1), this.m = _.tA(this, this.oh, 10))
        : this.m = 0
    };
    _.m.vn = function() {
      this.j = {}
    };
    var AQ = "A AREA BUTTON INPUT LINK OBJECT SELECT TEXTAREA".split(" ");
    _.m = pQ.prototype;
    _.m.Ij = kQ;
    _.m.zg = bQ;
    _.m.xm = function(a, b, c, d, e, f, g, h, l, n, q) {
      var r = b.get("streetView"),
        u = b.__gm;
      if (r && u) {
        var B = new _.cJ(new _.Ij((new _.Kj(_.Q.data[1])).data[6]), r.get("client"));
        r = _.Jf[r.get("client")];
        var w = new MP({
            el: function(a) {
              return q.fromContainerPixelToLatLng(new _.y(a.clientX, a.clientY))
            },
            ih: b.controls,
            xh: l,
            nd: n,
            Th: a,
            map: b,
            Bm: b.mapTypes,
            vd: d,
            Ci: !0,
            Di: void 0,
            po: r,
            ro: B
          }),
          C = new _.GC(["bounds"], "bottomRight", function(a) {
            return a && _.uj(a)
          }),
          A,
          E;
        _.pk(b, "idle", function() {
          var a = b.get("bounds");
          a != A && (w.set("bounds", a), C.set("bounds", a), A = a);
          a = b.get("center");
          a != E && (w.set("center", a), E = a)
        });
        w.bindTo("bottomRight", C);
        w.bindTo("disableDefaultUI", b);
        w.bindTo("heading", b);
        w.bindTo("projection", b);
        w.bindTo("reportErrorControl", b);
        w.bindTo("passiveLogo", b);
        w.bindTo("zoom", u);
        w.bindTo("mapTypeId", c);
        w.bindTo("attributionText", e);
        w.bindTo("zoomRange", g);
        w.bindTo("aerialAvailableAtZoom", h);
        w.bindTo("tilt", h);
        w.bindTo("desiredTilt", h);
        w.bindTo("mapTypeControlOptions", b, null, !0);
        w.bindTo("panControlOptions", b, null, !0);
        w.bindTo("rotateControlOptions", b, null, !0);
        w.bindTo("scaleControlOptions", b, null, !0);
        w.bindTo("streetViewControlOptions", b, null, !0);
        w.bindTo("zoomControlOptions", b, null, !0);
        w.bindTo("mapTypeControl", b);
        w.bindTo("overviewMapControlOptions", b);
        w.bindTo("myLocationControlOptions", b);
        w.bindTo("fullscreenControlOptions", b, null, !0);
        b.get("fullscreenControlOptions") && w.notify("fullscreenControlOptions");
        w.bindTo("overviewMapControl", b);
        w.bindTo("panControl", b);
        w.bindTo("rotateControl", b);
        w.bindTo("motionTrackingControl", b);
        w.bindTo("motionTrackingControlOptions", b, null, !0);
        w.bindTo("scaleControl", b);
        w.bindTo("streetViewControl", b);
        w.bindTo("fullscreenControl", b);
        w.bindTo("zoomControl", b);
        w.bindTo("myLocationControl", b);
        w.bindTo("rmiAvailable", f, "available");
        w.bindTo("streetView", b);
        w.bindTo("fontLoaded", u);
        w.bindTo("size", u);
        u.bindTo("renderHeading", w);
        _.F.forward(w, "panbyfraction", u)
      }
    };
    _.m.Am = function(a, b, c, d, e, f, g, h) {
      var l = new MP({
        ih: f,
        xh: d,
        nd: h,
        Th: e,
        vd: c,
        Ci: !1,
        qo: g
      });
      l.set("streetViewControl", !1);
      l.bindTo("attributionText", b, "copyright");
      l.set("mapTypeId", "streetview");
      l.set("tilt", !0);
      l.bindTo("heading", b);
      l.bindTo("zoom", b, "zoomFinal");
      l.bindTo("zoomRange", b);
      l.bindTo("pov", b, "pov");
      l.bindTo("position", g);
      l.bindTo("pano", g);
      l.bindTo("passiveLogo", g);
      l.bindTo("floors", b);
      l.bindTo("floorId", b);
      l.bindTo("rmiWidth", g);
      l.bindTo("fullscreenControlOptions", g, null, !0);
      l.bindTo("panControlOptions", g, null, !0);
      l.bindTo("zoomControlOptions", g, null, !0);
      l.bindTo("fullscreenControl", g);
      l.bindTo("panControl", g);
      l.bindTo("zoomControl", g);
      l.bindTo("disableDefaultUI", g);
      l.bindTo("fontLoaded", g.__gm);
      l.bindTo("size", b);
      a.view && a.view.addListener("scene_changed", function() {
        var b = a.view.get("scene");
        l.set("isCustomPanorama", "c" == b)
      });
      l.B();
      _.F.forward(l, "panbyfraction", a)
    };
    _.m.ym = function(a, b) {
      a.get("disableDefaultUI") && !a.get("keyboardShortcuts") && a.set("keyboardShortcuts", !1);
      var c = new kQ(b);
      c.bindTo("zoom", a);
      c.bindTo("enabled", a, "keyboardShortcuts");
      _.F.forward(c, "panbyfraction", a.__gm);
      _.F.forward(c, "panby", a.__gm);
      var d;
      _.pk(a, "streetview_changed", function() {
        var e = a.get("streetView"),
          f = d;
        f && _.F.removeListener(f);
        d = null;
        e && (d = _.pk(e, "visible_changed", function() {
          e.getVisible()
            ? (b.tabIndex = -1, b.blur(), c.set("streetViewDisable", !0))
            : (b.tabIndex = 0, c.set("streetViewDisable", !1))
        }))
      })
    };
    _.m.wm = function(a, b) {
      a = _.Mq(a, "place");
      new jQ(b, a)
    };
    _.m.jg = function(a) {
      if (!(window.atob || _.Sf[43] || a.__gm_bbsp)) {
        a.__gm_bbsp = !0;
        var b = new _.Sl((_.Ej(_.wf(_.Q), 15)
          ? "http://"
          : "https://") + (window.JSON
          ? "whatbrowser.org"
          : "developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers"));
        new $N(a, b)
      }
    };
    _.ge("controls", new pQ);
  });
