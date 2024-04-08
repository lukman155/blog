### Blog App with Next.js

This is a simple blog application built with Next.js, a React framework. The application fetches top headlines from a news API and displays them in a grid layout. Users can bookmark articles, and a modal provides additional details when an article is clicked.

### Features:

- **Dynamic Rendering:** Utilizes dynamic imports for components and font loading for optimized performance.
- **Responsive Layout:** The grid layout adjusts based on screen size for a seamless user experience.
- **Bookmarking:** Users can add articles to bookmarks for later viewing.
- **Error Handling:** Provides error messages and a reload button in case of failed data fetching.

### Installation:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

### Project Structure:

- **`app`**: Contains Next.js pages.
  - `page.tsx`: Home page component.
- **`Components`**: Contains reusable components.
  - `Header.tsx`: Header component.
  - `Footer.tsx`: Footer component.
  - `ArticleCard.tsx`: Component to display individual article cards.
  - `ArticleModal.tsx`: Modal component to display detailed article information.
- **`types`**: Contains TypeScript interfaces and types.
  - `index.ts`: Defines ArticleItem interface for article data.
- **`helpers`**: Contains helper functions for formatting article data.

### Technologies Used:

- **Next.js**: React framework for server-rendered React applications.
- **SWR**: React hooks library for data fetching.
- **Dynamic Imports**: Used for lazy loading components and fonts.
- **CSS Modules**: Local scoped CSS styling using styled-jsx.

### Credits:

- **News API**: Data source for fetching top headlines.

### Contributors:

- **Lukman Abdulkarim**

Feel free to contribute to the project by adding new features, fixing bugs, or improving the codebase!
