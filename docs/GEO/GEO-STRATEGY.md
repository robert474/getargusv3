# Argus AI - GEO (Generative Engine Optimization) Strategy

## Overview

This document outlines the GEO strategy for getargus.ai based on AI search optimization best practices.

---

## Key GEO Principles (from AirOps Research)

### 1. Freshness is Authority
- 70% of AI-cited pages were updated within the past year
- Pages refreshed within 3 months are 3x more likely to be cited
- **Action**: Implement 60-90 day refresh cycles for key pages

### 2. Structure Drives Citations
- FAQs show 40% higher likelihood of being cited
- Pages with 3+ schema types are 13% more likely to earn citations
- Clear H1→H2→H3 hierarchy increases citation odds 2.8x
- Organized lists and tables appear in 80% of ChatGPT citations

### 3. Information Gain Wins
- LLMs reward novelty, not noise
- Proprietary data and unique insights expand model knowledge
- First-party context that competitors can't copy

### 4. Third-Party Validation
- 85% of brand mentions come from third-party sources
- Brands are 6.5x more likely to be cited through third-party sources
- Focus: Listicles, comparisons, review sites

### 5. Speed Compounds Trust
- Teams that move 3x faster dominate both Google and AI visibility
- Content engineering > content production

---

## Argus AI Information Gain Assets

### Unique Data We Can Cite
1. **Sub-10-second incident detection** - proprietary benchmark
2. **Multi-source aggregation** - DOT + telematics + 911 + video inference
3. **Market penetration stats** - connected vehicles at 3-5%
4. **Latency comparisons** - Argus vs traditional (30-60 sec delays)

### Topics Where Argus Has Authority
- Fragmented roadway data problem
- Connected vehicle limitations
- Real-time traffic intelligence
- Low-latency data pipelines
- Video inference for traffic
- 911/PSAP data integration

---

## Content Calendar (Initial)

### Vision Page - Priority 1
- Publish: Week 1
- Refresh: Every 60 days
- Schema: Article, FAQPage, HowTo

### Developer Hub - Priority 2
- Publish: Week 1
- Refresh: Every 90 days
- Schema: WebAPI, SoftwareApplication

### Data Sources Page - Priority 2
- Publish: Week 1
- Refresh: Every 60 days (as new sources added)
- Schema: Dataset, DataCatalog

### Blog Posts - Priority 3
**Initial topics with high information gain:**

1. "Why Connected Vehicles Won't Solve Traffic Data Fragmentation"
   - Stats on market penetration
   - Telematics limitations
   - No video context problem

2. "The Hidden Cost of 30-Second Latency in Traffic Alerts"
   - Real-world impact calculations
   - Argus sub-10-second benchmark

3. "How AI Video Inference is Changing Incident Detection"
   - Dashcam + traffic cam capabilities
   - Before/after scenarios

4. "The 5 Sources of Real-Time Traffic Data (And Why You Need All of Them)"
   - 911/PSAP, telematics, sensors, video inference, public feeds
   - How Argus aggregates

5. "Understanding the Data Rails Protocol: Low-Latency Traffic Pipelines"
   - Technical deep-dive
   - Architecture overview

---

## Schema Markup Checklist

### Global (Already Implemented)
- [x] Organization
- [x] SoftwareApplication
- [x] FAQPage

### To Add Per Page

**Vision Page:**
- [ ] Article schema
- [ ] FAQPage schema (local FAQs)
- [ ] HowTo schema

**Developer Pages:**
- [ ] WebAPI schema
- [ ] Dataset schema
- [ ] DataCatalog schema

**Blog Posts:**
- [ ] Article schema
- [ ] FAQPage schema (per post)
- [ ] BreadcrumbList schema

**All Pages:**
- [ ] BreadcrumbList schema

---

## Structural Requirements Per Page

### Every Page Must Have:
1. Clear H1 (one per page)
2. Logical H2→H3 hierarchy
3. At least one FAQ section
4. Structured lists (bullets or numbered)
5. Tables where data comparison makes sense
6. Internal links to related content
7. Last updated date (visible)

### Meta Requirements:
- Title: 60 chars max, include primary entity
- Description: 155 chars max, include differentiator
- Canonical URL
- Open Graph tags
- Twitter cards

---

## Third-Party Strategy

### Target Platforms for Mentions
1. **Developer communities**: Dev.to, Hacker News, Reddit r/programming
2. **Industry publications**: Traffic Technology Today, ITS International
3. **Review sites**: G2, Capterra (when B2B SaaS model launches)
4. **Comparisons**: "Best traffic APIs" listicles

### Content for External Publishing
- Guest posts on transportation tech blogs
- Developer tutorials on integration
- Case studies with customers

---

## Measurement (KPIs)

### AI Search Visibility
- Brand mentions in ChatGPT/Claude/Perplexity responses
- Citation rate for key pages
- Share of voice vs competitors

### Traditional Metrics
- Organic traffic to key pages
- Time on page (engagement)
- Conversion to API signup/demo

### Content Health
- Pages updated within 90 days
- Schema validation score
- Core Web Vitals

---

## Refresh Triggers

Update content immediately when:
1. Traffic drops >20% month-over-month
2. New data source added to API
3. Competitor publishes on same topic
4. Industry news/regulations change
5. Customer feedback reveals new use case

---

## Team Roles (Future)

1. **Context Librarian**: Maintains brand voice, product facts, approved messaging
2. **Content Engineer**: Builds refresh workflows, schema implementation
3. **Strategy Lead**: Monitors KPIs, prioritizes topics
4. **Executive Sponsor**: Aligns cross-functional support

---

## Next Steps

1. Build Vision page with full GEO optimization
2. Create Developer Hub structure
3. Implement BreadcrumbList schema globally
4. Set up blog infrastructure
5. Create first 3 blog posts
6. Establish 60-day refresh calendar
