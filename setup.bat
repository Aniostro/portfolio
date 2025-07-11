@echo off
echo 🚀 Setting up your Portfolio...
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git is installed

REM Initialize Git repository if not exists
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git branch -M main
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

echo.
echo 🎨 Your portfolio is ready!
echo.
echo 📝 Next steps:
echo 1. Edit index.html to add your personal information
echo 2. Replace placeholder images with your photos
echo 3. Update config.js with your details
echo 4. Add your GitHub repository:
echo    git remote add origin https://github.com/yourusername/portfolio.git
echo 5. Deploy with: deploy.sh or git push
echo.
echo 💡 Open index.html in your browser to preview your portfolio
echo.
pause
