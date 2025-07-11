#!/bin/bash

# Portfolio Deployment Script for GitHub Pages

echo "🚀 Deploying Portfolio to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Get commit message from user or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Update portfolio"
else
    COMMIT_MSG="$1"
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Please add your GitHub repository as origin:"
    echo "git remote add origin https://github.com/yourusername/portfolio.git"
    exit 1
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your portfolio will be available at:"
echo "https://yourusername.github.io/portfolio"
echo ""
echo "💡 Don't forget to enable GitHub Pages in your repository settings!"
echo "   Go to Settings > Pages > Deploy from branch > main"
