// ==UserScript==
// @name         ddb-dm-screen-B
// @namespace    https://github.com/mivalsten/ddb-dm-screen
// @version      1.0.0
// @description  Poor man's DM screen for DDB campaigns
// @author       You
// @match        https://www.dndbeyond.com/campaigns/*
// @grant        none
// ==/UserScript==
//
var $ = window.jQuery;

(function() {
    $('.ddb-campaigns-character-card-footer-links-item-view').each(function(index, value) {
        let node = $(this);

        // Remove existing header info in preference of iFrame header
        let card = node.closest('.ddb-campaigns-character-card');
        card.find('.ddb-campaigns-character-card-header-upper-portrait').remove();
        card.find('.ddb-campaigns-character-card-header-upper-character-info-primary').remove();
        card.find('.ddb-campaigns-character-card-header-upper-character-info-secondary').first().remove();

        //.ddb-campaigns-character-card-header padding 20px

        if (!node.parents().hasClass('ddb-campaigns-detail-body-listing-inactive')) {
            card.find('.ddb-campaigns-character-card-header').after(`<iframe src="${node.attr('href')}" style="width: 100%; height: 550px"></iframe>`);
        }
    });
})();