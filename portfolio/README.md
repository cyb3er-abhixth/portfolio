# Abhinav's Portfolio Website

A modern, responsive portfolio website built with React, showcasing the skills, projects, and journey of Abhinav. This project is designed to highlight frontend, backend, database, DevOps, and design skills, with a focus on clean UI/UX and smooth animations.

---

## 🚀 Features

- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- **Modern UI/UX:** Clean, visually appealing layout with category-based skills and project sections.
- **Animated Transitions:** Uses Animate On Scroll (AOS) for smooth, engaging animations.
- **Skills Section:** Categorized, scrollable, and icon-rich skills grid with official technology logos.
- **Projects Section:** Showcases major projects with images, tech stack, roles, challenges, and live links.
- **Contact & About Pages:** Professional sections for personal introduction and communication.
- **DevOps & Tools:** Highlights experience with hosting, version control, and design tools.

---

## 📁 Project Structure

```
portfolio/
├── public/                # Static assets (index.html, manifest, icons, etc.)
├── src/
│   ├── components/        # Reusable components (Navbar, etc.)
│   ├── images/            # All SVG/PNG logos and project images
│   │   └── project-images/
│   ├── pages/             # Main pages (Home, About, Skills, Works, Contact, etc.)
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── ...
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
└── ...
```

---

## 🛠️ Tech Stack

- **Frontend:** React, CSS3, Tailwind CSS, Bootstrap, Sass, jQuery
- **Backend:** Python, Django
- **Database:** MySQL, PostgreSQL, SQLite3, Supabase
- **Web Applications:** Next.js
- **DevOps:** Web Hosting (shared, cloud, static), GitHub Pages
- **Tools/Platforms:** GitHub, Figma, Postman, VSCode
- **Animations:** Animate On Scroll (AOS)

---

## 🖼️ Skills Section

- Category-based grid: Front End, Back End, Database, Web Apps, DevOps, Mobile, Tools/Platforms
- Each skill uses an official SVG/PNG logo for visual consistency
- Responsive and scrollable layout for all devices

---

## 🏗️ Projects Section (Works)

- Each project card includes:
  - Project image/preview
  - Title and description
  - Tech stack used
  - Roles and responsibilities
  - Challenges, solutions, or key features
  - Live project link (if available)
- Animated entry for each card

---

## 📦 Installation & Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-github-username>/<your-repo-name>.git
   cd <your-repo-name>/portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000)

---

## 🚢 Deployment (GitHub Pages)

1. **Set the `homepage` field in `package.json`:**
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```
2. **Install gh-pages:**
   ```sh
   npm install --save-dev gh-pages
   ```
3. **Add deploy scripts to `package.json`:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. **Deploy:**
   ```sh
   npm run deploy
   ```

---

## 📝 Customization

- **Add/Edit Skills:** Modify `src/pages/Skills.js` and add SVG/PNG logos to `src/images/`.
- **Add/Edit Projects:** Update `src/pages/Works.js` and add images to `src/images/project-images/`.
- **Change Theme/Colors:** Edit CSS files in `src/pages/` and `src/components/`.
- **Update Contact Info:** Edit `src/pages/Contact.js`.

---

## 🤝 Credits

- [React](https://react.dev/)
- [AOS Animate On Scroll](https://michalsnik.github.io/aos/)
- [SVG Logos](https://simpleicons.org/)
- [Figma](https://figma.com/), [GitHub](https://github.com/), [Postman](https://postman.com/), [VSCode](https://code.visualstudio.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Abhinav**

- [GitHub](https://github.com/<your-github-username>)
- [LinkedIn](https://www.linkedin.com/in/<your-linkedin-profile>)
- [Email](mailto:your.email@example.com)

---

> Built with passion and modern web technologies. For any queries or collaboration, feel free to reach out!
