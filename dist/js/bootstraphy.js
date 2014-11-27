/*!
 * bootstraphy v3.3.1 (https://github.com/furplag/bootstraphy/)
 * Copyright 2014 furplag
 * Licensed under MIT (https://github.com/furplag/bootstraphy/blob/master/LICENSE)
 * Adding few features and components for Bootstrap.
 * Based on Bootstrap (http://getbootstrap.com)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstraphy\'s JavaScript requires jQuery')
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

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

/* ========================================================================
 * Bootstraphy: bootstraphy.fileinput.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/furplag/bootstraphy/blob/master/LICENSE)
 * ======================================================================== */

// VIEW CUSTOMIZE FILE-INPUT
// =========

!function ($) {
  'use strict';

  if ($('html').is('.lt-ie9')) $('.btn-fileinput').removeClass('btn-fileinput')
  $('input[type="file"].btn-fileinput').each(function (i) {
    var $this = $(this)
      .removeClass('btn-fileinput')
    var labelDefault = $this.data('label-default') ? $this.data('label-default') : 'No file chosen'
    if (!$this.prop('id')) $this.prop('id', 'bs-fileinput-' + i)

    var $label = $('<label />')
      .prop('for', $this.prop('id'))
      .addClass('btn btn-fileinput')
      .addClass($this.is(':disabled, .disabled') ? 'disabled' : '')
      .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.success, .btn-success') ? 'btn-success' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : 'btn-default')
      .addClass($this.is('.btn-lg') ? 'btn-lg' : $this.is('.btn-sm') ? 'btn-sm' : $this.is('.btn-xs') ? 'btn-xs' : '')
    if (this.files && this.files.length) $label.addClass('removable')
    if (this.files && this.files.length > 1) for (var n = 0; n < this.files.length; n++) $label.prop('title', (n ? $label.prop('title') + '\n' : '') + this.files.item(n).name)
    var $labelText = $('<span />')
      .text(this.files && this.files.length > 1 ? (this.files.length + ' files') : this.files && this.files.length ? this.files.item(0).name : labelDefault)

    var $remover = $('<span title="Remove">&times;</span>')
      .addClass('remover')
      .on('click', function () {
        var $parentLabel = $(this).closest('label')
        if ($parentLabel.is('.removable')) {
          $labelText.text(labelDefault)
          $this.val('')
          $parentLabel
            .prop('title', '')
            .removeClass('removable')
        }
        return false
      })

    $this
      .wrap($label)
      .after($remover)
      .after($labelText)
      .on('change', function () {
        var $parentLabel = $(this).closest('label')
        $parentLabel
          .prop('title', '')
          .removeClass('removable')
          .addClass(this.files && this.files.length ? 'removable' : '')
        $labelText.text(this.files && this.files.length > 1 ? (this.files.length + ' files') : this.files && this.files.length ? this.files.item(0).name : labelDefault)
        if (this.files && this.files.length > 1) for (var n = 0; n < this.files.length; n++) $parentLabel.prop('title', (n ? $parentLabel.prop('title') + '\n' : '') + this.files.item(n).name)
      })
  })
}(jQuery)

/* ========================================================================
 * Bootstraphy: bootstraphy.select-dropdown.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

// SELECT CONVERT TO DROPDOWN
// ==========================

!function ($) {
  'use strict';

  $('select.select-dropdown').each(function (i) {
    var $this = $(this)
    if (!$this.data('label-default')) $this.attr('data-label-default', 'no Item selected')
    if (!$this.prop('id')) $this.prop('id', 'bs-select-dropdown-' + i)
    var multiple = $this.is('[multiple]') && (!$this.data('options-max') || $this.data('options-max') > 1)
    var limit = multiple && $this.data('options-max') > 1 ? $this.data('options-max') : (multiple ? $('option', $this).size() : 1)

    var $items = $('<ul class="dropdown-menu" role="menu" />')
      .prop('id', $this.prop('id') + '-menu')
      .prop('aria-labelledby', $this.prop('id') + '-btn')
      .attr('data-limit', limit)
      .addClass($this.is('.primary, .btn-primary') ? 'primary' : $this.is('.success, .btn-success') ? 'success' : $this.is('.info, .btn-info') ? 'info' : $this.is('.warning, .btn-warning') ? 'warning' : $this.is('.danger, .btn-danger') ? 'danger' : $this.is('.link, .btn-link') ? '' : 'default')

    $('optgroup:disabled option', $this)
      .prop('selected', false)
      .prop('disabled', true)

    var $selectedItems = $('option:selected', $this)
    if ($selectedItems > limit) {
      $selectedItems.prop('selected', false)
      $selectedItems = $('option:selected', $this)
    }
    $('option', $this).each(function () {
      var $link = $('<a role="menuitem" tabindex="-1" href="#" />')
        .attr('data-option-index', this.index)
        .html($(this).html())
        .on('click', function () {
          var isMultiple = $items.data('limit') > 1
          if ($(this).is(':disabled, .disabled')) return false
          if ($(this).parent().is(':disabled, .disabled')) return false
          if (!isMultiple && $(this).parent().is('.active')) return false
          var $targetOption = $($('option', $this).get($(this).data('option-index')))
          var $selectedOptions = $('option:selected', $this)
          if (isMultiple && !$(this).parent().is('.active') && $selectedOptions.size() >= $items.data('limit')) return
          if (!isMultiple) {
            $selectedOptions.prop('selected', false)
            $($targetOption).prop('selected', true)
            $('li', $items).removeClass('active')
            $(this).parent().addClass('active')
            $items.parent().find('button[data-toggle="dropdown"] .dropdown-label').html($targetOption.html())
          } else {
            $('li', $items).tooltip('destroy')
            if ($targetOption.is(':selected')) {
              $($targetOption).prop('selected', false)
              $(this).parent().removeClass('active')
              $selectedOptions = $('option:selected', $this)
            } else {
              $($targetOption).prop('selected', true)
              $(this).parent().addClass('active')
              $selectedOptions = $('option:selected', $this)
            }
            $items.parent().find('button[data-toggle="dropdown"] .dropdown-label').html($selectedOptions.size() > 1 ? ($selectedOptions.size() + ' items') : $selectedOptions.size() ? $($selectedOptions.get(0)).html() : $this.data('label-default'))
            if ($selectedOptions.size() >= $items.data('limit')) {
              $('li:not(.dropdown-header, .active, .disabled)', $items).tooltip()
            }
          }
        })
      var $item = $('<li role="presentation" />')
        .append($link)
        .addClass($(this).is(':selected') ? 'active' : $(this).is(':disabled, .disabled') ? 'disabled' : '')
        .attr('data-toggle', 'tooltip')
        .attr('data-container', 'body')
        .attr('data-trigger', 'hover')
        .attr('data-placement', 'right')
        .attr('data-title', 'LIMIT: up to ' + limit)
      if (multiple && $selectedItems.size() == limit && !$item.is('.active, .disabled')) $item.tooltip()
      $items.append($item)
    })
    $('optgroup', $this).each(function () {
      var $item = $('<li class="dropdown-header" role="presentation" />')
        .addClass($(this).is(':disabled, .disabled') ? 'disabled' : '')
        .text($(this).prop('label'))
      $('a[data-option-index="' + ($('option:first', this).prop('index')) + '"]', $items).parent().before($item)
    })
    var $button = $('<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"></button>')
      .prop('id', $this.prop('id') + '-btn')
      .prop('aria-labelledby', $this.prop('id') + '-menu')
      .attr('data-options-max', limit)
      .addClass($this.is(':disabled, .disabled') || !$('option', $this).size() ? 'disabled' : '')
      .addClass($this.is('.input-lg, .btn-lg, .lg') ? 'btn-lg' : $this.is('.input-sm, .btn-sm, .sm') ? 'btn-sm' : $this.is('.input-xs, .btn-xs, .xs') ? 'btn-xs' : '')
      .addClass($this.is('.primary, .btn-primary') ? 'btn-primary' : $this.is('.success, .btn-success') ? 'btn-success' : $this.is('.info, .btn-info') ? 'btn-info' : $this.is('.warning, .btn-warning') ? 'btn-warning' : $this.is('.danger, .btn-danger') ? 'btn-danger' : $this.is('.link, .btn-link') ? 'btn-link' : 'btn-default')
      .append($('<span class="dropdown-label" />').html($selectedItems.size() > 1 ? ($selectedItems.size() + ' items') : $selectedItems.size() ? $($selectedItems.get(0)).html() : $this.data('label-default')))
      .append('<span class="caret" />')

    $this
      .wrap('<div class="btn-group" />')
      .before($button)
      .before($items)
  })
}(jQuery);

/* ========================================================================
 * Bootstraphy: bootstraphy.toggle.js v3.3.0
 * ========================================================================
 * Copyright 2014 Furplag
 * Licensed under MIT (https://github.com/furplag/bootstraphy/blob/master/LICENSE)
 * ======================================================================== */

// VIEW CUSTOMIZE RADIO, CHECKBOX
// =========

!function ($) {
  'use strict';

  if ($('html').is('.lt-ie9'))  $('.flat, .switch').removeClass('flat switch')
  $('.flat input[type="radio"], .flat input[type="checkbox"], .switch input[type="checkbox"], .input-group-addon input[type="radio"].flat, .input-group-addon input[type="checkbox"].flat').after('<span />')
}(jQuery)
