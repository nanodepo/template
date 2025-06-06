import './uikit.js';

// Перехват события ошибки и перенаправление её в Alert
Livewire.hook('request', ({ url, options, payload, respond, succeed, fail }) => {
    // Runs after commit payloads are compiled, but before a network request is sent...

    respond(({ status, response }) => {
        // Runs when the response is received...
        // "response" is the raw HTTP response object
        // before await response.text() is run...
    })

    succeed(({ status, json }) => {
        // Runs when the response is received...
        // "json" is the JSON response object...
    })

    fail(({ status, content, preventDefault }) => {
        // Runs when the response has an error status code...
        // "preventDefault" allows you to disable Livewire's
        // default error handling...
        // "content" is the raw response content...
        preventDefault();
        Livewire.dispatch('makeAlert', { type: 'error', message: 'Ууупс! Кажется что-то пошло не так... (ERROR: ' + status + ')' });
    })
})
