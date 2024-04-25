
const isLocalhost = ['localhost', '[::1]'].includes(window.location.hostname) ||
    window.location.hostname.startsWith('127.');

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                checkServiceWorker(swUrl, config);
            } else {
                registerServiceWorker(swUrl, config);
            }
        });
    }
}

function registerServiceWorker(swUrl, config) {
    navigator.serviceWorker.register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (!installingWorker) return;

                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        const { controller } = navigator.serviceWorker;
                        if (controller) {
                            console.log('New content is available; please refresh.');
                            config?.onUpdate?.(registration);
                        } else {
                            console.log('Content is cached for offline use.');
                            config?.onSuccess?.(registration);
                        }
                    }
                };
            };
        })
        .catch(error => console.error('Service worker registration error:', error));
}

function checkServiceWorker(swUrl, config) {
    fetch(swUrl)
        .then(response => {
            const isValid = response.ok && response.headers.get('content-type').includes('javascript');
            if (isValid) {
                registerServiceWorker(swUrl, config);
            } else {
                console.log('Service worker not found or invalid.');
                unregister();
            }
        })
        .catch(() => console.log('No internet connection; app is in offline mode.'));
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => registration.unregister());
    }
}
