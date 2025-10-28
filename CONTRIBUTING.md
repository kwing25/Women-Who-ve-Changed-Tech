🤝 Contributing Guidelines
==========================

Thank you for your interest in contributing to **Women Who’ve Changed Tech**! Your help makes this project grow and ensures that the stories of women in STEM and technology continue to be told and celebrated. 🌟

Any contributions — code, data, design, or documentation — are **greatly appreciated**.

If you have ideas for improvement, please:

*   Fork the repository and open a **pull request**, or
*   Submit an **issue** tagged with `"enhancement"`

Don’t forget to ⭐️ the project if you find it inspiring!

> 📚 **Resource:** [How to Contribute to Open Source Projects](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

* * *

🛠️ General Contribution Steps
------------------------------

Follow these steps to contribute safely and effectively.

1.  **Fork the Repository**  
    Click the **Fork** button in the upper-right corner of this repo.
2.  **Clone Your Fork Locally**
    
        git clone https://github.com/your-username/Women-Who-ve-Changed-Tech.git
        cd Women-Who-ve-Changed-Tech
    
3.  **Create a New Branch**
    
        git checkout -b feature/your-feature-name
    
4.  **Make Your Changes**  
    Implement your updates, run tests if applicable, and validate data before committing:
    
        npm run validate:data
    
5.  **Commit Your Changes**
    
        git commit -m "Add: Grace Hopper profile to pioneer list"
    
6.  **Push Your Branch**
    
        git push origin feature/your-feature-name
    
7.  **Open a Pull Request (PR)**  
    Go to your fork on GitHub and click **Compare & pull request**.

> ⚠️ **Before submitting your PR:**  
> Review open [issues](https://github.com/kwing25/Women-Who-ve-Changed-Tech/issues) to ensure your idea isn’t duplicated. Include screenshots, data sources, or notes where relevant.

* * *

👩‍💻 Adding a Tech Pioneer Entry
---------------------------------

Each tech pioneer is represented as a JSON file in the `/src/data/pioneers/` directory.

### Steps to Add a New Entry

1.  Create a file named `first-last.json` (for example: `ada-lovelace.json`).
2.  Include the following required fields:
```json
    {
      "name": "Ada Lovelace",
      "bio": "Recognized as the first computer programmer, Ada Lovelace contributed to the design of Charles Babbage's Analytical Engine.",
      "roles": ["mathematician", "writer"],
      "fields": ["computing", "logic"],
      "sources": [
        {
          "url": "https://www.britannica.com/biography/Ada-Lovelace",
          "title": "Ada Lovelace Biography"
        }
      ]
    }
```
3.  Validate your entry locally:
    
        npm run validate:data
    
4.  Once validation passes, open your Pull Request.

For more details, refer to the [Tech Pioneer Contribution Guide](https://github.com/kwing25/Women-Who-ve-Changed-Tech/blob/main/api/TECH-PIONEER-CONTRIBUTE.md).

* * *

🧾 Pull Request Template
------------------------

### ✍️ Title

**(Required)** — Provide a concise summary of your changes.

### 📝 Description

**(Required)** — Explain what you changed and why. Include screenshots or GIFs for UI updates.

### 🤔 Reason for PR / What It Fixes

**(Required)** — Why is this change necessary? If it fixes an issue, include:

    Fixes #42

### 🧮 Testing

Describe how you tested your changes and whether they affect other areas of the project.

### ℹ️ Types of Changes

*   General (content, documentation, styling)
*   Bug fix (non-breaking change that fixes an issue)
*   New feature (non-breaking addition)
*   Breaking change (fix or feature that changes existing functionality)

### ☑️ Checklist

*  My code is clean and free of typos
*   I’ve tested my changes locally
*   I’ve commented any complex sections
*   My changes introduce no new warnings or build errors
*   Documentation is updated if applicable
*   My data and code follow project style guidelines

* * *

💬 Need Help?
-------------

If you need help or feedback:

*   Start a [discussion](https://github.com/kwing25/Women-Who-ve-Changed-Tech/discussions)
*   Tag **@kwing25** in your pull request comments

💜 Thank you for contributing your time, ideas, and creativity to _Women Who’ve Changed Tech!_ Every contribution helps share and preserve the legacy of women in technology.