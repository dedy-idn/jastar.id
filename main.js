const jo = {};
! function() {
    var e, t = window,
        a = document,
        n = setTimeout,
        o = clearTimeout,
        r = Date,
        i = Math,
        l = parseInt,
        s = (btoa, escape, unescape, encodeURIComponent),
        c = (decodeURIComponent, RegExp),
        d = XMLHttpRequest,
        u = (alert, localStorage),
        f = JSON,
        g = Image,
        m = (setInterval, clearInterval, "innerHTML"),
        p = "tagName",
        h = "getElementById",
        y = "querySelector",
        v = "querySelectorAll",
        b = "createElement",
        A = "className",
        w = "replace",
        k = "lastIndexOf",
        I = "EventListener",
        j = "add",
        x = "remove",
        D = "length",
        P = "slice",
        C = "push",
        _ = "Attribute",
        S = "set",
        $ = "get",
        T = "checked",
        R = "offsetWidth",
        O = "toFixed",
        B = "pageYOffset",
        M = "appendChild",
        E = "firstChild",
        U = "insert",
        z = "Before",
        L = "match",
        q = "href",
        H = "target",
        G = "location",
        N = "split",
        F = "trim",
        W = "open",
        Y = "send",
        J = "random",
        Q = "parentElement",
        X = "preventDefault",
        V = "substr",
        K = "setRequestHeader",
        Z = "responseText",
        ee = "title",
        te = "ceil",
        ae = "floor",
        ne = "textContent",
        oe = "Item",
        re = "nextSibling",
        ie = "load",
        le = "false",
        se = "scroll",
        ce = "click",
        de = "mousemove",
        ue = "touchstart",
        fe = "change",
        ge = "undefined",
        me = "function",
        pe = "Content-Type",
        he = "pagination",
        ye = "loadCustomPosts",
        ve = "custom_posts",
        be = "adsbygoogle",
        Ae = "https://",
        we = "www.blogger.com/",
        ke = "-rw",
        Ie = "devicePixelRatio",
        je = typeof isPreview !== ge && isPreview,
        xe = typeof siteUrl !== ge ? siteUrl[V](0, siteUrl[D] - 1)[w](/(^\w+:|^)\/\//, "") : "",
        De = Ae + xe,
        Pe = typeof currentUrl !== ge ? currentUrl : "",
        Ce = typeof blogId !== ge ? blogId : "",
        _e = typeof blogTitle !== ge ? blogTitle : "",
        Se = typeof titleSeparator !== ge ? titleSeparator : " - ",
        $e = typeof pageTitle !== ge ? pageTitle : "Page",
        Te = typeof analyticId !== ge && analyticId,
        Re = typeof caPubAdsense !== ge && caPubAdsense[w](/^\D+/g, ""),
        Oe = !!Re && "ca-pub-" + Re,
        Be = typeof innerAdsDelimiter !== ge ? innerAdsDelimiter : "p,br,div",
        Me = typeof ignoreAdsDelimiter !== ge ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        Ee = typeof autoTOC !== ge && autoTOC,
        Ue = typeof toc_temp === me && toc_temp,
        ze = typeof positionTOC !== ge && positionTOC,
        Le = typeof Callback === me && Callback;

    function qe(e, t) {
        return -1 < (" " + e[A] + " ").indexOf(" " + t + " ")
    }

    function He(e, t) {
        var a;
        qe(e, t) || ("" != (a = e[A]) && (t = " " + t), e[A] = a + t)
    }

    function Ge(e, t) {
        e[A] = e[A][w](new c("(?:^|\\s)" + t + "(?!\\S)"), "")[F]()
    }

    function Ne(e, t, a) {
        Ge(e, t), n((function() {
            Ge(e, "d-block")
        }), a || 300)
    }

    function Fe(e, t) {
        for (var a = 0; a < e[D]; a++)
            if (e[a] === t) return !0;
        return !1
    }

    function We(e, t) {
        return !!(e = new c("[?&]" + e + "=([^&#=]*)")).test(t) && t[L](e)[1]
    }

    function Ye(e) {
        try {
            return f.parse(e)
        } catch (e) {
            return !1
        }
    }(e = new g).onload = e.onerror = function() {
        ! function(e) {
            e || (ke = "")
        }(2 == e.height)
    }, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    var Je = a[h]("header"),
        Qe = a[h]("search-toggle"),
        Xe = a[h]("search-header"),
        Ve = a[h]("navbar-toggle"),
        Ke = a[h]("navbar"),
        Ze = a[h]("top"),
        et = a[h]("dark-toggler"),
        tt = a[y]("html"),
        at = a[h]("comment-button"),
        nt = a[h]("threaded-comment-form"),
        ot = a[h]("comment-editor"),
        rt = a[h]("comment-editor-src"),
        it = a[h]("comment-script"),
        lt = a[v](".comment-reply"),
        st = a[v](".entry-text noscript"),
        ct = a[v](".contact-form-blogger"),
        dt = a[h]("ads-post"),
        ut = a[y](".post-body"),
        ft = a[y](".related-posts"),
        gt = a[y](".related-inline"),
        mt = We("page", Pe),
        pt = null !== u && 1 == u[$ + oe]("lazy");
    ! function(e) {
        t[j + I](se, (function() {
            var t, a = this[B];
            a < e && qe(Je, "header-hidden") ? t = n((function() {
                Ge(Je, "header-hidden")
            }), 50) : e < a && qe(Je, "header-animate") && (o(t), He(Je, "header-hidden")), e = a
        }), !1)
    }(0);
    var ht = function(e) {
        var a, n, o, r, i, l, s, c;
        "IMG" == e[p] && ((c = e[$ + _]("data-src"))[L](/(jastar|bp.blogspot|googleusercontent)/) ? (s = pt ? t[Ie] && 1 < t[Ie] ? t[Ie] : 1.5 : 1, a = (e[R] * s)[O](0), n = (e[Q][R] * s)[O](0), o = (e[Q][Q][R] * s)[O](0), r = (e.offsetHeight * s)[O](0), i = c[N]("/"), l = c[k]("=") + 1, s = "", s = qe(e[Q], "ratio") ? "w" + a + "-h" + r + "-c" + ke : "s" + (s = a < 30 ? n < 30 ? o : n : a) + ke, c = c[L](/(img\/a|proxy\/)/) ? l ? c[P](0, l) + s : c + "=" + s : c[w](i[i[D] - 2], s), e[S + _]("data-src", c)) : c[L](/(img.youtube|i.ytimg)/) && (c = c[V](0, c[k]("/")) + "/mqdefault.jpg", e[S + _]("data-src", c)))
    };

    function yt(e, t) {
        var a = new d;
        a[W]($, e), a[K](pe, "text/html"), a[Y](null), a[j + I](ie, (function() {
            var e = a[Z][L](/<title>(.*?)<\/title>/);
            t[m] = e[1][w](Se + _e, "")
        }))
    }

    function vt() {
        (Qe && Qe[T] || Ve && Ve[T] ? Ge : He)(Je, "header-animate")
    }

    function bt(e, t) {
        function n(a) {
            e.contains(a[H]) || (t(), o())
        }
        var o = function() {
            a[x + I](ce, n)
        };
        a[j + I](ce, n)
    }

    function At(e) {
        e != rt[q] && (He(nt, "loader"), rt[q] = e, ot.src = e), qe(nt, "d-none") && (Ge(nt, "d-none"), e = it.value[L](/<script.*?src='(.*?)'/)[1], Defer.js(e, "comment-js", 500, (function() {
            BLOG_CMT_createIframe(Ae + we + "rpc_relay.html")
        })))
    }
    jo[ye] = function(e) {
        var a = (i[J]() + 1).toString(36)[V](7),
            n = e[$ + _]("data-label"),
            o = e[$ + _]("data-title"),
            c = e[$ + _]("data-items"),
            d = e[$ + _]("data-shuffle"),
            u = e[$ + _]("data-no-item"),
            f = e[$ + _]("data-func"),
            g = e[$ + _]("data-callback"),
            p = u ? l(c) + 1 : c,
            h = n || e[m],
            y = h[N](",");
        n = "", n = 1 < y[D] ? h ? "-/" + s(y[i[ae](i[J]() * y[D])]) + "/?" : "?" : h && h != le ? "-/" + s(h[F]()) + "/?" : "?", Defer.js(De + "/feeds/posts/summary/" + n + "alt=json&callback=jo." + ve + "_key_" + a + "&max-results=" + p), jo[ve + "_key_" + a] = function(n) {
            var s = l(n.feed.openSearch$totalResults.$t),
                p = n.feed.category;
            if (0 < s) {
                for (var h = {
                        title: o,
                        posts: [],
                        categories: p
                    }, y = n.feed.entry, v = 0, b = 0; b < y[D]; ++b) {
                    var A, w, k = y[b],
                        I = k.link[k.link[D] - 1][q];
                    if (v == c) break;
                    I != u && (v++, (A = {}).grup_id = a, A.url = I, A.title = k[ee].$t, A.summary = k.summary.$t[F](), A.img = k.media$thumbnail && k.media$thumbnail.url, A.author = k.author[0].name.$t, A.comment = k.thr$total && k.thr$total.$t, A.label = k.category, w = k.published.$t, k = (I = new r(w)).getDate(), w = I.getMonth() + 1, I = I.getFullYear(), A.date = I + "/" + w + "/" + k, h.posts[C](A))
                }
                typeof(n = t[f]) === me && 0 < h.posts[D] && (d && (h.posts = function(e) {
                    for (var t = e.slice(), a = t[D] - 1; 0 < a; a--) {
                        var n = i[ae](i[J]() * (a + 1)),
                            o = t[a];
                        t[a] = t[n], t[n] = o
                    }
                    return t
                }(h.posts)[P](0, d)), e[m] = n(h)[F](), Ge(e, "visually-hidden"), Defer.dom(".lazy-" + a, 1, "loaded", ht), !g || typeof(n = t[g]) === me && n())
            }
        }
    }, Qe && Qe[j + I](fe, (function() {
        vt(), this[T] && n((function() {
            a[h]("search-input").focus()
        }), 100), bt(Xe, (function() {
            Qe[T] = !1, vt()
        }))
    })), Ve && Ve[j + I](fe, (function() {
        vt(), this[T] ? (function(e, t) {
            He(e, "d-block"), n((function() {
                He(e, "show")
            }), 100)
        }(Ke), bt(Ke, (function() {
            Ve[T] = !1, vt(), Ne(Ke, "show")
        }))) : Ne(Ke, "show")
    })), et && et[j + I](ce, (function(e) {
        e[X](),
            function(e, t) {
                (qe(e, t) ? Ge : He)(e, t)
            }(tt, "dark-mode"), null !== u && u[S + oe]("theme", qe(tt, "dark-mode") ? "dark" : "light")
    })), t[j + I](se, (function() {
        (1 <= this[B] && null !== Je ? He : Ge)(Je, "shadow-sm"), (1e3 <= this[B] && null !== Ze ? Ge : He)(Ze, "d-none")
    }), !1), ot && ot[j + I](ie, (function(e) {
        Ge(nt, "loader")
    })), at && at[j + I](ce, (function(e) {
        e[X](), At(this[q]), "add-comment" != nt[Q].id && a[h]("add-comment")[M](nt)
    }));
    for (var wt = 0; wt < lt[D]; ++wt) lt[wt][j + I](ce, (function(e) {
        e[X](), e = this[$ + _]("data-comment-id"), At(this[q]), nt[Q].id != "c" + e && a[h]("c" + e)[M](nt)
    }));
    for (wt = 0; wt < ct[D]; ++wt) ct[wt][j + I]("submit", (function(e) {
        e[X]();
        var t = e[H];
        He(t, "loading");
        var a = new FormData(t),
            n = "blogID=" + Ce;
        a.forEach((function(e, t) {
            n += "&" + s(t) + "=" + s(e)
        })), e = Ae + we + "contact-form.do", (a = new d)[W]("post", e), a[K](pe, "application/x-www-form-urlencoded"), a[Y](n), a.onreadystatechange = function() {
            var e;
            Ge(t, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = Ye(this[Z][F]())) && "true" == e.details.emailSentStatus ? (t.reset(), Ge(t, "send-error"), He(t, "send-success")) : (Ge(t, "send-success"), He(t, "send-error")))
        }
    }));

    function kt(e) {
        if (e && (a[x + I](de, kt), a[x + I](ue, kt), a[x + I](se, kt)), Defer.dom(".custom-posts", 1, null, jo[ye], null, {
                rootMargin: "200%"
            }), 0 < st[D]) {
            for (var t = 0; t < st[D]; ++t) {
                var n = st[t],
                    o = n[m],
                    r = a[b]("textarea");
                r[m] = o[w](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'), (o = a[b]("div"))[m] = r.value, 0 == t && He(o, "feature-image full-width"), n[Q][U + z](o, n)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", ht, null, {
                rootMargin: "200%"
            })
        }
        if (null !== ut) {
            if (null !== ft && null !== gt && (gt[m] = ft[m], gt[S + _]("data-no-item", ft[$ + _]("data-no-item"))), null !== dt) {
                var s, c = ut[v](Be + "," + Me),
                    d = dt.childNodes,
                    u = d[D],
                    f = [];
                for (t = 0; t < c[D]; t++) {
                    var g = c[t].closest(Me);
                    g && c[t] != g || f[C](c[t])
                }
                for (t = 0; t < u; t++) t == u - 1 ? ut[M](d[0]) : (s = t == u - 1 ? f[D] - 1 : i.round(f[D] / u) * t, (s = 0 == t ? f[0] : f[s][re]) && s[Q][U + z](d[0], s))
            }
            if (Ee && Ee != le && Ue && null !== ut[E]) {
                var h = ut[v]("h2,h3,h4,h5,h6"),
                    A = a[b]("div"),
                    k = (e = ut[y](ze), []);
                for (t = 0; t < h[D]; t++) {
                    var j = h[t],
                        P = j[ne][w](/[^\w!?]/g, "_")[w](/__/g, "_"),
                        T = l(j[p][w]("H", ""));
                    j.id = P, k[C]({
                        level: T,
                        title: j[ne],
                        id: P
                    })
                }
                null === e ? e = ut[E] : e[re] && (e = e[re]), 0 < k[D] && (A[m] = Ue(k)[F](), e && e[Q][U + z](A, e))
            }
        }
        je || (Oe && (typeof adsbygoogle === ge && (adsbygoogle = []), Defer.js(Ae + "pagead2.googlesyndication.com/pagead/js/" + be + ".js?client=" + Oe, be, 100)), Te && Te != le && Defer.js(Ae + "www.googletagmanager.com/gtag/js?id=" + Te, "analytics", 100, (function() {
            function e() {
                dataLayer[C](arguments)
            }
            e("js", new Date), e("config", Te)
        })), Le && Le())
    }
    mt && (a[ee] = a[ee][w](Se, Se + $e + " " + mt + Se)), Defer.dom(".lazyload", 1, "loaded", ht), Defer.dom("#post-pager", 1, null, (function(e) {
        for (var t = e[v]("a"), n = 0; n < t[D]; ++n) {
            var o = t[n],
                r = o[q],
                i = a[b]("span");
            He(i, "d-block fw-bold item-title pt-2"), o[M](i), yt(r, i)
        }
    }), null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, (function(e) {
        var n, o, r, c, d, u, f, g;

        function p(e, i, l) {
            var s = a[b]("li"),
                d = a[b]("span");
            return He(d, "btn btn-sm rounded-pill icon-center"), d[m] = l || e, d[S + _]("data-page", e), e == i ? He(d, "btn-primary") : (He(d, "btn_light hover-btn-primary"), d[j + I](ce, (function(e) {
                var a;
                e[X](), 1 == (g = d[$ + _]("data-page")) ? (a = o ? De + "/search" + c + "?max-results=" + n + "&page=" + g : De, t[G][q] = a) : (a = (g - 1) * n, Defer.js(De + "/feeds/posts/summary/" + r + "?start-index=" + a + "&alt=json&callback=jo." + he + "_date&max-results=1"))
            }))), s[M](d), s
        }
        e[$ + _]("data-pagination") != le ? (n = e[$ + _]("data-posts"), o = e[$ + _]("data-label"), r = (o = s(o)) ? "-/" + o + "/" : "", c = o ? "/label/" + o : "", Defer.js(De + "/feeds/posts/summary/" + r + "?alt=json&callback=jo." + he + "_key&max-results=1"), d = We("max-results", Pe), u = We("page", Pe), f = d || n, g = u || 1, jo[he + "_key"] = function(t) {
            var o = t.feed,
                r = l(o.openSearch$totalResults.$t);
            if (n < r) {
                t = function(e, t, a, n) {
                    e = l(e), t = l(t), a = l(a), n = l(n);
                    var o, r, s = i[te](e / a);
                    t < 1 ? t = 1 : s < t && (t = s), r = s <= n ? (o = 1, s) : (e = i[ae](n / 2), a = i[te](n / 2) - 1, t <= e ? (o = 1, n) : s <= t + a ? (o = s - n + 1, s) : (o = t - e, t + a));
                    for (var c = (t - 1) * a, d = (n = i.min(c + a - 1, e - 1), []), u = 0; u < r + 1 - o; u++) d[C](u);
                    return d = d.map((function(e) {
                        return o + e
                    })), {
                        totalItems: e,
                        currentPage: t,
                        pageSize: a,
                        totalPages: s,
                        startPage: o,
                        endPage: r,
                        startIndex: c,
                        endIndex: n,
                        pages: d
                    }
                }(r, g, f, 5);
                var s = a[b]("ul");
                o = t.totalPages, 1 != t.currentPage && (r = p(t.currentPage - 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-l"/></svg>'), s[M](r)), Fe(t.pages, 1) || (d = p(1, t.currentPage, "1 . ."), s[M](d));
                for (var c = 0; c < t.pages[D]; c++) {
                    var d = p(t.pages[c], t.currentPage);
                    s[M](d)
                }
                Fe(t.pages, o) || (d = p(o, t.currentPage, ". . " + o), s[M](d)), t.currentPage != o && (o = p(t.currentPage + 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-r"/></svg>'), s[M](o)), e[m] = "", He(s, "pagination mb-0"), e[M](s), Ge(e, "visually-hidden")
            }
        }, jo[he + "_date"] = function(e) {
            e = (e = (e = e.feed.entry[0]).published.$t[V](0, 19) + e.published.$t[V](23, 29))[w]("+", "%2B"), e = De + "/search" + c + "?updated-max=" + e + "&max-results=" + f + "&page=" + g, t[G][q] = e
        }) : Ge(e, "visually-hidden")
    }), null, {
        rootMargin: "200%"
    }), pt ? kt(!1) : (null !== u && u[S + oe]("lazy", 1), a[j + I](de, kt), a[j + I](ue, kt), a[j + I](se, kt))
}();
