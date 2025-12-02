# Browser Tab Icon (Favicon)

## Current Setup

The browser tab icon (favicon) is set to use the Aahaas logo:
```html
<link rel="icon" type="image/png" href="/images/aahaas-logo.png" />
```

## Requirements

- The same logo file used in the navbar (`/images/aahaas-logo.png`) will appear in the browser tab
- **Size**: Works best at 32x32 or 64x64 pixels for favicon
- **Format**: PNG, ICO, or SVG

## For Best Results

If you want a dedicated favicon (separate from the main logo):

1. Create a smaller version of your logo (32x32 or 64x64 pixels)
2. Save it as `favicon.png` or `favicon.ico` in the `public/` folder
3. Update `index.html`:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   <!-- or for .ico -->
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   ```

## Note

The favicon will automatically update once you add your `aahaas-logo.png` file to `/public/images/` folder.
