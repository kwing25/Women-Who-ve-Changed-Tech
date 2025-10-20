# Women Who've Changed Tech 👩🏻‍💻

**Women Who've Changed Tech** is an open-source API + React app
celebrating the stories of women who shaped computing, STEM, and
technology.\
Our goal is to make the contributions of women in tech more visible,
accessible, and inspiring for the next generation.

> ✨ *Help document, design, and share the history of female tech
> pioneers --- from early innovators to today's leaders.*

------------------------------------------------------------------------

## 🌐 Live Website

<https://women-who-changed-tech.netlify.app>

![Status](https://img.shields.io/badge/status-active-success.svg)
![GitHub
issues](https://img.shields.io/github/issues/kwing25/Women-Who-ve-Changed-Tech)
![GitHub pull
requests](https://img.shields.io/github/issues-pr/kwing25/Women-Who-ve-Changed-Tech)
![GitHub
contributors](https://img.shields.io/github/contributors/kwing25/Women-Who-ve-Changed-Tech)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

------------------------------------------------------------------------

## 📖 About

Women Who've Changed Tech is both a data API and a React web app
documenting key women in the history of technology and STEM.\
Each entry highlights a pioneer's background, achievements, and verified
sources. The API and site are community-driven and open for
contributions.

------------------------------------------------------------------------

## 🧰 Built With

  Technology                                 Purpose
  ------------------------------------------ -------------------------
  [React.js](https://reactjs.org/)           App framework
  [Bootstrap 5](https://getbootstrap.com/)   UI styling
  [Sass](https://sass-lang.com/)             Stylesheet preprocessor
  [EmailJS](https://www.emailjs.com/)        Form/email integration
  [Postman](https://www.postman.com/)        API testing
  [Git + GitHub](https://github.com/)        Version control
  [npm](https://www.npmjs.com/)              Dependency management

------------------------------------------------------------------------

## 🚀 Quick Start

``` bash
git clone https://github.com/kwing25/Women-Who-ve-Changed-Tech.git
cd Women-Who-ve-Changed-Tech
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

------------------------------------------------------------------------

## 💡 How to Contribute

We welcome developers, researchers, writers, and designers to
collaborate!

### 🛠️ General Contributions

1.  **Fork the repo**

    ``` bash
    git fork https://github.com/kwing25/Women-Who-ve-Changed-Tech.git
    cd Women-Who-ve-Changed-Tech
    ```

2.  **Create a branch**

    ``` bash
    git checkout -b feature/your-idea
    ```

3.  **Make your changes and commit**

    ``` bash
    git commit -m "Added new pioneer: Grace Hopper"
    ```

4.  **Push and open a Pull Request**

> 💬 Check open
> [issues](https://github.com/kwing25/Women-Who-ve-Changed-Tech/issues)
> before starting work.

------------------------------------------------------------------------

### 🧠 Add a Tech Pioneer

Each pioneer is represented by a JSON entry (see
`schemas/pioneer.schema.json`).

1.  Add a new file in `/src/data/pioneers/` named `first-last.json`.\

2.  Include:

    -   `name`
    -   `bio`
    -   `roles`
    -   `fields`
    -   at least one verified `source`

3.  Validate your data:

    ``` bash
    npm run validate:data
    ```

4.  Submit your PR!

Example:

``` json
{
  "name": "Radia Perlman",
  "bio": "Radia Perlman is a computer scientist known for inventing the Spanning Tree Protocol (STP), a key technology in network bridges.",
  "roles": ["computer scientist"],
  "fields": ["networking"],
  "sources": [
    {
      "url": "https://en.wikipedia.org/wiki/Radia_Perlman",
      "title": "Radia Perlman – Wikipedia"
    }
  ],
  "slug": "radia-perlman"
}
```

------------------------------------------------------------------------

## 🧩 Roadmap

-   ✅ React app & API integration\
-   ✅ Data schema validation (AJV)\
-   ⏳ Internationalization (i18n)\
-   ⏳ Search & filters\
-   ⏳ Timeline visualization

See [open
issues](https://github.com/kwing25/Women-Who-ve-Changed-Tech/issues) for
current tasks.

------------------------------------------------------------------------

## 📜 License

-   **Code:** MIT\
-   **Data:** CC BY 4.0\
    You may share and adapt entries with attribution to *Women Who've
    Changed Tech*.

------------------------------------------------------------------------

## 📬 Contact

**Kendra Wing**\
[GitHub @kwing25](https://github.com/kwing25)\
[LinkedIn](https://www.linkedin.com/in/kendrawing/)

------------------------------------------------------------------------

## ❤️ Acknowledgments

Thanks to all Hacktoberfest contributors and open-data collaborators!

Resources that inspired this project: - [Computer History
Museum](https://www.computerhistory.org/) -
[Biography.com](https://www.biography.com/) -
[Britannica](https://www.britannica.com/) - [API Evangelist -- Women in
Tech](https://women-in-tech.apievangelist.com/)

------------------------------------------------------------------------

> Built with 💜 by the open-source community.
