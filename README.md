# NewsRoute

NewsLok is a React-based News app that allows you to stay updated with the latest news articles. It comes with various features to enhance your news reading experience.

## Features

### 1. Fetching News

- Integration with a news API to fetch the latest news articles.
- Support for different news categories (e.g., technology, sports, politics).
- Infinite scroll for continuous news loading.

### 2. Carousel Display

- Implementation of a carousel to showcase featured news articles.
- Dynamic display of the news articles in the carousel.
- Customizable carousel settings for user preferences.

### 3. User Interaction

- User-friendly interface for a seamless news reading experience.

### 4. Search Functionality

- Integration of a search bar for users to find specific news articles.
- Advanced search options, such as filtering by language or category.

## Getting Started

Follow these steps for set up and run the project loally:

###Prerequisites

-Node.js and npm installed on your machine.
- An API key from NewsAPI.

### Installation

1. CLone the repository:

   ```bash
   git clone https://github.com/anchalraj31082004/newsroute
   ```
2. Navigate to the project directory:

    ```bash
    cd newsroute
    ```

3. Install dependencies:

    ```bash
    npm install
    ``` 

4. Rename the `.env.sample` to `.env` file in the root directory and add your API key:

    ```env
    VITE_API_BASE_URL="https://newsapi.org/v2"
    VITE_API_KEY="{Your_API_KEY_FROM_NewsAPI}"
    ```

    Replace `YOUR_API_KEY_FROM_NewsAPI` with your actual API key.

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and visit http://localhost:5173 to view the app.   
