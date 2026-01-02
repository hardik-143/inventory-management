# 🎨 Gallery Customization - Quick Reference

## Access the Gallery

Navigate to: `http://localhost:5173/catalog/status/gallery`

## Open Configuration Panel

Click the **⚙️ Customize** button in the top-right corner

## Quick Settings Reference

| Setting        | Range                           | Default | Use Case              |
| -------------- | ------------------------------- | ------- | --------------------- |
| Theme          | Light / Dark                    | Dark    | Overall appearance    |
| Card Style     | Glass / Soft / Outline / Filled | Glass   | Card appearance       |
| Accent Color   | 6 Colors                        | Blue    | Button & hover colors |
| Font Family    | Sans / Serif / Mono / System    | Sans    | Typography style      |
| Heading Size   | 16-32px                         | 18px    | Title prominence      |
| Body Size      | 12-18px                         | 14px    | Description text      |
| Layout         | Grid / Masonry                  | Grid    | Display arrangement   |
| Grid Columns   | 1-4                             | 3       | Cards per row         |
| Horizontal Gap | 2-8                             | 6       | Space between columns |
| Vertical Gap   | 2-8                             | 6       | Space between rows    |
| Border Radius  | 0-32px                          | 24px    | Card corner roundness |
| Shadow         | None / Sm / Md / Lg / Xl        | Lg      | Card depth            |
| Aspect Ratio   | 5:6 / 4:5 / 1:1 / 16:9 / Auto   | 5:6     | Card shape            |
| Card Opacity   | 30-100%                         | 100%    | Transparency          |
| Card Padding   | 0-8                             | 5       | Inner space           |
| Hover Scale    | 1.0-1.2x                        | 1.05x   | Zoom amount           |
| Direction      | LTR / RTL                       | LTR     | Text direction        |

## Feature Toggles (✓ = Enabled)

```
✓ Show Buy Button (text: "Buy Now")
✓ Show Auto-share Badge
✓ Show Index Number
✓ Enable Hover Scale
✓ Enable Hover Gradient
✓ Enable Image Zoom
✓ Show Caption
✓ Caption Lines: 3
```

## Preset Quick Styles

### Modern Dark

```
Theme: Dark
Style: Glass
Border: 24px
Shadow: Large
Columns: 3
Hover: 1.08x
```

### Professional Light

```
Theme: Light
Style: Soft
Border: 16px
Shadow: Medium
Columns: 3
Buttons: On
```

### Minimal

```
Theme: Light
Style: Outline
Border: 8px
Shadow: None
Columns: 2
Buttons: Off
```

### E-Commerce

```
Theme: Light
Style: Soft
Border: 12px
Shadow: Medium
Columns: 4
Zoom: On
```

## Keyboard Shortcuts

- **Escape**: Close panel
- **Tab**: Navigate through controls
- **Arrow Keys**: Adjust range sliders

## Pro Tips

💡 **Glass Effect**: Dark theme + Glass style + Large shadow

💡 **Minimal Look**: Light theme + Outline style + 0px border + No shadow

💡 **Professional**: Light theme + Soft style + Medium shadow

💡 **Mobile Optimized**: 1-2 columns + 4px gap + Smaller fonts

💡 **RTL Ready**: Set Direction to RTL for Arabic/Hebrew

💡 **Dark Mode**: Dark theme + high contrast accent color

## Common Problems & Solutions

| Problem             | Solution                                   |
| ------------------- | ------------------------------------------ |
| Text not visible    | Increase contrast by changing accent color |
| Cards look flat     | Increase shadow size                       |
| Layout broken       | Reset to defaults                          |
| Settings not saving | Check localStorage is enabled              |
| Slow performance    | Reduce gap and shadow size                 |

## Customization Values Saved To

📦 **Browser Local Storage** (`galleryConfig` key)

- Persists across sessions
- Survives page refresh
- Can be cleared with "Reset" button

## Reset Settings

Click **Reset to Default** button in the panel to restore all original settings

## Export Configuration (Future)

```javascript
// Get current config
const config = JSON.parse(localStorage.getItem("galleryConfig"));

// Save to file
const json = JSON.stringify(config, null, 2);
```

## Apply Configuration Programmatically

```typescript
import { useGalleryConfig } from "@/context/GalleryConfigContext";

function MyComponent() {
  const { config, updateConfig } = useGalleryConfig();

  // Apply settings
  updateConfig({
    theme: "light",
    gridColumns: 4,
    borderRadius: 12,
  });
}
```

## Color Presets Available

- 🔵 Blue: `rgb(59, 130, 246)`
- 🟢 Green: `rgb(34, 197, 94)`
- 🟠 Orange: `rgb(249, 115, 22)`
- 🔴 Red: `rgb(239, 68, 68)`
- 🟣 Purple: `rgb(168, 85, 247)`
- 🔷 Cyan: `rgb(14, 165, 233)`

## Font Weight Options

- 600 - Semibold (lighter)
- 700 - Bold (recommended)
- 800 - Extra Bold (heavier)

## Caption Display Lines

- 1 line: Single line summary
- 2 lines: Brief description
- 3 lines: Standard (default)
- 4 lines: Full caption

## Gallery Features Matrix

| Feature        | Light | Dark | Glass | Soft | Outline | Filled |
| -------------- | ----- | ---- | ----- | ---- | ------- | ------ |
| Hover Scale    | ✓     | ✓    | ✓     | ✓    | ✓       | ✓      |
| Hover Gradient | ✓     | ✓    | ✓     | ✓    | ✓       | ✓      |
| Image Zoom     | ✓     | ✓    | ✓     | ✓    | ✓       | ✓      |
| Buttons        | ✓     | ✓    | ✓     | ✓    | ✓       | ✓      |
| Badges         | ✓     | ✓    | ✓     | ✓    | ✓       | ✓      |

## Performance Tips

⚡ For best performance:

- Use 2-3 columns on mobile
- Reduce shadow size on slow devices
- Disable hover gradient if animation feels slow
- Use soft or outline styles instead of glass

## Responsive Breakpoints

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

## Browser Dev Tools

Monitor gallery performance:

```javascript
// In console
localStorage.getItem("galleryConfig"); // View current config
localStorage.removeItem("galleryConfig"); // Clear settings
```

---

**Need help?** Check `GALLERY_CUSTOMIZATION_GUIDE.md` for detailed documentation.
