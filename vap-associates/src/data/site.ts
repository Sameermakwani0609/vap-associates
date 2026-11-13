export const PHONE = "919404191880";
export const PHONE_DISPLAY = "+91 9404191880";
export const EMAIL = "vapandassociates@gmail.com";
export const FIRM_REG = "138722W";

export const WHATSAPP_URL = `https://web.whatsapp.com/send?phone=${PHONE}`;
export const WHATSAPP_HELLO_URL =
  WHATSAPP_URL +
  "&text=Hello%20VAP%20%26%20Associates%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.";
export const MAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}`;

export const NAV = [
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "updates", label: "Updates" },
  { id: "gst", label: "GST" },
  { id: "services", label: "Services" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export type Update = { c: string; cls: string; d: string; t: string; s: string };

export const UPDATES: Update[] = [
  { c: "GST", cls: "", d: "21 Apr 2026", t: "GSTN launches IMS offline tool", s: "An offline tool for the Invoice Management System lets you work through supplier invoices before accepting or rejecting them on the portal." },
  { c: "GST", cls: "", d: "16 Apr 2026", t: "Advisory on re-computing interest in GSTR-3B Table 5.1", s: "GSTN has issued guidance on how interest is re-computed in Table 5.1. Check liabilities before you file." },
  { c: "GST", cls: "", d: "30 Apr 2026", t: "Rate notification aligned with Finance Act 2026", s: "Notification 1/2026-Central Tax (Rate) amends an earlier rate notification to match changes in the Finance Act." },
  { c: "Income tax", cls: "it", d: "Oct 2026", t: "ITR due date extended to 21 November 2026", s: "The due date that was 31 October 2026 now falls on 21 November for the category covered by the extension. Check if you are covered." },
  { c: "Income tax", cls: "it", d: "31 Oct 2026", t: "Quarterly TDS and TCS statements due", s: "Statements for the July–September quarter are due on 31 October 2026. Late filing attracts a fee for each day of delay." },
  { c: "Company law", cls: "co", d: "Annual filing", t: "ROC annual filing season: what directors should prepare", s: "Board report, financial statements and director KYC all need to line up before AOC-4 and MGT-7 are filed." },
];

export const UPDATE_TABS = ["All", "GST", "Income tax", "Company law"];

/**
 * Compliance calendar. Format: [date (YYYY-MM-DD), title, description, "ext"?]
 * Past dates are hidden automatically. ADD NEW DATES HERE as they come up.
 */
export const DEADLINES: [string, string, string, string?][] = [
  ["2026-10-31", "Quarterly TDS and TCS statements", "Quarter ended 30 September 2026"],
  ["2026-11-10", "GSTR-7 and GSTR-8", "TDS and TCS under GST, October 2026"],
  ["2026-11-11", "GSTR-1 (monthly filers)", "Outward supplies, October 2026"],
  ["2026-11-20", "GSTR-3B (monthly filers)", "Summary return and tax payment, October 2026"],
  ["2026-11-21", "Extended ITR due date", "Earlier date was 31 October 2026", "ext"],
  ["2026-12-15", "Advance tax, third instalment", "Individuals and companies"],
];

export type Service = { k: string; n: string; d: string; sc: string[]; ap: string; wk: string[] };

export const SERVICES: Service[] = [
  { k: "Audit", n: "Audit & Assurance", d: "Statutory, internal and bank audit, stock verification and financial reporting.", sc: ["Statutory audit", "Internal audit", "Bank audit", "Stock verification", "Financial reporting"], ap: "Planned around your risk areas, with fieldwork on site and a clear report management can act on.", wk: ["Audit planning and risk review", "Verification and testing", "Report with observations"] },
  { k: "Tax & Compliance", n: "Income Tax & GST", d: "Returns, registration, compliance review and representation for individuals and businesses.", sc: ["Income tax returns", "GST registration and returns", "Compliance review", "Representation before authorities"], ap: "We keep a compliance calendar for you, prepare from your books and review everything before it is filed.", wk: ["Document collection", "Computation and filing", "Notices and representation"] },
  { k: "Accounting & Business Finance", n: "Accounting & Business Finance", d: "Books of account, financial statements, project reports and finance-related working.", sc: ["Books of account", "Financial statements", "Project reports", "Finance-related working"], ap: "Clean books every month, so statements and reports are ready when a bank, investor or authority asks.", wk: ["Ledger writing and reconciliation", "Statement preparation", "Project report and working papers"] },
  { k: "Forensic Accounting & Review", n: "Forensic Accounting & Review", d: "Review of transactions, records and financial inconsistencies that need closer examination.", sc: ["Transaction review", "Record examination", "Financial inconsistencies"], ap: "A focused, documented examination that traces what happened and reports it factually.", wk: ["Gathering records and data", "Tracing and testing transactions", "Findings report"] },
  { k: "Strategic & Financial Advisory", n: "Strategic & Financial Advisory", d: "Financial analysis and practical support for business planning, restructuring and decisions.", sc: ["Financial analysis", "Business planning", "Restructuring", "Decision support"], ap: "Numbers first, then options, then a recommendation you can act on.", wk: ["Analysis of financials", "Comparing scenarios and options", "Plan and recommendations"] },
  { k: "Specialist Practice", n: "Specialist Practice", d: "Support for CIRP, liquidation, creditor claims and process documentation.", sc: ["CIRP support", "Liquidation", "Creditor claims", "Process documentation"], ap: "Supported by our partner for insolvency and restructuring, with documentation kept ready at every stage.", wk: ["Process documentation", "Collating and verifying claims", "Stage-wise reporting"] },
];

export const TEAM = [
  { ini: "VP", name: "CA Vipul R Patel", role: "Founding Partner · Managing Partner", f: true, bio: "Managing Partner of the group, with good exposure in the co-operative and NPO sector. Expert in project finance, indirect taxes and real estate.", chips: ["Co-operative & NPO", "Project finance", "Indirect taxes", "Real estate"] },
  { ini: "AP", name: "CA Anil R Patel", role: "Founding Partner", f: true, bio: "Became a CA in 2012 and had rich industrial experience before joining the firm. Expertise in external audits, stock audits and information system audit.", chips: ["External audit", "Stock audit", "Information system audit"] },
  { ini: "DP", name: "CA Deepesh Patel", role: "Partner", bio: "Banking audit, GST and financial reporting, with 5+ years of professional experience.", chips: ["Banking audit", "GST", "Financial reporting"], since: "With the firm since 2022" },
  { ini: "DP", name: "CA Divya Patel", role: "Partner", bio: "Taxation, compliance and assurance.", chips: ["Taxation", "Compliance", "Assurance"], since: "With the firm since 2025" },
  { ini: "UP", name: "CA Ujwal Patel", role: "Partner · Insolvency Professional", bio: "Strategy, transactions, insolvency and restructuring.", chips: ["Strategy", "Transactions", "Insolvency", "Restructuring"], since: "With the firm since June 2026" },
] as { ini: string; name: string; role: string; f?: boolean; bio: string; chips: string[]; since?: string }[];

export const TIMELINE = [
  { y: "2014", t: "Our foundation in Amravati", p: "CA Anil Patel and CA Vipul Patel start the practice in Amravati." },
  { y: "2022", t: "A new chapter in Raipur", p: "A second office brings the firm’s service to clients in Chhattisgarh." },
  { y: "2025", t: "Strengthening the partnership", p: "An additional partner joins, deepening the firm’s expertise." },
  { y: "2026", t: "Nagpur and a broader practice", p: "A Nagpur office opens alongside wider professional capabilities." },
];

export const OFFICE_CARDS = [
  { tag: "Since 2014", cls: "", city: "Amravati", p: "Where the firm began, and still home to our founding partners." },
  { tag: "Since 2022", cls: "it", city: "Raipur", p: "Audit, tax and GST support for businesses across Chhattisgarh." },
  { tag: "Since 2026", cls: "co", city: "Nagpur", p: "Our newest office, built for a broader practice and larger institutions." },
];

export const GST_CARDS = [
  { n: "01", t: "GST Registration", p: "Get your GSTIN without back-and-forth with the portal.", li: ["New registration and documents check", "Amendments and cancellation", "Registration for regular and composition taxpayers"] },
  { n: "02", t: "GST Filing", p: "Monthly and quarterly filings prepared from your books.", li: ["GSTR-1 and GSTR-3B", "Tax payment and challans", "Reminders before every due date"] },
  { n: "03", t: "GST Returns", p: "Reconciliation and annual returns, with nothing left open.", li: ["Input tax credit matching", "Annual return and reconciliation", "Notices and replies"] },
];

export const STEPS = [
  { t: "Intro call", p: "Twenty minutes on your business and your biggest worry." },
  { t: "Books review", p: "We audit your last year and flag what needs fixing first." },
  { t: "Compliance calendar", p: "Every due date mapped, with reminders ten days ahead." },
  { t: "Monthly review", p: "One short call, one dashboard, no surprises." },
];
