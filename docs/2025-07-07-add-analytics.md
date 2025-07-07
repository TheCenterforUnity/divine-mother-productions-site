# Analytics Implementation Work Plan
*Date: 2025-07-07*

## Overview
Add Google Analytics (GA4) and Google Tag Manager (GTM) to the Divine Mother Productions website to track user behavior and site performance.

## Analytics IDs
- **Google Analytics**: G-G6GS9P3YNF
- **Google Tag Manager**: GTM-MDH4QSXM

## Step-by-Step Implementation Plan

### Phase 0: Manual Setup in GA4 and GTM Dashboards
**Objective**: Configure analytics accounts and verify setup

#### Google Analytics 4 (GA4) Setup
**Manual Steps for You**:
1. **Access GA4 Dashboard**
   - Go to https://analytics.google.com
   - Log into your Google account
   - Navigate to your GA4 property (G-G6GS9P3YNF)

2. **Verify Property Settings**
   - Click "Admin" (gear icon) in bottom left
   - Under "Property" column, click "Property details"
   - Verify:
     - Property name: "Divine Mother Productions" (or similar)
     - Website URL: your domain
     - Industry category: appropriate selection
     - Reporting time zone: your preferred timezone

3. **Configure Data Streams**
   - In Admin > Property column, click "Data Streams"
   - Click on your web stream (should show G-G6GS9P3YNF)
   - Verify:
     - Website URL is correct
     - Stream name is descriptive
   - Click "Configure tag settings" > "Show all" to see available settings

4. **Set Up Enhanced Measurement** (Recommended)
   - In your Data Stream settings, click "Enhanced measurement"
   - Ensure these are enabled:
     - Page views ✓
     - Scrolls ✓
     - Outbound clicks ✓
     - Site search (if applicable)
     - Video engagement (important for trailer tracking) ✓
     - File downloads ✓

5. **Create Custom Events** (Optional - for Phase 3)
   - Go to "Events" in left sidebar
   - Click "Create event"
   - Set up custom events for:
     - "trailer_modal_open"
     - "donation_button_click"
     - "contact_email_click"
     - "route_change_to_hidden"

#### Google Tag Manager (GTM) Setup
**Manual Steps for You**:
1. **Access GTM Dashboard**
   - Go to https://tagmanager.google.com
   - Log into your Google account
   - Navigate to your container (GTM-MDH4QSXM)

2. **Verify Container Settings**
   - Click on container name at top
   - Verify:
     - Container name: "Divine Mother Productions" (or similar)
     - Target platform: Web
     - Container ID: GTM-MDH4QSXM

3. **Create GA4 Configuration Tag**
   - Click "Tags" in left sidebar
   - Click "New"
   - Name: "GA4 Configuration"
   - Tag Configuration > Choose "Google Analytics: GA4 Configuration"
   - Measurement ID: G-G6GS9P3YNF
   - Triggering: Choose "All Pages"
   - Save

4. **Set Up Built-in Variables**
   - Click "Variables" in left sidebar
   - Click "Configure" in Built-In Variables section
   - Enable these variables:
     - Page URL ✓
     - Page Title ✓
     - Page Path ✓
     - Referrer ✓
     - Click Element ✓
     - Click Text ✓
     - Click URL ✓

5. **Create Custom Variables** (Optional - for Phase 3)
   - Click "New" in User-Defined Variables
   - Create variables for:
     - Route Type (Coming Soon vs Hidden)
     - Modal Type (Cast, Episode, Season, Trailer)

6. **Set Up Triggers**
   - Click "Triggers" in left sidebar
   - Create triggers for:
     - All Pages (should exist by default)
     - Button Clicks (for donation tracking)
     - Element Visibility (for modal tracking)

7. **Preview and Test**
   - Click "Preview" button (top right)
   - Enter your website URL
   - This opens GTM Preview mode for testing

8. **Publish Container** (After testing)
   - Click "Submit" (top right)
   - Add version name: "Initial Analytics Setup"
   - Add description: "Added GA4 configuration and basic tracking"
   - Click "Publish"

### Phase 1: HTML Head Integration
**Objective**: Add analytics tracking scripts to the main HTML file

**Tasks**:
1. **Add Google Tag Manager script to `index.html`**
   - Insert GTM script in `<head>` section (before closing `</head>`)
   - Add GTM noscript fallback in `<body>` section (immediately after opening `<body>`)

2. **Add Google Analytics script to `index.html`**
   - Insert GA4 gtag script in `<head>` section
   - Configure with tracking ID G-G6GS9P3YNF

### Phase 2: React Integration (Optional Enhancement)
**Objective**: Add programmatic tracking for SPA navigation

**Tasks**:
1. **Install analytics packages**
   - `npm install gtag` (for Google Analytics)
   - Consider `@gtm-support/core` for GTM if needed

2. **Create analytics utility**
   - Create `src/utils/analytics.ts`
   - Add functions for page tracking, event tracking
   - Handle SPA route changes

3. **Integrate with React Router**
   - Add page view tracking on route changes
   - Track navigation between `/` and `/hidden` routes

### Phase 3: Event Tracking Setup
**Objective**: Track key user interactions

**Key Events to Track**:
1. **Coming Soon Page**:
   - Page views
   - Trailer modal opens
   - Donate button clicks
   - Email contact clicks

2. **Hidden Site**:
   - Navigation between sections
   - Cast modal interactions
   - Episode modal interactions
   - Season modal interactions
   - Trailer plays
   - Donation interactions

### Phase 4: Testing & Verification
**Objective**: Ensure analytics are working correctly

#### Technical Testing (Developer Tasks)
1. **Browser DevTools Testing**:
   - Open Chrome DevTools (F12)
   - Go to Network tab, filter by "analytics" or "gtm"
   - Load your site - should see requests to:
     - `googletagmanager.com/gtm.js`
     - `google-analytics.com/collect` or `google-analytics.com/g/collect`
   - Check Console tab for any errors
   - Test both `/` and `/hidden` routes

2. **DataLayer Testing**:
   - In Console, type `dataLayer` and press Enter
   - Should see array with GTM events
   - Navigate around site and check for new events

#### Manual Dashboard Testing (Your Tasks)
1. **GTM Preview Mode Testing**:
   - In GTM, click "Preview" button
   - Enter your website URL in the popup
   - Navigate your site in the preview window
   - Check GTM debug panel for:
     - Tags firing correctly
     - Variables capturing data
     - Triggers activating

2. **GA4 Real-Time Reports**:
   - Go to GA4 dashboard
   - Click "Reports" > "Realtime"
   - Open your website in another tab
   - Should see:
     - Active users count increase
     - Page views appearing
     - Events firing (if configured)

3. **GA4 DebugView** (Recommended):
   - In GA4, go to "Configure" > "DebugView"
   - Add `?debug_mode=1` to your website URL
   - Navigate your site
   - Should see detailed event data in DebugView

#### Cross-Browser Testing
1. **Test Multiple Browsers**:
   - Chrome, Firefox, Safari, Edge
   - Check Network tab in each
   - Verify mobile responsiveness

2. **Ad Blocker Testing**:
   - Test with common ad blockers enabled
   - uBlock Origin, AdBlock Plus
   - Note: Some users may not be tracked

#### Post-Implementation Verification (24-48 hours later)
**Manual Steps for You**:
1. **Check GA4 Standard Reports**:
   - Go to "Reports" > "Life cycle" > "Acquisition" > "Traffic acquisition"
   - Verify data is populating
   - Check "Engagement" > "Pages and screens" for page views

2. **Verify GTM Container Health**:
   - In GTM, go to "Admin" > "Container settings"
   - Check "Container health" section
   - Should show green status

3. **Set Up Alerts** (Optional):
   - In GA4, go to "Configure" > "Custom definitions"
   - Set up alerts for:
     - Significant traffic drops
     - High bounce rates
     - Goal completions (if configured)

## Implementation Details

### File Changes Required
- `index.html` - Add tracking scripts
- `src/utils/analytics.ts` - Analytics utility (optional)
- `src/App.tsx` - Route tracking integration (optional)
- `package.json` - Add analytics dependencies (optional)

### Priority Levels
- **High Priority**: HTML script integration (Phase 1)
- **Medium Priority**: React integration (Phase 2)
- **Low Priority**: Advanced event tracking (Phase 3)

### Success Criteria
- [ ] Analytics scripts load without errors
- [ ] Page views tracked on both routes
- [ ] Real-time data visible in GA dashboard
- [ ] GTM container loads successfully
- [ ] No impact on site performance

## Risk Assessment
- **Low Risk**: Basic HTML script integration
- **Medium Risk**: Performance impact from additional scripts
- **Mitigation**: Use async loading, test performance metrics

## Execution Sequence

### Recommended Order
1. **Phase 0**: Complete manual GA4 and GTM setup first
2. **Phase 1**: Implement HTML script integration
3. **Phase 4**: Test and verify everything works
4. **Phase 2**: (Optional) Add React integration if needed
5. **Phase 3**: (Optional) Add advanced event tracking

### Why This Order?
- **Phase 0 First**: Ensures accounts are properly configured before adding code
- **Phase 1 Next**: Gets basic tracking working immediately
- **Phase 4 Early**: Catches issues before building complex features
- **Phases 2-3 Optional**: Only if basic tracking isn't sufficient

### Time Estimates
- **Phase 0**: 30-45 minutes (manual setup)
- **Phase 1**: 10-15 minutes (code changes)
- **Phase 4**: 15-20 minutes (testing)
- **Phase 2**: 45-60 minutes (React integration)
- **Phase 3**: 60-90 minutes (advanced tracking)

## Next Steps
1. **Start with Phase 0** - Complete all manual GA4 and GTM setup
2. **Then Phase 1** - Add HTML scripts for immediate tracking
3. **Test thoroughly** - Verify everything works before proceeding
4. **Consider Phase 2** only if detailed SPA tracking is needed
5. **Monitor site performance** after implementation

## Notes
- Current site has dual routing (public/hidden) - ensure both are tracked
- Site uses modals extensively - consider modal interaction tracking
- Donation tracking may require special consideration for conversion tracking