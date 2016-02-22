var overlay = document.getElementById('cboxOverlay'),
    overlayContent = document.getElementById('colorbox').remove();

overlay ? overlay.remove() : null;
overlayContent ? overlayContent.remove() : null;
