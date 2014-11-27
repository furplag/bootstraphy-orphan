/* ========================================================================
 * Bootstraphy: bootstraphy.normalize.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/furplag/bootstraphy/blob/master/LICENSE)
 * ======================================================================== */

// NORMALIZE
// =========

var Sxxk = {};
(function () {
  'use strict';

  if (!Array.prototype.indexOf) Array.prototype.indexOf = function (e/*,n*/) {
    if (this == null) throw new TypeError();
    var t = Object(this)
    var len = t.length >>> 0;
    var n = arguments.length > 0 ? Number(arguments[1]) : 0;
    if (len === 0) return -1;
    n = n != n ? 0 : n !== 0 && n != Infinity && n != -Infinity ? (n > 0 || -1) * Math.floor(Math.abs(n)) : n;
    if (n >= len) return -1;
    var k = n >= 0 ? n : Math.max(len - Math.abs(n),0);
    for (; k < len; k++) {
      if (k in t && t[k] === e) {
        return k;
      }
      return -1;
    }
  }
  if (!String.format) String.prototype.format = function (s) {
    if (typeof s === 'object') return this.replace(/\{(\w+)\}/g, function (e,k) {return s[k];});
    var a = arguments;
    var i = 0;
    return this.replace(/\{(\w+)\}/g, function () {i++; return '{' + (i - 1) + '}';}).replace(/\{(\w+)\}/g, function (e, k) {return a[k];});
  }
  if (!Array.isArray) Array.isArray = function (a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  }
  if (!Array.forEach) Array.prototype.forEach = function (f, a) {
    var t = a ? a : null;
    var k = 0;
    var o = Object(this);
    var l = o.length >>> 0;
    while (k < l) {
      var kv;
      if (k in o) {
        kv = o[k];
        f.call(t, kv, k, o);
      }
      k++;
    }
  }
  if (!Array.map) Array.prototype.map = function (f) {
    var r = [];
    for (var i = 0; i < this.length; i++) {
      r.push(f(this[i]));
    }
    return r;
  }
  if (!Array.filter) Array.prototype.filter = function (fn) {
    if (this == null) throw new TypeError();
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fn != 'function') throw new TypeError();
    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];
        if (fn.call(thisp, val, i, t)) res.push(val);
      }
    }
    return res;
  }
  if (!Object.flip) Object.flip = function (o) {
    var r = {};
    for (var k in o) {
      if (o.hasOwnProperty(k)) r[o[k]] = k;
    }
    return r;
  }
  if (!Object.keys) Object.keys = function (o) {
    var r = [];
    for (var i in o) {
      if (o.hasOwnProperty(i)) r.push(i);
    }
    return r;
  }
  if (!Object.values) Object.values = function (o) {
    return Object.keys(o).map(function (v) {return o[v];});
  }
  if (!Object.extend) Object.extend = function (o) {
    var e = [].slice.call(arguments, 1);
    e.forEach(function (l) {for (var k in l) o[k] = l[k];});
    return o;
  }
})(Sxxk);
