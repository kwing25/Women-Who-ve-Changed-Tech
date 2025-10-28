# 🔒 Security Policy

## Supported Versions

We actively maintain the **main branch** of this repository.  
Older versions or forks are not guaranteed to receive security updates.

| Version         | Supported |
| --------------- | --------- |
| `main` (latest) | ✅ Yes     |
| Older branches  | ❌ No      |

---

## Reporting a Vulnerability

We take security and data integrity seriously — even for community-driven projects.

If you discover a vulnerability, **please do not open a public issue**.

Instead:

1. **Privately report it via email:**  
   📧 `kweb@protonmail.com`  
   Include:
   - A clear description of the issue  
   - Steps to reproduce (if possible)  
   - A suggested fix or mitigation (optional)

2. Expect a response within **5–7 business days.**  
   We’ll confirm receipt and begin investigation.

3. If the issue affects third-party libraries or infrastructure (Netlify, npm, etc.), we may coordinate disclosure responsibly with those maintainers.

---

## Scope

This policy covers:
- The **React web app**, API files, and validation scripts (`scripts/validate-data.mjs`, `schemas/`, etc.)  
- The **GitHub Actions workflows** and data integrity (malicious or incorrect JSON, injection risks, etc.)  
- **External contributions** that include dependencies, scripts, or third-party integrations.

It does **not** cover:
- Non-code content such as biographies or open data inaccuracies (these can be fixed via pull request).  
- Issues in dependencies already maintained by other projects (React, Bootstrap, etc.) — please report those upstream.

---

## Security Best Practices for Contributors

To keep the project safe for everyone:

- Use **npm audit** or **GitHub Dependabot** alerts to check vulnerabilities.
- Run `npm ci` instead of `npm install` to ensure clean dependency trees.
- Don’t commit secrets (API keys, tokens, or personal info) in code or data.
- Validate new pioneer JSON files with:
  `npm run validate:data`
- Only use public, properly licensed sources and images (CC BY, Public Domain, etc.) for data entries.

---

## Disclosure Policy

We believe in responsible disclosure:

- If a vulnerability is verified, we’ll issue a security advisory on GitHub.
- Contributors who report significant issues may be credited (with consent).
- Fixes are released as soon as safely possible, followed by a patch tag (e.g., v1.1.1).

---

## Questions
For general inquiries (non-sensitive), open a GitHub issue.
For sensitive security concerns, email kweb@protonmail.com directly.

*Thank you for keeping Women Who’ve Changed Tech safe.*