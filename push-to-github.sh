#!/bin/bash
# Quick GitHub Push Script for Portfolio

echo "🚀 Pushing Portfolio to GitHub..."
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: Must run from /app directory"
    exit 1
fi

# Initialize git if needed
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Portfolio: Data Engineering showcase with unique features

Features:
- Animated ETL Pipeline Hero
- Hexagonal Interactive Tech Stack
- 3D Flip Project Cards
- Live Terminal Window
- Code Samples Showcase
- Achievements Section
- Netlify Forms Integration
- Mobile Responsive Design

Tech Stack: React 19, Tailwind CSS, Shadcn/ui, Canvas API"

# Add remote if not exists
if ! git remote | grep -q "origin"; then
    echo "🔗 Adding remote origin..."
    read -p "Enter your GitHub username (default: purnasai1312): " username
    username=${username:-purnasai1312}
    
    read -p "Enter repository name (default: portfolio): " repo
    repo=${repo:-portfolio}
    
    git remote add origin "https://github.com/$username/$repo.git"
fi

# Push
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🌐 Next steps:"
echo "  1. Go to https://app.netlify.com"
echo "  2. Import your GitHub repository"
echo "  3. Configure build settings:"
echo "     - Base directory: frontend"
echo "     - Build command: yarn build"
echo "     - Publish directory: frontend/build"
echo "  4. Deploy!"
echo ""
echo "📝 Your repository: https://github.com/$username/$repo"
