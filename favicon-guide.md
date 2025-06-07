# How to Use the SSOE Image as a Favicon

To use the SSOE (School of Science & Engineering) image as a favicon for your web application, follow these steps:

## Step 1: Prepare the Image
1. Get the SSOE logo image in a square format
2. Convert it to ICO format (16x16, 32x32, 48x48 pixels versions)
   - You can use online tools like [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)

## Step 2: Place the Image in Your Project
1. Save the ICO file as `ssoe-favicon.ico` in the `public` directory
2. Replace the existing favicon.ico or add this new one

## Step 3: Update HTML
1. Open your main HTML file (usually `index.html`)
2. Add or update the favicon link tag in the `<head>` section:
   ```html
   <link rel="icon" href="/public/ssoe-favicon.ico" type="image/x-icon">
   ```

## Step 4: For Full Browser Support
For comprehensive browser support, add these additional tags:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png">
<link rel="manifest" href="/public/site.webmanifest">
```

## Step 5: Testing
1. Clear your browser cache
2. Reload your web application
3. Verify the SSOE logo appears in the browser tab

## Creating the ICO File
If you have the SSOE logo as an image file (PNG, JPG), follow these steps to convert it:

1. Go to [favicon.io](https://favicon.io/favicon-converter/)
2. Upload your SSOE image
3. Download the generated favicon package
4. Place the ICO file in your public directory

---

The SSOE logo is now set as your web application's favicon! 