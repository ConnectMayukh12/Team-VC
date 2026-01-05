# 🚀 Agentic AI Retail Media Creative Builder

An **AI-powered, compliance-first creative automation platform** that enables brands to generate **retailer-ready marketing creatives** in minutes.  
Built with an **agentic AI architecture**, the platform ensures every creative strictly follows retailer-specific rules—reducing rejections, cost, and time-to-market.

<img width="1919" height="863" alt="image" src="https://github.com/user-attachments/assets/cd891aac-1e55-4f23-85f6-1a26e4bc3e48" />

Server Side (ML) repo link : https://github.com/Arittra-Bag/retail-media-creative-builder
---

## 📌 Table of Contents
- Project Description  
- Problem Statement  
- Objectives  
- Project Overview  
- Key Features  
- Built With  
- System Architecture & Workflow  
- Methodology  
- Scope of the Solution  
- Challenges & Future Improvements  
- Installation & Setup  
- API Overview  
- Contribution Guidelines  
- License  
- Contact  

---

## 📖 Project Description

Retail media advertising requires brands to create large volumes of creatives tailored for different e-commerce platforms. Each retailer enforces **strict and frequently changing compliance rules** related to layout, text placement, image usage, safe zones, accessibility, and formatting.

This project introduces an **Agentic AI-driven creative automation platform** that generates **policy-compliant marketing creatives automatically**, eliminating manual design iterations and reducing approval rejections.

---

## ❗ Problem Statement

Current creative workflows are:
- Manual and time-consuming  
- Expensive and resource-heavy  
- Prone to compliance rejections  
- Not scalable across multiple retailers  

Generic design tools focus only on visual creativity and **do not understand retailer compliance**, leading to campaign delays and revenue loss.

---

## 🎯 Objectives

- Automate retailer-compliant creative generation  
- Reduce creative production cost and time  
- Ensure deterministic, explainable outputs  
- Minimize rejection rates  
- Enable faster campaign launches  
- Support scalability across retailers and regions  

---

## 🧠 Project Overview

The platform uses an **agent-based AI pipeline** where specialized AI agents collaborate to generate, validate, and export creatives.

Users upload product data and campaign intent via a web dashboard. The system processes the input using multiple AI agents and validates outputs through a **hybrid rule-based + AI compliance engine** before exporting retailer-ready creatives.

---

## ✨ Key Features

- Agentic AI pipeline (Copy, Layout, Image agents)
- Retailer-specific compliance rule packs
- Hybrid rule-based + AI validation engine
- JSON-based structured layout generation
- Auto-approval and export
- Role-based access control
- API-first, scalable architecture
- Model-agnostic AI integration
- Audit logs and explainable compliance reports

---

## 🧰 Built With

### Frontend
- React.js  
- Tailwind CSS  
- HTML5, CSS3, JavaScript  

### Backend
- FastAPI (Python)  
- REST APIs  
- WebSockets  

### AI & Machine Learning
- Large Language Models (LLMs)  
- Vision Models for image validation  
- Agentic AI Architecture  
- Rule-based + AI hybrid compliance engine  

### Infrastructure & DevOps
- AWS (Cloud Hosting)  
- Object Storage (S3)  
- Docker & Docker Compose  
- CI/CD Pipelines  

### Tools
- Git & GitHub  
- Postman  
- Docker  

---

## 🏗️ System Architecture & Workflow

### Workflow Steps

1. **User Input**
   - Brand uploads product details, images, and campaign intent

2. **Agentic AI Pipeline**
   - Copy Agent generates compliant text
   - Layout Agent creates structured JSON layouts
   - Image Agent adapts creatives to placements

3. **Compliance Engine**
   - Applies retailer-specific rule packs
   - Validates text, images, spacing, safe zones, and accessibility

4. **Approval & Export**
   - Auto-approved creatives
   - Export to retailer-supported formats

5. **Feedback Loop**
   - Rejection and performance data improves future outputs

---

## 🔬 Methodology

- Modular agent-based AI design
- Separation of creativity and compliance
- Deterministic output generation using structured schemas
- Continuous improvement via feedback loops
- Cloud-native and scalable deployment

---

## 🌍 Scope of the Solution

### Current Scope
- Retail media creative generation
- Multi-retailer compliance support
- Web dashboard for brands
- API integration for partners
- Cloud-hosted scalable architecture

### Future Scope
- Global retailer expansion
- Multi-language creatives
- Performance-based optimization
- Certified template marketplace
- Carbon-aware AI computation

---

## 🚧 Challenges & Future Improvements

### Challenges
- Rapidly evolving retailer rules
- Creativity vs compliance balance
- Edge-case interpretation of images and claims
- Scaling across multiple retailer formats

### Future Improvements
- Self-learning compliance engine
- Global retailer and language support
- Real-time performance optimization
- Retailer-certified template marketplace
- Sustainable and energy-efficient AI pipelines

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.10+)
- Docker & Docker Compose

### Clone Repository
```bash
git clone https://github.com/your-username/agentic-ai-creative-builder.git
cd agentic-ai-creative-builder
