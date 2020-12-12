### `Get started`

    1. Clone the repository
    2. yarn install
    3. yarn start
    4. yarns build

## Structure

```bash
├── README.md - This file.
├── package.json # Npm package manager file
├── package-lock.json # Npm package manager file
├── yarn.lock
├── CNAME # File for custom domain
├── build # Production build - firebase hosting reads from this
     └── ... #minified code
├── public
│   ├── favicon.ico # Favicon image
│   ├── logo192.png # Apple touch icon size-medium
│   ├── logo512.png # Apple touch icon size-large
│   └── index.html # Basic HTML template
│   └── manifest.json # JSON file to store basic data
└── src
    ├── font # Folder for all webfonts
    │   └── ...
    ├── img # Icons for the app
    │   └── ...
    ├── css # global styles
    │   └── index.css # Custom styles
    │   └── navbar.module.css # Styles for navigation bar
    │   └── bootstrap-grid.min.css # Minified bootstrap-grid
    ├── components # Icons for the app
    │   └── Footer.js # Footer component
    │   └── ds # Folder for all dreamspring related works
    │       └── Dock.js #Page for Dock
    │   ├── About.js # 30 Days of Framer X project
    │   ├── AdaptiveHeader.js # PRISM Layout Redesign project
    │   ├── FeaturedProjects.js # PRISM Video Editing Redesign X project
    │   ├── Navbar.js # Common navigation bar
    │   └── Work.js # GNB navigations for project pages
    ├── App.js # File with main functionality for the app
    └── index.js # File used for DOM rendering
```
