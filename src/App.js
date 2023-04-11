import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        fetchSessions();
    }, []);

    const fetchSessions = async () => {
        const response = await axios.get('https://rocky-hollows-13643.herokuapp.com/api/sessions');
        setSessions(response.data);
    };

    const copySnippet = () => {
        const snippet = document.getElementById('snippet');
        snippet.select();
        document.execCommand('copy');
    };

    return (
        <div>
            <h1>Simple Website Traffic Tracker</h1>
            <button onClick={copySnippet}>Copy JavaScript Snippet</button>
            <textarea  id="snippet"  readOnly  value="<script src='https://cdn.jsdelivr.net/gh/https://github.com/curran-vw/vt/blob/master/tracker.js'></script>"/>
            <h2>Visitor Sessions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Session ID</th>
                        <th>User Agent</th>
                        <th>Platform</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session => (
                        <tr key={session._id}>
                            <td>{session.sessionId}</td>
                            <td>{session.userAgent}</td>
                            <td>{session.platform}</td>
                            <td>{new Date(session.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;