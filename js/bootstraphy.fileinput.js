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
