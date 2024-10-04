document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    document.body.appendChild(spinner);

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Exclude links with href="#" or internal content
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                showSpinner();
                setTimeout(() => {
                    window.location.href = href;
                }, Math.floor(Math.random() * (666 - 200 + 1)) + 200);
            });
        }
    });

    function showSpinner() {
        document.body.style.pointerEvents = 'none'; // Disable interactions
        document.body.classList.add('loading');
    }

    function hideSpinner() {
        document.body.style.pointerEvents = 'auto'; // Enable interactions
        document.body.classList.remove('loading');
    }

    window.addEventListener('load', () => {
        hideSpinner();
    });
});
