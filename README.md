# Selia Videos Theme - Home Components

This project implements three new home components for the Selia Videos theme as requested in the requirements.

## Project Structure

```
src/
└── views/
    └── components/
        └── home/
            ├── videos-gallery.twig     # معرض الفيديو (سيليا)
            ├── store-branches.twig     # فروع المتجر (سيليا)
            ├── contact-form.twig       # نموذج التواصل (سيليا)
            ├── advanced-slider.twig    # شريط متقدم (example component)
            ├── square-links.twig       # روابط مربعة (example component)
            └── map.twig               # خريطة (example component)
twilight.json                          # Component configuration file
demo.html                             # Live demonstration of components
```

## Components Implemented

### 1. Videos Gallery Component (معرض الفيديو - سيليا)
**File:** `src/views/components/home/videos-gallery.twig`

**Features:**
- Display multiple videos with direct links
- Toggle between slider and fixed list layouts
- Configurable aspect ratio (vertical/horizontal)
- Video controls (play/stop, mute/unmute)
- Collection/loop support for multiple videos
- Title and subtitle support
- Standard settings (add_top_space, full_width)

**Configuration in twilight.json:**
- Component UUID: `550e8400-e29b-41d4-a716-446655440001`
- Path: `src/views/components/home/videos-gallery.twig`
- Fields: title, subtitle, display_as_slider, aspect_ratio, videos collection

### 2. Store Branches Component (فروع المتجر - سيليا)
**File:** `src/views/components/home/store-branches.twig`

**Features:**
- Advanced multi-level navigation system
- Toggle for single vs. multiple countries
- Horizontal tabs for countries (when multiple countries enabled)
- Vertical tabs for cities within each country
- iframe map integration for each city
- Conditional form fields based on country toggle
- Responsive design with overflow handling
- Title and subtitle support
- Standard settings (add_top_space, full_width)

**Configuration in twilight.json:**
- Component UUID: `550e8400-e29b-41d4-a716-446655440002`
- Path: `src/views/components/home/store-branches.twig`
- Fields: title, subtitle, multiple_countries toggle, separate collections for single/multiple country branches

### 3. Contact Form Component (نموذج التواصل - سيليا)
**File:** `src/views/components/home/contact-form.twig`

**Features:**
- Dynamic form field configuration through collections
- Multiple field types (text, email, tel, textarea, select)
- Real-time form validation
- Custom error messages in Arabic
- Loading states and success/error feedback
- Configurable submit button text
- Responsive grid layout
- Title and subtitle support
- Standard settings (add_top_space, full_width)

**Configuration in twilight.json:**
- Component UUID: `550e8400-e29b-41d4-a716-446655440003`
- Path: `src/views/components/home/contact-form.twig`
- Fields: title, subtitle, form_fields collection, submit_button_text

## Technical Implementation

### Theme Color System
All components follow the theme color system:
- `bg-storeBG` - Background color
- `text-store-text-primary` - Primary text color
- `text-store-text-secondary` - Secondary text color
- CSS variables: `--store-text-primary`, `--store-text-secondary`

### CSS Class Naming Convention
All components follow the unified naming approach:
- `.s-block` - Base component class
- `.s-block--{component-name}` - Component-specific class
- Example: `.s-block--videos-gallery`, `.s-block--store-branches`

### Component Field Access
Fields are accessed using the `component.field` syntax as specified:
- `{{ component.title }}`
- `{{ component.subtitle }}`
- `{{ component.videos }}` (for collections)

### Unique UUIDs
Each component and field has a unique UUID as required:
- Components: `550e8400-e29b-41d4-a716-44665544000X`
- Fields: Sequential UUIDs starting from `550e8400-e29b-41d4-a716-446655440011`

### Standard Settings
All components include the required standard settings:
- `add_top_space` - Toggle for adding top margin
- `full_width` - Toggle for full-width vs. container layout

## Features and Functionality

### Videos Gallery
- **Video Controls:** Custom play/pause and mute/unmute buttons
- **Layouts:** Grid and slider layouts with Swiper.js integration
- **Aspect Ratios:** Support for both horizontal (16:9) and vertical (9:16) videos
- **Responsive:** Mobile-first responsive design
- **Accessibility:** ARIA labels and keyboard navigation support

### Store Branches
- **Conditional Logic:** Form fields change based on single/multiple countries toggle
- **Tabbed Interface:** Clean tab navigation for countries and cities
- **Map Integration:** iframe support for Google Maps or other map services
- **Responsive:** Horizontal scrolling for tabs on mobile devices
- **State Management:** JavaScript handling for tab switching and content visibility

### Contact Form
- **Dynamic Fields:** Configurable form fields through collections
- **Validation:** Real-time validation with custom error messages
- **Field Types:** Support for text, email, phone, textarea, and select fields
- **UX Features:** Loading states, success messages, and form reset
- **Accessibility:** Proper labels, ARIA attributes, and keyboard navigation

## Dependencies

### CSS Framework
- **Tailwind CSS:** Used for responsive design and utility classes

### JavaScript Libraries
- **Swiper.js:** Required for slider functionality in videos gallery
- **Vanilla JavaScript:** Used for all interactive features

### Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- HTML5 video element support for videos gallery

## Usage

### In Twig Templates
```twig
{# Include videos gallery component #}
{% include 'src/views/components/home/videos-gallery.twig' with {
  component: videos_gallery_config
} %}

{# Include store branches component #}
{% include 'src/views/components/home/store-branches.twig' with {
  component: store_branches_config
} %}

{# Include contact form component #}
{% include 'src/views/components/home/contact-form.twig' with {
  component: contact_form_config
} %}
```

### Configuration Example
Components are configured through the `twilight.json` file following the established pattern of the form builder system.

## Demo

A complete demonstration is available in `demo.html` which shows all three components with sample data and full functionality.

## File Organization

- **Component Files:** Located in `src/views/components/home/`
- **Configuration:** Centralized in `twilight.json`
- **Demo:** `demo.html` for testing and showcase
- **Documentation:** This README file

## Notes

- All text and labels are in Arabic as per the project requirements
- Components follow RTL (right-to-left) layout principles
- Error handling and fallbacks are included for missing data
- Components are designed to be modular and reusable
- Code includes comprehensive comments for maintainability