# Aahaas Ecommerce - Frontend

A modern, responsive React.js frontend for the Aahaas Ecommerce application, built with Vite and styled with Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Product Display**: Beautiful grid layout with product cards
- **Search Functionality**: Real-time product search
- **Shopping Cart Counter**: Dynamic cart counter in header
- **Loading States**: Elegant loading spinners and states
- **Error Handling**: User-friendly error messages
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Hover Animations**: Interactive hover effects on product cards

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 16.0.0 (includes npm)
- **Git**

### Check if you have Node.js installed:
```powershell
node --version
npm --version
```

**This project uses Node.js v22.16.0**

If you don't have Node.js, download it from: https://nodejs.org/

## Installation & Setup

Follow these steps to set up the project on your local machine:

### Step 1: Clone the Repository

```powershell
git clone <your-repository-url>
cd product-frontend-react
```

### Step 2: Install Dependencies

This will install all required packages (156 packages) including React, Vite, Tailwind CSS, and Axios:

```powershell
npm install
```

**Expected Output:**
```
added 155 packages, and audited 156 packages in 31s
30 packages are looking for funding
```

**Note**: Dependencies are already installed for this project.

### Step 3: Configure API URL

The application is already configured to connect to the Laravel backend at `http://localhost:8000/api`.

If your backend is running on a different URL, edit the `src/services/api.js` file:

```javascript
const API_BASE_URL = 'http://localhost:8000/api'; // Change this if needed
```

### Step 4: Start the Development Server

Open PowerShell in the project directory and run:

```powershell
npm run dev
```

**Expected Output:**
```
VITE v5.4.21  ready in 413 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

 **The application is now running at:** `http://localhost:3000`

The browser may automatically open. If not, manually navigate to http://localhost:3000

**Keep this PowerShell window open!** The server will stop if you close it.

## Connecting to Backend

**CRITICAL**: The frontend will NOT work without the backend running!

### Before starting the frontend:

1. **Start MySQL in XAMPP Control Panel**
   - Open XAMPP Control Panel
   - Click "Start" next to MySQL (if not already running)

2. **Open a PowerShell window** and navigate to backend directory:
   ```powershell
   cd "C:\Users\Nima's TUF\Desktop\Aahaas Ecommerce\product-api-laravel"
   ```

3. **Start the Laravel server:**
   ```powershell
   C:\xampp\php\php.exe artisan serve
   ```
   
4. **Verify backend is running:** Open http://127.0.0.1:8000/api/products in your browser
   - You should see JSON data with 8 products

5. **Open a NEW PowerShell window** and start the frontend:
   ```powershell
   cd "C:\Users\Nima's TUF\Desktop\Aahaas Ecommerce\product-frontend-react"
   npm run dev
   ```

**Keep BOTH PowerShell windows open** while using the application!

## Project Structure

```
product-frontend-react/
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Header with search & cart
│   │   ├── Banner.jsx              # Hero banner section
│   │   ├── Products.jsx            # Products grid container
│   │   ├── ProductCard.jsx         # Individual product card
│   │   └── Footer.jsx              # Footer with links
│   ├── services/
│   │   └── api.js                  # API service for backend calls
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles with Tailwind
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

## Components Overview

### Header
- Logo and navigation
- Search bar with real-time filtering
- Shopping cart icon with counter
- Sticky header that stays at top

### Banner
- Hero section with tagline
- Call-to-action button
- Feature highlights (Quality, Fast Delivery, Secure Payment)
- Smooth scroll to products section

### Products
- Grid layout (responsive: 1-4 columns)
- Loading state with spinner
- Empty state message
- Product count display

### ProductCard
- Product image with hover zoom effect
- Product name and description
- Price display
- "Add to Cart" button
- Smooth hover animations

### Footer
- Company information
- Social media links
- Quick navigation links
- Contact information
- Copyright notice

## Available Scripts

### Development
```powershell
npm run dev
```
Starts the development server with hot-reload at `http://localhost:3000`

### Build for Production
```powershell
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```powershell
npm run preview
```
Preview the production build locally

## Styling

This project uses **Tailwind CSS** for styling with custom configurations:

- **Custom Colors**: Primary color palette (blue shades)
- **Custom Animations**: Fade-in and slide-up animations
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable button and card styles

### Tailwind Configuration
See `tailwind.config.js` for custom theme extensions.

## API Integration

The application communicates with the Laravel backend using Axios.

### API Endpoints Used:
- `GET /api/products` - Fetch all products

### API Service Location:
`src/services/api.js`

Example API call:
```javascript
import { getAllProducts } from './services/api';

const data = await getAllProducts();
```

## Features Implementation

### Search Functionality
- Real-time filtering as you type
- Searches both product name and description
- Case-insensitive search

### Shopping Cart Counter
- Displays number of items added to cart
- Animated counter badge
- Updates instantly when adding items
- Visual notification when item is added

### Loading States
- Beautiful spinner animation while fetching data
- Loading message for better UX
- Prevents layout shift during loading

### Hover Animations
- Product cards lift up on hover
- Image zoom effect on hover
- Button scale effect on hover
- Smooth transitions throughout

## Troubleshooting

### Issue: "Error Loading Products" or blank page
**Solution**: 
1. **Verify backend is running:** Open http://127.0.0.1:8000/api/products in browser
   - Should show JSON data, not an error
2. Make sure MySQL is running in XAMPP Control Panel
3. Check both PowerShell windows are still open
4. Press F12 in browser and check Console tab for errors
5. Click "Try Again" button or refresh the page

### Issue: "Cannot connect to backend"
**Solution**: 
1. Backend must run on `http://127.0.0.1:8000` (not localhost:8000)
2. Restart Laravel server: `C:\xampp\php\php.exe artisan serve`
3. Check backend terminal for errors
4. Verify `src/services/api.js` has correct URL

### Issue: "npm install fails"
**Solution**:
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules, package-lock.json

# Reinstall
npm install
```

### Issue: "Port 3000 already in use"
**Solution**: 
```powershell
# Kill the process using port 3000
netstat -ano | findstr :3000
# Note the PID number, then:
taskkill /PID <PID> /F

# Or start on different port
npm run dev -- --port 3001
```

### Issue: Frontend stops when closing terminal
**Solution**: This is normal. The dev server must stay running. Keep the PowerShell window open or minimize it.

### Issue: Images not loading
**Solution**: 
- Images use Unsplash URLs which require internet connection
- If images fail to load, a placeholder is automatically shown
- Check your internet connection

### Issue: Styles not applying
**Solution**:
```bash
# Rebuild Tailwind CSS
npm run dev
```

## Dependencies

Main dependencies used in this project:

- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - React DOM rendering
- **axios** (^1.6.0) - HTTP client for API calls
- **vite** (^5.0.8) - Fast build tool and dev server
- **tailwindcss** (^3.4.0) - Utility-first CSS framework

---

