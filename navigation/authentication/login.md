---
layout: opencs
title: Login
permalink: /login
search_exclude: true
show_reading_time: false
---
<style>
  /* ── Override body for login page only ── */
  body {
    background: var(--cream) !important;
    background-image: none !important;
    display: block !important;
  }

  .login-container {
    display: flex;
    gap: 28px;
    max-width: 860px;
    width: 100%;
    margin: 80px auto 60px;
    padding: 0 24px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .login-container { flex-direction: column; margin-top: 100px; }
  }

  /* ── Cards ── */
  .login-card,
  .signup-card {
    flex: 1;
    background: var(--warm-white) !important;
    border: 1px solid var(--border) !important;
    border-radius: 20px !important;
    padding: 36px 32px;
    box-shadow: 0 4px 28px rgba(61, 44, 36, 0.09);
    color: var(--text-main) !important;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .login-card:hover,
  .signup-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(61, 44, 36, 0.13);
  }

  /* eyebrow label */
  .card-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--rose-pale);
    border: 1px solid var(--rose-light);
    color: var(--terracotta);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 14px;
  }

  .login-card h1,
  .signup-card h1 {
    font-family: var(--serif) !important;
    font-size: 30px !important;
    font-weight: 600 !important;
    color: var(--text-main) !important;
    margin: 0 0 6px !important;
    letter-spacing: -0.3px;
  }

  .card-sub {
    color: var(--text-muted) !important;
    font-size: 13px;
    margin: 0 0 22px !important;
  }

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 18px 0 22px;
  }

  /* ── Form groups ── */
  .form-group {
    margin-bottom: 16px;
    position: relative;
  }

  .form-group label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--text-muted) !important;
    margin-bottom: 6px;
  }

  .form-group input {
    width: 100%;
    box-sizing: border-box;
    background: var(--cream) !important;
    color: var(--text-main) !important;
    border: 1px solid var(--tan-light) !important;
    border-radius: 10px !important;
    padding: 11px 14px;
    font-family: var(--sans) !important;
    font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .form-group input::placeholder { color: var(--text-muted); opacity: 0.7; }

  .form-group input:focus {
    outline: none;
    border-color: var(--rose) !important;
    box-shadow: 0 0 0 3px rgba(224, 122, 106, 0.15);
  }

  /* autofill */
  .form-group input:-webkit-autofill,
  .form-group input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--text-main) !important;
    -webkit-box-shadow: 0 0 0 1000px var(--cream) inset !important;
  }

  /* ── Submit button ── */
  button[type="submit"] {
    width: 100%;
    background: var(--rose) !important;
    color: white !important;
    border: none !important;
    border-radius: 10px !important;
    padding: 13px;
    font-family: var(--sans) !important;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(224, 122, 106, 0.3);
    margin-top: 4px;
    letter-spacing: 0.02em;
  }

  button[type="submit"]:hover {
    background: var(--terracotta) !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(196, 94, 74, 0.35);
  }

  button[type="submit"]:active { transform: translateY(0); }

  button[type="submit"]:disabled {
    background: var(--tan-light) !important;
    color: var(--text-muted) !important;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* ── Messages ── */
  #message,
  #signupMessage {
    margin-top: 14px;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
  }

  #message {
    background: var(--rose-pale);
    color: var(--terracotta);
    border: 1px solid var(--rose-light);
  }

  #signupMessage {
    background: var(--sage-pale);
    color: var(--sage);
    border: 1px solid var(--sage-light);
  }

  #signupMessage.error {
    background: var(--rose-pale);
    color: var(--terracotta);
    border: 1px solid var(--rose-light);
  }
</style>

<div class="login-container">

  <!-- ── Login Card ── -->
  <div class="login-card">
    <div class="card-eyebrow"> Welcome back</div>
    <h1>Sign In</h1>
    <p class="card-sub">Enter your credentials to continue</p>
    <hr>
    <form id="pythonForm" onsubmit="pythonLogin(event); return false;">
      <div class="form-group">
        <label for="uid">User ID</label>
        <input type="text" id="uid" placeholder="your-user-id" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" required>
      </div>
      <button type="submit">Login →</button>
      <p id="message" style="display:none;"></p>
    </form>
  </div>

  <!-- ── Sign Up Card ── -->
  <div class="signup-card">
    <div class="card-eyebrow"> New here</div>
    <h1>Create Account</h1>
    <p class="card-sub">Join the ACS community today</p>
    <hr>
    <form id="signupForm" onsubmit="signup(event); return false;">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="Your name" required>
      </div>
      <div class="form-group">
        <label for="signupUid">User ID</label>
        <input type="text" id="signupUid" placeholder="your-user-id" required>
      </div>
      <div class="form-group">
        <label for="signupPassword">Password</label>
        <input type="password" id="signupPassword" placeholder="8+ characters" required>
      </div>
      <button type="submit">Create Account →</button>
      <p id="signupMessage" style="display:none;"></p>
    </form>
  </div>

</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    window.pythonLogin = async function (event) {
        if (event) event.preventDefault();
        const uid = document.getElementById("uid").value.trim();
        const password = document.getElementById("password").value;
        const messageEl = document.getElementById("message");
        const submitBtn = document.querySelector("#pythonForm button[type='submit']");
        messageEl.style.display = 'none';
        messageEl.textContent = '';
        if (!uid || !password) {
            messageEl.textContent = "Please enter both username and password";
            messageEl.style.display = 'block';
            return false;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing in…';
        try {
            const response = await fetch(`${pythonURI}/api/authenticate`, {
                method: 'POST', mode: 'cors', credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'X-Origin': 'client' },
                body: JSON.stringify({ uid, password })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
                messageEl.textContent = errorData.message || `Login failed: ${response.status}`;
                messageEl.style.display = 'block';
                submitBtn.disabled = false; submitBtn.textContent = 'Login →';
                return false;
            }
            await response.json();
            await new Promise(resolve => setTimeout(resolve, 500));
            const verifyResponse = await fetch(`${pythonURI}/api/id`, {
                method: 'GET', mode: 'cors', credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'X-Origin': 'client' }
            });
            if (verifyResponse.ok) {
                messageEl.style.background = 'var(--sage-pale)';
                messageEl.style.color = 'var(--sage)';
                messageEl.style.borderColor = 'var(--sage-light)';
                messageEl.textContent = ' Login successful! Redirecting…';
                messageEl.style.display = 'block';
                setTimeout(() => { window.location.href = '{{site.baseurl}}/'; }, 900);
            } else {
                messageEl.textContent = "Session verification failed. Please try again.";
                messageEl.style.display = 'block';
                submitBtn.disabled = false; submitBtn.textContent = 'Login →';
            }
        } catch (error) {
            messageEl.textContent = `Error: ${error.message}`;
            messageEl.style.display = 'block';
            submitBtn.disabled = false; submitBtn.textContent = 'Login →';
        }
        return false;
    }

    window.signup = async function (event) {
        if (event) event.preventDefault();
        const signupButton = document.querySelector(".signup-card button[type='submit']");
        const messageEl = document.getElementById("signupMessage");
        messageEl.style.display = 'none';
        messageEl.textContent = '';
        messageEl.className = '';
        const name = document.getElementById("name").value.trim();
        const uid = document.getElementById("signupUid").value.trim();
        const password = document.getElementById("signupPassword").value;
        if (!name || name.length < 2) { messageEl.textContent = "Name must be at least 2 characters"; messageEl.className = 'error'; messageEl.style.display = 'block'; return false; }
        if (!uid || uid.length < 2) { messageEl.textContent = "User ID must be at least 2 characters"; messageEl.className = 'error'; messageEl.style.display = 'block'; return false; }
        if (!password || password.length < 8) { messageEl.textContent = "Password must be at least 8 characters"; messageEl.className = 'error'; messageEl.style.display = 'block'; return false; }
        signupButton.disabled = true; signupButton.textContent = 'Creating account…';
        try {
            const response = await fetch(`${pythonURI}/api/user`, {
                method: "POST", mode: 'cors', credentials: "include",
                headers: { "Content-Type": "application/json", "X-Origin": "client" },
                body: JSON.stringify({ name, uid, password })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
                throw new Error(errorData.message || `Signup failed: ${response.status}`);
            }
            await response.json();
            messageEl.textContent = " Account created! You can now log in.";
            messageEl.style.display = 'block';
            document.getElementById("signupForm").reset();
            setTimeout(() => {
                document.getElementById("uid").value = uid;
                document.getElementById("uid").focus();
                messageEl.style.display = 'none';
                signupButton.disabled = false; signupButton.textContent = 'Create Account →';
            }, 2000);
        } catch (error) {
            messageEl.className = 'error';
            messageEl.textContent = `Signup Error: ${error.message}`;
            messageEl.style.display = 'block';
            signupButton.disabled = false; signupButton.textContent = 'Create Account →';
        }
        return false;
    }
</script>