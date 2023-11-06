document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('model-viewer');
    const variantButtons = document.querySelectorAll('.variant-button');

    variantButtons.forEach(button => {
        button.addEventListener('click', function() {
            const variantSrc = this.getAttribute('data-variant-src');
            modelViewer.src = variantSrc;
        });
    });
});





