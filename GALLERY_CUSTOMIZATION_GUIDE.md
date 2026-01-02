# Gallery Configuration System - User Guide

## Overview

The fully customizable gallery system allows you to control every aspect of the gallery UI including theme, colors, fonts, layouts, and interactions. All settings are persisted to localStorage for a seamless experience.

## Quick Start

Navigate to `/catalog/status/gallery` to access the customizable gallery. Click the **Customize** button (top-right) to open the configuration panel.

## Customization Options

### 1. Theme

- **Light Theme**: Light background with dark text, perfect for professional displays
- **Dark Theme**: Dark background with light text, great for modern aesthetic
- Automatically adjusts all colors and gradients when switching themes

### 2. Card Style

- **Glass Morphism**: Frosted glass effect with backdrop blur and transparency
- **Soft**: Clean, soft cards with subtle borders
- **Outline**: Minimal outline-only style
- **Filled**: Solid background with shadow

### 3. Colors

#### Accent Color Presets

Choose from 6 preset colors:

- Blue
- Green
- Orange
- Red
- Purple
- Cyan

These colors affect:

- Hover effects
- Button colors
- Interactive elements

### 4. Typography

#### Font Family

- **Sans-serif**: Clean, modern default
- **Serif**: Elegant, traditional look
- **Monospace**: Code-like, technical appearance
- **System**: Uses OS default fonts

#### Font Sizes

- **Heading Font Size**: 16-32px (default: 18px)
- **Body Font Size**: 12-18px (default: 14px)
- **Heading Font Weight**: Semibold (600), Bold (700), Extra Bold (800)

### 5. Layout & Spacing

#### Layout Types

- **Grid**: Standard grid layout
  - Adjustable columns: 1-4
  - Uniform card sizes in rows
  - Perfect for product catalogs and portfolios
- **Masonry**: Pinterest-style columnar layout
  - Multi-column flow
  - Random card heights (250-400px) for visual variety
  - Great for image galleries and creative portfolios
  - Cards flow down columns, not rows
- **Carousel**: Coming soon

#### Spacing Controls

- **Horizontal Gap**: 2-8 units
  - Controls spacing between columns
  - Affects left and right spacing of cards
- **Vertical Gap**: 2-8 units
  - Controls spacing between rows (Grid layout)
  - Controls spacing below cards (Masonry layout)
- **Card Padding**: 0-8 units (controls internal padding within cards)

### 6. Card Styling

#### Border Radius

- Range: 0-32px
- Default: 24px
- Affects corner roundness of cards

#### Shadow Size

- **None**: No shadow
- **Small**: Subtle shadow
- **Medium**: Moderate shadow
- **Large**: Prominent shadow
- **Extra Large**: Heavy shadow

#### Aspect Ratio

- **5:6** (Default): Portrait orientation
- **4:5**: Taller portrait
- **1:1**: Square
- **16:9**: Widescreen
- **Auto**: Maintains natural image ratio

#### Card Opacity

- Range: 30%-100%
- Controls transparency of card background
- Useful for layering effects

#### Card Transparency

- Controlled by card background color settings
- Works with Glass style for frosted effect

### 7. Interactive Features

#### Hover Effects

- **Enable Hover Scale**: Cards zoom in on hover
- **Hover Scale Amount**: 1.0x to 1.2x (default: 1.05x)
- **Enable Hover Gradient**: Overlay gradient appears on hover
- **Enable Image Zoom**: Image zooms with card on hover

#### Display Elements

- **Show Buy Button**: Toggle "Buy Now" button display
- **Buy Button Text**: Customize button label
- **Show Auto-share Badge**: Toggle "Auto-share" or "Manual" badge
- **Show Index Number**: Toggle card numbering (#01, #02, etc.)

#### Image & Content

- **Show Caption**: Display item description/caption
- **Caption Lines**: 1-4 lines (controls text truncation)
- **Image Height**: Set image display percentage

### 8. Internationalization

#### Direction (RTL Support)

- **LTR** (Left-to-Right): Default
- **RTL** (Right-to-Left): For Arabic, Hebrew, etc.
- Automatically mirrors layout and text direction

## Advanced Settings

The configuration panel includes additional controls for fine-tuning:

- **Buy Button Text**: Customize the call-to-action text
- **Heading Font Weight**: Choose boldness (600, 700, 800)
- **Card Opacity**: Adjust background transparency
- **Hover Scale**: Control zoom intensity on hover
- **Caption Lines**: Set how many lines to display

## Preset Configurations

### Professional Preset

```
Theme: Light
Card Style: Soft
Border Radius: 16px
Shadow: Medium
Columns: 3
Gap: 4
```

### Modern Preset

```
Theme: Dark
Card Style: Glass
Border Radius: 24px
Shadow: Large
Columns: 3
Gap: 6
Hover Scale: 1.08
```

### Minimal Preset

```
Theme: Light
Card Style: Outline
Border Radius: 8px
Shadow: None
Columns: 2
Gap: 3
Show Buy Button: false
```

### E-commerce Preset

```
Theme: Light
Card Style: Soft
Border Radius: 12px
Shadow: Medium
Columns: 4
Gap: 4
Show Buy Button: true
Enable Image Zoom: true
```

## Persistence

All settings are automatically saved to browser's localStorage under the key `galleryConfig`. Your customizations will persist across browser sessions.

### Clear Settings

Click **Reset to Default** button to restore original settings and clear localStorage.

## Gallery Features

### Dynamic Card Rendering

- Cards respond instantly to configuration changes
- No page reload required
- Smooth transitions between states

### Smart Theming

- Light theme automatically adjusts:

  - Background colors (light slate)
  - Text colors (dark slate)
  - Shadow intensity
  - Gradient overlays

- Dark theme maintains:
  - Bold contrast
  - Glass morphism effects
  - Deep color schemes

### Responsive Design

- Grid adjusts for different screen sizes
- Touch-friendly controls
- Mobile-optimized panel

### Content Display

- Auto-clipping captions to specified lines
- Optimized aspect ratios prevent image distortion
- Lazy loading for performance

## Common Use Cases

### 1. Product Showcase

- Theme: Light
- Columns: 4
- Show Buy Button: Yes
- Card Style: Soft
- Enable Hover Scale: Yes

### 2. Portfolio Gallery

- Theme: Dark
- Card Style: Glass
- Columns: 3
- Show Buy Button: No
- Hover Scale: 1.1

### 3. Testimonials

- Theme: Light
- Columns: 2
- Border Radius: 16px
- Show Caption: Yes
- Caption Lines: 2

### 4. International Site (Arabic/Hebrew)

- Direction: RTL
- Font Family: Sans-serif
- Theme: Light
- All other settings per brand guidelines

## Masonry Layout Guide

The masonry layout creates a beautiful Pinterest-style gallery with:

- **Multi-Column Flow**: Content flows vertically down columns
- **Random Card Heights**: Each card has a different height (250-400px) for visual interest
- **Consistent Spacing**: Independent control over horizontal and vertical gaps
- **Responsive**: Column count adjusts based on your settings (1-4 columns)

### Best Uses for Masonry

- Image-heavy portfolios
- Photography galleries
- Creative showcases
- Pinterest-style content displays
- When you want visual variety in card sizes

## Bug Fixes & Recent Improvements

- **localStorage Merging**: All configurations now properly merge with defaults, ensuring no undefined values
- **Separate Gap Controls**: Horizontal and vertical gaps now work independently for precise spacing control
- **Masonry Heights**: Random heights are seed-based for consistency across renders
- **Error Handling**: Improved error handling for missing configuration properties

## Tips & Tricks

1. **Glass Morphism Effect**: Use dark theme with high shadow size for premium appearance
2. **Minimal Look**: Choose outline style with no shadows and rounded corners
3. **Professional**: Use soft cards with medium shadows and light theme
4. **E-commerce**: Enable all features with light theme for maximum conversions
5. **Masonry Gallery**: Use 3-4 columns with balanced gaps (4-6 units)
6. **Performance**: Reduce gap size and shadow size on mobile devices
7. **Accessibility**: Use high contrast colors and readable font sizes (14px+)

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch optimization

## Performance Considerations

- Configuration changes are applied in real-time
- No performance impact from customization
- Lazy loading enabled for images
- Optimized CSS transitions

## Troubleshooting

### Settings not persisting

- Check if localStorage is enabled in browser
- Clear browser cache and try again

### Visual issues with custom colors

- Ensure sufficient contrast between background and text
- Use the preset colors as reference

### Layout looks broken

- Reset to default and reconfigure
- Check browser zoom level (should be 100%)
- Try different browser if issue persists

## Future Enhancements

Planned features:

- Export/Import configurations
- Multiple preset saving
- Animation controls
- Custom CSS support
- Theme builder with color picker
- Carousel layout implementation
