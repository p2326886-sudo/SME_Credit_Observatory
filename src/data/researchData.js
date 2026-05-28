// ============================================================
// India SME Credit Intelligence Observatory — Research Data
// Unified dataset completely aligned with public/report.html
// ============================================================

// ── Sector-wise Financing Stress (Table 7.1 from report.html) ──
export const sectorFrictionData = [
  { sector: "Agro-processing", creditAccess: "Low", wcCycleMin: 80, wcCycleMax: 120, collateralProfile: "Seasonal / Thin", digitalReadiness: "Low", overallStress: "Critical", score: 85, informalDependence: 76 },
  { sector: "Construction (sub-cont.)", creditAccess: "Low", wcCycleMin: 90, wcCycleMax: 180, collateralProfile: "None", digitalReadiness: "Low", overallStress: "Critical", score: 90, informalDependence: 82 },
  { sector: "Textile & Garments", creditAccess: "Low", wcCycleMin: 70, wcCycleMax: 100, collateralProfile: "Equipment-backed", digitalReadiness: "Low-Med", overallStress: "High", score: 78, informalDependence: 71 },
  { sector: "Manufacturing (Light)", creditAccess: "Moderate", wcCycleMin: 65, wcCycleMax: 90, collateralProfile: "Equipment-backed", digitalReadiness: "Medium", overallStress: "High", score: 72, informalDependence: 65 },
  { sector: "Retail Trade", creditAccess: "Low-Mod", wcCycleMin: 15, wcCycleMax: 45, collateralProfile: "None / Thin", digitalReadiness: "Medium", overallStress: "Medium", score: 67, informalDependence: 59 },
  { sector: "Wholesale Trade", creditAccess: "Moderate", wcCycleMin: 45, wcCycleMax: 75, collateralProfile: "Inventory-backed", digitalReadiness: "Medium", overallStress: "Medium", score: 54, informalDependence: 38 },
  { sector: "Food & Beverages", creditAccess: "Moderate", wcCycleMin: 30, wcCycleMax: 60, collateralProfile: "Equipment / inventory", digitalReadiness: "Medium", overallStress: "Medium", score: 58, informalDependence: 42 },
  { sector: "Transport & Logistics", creditAccess: "Moderate", wcCycleMin: 30, wcCycleMax: 60, collateralProfile: "Vehicle-backed", digitalReadiness: "Improving", overallStress: "Medium", score: 63, informalDependence: 51 },
  { sector: "IT / Digital Services", creditAccess: "Good", wcCycleMin: 30, wcCycleMax: 60, collateralProfile: "None (cash-flow)", digitalReadiness: "High", overallStress: "Low", score: 38, informalDependence: 22 }
];

// ── State-wise Credit Readiness Index (Table 8.1 from report.html) ──
export const stateReadinessData = [
  { state: "Maharashtra", population: "6.5M+", bankDensity: 28, nbfcPresence: "High", digitalPenetration: "High", formalCredit: 22, score: 7.8 },
  { state: "Gujarat", population: "4.5M+", bankDensity: 24, nbfcPresence: "High", digitalPenetration: "High", formalCredit: 20, score: 7.5 },
  { state: "Tamil Nadu", population: "4.8M+", bankDensity: 26, nbfcPresence: "High", digitalPenetration: "High", formalCredit: 19, score: 7.4 },
  { state: "Karnataka", population: "3.8M+", bankDensity: 22, nbfcPresence: "Medium-High", digitalPenetration: "High", formalCredit: 18, score: 7.1 },
  { state: "Punjab / Haryana", population: "2.8M+", bankDensity: 21, nbfcPresence: "Medium-High", digitalPenetration: "High", formalCredit: 16, score: 6.0 },
  { state: "West Bengal", population: "5.6M+", bankDensity: 18, nbfcPresence: "Medium", digitalPenetration: "Medium", formalCredit: 14, score: 5.3 },
  { state: "Rajasthan", population: "3.2M+", bankDensity: 16, nbfcPresence: "Medium", digitalPenetration: "Medium", formalCredit: 12, score: 5.0 },
  { state: "Uttar Pradesh", population: "8.9M+", bankDensity: 14, nbfcPresence: "Medium", digitalPenetration: "Medium", formalCredit: 9, score: 4.2 },
  { state: "Madhya Pradesh", population: "3.5M+", bankDensity: 13, nbfcPresence: "Medium", digitalPenetration: "Medium", formalCredit: 8, score: 3.8 },
  { state: "Bihar", population: "4.2M+", bankDensity: 11, nbfcPresence: "Low", digitalPenetration: "Low-Med", formalCredit: 7, score: 3.5 }
];

// ── Working-Capital Volatility Timeline ──────────────────────
export const workingCapitalTimeline = [
  { quarter: "Q1 FY20", cashConversionCycle: 78, receivableDays: 45, payableDays: 32, inventoryDays: 65, liquidityScore: 62 },
  { quarter: "Q2 FY20", cashConversionCycle: 82, receivableDays: 48, payableDays: 30, inventoryDays: 64, liquidityScore: 58 },
  { quarter: "Q3 FY20", cashConversionCycle: 76, receivableDays: 43, payableDays: 33, inventoryDays: 66, liquidityScore: 64 },
  { quarter: "Q4 FY20", cashConversionCycle: 108, receivableDays: 72, payableDays: 28, inventoryDays: 64, liquidityScore: 38 },
  { quarter: "Q1 FY21", cashConversionCycle: 142, receivableDays: 96, payableDays: 22, inventoryDays: 68, liquidityScore: 21 },
  { quarter: "Q2 FY21", cashConversionCycle: 128, receivableDays: 84, payableDays: 24, inventoryDays: 68, liquidityScore: 28 },
  { quarter: "Q3 FY21", cashConversionCycle: 105, receivableDays: 67, payableDays: 29, inventoryDays: 67, liquidityScore: 42 },
  { quarter: "Q4 FY21", cashConversionCycle: 94, receivableDays: 58, payableDays: 31, inventoryDays: 67, liquidityScore: 49 },
  { quarter: "Q1 FY22", cashConversionCycle: 89, receivableDays: 54, payableDays: 32, inventoryDays: 67, liquidityScore: 53 },
  { quarter: "Q2 FY22", cashConversionCycle: 86, receivableDays: 51, payableDays: 32, inventoryDays: 67, liquidityScore: 55 },
  { quarter: "Q3 FY22", cashConversionCycle: 82, receivableDays: 48, payableDays: 33, inventoryDays: 67, liquidityScore: 58 },
  { quarter: "Q4 FY22", cashConversionCycle: 79, receivableDays: 46, payableDays: 33, inventoryDays: 66, liquidityScore: 61 },
  { quarter: "Q1 FY23", cashConversionCycle: 76, receivableDays: 44, payableDays: 34, inventoryDays: 66, liquidityScore: 63 },
  { quarter: "Q2 FY23", cashConversionCycle: 74, receivableDays: 42, payableDays: 34, inventoryDays: 66, liquidityScore: 65 },
  { quarter: "Q3 FY23", cashConversionCycle: 72, receivableDays: 41, payableDays: 35, inventoryDays: 66, liquidityScore: 67 },
  { quarter: "Q4 FY23", cashConversionCycle: 70, receivableDays: 39, payableDays: 35, inventoryDays: 66, liquidityScore: 68 },
  { quarter: "Q1 FY24", cashConversionCycle: 69, receivableDays: 38, payableDays: 35, inventoryDays: 66, liquidityScore: 69 },
  { quarter: "Q2 FY24", cashConversionCycle: 68, receivableDays: 37, payableDays: 36, inventoryDays: 67, liquidityScore: 70 },
];

// ── Digital Lending Adoption (Section 09 Composed Chart data) ──
export const digitalLendingData = [
  { year: "FY19", totalDisbursal: 1.1, bankShare: 52, nbfcShare: 32, digitalShare: 8 },
  { year: "FY20", totalDisbursal: 1.3, bankShare: 49, nbfcShare: 31, digitalShare: 12 },
  { year: "FY21", totalDisbursal: 0.9, bankShare: 46, nbfcShare: 28, digitalShare: 19 },
  { year: "FY22", totalDisbursal: 1.8, bankShare: 41, nbfcShare: 26, digitalShare: 27 },
  { year: "FY23", totalDisbursal: 2.7, bankShare: 37, nbfcShare: 24, digitalShare: 36 },
  { year: "FY24", totalDisbursal: 3.4, bankShare: 34, nbfcShare: 22, digitalShare: 44 }
];

// ── Financing Stress Indicators (Aligned with Executive Summary page 3) ──
export const stressIndicators = [
  {
    id: "cfi",
    label: "Credit Friction Index",
    value: 68.5,
    benchmark: 40,
    unit: "/100",
    trend: "declining",
    delta: -3.1,
    description: "Composite metric tracking documentation requirements, collateral margins, processing timelines, and credit rejection frequencies across sectors.",
  },
  {
    id: "wcv",
    label: "Working-Capital Cycle",
    value: 68,
    benchmark: 82,
    unit: "days CCC",
    trend: "improving",
    delta: -14,
    description: "Average Cash Conversion Cycle (CCC) across small enterprises, tracking outstanding receivable collection cycles vs payable durations.",
  },
  {
    id: "ols",
    label: "Formal Credit Access",
    value: 14,
    benchmark: 100,
    unit: "%",
    trend: "improving",
    delta: +2,
    description: "Proportion of registered MSME units with active, verified credit linkages with commercial banks or NBFCs in the formal sector.",
  },
  {
    id: "ild",
    label: "GDP Contribution",
    value: 30,
    benchmark: 100,
    unit: "%",
    trend: "stable",
    delta: 0.5,
    description: "Overall economic output contribution of micro, small, and medium enterprises to India's Gross Domestic Product (GDP).",
  },
];

// ── Key Findings (Table of Contents & Section 01 highlights) ──
export const keyFindings = [
  {
    id: 1,
    stat: "14%",
    title: "Low Formal Credit Penetration",
    description: "Fewer than one in six MSME units (approximately 14%) currently access formal institutional credit in India, with the vast majority locked into informal debt markets.",
  },
  {
    id: 2,
    stat: "142d",
    title: "Acute Working-Capital Stress Peak",
    description: "During peak pandemic stress, cash conversion cycles stretched to 142 days as receivables collection collapsed while supplier payable demands accelerated.",
  },
  {
    id: 3,
    stat: "2.2×",
    title: "Geographic Disparity Ratio",
    description: "Highly industrialized states show credit readiness and formal credit penetration ratios over 2.2 times higher than credit-underserved regions such as Uttar Pradesh and Bihar.",
  },
  {
    id: 4,
    stat: "44%",
    title: "Alternative Credit Integration Surge",
    description: "Fintech-intermediated and digital-first credit channels expanded to capture 44% of all new credit disbursals in FY24, fundamentally shifting market share from commercial banks.",
  },
  {
    id: 5,
    stat: "₹25T",
    title: "Unmet MSME Credit Demand Gap",
    description: "The aggregate formal MSME credit gap in India exceeds ₹25 Lakh Crore ($300B+), presenting a structural drag on industrial capacity and business growth.",
  },
  {
    id: 6,
    stat: "82%",
    title: "Traditional Handicrafts Capital Lockout",
    description: "Craft-based micro-enterprises exhibit the highest structural friction, resulting in 82% dependence on informal moneylenders and commission agents for cash flow.",
  }
];

// ── Policy Recommendations (Section 11 & 12 from report.html) ──
export const policyRecommendations = [
  {
    id: 1,
    category: "Credit Infrastructure",
    title: "GST-Linked Cash-Flow Based Underwriting",
    description: "Transition from collateral-backed models to cash-flow validation using real-time GST invoicing records to enable collateral-free credit lines for formalizing MSMEs.",
    impact: "High",
    timeline: "12–18 months",
    stakeholders: ["RBI", "GSTN", "Commercial Banks"],
  },
  {
    id: 2,
    category: "Working Capital",
    title: "Automatic PSU & Corporate Onboarding on TReDS",
    description: "Mandate TReDS enrollment for all public sector undertakings and mid-market corporates while creating local-language discounting platforms to reduce payment cycles.",
    impact: "High",
    timeline: "6–12 months",
    stakeholders: ["Ministry of MSME", "SIDBI", "Trade Exchanges"],
  },
  {
    id: 3,
    category: "Digital Infrastructure",
    title: "Account Aggregator Native Underwriting Platforms",
    description: "Build consented transactional data sharing layers directly into commercial lending processes to reduce loan underwriting timelines from weeks to minutes.",
    impact: "Medium-High",
    timeline: "12–24 months",
    stakeholders: ["RBI", "Fintech Association", "NPCI"],
  },
  {
    id: 4,
    category: "Institutional Capacity",
    title: "Modernize District Industries Centres (DICs) as Credit Hubs",
    description: "Transform local paper-based DIC offices into District Digital Trade & Credit hubs providing GST return filing support and structured banking connection paths.",
    impact: "Medium",
    timeline: "18–36 months",
    stakeholders: ["State Governments", "MSME Development Centers"],
  },
  {
    id: 5,
    category: "Risk Mitigation",
    title: "District-Level Credit Guarantee Pool Mobilization",
    description: "Launch municipal and state-backed first-loss guarantee pools tailored for high-friction sectors (such as handicrafts and regional agro-processing) to mitigate lender risk.",
    impact: "High",
    timeline: "12–18 months",
    stakeholders: ["CGTMSE", "SIDBI", "State Finance Depts"],
  }
];

// ── Methodology (Section 14 & 15 from report.html) ──
export const methodology = {
  approach: "Independent analytical synthesis and educational research project. The methodology integrates institutional reports with ground-level operational case patterns from non-metropolitan supply chains.",
  dataSources: [
    "RBI Annual Reports on MSME Lending & Financial Inclusion",
    "SIDBI MSME Pulse Reports & Health Monitors",
    "World Bank Enterprise Surveys — India Modules",
    "IFC SME Finance Gap Global Databases",
    "Ministry of MSME Annual Performance Reports",
    "NABARD Financial Inclusion Surveys & Agricultural Credit Profiles",
    "TransUnion CIBIL SME Credit Health Index Reports",
    "Direct operational logistics logs from small family firms in Padrauna, UP"
  ],
  frameworks: [
    {
      name: "Credit Friction Assessment Framework",
      description: "Models structural underwriting bottlenecks across sectors based on uncollateralized assets, documentation difficulty, processing lag times, and informal interest rate premiums.",
    },
    {
      name: "Working-Capital Volatility Decomposition",
      description: "Tracks cyclical variations in Cash Conversion Cycles (CCC) using Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payable Outstanding (DPO).",
    },
    {
      name: "Geographic Readiness Assessment Index",
      description: "Composes comparative indicators of banking density, NBFC networks, Udyam enrollment, and formal credit utilization to classify regional credit accessibility levels."
    }
  ],
  limitations: [
    "Based exclusively on publicly available aggregate institutional reports rather than enterprise-level microdata",
    "State-level averages do not capture localized rural credit pockets or intra-state disparities",
    "Informal lending transaction volumes and interest premiums are calculated using secondary research estimates",
    "The project is an independent analytical initiative created for academic portfolio purposes and does not constitute certified primary institutional research"
  ]
};

// ── Researcher Profile ───────────────────────────────────────
export const researcherProfile = {
  name: "Priyanshu Gupta",
  role: "Research Author & BBA Candidate",
  institution: "Lovely Professional University",
  program: "Bachelor of Business Administration (Final Year)",
  location: "Punjab, India | Padrauna, Uttar Pradesh",
  researchMotivation: "This independent research was motivated by observing the acute working-capital stress and collateral constraints in a family-run retail and logistics business in Padrauna, Uttar Pradesh during pandemic-induced disruptions. The project bridges corporate finance theory with ground-level operational reality, serving as an educational academic portfolio exploration of India's small business financing architecture.",
  competencies: [
    "Financial Systems Analysis & Underwriting Indicators",
    "Working-Capital Management & Supply-Chain Cash Flows",
    "Fintech Credit Models & Digital Financial Infrastructure",
    "Policy Analysis & Regional Economic Development Research",
    "Business Intelligence Visualization & Technical Architecture Design"
  ],
  researchInterests: [
    "MSME Financial Inclusion & Credit Architecture",
    "Consented Financial Data Infrastructure (India Stack)",
    "Flow-Based Lending Underwriting Algorithms",
    "Economic Formalization & Regional Development Policies",
    "Corporate Strategy & Operations Optimization"
  ]
};
