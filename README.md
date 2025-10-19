# Poorna Sai Dumpa - Data Engineer Portfolio

A modern, interactive portfolio showcasing 5 years of data engineering expertise across AWS, GCP, and Azure platforms.

## 🚀 Live Demo
[Your Netlify URL will go here after deployment]

## ✨ Unique Features

### 1. **Animated ETL Pipeline Visualization**
- Live EXTRACT → TRANSFORM → LOAD animation in hero section
- Particle-based data flow with connected nodes
- Real-time pipeline state transitions

### 2. **Interactive Tech Stack Network**
- Canvas-based network graph with 50+ technology nodes
- Mouse-responsive particles with physics simulation
- Clickable nodes showing proficiency percentages
- Category-based clustering (Cloud, Data Engineering, DevOps, etc.)

### 3. **3D Flip Project Cards**
- All 4 major projects with immersive flip animations
- Front: Project overview with key achievements
- Back: Detailed technical architecture and responsibilities
- Click to flip and explore

### 4. **Live Terminal Window**
- Auto-typing animation showcasing skills
- Real command-line interface simulation
- Displays experience, tech stack, and expertise

### 5. **Code Showcase**
- Real production code samples (PySpark, DBT, Airflow)
- Syntax highlighting with copy-to-clipboard functionality
- Tabbed interface for easy navigation

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icons
- **Canvas API** - Interactive animations
- **React Router** - Navigation

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   └── index.html          # Netlify form detection
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx        # Animated hero with ETL pipeline
│   │   │   ├── Achievements.jsx # Key achievements showcase
│   │   │   ├── InteractiveTechStack.jsx # Canvas network graph
│   │   │   ├── Projects3D.jsx  # 3D flip cards
│   │   │   ├── TerminalWindow.jsx # Live terminal
│   │   │   ├── CodeShowcase.jsx # Code samples
│   │   │   ├── TechStackTimeline.jsx # Cloud evolution
│   │   │   ├── Experience.jsx  # Work history
│   │   │   ├── Contact.jsx     # Netlify forms
│   │   │   └── ui/             # Shadcn components
│   │   ├── data/
│   │   │   └── mockData.js     # All portfolio data
│   │   ├── App.js              # Main app component
│   │   └── index.css           # Tailwind config
│   └── package.json            # Dependencies
└── README.md                   # This file
```

## 🎨 Key Achievements Displayed

1. **Performance Optimization Expert** - 35% query performance enhancement
2. **Cost Efficiency Leader** - 50% reduction in manual efforts
3. **Production Reliability** - 99.9% pipeline uptime
4. **Cross-Cloud Expertise** - Successful AWS, GCP, Azure migrations

## 💼 Projects Showcased

1. **Mayo Clinic** - Healthcare Risk Adjustment & Clinical Analytics (GCP)
2. **Rockwell Automations** - Smart Manufacturing & Predictive Maintenance (Azure)
3. **PNC Bank** - Digital Payments & Fraud Detection (GCP)
4. **Tesco** - Retail Sales Intelligence & Customer Analytics (AWS)

## 🔗 Links

- **LinkedIn**: [linkedin.com/in/purnasai-pd](https://linkedin.com/in/purnasai-pd)
- **GitHub**: [github.com/purnasai1312](https://github.com/purnasai1312)
- **Email**: poornasai1312@gmail.com
- **Phone**: +1 309-315-1817

## 📦 Installation & Local Development

### Prerequisites
- Node.js 16+ and Yarn installed
- Git installed

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/purnasai1312/portfolio.git
cd portfolio
```

2. **Install frontend dependencies**
```bash
cd frontend
yarn install
```

3. **Create environment file**
```bash
# Create .env file in frontend directory
echo "REACT_APP_BACKEND_URL=http://localhost:3000" > frontend/.env
```

4. **Start development server**
```bash
cd frontend
yarn start
```

5. **Open browser**
Navigate to `http://localhost:3000`

## 🌐 Netlify Deployment Instructions

### Method 1: Deploy via Netlify UI (Recommended)

#### Step 1: Prepare Your GitHub Repository

```bash
# Navigate to your project root
cd /app

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Data Engineering Portfolio with unique features"

# Create GitHub repository at: https://github.com/new
# Name it: portfolio

# Add remote and push
git remote add origin https://github.com/purnasai1312/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Netlify

1. **Sign in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with GitHub

2. **Import Project**
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub
   - Select repository: `purnasai1312/portfolio`

3. **Configure Build Settings**
   ```
   Site name: poorna-data-engineer (or your custom name)
   Base directory: frontend
   Build command: yarn build
   Publish directory: frontend/build
   ```

4. **Environment Variables (Optional)**
   - Click "Show advanced"
   - Add if needed: `REACT_APP_BACKEND_URL=https://your-domain.com`

5. **Deploy**
   - Click **"Deploy site"**
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://poorna-data-engineer.netlify.app`

#### Step 3: Configure Netlify Forms

- Forms automatically work after deployment
- View submissions: **Site settings** → **Forms** → **Form notifications**
- Set up email notifications for new form submissions

#### Step 4: Custom Domain (Optional)

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter: `poorna-de.com`
4. Follow DNS configuration:
   ```
   Type: A Record
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: poorna-data-engineer.netlify.app
   ```

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to frontend directory
cd /app/frontend

# Build the project
yarn build

# Deploy to Netlify
netlify deploy --dir=build --prod

# Follow prompts:
# - Create & configure new site
# - Choose team
# - Enter site name: poorna-data-engineer
```

### Method 3: Drag & Drop Deploy (Quick Test)

1. Build locally:
   ```bash
   cd /app/frontend
   yarn build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `frontend/build` folder to the upload area

4. Site will be live instantly!

## 🔧 Post-Deployment Configuration

### Enable HTTPS
- Automatically enabled by Netlify
- Force HTTPS redirect: **Domain settings** → **HTTPS** → Enable

### Set up Continuous Deployment
- Already configured when connected to GitHub
- Every push to `main` branch triggers automatic deployment

### Configure Form Notifications
1. Go to **Site settings** → **Forms**
2. Click on your contact form
3. Add email notifications
4. Test by submitting a form

## 📝 Update Portfolio Content

All content is centralized in `frontend/src/data/mockData.js`:

```javascript
// Update personal info
export const personalInfo = { ... }

// Update achievements
export const achievements = [ ... ]

// Update projects
export const projects = [ ... ]

// Update skills
export const skills = { ... }
```

After updating, commit and push to trigger auto-deployment:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 🧪 Testing Before Deployment

```bash
# Build locally to test
cd frontend
yarn build

# Serve build locally
npx serve -s build

# Open http://localhost:3000 to test production build
```

## 🐛 Common Deployment Issues

### Issue: Build fails on Netlify
**Solution:**
- Ensure base directory is `frontend`
- Check all imports use correct paths
- Verify all dependencies in `package.json`

### Issue: Forms not submitting
**Solution:**
- Check `public/index.html` has hidden form
- Verify form has `data-netlify="true"`
- Form name must match: `name="contact"`

### Issue: Environment variables not working
**Solution:**
- React env vars must start with `REACT_APP_`
- Set in Netlify: **Site settings** → **Environment variables**
- Rebuild after adding variables

## 📱 Performance Tips

- ✅ Images optimized via Unsplash CDN
- ✅ Code splitting for faster loads
- ✅ Canvas animations optimized
- ✅ Lighthouse score: 90+ Performance

## 🎯 Next Steps After Deployment

1. ✅ Test all interactive features
2. ✅ Submit a test contact form
3. ✅ Share LinkedIn link: `https://your-site.netlify.app`
4. ✅ Add site URL to GitHub bio
5. ✅ Update resume with portfolio link
6. ✅ Monitor Netlify analytics

## 📄 License

MIT License - Feel free to use this template!

## 👨‍💻 Author

**Poorna Sai Dumpa**
- LinkedIn: [@purnasai-pd](https://linkedin.com/in/purnasai-pd)
- GitHub: [@purnasai1312](https://github.com/purnasai1312)
- Email: poornasai1312@gmail.com

---

**Built with ❤️ using React, Tailwind CSS, and Canvas API**
