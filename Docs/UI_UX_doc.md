# UI/UX Documentation for Vidify AI

This document outlines the design system, component library, and user experience flows for the Vidify AI application. All UI development should adhere to these guidelines to ensure a consistent and intuitive user experience.

## 1. Design Philosophy
- **Clean & Modern:** The UI should be uncluttered, with a focus on a modern aesthetic.
- **Intuitive:** User flows should be straightforward and require minimal guesswork.
- **Responsive:** The application must be fully usable across all common screen sizes, from mobile to desktop.

## 2. Color Palette
- **Primary:** `#6366F1` (Indigo) - Used for primary buttons, links, and active states.
- **Secondary:** `#10B981` (Emerald) - Used for success messages and secondary actions.
- **Background:** `#111827` (Gray-900) - Dark theme background.
- **Foreground:** `#F9FAFB` (Gray-50) - Primary text color.
- **Muted:** `#4B5563` (Gray-600) - Secondary text, placeholders.
- **Error:** `#EF4444` (Red-500) - Error messages and destructive actions.

## 3. Typography
- **Font Family:** Inter (sans-serif)
- **Headings (h1, h2, h3):** Font-weight `bold`.
- **Body Text:** Font-weight `regular`.

## 4. Core UI Components (Aceternity UI)
The project will leverage **Aceternity UI** for pre-built, beautifully designed components, customized to fit our theme. Key components include:

- **Buttons:** Standard, destructive, and outline variants.
- **Input Fields:** Text inputs, text areas for prompts.
- **Modals:** For confirmations (e.g., delete video).
- **Cards:** For displaying videos in the user library.
- **Spinners/Loaders:** For indicating loading states during video generation.
- **Toasts/Notifications:** For non-blocking feedback (e.g., "Video generation started").

## 5. User Flows

### 5.1. Authentication Flow
1.  **Landing Page:** Presents options to "Login" or "Sign Up".
2.  **Sign Up Page:** Form with fields for Email and Password. On success, redirects to the dashboard.
3.  **Login Page:** Form with fields for Email and Password. On success, redirects to the dashboard.

### 5.2. Video Generation Flow
1.  **Dashboard/Generator Page:**
    -   User is presented with a clear text area to input their prompt.
    -   An upload area is available for an optional reference image.
    -   Options are available to select style and aspect ratio.
2.  **Initiate Generation:**
    -   User clicks the "Generate" button.
    -   A loading indicator appears, and the form is disabled.
    -   A toast notification confirms that the generation process has started.
3.  **Completion:**
    -   Once the video is ready, a notification appears.
    -   The user is redirected to their video library, where the new video appears at the top.

### 5.3. Video Library Flow
1.  **Access:** Users can access their library via a "My Library" link in the navigation.
2.  **View:** Videos are displayed in a grid of thumbnails.
3.  **Interaction:** Hovering over a video reveals options:
    -   **Play:** Opens the video in a modal player.
    -   **Download:** Downloads the video file directly.
    -   **Delete:** Prompts the user with a confirmation modal before deleting. 