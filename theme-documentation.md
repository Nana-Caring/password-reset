# NANA Password Reset UI - Theme Documentation

## Color Palette

### **Primary Colors**
- **Primary Green**: `#008000`
  - Used for: Titles, labels, primary buttons, brand text
  - Purpose: Main brand color, represents trust and security

- **Primary Orange**: `#FFA500EE` 
  - Used for: Borders, hover states, accents, gradients
  - Purpose: Secondary brand color, highlights and interactive elements

### **Supporting Colors**
- **White Background**: `#ffffff`
  - Used for: Card backgrounds, main content areas
  - Purpose: Clean, professional appearance

- **Text Colors**:
  - **Primary Text**: `#333333` (Dark gray for main content)
  - **Secondary Text**: `#6b7280` (Medium gray for supporting text)
  - **Label Text**: `#008000` (Green for form labels)

- **Border Colors**:
  - **Primary Border**: `#FFA500EE` (Orange for main borders)
  - **Input Border**: `#e5e7eb` (Light gray for form inputs)
  - **Divider**: `#e5e7eb` (Light gray for section dividers)

### **State Colors**
- **Success**: `#059669` (Green for success messages)
- **Error**: `#dc2626` (Red for error messages)
- **Warning**: `#f59e0b` (Amber for warnings)
- **Disabled**: `#9ca3af` (Gray for disabled elements)

## Typography

### **Font Family**
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### **Font Weights**
- **Light**: `300` - Subtle text, descriptions
- **Normal**: `400` - Body text, paragraphs
- **Medium**: `500` - Labels, buttons, important text
- **Semi-Bold**: `600` - Headings, titles, emphasis
- **Bold**: `700` - Strong emphasis (rarely used)
- **Extra Bold**: `800` - Logo text, brand elements

### **Font Sizes**
- **Small**: `11px` - Password suggestions, fine print
- **Caption**: `12px` - Help text, notes, secondary information
- **Body**: `14px` - Main content, form labels, descriptions
- **Input**: `16px` - Form inputs (prevents zoom on mobile)
- **Button**: `16px` - Button text
- **Subtitle**: `20px` - Logo text, section headers
- **Title**: `24px` - Page titles, main headings

## Layout & Spacing

### **Container Specifications**
- **Max Width**: `450px` for auth cards
- **Padding**: `32px` for main content areas
- **Border Radius**: `12px` for cards, `8px` for inputs
- **Button Radius**: `25px` for primary buttons (pill shape)

### **Spacing Scale**
- **XS**: `4px` - Icon margins, fine adjustments
- **SM**: `6px` - Label margins
- **MD**: `8px` - Input margins, small gaps
- **LG**: `12px` - Form element spacing
- **XL**: `16px` - Section margins
- **2XL**: `20px` - Form group spacing
- **3XL**: `24px` - Major section spacing
- **4XL**: `32px` - Page section margins

## Interactive Elements

### **Buttons**

#### Primary Button (Submit/Action)
```css
background: #008000;
color: white;
border-radius: 25px;
padding: 12px 24px;
font-weight: 500;
transition: all 0.3s ease;
transform: translateY(0);
```

#### Hover State
```css
background: #FFA500EE;
transform: translateY(-2px);
box-shadow: 0 8px 15px rgba(255, 165, 0, 0.3);
```

#### Disabled State
```css
background: #9ca3af;
cursor: not-allowed;
transform: translateY(0);
```

### **Form Inputs**

#### Default State
```css
border: 2px solid #e5e7eb;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
transition: all 0.3s ease;
```

#### Focus State
```css
border-color: #FFA500EE;
box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1);
outline: none;
```

## Shadow & Effects

### **Card Shadow**
```css
box-shadow: 0 20px 25px -5px rgba(255, 165, 0, 0.15), 0 10px 10px -5px rgba(255, 165, 0, 0.08);
```

### **Button Hover Shadow**
```css
box-shadow: 0 8px 15px rgba(255, 165, 0, 0.3);
```

### **Focus Shadow**
```css
box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1);
```

## Animations & Transitions

### **Standard Transition**
```css
transition: all 0.3s ease;
```

### **Button Hover Animation**
```css
transform: translateY(-2px);
transition: all 0.3s ease;
```

### **Spinner Animation**
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## Component Patterns

### **Auth Card Structure**
```jsx
<div className="auth-container">
  <div className="auth-card">
    <div className="auth-header">
      {/* Logo */}
      {/* Title (h2) */}
      {/* Description (p) */}
    </div>
    <form className="auth-form">
      {/* Form groups */}
    </form>
    <div className="auth-footer">
      {/* Help text */}
    </div>
  </div>
</div>
```

### **Form Group Pattern**
```jsx
<div className="form-group">
  <label htmlFor="fieldName">Field Label</label>
  <input
    type="password"
    id="fieldName"
    name="fieldName"
    placeholder="Enter value"
    required
  />
</div>
```

## Message Components

### **Error Message**
```css
background: #fef2f2;
border: 1px solid #fecaca;
color: #dc2626;
padding: 12px 16px;
border-radius: 8px;
```

### **Success Message**
```css
background: #f0fdf4;
border: 1px solid #bbf7d0;
color: #059669;
padding: 12px 16px;
border-radius: 8px;
```

### **Help Text**
```css
background: #fff;
border: 1px solid #FFA500EE;
color: #333333;
padding: 8px 12px;
border-radius: 6px;
font-size: 12px;
```

## Logo Guidelines

### **Logo Placeholder (When Image Unavailable)**
- **Heart Icon**: Uses orange gradient `#FFA500EE` to `#FF8C00`
- **Text**: Green `#008000`, Poppins font, weight 600
- **Size**: 32px for icon, 20px for text
- **Spacing**: 8px gap between icon and text

### **Logo Image**
- **Height**: 60px (maintains aspect ratio)
- **Border Radius**: 8px
- **Margin Bottom**: 16px
- **Format**: PNG recommended for transparency

## Responsive Design

### **Mobile Breakpoint** (`max-width: 640px`)
- **Card Padding**: Reduced to `24px`
- **Card Margin**: `16px` on all sides
- **Title Size**: Reduced to `20px`
- **Input Font Size**: Maintained at `16px` (prevents zoom on iOS)

## Accessibility Guidelines

### **Color Contrast**
- Green (`#008000`) on white meets WCAG AA standards
- Orange (`#FFA500EE`) provides sufficient contrast for borders
- Error red (`#dc2626`) meets accessibility requirements

### **Focus Management**
- All interactive elements have visible focus states
- Orange focus ring with 3px blur for clear visibility
- Keyboard navigation supported throughout

### **Font Sizing**
- Minimum text size of 12px
- Input text at 16px prevents mobile zoom
- Adequate line height (1.5) for readability

## Usage Examples

### **CSS Custom Properties (Optional Enhancement)**
```css
:root {
  --color-primary-green: #008000;
  --color-primary-orange: #FFA500EE;
  --color-text-primary: #333333;
  --color-text-secondary: #6b7280;
  --color-background: #ffffff;
  --color-border: #e5e7eb;
  --color-error: #dc2626;
  --color-success: #059669;
  
  --font-family: 'Poppins', sans-serif;
  --border-radius-sm: 8px;
  --border-radius-lg: 12px;
  --border-radius-pill: 25px;
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
}
```

## Brand Identity

### **Visual Characteristics**
- **Professional**: Clean lines, ample whitespace
- **Trustworthy**: Green primary color conveys security
- **Approachable**: Orange accents add warmth and friendliness
- **Modern**: Rounded corners and subtle shadows create contemporary feel
- **Consistent**: Uniform spacing and typography throughout

### **Brand Personality**
- **Caring**: Reflected in warm orange accents and helpful messaging
- **Secure**: Emphasized through green primary color and professional layout
- **User-Friendly**: Clear typography and intuitive interactions
- **Reliable**: Consistent design patterns and familiar UI elements

---

**File:** `theme-documentation.md`
**Version:** 1.0
**Last Updated:** October 2025
**Author:** NANA Development Team
