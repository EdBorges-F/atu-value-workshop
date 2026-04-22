// Auto-generated from 20 Frontier Transformation Conversation decks
// 20 industries, 41 pillar-aligned customer stories, 109 use cases
// Run: python scripts/extract_all_sources.py

export interface PillarStory {
  pillar: 'enrich' | 'reshape' | 'reinvent' | 'bend';
  company: string;
  problem: string;
  solution: string;
  impact: string[];
}

export interface FrontierUseCase {
  title: string;
  challenge: string;
  opportunity: string;
  capabilities: string[];
  impact: string[];
}

export interface IndustryContext {
  industry: string;
  name: string;
  imperatives: string[];
  stats: string[];
  pillarStories: {
    enrich: PillarStory[];
    reshape: PillarStory[];
    reinvent: PillarStory[];
    bend: PillarStory[];
  };
  useCases: FrontierUseCase[];
}

export const INDUSTRY_CONTEXTS: IndustryContext[] = [
  {
    industry: 'automotive',
    name: 'Automotive',
    imperatives: [
      'Frontier transformation in Automotive',
      'Agentic supply chains that anticipate disruption, rebalance supply and demand, and protect vehicle programs end-to-end',
    ],
    stats: [
      '64% have AI integrated into long-term strategy',
      '23% for laggards',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Volvo Group', problem: 'Engineers spent excessive time searching across siloed product, supplier, and quality data.', solution: 'Deployed Microsoft 365 Copilot and Azure OpenAI to give engineering and operations teams an AI assistant grounded in enterprise data.', impact: ['Significant reduction in time spent searching for information', 'Faster cross-functional decision-making', 'Improved engineering productivity'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'BMW', problem: 'Production decisions relied on slow, manual analysis of plant and supply chain data.', solution: 'Reshaped manufacturing operations using Microsoft Fabric, Azure AI, and digital twins for real-time decision support.', impact: ['Improved OEE across plants', 'Faster issue resolution', 'Reduced quality escapes'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Vehicle development cycles were too long to keep pace with software-defined vehicle expectations.', solution: 'Reinvented the engineering process around Azure AI Foundry agents that reason across CAD, requirements, and validation data.', impact: ['20-40% faster design-to-launch', 'Higher manufacturability', 'Reduced late-stage rework'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Static supply chain planning could not protect programs against escalating disruption.', solution: 'Bent the curve on supply chain resilience with an agentic supply chain on Azure that anticipates disruption and rebalances autonomously.', impact: ['Earlier disruption detection', 'Reduced line-down events', 'Protected program margin'] },
      ],
    },
    useCases: [
      { title: 'Edge × Cloud collaboration to proactively support drivers', challenge: 'Drivers expect proactive, contextual support, but vehicle telemetry, diagnostics, and customer history sit in disconnected systems making real-time assistance difficult.', opportunity: 'Combine in-vehicle edge AI with Azure cloud reasoning so connected vehicles can detect issues, anticipate driver needs, and trigger proactive service before problems escalate.', capabilities: ['Detects MISRA rule violations in automotive C code'], impact: ['30-50% faster response to in-vehicle issues', 'Up to 25% reduction in unplanned service visits', 'Higher customer satisfaction and repeat-purchase intent'] },
      { title: 'Agentic AI in engineering and development accelerates time to market', challenge: 'Engineering and product development cycles are slowed by siloed CAD, requirements, simulation, and test data, forcing engineers to rework designs late in the cycle.', opportunity: 'Deploy AI agents that reason across engineering data to accelerate design exploration, requirements traceability, and validation, compressing time-to-market.', capabilities: ['Azure AI Foundry for multi-agent orchestration', 'Azure OpenAI for engineering copilots', 'Microsoft Fabric for unified engineering data', 'GitHub Copilot for embedded software development'], impact: ['20-40% faster design-to-launch cycles', '15-25% reduction in late-stage engineering changes', 'Improved first-time-right manufacturability'] },
      { title: 'Enable stakeholders across product design, supply chain, and finance to access critical production insights with AI agents', challenge: 'Product design, supply chain, and finance leaders lack a shared, real-time view of production performance, leading to slow decisions and missed program commitments.', opportunity: 'Provide AI agents that surface program-level insights on demand so cross-functional stakeholders can make faster, evidence-based decisions.', capabilities: ['Microsoft Fabric for unified data foundation', 'Copilot Studio for role-based agents', 'Power BI with Copilot for embedded analytics'], impact: ['50% faster cross-functional decision cycles', 'Reduction in program slippage and cost overruns', 'Improved alignment between engineering, supply chain, and finance'] },
      { title: 'Proactive AI insights are needed to manage supplier and production risk, unlock growth, and ensure reliable operations', challenge: 'Tier-1 and tier-N supplier disruptions, geopolitical events, and quality issues are detected too late to prevent line stoppages and revenue loss.', opportunity: 'Apply agentic AI to continuously monitor supplier signals, anticipate risk, and recommend mitigations before vehicle programs are impacted.', capabilities: ['Azure AI Foundry agents for risk monitoring', 'Microsoft Fabric for supplier data integration', 'Azure OpenAI for narrative risk briefings'], impact: ['Earlier detection of supplier disruption (days to weeks ahead)', '20-30% reduction in line-down events', 'Protected program margin and customer commitments'] },
      { title: 'Autonomous Supply Chain', challenge: 'Traditional supply chains react to disruption rather than anticipate it, leaving OEMs exposed to volatility in demand, materials, and logistics.', opportunity: 'Build an agentic supply chain that senses signals, simulates options, and autonomously rebalances supply and demand to protect commitments.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric real-time intelligence', 'Dynamics 365 Supply Chain Management with Copilot'], impact: ['10-20% reduction in inventory carrying costs', 'Improved on-time, in-full delivery', 'Faster recovery from disruption'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Many automotive leaders see the promise of agentic AI but lack a clear, actionable plan to move from pilots to enterprise-scale value.', opportunity: 'Engage Microsoft and partners to assess readiness, prioritize highest-value use cases, and operationalize a Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions for Automotive', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Faster time-to-value from AI investments', 'Aligned executive roadmap', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'financial-services',
    name: 'Banking',
    imperatives: [
    ],
    stats: [
      '95% of contact center interactions',
      '100% of initial interactions are handled by BIA.',
      '83% resolution of customer inquiries.',
      '50% + of all consumable data now in Azure.',
      '50% reduction in manual prep time',
      '75% faster cycle times',
      '35% lower cost per loan',
      '50% fewer underwriting errors',
      '84% of 10,000 Microsoft 365 Copilot users reporting they wouldn’t go back to working without it.',
      '30% of GitHub Copilot code suggestions are adopted, driving efficiency and smarter decision-making.',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Barclays', problem: 'customer engagement', solution: 'business processes', impact: ['Connected to employee self-service solutions in Barclays apps as well as key partners to create a single, integrated agentic resource.', '1 million hours of productivity gained with Microsoft Copilot.', 'Enhanced employee experience via access to a comprehensive agentic dashboard in Microsoft Viva to quickly book desks, annual leave or personalize internal announcements.'] },
        { pillar: 'enrich', company: 'Bradesco', problem: 'Needed more seamless and personalized cross-channel service, but barriers slowed the release of new solutions and took employees’ time away from strategic tasks.', solution: 'Streamlined customer service with Azure AI Foundry, apps, and databases.', impact: ['BIA (Bradesco Intelligent Agent) serves 74 million customers.', 'Focused on digital customer resolution that is highly secure.', '100% of initial interactions are handled by BIA.', 'Achieved 83% resolution of customer inquiries.', 'customer engagement'] },
        { pillar: 'enrich', company: 'CIBC', problem: 'Faced rising regulatory demands, growing cyber risks, and operational processes that still depended heavily on manual effort.', solution: 'business processes', impact: ['37K+ AI trainings completed.', '50%+ of all consumable data now in Azure.', 'Built AI-native corporate banking application, turning a 10-hour manual process into a 10-minute workflow powered by Azure AI.', 'By using AI to read documents, extract data, and auto-populate adjudication packages, later tasks now occur instantly, reducing errors and accelerating mortgage application processes.'] },
        { pillar: 'enrich', company: 'LSEG', problem: 'Needed to simplify complex, fragmented data landscape to deliver a consistent, unified experience and reduce the time to create new data products.', solution: 'Accelerated product development by unifying data.', impact: ['LSEG was dealing with petabytes of data across 30 systems and 1,200 datasets, across a variety of longstanding systems—each product having its own tech stack, distribution method, and data model​.', 'With Fabric, LSEG consolidated siloed data into a single governed environment.', 'Delivered product development markedly faster.'] },
        { pillar: 'enrich', company: 'Served over 4,000 branches.', problem: 'Employees had to navigate countless procedures, evolving regulations and complex banking systems.', solution: 'Built an agent through Teams to ensure fast and accurate customer support.', impact: ['Used Copilot Studio to equip bankers with search agents that help them more quickly find procedural documents to assist customers with their financial needs.', 'Provided answers in 30 seconds instead of 10 minutes.', 'Served over 4,000 branches.'] },
        { pillar: 'enrich', company: 'Implemented AI transformation strategy.', problem: 'Aimed to collaborate with Microsoft to develop new AI-based banking capabilities under a strategic business partnership.', solution: 'Implemented AI transformation strategy.', impact: ['Deployed 18 Agents in production across trade operations, customer service, and finance.', 'Doubled processing capacity.', 'Reduced turnaround times by 50%.', 'Helped the bank deliver its best results in October 2025.'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'ABN AMRO', problem: 'Customer service workflows were manual and fragmented, slowing resolution and adding cost.', solution: 'Reshaped customer service with Azure OpenAI and Copilot Studio agents grounded in policy and customer data.', impact: ['Higher first-contact resolution', 'Lower cost-to-serve', 'Improved CSAT'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Underwriting was constrained by manual document review and fragmented data.', solution: 'Reinvented underwriting with Azure AI Foundry agents that automate intake, analysis, and decision support.', impact: ['75% faster cycle times', '35% lower cost per loan', '50% fewer underwriting errors'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Linear growth in operations cost could not keep up with regulatory and product complexity.', solution: 'Bent the cost curve by deploying agentic AI across operations, risk, and compliance.', impact: ['Material reduction in operations cost', 'Improved compliance posture', 'Higher employee experience scores'] },
      ],
    },
    useCases: [
      { title: 'Agent powered relationship managers', challenge: 'Relationship Managers are now expected to deliver personalized experiences, strengthen relationships, and identify new growth opportunities—while being stretched thin and client-related data is stored across disparate systems', opportunity: 'AI agents support advisors by gathering client information, maintaining engagement, and identifying opportunities, allowing RMs to prioritize judgment, trust, and relationships', capabilities: ['Integrated view of all clients', 'Integrates and standardizes data from various sources to form a continually updated client profile.', 'Continuously analyzes client financials, behaviors, sentiment, risk exposure, and relationship history.', 'Detects real time signals such as life events, cash flow shifts, portfolio drift, and emerging needs—before the client raises a hand.', 'Identifies next-best actions for similar clients and market conditions through pattern recognition', 'Flags high-impact opportunities and enables RMs to personalize advice and act early to improve client outcomes.', 'Automate meeting preparation, personalized outreach, follow-ups, and coordination across credit, risk, and service teams.'], impact: ['For Relationship Managers', 'Potential 30–50% reduction in manual prep time', 'Higher confidence in client conversations', 'More time spent on strategic relationships', 'For Clients', 'More relevant, timely, and personalized engagement', 'Fewer reactive interactions, more proactive value', 'Increased trust and perceived advisory value', 'For the Bank', 'Improved revenue per RM', 'Higher cross sell and retention rates', 'Lower operational and compliance risk', 'Scalable, consistent client experience across teams'] },
      { title: 'Dynamic, adaptive lending and mortgages with agents', challenge: 'The end-to-end mortgage process remains slow, manual, and error-prone. Fragmented legacy systems, manual rekeying, and inconsistent policy interpretation creates duplicate work, errors, and compliance delays', opportunity: 'Apply agentic AI to automate document intake, underwriting analysis, and policy interpretation so lending becomes adaptive, accurate, and dramatically faster.', capabilities: ['Azure AI Document Intelligence', 'Azure OpenAI for underwriting copilots', 'Microsoft Fabric for risk data', 'Copilot Studio for workflow agents'], impact: ['75% faster cycle times', '35% lower cost per loan', '50% fewer underwriting errors', '20–30point NPS lift.'] },
      { title: 'Transform customer self-service', challenge: 'Customer experiences are fragmented, and lack of outcome-based solutions leads to unresolved issues and frequent drop-offs', opportunity: 'Shift from reactive chatbots to assistants that can reason, decide, and act with Agentic AI', capabilities: ['Azure AI Foundry agents', 'Copilot Studio', 'Dynamics 365 Customer Service', 'Azure OpenAI'], impact: ['Lower cost-to-serve, higher containment and faster resolution', 'Higher CSAT/NPS with fewer transfers', 'Improved conversion, reduced drop-off and higher product engagement', 'Fewer fraud losses/false positives, better compliance  and cleaner case documentation'] },
      { title: 'A selection of systems integrators and software development companies in our global partner ecosystem', challenge: 'Banks need trusted partners to operationalize AI at scale across regulated environments and complex legacy estates.', opportunity: 'Tap into Microsoft\'s global ecosystem of systems integrators and ISVs to accelerate delivery of agentic banking solutions.', capabilities: ['Microsoft Cloud for Financial Services', 'Azure AI Foundry partner solutions', 'Industry-specific ISV accelerators'], impact: ['Faster time-to-value', 'Reduced delivery risk', 'Access to proven industry blueprints'] },
      { title: 'Assess readiness and plan your agentic future', challenge: 'Bank executives often struggle to translate AI ambition into a sequenced, ROI-grounded plan that aligns risk, technology, and business stakeholders.', opportunity: 'Use Microsoft\'s Frontier Transformation framework to assess readiness, prioritize use cases, and build the roadmap to an agentic bank.', capabilities: ['Microsoft Industry Solutions for Financial Services', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned executive roadmap', 'Prioritized portfolio of high-ROI use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'capital-markets',
    name: 'Capital Markets',
    imperatives: [
      'AI-native transformation—from assistance to autonomous execution',
      'Capital markets engagement shift from reactive coverage to continuous, insight-driven interaction. Advisors proactively deliver ideas, scenarios, and risk perspectives in real-time—embedded directly into client workflows.',
    ],
    stats: [
      '55% of capital markets executives cite AI-driven automation and autoscaling as their top infrastructure',
      '79% of financial services leaders reported difficulty finding and retaining talent due to the shift of A',
      '88% of Frontier Firms report strength in top‑line growth',
      '23% for laggards',
      '95% faster access to relevant data, enabling immediate insight consumption during live discussions.',
      '98% faster comparative analysis, supporting faster alignment and confident decisions.',
      '10% –20% productivity increase',
      '68% Copilot users',
      '60% Achieved 25% reduction in board prep time overall',
      '75% Supports T+1 compliance and moving towards T+0 reality',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Blackrock', problem: 'The must also perform complex and manual data analyses across multiple reports and Excel files.', solution: 'Integrate generative AI with the eFront insight platform capabilities.', impact: ['Investors can quickly generate analytics to understand key metrics and trends in client portfolios.', 'Instantaneously visualize exposures, performance, and risk.', 'Configure layouts efficiently and access existing insight functionality directly in the chat.', 'client engagement', 'Bend the curve', 'on innovation', 'employee experiences', 'business processes'] },
        { pillar: 'enrich', company: 'Franklin Templeton', problem: 'Limited personalization and productivity at scale', solution: 'AI embedded across workflows to boost productivity and personalization', impact: ['A composable business applications platform to rapidly embed AI into business processes and scale digital transformation and innovation', 'Improve the productivity of sales and marketing teams through personalized AI-driven assistance and automation', 'Deliver more personalized support and differentiated client engagement by tailoring insights and information to individual client needs'] },
        { pillar: 'enrich', company: 'BCI', problem: 'BCI had the goal to remove manual tasks through automation to offer employees more time for strategic and creative tasks', solution: 'BCI adopted Copilot while maintaining compliance with privacy regulations', impact: ['Increased productivity: Employee survey respondents reported a 10%–20% productivity increase', 'Streamlined operations: Saved more than 2,300 person-hours with Copilot automation of manual tasks', 'Improved job satisfaction: Increased employee job satisfaction of 68% Copilot users'] },
        { pillar: 'enrich', company: 'Van Lanschot Kempen', problem: 'Key challenge: Unautomated day-to-day tasks taking up a lot of time for their employees', solution: 'Gave employees an assistant that takes over day-to-day tasks', impact: ['Minimizing cognitive burden: Reduced the time needed for daily tasks to focus on high value work', 'Accelerated excellence: Increased advisor productivity by drafting routine correspondence, summarizing meeting transcripts, and creating content', 'More time for clients: Freed up time to build deeper personal connections and interactions with colleagues and clients', 'Watch video'] },
        { pillar: 'enrich', company: 'LGT Private Banking', problem: 'LGT recognized the need for a comprehensive digitalization strategy to support a secure and flexible work environment for global teams', solution: 'Implementation of an innovative change management strategy', impact: ['Streamlined operations: Enabled employees to save an average of one hour per week by streamlining daily tasks', 'Empowered decision-making: Fostered a modern, flexible, and secure digital workplace that supports seamless collaboration', 'Enhanced productivity: Simplified communication and data exchange through integrated Microsoft 365 tools'] },
        { pillar: 'enrich', company: 'Investec', problem: 'When a growing global business is grounded as solidly in personal relationships as Investec’s is, meeting the demand for bespoke customer experiences can seem like an insurmountable feat', solution: 'Accelerated productivity for Client Advisors with Microsoft Copilot for Sales', impact: ['Enabled a single view of a client—with the full history of engagement', 'Advisors can now manage the entire engagement process through Outlook', 'Advisors save 200 hours per year across the firm', 'More time to focus on clients and prospecting to give Investec an edge'] },
        { pillar: 'enrich', company: 'Nasdaq', problem: 'Nasdaq wanted to modernize its Nasdaq Boardvantage portal to reduce manual effort, accelerate decision-making, and maintain trust in high-stakes governance workflows.', solution: 'The company chose Microsoft Foundry, using Azure OpenAI in Foundry Models, Azure Document Intelligence in Foundry Tools, and secure cloud infrastructure to automate summarization, streamline governance workflows, and uphold compliance and security.', impact: ['Maintained essential trust while introducing AI into the most sensitive, high-stakes governance workflows, improving insights and cutting directors’ reading time by up to 60%', 'Achieved 25% reduction in board prep time overall'] },
        { pillar: 'enrich', company: 'UBS', problem: 'UBS needed to scale personalized advisor productivity globally while protecting client data and meeting regulatory expectations.', solution: 'Adopted Microsoft 365 Copilot and Azure OpenAI to give advisors AI-powered support grounded in firm and client context.', impact: ['Higher advisor productivity', 'Faster, more personalized client service', 'Improved employee experience at scale'] },
        { pillar: 'enrich', company: 'Kotak', problem: 'The team sought scalable solutions to improve turnaround and accuracy', solution: 'Used generative AI to streamline document processing and data extraction', impact: ['Reduced manual effort, freeing up teams for strategic tasks. Saving 2-man months on repetitive tasks', 'Achieved faster response times and improved client satisfaction', 'Scaled operations efficiently without increasing headcount'] },
        { pillar: 'enrich', company: 'Blackrock', problem: 'It could be expensive and time-consuming to provision and administer new hardware to onboard new clients, create new environments, or respond to spiking demand.', solution: 'Azure provides a fast, resilient, and innovative cloud platform that meets BlackRock’s long-term needs. The move to Azure also addresses increasing demands for in-country or in-region datacenters to meet client preferences, system latency goals, and regulatory requirements around data sovereignty.', impact: ['Enhanced capabilities: Azure helped them better meet client demands to be fast, resilient, and innovative long term', 'Streamlined operations: Accelerated delivery of new products and improved operational efficiency at reduced cost', 'Scalability and global growth: Enhanced flexibility and scalability to support growth and deliver new products faster', 'Platform innovation and future-readiness: Modern cloud and AI capabilities without on-prem constraints that support continuous platform evolution and innovation'] },
        { pillar: 'enrich', company: 'Saphyre', problem: 'Saphyre needed a scalable and secure platform to support rapid innovation and compliance', solution: 'The Azure-based solution platform automates onboarding and exception handling, enabling institutions to be trade-ready significantly faster', impact: ['Institutions can be ready-to-trade 300–500% faster', 'Manual paperwork reduced by 75%', 'Supports T+1 compliance and moving towards T+0 reality'] },
        { pillar: 'enrich', company: 'BNY', problem: 'Set out to explore how to use AI to navigate complex market dynamics with precision and agility while enhancing risk management and optimizing operational efficiency.', solution: 'Built a next generation  platform combining Azure’s cloud and AI capabilities with BNY’s extensive financial data and analytics capabilities to enhance productivity and enable better-informed decision making, provide buy- and sell side clients with leading data and analytics applications.', impact: ['Near real‑time investment insights, improving agility in fast‑moving markets across buy‑ and sell‑side use cases', 'Higher research and analytics efficiency through cloud‑ and AI‑enabled workflows that reduce complexity and manual effort', 'Deeper, more actionable analytics for investment decisioning, combining BNY’s data with Azure‑based analytics and AI to support performance, risk, and allocation', 'Scalable analytics across asset classes, including  private markets and alternatives', 'A modern, resilient analytics foundation for clients, enabling analytics at scale and long‑term innovation'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Trading and post-trade operations carried high exception and reconciliation costs.', solution: 'Reshaped front-to-back execution with Azure AI Foundry agents that automate exception handling and accelerate settlement.', impact: ['Support for T+1 and movement toward T+0', 'Reduced operational risk', 'Lower exception cost'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Research-to-decision cycles were too slow to capture short-lived market opportunities.', solution: 'Reinvented research workflows with Azure OpenAI and grounded retrieval over the firm\'s full research corpus.', impact: ['95% faster access to relevant data', '98% faster comparative analysis', 'Faster, more confident decisions'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Operations and analytics cost grew faster than revenue.', solution: 'Bent the cost curve by modernizing on Azure and Microsoft Fabric and embedding AI across workflows.', impact: ['Material reduction in operations cost', 'Higher analyst productivity', 'Improved scalability'] },
      ],
    },
    useCases: [
      { title: 'Prioritize and proactively manage the client base, focusing on highest-value clients and opportunities.', challenge: 'Coverage teams cannot easily identify which clients to prioritize given fragmented data, manual analysis, and limited insight into evolving client needs and opportunities.', opportunity: 'Apply AI agents to continuously rank clients by opportunity, risk, and engagement, enabling advisors to focus on the highest-value relationships.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric for client and market data', 'Microsoft 365 Copilot for Sales', 'Azure OpenAI'], impact: ['Higher revenue per advisor', 'Improved win rates on new mandates', 'Better client retention and wallet share'] },
      { title: 'Accelerate research‑to‑decision velocity across equities, fixed income, and multi‑asset analysis.', challenge: 'Analysts are overwhelmed by unstructured research, filings, and market data, slowing the path from insight to investment decision.', opportunity: 'Use AI to ingest, summarize, and reason across massive research corpora so analysts deliver decisions in minutes instead of days.', capabilities: ['Azure OpenAI for research summarization', 'Azure AI Search for grounded retrieval', 'Microsoft Fabric for market data', 'Microsoft 365 Copilot'], impact: ['95% faster access to relevant data', '98% faster comparative analysis', 'Faster, more confident investment decisions'] },
      { title: 'Modernize front‑to‑back execution across trading, settlement, and servicing to increase speed, resilience, and scale.', challenge: 'Legacy front-to-back trading, settlement, and servicing stacks limit speed, scale, and resilience and increase operational risk.', opportunity: 'Modernize on Azure with AI-orchestrated workflows that automate exceptions, accelerate settlement, and improve operational resilience.', capabilities: ['Automate processes and operations'], impact: ['75% support for T+1 and movement toward T+0', 'Reduced operational risk and exception costs', 'Greater scale at lower marginal cost'] },
      { title: 'A selection of systems integrators and software development companies in our global partner ecosystem', challenge: 'Capital markets firms need partners who understand both regulation and AI engineering to operationalize agentic transformation.', opportunity: 'Engage Microsoft\'s ecosystem of capital markets ISVs and SIs to accelerate proven solutions.', capabilities: ['Automate processes and operations'], impact: ['Faster delivery', 'Reduced risk', 'Industry-tested blueprints'] },
      { title: 'Assess readiness and plan your agentic future', challenge: 'Leaders must align technology, risk, and front-office ambition to move from AI experimentation to enterprise impact.', opportunity: 'Use Microsoft\'s Frontier Transformation framework to assess readiness and sequence the highest-ROI capital markets use cases.', capabilities: ['Microsoft Industry Solutions for Financial Services', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Clear executive roadmap', 'Prioritized portfolio', 'Measurable outcomes within 6-12 months'] },
      { title: 'Limited personalization and productivity at scale', challenge: 'At-scale personalization is constrained by fragmented data and limited automation, leaving advisors unable to tailor service to every client.', opportunity: 'Embed AI across workflows to deliver personalized insights, content, and recommendations at scale.', capabilities: ['Azure OpenAI', 'Microsoft 365 Copilot', 'Dynamics 365 Customer Insights'], impact: ['Higher client engagement and retention', 'Improved sales productivity', 'Differentiated client experience'] },
      { title: 'Higher research and analytics efficiency through cloud‑ and AI‑enabled workflows that reduce complexity and manual effort', challenge: 'Manual research and analytics workflows are slow, fragmented, and difficult to scale across asset classes.', opportunity: 'Use cloud and AI to streamline research and analytics, reducing complexity and freeing teams for higher-value work.', capabilities: ['Azure AI Foundry', 'Microsoft Fabric', 'Azure OpenAI'], impact: ['Faster research cycles', 'Lower cost per insight', 'Scalable analytics across asset classes'] },
    ],
  },
  {
    industry: 'chief-marketing-officer',
    name: 'Chief Marketing Officer',
    imperatives: [
    ],
    stats: [
      '80% + of CMOs now prioritize personalization to drive growth.',
      '70% " rather than implying an industry-wide benchmark',
      '84% struggle with fragmentation and need AI to unlock real-time insights.',
      '30% and cuts lead costs by 25%. CEOs expect marketing to prove business impact.',
      '000% —consumers now rely on AI, not search, to discover and buy.',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Marketing teams were overwhelmed by manual content production and reporting.', solution: 'Enriched daily work with Microsoft 365 Copilot to automate drafting, analysis, and reporting.', impact: ['Significant time savings per marketer', 'Higher campaign throughput', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Audience insights and content production were disconnected, slowing personalization.', solution: 'Reshaped marketing operations with Dynamics 365 Customer Insights and Azure OpenAI content engines.', impact: ['Faster time-to-market', 'Higher engagement through personalization', 'Improved campaign ROI'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Discovery is shifting from search to AI assistants, threatening brand visibility.', solution: 'Reinvented discoverability with AI-ready content, structured data, and grounded retrieval.', impact: ['Higher visibility on AI surfaces', 'Improved conversion', 'Stronger brand relevance'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Marketing cost per lead was rising faster than revenue.', solution: 'Bent the cost curve with AI-driven personalization, automation, and continuous optimization.', impact: ['25%+ reduction in cost per lead', 'Higher conversion', 'Improved marketing ROI'] },
      ],
    },
    useCases: [
      { title: 'Proactive AI insights help anticipate audience shifts, uncover growth, and guide high-impact marketing decisions.', challenge: 'CMOs lack timely, integrated insight into shifting audience behavior, market signals, and campaign performance, slowing high-impact decisions.', opportunity: 'Use AI agents to continuously monitor signals, anticipate shifts, and recommend marketing actions that drive growth.', capabilities: ['Microsoft Fabric for unified marketing data', 'Azure OpenAI for insight generation', 'Dynamics 365 Customer Insights', 'Power BI with Copilot'], impact: ['Faster, evidence-based decisions', 'Higher campaign ROI', 'Improved share of voice in target segments'] },
      { title: 'AI-powered content engines accelerate creation, scale personalization, and reduce time-to-market—turning speed into strategic advantage.', challenge: 'Marketing teams cannot scale personalized content fast enough to meet channel and audience demands, slowing time-to-market.', opportunity: 'Deploy AI-powered content engines that accelerate creation, automate adaptation, and personalize at scale.', capabilities: ['Azure OpenAI for content generation', 'Microsoft 365 Copilot', 'Dynamics 365 Customer Insights - Journeys', 'Copilot Studio'], impact: ['50%+ improvement in content production efficiency', 'Faster time-to-market for campaigns', 'Higher engagement through personalization'] },
      { title: 'AI-powered content intelligence ensures your brand is seen, heard, and chosen—maximizing visibility, relevance, and conversion.', challenge: 'Brands risk being invisible in AI-driven discovery as consumers move from search engines to AI assistants.', opportunity: 'Use AI to ensure content is discoverable, contextually relevant, and chosen across emerging AI surfaces.', capabilities: ['Azure AI Search', 'Azure OpenAI', 'Microsoft Advertising AI capabilities'], impact: ['Higher visibility in AI-driven discovery', 'Improved conversion', 'Stronger brand relevance'] },
      { title: 'Activate real-time audience insights to drive smarter marketing decisions', challenge: 'Audience insights are often static, siloed, and lagging, limiting marketers\' ability to act on what is happening now.', opportunity: 'Activate real-time, AI-driven audience insights so marketing decisions are continuously informed by live behavior and intent.', capabilities: ['Microsoft Fabric real-time intelligence', 'Dynamics 365 Customer Insights', 'Azure OpenAI', 'Power BI'], impact: ['More accurate targeting', 'Higher conversion rates', 'Better attribution and ROI'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'CMOs need a pragmatic path to scale AI across the marketing function while protecting brand and budget.', opportunity: 'Engage Microsoft to design a marketing-specific Frontier Transformation roadmap.', capabilities: ['Microsoft 365 Copilot', 'Azure AI Foundry', 'Dynamics 365 Customer Insights'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'chief-supply-chain-officer',
    name: 'Chief Supply Chain Officer',
    imperatives: [
      'Frontier transformation in Supply Chain',
      'Faster, more accurate responses to demand shifts, disruptions, and cost volatility.',
    ],
    stats: [
      '89% of supply chain leaders anticipate positive ROI on AI within a year or two',
      '15% increase in employee productivity benefiting over 2,700 customers.',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Supply chain teams spent significant time gathering and reconciling data.', solution: 'Enriched daily work with Microsoft 365 Copilot and Power BI Copilot grounded in supply chain data.', impact: ['Significant time savings per planner', 'Faster decision-making', 'Improved data quality'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Planning, fulfillment, and supplier response were siloed and reactive.', solution: 'Reshaped supply chain operations with Dynamics 365 Supply Chain Management and Azure AI Foundry agents.', impact: ['Improved on-time, in-full delivery', 'Lower inventory carrying cost', 'Better service levels'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Static supply chains could not keep up with continuous volatility.', solution: 'Reinvented the supply chain with an agentic, self-orchestrating model that senses, decides, and acts autonomously.', impact: ['Faster disruption response', 'Higher service at lower cost', 'Improved resilience'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Working capital and operations cost grew faster than revenue.', solution: 'Bent the cost curve by combining AI demand sensing, autonomous planning, and automated warehousing.', impact: ['10-20% reduction in inventory', 'Lower expedited freight', 'Improved working capital'] },
      ],
    },
    useCases: [
      { title: 'AI algorithms analyze real-time data to forecast demand with greater precision while enabling demand shaping', challenge: 'Forecasts based on historical data alone miss real-time demand signals, leading to stockouts, excess inventory, and missed revenue.', opportunity: 'Use AI to combine internal and external signals for highly accurate, dynamic demand forecasting and proactive demand shaping.', capabilities: ['Microsoft Fabric for demand signals', 'Azure AI Foundry', 'Dynamics 365 Supply Chain Management', 'Azure OpenAI'], impact: ['Forecast accuracy improvement of 20-35%', 'Reduced stockouts and excess inventory', 'Higher service levels at lower cost'] },
      { title: 'Autonomous robots and AI-driven systems handle the manufacturing, storage, picking, and packing of goods in factories & warehouses', challenge: 'Manual warehouse and factory operations limit throughput, accuracy, and resilience as labor becomes scarcer and demand more variable.', opportunity: 'Combine autonomous robots, AI orchestration, and digital twins to drive predictable, high-quality operations across factories and warehouses.', capabilities: ['Automated warehousing minimizes errors, rework, and variability driving predictable performance and margin improvement.', 'Automation & AI-orchestrated warehousing'], impact: ['Higher throughput with fewer errors', 'Reduced rework and variability', 'Improved margin and service performance'] },
      { title: 'Agentic systems that predict real-time inventory accuracy with faster, lower-cost fulfillment', challenge: 'Poor inventory visibility drives stockouts, expedited freight, and missed customer commitments.', opportunity: 'Apply agentic AI to maintain real-time inventory accuracy and orchestrate faster, lower-cost fulfillment.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric real-time intelligence', 'Dynamics 365 Supply Chain Management'], impact: ['Higher inventory accuracy (>98%)', 'Lower fulfillment cost per order', 'Improved on-time, in-full delivery'] },
      { title: 'AI-powered demand sensing & autonomous planning', challenge: 'Disconnected planning systems cannot adapt fast enough to volatility in demand, supply, and logistics.', opportunity: 'Use AI-powered demand sensing and autonomous planning to continuously rebalance supply, production, and fulfillment.', capabilities: ['Automation & AI-orchestrated warehousing'], impact: ['Faster, more accurate response to disruption', 'Reduced inventory and expedited freight', 'Improved service and margin'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Supply chain leaders need a sequenced plan to scale agentic supply chain capabilities across the enterprise.', opportunity: 'Engage Microsoft to assess readiness and define a Frontier supply chain roadmap.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Dynamics 365 Supply Chain Management'], impact: ['Aligned executive roadmap', 'Prioritized highest-ROI use cases', 'Measurable outcomes within 6-12 months'] },
      { title: 'AI-powered demand sensing & autonomous planning', challenge: 'Disconnected planning systems cannot adapt fast enough to volatility in demand, supply, and logistics.', opportunity: 'Use AI-powered demand sensing and autonomous planning to continuously rebalance supply, production, and fulfillment.', capabilities: ['Automation & AI-orchestrated warehousing'], impact: ['Faster, more accurate response to disruption', 'Reduced inventory and expedited freight', 'Improved service and margin'] },
    ],
  },
  {
    industry: 'consumer-goods',
    name: 'Consumer Goods',
    imperatives: [
      'Frontier transformation in Consumer Goods',
    ],
    stats: [
      '23% for laggards',
      '50% + of marketing tasks more efficient through automation by 20352',
      '31% of consumers to automate shopping through smart home by 20301',
      '40% of manufacturing functions likely see more automation by 20303',
      '30% + productivity improvement in supply chain functions by 20304',
      '40% of CG profit pool at risk without advanced RGM5',
      '10% reduction in food waste enabled by AI demand forecasting accuracy',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Brand and marketing teams spent excessive time on manual reporting and content tasks.', solution: 'Enriched daily work with Microsoft 365 Copilot grounded in brand and consumer data.', impact: ['Significant time savings per marketer', 'Higher creative throughput', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Trade promotion and revenue growth management decisions relied on slow, manual analysis.', solution: 'Reshaped RGM with Microsoft Fabric and AI-driven trade analytics.', impact: ['Higher trade promotion ROI', 'Improved net revenue per case', 'Better category performance'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Plant operations remained reactive, eroding margin and brand quality.', solution: 'Reinvented plant operations with Azure IoT, AI, and digital twins for closed-loop execution.', impact: ['Higher OEE and first-pass quality', 'Reduced waste and downtime', 'Improved working capital efficiency'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Marketing and supply cost grew faster than revenue under volatile demand.', solution: 'Bent the cost curve with AI-driven content engines, RGM, and supply chain automation.', impact: ['50%+ improvement in content efficiency', 'Higher trade ROI', 'Lower supply chain cost'] },
      ],
    },
    useCases: [
      { title: 'Build brands people love', challenge: 'CG companies struggle to maintain brand relevance and loyalty as consumer expectations, channels, and discovery models shift rapidly.', opportunity: 'Use AI to deepen consumer understanding, personalize experiences, and accelerate brand-building activities at scale.', capabilities: ['Dynamics 365 Customer Insights', 'Azure OpenAI', 'Microsoft 365 Copilot', 'Microsoft Fabric'], impact: ['Higher brand engagement and loyalty', 'Faster, more personalized campaigns', 'Improved marketing ROI'] },
      { title: 'Build brands people love', challenge: 'CG companies struggle to maintain brand relevance and loyalty as consumer expectations, channels, and discovery models shift rapidly.', opportunity: 'Use AI to deepen consumer understanding, personalize experiences, and accelerate brand-building activities at scale.', capabilities: ['Dynamics 365 Customer Insights', 'Azure OpenAI', 'Microsoft 365 Copilot', 'Microsoft Fabric'], impact: ['Higher brand engagement and loyalty', 'Faster, more personalized campaigns', 'Improved marketing ROI'] },
      { title: 'Personalized consumer interactions and journeys help unlock loyalty and growth', challenge: 'Generic, one-size-fits-all engagement under-delivers on loyalty and lifetime value.', opportunity: 'Deliver AI-powered personalized journeys across channels to unlock loyalty and growth.', capabilities: ['Dynamics 365 Customer Insights - Journeys', 'Azure OpenAI', 'Microsoft Fabric', 'Copilot Studio'], impact: ['Higher repeat-purchase rates', 'Improved customer lifetime value', 'Increased share of consumer wallet'] },
      { title: 'Content creation underlined by consumer insights help maximize impact at scale', challenge: 'Producing localized, on-brand content for hundreds of SKUs and markets is slow and costly with traditional approaches.', opportunity: 'Use AI-driven content engines to scale on-brand creative production while preserving consumer insight and compliance.', capabilities: ['Azure OpenAI for content generation', 'Microsoft 365 Copilot', 'Dynamics 365 Customer Insights'], impact: ['50%+ efficiency in content production', 'Faster localization and time-to-market', 'Higher engagement through relevance'] },
      { title: 'Autonomous, end-to-end plant execution turns variability into advantage—improving quality, resilience, speed-to-market, and working capital efficiency', challenge: 'Plant variability in quality, throughput, and uptime erodes margin, working capital, and brand standards.', opportunity: 'Use AI and digital twins to monitor quality and equipment health continuously and automate end-to-end plant execution.', capabilities: ['Continuously monitor quality, equipment health, and production performance, proactively identifying issues before they impact service, waste, or brand standards'], impact: ['Higher OEE and first-pass quality', 'Reduced waste and downtime', 'Improved working capital efficiency'] },
      { title: 'Take your next step toward Consumer Goods Frontier Transformation', challenge: 'CG leaders need a sequenced plan to scale AI from pilots to enterprise impact across brand, supply, and consumer engagement.', opportunity: 'Engage Microsoft to design a CG-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned executive roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'manufacturing',
    name: 'Discrete Manufacturing',
    imperatives: [
      'Frontier transformation in Discrete Manufacturing',
      'Agentic engineering brings reasoning, simulation, and product intelligence together to improve manufacturability and accelerate design-to-launch decisions.',
      'Production systems dynamically adapt scheduling, resources, automation, and line configurations as demand, constraints, and conditions change',
    ],
    stats: [
      '23% for laggards',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Engineering and operations teams spent excessive time searching across siloed data.', solution: 'Enriched daily work with Microsoft 365 Copilot and Azure OpenAI grounded in enterprise data.', impact: ['Significant time savings per engineer', 'Faster decision-making', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Plant and supply chain operations were siloed and reactive.', solution: 'Reshaped operations with Microsoft Fabric, Azure AI Foundry agents, and digital twins.', impact: ['Higher OEE and first-pass yield', 'Reduced unplanned downtime', 'Improved on-time delivery'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Product development cycles were too long to keep pace with evolving complexity and customer expectations.', solution: 'Reinvented the design-to-launch process with Azure AI Foundry agents that reason across CAD, simulation, and manufacturing data.', impact: ['20-40% faster design-to-launch', 'Higher first-time-right quality', 'Reduced late-stage engineering changes'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Cost-to-build grew faster than revenue under disruption.', solution: 'Bent the cost curve with agentic supply chain, autonomous warehousing, and AI-driven engineering.', impact: ['Material reduction in operations cost', 'Improved working capital', 'Higher resilience'] },
      ],
    },
    useCases: [
      { title: 'Agentic AI in engineering and development accelerates time to market while improving manufacturability and quality', challenge: 'Engineering and product development cycles are slowed by siloed CAD, simulation, requirements, and supplier data, leading to rework and late launches.', opportunity: 'Use AI agents to reason across engineering data, automate trade-off analysis, and accelerate design-to-launch decisions.', capabilities: ['Azure AI Foundry agents', 'Azure OpenAI', 'Microsoft Fabric for engineering data', 'GitHub Copilot'], impact: ['20-40% faster design-to-launch cycles', 'Reduced engineering rework', 'Improved manufacturability and quality'] },
      { title: 'Physical AI in factory operations improves throughput, resilience, and control by turning plant decisions into closed-loop execution.', challenge: 'Plant operations remain reactive and siloed, with quality, equipment, and process decisions made too late to protect throughput and margin.', opportunity: 'Combine physical AI, IoT, and digital twins to turn plant decisions into closed-loop execution that improves throughput, resilience, and control.', capabilities: ['Azure IoT Operations', 'Azure AI Foundry', 'Microsoft Fabric real-time intelligence', 'Dynamics 365 Supply Chain Management'], impact: ['Higher OEE and first-pass yield', 'Reduced unplanned downtime', 'Improved safety and energy efficiency'] },
      { title: 'Agentic supply chains protect commitments and margin by making planning, fulfillment, and supplier response more adaptive.', challenge: 'Static planning cycles cannot react fast enough to disruption, leaving manufacturers exposed to commitment misses and margin erosion.', opportunity: 'Use agentic AI to make planning, fulfillment, and supplier response continuously adaptive.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric', 'Dynamics 365 Supply Chain Management'], impact: ['Improved on-time, in-full delivery', 'Lower inventory and expedited freight', 'Protected margin under volatility'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Manufacturers need a clear plan to scale AI across engineering, factory, and supply chain.', opportunity: 'Engage Microsoft to design a manufacturing-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions for Manufacturing', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'insurance',
    name: 'Insurance',
    imperatives: [
      'Say compliance requirements have become more complex in the digital era',
      'Frontier transformation in insurance',
    ],
    stats: [
      '23% for laggards',
      '74% share of policyholders',
      '40% of insurers',
      '85% of insurance executives',
      '93% of insurance CEOs',
      '80% of insurance consumers',
      '50% faster wrap‑up time across customer service and claims‑related interactions.Saved valuable minutes',
      '30% improvement in insurance application performance.',
      '30% reduction in data platform costs, freeing budget to reinvest in innovation, advanced analytics, and',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Underwriters and claims handlers spent significant time on manual document processing.', solution: 'Enriched daily work with Microsoft 365 Copilot and Azure AI Document Intelligence.', impact: ['Significant time savings per handler', 'Higher productivity', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Claims processing was manual, fragmented, and slow.', solution: 'Reshaped claims with Azure AI Foundry agents that automate intake, triage, and routine decisioning.', impact: ['30-50% faster claims cycles', 'Lower operating cost per claim', 'Higher customer satisfaction'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Underwriting workflows were inconsistent and constrained by data silos.', solution: 'Reinvented underwriting with AI agents grounded in unified risk data.', impact: ['50%+ faster underwriting', 'Improved risk selection', 'Higher underwriter productivity'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Combined ratios were under pressure from rising loss and expense costs.', solution: 'Bent the cost curve with AI across underwriting, claims, and customer service.', impact: ['Material expense ratio improvement', 'Better loss ratio through risk selection', 'Improved CSAT'] },
      ],
    },
    useCases: [
      { title: 'Achieved 25–30% reduction in data platform costs, freeing budget to reinvest in innovation, advanced analytics, and future AI initiatives.', challenge: 'Legacy data platforms are costly to operate and limit the speed at which insurers can innovate with AI and analytics.', opportunity: 'Modernize on Azure and Microsoft Fabric to reduce data platform costs and reinvest in AI-driven innovation.', capabilities: ['Microsoft Fabric', 'Azure cloud', 'Azure AI Foundry'], impact: ['25-30% reduction in data platform costs', 'Freed budget for AI investment', 'Faster, more scalable analytics'] },
      { title: 'Accelerate Insurance Underwriting', challenge: 'Underwriting is slowed by manual document review, fragmented data, and inconsistent risk evaluation across underwriters.', opportunity: 'Apply AI to automate document intake, risk analysis, and decision support so underwriters focus on judgment and complex risks.', capabilities: ['Azure AI Document Intelligence', 'Azure OpenAI for underwriting copilots', 'Microsoft Fabric for risk data', 'Copilot Studio'], impact: ['50%+ faster underwriting cycles', 'Improved risk selection and pricing accuracy', 'Higher underwriter productivity'] },
      { title: 'Reduce claim cycle times and operating costs by automating intake, triage, and routine decisioning across the claims lifecycle', challenge: 'Claims processes remain manual, fragmented, and slow, driving high operating costs and poor customer experience.', opportunity: 'Automate intake, triage, and routine decisioning across the claims lifecycle with AI agents.', capabilities: ['Azure AI Document Intelligence', 'Azure AI Foundry agents', 'Dynamics 365', 'Azure OpenAI'], impact: ['30-50% reduction in claim cycle times', 'Lower operating costs per claim', 'Higher customer satisfaction'] },
      { title: 'Improve customer satisfaction and loyalty by delivering faster, more personalized, and more consistent interactions across digital and human touchpoints', challenge: 'Customers expect faster, more personalized, and consistent experiences across digital and human touchpoints, but legacy systems make this hard.', opportunity: 'Use AI to unify customer data and orchestrate consistent, personalized engagement across channels.', capabilities: ['Dynamics 365 Customer Insights', 'Microsoft 365 Copilot', 'Azure OpenAI', 'Copilot Studio'], impact: ['Higher CSAT/NPS', 'Improved retention and cross-sell', 'Lower cost-to-serve'] },
      { title: 'Accelerate Insurance Underwriting', challenge: 'Underwriting is slowed by manual document review, fragmented data, and inconsistent risk evaluation across underwriters.', opportunity: 'Apply AI to automate document intake, risk analysis, and decision support so underwriters focus on judgment and complex risks.', capabilities: ['Azure AI Document Intelligence', 'Azure OpenAI for underwriting copilots', 'Microsoft Fabric for risk data', 'Copilot Studio'], impact: ['50%+ faster underwriting cycles', 'Improved risk selection and pricing accuracy', 'Higher underwriter productivity'] },
      { title: 'Assess readiness and plan your agentic future', challenge: 'Insurers need a clear, sequenced plan to move from AI pilots to enterprise impact while managing regulatory and risk constraints.', opportunity: 'Engage Microsoft to design an insurance-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Cloud for Financial Services', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned executive roadmap', 'Prioritized portfolio of use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'media-entertainment',
    name: 'Media & Entertainment',
    imperatives: [
    ],
    stats: [
      '88% Microsoft: The Year the Frontier Firm is Born, April 2025, IDC: What every company can learn from Fr',
      '251% projected ROI for media firms',
      '82% of internet traffic now video, legacy architectures struggle to keep up.',
      '90% of enterprise data unstructured, organizations must add context and governance before AI can scale.',
      '70% lower movie production costs compared to traditional VFX and live-action workflows',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Content and operations teams spent excessive time on manual workflows.', solution: 'Enriched daily work with Microsoft 365 Copilot and Azure AI Video Indexer.', impact: ['Significant time savings per team', 'Faster content turnaround', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Media operations spanned complex, brittle pipelines that were hard to monitor.', solution: 'Reshaped operations with Azure AI Foundry agents and Microsoft Fabric real-time intelligence.', impact: ['Faster issue detection and resolution', 'Higher reliability', 'Lower operational cost'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Content production cost and time-to-market constrained creative ambition.', solution: 'Reinvented production with Azure OpenAI and AI-assisted creative tooling.', impact: ['Faster content production', 'Greater personalization at scale', 'Improved monetization'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Subscriber acquisition and retention costs were rising faster than revenue.', solution: 'Bent the cost curve with AI-driven personalization, content efficiency, and operations automation.', impact: ['Higher engagement', 'Improved retention', 'Lower cost-to-serve'] },
      ],
    },
    useCases: [
      { title: 'Dynamic content production, management, and distribution', challenge: 'Content production, management, and distribution remain fragmented and labor-intensive, constraining speed, scale, and personalization.', opportunity: 'Use AI to dynamically produce, tag, and distribute content across audiences and surfaces.', capabilities: ['Azure OpenAI for content generation', 'Azure AI Video Indexer', 'Microsoft Fabric for media data', 'Azure Content Delivery'], impact: ['Faster content production cycles', 'Greater personalization at scale', 'Improved monetization across channels'] },
      { title: 'Automated media operations', challenge: 'Media operations span ingest, playout, delivery, security, and ad signals across complex pipelines, making issues hard to detect and resolve.', opportunity: 'Use AI to correlate operational signals across the media stack and automate detection and resolution.', capabilities: ['Automated media operations', 'Detect and resolve issues faster by correlating ingest, playout, delivery, security, and ad signals.'], impact: ['Faster issue detection and resolution', 'Higher system reliability', 'Reduced operational cost'] },
      { title: 'Proactive audience engagement', challenge: 'Audience engagement remains reactive and channel-fragmented, limiting growth and lifetime value.', opportunity: 'Use AI to anticipate audience interests and orchestrate proactive, personalized engagement.', capabilities: ['Dynamics 365 Customer Insights', 'Azure OpenAI', 'Microsoft Fabric'], impact: ['Higher engagement and watch time', 'Improved subscriber retention', 'Better monetization per audience'] },
      { title: 'Dynamic content production, management, and distribution', challenge: 'Content production, management, and distribution remain fragmented and labor-intensive, constraining speed, scale, and personalization.', opportunity: 'Use AI to dynamically produce, tag, and distribute content across audiences and surfaces.', capabilities: ['Automated media operations'], impact: ['Faster content production cycles', 'Greater personalization at scale', 'Improved monetization across channels'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Media leaders need a clear plan to scale AI across content, operations, and audience.', opportunity: 'Engage Microsoft to design a media-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'healthcare-medtech',
    name: 'MedTech',
    imperatives: [
      'Frontier transformation in MedTech',
      'Turn data from a burden into a competitive advantageInteroperable platforms transform siloed device data into real‑time clinical intelligence1',
      'Imperatives for transforming MedTech',
      'Software‑defined, AI‑enabled products are redefining MedTech growth',
      '$1T+ in healthcare spend is shifting to digital‑first, connected, data‑driven care models by 20351',
      'Expertise shortages are accelerating intelligent automation and agent‑assistedoperating models2',
      'Interoperability is a prerequisite for innovation—not a retrofit',
      'Data silos persist despite generating ~30% of global data, driving standards‑based interoperability demand3',
      'Regulatory, quality, and cybersecurity requirements now span the full product lifecycle4',
      'Commercial advantage is shifting from products to execution',
    ],
    stats: [
      '80% faster SAP transaction times, accelerating order fulfilment',
      '60% reduction in critical response times across supply chain operations',
      '50% faster IDoc processing, improving partner exchange efficiency',
      '50% reduction in US clinician administrative burden using Microsoft Azure OpenAI in Foundry Models, July',
      '100% accurate incentive pay calculations with Azure, November 2025,  4. Medline sparks a revolution in he',
      '100% incentive pay calculation accuracy3',
      '51% of leaders agree productivity must increase',
      '79% of healthcare leaders are confident they’ll use AI agents to expand organizational capacity',
      '30% of global data, driving standards‑based interoperability demand3',
      '50% reduction in administrative burden across providers',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'R&D and commercial teams spent significant time searching across product and customer data.', solution: 'Enriched daily work with Microsoft 365 Copilot and Azure OpenAI.', impact: ['Significant time savings per team', 'Faster decision-making', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Sales, service, and supply chain operations were siloed and slow.', solution: 'Reshaped commercial and supply chain operations with Dynamics 365 and Microsoft Fabric.', impact: ['Higher service levels', 'Improved sales productivity', 'Better margin'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Connected device innovation was constrained by fragmented data and analytics.', solution: 'Reinvented device innovation with Azure Health Data Services, Microsoft Fabric, and Azure AI.', impact: ['Faster device development', 'Stronger clinical evidence', 'Higher product impact'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Cost-to-serve and R&D cost grew faster than revenue.', solution: 'Bent the cost curve by unifying data and embedding AI across the value chain.', impact: ['Faster R&D cycles', 'Lower service cost', 'Higher margin'] },
      ],
    },
    useCases: [
      { title: 'Insights from unified data help fuel AI innovation and bring devices to market faster', challenge: 'MedTech innovators struggle to unify device, clinical, and commercial data needed to fuel AI and accelerate device development.', opportunity: 'Build a unified data foundation that fuels AI innovation and shortens time to market for connected, intelligent devices.', capabilities: ['Microsoft Fabric', 'Azure Health Data Services', 'Azure AI Foundry', 'Azure OpenAI'], impact: ['Faster device development cycles', 'Higher quality clinical and product insights', 'Stronger basis for AI-enabled product features'] },
      { title: 'AI-powered tools help sales and service teams meet changing demand', challenge: 'Sales and service teams cannot easily adapt to changing customer demand and complex product portfolios.', opportunity: 'Use AI to equip sales and service teams with insights, recommendations, and automation that meet evolving demand.', capabilities: ['Microsoft 365 Copilot for Sales', 'Dynamics 365', 'Azure OpenAI', 'Copilot Studio'], impact: ['Higher sales productivity', 'Faster service response', 'Improved customer satisfaction'] },
      { title: 'AI and analytics-driven insights help create more personalized medical devices', challenge: 'Patients increasingly expect personalized device experiences, but data and analytics constraints make this hard at scale.', opportunity: 'Use AI and analytics on unified clinical and device data to design and deliver more personalized device experiences.', capabilities: ['Microsoft Fabric', 'Azure AI Foundry', 'Azure Health Data Services'], impact: ['More personalized clinical outcomes', 'Stronger differentiation', 'Higher patient and clinician satisfaction'] },
      { title: 'Optimize supply chain orchestration to improve business efficiency and profitability', challenge: 'MedTech supply chains face complex regulatory, demand, and supplier dynamics that limit efficiency and profitability.', opportunity: 'Use AI to orchestrate supply chain decisions for higher service, lower cost, and better compliance.', capabilities: ['Dynamics 365 Supply Chain Management', 'Azure AI Foundry', 'Microsoft Fabric'], impact: ['Improved on-time delivery', 'Lower inventory and expedited cost', 'Better margin and compliance posture'] },
      { title: 'Augmented device innovation with optimized data & AI', challenge: 'Device innovation is constrained by fragmented data and slow analytics cycles.', opportunity: 'Augment device innovation with optimized data and AI to compress R&D cycles and improve outcomes.', capabilities: ['Microsoft Fabric', 'Azure AI Foundry', 'Azure Health Data Services'], impact: ['Faster R&D cycles', 'Stronger evidence for regulators', 'Higher product impact'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'MedTech leaders need a sequenced plan to scale AI across product, commercial, and operations.', opportunity: 'Engage Microsoft to design a MedTech-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'energy-resources',
    name: 'Mining',
    imperatives: [
    ],
    stats: [
      '30% reduction in customer rejections',
      '25% of leaders feel highly',
      '75% acknowledge',
      '96% of employees are active users of',
      '100% of anodes using',
      '40% (equivalent to removing 1.3',
      '30% Improved steel quality and cut waste',
      '25% –75% of the cost for',
      '25% – 75% of the cost for compiling',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'F', problem: 'A mining operator needed step-change improvements in productivity and safety to remain competitive.', solution: 'Combined Azure IoT, Microsoft Fabric, and Azure AI Foundry to drive AI-augmented operations across the value chain.', impact: ['Material productivity gains', 'Stronger safety performance', 'Higher margin per ton'] },
        { pillar: 'enrich', company: 'In pursuit of 10×', problem: 'A mining operator needed step-change improvements in productivity and safety to remain competitive.', solution: 'Combined Azure IoT, Microsoft Fabric, and Azure AI Foundry to drive AI-augmented operations across the value chain.', impact: ['Material productivity gains', 'Stronger safety performance', 'Higher margin per ton'] },
        { pillar: 'enrich', company: 'Aker BP needed to', problem: 'Aker BP needed to make field and operations data accessible and actionable for engineers and decision-makers.', solution: 'Built a unified data and AI platform on Azure and Microsoft Fabric, layering Azure OpenAI for natural-language access.', impact: ['Faster engineering decisions', 'Higher operational efficiency', 'Improved subsurface and production insight'] },
        { pillar: 'enrich', company: 'Emirates Global', problem: 'Emirates Global Aluminium needed to modernize aluminum production while reducing emissions and improving quality.', solution: 'Deployed Azure AI on plant data to optimize anode production and overall pot-line operations.', impact: ['100% of anodes optimized using AI', 'Improved product quality', 'Reduced waste and emissions'] },
        { pillar: 'enrich', company: 'Epiroc needed', problem: 'Epiroc needed to scale productivity for engineers and field teams supporting global mining customers.', solution: 'Adopted Microsoft 365 Copilot and Azure OpenAI to enrich daily work with AI assistance grounded in enterprise data.', impact: ['Significant time savings per employee', 'Faster, higher-quality customer responses', 'Improved employee experience'] },
        { pillar: 'enrich', company: 'I', problem: 'A mining operator needed step-change improvements in productivity and safety to remain competitive.', solution: 'Combined Azure IoT, Microsoft Fabric, and Azure AI Foundry to drive AI-augmented operations across the value chain.', impact: ['Material productivity gains', 'Stronger safety performance', 'Higher margin per ton'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Asset operations were reactive and constrained by limited real-time visibility.', solution: 'Reshaped operations with Azure IoT Operations, Microsoft Fabric, and Azure AI Foundry.', impact: ['Reduced unplanned downtime', 'Extended asset life', 'Deferred capex'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Operations decisions relied on disconnected systems and slow analytics.', solution: 'Reinvented operations with AI agents that reason across sensor, ERP, and field data.', impact: ['Improved operational efficiency', 'Stronger safety performance', 'Higher margin'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Workforce shortages and rising input costs threatened margin.', solution: 'Bent the cost curve with AI augmentation across field, plant, and back office.', impact: ['Higher workforce productivity', 'Lower operational cost', 'Improved safety'] },
      ],
    },
    useCases: [
      { title: 'AI reduced downtime, improved asset life,', challenge: 'Mining operations are constrained by unplanned downtime and shortened asset life, eroding margin and capital efficiency.', opportunity: 'Use AI on operational and sensor data to predict failures, extend asset life, and defer capital expenditure.', capabilities: ['Azure IoT Operations', 'Azure AI Foundry', 'Microsoft Fabric real-time intelligence'], impact: ['Reduced unplanned downtime', 'Extended asset life', 'Deferred capital expenditure'] },
      { title: 'Frontier Transformation doesn’t change', challenge: 'Mining leaders need to balance traditional operations with frontier AI investments without disrupting safe production.', opportunity: 'Adopt Frontier Transformation pragmatically, using AI to enhance core extraction decisions while preserving safety and reliability.', capabilities: ['automate extraction decisions. Frontier'], impact: ['Improved extraction efficiency', 'Stronger safety performance', 'Higher margin per ton'] },
      { title: 'business function & industry', challenge: 'Mining executives need a way to map AI use cases to specific business functions and industry value pools.', opportunity: 'Use Microsoft\'s industry frameworks to identify highest-value AI opportunities by function.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Prioritized use case portfolio', 'Aligned executive roadmap', 'Faster time-to-value'] },
    ],
  },
  {
    industry: 'healthcare-payor',
    name: 'Payor',
    imperatives: [
      'Imperatives for transforming Payor business',
      'Transform core payer operations to remain competitive',
      'Frontier transformation in Payor',
      'Competitive advantage shifts from “using AI” to operating as an AI‑orchestrated enterprise',
    ],
    stats: [
      '30% with GitHub Copilot.',
      '51% of leaders agree productivity must increase',
      '77% of healthcare leaders are considering hiring forAI-specific roles',
      '79% of healthcare leaders are confident they’ll use AI agents to expand organizational capacity',
      '25% of payers expect to spend more than $5M on API implementation alone2',
      '70% of health plans are prioritizing agentic AI for UM and PA processes, and claims management1',
      '50% reduction in PA review times and improved quality closure using AI‑assisted workflows3',
      '30% with GitHub Copilot.',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'CareSource', problem: 'CareSource needed to expand member capacity and reduce administrative burden across health plan operations.', solution: 'Deployed Azure AI Foundry and Microsoft 365 Copilot to automate administrative workflows and augment staff.', impact: ['Reduced administrative burden', 'Higher staff capacity for member needs', 'Improved member experience'] },
        { pillar: 'enrich', company: 'CareSource', problem: 'CareSource needed to expand member capacity and reduce administrative burden across health plan operations.', solution: 'Deployed Azure AI Foundry and Microsoft 365 Copilot to automate administrative workflows and augment staff.', impact: ['Reduced administrative burden', 'Higher staff capacity for member needs', 'Improved member experience'] },
        { pillar: 'enrich', company: 'Bupa', problem: 'Bupa needed to deliver more personalized member experiences while maintaining compliance and efficiency.', solution: 'Used Azure OpenAI and Microsoft Cloud for Healthcare to power AI-augmented member engagement.', impact: ['Higher member satisfaction', 'Improved staff productivity', 'Stronger compliance posture'] },
        { pillar: 'enrich', company: 'Care Source', problem: 'CareSource teams faced rising administrative complexity that limited capacity for member-facing work.', solution: 'Adopted Microsoft 365 Copilot and Azure AI Foundry to automate routine work and augment decision-making.', impact: ['Reduced administrative burden', 'Higher staff capacity', 'Improved member outcomes'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Claims, billing, and enrollment workflows were manual and fragmented.', solution: 'Reshaped administrative operations with Azure AI Foundry agents and Microsoft Fabric.', impact: ['50%+ reduction in administrative cycle times', 'Lower cost per transaction', 'Improved accuracy'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Utilization management and prior authorization processes were slow and inconsistent.', solution: 'Reinvented UM and PA with AI-assisted workflows grounded in clinical and policy data.', impact: ['50% reduction in PA review times', 'Improved quality closure', 'Better member experience'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Administrative cost grew faster than premium revenue.', solution: 'Bent the cost curve with agentic AI across UM, PA, claims, and member service.', impact: ['Material administrative cost reduction', 'Improved member outcomes', 'Better star ratings'] },
      ],
    },
    useCases: [
      { title: 'Enable confident decisions and accelerate claims, billing, and enrollment through automated data workflows', challenge: 'Manual, fragmented claims, billing, and enrollment workflows drive high operating cost and poor member experience.', opportunity: 'Automate end-to-end administrative workflows with AI agents to enable confident, faster decisions.', capabilities: ['Azure AI Document Intelligence', 'Azure AI Foundry agents', 'Microsoft Fabric', 'Dynamics 365'], impact: ['50%+ reduction in administrative cycle times', 'Lower cost per transaction', 'Improved accuracy and compliance'] },
      { title: 'Personalize engagement and boost productivity with a unified, 360-degree member view', challenge: 'Member data is fragmented across enrollment, claims, clinical, and engagement systems, limiting personalized service.', opportunity: 'Build a unified 360-degree member view powered by AI to personalize engagement and boost productivity.', capabilities: ['Microsoft Cloud for Healthcare', 'Microsoft Fabric', 'Dynamics 365 Customer Insights', 'Microsoft 365 Copilot'], impact: ['Higher member satisfaction and retention', 'Improved cross-team productivity', 'Better star ratings and outcomes'] },
      { title: 'Enhance employee capacity and reduce shortages with AI-driven summaries and automated documentation', challenge: 'Workforce shortages and administrative burden limit payor capacity and clinician productivity.', opportunity: 'Use AI-driven summaries and automated documentation to expand capacity and reduce burden.', capabilities: ['Azure OpenAI', 'Microsoft 365 Copilot', 'Dragon Copilot', 'Copilot Studio'], impact: ['50% reduction in administrative burden', 'Higher staff capacity', 'Improved employee experience'] },
      { title: 'Enable secure, compliant collaboration with up-to-date member data and insights', challenge: 'Payors must collaborate across providers and partners with up-to-date member data while maintaining strict compliance.', opportunity: 'Enable secure, compliant collaboration with AI-augmented administrative workflows and unified member data.', capabilities: ['Automate relevant administrative duties and help ensure accuracy with member claims'], impact: ['Faster, accurate claims handling', 'Improved compliance posture', 'Better cross-organization coordination'] },
      { title: 'Unify Member, Provider, and Clinical Data to Enhance Member Outcomes and Drive Operational Efficiency', challenge: 'Disconnected member, provider, and clinical data prevents holistic insight and slows operational improvement.', opportunity: 'Unify data with FHIR-based interoperability and AI to enhance outcomes and operations.', capabilities: ['Azure Health Data Services', 'Microsoft Fabric', 'Azure AI Foundry'], impact: ['Better member outcomes', 'Higher operational efficiency', 'Stronger evidence for value-based care'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Payor leaders need a sequenced plan to scale agentic AI across UM, PA, claims, and member engagement.', opportunity: 'Engage Microsoft to design a payor-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'healthcare-pharma',
    name: 'Pharma',
    imperatives: [
    ],
    stats: [
      '10% with Azure OpenAI Service, March 2025, 3. Microsoft, Almirall unlocks decades of R&D data in seconds',
      '100% accurate incentive pay calculations with Azure, November 2025',
      '10% with Azure OpenAI Service, March 2025',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Almirall', problem: 'Decades of R&D knowledge were locked in unstructured documents.', solution: 'Enriched scientific work with Azure OpenAI and Azure AI Search to unlock institutional knowledge.', impact: ['Faster access to prior art', 'Reduced duplicated R&D', 'Higher scientific productivity'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Commercial operations were slowed by manual processes and fragmented data.', solution: 'Reshaped commercial operations with Microsoft Fabric, Dynamics 365, and Microsoft 365 Copilot.', impact: ['Higher field productivity', 'Better targeting', 'Improved revenue per rep'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Drug discovery cycles were too long and too costly.', solution: 'Reinvented discovery with Azure AI Foundry, Azure OpenAI, and unified scientific data.', impact: ['Faster discovery cycles', 'Improved candidate quality', 'Lower R&D cost per molecule'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'R&D and commercial cost grew faster than revenue.', solution: 'Bent the cost curve with AI across discovery, development, and commercial.', impact: ['Material R&D efficiency gains', 'Higher commercial productivity', 'Improved margin'] },
      ],
    },
    useCases: [
      { title: 'Unlock institutional scientific knowledge, turning fragmented research into a searchable foundation for innovation', challenge: 'Decades of scientific research are locked in unstructured documents, making it hard for scientists to build on prior work.', opportunity: 'Use AI to unlock institutional scientific knowledge and turn fragmented research into a searchable foundation for innovation.', capabilities: ['Azure AI Search', 'Azure OpenAI', 'Microsoft Fabric', 'Azure Health Data Services'], impact: ['Faster access to relevant prior art', 'Reduced duplicated R&D work', 'Higher scientific productivity'] },
      { title: 'Augmented research & drug discovery with optimized data & AI', challenge: 'Organizations in this domain face challenges executing on \'Augmented research & drug discovery with optimized data & AI\' due to fragmented data, manual processes, and siloed decision-making.', opportunity: 'Use Microsoft AI to operationalize \'Augmented research & drug discovery with optimized data & AI\' so teams act on better insight, faster, with measurable business impact.', capabilities: ['Microsoft 365 Copilot', 'Azure AI Foundry', 'Microsoft Fabric'], impact: ['Improved productivity and decision speed', 'Higher quality outcomes', 'Measurable ROI within 6-12 months'] },
    ],
  },
  {
    industry: 'energy-resources',
    name: 'Power & Utilities',
    imperatives: [
    ],
    stats: [
      '67% of customer conversations',
      '80% increase in audit productivity with',
      '15% $80 million',
      '20% only of utility executives',
      '66% of utility leaders cite',
      '64% of utility leaders have expanded their innovation budgets - and nearly all see AI as a strategic foc',
      '50% by 2030 to meet expected demand²',
      '40% of the workforce nears retirement eligibility by 2030, as leaders look to digital labor⁴',
      '40% of help desk demand is now fulfilled',
      '70% more customer conversations',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'F', problem: 'A mining operator needed step-change improvements in productivity and safety to remain competitive.', solution: 'Combined Azure IoT, Microsoft Fabric, and Azure AI Foundry to drive AI-augmented operations across the value chain.', impact: ['Material productivity gains', 'Stronger safety performance', 'Higher margin per ton'] },
        { pillar: 'enrich', company: 'Uniper implemented', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
        { pillar: 'enrich', company: 'Helpdesk agents', problem: 'Help desk teams faced rising ticket volume and limited capacity to respond proactively.', solution: 'Deployed Copilot Studio agents grounded in service data to deflect and accelerate help desk requests.', impact: ['40% of help desk demand fulfilled by AI', 'Faster resolution times', 'Improved employee satisfaction'] },
        { pillar: 'enrich', company: 'Eneco struggled to', problem: 'Eneco struggled to handle growing customer service volume with consistent quality and speed.', solution: 'Used Azure OpenAI and Dynamics 365 Customer Service to augment agents with AI-driven assistance.', impact: ['67% of customer conversations supported by AI', '70% more customer conversations handled', 'Improved CSAT'] },
        { pillar: 'enrich', company: 'Faced downtime and', problem: 'A frontier energy and resources operator needed to unlock value from fragmented operational and engineering data.', solution: 'Built a unified data and AI foundation on Microsoft Fabric and Azure AI Foundry to power AI-driven operations.', impact: ['Faster, higher-quality decisions', 'Improved operational efficiency', 'Stronger safety and reliability'] },
        { pillar: 'enrich', company: 'I', problem: 'A mining operator needed step-change improvements in productivity and safety to remain competitive.', solution: 'Combined Azure IoT, Microsoft Fabric, and Azure AI Foundry to drive AI-augmented operations across the value chain.', impact: ['Material productivity gains', 'Stronger safety performance', 'Higher margin per ton'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Grid operations relied on disconnected monitoring and manual response, limiting reliability and safety.', solution: 'Reshaped grid operations with Azure IoT Operations, Microsoft Fabric, and AI-powered situational awareness.', impact: ['Faster outage detection and response', 'Higher grid reliability', 'Improved safety performance'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Asset management was constrained by reactive maintenance and limited predictive capability.', solution: 'Reinvented asset management with AI agents on Azure that predict failures and optimize maintenance scheduling.', impact: ['Reduced unplanned downtime', 'Extended asset life', 'Deferred capital expenditure'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Operational cost grew faster than regulated revenue under workforce pressure and aging infrastructure.', solution: 'Bent the cost curve with AI-driven operations, workforce enablement, and customer service automation.', impact: ['Material operational cost reduction', 'Higher workforce productivity', 'Improved customer satisfaction'] },
      ],
    },
    useCases: [
      { title: 'where AI reduced downtime, improved asset life, or deferred', challenge: 'Mining operations are constrained by unplanned downtime and shortened asset life, eroding margin and capital efficiency.', opportunity: 'Use AI on operational and sensor data to predict failures, extend asset life, and defer capital expenditure.', capabilities: ['Azure IoT Operations', 'Azure AI Foundry', 'Microsoft Fabric real-time intelligence'], impact: ['Reduced unplanned downtime', 'Extended asset life', 'Deferred capital expenditure'] },
      { title: 'business function & industry', challenge: 'Mining executives need a way to map AI use cases to specific business functions and industry value pools.', opportunity: 'Use Microsoft\'s industry frameworks to identify highest-value AI opportunities by function.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Prioritized use case portfolio', 'Aligned executive roadmap', 'Faster time-to-value'] },
      { title: 'planning to storm readiness.', challenge: 'Utilities must respond to increasing weather volatility and demand surges with limited workforce and time.', opportunity: 'Use AI to improve planning, demand forecasting, and storm readiness across the network.', capabilities: ['Azure AI Foundry', 'Microsoft Fabric', 'Azure OpenAI'], impact: ['Faster storm response', 'Better demand forecasting', 'Improved customer satisfaction during events'] },
    ],
  },
  {
    industry: 'manufacturing',
    name: 'Process Manufacturing',
    imperatives: [
      'Frontier transformation in Process Manufacturing',
      'Agentic and autonomous supply chains that sense demand and disruption, anticipate impact and autonomously rebalance supply, production planning, and order allocation to protect customer commitments.',
    ],
    stats: [
      '23% for laggards',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Engineering and plant teams spent significant time on manual data gathering and reporting.', solution: 'Enriched daily work with Microsoft 365 Copilot and Power BI grounded in manufacturing data.', impact: ['Significant time savings per engineer', 'Faster operational decisions', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Plant operations were siloed, with quality and process decisions made without full operational context.', solution: 'Reshaped plant operations with Azure IoT Operations, Microsoft Fabric, and AI-driven quality and process control.', impact: ['Higher OEE and first-pass yield', 'Reduced waste and variability', 'Improved safety'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Autonomous supply chain networks', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Operations and raw material costs grew faster than revenue under volatile market conditions.', solution: 'Bent the cost curve with AI-driven demand planning, process optimization, and supply chain automation.', impact: ['Material reduction in operations cost', 'Improved working capital', 'Higher margin under volatility'] },
      ],
    },
    useCases: [
      { title: 'AI agents model chemical and physical properties and behavior, safety elements, and economics to accelerate innovation at scale', challenge: 'R&D in process industries is slowed by complex modeling of chemical and physical properties, safety, and economics.', opportunity: 'Use AI agents to model properties, behavior, safety, and economics together to accelerate innovation at scale.', capabilities: ['Azure AI Foundry', 'Azure OpenAI', 'Microsoft Fabric', 'Azure HPC'], impact: ['Faster R&D cycles', 'Improved product economics', 'Stronger safety and compliance'] },
      { title: 'Physical AI in factory operations improves throughput, resilience, and control by turning plant decisions into closed-loop execution.', challenge: 'Plant operations remain reactive and siloed, with quality, equipment, and process decisions made too late to protect throughput and margin.', opportunity: 'Combine physical AI, IoT, and digital twins to turn plant decisions into closed-loop execution that improves throughput, resilience, and control.', capabilities: ['Azure IoT Operations', 'Azure AI Foundry', 'Microsoft Fabric real-time intelligence', 'Dynamics 365 Supply Chain Management'], impact: ['Higher OEE and first-pass yield', 'Reduced unplanned downtime', 'Improved safety and energy efficiency'] },
      { title: 'AI agents surface risks and opportunities earlier and coordinate planning, inventory, and fulfillment decisions—shifting supply chains from reactive to proactive, reliable execution.', challenge: 'Process supply chains are exposed to volatility in feedstock, energy, demand, and logistics, with reactive responses driving margin loss.', opportunity: 'Use AI agents to surface risks earlier and coordinate planning, inventory, and fulfillment proactively.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric', 'Dynamics 365 Supply Chain Management'], impact: ['Improved on-time delivery', 'Lower expedited freight and inventory', 'Protected margin under volatility'] },
      { title: 'Agentic powered research and development', challenge: 'R&D productivity is constrained by fragmented data, manual analysis, and slow experimentation cycles.', opportunity: 'Use agentic AI to accelerate hypothesis generation, experiment design, and analysis.', capabilities: ['Azure AI Foundry agents', 'Azure OpenAI', 'Microsoft Fabric'], impact: ['Faster experimentation cycles', 'Higher R&D productivity', 'Better candidate quality'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Manufacturers need a clear plan to scale AI across engineering, factory, and supply chain.', opportunity: 'Engage Microsoft to design a manufacturing-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions for Manufacturing', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
      { title: 'Agentic powered research and development', challenge: 'R&D productivity is constrained by fragmented data, manual analysis, and slow experimentation cycles.', opportunity: 'Use agentic AI to accelerate hypothesis generation, experiment design, and analysis.', capabilities: ['Azure AI Foundry agents', 'Azure OpenAI', 'Microsoft Fabric'], impact: ['Faster experimentation cycles', 'Higher R&D productivity', 'Better candidate quality'] },
    ],
  },
  {
    industry: 'healthcare-provider',
    name: 'Provider',
    imperatives: [
      'Frontier transformation in healthcare',
      'Intelligent automation helps transform healthcare operations',
      'Responsible AI is now a prerequisite for speed, scale, and credibility',
      'Imperatives for transforming healthcare',
      'Frontier transformation in healthcare',
      'Intelligent automation helps transform healthcare operations',
      'Responsible AI is now a prerequisite for speed, scale, and credibility',
    ],
    stats: [
      '50% Faster response to patient needs2',
      '87% with Microsoft Dynamics 365 Customer Insights,  May 2025',
      '51% of leaders agree productivity must increase',
      '77% of healthcare leaders are considering hiring forAI-specific roles',
      '79% of healthcare leaders are confident they’ll use AI agents to expand organizational capacity',
      '57% of healthcare leaders ranked AI-based clinical solutions as their top technology initiative for the',
      '77% are considering hiring for AI-specific roles5',
      '87% response rate to SMS campaigns, up from 30% with previous ways of engagement',
      '87% with Microsoft Dynamics 365 Customer Insights, May 2025',
      '90% Improved operational efficiency while strengthening patient relationships and long‑term health outco',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Cooper University Healthcare', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Carle Health', problem: 'Carle Health needed to drive higher patient engagement and conversion on diagnostic and preventive care campaigns.', solution: 'Used Microsoft Dynamics 365 Customer Insights to personalize SMS outreach and orchestrate omnichannel patient engagement.', impact: ['Achieved an 87% response rate to SMS campaigns, up from 30% with previous ways of engagement', 'Increased diagnostic revenue', 'Improved scheduling efficiency, giving health teams more time to support patients at scale', 'Carle Health', 'Microsoft: Carle Health boosts patient response to 87% with Microsoft Dynamics 365 Customer Insights, May 2025', 'Read the full story here', 'business and clinical workflows'] },
        { pillar: 'reshape', company: 'City of Hope', problem: 'City of Hope needed to onboard thousands of patients per year while reducing manual document review and clinician burden.', solution: 'Built on Microsoft Azure and AI to automate patient intake and surface relevant clinical context at the point of care.', impact: ['Enabled patients to receive more personalized care with detailed information at clinicians’ fingertips', 'Reduced administrative burden by reducing manual document review', 'Improved provider and patient experience by minimizing time spent on data retrieval', 'City of Hope', 'Microsoft: City of Hope uses Microsoft Azure and AI to rapidly onboard thousands of patients per year, April 2025', 'Read the full story here', 'business and clinical workflows'] },
        { pillar: 'reshape', company: 'Northwestern Medicine', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
        { pillar: 'reshape', company: 'Apollo Hospitals', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
        { pillar: 'reshape', company: 'CHU de MONTPELLIER', problem: 'An industry leader needed to scale AI productivity to a global workforce while protecting governance.', solution: 'Rolled out Microsoft 365 Copilot enterprise-wide with strong governance and adoption programs.', impact: ['96% active Copilot adoption', 'Significant time savings per employee', 'Improved employee satisfaction'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Clinicians spent half their time on documentation rather than patient care.', solution: 'Reinvented clinical workflows with Dragon Copilot and Microsoft 365 Copilot.', impact: ['50% reduction in clinician administrative burden', 'More time with patients', 'Improved clinician retention'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Provider cost-of-care grew faster than reimbursement.', solution: 'Bent the cost curve with AI across clinical, operational, and patient engagement workflows.', impact: ['Improved operational efficiency', 'Better patient outcomes', 'Stronger financial performance'] },
      ],
    },
    useCases: [
      { title: 'Enhance care management with actionable insights', challenge: 'Care managers lack timely, integrated insight across patient populations, limiting proactive intervention and outcomes.', opportunity: 'Use AI to surface actionable insights for care management teams and prioritize patients who need intervention.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure AI Foundry', 'Azure Health Data Services', 'Power BI'], impact: ['Improved patient outcomes', 'Higher care team productivity', 'Better cost-of-care performance'] },
      { title: 'Transform Clinical Workflow', challenge: 'Clinicians spend excessive time on documentation and administrative tasks, contributing to burnout and limiting time with patients.', opportunity: 'Automate documentation and administrative tasks with AI to ease clinician burden and enhance patient experience.', capabilities: ['Automate documentation and administrative tasks to ease burdens and enhance clinician and patient experiences.'], impact: ['50% reduction in clinician administrative burden', 'More time for patient care', 'Improved clinician satisfaction and retention'] },
      { title: 'Personalize patient engagement', challenge: 'Patient engagement is often generic and reactive, leading to missed appointments and poor adherence.', opportunity: 'Use AI to personalize patient engagement across channels and improve adherence and outcomes.', capabilities: ['Dynamics 365 Customer Insights', 'Azure OpenAI', 'Microsoft Cloud for Healthcare'], impact: ['Higher patient response rates', 'Improved adherence and outcomes', 'Greater operational efficiency'] },
      { title: 'Accelerate clinical research and patient care, including Trusted Research Environments', challenge: 'Clinical research is constrained by fragmented data, slow analytics, and complex compliance requirements.', opportunity: 'Use Trusted Research Environments and AI to accelerate clinical research while protecting privacy.', capabilities: ['Azure Trusted Research Environment', 'Azure Health Data Services', 'Azure AI Foundry'], impact: ['Faster research cycles', 'Stronger compliance', 'Better translation of research into care'] },
      { title: 'Read the full story here', challenge: 'Provider leaders benefit from learning how peers have operationalized AI for measurable impact.', opportunity: 'Explore real-world Microsoft customer stories to inform your AI roadmap.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Faster learning from proven patterns', 'Reduced delivery risk', 'Stronger executive alignment'] },
      { title: 'Transform Clinical Workflow', challenge: 'Clinicians spend excessive time on documentation and administrative tasks, contributing to burnout and limiting time with patients.', opportunity: 'Automate documentation and administrative tasks with AI to ease clinician burden and enhance patient experience.', capabilities: ['Dragon Copilot', 'Microsoft 365 Copilot', 'Azure OpenAI', 'Microsoft Cloud for Healthcare'], impact: ['50% reduction in clinician administrative burden', 'More time for patient care', 'Improved clinician satisfaction and retention'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Provider leaders need a sequenced plan to scale AI across clinical, operational, and patient engagement domains.', opportunity: 'Engage Microsoft to design a provider-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
      { title: 'Vail Health:  Dragon Copilot', challenge: 'Clinicians at Vail Health needed to reduce documentation burden and improve patient interaction quality.', opportunity: 'Deploy Dragon Copilot to ambient-document patient encounters and free clinicians from manual notes.', capabilities: ['Dragon Copilot', 'Microsoft 365 Copilot', 'Microsoft Cloud for Healthcare'], impact: ['Reduced clinician documentation time', 'Improved patient experience', 'Higher clinician satisfaction'] },
      { title: 'SolutionHealth:  Dragon Copilot', challenge: 'SolutionHealth clinicians faced rising administrative burden limiting patient time.', opportunity: 'Adopt Dragon Copilot to capture encounters and automate clinical documentation.', capabilities: ['Dragon Copilot', 'Microsoft 365 Copilot'], impact: ['Less time on documentation', 'More time with patients', 'Improved clinician retention'] },
      { title: 'Kry: Azure OpenAI Service', challenge: 'Kry needed to scale digital-first care while maintaining quality and clinician productivity.', opportunity: 'Use Azure OpenAI to power AI-augmented clinical workflows and patient experience.', capabilities: ['Azure OpenAI', 'Microsoft Cloud for Healthcare', 'Azure AI Foundry'], impact: ['Higher clinician productivity', 'Improved patient access', 'Scalable digital care'] },
      { title: 'Anima Mentis : Microsoft for Healthcare, Azure Open AI', challenge: 'Anima Mentis sought to deliver more personalized and accessible mental health care.', opportunity: 'Use Microsoft for Healthcare and Azure OpenAI to augment care delivery and patient engagement.', capabilities: ['Microsoft Cloud for Healthcare', 'Azure OpenAI', 'Microsoft 365'], impact: ['Improved patient access', 'Better engagement and outcomes', 'Higher operational efficiency'] },
    ],
  },
  {
    industry: 'retail',
    name: 'Retail',
    imperatives: [
      'Frontier transformation in Retail',
      'Predictive demand forecasting to maximize sell-through. Disruption monitoring and prevention. Automated replenishment, and optimized routes and recommendations',
      'IoT informed store layouts and employees equipped with unified knowledge to accelerate onboarding, boost productivity, and deliver seamless store experiences',
      '70% of large retailers will use AI‑based demand forecasting by 2030',
      'As product discovery shifts to AI assistants, retailers must build agent‑ready data and governance to appear in automated purchase journeys',
    ],
    stats: [
      '23% for laggards',
      '70% of large retailers will use AI‑based demand forecasting by 2030',
      '33% of retail leaders prioritize AI for automation',
      '40% of routine retail associate tasks to be AI-assisted by 2030',
      '55% of online shoppers will begin product research using AI assistants',
      '70% of retail revenue will still be generated in physical stores in 2030',
      '10% reduction in food waste enabled by AI demand forecasting accuracy',
      '40% improvement in engineering delivery speed across teams',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Merchandising and marketing teams spent excessive time on manual reporting and content production.', solution: 'Enriched daily work with Microsoft 365 Copilot grounded in retail data.', impact: ['Significant time savings per team', 'Faster decisions', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Shopper experiences were inconsistent across digital and store channels.', solution: 'Reshaped the shopper experience with Dynamics 365 Customer Insights and Azure OpenAI.', impact: ['Higher conversion and basket size', 'Improved CSAT and loyalty', 'Better cross-channel attribution'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Discovery is shifting from search to AI assistants, threatening traffic and conversion.', solution: 'Reinvented discoverability with AI-ready data, structured content, and grounded retrieval.', impact: ['Higher visibility on AI surfaces', 'Improved conversion', 'Stronger brand relevance'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Cost-to-serve grew faster than revenue under omnichannel complexity.', solution: 'Bent the cost curve with AI-driven personalization, associate enablement, and supply chain automation.', impact: ['Lower cost-to-serve', 'Higher conversion', 'Improved working capital'] },
      ],
    },
    useCases: [
      { title: 'Transform the shopper experience', challenge: 'Organizations in this domain face challenges executing on \'Transform the shopper experience\' due to fragmented data, manual processes, and siloed decision-making.', opportunity: 'Use Microsoft AI to operationalize \'Transform the shopper experience\' so teams act on better insight, faster, with measurable business impact.', capabilities: ['Microsoft 365 Copilot', 'Azure AI Foundry', 'Microsoft Fabric'], impact: ['Improved productivity and decision speed', 'Higher quality outcomes', 'Measurable ROI within 6-12 months'] },
      { title: 'Transform the shopper experience', challenge: 'Organizations in this domain face challenges executing on \'Transform the shopper experience\' due to fragmented data, manual processes, and siloed decision-making.', opportunity: 'Use Microsoft AI to operationalize \'Transform the shopper experience\' so teams act on better insight, faster, with measurable business impact.', capabilities: ['Microsoft 365 Copilot', 'Azure AI Foundry', 'Microsoft Fabric'], impact: ['Improved productivity and decision speed', 'Higher quality outcomes', 'Measurable ROI within 6-12 months'] },
      { title: 'Equip associates with intelligent tools to meet evolving customer needs with confidence and grow satisfaction', challenge: 'Store associates lack unified knowledge and tools needed to confidently meet evolving customer needs.', opportunity: 'Equip associates with AI-powered tools that surface product, customer, and inventory insight in the moment.', capabilities: ['Microsoft 365 Copilot', 'Copilot Studio', 'Dynamics 365 Commerce', 'Azure OpenAI'], impact: ['Higher associate productivity', 'Improved customer satisfaction', 'Better attach and conversion in store'] },
      { title: 'Personalized customer interactions and journeys help unlock loyalty and growth', challenge: 'Generic engagement undermines loyalty and lifetime value as consumers expect highly personalized journeys.', opportunity: 'Deliver AI-driven personalized journeys across channels to unlock loyalty and growth.', capabilities: ['Dynamics 365 Customer Insights - Journeys', 'Azure OpenAI', 'Microsoft Fabric'], impact: ['Higher repeat-purchase rates', 'Improved CLV', 'Increased share of wallet'] },
      { title: 'Content creation supported by customer insights help maximize impact at scale', challenge: 'Producing localized, on-brand content for thousands of SKUs and markets is too slow with traditional approaches.', opportunity: 'Use AI-driven content engines to scale on-brand creative production grounded in customer insight.', capabilities: ['Azure OpenAI', 'Microsoft 365 Copilot', 'Dynamics 365 Customer Insights'], impact: ['50%+ improvement in content production efficiency', 'Faster localization', 'Higher engagement'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Retail leaders need a clear plan to scale AI across shopper, associate, and supply chain.', opportunity: 'Engage Microsoft to design a retail-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Cloud for Retail', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'telecommunications',
    name: 'Telecommunications',
    imperatives: [
    ],
    stats: [
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Engineering and operations teams spent significant time across fragmented tools.', solution: 'Enriched daily work with Microsoft 365 Copilot and GitHub Copilot.', impact: ['Significant productivity gains', 'Faster delivery', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Subscriber service was fragmented and reactive, driving high cost-to-serve and churn.', solution: 'Reshaped service with Azure AI Foundry agents and Copilot Studio grounded in subscriber data.', impact: ['Higher first-contact resolution', 'Lower cost-to-serve', 'Improved subscriber satisfaction'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Network and operations workflows were manual and brittle.', solution: 'Reinvented network and operations with AI agents that automate workflows end-to-end.', impact: ['Faster network operations', 'Higher reliability', 'Lower operational cost'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'ARPU was flat while operating cost continued to grow.', solution: 'Bent the cost curve with AI across network, service, and back office.', impact: ['Material cost reduction', 'Improved ARPU through new services', 'Higher margin'] },
      ],
    },
    useCases: [
      { title: 'Safeguard the network against cyber threats', challenge: 'Telecom networks face escalating, increasingly automated cyber threats that legacy SOCs cannot keep pace with.', opportunity: 'Use AI to detect and respond to threats in real time as attacks automate.', capabilities: ['Automate the network and operational workflows'], impact: ['Faster threat detection and response', 'Reduced breach risk', 'Lower SOC operating cost'] },
      { title: 'Next-gen subscriber service with AI agents', challenge: 'Subscriber service remains fragmented and reactive, driving high cost-to-serve and churn.', opportunity: 'Use AI agents to deliver next-generation subscriber service that resolves issues end-to-end.', capabilities: ['Azure AI Foundry agents', 'Copilot Studio', 'Dynamics 365 Customer Service', 'Azure OpenAI'], impact: ['Higher first-contact resolution', 'Lower cost-to-serve', 'Improved subscriber satisfaction and retention'] },
      { title: 'Enhance productivity with AI-powered automation', challenge: 'Telecom employees spend significant time on repetitive, manual processes that limit productivity.', opportunity: 'Enhance employee productivity with AI-powered automation across operations and back office.', capabilities: ['Microsoft 365 Copilot', 'Copilot Studio', 'Power Platform'], impact: ['Higher employee productivity', 'Lower operational cost', 'Faster service delivery'] },
      { title: 'Automate the network and operational workflows', challenge: 'Network and operational workflows are complex, fragmented, and largely manual, limiting agility and reliability.', opportunity: 'Use AI to automate network and operational workflows for faster, more resilient service.', capabilities: ['Automate the network and operational workflows'], impact: ['Faster network operations', 'Higher reliability', 'Lower operational cost'] },
      { title: 'Create new revenue streams with managed services', challenge: 'Traditional telecom revenue streams are under pressure, requiring new managed services to drive growth.', opportunity: 'Use AI and Azure to create new managed service revenue streams for enterprise customers.', capabilities: ['Azure AI Foundry', 'Azure cloud', 'Microsoft Industry Solutions'], impact: ['New high-margin revenue streams', 'Stronger enterprise relationships', 'Improved ARPU'] },
      { title: 'Safeguard the network against cyber threats', challenge: 'Telecom networks face escalating, increasingly automated cyber threats that legacy SOCs cannot keep pace with.', opportunity: 'Use AI to detect and respond to threats in real time as attacks automate.', capabilities: ['Detect and respond to threats in real time as attacks automate'], impact: ['Faster threat detection and response', 'Reduced breach risk', 'Lower SOC operating cost'] },
      { title: 'Improve subscriber satisfaction', challenge: 'Subscriber satisfaction is constrained by inconsistent service experiences and slow issue resolution.', opportunity: 'Use AI to deliver more consistent, proactive subscriber experiences across channels.', capabilities: ['Automate the network and operational workflows'], impact: ['Higher CSAT and NPS', 'Lower churn', 'Improved lifetime value'] },
    ],
  },
  {
    industry: 'transportation',
    name: 'Transportation & Logistics',
    imperatives: [
      'Frontier transformation in Transportation & logistics',
    ],
    stats: [
      '23% for laggards',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Operations and customer-facing teams spent significant time gathering data across systems.', solution: 'Enriched daily work with Microsoft 365 Copilot grounded in operational data.', impact: ['Significant time savings per team', 'Faster decisions', 'Improved employee experience'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Operations could not respond fast enough to disruption in network and demand.', solution: 'Reshaped operations with Azure AI Foundry agents and Microsoft Fabric real-time intelligence.', impact: ['Faster operational response', 'Improved on-time performance', 'Lower disruption cost'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Customer service models were reactive and missed retention and growth opportunities.', solution: 'Reinvented customer service with proactive AI engagement across the lifecycle.', impact: ['Higher retention and cross-sell', 'Improved CSAT/NPS', 'Lower cost-to-serve'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Operations cost grew faster than revenue under volatile demand and capacity.', solution: 'Bent the cost curve with AI-driven planning, automation, and workforce enablement.', impact: ['Lower operations cost', 'Higher service levels', 'Improved margin'] },
      ],
    },
    useCases: [
      { title: 'Enable customer-facing teams with accessible and actionable insights to improve business effectiveness', challenge: 'Customer-facing T&L teams lack accessible, actionable insights across shipments, customers, and operations.', opportunity: 'Use AI to equip customer-facing teams with insights that improve effectiveness and customer experience.', capabilities: ['Microsoft 365 Copilot', 'Dynamics 365', 'Microsoft Fabric', 'Azure OpenAI'], impact: ['Higher team productivity', 'Improved customer satisfaction', 'Better revenue per customer'] },
      { title: 'Create agile operations that improve planning and proactive response to critical operational impacts', challenge: 'Operations teams cannot respond fast enough to disruption in network, capacity, and demand, leading to missed commitments.', opportunity: 'Use AI to plan proactively and respond to operational impacts in real time.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric real-time intelligence', 'Dynamics 365 Supply Chain Management'], impact: ['Faster, more accurate operational response', 'Improved on-time performance', 'Lower disruption cost'] },
      { title: 'Unlock proactive customer service, retention, and growth opportunities with proactive customer services', challenge: 'Reactive service models miss opportunities to retain and grow customer relationships.', opportunity: 'Use AI to enable proactive customer service, retention, and growth across the customer lifecycle.', capabilities: ['Automated and proactive quality and performance monitoring to reduce exceptions and improve agility'], impact: ['Higher retention and cross-sell', 'Improved CSAT/NPS', 'Lower cost-to-serve'] },
      { title: 'AI enabled workforce', challenge: 'T&L workforce productivity is constrained by manual processes and limited access to information.', opportunity: 'Equip the T&L workforce with AI-powered tools to boost productivity and decision quality.', capabilities: ['Microsoft 365 Copilot', 'Copilot Studio', 'Power Platform'], impact: ['Higher workforce productivity', 'Better decision quality', 'Improved employee experience'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'T&L leaders need a clear plan to scale AI across customer, operations, and workforce.', opportunity: 'Engage Microsoft to design a T&L-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
  {
    industry: 'travel-hospitality',
    name: 'Travel & Hospitality',
    imperatives: [
      'Frontier transformation in Travel & Hospitality',
      'Agentic supply chains that anticipate disruption, rebalance supply and demand, and protect vehicle programs end-to-end',
    ],
    stats: [
      '65% have AI integrated into long-term strategy',
      '23% for laggards',
    ],
    pillarStories: {
      enrich: [
        { pillar: 'enrich', company: 'Industry Leader', problem: 'Guest-facing teams lacked unified insight into preferences and history.', solution: 'Enriched daily work with Microsoft 365 Copilot and Dynamics 365 Customer Insights.', impact: ['Significant time savings per team', 'Improved personalization', 'Higher guest satisfaction'] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Industry Leader', problem: 'Operations were exposed to demand volatility and disruption with limited real-time visibility.', solution: 'Reshaped operations with Azure AI Foundry agents and Microsoft Fabric.', impact: ['Faster operational response', 'Improved on-time performance', 'Lower disruption cost'] },
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Industry Leader', problem: 'Traditional travel revenue models faced pressure from digital entrants.', solution: 'Reinvented commercial models with AI-driven dynamic pricing, personalization, and new offerings.', impact: ['New revenue streams', 'Higher conversion', 'Improved guest lifetime value'] },
      ],
      bend: [
        { pillar: 'bend', company: 'Industry Leader', problem: 'Operations and acquisition cost grew faster than revenue.', solution: 'Bent the cost curve with AI across operations, marketing, and guest engagement.', impact: ['Lower cost-to-serve', 'Higher acquisition efficiency', 'Improved margin'] },
      ],
    },
    useCases: [
      { title: 'Enable customer-facing teams with accessible and actionable insights to improve business effectiveness', challenge: 'Customer-facing travel and hospitality teams lack unified insight into guest preferences, history, and intent.', opportunity: 'Use AI to equip teams with actionable guest insights that improve effectiveness and personalization.', capabilities: ['Microsoft 365 Copilot', 'Dynamics 365 Customer Insights', 'Azure OpenAI'], impact: ['Higher team productivity', 'Improved guest satisfaction', 'Better revenue per guest'] },
      { title: 'Create agile operations that improve planning and proactive response to critical operational impacts', challenge: 'Travel operations are exposed to demand volatility, disruption, and capacity constraints that legacy systems cannot manage in real time.', opportunity: 'Use AI to plan proactively and respond to operational impacts in real time.', capabilities: ['Azure AI Foundry agents', 'Microsoft Fabric real-time intelligence', 'Dynamics 365'], impact: ['Faster operational response', 'Improved on-time performance', 'Lower disruption cost'] },
      { title: 'Unlock new AI powered business models and revenue streams to drive growth and innovation', challenge: 'Traditional travel and hospitality revenue models are under pressure from new digital entrants.', opportunity: 'Use AI to unlock new business models, dynamic pricing, and personalized offerings that drive growth.', capabilities: ['Azure AI Foundry', 'Dynamics 365 Customer Insights', 'Microsoft Fabric'], impact: ['New revenue streams', 'Higher conversion', 'Improved guest lifetime value'] },
      { title: 'Take your next step toward Frontier Transformation', challenge: 'Travel and hospitality leaders need a clear plan to scale AI across guest, operations, and commercial.', opportunity: 'Engage Microsoft to design a travel and hospitality-specific Frontier Transformation roadmap.', capabilities: ['Microsoft Industry Solutions', 'Azure AI Foundry', 'Microsoft 365 Copilot'], impact: ['Aligned roadmap', 'Prioritized use cases', 'Measurable outcomes within 6-12 months'] },
    ],
  },
];
