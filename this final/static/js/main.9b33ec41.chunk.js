(this.webpackJsonpmyportfolio = this.webpackJsonpmyportfolio || []).push([
    [0], {
        27: function(e, t, a) {},
        28: function(e, t, a) {},
        32: function(e, t, a) {},
        33: function(e, t, a) {},
        34: function(e, t, a) {},
        35: function(e, t, a) {},
        36: function(e, t, a) {},
        37: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                c = a(14),
                r = a.n(c),
                i = a(15),
                o = a(16),
                s = a(19),
                m = a(18),
                d = a(6),
                u = a.n(d),
                p = function() {
                    return l.a.createElement("div", {
                        className: "header",
                        id: "home"
                    }, l.a.createElement(u.a, {
                        down: !0,
                        duration: 1500
                    }, l.a.createElement("h2", null, "Hello ", l.a.createElement("span", {
                        role: "img",
                        "aria-label": "wave-emoji"
                    }, "\ud83d\udc4b"), ", I'm"), l.a.createElement("h1", null, "Vihan Mehta"), l.a.createElement("p", null, "Cyber-Security Student"), l.a.createElement("a", {
                        href: "#contact",
                        className: "contact-btn"
                    }, "Say Hello!")))
                },
                E = a(12);
            a(27), a(28);
            var h = function() {
                    var e = Object(n.useState)(0),
                        t = Object(E.a)(e, 2),
                        a = t[0],
                        c = t[1],
                        r = Object(n.useState)(!0),
                        i = Object(E.a)(r, 2),
                        o = i[0],
                        s = i[1],
                        m = function(e, t, a) {
                            var n;
                            return function() {
                                var l = this,
                                    c = arguments,
                                    r = function() {
                                        n = null, a || e.apply(l, c)
                                    },
                                    i = a && !n;
                                clearTimeout(n), n = setTimeout(r, t), i && e.apply(l, c)
                            }
                        }((function() {
                            var e = window.pageYOffset;
                            s(a > e && a - e > 70 || e < 10), c(e)
                        }), 100);
                    Object(n.useEffect)((function() {
                        return window.addEventListener("scroll", m),
                            function() {
                                return window.removeEventListener("scroll", m)
                            }
                    }), [a, o, m]);
                    var d = function() {
                        document.getElementById("mySidenav").style.width = "0", document.getElementById("main").style.marginLeft = "0", document.getElementById("main").style.display = "block", document.getElementById("menu").style.transform = "scale(0)", document.body.classList.toggle("lock-scroll")
                    };
                    return l.a.createElement("div", {
                        className: "navigation",
                        style: {
                            top: o ? "0" : "-70px"
                        }
                    }, l.a.createElement("div", {
                        className: "menu-wrap"
                    }, l.a.createElement("div", {
                        id: "main",
                        className: "lock-scroll"
                    }, l.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        onClick: function() {
                            document.getElementById("mySidenav").style.width = "100vw", document.getElementById("main").style.marginLeft = "250px", document.getElementById("main").style.display = "none", document.getElementById("menu").style.transform = "scale(1)", document.body.classList.toggle("lock-scroll")
                        },
                        className: "menubtn"
                    }, l.a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M4 8h16M4 16h16"
                    }))), l.a.createElement("nav", {
                        id: "mySidenav",
                        className: "sidenav"
                    }, l.a.createElement("a", {
                        href: "#",
                        className: "closebtn",
                        onClick: d
                    }, l.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, l.a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M6 18L18 6M6 6l12 12"
                    }))), l.a.createElement("ul", {
                        id: "menu"
                    }, l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#home",
                        onClick: d
                    }, "Home")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#about",
                        onClick: d
                    }, "About")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#projects",
                        onClick: d
                    }, "Projects")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#contact",
                        onClick: d
                    }, "Contact"))))), l.a.createElement("nav", {
                        className: "desktop-navigation"
                    }, l.a.createElement("ul", null, l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#home"
                    }, "Home")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#about"
                    }, "About")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#projects"
                    }, "Projects")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "link",
                        href: "#contact"
                    }, "Contact")))))
                },
                f = a(2),
                y = a(3),
                g = (a(32), a(4)),
                v = a.n(g),
                b = function() {
                    return l.a.createElement("div", {
                        className: "container about-container",
                        id: "about"
                    }, l.a.createElement(f.a, {
                        icon: y.h,
                        className: "profile-icon"
                    }), l.a.createElement("h4", null, "About me"), l.a.createElement(u.a, {
                        left: !0
                    }, l.a.createElement("h1", null, "Hey There!")), l.a.createElement(u.a, {
                        up: !0
                    }, l.a.createElement("p", null, "My name is Vihan Mehta, A student , Good in web development , and exploring Cyber Security World")), l.a.createElement("div", {
                        className: "skills-container"
                    }, l.a.createElement(f.a, {
                        icon: y.a,
                        className: "skill-cogs"
                    }), l.a.createElement(v.a, {
                        left: !0,
                        duration: 2e3
                    }, l.a.createElement("h3", null, "Skills That I Have")), l.a.createElement(v.a, {
                        down: !0,
                        duration: 4e3
                    }, l.a.createElement("hr", null)), l.a.createElement(v.a, {
                        right: !0
                    }, l.a.createElement("div", {
                        className: "skills"
                    }, l.a.createElement("span", {
                        id: "react"
                    }, "Python"), l.a.createElement("span", {
                        id: "framer"
                    }, "Django"), l.a.createElement("span", {
                        id: "css"
                    }, "Shell Script"), l.a.createElement("span", {
                        id: "js"
                    },  "CTF Player")))))
                },
                w = a(7),
                k = (a(33), [{
                    id: 1,
                    title: "DEMO",
                    description: "------------------------- Under Production --------------------------------",
                    live: "#",
                    code: "#"
                }, {
                    id: 2,
                    title: "DEMO",
                    description: "------------------------- Under Production --------------------------------",
                    live: "#",
                    code: "#"
                }, {
                    id: 3,
                    title: "DEMO",
                    description: "------------------------- Under Production --------------------------------",
                    live: "#",
                    code: "#"
                }, {
                    id: 4,
                    title: "DEMO",
                    description: "------------------------- Under Production --------------------------------",
                    live: "#",
                    code: "#"
                }]),
                N = a(9),
                j = a.n(N),
                I = function() {
                    return l.a.createElement("div", {
                        className: "projects-container",
                        id: "projects"
                    }, l.a.createElement(f.a, {
                        icon: y.e,
                        className: "project-icon"
                    }), l.a.createElement("h4", null, "Projects"), l.a.createElement(j.a, {
                        top: !0,
                        duration: 2e3
                    }, l.a.createElement("h2", null, "Recent Projects & Websites")), l.a.createElement(j.a, {
                        duration: 2e3
                    }, l.a.createElement("p", {
                        className: "projects-about"
                    }, "Selected websites and projects I've worked on.")), l.a.createElement(j.a, {
                        duration: 1e3
                    }, l.a.createElement("div", {
                        className: "projects"
                    }, k.map((function(e) {
                        return l.a.createElement("div", {
                            key: e.id,
                            className: "project-card"
                        }, l.a.createElement("strong", null, e.title), l.a.createElement("p", null, e.description), l.a.createElement("div", {
                            className: "project-anchors"
                        }, l.a.createElement("a", {
                            href: e.live
                        }, l.a.createElement(f.a, {
                            icon: y.d,
                            className: "link-icon"
                        })), l.a.createElement("a", {
                            href: e.code
                        }, l.a.createElement(f.a, {
                            icon: w.a,
                            className: "link-icon"
                        }))))
                    })))))
                },
                S = (a(34), a(17)),
                C = a.n(S),
                B = function() {
                    return l.a.createElement("div", {
                        className: "container contacts-container",
                        id: "contact"
                    }, l.a.createElement(f.a, {
                        icon: y.g,
                        className: "bg-icon"
                    }), l.a.createElement("h4", null, "Contact me"), l.a.createElement(C.a, {
                        duration: 5e3
                    }, l.a.createElement("h2", null, "Want to Chat with me?")), l.a.createElement(v.a, {
                        left: !0,
                        duration: 2e3
                    }, l.a.createElement("div", {
                        className: "social-btn-container"
                    }, l.a.createElement("div", {
                        className: "social-btns"
                    }, l.a.createElement("a", {
                        href: "https://twitter.com/Vihan__mehta",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, l.a.createElement(f.a, {
                        icon: w.c,
                        className: "social-btn twitter-icon"
                    })), l.a.createElement("a", {
                        href: "https://github.com/VihanMehta/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, l.a.createElement(f.a, {
                        icon: w.a,
                        className: "social-btn twitter-icon"
                    })),l.a.createElement("a", {
                        href: "mailto:Vihan012mehta@gmail.com"
                    }, l.a.createElement(f.a, {
                        icon: y.c,
                        className: "social-btn whatsapp-icon"
                    })), l.a.createElement("a", {
                        href: "http://linkedin.com/in/vihanmehta",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, l.a.createElement(f.a, {
                        icon: w.b,
                        className: "social-btn whatsapp-icon"
                    }))))))
                },
                L = (a(35), function() {
                    return l.a.createElement("div", {
                        className: "footer-container"
                    }, l.a.createElement("p", {
                        id: "copyright"
                    }, " ", l.a.createElement(f.a, {
                        icon: y.b
                    }), " ", (new Date).getFullYear(), " ", " ", " ", " ", "Developed with", " ", l.a.createElement("span", null, l.a.createElement(f.a, {
                        icon: y.f,
                        className: "footer-icon"
                    })), " ", "by ", l.a.createElement("span", {
                        className: "name"
                    }, "Vihan Mehta")))
                }),
                O = (a(36), function(e) {
                    Object(s.a)(a, e);
                    var t = Object(m.a)(a);

                    function a() {
                        return Object(i.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(o.a)(a, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement(l.a.Fragment, null, l.a.createElement(h, null), l.a.createElement("div", {
                                className: "App container"
                            }, l.a.createElement(p, null), l.a.createElement(b, null), l.a.createElement(I, null), l.a.createElement(B, null)), l.a.createElement(L, null))
                        }
                    }]), a
                }(l.a.Component));
            r.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(O, null)), document.getElementById("root"))
        }
    },
    [
        [37, 1, 2]
    ]
]);
//# sourceMappingURL=main.9b33ec41.chunk.js.map