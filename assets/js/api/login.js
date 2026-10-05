import { baseurl, pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    getCredentials(baseurl)
        .then(data => {
            const loginArea = document.getElementById('loginArea');
            if (data) {
                const rolesHTML = data.roles && Array.isArray(data.roles) && data.roles.length > 0
                    ? `<div class="roles-list">Roles: ${data.roles.map(r => r.name).join(', ')}</div><hr>`
                    : '';

                loginArea.innerHTML = `
                    <div class="dropdown">
                        <button class="dropbtn">${data.name}</button>
                        <div class="dropdown-content hidden">
                            ${rolesHTML}
                            <a href="/profile">Profile</a>
                            <div class="dropdown-divider"></div>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>
                `;

                const dropbtn = loginArea.querySelector('.dropbtn');
                const dropContent = loginArea.querySelector('.dropdown-content');

                dropbtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropContent.classList.toggle('hidden');
                });

                document.addEventListener('click', (e) => {
                    if (!loginArea.contains(e.target)) {
                        dropContent.classList.add('hidden');
                    }
                });
            } else {
                loginArea.innerHTML = `<a href="/login">Login</a>`;
            }
            loginArea.style.opacity = '1';
        })
        .catch(err => {
            console.error("Error fetching credentials:", err);
            const loginArea = document.getElementById('loginArea');
            if (loginArea) loginArea.innerHTML = `<a href="/login">Login</a>`;
        });
});

function getCredentials(baseurl) {
    return fetch(pythonURI + '/api/id', {
        ...fetchOptions,
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) return null;
        return response.json();
    })
    .then(data => data || null)
    .catch(() => null);
}