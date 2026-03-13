/**
 * Honey Lab - Main JavaScript
 * Enhances the CSS-only mobile nav with close-on-outside-click
 * and close-on-link-click. The menu works without JS via checkbox hack.
 */
document.addEventListener('DOMContentLoaded', function() {
    var check = document.getElementById('navCheck');
    if (!check) return;

    var siteNav = document.getElementById('siteNav');
    var toggle = document.querySelector('.nav-toggle');
    var isLanding = document.body.classList.contains('landing-page');

    // On landing page, if nav hasn't stuck yet (still at bottom of viewport),
    // scroll it to the top before opening the menu.
    if (toggle && isLanding && siteNav) {
        toggle.addEventListener('click', function(e) {
            if (!siteNav.classList.contains('stuck')) {
                e.preventDefault();
                siteNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(function() { check.checked = true; }, 350);
            }
        });
    }

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() { check.checked = false; });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (check.checked && !e.target.closest('.nav-inner')) {
            check.checked = false;
        }
    });
});
