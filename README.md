# Kitchen Renovation Website

A web application for a kitchen renovation business. The project is organized into a client-facing frontend and a server-side backend.

## Project Structure

```text
kitchen-renovation-website/
├── client/       # Frontend application
├── server/       # Backend application and API
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- The runtime and dependencies required by the client and server (to be documented as the stack is finalized).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdallah-Divkar/kitchen-renovation-website.git
cd kitchen-renovation-website
```

### 2. Set up the client

Navigate to the client directory:

```bash
cd client
```

Install dependencies and start the frontend using the commands specified by the project's framework and its package or dependency configuration.

### 3. Set up the server

Open a separate terminal at the project root and navigate to the server directory:

```bash
cd server
```

Install the required backend dependencies, configure any required environment variables, and start the server according to the backend framework's instructions.

> **Note:** Exact installation, startup, and testing commands will be added once the frontend and backend technologies are selected and their configuration files are available.

## Testing

Before submitting changes:

1. Run the available frontend and backend tests.
2. Verify that the client starts successfully.
3. Verify that the server starts and its API endpoints respond as expected.
4. Test the integration between the client and server.
5. Check for errors in the terminal and browser console.

## Development Guidelines

- Keep frontend code in `client/` and backend code in `server/`.
- Never commit secrets, passwords, API keys, or private environment files.
- Document required environment variables in an `.env.example` file without including real credentials.
- Use descriptive commit messages.
- Test changes before pushing them to the repository.

## Contributing

### 1. Fork the repository

1. Open the [Kitchen Renovation Website repository](https://github.com/Abdallah-Divkar/kitchen-renovation-website).
2. Click **Fork** in the upper-right corner.
3. Select your GitHub account as the destination and create the fork.

### 2. Clone your fork

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/kitchen-renovation-website.git
cd kitchen-renovation-website
```

### 3. Configure the original repository

Add the original repository as an upstream remote so you can retrieve future updates.

```bash
git remote add upstream https://github.com/Abdallah-Divkar/kitchen-renovation-website.git
git remote -v
```

- `origin` points to your fork.
- `upstream` points to the original repository.

### 4. Create a feature branch

```bash
git switch -c feature/your-feature-name
```

Use a descriptive branch name that reflects your changes.

### 5. Make and test your changes

Install the required client and server dependencies, run the application, and test your changes before committing.

### 6. Commit and push your changes

```bash
git add .
git commit -m "feat: describe your changes"
git push -u origin feature/your-feature-name
```

### 7. Open a pull request

1. Open your fork on GitHub.
2. Select **Contribute** or **Compare & pull request**.
3. Set the base repository to `Abdallah-Divkar/kitchen-renovation-website` and the base branch to `main`.
4. Set the head repository to your fork and select your feature branch.
5. Describe your changes and submit the pull request for review.

Pull requests are reviewed before changes are merged into the original repository.

### Keeping your fork updated

To retrieve the latest changes from the original repository:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main
```

Resolve any merge conflicts before pushing if necessary.


## License

No license has been specified yet. Contact the repository owner before reusing or distributing this project's code.
