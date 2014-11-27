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
