/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
! function(e, t) {
  "function" == typeof define && define.amd ? define(["jquery"], function(e) {
    return t(e)
  }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
  ! function(e) {
    "use strict";
    var t, i, n, s, o, a, l;
    String.prototype.includes || (t = {}.toString, i = function() {
      try {
        var e = {},
          t = Object.defineProperty,
          i = t(e, e, e) && t
      } catch (e) {}
      return i
    }(), n = "".indexOf, s = function(e) {
      if (null == this) throw new TypeError;
      var i = String(this);
      if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
      var s = i.length,
        o = String(e),
        a = o.length,
        l = arguments.length > 1 ? arguments[1] : void 0,
        r = l ? Number(l) : 0;
      return r != r && (r = 0), !(a + Math.min(Math.max(r, 0), s) > s) && -1 != n.call(i, o, r)
    }, i ? i(String.prototype, "includes", {
      value: s,
      configurable: !0,
      writable: !0
    }) : String.prototype.includes = s), String.prototype.startsWith || (o = function() {
      try {
        var e = {},
          t = Object.defineProperty,
          i = t(e, e, e) && t
      } catch (e) {}
      return i
    }(), a = {}.toString, l = function(e) {
      if (null == this) throw new TypeError;
      var t = String(this);
      if (e && "[object RegExp]" == a.call(e)) throw new TypeError;
      var i = t.length,
        n = String(e),
        s = n.length,
        o = arguments.length > 1 ? arguments[1] : void 0,
        l = o ? Number(o) : 0;
      l != l && (l = 0);
      var r = Math.min(Math.max(l, 0), i);
      if (s + r > i) return !1;
      for (var d = -1; ++d < s;)
        if (t.charCodeAt(r + d) != n.charCodeAt(d)) return !1;
      return !0
    }, o ? o(String.prototype, "startsWith", {
      value: l,
      configurable: !0,
      writable: !0
    }) : String.prototype.startsWith = l), Object.keys || (Object.keys = function(e, t, i) {
      i = [];
      for (t in e) i.hasOwnProperty.call(e, t) && i.push(t);
      return i
    });
    var r = {
      useDefault: !1,
      _set: e.valHooks.select.set
    };
    e.valHooks.select.set = function(t, i) {
      return i && !r.useDefault && e(t).data("selected", !0), r._set.apply(this, arguments)
    };
    var d = null,
      h = function() {
        try {
          return new Event("change"), !0
        } catch (e) {
          return !1
        }
      }();

    function c(t) {
      return e.each([{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      }, {
        re: /[\xD1]/g,
        ch: "N"
      }, {
        re: /[\xF1]/g,
        ch: "n"
      }], function() {
        t = t ? t.replace(this.re, this.ch) : ""
      }), t
    }
    e.fn.triggerNative = function(e) {
      var t, i = this[0];
      i.dispatchEvent ? (h ? t = new Event(e, {
        bubbles: !0
      }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
    }, e.expr.pseudos.icontains = function(t, i, n) {
      var s = e(t).find("a");
      return (s.data("tokens") || s.text()).toString().toUpperCase().includes(n[3].toUpperCase())
    }, e.expr.pseudos.ibegins = function(t, i, n) {
      var s = e(t).find("a");
      return (s.data("tokens") || s.text()).toString().toUpperCase().startsWith(n[3].toUpperCase())
    }, e.expr.pseudos.aicontains = function(t, i, n) {
      var s = e(t).find("a");
      return (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase().includes(n[3].toUpperCase())
    }, e.expr.pseudos.aibegins = function(t, i, n) {
      var s = e(t).find("a");
      return (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase().startsWith(n[3].toUpperCase())
    };
    var p = function(e) {
        var t = function(t) {
            return e[t]
          },
          i = "(?:" + Object.keys(e).join("|") + ")",
          n = RegExp(i),
          s = RegExp(i, "g");
        return function(e) {
          return e = null == e ? "" : "" + e, n.test(e) ? e.replace(s, t) : e
        }
      },
      u = p({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }),
      f = p({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`"
      }),
      m = function(t, i) {
        r.useDefault || (e.valHooks.select.set = r._set, r.useDefault = !0), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title"));
        var n = this.options.windowPadding;
        "number" == typeof n && (this.options.windowPadding = [n, n, n, n]), this.val = m.prototype.val, this.render = m.prototype.render, this.refresh = m.prototype.refresh, this.setStyle = m.prototype.setStyle, this.selectAll = m.prototype.selectAll, this.deselectAll = m.prototype.deselectAll, this.destroy = m.prototype.destroy, this.remove = m.prototype.remove, this.show = m.prototype.show, this.hide = m.prototype.hide, this.init()
      };

    function b(t) {
      var i, n = arguments,
        s = t;
      [].shift.apply(n);
      var o = this.each(function() {
        var t = e(this);
        if (t.is("select")) {
          var o = t.data("selectpicker"),
            a = "object" == typeof s && s;
          if (o) {
            if (a)
              for (var l in a) a.hasOwnProperty(l) && (o.options[l] = a[l])
          } else {
            var r = e.extend({}, m.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), a);
            r.template = e.extend({}, m.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, a.template), t.data("selectpicker", o = new m(this, r))
          }
          "string" == typeof s && (i = o[s] instanceof Function ? o[s].apply(o, n) : o.options[s])
        }
      });
      return void 0 !== i ? i : o
    }
    m.VERSION = "1.12.4", m.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function(e, t) {
        return 1 == e ? "{0} item selected" : "{0} items selected"
      },
      maxOptionsText: function(e, t) {
        return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-default",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: {
        caret: ""
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1,
      windowPadding: 0
    }, m.prototype = {
      constructor: m,
      init: function() {
        var t = this,
          i = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== i && (this.$button.attr("data-id", i), e('label[for="' + i + '"]').click(function(e) {
          e.preventDefault(), t.$button.focus()
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function(e) {
            t.$menuInner.attr("aria-expanded", !1), t.$element.trigger("hide.bs.select", e)
          },
          "hidden.bs.dropdown": function(e) {
            t.$element.trigger("hidden.bs.select", e)
          },
          "show.bs.dropdown": function(e) {
            t.$menuInner.attr("aria-expanded", !0), t.$element.trigger("show.bs.select", e)
          },
          "shown.bs.dropdown": function(e) {
            t.$element.trigger("shown.bs.select", e)
          }
        }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
          t.$button.addClass("bs-invalid"), t.$element.on({
            "focus.bs.select": function() {
              t.$button.focus(), t.$element.off("focus.bs.select")
            },
            "shown.bs.select": function() {
              t.$element.val(t.$element.val()).off("shown.bs.select")
            },
            "rendered.bs.select": function() {
              this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select")
            }
          }), t.$button.on("blur.bs.select", function() {
            t.$element.focus().blur(), t.$button.off("blur.bs.select")
          })
        }), setTimeout(function() {
          t.$element.trigger("loaded.bs.select")
        })
      },
      createDropdown: function() {
        var t = this.multiple || this.options.showTick ? " show-tick" : "",
          i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
          n = this.autofocus ? " autofocus" : "",
          s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
          o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + u(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
          a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
          l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
          r = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + n + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + s + o + a + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + l + "</div></div>";
        return e(r)
      },
      createView: function() {
        var e = this.createDropdown(),
          t = this.createLi();
        return e.find("ul")[0].innerHTML = t, e
      },
      reloadLi: function() {
        var e = this.createLi();
        this.$menuInner[0].innerHTML = e
      },
      createLi: function() {
        var t = this,
          i = [],
          n = 0,
          s = document.createElement("option"),
          o = -1,
          a = function(e, t, i, n) {
            return "<li" + (void 0 !== i && "" !== i ? ' class="' + i + '"' : "") + (void 0 !== t && null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== n && null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + e + "</li>"
          },
          l = function(i, n, s, o) {
            return '<a tabindex="0"' + (void 0 !== n ? ' class="' + n + '"' : "") + (s ? ' style="' + s + '"' : "") + (t.options.liveSearchNormalize ? ' data-normalized-text="' + c(u(e(i).html())) + '"' : "") + (void 0 !== o || null !== o ? ' data-tokens="' + o + '"' : "") + ' role="option">' + i + '<span class="' + t.options.iconBase + " " + t.options.tickIcon + ' check-mark"></span></a>'
          };
        if (this.options.title && !this.multiple && (o--, !this.$element.find(".bs-title-option").length)) {
          var r = this.$element[0];
          s.className = "bs-title-option", s.innerHTML = this.options.title, s.value = "", r.insertBefore(s, r.firstChild), void 0 === e(r.options[r.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected") && (s.selected = !0)
        }
        var d = this.$element.find("option");
        return d.each(function(s) {
          var r = e(this);
          if (o++, !r.hasClass("bs-title-option")) {
            var h, c = this.className || "",
              p = u(this.style.cssText),
              f = r.data("content") ? r.data("content") : r.html(),
              m = r.data("tokens") ? r.data("tokens") : null,
              b = void 0 !== r.data("subtext") ? '<small class="text-muted">' + r.data("subtext") + "</small>" : "",
              g = void 0 !== r.data("icon") ? '<span class="' + t.options.iconBase + " " + r.data("icon") + '"></span> ' : "",
              v = r.parent(),
              $ = "OPTGROUP" === v[0].tagName,
              x = $ && v[0].disabled,
              w = this.disabled || x;
            if ("" !== g && w && (g = "<span>" + g + "</span>"), t.options.hideDisabled && (w && !$ || x)) return h = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== h ? h : s), void o--;
            if (r.data("content") || (f = g + '<span class="text">' + f + b + "</span>"), $ && !0 !== r.data("divider")) {
              if (t.options.hideDisabled && w) {
                if (void 0 === v.data("allOptionsDisabled")) {
                  var C = v.children();
                  v.data("allOptionsDisabled", C.filter(":disabled").length === C.length)
                }
                if (v.data("allOptionsDisabled")) return void o--
              }
              var y = " " + v[0].className || "";
              if (0 === r.index()) {
                n += 1;
                var S = v[0].label,
                  k = void 0 !== v.data("subtext") ? '<small class="text-muted">' + v.data("subtext") + "</small>" : "";
                S = (v.data("icon") ? '<span class="' + t.options.iconBase + " " + v.data("icon") + '"></span> ' : "") + '<span class="text">' + u(S) + k + "</span>", 0 !== s && i.length > 0 && (o++, i.push(a("", null, "divider", n + "div"))), o++, i.push(a(S, null, "dropdown-header" + y, n))
              }
              if (t.options.hideDisabled && w) return void o--;
              i.push(a(l(f, "opt " + c + y, p, m), s, "", n))
            } else if (!0 === r.data("divider")) i.push(a("", s, "divider"));
            else if (!0 === r.data("hidden")) h = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== h ? h : s), i.push(a(l(f, c, p, m), s, "hidden is-hidden"));
            else {
              var E = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
              if (!E && t.options.hideDisabled && void 0 !== (h = r.data("prevHiddenIndex"))) {
                var I = d.eq(h)[0].previousElementSibling;
                I && "OPTGROUP" === I.tagName && !I.disabled && (E = !0)
              }
              E && (o++, i.push(a("", null, "divider", n + "div"))), i.push(a(l(f, c, p, m), s))
            }
            t.liObj[s] = o
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), i.join("")
      },
      findLis: function() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
      },
      render: function(t) {
        var i, n = this,
          s = this.$element.find("option");
        !1 !== t && s.each(function(e) {
          var t = n.findLis().eq(n.liObj[e]);
          n.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), n.setSelected(e, this.selected, t)
        }), this.togglePlaceholder(), this.tabIndex();
        var o = s.map(function() {
            if (this.selected) {
              if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
              var t, i = e(this),
                s = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
              return t = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content").toString() : s + i.html() + t
            }
          }).toArray(),
          a = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var l = this.options.selectedTextFormat.split(">");
          if (l.length > 1 && o.length > l[1] || 1 == l.length && o.length >= 2) {
            i = this.options.hideDisabled ? ", [disabled]" : "";
            var r = s.not('[data-divider="true"], [data-hidden="true"]' + i).length;
            a = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, r) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", r.toString())
          }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (a = this.options.title), a || (a = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", f(e.trim(a.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(a), this.$element.trigger("rendered.bs.select")
      },
      setStyle: function(e, t) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var i = e || this.options.style;
        "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
      },
      liHeight: function(t) {
        if (t || !1 !== this.options.size && !this.sizeInfo) {
          var i = document.createElement("div"),
            n = document.createElement("div"),
            s = document.createElement("ul"),
            o = document.createElement("li"),
            a = document.createElement("li"),
            l = document.createElement("a"),
            r = document.createElement("span"),
            d = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
            h = this.options.liveSearch ? document.createElement("div") : null,
            c = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
            p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
          if (r.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", s.className = "dropdown-menu inner", o.className = "divider", r.appendChild(document.createTextNode("Inner text")), l.appendChild(r), a.appendChild(l), s.appendChild(a), s.appendChild(o), d && n.appendChild(d), h) {
            var u = document.createElement("input");
            h.className = "bs-searchbox", u.className = "form-control", h.appendChild(u), n.appendChild(h)
          }
          c && n.appendChild(c), n.appendChild(s), p && n.appendChild(p), i.appendChild(n), document.body.appendChild(i);
          var f = l.offsetHeight,
            m = d ? d.offsetHeight : 0,
            b = h ? h.offsetHeight : 0,
            g = c ? c.offsetHeight : 0,
            v = p ? p.offsetHeight : 0,
            $ = e(o).outerHeight(!0),
            x = "function" == typeof getComputedStyle && getComputedStyle(n),
            w = x ? null : e(n),
            C = {
              vert: parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth")),
              horiz: parseInt(x ? x.paddingLeft : w.css("paddingLeft")) + parseInt(x ? x.paddingRight : w.css("paddingRight")) + parseInt(x ? x.borderLeftWidth : w.css("borderLeftWidth")) + parseInt(x ? x.borderRightWidth : w.css("borderRightWidth"))
            },
            y = {
              vert: C.vert + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2,
              horiz: C.horiz + parseInt(x ? x.marginLeft : w.css("marginLeft")) + parseInt(x ? x.marginRight : w.css("marginRight")) + 2
            };
          document.body.removeChild(i), this.sizeInfo = {
            liHeight: f,
            headerHeight: m,
            searchHeight: b,
            actionsHeight: g,
            doneButtonHeight: v,
            dividerHeight: $,
            menuPadding: C,
            menuExtras: y
          }
        }
      },
      setSize: function() {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
          var t, i, n, s, o, a, l, r, d = this,
            h = this.$menu,
            c = this.$menuInner,
            p = e(window),
            u = this.$newElement[0].offsetHeight,
            f = this.$newElement[0].offsetWidth,
            m = this.sizeInfo.liHeight,
            b = this.sizeInfo.headerHeight,
            g = this.sizeInfo.searchHeight,
            v = this.sizeInfo.actionsHeight,
            $ = this.sizeInfo.doneButtonHeight,
            x = this.sizeInfo.dividerHeight,
            w = this.sizeInfo.menuPadding,
            C = this.sizeInfo.menuExtras,
            y = this.options.hideDisabled ? ".disabled" : "",
            S = function() {
              var t, i = d.$newElement.offset(),
                n = e(d.options.container);
              d.options.container && !n.is("body") ? ((t = n.offset()).top += parseInt(n.css("borderTopWidth")), t.left += parseInt(n.css("borderLeftWidth"))) : t = {
                top: 0,
                left: 0
              };
              var s = d.options.windowPadding;
              o = i.top - t.top - p.scrollTop(), a = p.height() - o - u - t.top - s[2], l = i.left - t.left - p.scrollLeft(), r = p.width() - l - f - t.left - s[1], o -= s[0], l -= s[3]
            };
          if (S(), "auto" === this.options.size) {
            var k = function() {
              var p, u = function(t, i) {
                  return function(n) {
                    return i ? n.classList ? n.classList.contains(t) : e(n).hasClass(t) : !(n.classList ? n.classList.contains(t) : e(n).hasClass(t))
                  }
                },
                x = d.$menuInner[0].getElementsByTagName("li"),
                y = Array.prototype.filter ? Array.prototype.filter.call(x, u("hidden", !1)) : d.$lis.not(".hidden"),
                k = Array.prototype.filter ? Array.prototype.filter.call(y, u("dropdown-header", !0)) : y.filter(".dropdown-header");
              S(), t = a - C.vert, i = r - C.horiz, d.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height"), h.data("width") || h.data("width", h.width()), s = h.data("width")) : (n = h.height(), s = h.width()), d.options.dropupAuto && d.$newElement.toggleClass("dropup", o > a && t - C.vert < n), d.$newElement.hasClass("dropup") && (t = o - C.vert), "auto" === d.options.dropdownAlignRight && h.toggleClass("dropdown-menu-right", l > r && i - C.horiz < s - f), p = y.length + k.length > 3 ? 3 * m + C.vert - 2 : 0, h.css({
                "max-height": t + "px",
                overflow: "hidden",
                "min-height": p + b + g + v + $ + "px"
              }), c.css({
                "max-height": t - b - g - v - $ - w.vert + "px",
                "overflow-y": "auto",
                "min-height": Math.max(p - w.vert, 0) + "px"
              })
            };
            k(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", k), p.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", k)
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
            var E = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
              I = this.$lis.slice(0, E + 1).filter(".divider").length;
            t = m * this.options.size + I * x + w.vert, d.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height")) : n = h.height(), d.options.dropupAuto && this.$newElement.toggleClass("dropup", o > a && t - C.vert < n), h.css({
              "max-height": t + b + g + v + $ + "px",
              overflow: "hidden",
              "min-height": ""
            }), c.css({
              "max-height": t - w.vert + "px",
              "overflow-y": "auto",
              "min-height": ""
            })
          }
        }
      },
      setWidth: function() {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var e = this.$menu.parent().clone().appendTo("body"),
            t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
            i = e.children(".dropdown-menu").outerWidth(),
            n = t.css("width", "auto").children("button").outerWidth();
          e.remove(), t.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
      },
      selectPosition: function() {
        this.$bsContainer = e('<div class="bs-container" />');
        var t, i, n, s = this,
          o = e(this.options.container),
          a = function(e) {
            s.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), o.is("body") ? i = {
              top: 0,
              left: 0
            } : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, s.$bsContainer.css({
              top: t.top - i.top + n,
              left: t.left - i.left,
              width: e[0].offsetWidth
            })
          };
        this.$button.on("click", function() {
          var t = e(this);
          s.isDisabled() || (a(s.$newElement), s.$bsContainer.appendTo(s.options.container).toggleClass("open", !t.hasClass("open")).append(s.$menu))
        }), e(window).on("resize scroll", function() {
          a(s.$newElement)
        }), this.$element.on("hide.bs.select", function() {
          s.$menu.data("height", s.$menu.height()), s.$bsContainer.detach()
        })
      },
      setSelected: function(e, t, i) {
        i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[e])), i.toggleClass("selected", t).find("a").attr("aria-selected", t)
      },
      setDisabled: function(e, t, i) {
        i || (i = this.findLis().eq(this.liObj[e])), t ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
      },
      isDisabled: function() {
        return this.$element[0].disabled
      },
      checkDisabled: function() {
        var e = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
          return !e.isDisabled()
        })
      },
      togglePlaceholder: function() {
        var e = this.$element.val();
        this.$button.toggleClass("bs-placeholder", null === e || "" === e || e.constructor === Array && 0 === e.length)
      },
      tabIndex: function() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
      },
      clickListener: function() {
        var t = this,
          i = e(document);
        i.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
          /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
        }), this.$button.on("click", function() {
          t.setSize()
        }), this.$element.on("shown.bs.select", function() {
          if (t.options.liveSearch || t.multiple) {
            if (!t.multiple) {
              var e = t.liObj[t.$element[0].selectedIndex];
              if ("number" != typeof e || !1 === t.options.size) return;
              var i = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
              i = i - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = i
            }
          } else t.$menuInner.find(".selected a").focus()
        }), this.$menuInner.on("click", "li a", function(i) {
          var n = e(this),
            s = n.parent().data("originalIndex"),
            o = t.$element.val(),
            a = t.$element.prop("selectedIndex"),
            l = !0;
          if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass("disabled")) {
            var r = t.$element.find("option"),
              h = r.eq(s),
              c = h.prop("selected"),
              p = h.parent("optgroup"),
              u = t.options.maxOptions,
              f = p.data("maxOptions") || !1;
            if (t.multiple) {
              if (h.prop("selected", !c), t.setSelected(s, !c), n.blur(), !1 !== u || !1 !== f) {
                var m = u < r.filter(":selected").length,
                  b = f < p.find("option:selected").length;
                if (u && m || f && b)
                  if (u && 1 == u) r.prop("selected", !1), h.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(s, !0);
                  else if (f && 1 == f) {
                  p.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                  var g = n.parent().data("optgroup");
                  t.$menuInner.find('[data-optgroup="' + g + '"]').removeClass("selected"), t.setSelected(s, !0)
                } else {
                  var v = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
                    $ = "function" == typeof v ? v(u, f) : v,
                    x = $[0].replace("{n}", u),
                    w = $[1].replace("{n}", f),
                    C = e('<div class="notify"></div>');
                  $[2] && (x = x.replace("{var}", $[2][u > 1 ? 0 : 1]), w = w.replace("{var}", $[2][f > 1 ? 0 : 1])), h.prop("selected", !1), t.$menu.append(C), u && m && (C.append(e("<div>" + x + "</div>")), l = !1, t.$element.trigger("maxReached.bs.select")), f && b && (C.append(e("<div>" + w + "</div>")), l = !1, t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                    t.setSelected(s, !1)
                  }, 10), C.delay(750).fadeOut(300, function() {
                    e(this).remove()
                  })
                }
              }
            } else r.prop("selected", !1), h.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), t.setSelected(s, !0);
            !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.focus() : t.options.liveSearch && t.$searchbox.focus(), l && (o != t.$element.val() && t.multiple || a != t.$element.prop("selectedIndex") && !t.multiple) && (d = [s, h.prop("selected"), c], t.$element.triggerNative("change"))
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
          i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
          e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
        }), this.$menu.on("click", ".popover-title .close", function() {
          t.$button.click()
        }), this.$searchbox.on("click", function(e) {
          e.stopPropagation()
        }), this.$menu.on("click", ".actions-btn", function(i) {
          t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
        }), this.$element.change(function() {
          t.render(!1), t.$element.trigger("changed.bs.select", d), d = null
        })
      },
      liveSearchListener: function() {
        var t = this,
          i = e('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api", function() {
          t.$menuInner.find(".active").removeClass("active"), t.$searchbox.val() && (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hidden"), i.parent().length && i.remove()), t.multiple || t.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
            t.$searchbox.focus()
          }, 10)
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
          e.stopPropagation()
        }), this.$searchbox.on("input propertychange", function() {
          if (t.$lis.not(".is-hidden").removeClass("hidden"), t.$lis.filter(".active").removeClass("active"), i.remove(), t.$searchbox.val()) {
            var n, s = t.$lis.not(".is-hidden, .divider, .dropdown-header");
            if ((n = t.options.liveSearchNormalize ? s.not(":a" + t._searchStyle() + '("' + c(t.$searchbox.val()) + '")') : s.not(":" + t._searchStyle() + '("' + t.$searchbox.val() + '")')).length === s.length) i.html(t.options.noneResultsText.replace("{0}", '"' + u(t.$searchbox.val()) + '"')), t.$menuInner.append(i), t.$lis.addClass("hidden");
            else {
              n.addClass("hidden");
              var o, a = t.$lis.not(".hidden");
              a.each(function(t) {
                var i = e(this);
                i.hasClass("divider") ? void 0 === o ? i.addClass("hidden") : (o && o.addClass("hidden"), o = i) : i.hasClass("dropdown-header") && a.eq(t + 1).data("optgroup") !== i.data("optgroup") ? i.addClass("hidden") : o = null
              }), o && o.addClass("hidden"), s.not(".hidden").first().addClass("active"), t.$menuInner.scrollTop(0)
            }
          }
        })
      },
      _searchStyle: function() {
        return {
          begins: "ibegins",
          startsWith: "ibegins"
        }[this.options.liveSearchStyle] || "icontains"
      },
      val: function(e) {
        return void 0 !== e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
      },
      changeAll: function(t) {
        if (this.multiple) {
          void 0 === t && (t = !0), this.findLis();
          var i = this.$element.find("option"),
            n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
            s = n.length,
            o = [];
          if (t) {
            if (n.filter(".selected").length === n.length) return
          } else if (0 === n.filter(".selected").length) return;
          n.toggleClass("selected", t);
          for (var a = 0; a < s; a++) {
            var l = n[a].getAttribute("data-original-index");
            o[o.length] = i.eq(l)[0]
          }
          e(o).prop("selected", t), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
        }
      },
      selectAll: function() {
        return this.changeAll(!0)
      },
      deselectAll: function() {
        return this.changeAll(!1)
      },
      toggle: function(e) {
        (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click")
      },
      keydown: function(t) {
        var i, n, s, o, a = e(this),
          l = (a.is("input") ? a.parent().parent() : a.parent()).data("this"),
          r = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          d = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (!(o = l.$newElement.hasClass("open")) && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 65 && t.keyCode <= 90)) return l.options.container ? l.$button.trigger("click") : (l.setSize(), l.$menu.parent().addClass("open"), o = !0), void l.$searchbox.focus();
        if (l.options.liveSearch && /(^9$|27)/.test(t.keyCode.toString(10)) && o && (t.preventDefault(), t.stopPropagation(), l.$menuInner.click(), l.$button.focus()), /(38|40)/.test(t.keyCode.toString(10))) {
          if (!(i = l.$lis.filter(r)).length) return;
          n = l.options.liveSearch ? i.index(i.filter(".active")) : i.index(i.find("a").filter(":focus").parent()), s = l.$menuInner.data("prevIndex"), 38 == t.keyCode ? (!l.options.liveSearch && n != s || -1 == n || n--, n < 0 && (n += i.length)) : 40 == t.keyCode && ((l.options.liveSearch || n == s) && n++, n %= i.length), l.$menuInner.data("prevIndex", n), l.options.liveSearch ? (t.preventDefault(), a.hasClass("dropdown-toggle") || (i.removeClass("active").eq(n).addClass("active").children("a").focus(), a.focus())) : i.eq(n).children("a").focus()
        } else if (!a.is("input")) {
          var h, c = [];
          (i = l.$lis.filter(r)).each(function(i) {
            e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == d[t.keyCode] && c.push(i)
          }), h = e(document).data("keycount"), h++, e(document).data("keycount", h), e.trim(e(":focus").text().toLowerCase()).substring(0, 1) != d[t.keyCode] ? (h = 1, e(document).data("keycount", h)) : h >= c.length && (e(document).data("keycount", 0), h > c.length && (h = 1)), i.eq(c[h - 1]).children("a").focus()
        }
        if ((/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && l.options.selectOnTab) && o) {
          if (/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), l.options.liveSearch) /(32)/.test(t.keyCode.toString(10)) || (l.$menuInner.find(".active a").click(), a.focus());
          else {
            var p = e(":focus");
            p.click(), p.focus(), t.preventDefault(), e(document).data("spaceSelect", !0)
          }
          e(document).data("keycount", 0)
        }(/(^9$|27)/.test(t.keyCode.toString(10)) && o && (l.multiple || l.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !o) && (l.$menu.parent().removeClass("open"), l.options.container && l.$newElement.removeClass("open"), l.$button.focus())
      },
      mobile: function() {
        this.$element.addClass("mobile-device")
      },
      refresh: function() {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
      },
      hide: function() {
        this.$newElement.hide()
      },
      show: function() {
        this.$newElement.show()
      },
      remove: function() {
        this.$newElement.remove(), this.$element.remove()
      },
      destroy: function() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
      }
    };
    var g = e.fn.selectpicker;
    e.fn.selectpicker = b, e.fn.selectpicker.Constructor = m, e.fn.selectpicker.noConflict = function() {
      return e.fn.selectpicker = g, this
    }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', m.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(e) {
      e.stopPropagation()
    }), e(window).on("load.bs.select.data-api", function() {
      e(".selectpicker").each(function() {
        var t = e(this);
        b.call(t, t.data())
      })
    })
  }(e)
});