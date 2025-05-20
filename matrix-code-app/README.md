# Matrix Code Rain App

A web-based Matrix-style code rain simulation built with HTML Canvas, served with Node.js and Docker.

## 🔧 Run Locally

```bash
npm install
npm start
```

Visit http://localhost:8080

## 🐳 Run in Docker

```bash
docker build -t matrix-code-app .
docker run -p 8080:8080 matrix-code-app
```

## 📁 File Structure

matrix-code-app/
├── public/
│   └── index.html
├── src/
│   └── matrix.js
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md

---

### 3. 🌐 Push to GitHub

#### a. Create Repo (manually on GitHub or via CLI)

```bash
gh repo create matrix-code-app --public --source=. --remote=origin --push
```
