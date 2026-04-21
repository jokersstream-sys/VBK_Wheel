# Joker's Giveaway Wheel - Render Deployment Package

An interactive giveaway wheel with Google Sheets integration, perfect for live streams and events!

## 🎡 Features

- **Interactive Spinning Wheel**: Beautiful animated wheel with smooth spinning
- **Google Sheets Integration**: Real-time participant sync from Google Sheets
- **Auto-Elimination Mode**: Run multiple spins to eliminate participants
- **Manual Controls**: Spin once or manage participants manually
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Effects**: Joker theme with purple gradient background

## 📋 Prerequisites

- A [Render.com](https://render.com) account (free tier available)
- Git installed on your computer
- A GitHub/GitLab/Bitbucket account (for code hosting)

## 🚀 Deployment Steps

### Option 1: Deploy via Git (Recommended)

1. **Create a Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Giveaway Wheel"
   ```

2. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git remote add origin YOUR_REPO_URL
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **"New +"** → **"Web Service"**
   - Connect your repository
   - Configure the service:
     - **Name**: giveaway-wheel (or your choice)
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free
   - Click **"Create Web Service"**

4. **Access Your App**
   - Render will provide a URL like: `https://giveaway-wheel.onrender.com`
   - Your app will be live in 2-3 minutes!

### Option 2: Manual Upload via Render Dashboard

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Choose **"Build and deploy from a Git repository"**
4. Upload your code as a ZIP file (if you don't use Git)

## 🔧 Configuration

### Google Sheets Setup

1. **Create a Google Sheet** with your participants
   - Column A should contain participant names
   - First row is the header (e.g., "Name")

2. **Publish the Sheet as CSV**
   - File → Share → Publish to web
   - Choose "Comma-separated values (.csv)"
   - Copy the published URL

3. **Use in the App**
   - Paste the CSV URL in the "Google Sheet CSV URL" field
   - Click "Load from Sheet"

### Environment Variables (Optional)

No environment variables are required for basic operation, but you can add:

- `PORT`: Server port (default: 3000, Render sets this automatically)
- `NODE_ENV`: Set to "production" for production deployments

## 📁 Project Structure

```
giveaway-wheel/
├── public/
│   └── index.html          # Main application file
├── server.js               # Express server
├── package.json            # Node.js dependencies
├── render.yaml            # Render deployment config
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🎮 How to Use

1. **Load Participants**:
   - Option A: Paste CSV URL and click "Load from Sheet"
   - Option B: Enter names manually (one per line)

2. **Run Giveaway**:
   - Enter number of spins (e.g., 5 for top 5)
   - Click "Start Giveaway"
   - Wheel will auto-spin and eliminate participants

3. **Single Elimination**:
   - Click "Eliminate One" to remove one participant

4. **Reset**:
   - Click "Reset All" to start fresh

## 🛠️ Local Development

To run locally before deploying:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open in browser
# http://localhost:3000
```

## 🔒 Security Notes

- The app uses client-side Google Sheets integration
- Only works with publicly published CSV URLs
- No server-side authentication required
- Safe for public deployment

## 📝 Customization

To customize the appearance, edit `public/index.html`:

- Change colors in the `<style>` section
- Modify wheel segments in the JavaScript
- Update the Joker image URL
- Adjust animation speeds and effects

## 🐛 Troubleshooting

**Issue**: "Application failed to start"
- Solution: Check Render logs for errors
- Verify `npm install` completed successfully

**Issue**: "Google Sheets not loading"
- Solution: Ensure the sheet is published as CSV
- Check CORS settings (public URLs work automatically)

**Issue**: "Wheel not spinning"
- Solution: Clear browser cache
- Check browser console for JavaScript errors

## 📞 Support

For issues or questions:
- Check Render's [documentation](https://render.com/docs)
- Review application logs in Render dashboard
- Verify Google Sheets CSV URL is publicly accessible

## 📄 License

MIT License - Feel free to modify and use for your needs!

---

**Made with 🃏 for awesome giveaways!**
