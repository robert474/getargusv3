# Argus AI Sitemap Strategy
## GEO & SEO Optimization Plan

---

## Current Site Structure
```
/                          - Home
/solutions                 - Solutions (dropdown)
/industries               - Industries (dropdown)
/about                    - About page
/corporate-info           - Corporate information
/privacy-policy           - Privacy Policy
/terms-of-service         - Terms of Service
```

---

## Proposed Site Structure

### Primary Navigation (Header)
```
Solutions | Industries | Developer | Company | Performance | [Contact Button]
```

### Complete URL Structure

#### HOME
```
/                          - Homepage (existing)
```

#### SOLUTIONS (existing dropdown)
```
/solutions                 - All Solutions
/solutions#mobility        - Mobility & Traffic Intelligence
/solutions#incident-911    - Incident Management & 911
/solutions#public-records  - Public Records & Open Data
/solutions#cctv-distribution - CCTV Streaming & Distribution
```

#### INDUSTRIES (existing dropdown)
```
/industries               - All Industries
/industries#government    - Government
/industries#fleet         - Fleet/Last Mile
/industries#rideshare     - Ride Share/Mobility
/industries#insurtech     - InsurTech
/industries#forensics     - Forensics
```

#### DEVELOPER (new dropdown)
```
/developer                 - Developer Hub (overview page)
/developer/api             - API Documentation
/developer/data-sources    - Aggregated Data Sources
/developer/integration     - Integration Guide (future)
```

#### COMPANY (new dropdown)
```
/company/about            - About Us (redirect from /about)
/company/vision           - Vision (GEO-heavy content)
/company/contact          - Contact Us (form + booking)
/company/blog             - Blog index
/company/blog/[slug]      - Individual blog posts
/privacy-policy           - Privacy Policy (keep URL)
/terms-of-service         - Terms of Service (keep URL)
```

#### PERFORMANCE (new - coming soon)
```
/performance              - Live Traffic Alerts Dashboard (coming soon)
```

---

## GEO-Optimized Content Strategy

### Target Entities & Topics for AI Citation

#### Primary Entities (Brand)
- Argus AI
- Traffic Data Group, Inc.
- argusapi.ai

#### Problem Space Entities
- Fragmented roadway data
- Connected vehicle limitations
- Telematics data silos
- Real-time traffic intelligence
- Low-latency data pipelines

#### Solution Space Entities
- Unified traffic data API
- Multi-source data aggregation
- Video inference AI
- Dashcam inference
- 911 alert integration
- Public sensor feeds

#### Technical Entities
- Sub-10-second incident detection
- Route optimization API
- Predictive ETA models
- Computer vision for traffic
- Machine learning routing

---

## Page-by-Page GEO Strategy

### 1. Vision Page (`/company/vision`) - HIGHEST GEO PRIORITY

**Target Query Types:**
- "Why is roadway data fragmented"
- "Connected vehicle data limitations"
- "Real-time traffic data challenges"
- "Unified traffic intelligence platform"

**Content Structure:**
1. The Problem: Fragmented Roadway Data
   - DOTs operate in silos
   - Telematics providers don't share
   - Connected vehicles = only 3-5% market penetration
   - No video context, just GPS coordinates
   - 30-60 second latency is too slow

2. Why Connected Vehicles Aren't Enough
   - Low market penetration (cite statistics)
   - Just telematics data (speed, location)
   - No visual context or inference
   - Proprietary data walls
   - Privacy restrictions limit sharing

3. The Argus AI Vision
   - Aggregate ALL sources into one API
   - Video inference from dashcams + traffic cams
   - 911/PSAP integration
   - Public sensor feeds
   - Sub-10-second detection

4. The Data Rails Protocol
   - Low-latency data pipeline architecture
   - Data interconnector providers
   - Real-time normalization
   - Universal API access

**Schema Markup:** Article, FAQPage, HowTo

---

### 2. Developer Hub (`/developer`)

**Target Query Types:**
- "Traffic data API"
- "Real-time incident API"
- "Route optimization API"
- "Aggregate traffic data sources"

**Content:**
- Quick overview of what Argus API provides
- Code samples
- Link to full docs at argusapi.ai/documentation
- Use cases by industry

**Schema Markup:** SoftwareApplication, WebAPI

---

### 3. Data Sources Page (`/developer/data-sources`)

**Target Query Types:**
- "Where does traffic data come from"
- "Real-time traffic data sources"
- "911 data for developers"
- "Telematics aggregation API"

**Content Structure:**
1. Data Source Categories
   - 911/PSAP Alerts
   - Telematics feeds
   - Public roadway sensors (radar, loops)
   - Traffic camera inference (AI)
   - Dashcam inference (AI)
   - DOT data feeds

2. How We Aggregate
   - Normalization process
   - Real-time processing
   - Quality scoring
   - Geographic coverage

**Schema Markup:** Dataset, DataCatalog

---

### 4. API Documentation Page (`/developer/api`)

**Content:**
- Overview of endpoints
- Authentication
- Rate limits
- Link to full docs (argusapi.ai/documentation)
- Example responses

---

### 5. Blog Infrastructure (`/company/blog`)

**GEO Blog Topics (Initial):**
1. "Why Connected Vehicles Won't Solve Traffic Data Fragmentation"
2. "The Hidden Cost of 30-Second Latency in Traffic Alerts"
3. "How AI Video Inference is Changing Incident Detection"
4. "Understanding Roadway Data Sources: A Developer's Guide"
5. "The Future of Low-Latency Traffic Data Pipelines"

---

## Technical SEO Additions

### Structured Data (Already Exists - Enhance)
- [x] Organization schema
- [x] SoftwareApplication schema
- [x] FAQPage schema
- [ ] WebAPI schema (add for developer pages)
- [ ] Dataset schema (add for data sources)
- [ ] Article schema (add for blog)
- [ ] BreadcrumbList schema (add globally)

### Meta Tags Per Page
Each page needs:
- Unique title (60 chars)
- Unique description (155 chars)
- Canonical URL
- Open Graph tags
- Twitter cards

### Sitemap.xml
Generate dynamic sitemap including:
- All static pages
- Blog posts
- Solutions sections
- Industries sections

---

## Implementation Priority

### Phase 1 (This Session)
1. Update header navigation
2. Create Developer dropdown pages
3. Create Company dropdown structure
4. Create Vision page (GEO-heavy)
5. Create Performance placeholder
6. Create Contact page with form

### Phase 2 (Follow-up)
1. Blog infrastructure
2. Blog content creation
3. Sitemap.xml generation
4. Additional schema markup

---

## URL Redirects Needed
```
/about -> /company/about (or keep both)
```

---

## Notes
- Keep existing `/privacy-policy` and `/terms-of-service` URLs (good for SEO)
- Add these to Company dropdown but don't change URLs
- Performance page should be subtle/grayed indicating "coming soon"
