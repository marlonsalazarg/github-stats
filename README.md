# GitHub Stats

GitHub Stats is a user-friendly web application that allows you to search for GitHub users and retrieve their GitHub statistics, including followers, following, public repositories, and public gists.

## Features

- **User Search**: Easily search for GitHub users by their usernames.
- **User Profile**: View detailed information about a GitHub user, including their profile picture, username, and bio.
- **Statistics**: Get insights into a user's GitHub activity, such as their number of followers, who they are following, and the number of public repositories and gists they have.
- **Account Creation**: If you don't have an account, you can create one by clicking the "Create Account" button.
- **Profile Updates**: Update your profile information, such as your email, password, first name, and last name.

## Getting Started

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/marlonsalazarg/github-stats.git

   ```

2. Navigate to the project directory:

   ```shell
   cd github-stats
   ```

3. Install the project dependencies:

   ```shell
    npm install
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Authentication

To access, you must log in with your account. If you don't have an account, you can create one by clicking the "Create Account" button.

## Generating a GitHub API Key

Before you can use the application, you'll need to generate a GitHub API key. Here's how:

1. Go to your GitHub profile settings.
2. Navigate to the "Developer settings" and click on "Personal access tokens."
3. Click the "Generate token" button to create a new access token.
4. Select the necessary permissions for the token (e.g., user, repo) to use the application.
5. Copy the generated token.
6. In the GitHub Stats directory, create a `token_git.js` file. You can find a `token_git.example.js` file in the directory to use as a template.
