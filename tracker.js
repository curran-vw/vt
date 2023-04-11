(function() {
    const sessionId = generateSessionId();
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    function generateSessionId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function sendData() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://rocky-hollows-13643.herokuapp.com/api/sessions', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            sessionId,
            userAgent,
            platform,
            createdAt: new Date(),
        }));
    }

    sendData();
})();