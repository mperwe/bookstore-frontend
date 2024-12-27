# Getting Started with Create React App

## Creating a Book Store Platform 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Structure
bookstore-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/          # Store images like logo, banners, etc.
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with role-based links
│   │   ├── Footer.jsx       # Footer section
│   │   ├── BookCard.jsx     # Individual book card
│   │   ├── BookGrid.jsx     # Grid of books
│   │   ├── AdminBookForm.jsx# Admin form for adding/editing books
│   │   ├── AdminBookTable.jsx # Admin table for listing and managing books
│   │   ├── SignupForm.jsx   # Signup form component
│   │   ├── SigninForm.jsx   # Sign-in form component
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Books.jsx        # Books listing page
│   │   ├── Cart.jsx         # Shopping cart page
│   │   ├── Profile.jsx      # User profile page
│   │   ├── AdminPanel.jsx   # Admin panel for managing books
│   │   ├── Signup.jsx       # Signup page
│   │   ├── Signin.jsx       # Sign-in page
│   ├── services/
│   │   ├── api.js           # API functions (e.g., sign-in, sign-up, fetch books)
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── App.js               # Main App component
│   ├── index.js             # React entry point
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── utils/
│       ├── auth.js          # Authentication utilities (e.g., token handling)
│       └── roles.js         # Role-based access handling utilities
└── package.json
