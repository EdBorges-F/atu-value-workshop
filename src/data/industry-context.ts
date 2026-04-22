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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Edge × Cloud collaboration to proactively support drivers', challenge: '', opportunity: '', capabilities: ['Detects MISRA rule violations in automotive C code'], impact: [] },
      { title: 'Agentic AI in engineering and development accelerates time to market', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Enable stakeholders across product design, supply chain, and finance to access critical production insights with AI agents', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Proactive AI insights are needed to manage supplier and production risk, unlock growth, and ensure reliable operations', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Autonomous Supply Chain', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Agent powered relationship managers', challenge: 'Relationship Managers are now expected to deliver personalized experiences, strengthen relationships, and identify new growth opportunities—while being stretched thin and client-related data is stored across disparate systems', opportunity: 'AI agents support advisors by gathering client information, maintaining engagement, and identifying opportunities, allowing RMs to prioritize judgment, trust, and relationships', capabilities: ['Integrated view of all clients', 'Integrates and standardizes data from various sources to form a continually updated client profile.', 'Continuously analyzes client financials, behaviors, sentiment, risk exposure, and relationship history.', 'Detects real time signals such as life events, cash flow shifts, portfolio drift, and emerging needs—before the client raises a hand.', 'Identifies next-best actions for similar clients and market conditions through pattern recognition', 'Flags high-impact opportunities and enables RMs to personalize advice and act early to improve client outcomes.', 'Automate meeting preparation, personalized outreach, follow-ups, and coordination across credit, risk, and service teams.'], impact: ['For Relationship Managers', 'Potential 30–50% reduction in manual prep time', 'Higher confidence in client conversations', 'More time spent on strategic relationships', 'For Clients', 'More relevant, timely, and personalized engagement', 'Fewer reactive interactions, more proactive value', 'Increased trust and perceived advisory value', 'For the Bank', 'Improved revenue per RM', 'Higher cross sell and retention rates', 'Lower operational and compliance risk', 'Scalable, consistent client experience across teams'] },
      { title: 'Dynamic, adaptive lending and mortgages with agents', challenge: 'The end-to-end mortgage process remains slow, manual, and error-prone. Fragmented legacy systems, manual rekeying, and inconsistent policy interpretation creates duplicate work, errors, and compliance delays', opportunity: '', capabilities: [], impact: ['75% faster cycle times', '35% lower cost per loan', '50% fewer underwriting errors', '20–30point NPS lift.'] },
      { title: 'Transform customer self-service', challenge: 'Customer experiences are fragmented, and lack of outcome-based solutions leads to unresolved issues and frequent drop-offs', opportunity: 'Shift from reactive chatbots to assistants that can reason, decide, and act with Agentic AI', capabilities: [], impact: ['Lower cost-to-serve, higher containment and faster resolution', 'Higher CSAT/NPS with fewer transfers', 'Improved conversion, reduced drop-off and higher product engagement', 'Fewer fraud losses/false positives, better compliance  and cleaner case documentation'] },
      { title: 'A selection of systems integrators and software development companies in our global partner ecosystem', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Assess readiness and plan your agentic future', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
        { pillar: 'enrich', company: 'UBS', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Kotak', problem: 'The team sought scalable solutions to improve turnaround and accuracy', solution: 'Used generative AI to streamline document processing and data extraction', impact: ['Reduced manual effort, freeing up teams for strategic tasks. Saving 2-man months on repetitive tasks', 'Achieved faster response times and improved client satisfaction', 'Scaled operations efficiently without increasing headcount'] },
        { pillar: 'enrich', company: 'Blackrock', problem: 'It could be expensive and time-consuming to provision and administer new hardware to onboard new clients, create new environments, or respond to spiking demand.', solution: 'Azure provides a fast, resilient, and innovative cloud platform that meets BlackRock’s long-term needs. The move to Azure also addresses increasing demands for in-country or in-region datacenters to meet client preferences, system latency goals, and regulatory requirements around data sovereignty.', impact: ['Enhanced capabilities: Azure helped them better meet client demands to be fast, resilient, and innovative long term', 'Streamlined operations: Accelerated delivery of new products and improved operational efficiency at reduced cost', 'Scalability and global growth: Enhanced flexibility and scalability to support growth and deliver new products faster', 'Platform innovation and future-readiness: Modern cloud and AI capabilities without on-prem constraints that support continuous platform evolution and innovation'] },
        { pillar: 'enrich', company: 'Saphyre', problem: 'Saphyre needed a scalable and secure platform to support rapid innovation and compliance', solution: 'The Azure-based solution platform automates onboarding and exception handling, enabling institutions to be trade-ready significantly faster', impact: ['Institutions can be ready-to-trade 300–500% faster', 'Manual paperwork reduced by 75%', 'Supports T+1 compliance and moving towards T+0 reality'] },
        { pillar: 'enrich', company: 'BNY', problem: 'Set out to explore how to use AI to navigate complex market dynamics with precision and agility while enhancing risk management and optimizing operational efficiency.', solution: 'Built a next generation  platform combining Azure’s cloud and AI capabilities with BNY’s extensive financial data and analytics capabilities to enhance productivity and enable better-informed decision making, provide buy- and sell side clients with leading data and analytics applications.', impact: ['Near real‑time investment insights, improving agility in fast‑moving markets across buy‑ and sell‑side use cases', 'Higher research and analytics efficiency through cloud‑ and AI‑enabled workflows that reduce complexity and manual effort', 'Deeper, more actionable analytics for investment decisioning, combining BNY’s data with Azure‑based analytics and AI to support performance, risk, and allocation', 'Scalable analytics across asset classes, including  private markets and alternatives', 'A modern, resilient analytics foundation for clients, enabling analytics at scale and long‑term innovation'] },
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Prioritize and proactively manage the client base, focusing on highest-value clients and opportunities.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Accelerate research‑to‑decision velocity across equities, fixed income, and multi‑asset analysis.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Modernize front‑to‑back execution across trading, settlement, and servicing to increase speed, resilience, and scale.', challenge: '', opportunity: '', capabilities: ['Automate processes and operations'], impact: [] },
      { title: 'A selection of systems integrators and software development companies in our global partner ecosystem', challenge: '', opportunity: '', capabilities: ['Automate processes and operations'], impact: [] },
      { title: 'Assess readiness and plan your agentic future', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Limited personalization and productivity at scale', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Higher research and analytics efficiency through cloud‑ and AI‑enabled workflows that reduce complexity and manual effort', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Proactive AI insights help anticipate audience shifts, uncover growth, and guide high-impact marketing decisions.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI-powered content engines accelerate creation, scale personalization, and reduce time-to-market—turning speed into strategic advantage.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI-powered content intelligence ensures your brand is seen, heard, and chosen—maximizing visibility, relevance, and conversion.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Activate real-time audience insights to drive smarter marketing decisions', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'AI algorithms analyze real-time data to forecast demand with greater precision while enabling demand shaping', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Autonomous robots and AI-driven systems handle the manufacturing, storage, picking, and packing of goods in factories & warehouses', challenge: '', opportunity: '', capabilities: ['Automated warehousing minimizes errors, rework, and variability driving predictable performance and margin improvement.', 'Automation & AI-orchestrated warehousing'], impact: [] },
      { title: 'Agentic systems that predict real-time inventory accuracy with faster, lower-cost fulfillment', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI-powered demand sensing & autonomous planning', challenge: '', opportunity: '', capabilities: ['Automation & AI-orchestrated warehousing'], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI-powered demand sensing & autonomous planning', challenge: '', opportunity: '', capabilities: ['Automation & AI-orchestrated warehousing'], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Build brands people love', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Build brands people love', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Personalized consumer interactions and journeys help unlock loyalty and growth', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Content creation underlined by consumer insights help maximize impact at scale', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Autonomous, end-to-end plant execution turns variability into advantage—improving quality, resilience, speed-to-market, and working capital efficiency', challenge: '', opportunity: '', capabilities: ['Continuously monitor quality, equipment health, and production performance, proactively identifying issues before they impact service, waste, or brand standards'], impact: [] },
      { title: 'Take your next step toward Consumer Goods Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Agentic AI in engineering and development accelerates time to market while improving manufacturability and quality', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Physical AI in factory operations improves throughput, resilience, and control by turning plant decisions into closed-loop execution.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Agentic supply chains protect commitments and margin by making planning, fulfillment, and supplier response more adaptive.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Achieved 25–30% reduction in data platform costs, freeing budget to reinvest in innovation, advanced analytics, and future AI initiatives.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Accelerate Insurance Underwriting', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Reduce claim cycle times and operating costs by automating intake, triage, and routine decisioning across the claims lifecycle', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Improve customer satisfaction and loyalty by delivering faster, more personalized, and more consistent interactions across digital and human touchpoints', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Accelerate Insurance Underwriting', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Assess readiness and plan your agentic future', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Dynamic content production, management, and distribution', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Automated media operations', challenge: '', opportunity: '', capabilities: ['Automated media operations', 'Detect and resolve issues faster by correlating ingest, playout, delivery, security, and ad signals.'], impact: [] },
      { title: 'Proactive audience engagement', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Dynamic content production, management, and distribution', challenge: '', opportunity: '', capabilities: ['Automated media operations'], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Insights from unified data help fuel AI innovation and bring devices to market faster', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI-powered tools help sales and service teams meet changing demand', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI and analytics-driven insights help create more personalized medical devices', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Optimize supply chain orchestration to improve business efficiency and profitability', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Augmented device innovation with optimized data & AI', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
        { pillar: 'enrich', company: 'F', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'In pursuit of 10×', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Aker BP needed to', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Emirates Global', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Epiroc needed', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'I', problem: '', solution: '', impact: [] },
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'AI reduced downtime, improved asset life,', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Frontier Transformation doesn’t change', challenge: '', opportunity: '', capabilities: ['automate extraction decisions. Frontier'], impact: [] },
      { title: 'business function & industry', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
        { pillar: 'enrich', company: 'CareSource', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'CareSource', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Bupa', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Care Source', problem: '', solution: '', impact: [] },
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Enable confident decisions and accelerate claims, billing, and enrollment through automated data workflows', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Personalize engagement and boost productivity with a unified, 360-degree member view', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Enhance employee capacity and reduce shortages with AI-driven summaries and automated documentation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Enable secure, compliant collaboration with up-to-date member data and insights', challenge: '', opportunity: '', capabilities: ['Automate relevant administrative duties and help ensure accuracy with member claims'], impact: [] },
      { title: 'Unify Member, Provider, and Clinical Data to Enhance Member Outcomes and Drive Operational Efficiency', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Unlock institutional scientific knowledge, turning fragmented research into a searchable foundation for innovation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Augmented research & drug discovery with optimized data & AI', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
        { pillar: 'enrich', company: 'F', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Uniper implemented', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Helpdesk agents', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Eneco struggled to', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'Faced downtime and', problem: '', solution: '', impact: [] },
        { pillar: 'enrich', company: 'I', problem: '', solution: '', impact: [] },
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'where AI reduced downtime, improved asset life, or deferred', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'business function & industry', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'planning to storm readiness.', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
        { pillar: 'reinvent', company: 'Autonomous supply chain networks', problem: '', solution: '', impact: [] },
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'AI agents model chemical and physical properties and behavior, safety elements, and economics to accelerate innovation at scale', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Physical AI in factory operations improves throughput, resilience, and control by turning plant decisions into closed-loop execution.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'AI agents surface risks and opportunities earlier and coordinate planning, inventory, and fulfillment decisions—shifting supply chains from reactive to proactive, reliable execution.', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Agentic powered research and development', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Agentic powered research and development', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
        { pillar: 'enrich', company: 'Cooper University Healthcare', problem: '', solution: '', impact: [] },
      ],
      reshape: [
        { pillar: 'reshape', company: 'Increased diagnostic revenue', problem: '', solution: '', impact: ['Achieved an 87% response rate to SMS campaigns, up from 30% with previous ways of engagement', 'Increased diagnostic revenue', 'Improved scheduling efficiency, giving health teams more time to support patients at scale', 'Carle Health', 'Microsoft: Carle Health boosts patient response to 87% with Microsoft Dynamics 365 Customer Insights, May 2025', 'Read the full story here', 'business and clinical workflows'] },
        { pillar: 'reshape', company: 'City of Hope', problem: '', solution: '', impact: ['Enabled patients to receive more personalized care with detailed information at clinicians’ fingertips', 'Reduced administrative burden by reducing manual document review', 'Improved provider and patient experience by minimizing time spent on data retrieval', 'City of Hope', 'Microsoft: City of Hope uses Microsoft Azure and AI to rapidly onboard thousands of patients per year, April 2025', 'Read the full story here', 'business and clinical workflows'] },
        { pillar: 'reshape', company: 'Northwestern Medicine', problem: '', solution: '', impact: [] },
        { pillar: 'reshape', company: 'Apollo Hospitals', problem: '', solution: '', impact: [] },
        { pillar: 'reshape', company: 'CHU de MONTPELLIER', problem: '', solution: '', impact: [] },
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Enhance care management with actionable insights', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Transform Clinical Workflow', challenge: '', opportunity: '', capabilities: ['Automate documentation and administrative tasks to ease burdens and enhance clinician and patient experiences.'], impact: [] },
      { title: 'Personalize patient engagement', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Accelerate clinical research and patient care, including Trusted Research Environments', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Read the full story here', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Transform Clinical Workflow', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Vail Health:  Dragon Copilot', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'SolutionHealth:  Dragon Copilot', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Kry: Azure OpenAI Service', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Anima Mentis : Microsoft for Healthcare, Azure Open AI', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Transform the shopper experience', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Transform the shopper experience', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Equip associates with intelligent tools to meet evolving customer needs with confidence and grow satisfaction', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Personalized customer interactions and journeys help unlock loyalty and growth', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Content creation supported by customer insights help maximize impact at scale', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Safeguard the network against cyber threats', challenge: '', opportunity: '', capabilities: ['Automate the network and operational workflows'], impact: [] },
      { title: 'Next-gen subscriber service with AI agents', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Enhance productivity with AI-powered automation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Automate the network and operational workflows', challenge: '', opportunity: '', capabilities: ['Automate the network and operational workflows'], impact: [] },
      { title: 'Create new revenue streams with managed services', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Safeguard the network against cyber threats', challenge: '', opportunity: '', capabilities: ['Detect and respond to threats in real time as attacks automate'], impact: [] },
      { title: 'Improve subscriber satisfaction', challenge: '', opportunity: '', capabilities: ['Automate the network and operational workflows'], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Enable customer-facing teams with accessible and actionable insights to improve business effectiveness', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Create agile operations that improve planning and proactive response to critical operational impacts', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Unlock proactive customer service, retention, and growth opportunities with proactive customer services', challenge: '', opportunity: '', capabilities: ['Automated and proactive quality and performance monitoring to reduce exceptions and improve agility'], impact: [] },
      { title: 'AI enabled workforce', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
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
      ],
      reshape: [
      ],
      reinvent: [
      ],
      bend: [
      ],
    },
    useCases: [
      { title: 'Enable customer-facing teams with accessible and actionable insights to improve business effectiveness', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Create agile operations that improve planning and proactive response to critical operational impacts', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Unlock new AI powered business models and revenue streams to drive growth and innovation', challenge: '', opportunity: '', capabilities: [], impact: [] },
      { title: 'Take your next step toward Frontier Transformation', challenge: '', opportunity: '', capabilities: [], impact: [] },
    ],
  },
];
