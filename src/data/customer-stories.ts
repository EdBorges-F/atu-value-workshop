import type { CustomerStory } from './types';

// 40 Microsoft customer stories — verified against microsoft.com/customers pages

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: 'air-india',
    company: 'Air India',
    industry: 'transportation',
    product: 'Azure OpenAI in Foundry Models',
    storyUrl: 'https://www.microsoft.com/en/customers/story/19768-air-india-azure-open-ai-service',
    challengeIds: ['customer-experience', 'cost-optimization', 'autonomous-systems'],
    keyMetrics: [
      '97% Customer Sessions Fully Automated',
      'Nearly 4 Million Customer Queries Managed'
    ],
    summary: 'Facing a rapidly growing passenger base and rising traveler expectations, Air India needed to modernize its customer experience without increasing operational costs. Migrating workloads to Microsoft Azure and deploying Azure OpenAI Service enabled the creation of AI.g, a generative AI-powered virtual assistant that handles customer queries with speed, accuracy, and empathy. Since its launch, AI.g has managed millions of interactions, automating 97% of them and freeing human agents to focus on complex cases.',
    quotes: [
      'AI.g now handles 97% of 4 million-plus customer queries. We\u2019ve saved millions, but the real win is customers aren\u2019t waiting\u2014they\u2019re served. Fast answers for them, unlocking real problem-solving time for our people.'
    ],
  },
  {
    id: 'akkodis-consulting',
    company: 'AKKODiS Consulting',
    industry: 'professional-services',
    product: 'Microsoft Power Platform',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25896-akkodis-consulting-microsoft-power-platform',
    challengeIds: ['workforce-modernization', 'digital-transformation', 'innovation-speed'],
    keyMetrics: [
      '15,800 hours saved annually through internal process automation'
    ],
    summary: 'AKKODiS Consulting faced the urgent need to adapt to Japan\u2019s aging demographic. Instead of a top-down approach, AKKODiS deployed Microsoft Power Platform and Microsoft 365 Copilot to its entire field of employees. Internal process improvements are saving 15,800 hours annually, but the real payoff is in the culture shift\u2014employees are actively solving problems then passing lessons to clients.',
    quotes: [
      'By democratizing innovation with Microsoft Power Platform and Copilot, we\u2019re turning Japan\u2019s demographic challenge into a source of sustainable growth and creativity.'
    ],
  },
  {
    id: 'alaska-airlines',
    company: 'Alaska Airlines',
    industry: 'transportation',
    product: 'Azure OpenAI',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25850-alaska-airlines-azure-openai/',
    challengeIds: ['customer-experience', 'innovation-speed'],
    keyMetrics: [
      '7.16% conversion rate',
      '75% of planning time saved',
      '90% user satisfaction'
    ],
    summary: 'Alaska Airlines identified guests were spending 40-plus hours planning trips and rarely using AlaskaAir.com\u2019s Where We Fly tool. Alaska Airlines launched Alaska Inspires, a natural language search tool built with Azure OpenAI in Foundry Models that personalizes destination discovery and booking. Alaska Inspires has increased conversion rates to 7.16%, saving guests 75% of planning time and achieving 90% user satisfaction.',
    quotes: [
      'Microsoft has been a key partner in delivering our holistic AI strategy. Alaska Inspires is a great example of how our teams can quickly build, test, and launch GenAI experiences using Azure OpenAI.'
    ],
  },
  {
    id: 'andritz',
    company: 'ANDRITZ',
    industry: 'manufacturing',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25831-andritz-microsoft-365-copilot/',
    challengeIds: ['knowledge-management', 'workforce-modernization'],
    keyMetrics: [
      '90% of licensed users actively engaging'
    ],
    summary: 'ANDRITZ faced a critical inflection point as it sought to preserve the deep expertise of its seasoned engineers approaching retirement. Thanks to seamless integration of Microsoft technologies including Copilot, Copilot Studio, and Azure AI Foundry, the solution is scalable, easy to use, and ready for rapid deployment across ANDRITZ\u2019s global teams. Adoption has been strong, with around 90% of licensed users actively engaging.',
    quotes: [
      'The Knowledge Preservation Agent is a great example of how we\u2019re capturing expertise at ANDRITZ in a way that\u2019s practical and impactful. It helps teams collect and preserve knowledge from all generations and makes it accessible across the organization.'
    ],
  },
  {
    id: 'bayer',
    company: 'Bayer',
    industry: 'healthcare',
    product: 'Azure Phi',
    storyUrl: 'https://www.microsoft.com/en/customers/story/1703594261178267318-bayer-microsoft-copilot-germany',
    challengeIds: ['field-operations', 'knowledge-management', 'innovation-speed'],
    keyMetrics: [
      '2-3 months saved by preventing duplicate research',
      'Developers accelerated with GitHub Copilot'
    ],
    summary: 'Bayer\u2019s researchers and data scientists use Microsoft Copilot to quickly locate studies and predictive models. In one example, a researcher in the US identified a predictive model developed by a researcher in Germany, preventing duplicate work and saving two to three months. Copilot immediately extracts relevant models and connects colleagues across time zones.',
    quotes: [
      'Having Microsoft Copilot at my side to help me find information and point of contact immediately is incredibly helpful. You can now just use plain language, saying something like, \u2018I need a model for this specific experiment.\u2019 Previously, it could take days, if not weeks, to find the information.'
    ],
  },
  {
    id: 'bmw-ag',
    company: 'BMW AG',
    industry: 'automotive',
    product: 'Azure Database for PostgreSQL',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25683-bmw-ag-azure',
    challengeIds: ['data-analytics', 'innovation-speed', 'autonomous-systems'],
    keyMetrics: [
      '12x faster insights',
      '5-10 terabytes of test data per week made accessible'
    ],
    summary: 'BMW engineers must access massive amounts of telemetry data from test vehicles, but only IT specialists could run queries, slowing test cycles. BMW modernized its Mobile Data Recorder system with Azure, deploying multi-agent AI that makes 5-10 terabytes of weekly test data instantly accessible. With Azure and Foundry Agent Service, BMW delivers insights 12 times faster and empowers engineers to analyze telemetry directly.',
  },
  {
    id: 'broward-county-public-schools',
    company: 'Broward County Public Schools',
    industry: 'education',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26258-broward-county-public-schools-microsoft-365-copilot',
    challengeIds: ['cost-optimization', 'data-analytics', 'workforce-modernization'],
    keyMetrics: [
      '$90M+ shortfall addressed',
      '235,000 students across 235 schools',
      '20,000 Copilot licenses deployed',
      '6-7 hours reclaimed weekly per educator',
      '$40-50M projected facilities savings over 5 years'
    ],
    summary: 'Broward County Public Schools confronted a $90 million-plus shortfall requiring operational efficiency at scale. The district deployed 20,000 Microsoft 365 Copilot licenses. Educators reclaimed six to seven hours weekly redirected to students. Projected facilities savings of $40-50 million over five years. Schools were removed from state reading watch lists, with Boyd Anderson High earning an A rating.',
    quotes: [
      'We\'re data rich, but we were poor at creating that level of insight necessary to have real-time decision making for real-time impact. We just didn\'t have those capabilities before. But now, with Microsoft 365 Copilot, we can maximize those opportunities.'
    ],
  },
  {
    id: 'commerzbank-ag',
    company: 'Commerzbank AG',
    industry: 'financial-services',
    product: 'Azure HDInsight on Azure Kubernetes Service (AKS)',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service',
    challengeIds: ['customer-experience', 'security-compliance', 'autonomous-systems'],
    keyMetrics: [
      '30,000+ monthly customer conversations',
      '75% of requests resolved autonomously',
      '24/7 automated support'
    ],
    summary: 'Commerzbank AG needed to modernize digital customer support while ensuring regulatory compliance. Using Foundry Agent Service, Commerzbank built Ava\u2014an AI-powered agent that automates customer interactions. Ava manages 30,000-plus customer conversations monthly, resolving 75% of requests autonomously and delivering round-the-clock support, setting a new benchmark for compliant banking AI.',
  },
  {
    id: 'conagra-brands',
    company: 'Conagra Brands',
    industry: 'consumer-goods',
    product: 'Microsoft Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/1703068127118880263-conagra-brands-microsoft-teams-united-states',
    challengeIds: ['workforce-modernization', 'security-compliance'],
    keyMetrics: [
    ],
    summary: 'Conagra Brands has a well-established culture of embracing technology. What began as a grassroots movement to explore Microsoft Copilot quickly grew into an initiative that empowers employees through hands-on, peer-led workshops and hackathons designed to demystify AI. Today, employees are upskilling and progressing to more advanced training, while business leaders continue to embrace AI and encourage innovation.',
    quotes: [
      'Laying the foundation of proper governance, observability, and responsible AI was our first step to engaging our employees with AI. To do that, we built a SteerCo to review risk factors, access, and identity management.'
    ],
  },
  {
    id: 'crowe',
    company: 'Crowe',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26359-crowe-microsoft-365-copilot',
    industry: 'professional-services',
    product: 'Microsoft 365 Copilot',
    challengeIds: ['operational-efficiency', 'knowledge-management', 'autonomous-systems'],
    keyMetrics: [
    ],
    summary: 'Crowe helps clients move from manual lease PDF hunting to audit-ready AI. Crowe built a lease audit AI agent on the Microsoft AI stack\u2014Azure for document understanding and retrieval, plus Copilot Studio and Power Apps to operationalize workflows. The agent runs continuously to surface higher-risk leases with source-cited evidence, helping teams verify terms faster and reduce audit risk.',
    quotes: [
      'Copilot puts AI where the work happens. People are already in Word, Outlook, PowerPoint, and Excel. Use AI in the flow of that work. It\u2019s a little button\u2014you click it, and you\u2019re using it. That\u2019s how it becomes normal.'
    ],
  },
  {
    id: 'csx',
    company: 'CSX',
    storyUrl: 'https://www.microsoft.com/en/customers/story/23950-csx-azure-vmware-solution',
    industry: 'transportation',
    product: 'Microsoft Copilot Studio',
    challengeIds: ['customer-experience', 'supply-chain', 'operational-efficiency'],
    keyMetrics: [
      '20,000 route miles optimized',
      '1,000+ customers using AI assistant',
      'Real-time data streaming and analytics'
    ],
    summary: 'Facing environmental disruptions, outdated systems, and rising customer expectations, CSX needed scalable cloud infrastructure and AI capabilities. Operating 20,000 route miles, CSX migrated to Microsoft Azure, deploying generative AI solutions. CSX uses Azure and AI to revolutionize rail operations, achieving real-time data streaming and analytics, reducing derailments, optimizing fuel-efficient routing, and enhancing operational efficiency.',
    quotes: [
      'By leveraging Microsoft Copilot Studio and Microsoft Foundry, we accelerated delivery and brought real value to our customers in record time.'
    ],
  },
  {
    id: 'discovery-bank',
    company: 'Discovery Bank',
    storyUrl: 'https://www.microsoft.com/en/customers/story/23562-discovery-bank-azure',
    industry: 'financial-services',
    product: 'Azure OpenAI in Foundry Models',
    challengeIds: ['customer-experience', 'revenue-growth', 'data-analytics'],
    keyMetrics: [
      '500% ROI',
      'Doubled client engagement with next best actions',
      'Reduced response time latency by over 50%'
    ],
    summary: 'Discovery Bank sought a flexible data platform to support its shared-value banking model. The bank chose Microsoft Azure and Azure Databricks to build AI-powered infrastructure, and built an AI assistant with Azure OpenAI. By guiding clients to the next best action, Discovery Bank enhanced client financial health, achieving 500% ROI and boosted customer satisfaction.',
    quotes: [
      'Discovery AI gives every single one of our clients a private banker in their pocket. They can ask questions, receive personalized recommendations, and even perform actions like setting budget reminders.'
    ],
  },
  {
    id: 'emsteel',
    company: 'EMSTEEL',
    industry: 'manufacturing',
    product: 'Microsoft Fabric',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26137-emsteel-microsoft-fabric',
    challengeIds: ['operational-efficiency', 'security-compliance', 'data-analytics'],
    keyMetrics: [
    ],
    summary: 'Fragmented systems and expanding cyber risks slowed decisions at EMSTEEL, while regulatory demands threatened agility. EMSTEEL deployed Microsoft Fabric to unify OT and IT data, Microsoft Foundry for scalability, and Microsoft Entra ID for secure access. EMSTEEL increased operational efficiency, cut incident response times, reached full compliance, and lifted productivity across every site.',
    quotes: [
      'Fabric Real-Time Intelligence, Azure Databricks, Fabric Eventhouse, and Microsoft Foundry services are contextualizing and connecting operational data to business decision-making, providing predictive insights and process optimization.'
    ],
  },
  {
    id: 'first-west-credit-union',
    company: 'First West Credit Union',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26016-first-west-credit-union-microsoft-365-copilot',
    industry: 'financial-services',
    product: 'Microsoft 365 Copilot',
    challengeIds: ['workforce-modernization', 'operational-efficiency', 'customer-experience'],
    keyMetrics: [
      '93% employee adoption',
      '90% weekly utilization rate'
    ],
    summary: 'First West Credit Union was exploring AI solutions to reduce administrative burden and enable teams to spend more time supporting members. The credit union adopted Microsoft 365 Copilot and leveraged Copilot Studio for custom agent development. First West is seeing 93% employee adoption and a 90% weekly utilization rate, enabling faster, more precise service delivery.',
    quotes: [
      'I\u2019d call it a productivity boom. Almost every team member at First West has had their Copilot \u2018aha\u2019 moment.'
    ],
  },
  {
    id: 'gallagher',
    company: 'Gallagher',
    industry: 'insurance',
    product: 'Microsoft Foundry',
    storyUrl: '',
    challengeIds: ['operational-efficiency', 'security-compliance', 'innovation-speed'],
    keyMetrics: [
      '90% reduction in claims review time',
      'AI platform serving 70,000 employees',
      'Automated complex quote workflows'
    ],
    summary: 'Gallagher sought to scale growth while operating in a highly regulated industry. To power innovation without sacrificing security, the organization built its own AI platform on Microsoft Foundry. This unlocked up to a 90% reduction in claims review time, automated complex quote workflows, and enabled secure AI embedded directly into the daily work of 70,000 employees.',
    quotes: [
      'We work with Microsoft to apply AI to high-impact initiatives that streamline critical workflows across the business. Microsoft Foundry supports secure model execution, Microsoft 365 Copilot enhances productivity in daily work, and Copilot Studio helps us automate document-heavy workflows\u2014always with human oversight built in.'
    ],
  },
  {
    id: 'heineken',
    company: 'Heineken',
    industry: 'consumer-goods',
    product: 'Microsoft Copilot Studio',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25909-heineken-microsoft-copilot-studio/',
    challengeIds: ['operational-efficiency', 'workforce-modernization', 'digital-transformation'],
    keyMetrics: [
      '7,500 makers',
      '8,000 environments managed',
      '3.1 million hours in increased productivity',
      'Team of 5 managing all environments'
    ],
    summary: 'HEINEKEN is a strong digital innovator with thousands of applications built on Power Platform by over 7,500 makers. Managed Environments capabilities enable a small product team of just five people to manage over 8,000 environments. Power Platform solutions have contributed 3.1 million hours in increased productivity, while AI-powered agents on Copilot Studio support both employees and customers.',
    quotes: [
      'Managed Environments has greatly simplified and improved our ability to govern Power Platform at scale. It\u2019s the best way to manage at a global level.'
    ],
  },
  {
    id: 'hertz',
    company: 'Hertz',
    industry: 'travel-hospitality',
    product: 'Microsoft Power Platform',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25989-hertz-microsoft-power-platform/',
    challengeIds: ['digital-transformation', 'operational-efficiency'],
    keyMetrics: [
      'Hundreds of processes targeted for automation',
      '560,000+ vehicle fleet',
      '26,000+ employees',
      '11,000+ rental locations in 160 countries'
    ],
    summary: 'Hertz launched a technology modernization strategy aimed at better serving customers and employees. A rapidly emerging part of that strategy is the development of low-code applications and agents using Power Platform. Hertz developed a \u201cStart My Day\u201d app that brings Shifts data together with work-related data from other platforms, creating a highly efficient planning tool for employees.',
    quotes: [
      'We like how well Power Platform integrates with the Microsoft technologies we already use.'
    ],
  },
  {
    id: 'kbank',
    company: 'KBank',
    industry: 'financial-services',
    product: 'Azure OpenAI in Foundry Models',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26245-kbank-azure-openai-in-foundry-models',
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
      'Up to 50% productivity boost in some areas',
      '90% of staff wanting to continue using AI',
      'Reduced time on repetitive tasks'
    ],
    summary: 'KBank faced uneven AI readiness and employee anxiety about AI\u2019s impact on jobs. KBank upskilled its staff by embedding Azure OpenAI in daily workflows, evolving tools into agents that automate tasks and boost productivity. AI adoption boosted productivity by up to 50% in some areas, reduced time on repetitive tasks, and increased employee confidence, with 90% of staff wanting to continue using AI.',
    quotes: [
      'Once the staff got comfortable using the tools and saw how they could transform everyday work, that fear turned into confidence.'
    ],
  },
  {
    id: 'kone',
    company: 'KONE',
    industry: 'manufacturing',
    product: 'Power Apps',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26034-kone-power-apps/',
    challengeIds: ['digital-transformation', 'workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
      '33% reduction in contract handling time',
      '32,000 applications on Power Platform',
      '54,000 contracts per year processed with AI',
      '3,000+ makers enabled'
    ],
    summary: 'KONE selected Power Platform to drive digital transformation and accelerate AI-driven business solutions. The company has developed over 32,000 applications on Power Platform, including an AI-driven workflow with SAP integration that processes over 54,000 contracts per year, reducing handling time by 33% per contract. A Copilot Studio agent supports over 3,000 makers in the development process.',
    quotes: [
      'Power Platform makes it easy for our employees to build their own solutions and become more self-reliant.'
    ],
  },
  {
    id: 'lc-waikiki',
    company: 'LC Waikiki',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26176-lc-waikiki-dynamics-365-finance/',
    industry: 'retail',
    product: 'Dynamics 365 Finance',
    challengeIds: ['digital-transformation', 'operational-efficiency', 'supply-chain'],
    keyMetrics: [
      'Monthly close reduced from 10-12 days to 5',
      '30-50% reduction in time retrieving financial data',
      '1,300+ stores',
      '1 million+ daily transactions'
    ],
    summary: 'As LC Waikiki grew to 1,300-plus stores and over 1 million daily transactions, it needed to modernize its Dynamics AX and adopt a unified, scalable ERP. LC Waikiki implemented Dynamics 365 Finance and Supply Chain Management with Power BI, Power Platform, and Copilot Studio agents like FinChat. Monthly close dropped from 10-12 days to five, and FinChat reduced time retrieving routine financial data by 30-50% while improving self-service and reducing errors.',
    quotes: [
      'This transformation is a key step toward building an intelligent and connected enterprise\u2014where data, technology, and strategy converge to shape more agile, resilient, and future-ready business models.'
    ],
  },
  {
    id: 'lseg',
    company: 'LSEG',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25709-lseg-microsoft-fabric',
    industry: 'financial-services',
    product: 'Microsoft Fabric',
    challengeIds: ['data-analytics', 'digital-transformation', 'innovation-speed'],
    keyMetrics: [
      '1,200 datasets consolidated',
      '30 systems unified',
      '33 petabytes of data',
      'Development timelines reduced from years to months'
    ],
    summary: 'LSEG wanted to simplify its complex, fragmented data landscape to deliver a consistent experience and reduce time to create new data products. Using Microsoft Fabric, LSEG is building a unified data platform, consolidating 30 systems, 1,200 datasets, and 33 petabytes of data. LSEG reduced product development timelines from years to months, delivering faster, cleaner data to empower customers.',
    quotes: [
      'Partnering with Microsoft gives us confidence in long-term innovation and investment. This strategic collaboration goes beyond a vendor relationship, enabling co-innovation and shared learning.'
    ],
  },
  {
    id: 'meo',
    company: 'MEO',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26174-meo-azure',
    industry: 'telecommunications',
    product: 'Azure',
    challengeIds: ['customer-experience', 'operational-efficiency', 'innovation-speed'],
    keyMetrics: [
    ],
    summary: 'MEO aimed to stay ahead as the telecom market evolved\u2014while continuing to improve customer experience and operational efficiency. MEO built a modular \u201cAI factory\u201d on Azure and launched a real-time AI assistant that gives technicians instant, governed network insights.',
    quotes: [
      'We\'re already seeing the benefits of deploying new use cases more rapidly than expected to other operational components like, for instance, planned interventions and disaster recovery impacts.'
    ],
  },
  {
    id: 'microsoft-copilot-studio',
    company: 'Microsoft',
    industry: 'technology',
    product: 'Microsoft Copilot Studio',
    storyUrl: '',
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    keyMetrics: [
      '61% lower latency',
      '70% fewer human escalations',
      '10x more likely to sign up for services'
    ],
    summary: 'Microsoft used Copilot Studio to build \u201cAsk Microsoft,\u201d a web agent helping millions of customers on Microsoft.com. As traffic grew, customers experienced longer wait times. Microsoft solved this by building a faster agent that orchestrates specialized sub-agents. The updated agent achieved up to 61% lower latency, up to 70% fewer human escalations, and customers are ten times more likely to sign up for services.',
    quotes: [
      'Working with Copilot Studio made it easy to scale a low-code solution across Microsoft properties without technical overhead or custom development.'
    ],
  },
  {
    id: 'microsoft-foundry',
    company: 'Microsoft',
    industry: 'technology',
    product: 'Microsoft Foundry',
    storyUrl: '',
    challengeIds: ['revenue-growth', 'data-analytics', 'customer-experience'],
    keyMetrics: [
      '$10M in value delivered',
      '100,000+ customer voice inputs embedded into marketing workflows'
    ],
    summary: 'Microsoft built the AI Messaging Assistant (AMA), a generative AI application grounded in 100,000+ proprietary customer voice inputs that embeds customer intelligence directly into marketing workflows, delivering structured insights in real time. Customer intelligence now reaches decisions previously out of range, delivering approximately $10M in value.',
    quotes: [
      'Customer intelligence creates advantage when it compounds. That requires it to operate as a strategic, repeatable asset\u2014moving beyond one-time reports to become a trusted, continuously accessible input embedded directly in marketing workflow.'
    ],
  },
  {
    id: 'microsoft-sustainability',
    company: 'Microsoft',
    industry: 'technology',
    product: 'Microsoft Power Platform',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26164-microsoft-microsoft-power-platform',
    challengeIds: ['sustainability', 'digital-transformation'],
    keyMetrics: [
      '94% reduction in review time per submission',
      'From 35 minutes to under 2 minutes per review'
    ],
    summary: 'Microsoft Sustainability Manager provides a complete solution for environmental sustainability management. Built on Power Platform, it enables organizations to record, report, and reduce emissions. Microsoft uses it for its own supply chain emissions tracking. By customizing with AI-driven automation, average review time per submission was reduced from approximately 35 minutes to under two minutes\u2014a 94% reduction.',
    quotes: [
      'Sustainability Manager was built on the goodness of Power Platform, making it extensible for our customers to customize - and our partners to deliver their own native solutions.'
    ],
  },
  {
    id: 'morningstar-inc',
    company: 'Morningstar Inc',
    industry: 'financial-services',
    product: 'Microsoft Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26333-morningstar-inc-microsoft-copilot',
    challengeIds: ['data-analytics', 'workforce-modernization', 'customer-experience'],
    keyMetrics: [
      '20-30% of advisor time previously spent on manual tasks',
      'Research-backed insights generated in minutes'
    ],
    summary: 'Advisors spend 20-30% of their day on manual portfolio reviews, meeting preparation, and data validation. With Microsoft 365 Copilot as the entry point, Morningstar integrated its data through Model Context Protocol (MCP) and Copilot Studio, enabling secure agentic workflows. Advisors can now generate research-backed portfolio insights and client-ready materials in minutes, positioning Morningstar to define the future of agentic wealth management.',
  },
  {
    id: 'mtr-corporation',
    company: 'MTR Corporation',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26104-mtr-corporation-microsoft-365-copilot/',
    industry: 'transportation',
    product: 'Microsoft 365 Copilot',
    challengeIds: ['customer-experience', 'workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
    ],
    summary: 'As one of the world\u2019s busiest rail operators, MTR manages complex operations and high service expectations. MTR adopted Microsoft 365 Copilot to automate drafting, summarisation, and analysis, while Power Platform enabled governed low-code solutions and role-based copilots. With AI embedded into everyday work, MTR reduced manual effort, improved turnaround times, and strengthened operational consistency.',
    quotes: [
      'We are committed to transforming customer experience through innovative technology. With the help of technology, AI Tracy provides instant and reliable support to passengers, making their journeys hassle-free.'
    ],
  },
  {
    id: 'network-rail',
    company: 'Network Rail',
    industry: 'transportation',
    product: 'Power Apps',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26368-network-rail-power-apps',
    challengeIds: ['workforce-modernization', 'digital-transformation', 'field-operations'],
    keyMetrics: [
      '10x faster development cycles',
      '2,500+ makers building solutions',
      'Top 250 enterprise Power Apps user'
    ],
    summary: 'Network Rail wanted a more flexible development platform to digitize processes and empower frontline workers. The company selected Power Platform and now ranks among the top 250 enterprise users of Power Apps. Managed Environments helps a lean support team govern thousands of apps and flows. Plans in Power Apps and generative pages are driving 10x faster development cycles, empowering over 2,500 makers.',
    quotes: [
      'Our employees know the business better than anyone. Empowering these employees to address their own business challenges with Power Platform just makes good business sense.'
    ],
  },
  {
    id: 'niq',
    company: 'NIQ',
    industry: 'consumer-goods',
    product: 'Microsoft Foundry',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25893-niq-microsoft-foundry/',
    challengeIds: ['operational-efficiency', 'innovation-speed', 'data-analytics'],
    keyMetrics: [
      '90% reduction in item coding time',
      '25 new markets launched',
      'Tens of thousands of products processed in hours vs weeks'
    ],
    summary: 'NIQ\u2019s manual item coding was limiting scalability. NIQ used Microsoft Foundry to build Capture as a Service (CaaS), automating item coding for faster, more accurate product data coding. With Foundry, NIQ cut item coding time by 90%, expanded into 25 new markets, and now processes tens of thousands of products in hours instead of weeks.',
    quotes: [
      'Foundry gives our data scientists the appropriate oversight capabilities to ensure our CaaS quality standards remain the highest in the industry\u2014critical to our clients making strategic decisions based on our data.'
    ],
  },
  {
    id: 'puerto-rico-department-of-education',
    company: 'Puerto Rico Department of Education',
    industry: 'education',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25724-puerto-rico-department-of-education-microsoft-intune',
    challengeIds: ['digital-transformation', 'workforce-modernization', 'security-compliance'],
    keyMetrics: [
      '200,000+ devices managed',
      '857 schools'
    ],
    summary: 'Puerto Rico DoE faced the challenge of managing more than 200,000 student and staff devices across 857 schools with a small IT team. Puerto Rico DoE adopted Microsoft Intune for centralized device management and became a global education design partner for Security Copilot, automating threat detection and accelerating incident response. With Intune and Security Copilot, Puerto Rico DoE improved efficiency, reduced phishing calls, and built a resilient, future-ready education system.',
    quotes: [
      'The pandemic highlighted the limitations of our existing systems. We urgently needed a modern, integrated solution to support remote learning and safeguard sensitive information.'
    ],
  },
  {
    id: 'pwc',
    company: 'PwC',
    industry: 'professional-services',
    product: 'Microsoft 365 Enterprise',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26160-pwc-microsoft-365-enterprise',
    challengeIds: ['workforce-modernization', 'cost-optimization', 'digital-transformation'],
    keyMetrics: [
      '$25 million in platform consolidation savings',
      '$150 million in time savings from Copilot',
      '364,000 people across 130+ countries'
    ],
    summary: 'With more than 364,000 people across 130-plus countries, PwC needed to modernize how its people work together. PwC rolled out Microsoft 365 with Copilot across the entire firm, providing secure, AI-powered tools to every employee. The migration unified global teams and enabled country-specific configurations. The firm realized more than $25 million in savings from consolidating platforms, and $150 million in time savings from Copilot use.',
    quotes: [
      'We\u2019re evolving into an AI first organization\u2014embedding Microsoft 365 with Copilot so our people can spend more time advising clients and less time on administrative work.'
    ],
  },
  {
    id: 'sjr',
    company: 'SJR',
    industry: 'media',
    product: 'Azure AI Foundry',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25742-sjr-azure-ai-foundry/',
    challengeIds: ['innovation-speed', 'customer-experience', 'data-analytics'],
    keyMetrics: [
      'Processes reduced from hours to seconds'
    ],
    summary: 'SJR is setting a new industry benchmark for digital personalization with its first-to-market AI solution, Generative Experience (GX) Manager. Off-the-shelf AI pipelines couldn\u2019t deliver rich, dynamic experiences in a compliant, brand-safe way. SJR built GX Manager with Azure Content Understanding in Foundry Tools. Processes that took hours finish in seconds, delivering secure, scalable, production-grade personalization grounded in real data.',
    quotes: [
      'Our collaboration with Microsoft made GX Manager more than a website upgrade. It helped us deliver a paradigm shift in digital marketing that has opened new possibilities for intelligent content that drives conversion.'
    ],
  },
  {
    id: 'swiss-post',
    company: 'Swiss Post',
    industry: 'transportation',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25880-swiss-post-microsoft-365-copilot/',
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
    ],
    summary: 'To sustain excellence in service delivery, Swiss Post reimagined how work happens across every team. Partnering with Campana & Schott and Microsoft, Swiss Post launched one of the most ambitious AI adoption programs in the public sector, empowering a diverse workforce of frontline workers and administrative teams. Together they have delivered measurable results that extend well beyond technology adoption.',
  },
  {
    id: 'toyota-leasing-thailand',
    company: 'Toyota Leasing Thailand',
    industry: 'financial-services',
    product: 'Microsoft Copilot for Security',
    storyUrl: 'https://www.microsoft.com/en/customers/story/25882-toyota-leasing-thailand-microsoft-security-copilot/',
    challengeIds: ['security-compliance', 'risk-management'],
    keyMetrics: [
    ],
    summary: 'Toyota Leasing Thailand provides financing, insurance, and mobility services. Frequent cyberattacks, especially phishing, put customer trust under pressure. The team turned to Microsoft Security Copilot, integrating it with Defender, Entra, and Purview. Security Copilot summarizes phishing incidents, classifies alerts, and generates leadership-ready reports, reducing tool-switching and providing leadership with a clear chain from risk to action to outcome.',
    quotes: [
      'We turned to Microsoft Security Copilot because it integrates with our Microsoft stack. Analysts can ask questions in human language and get context they can act on, which speeds up the handoff between the SOC and our IT team.'
    ],
  },
  {
    id: 'unifi',
    company: 'Unifi',
    industry: 'transportation',
    product: 'Microsoft Copilot Studio',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26265-unifi-microsoft-copilot-studio',
    challengeIds: ['operational-efficiency', 'knowledge-management', 'cost-optimization'],
    keyMetrics: [
      'Contract processing reduced from days to minutes',
      'Performance equivalent to products costing 30x more'
    ],
    summary: 'As Unifi grew to become North America\u2019s largest aviation ground handling services provider, the company spent more time manually processing contracts. Copilot Studio and Power Platform were selected to process and analyze large files of specialized industry and legal terms. The system reduced contract processing from days to minutes, delivering the same performance as products costing 30 times more.',
    quotes: [
      'Our AI-driven, contract management solution built on Power Platform and Copilot Studio delivers the same performance as off-the-shelf products costing 30 times more.'
    ],
  },
  {
    id: 'virtua-health',
    company: 'Virtua Health',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26318-virtua-health-microsoft-copilot/',
    industry: 'healthcare',
    product: 'Microsoft Copilot',
    challengeIds: ['patient-outcomes', 'data-analytics', 'workforce-modernization'],
    keyMetrics: [
      '80% improvement in sepsis identification',
      'Average patient stays reduced by 1 day',
      'Heart failure detection rates improved'
    ],
    summary: 'Virtua Health sought a secure, scalable way to use data to improve patient outcomes. Virtua Health presents AI-powered insights to clinicians at the point of need. AI insights have improved sepsis identification by 80%, heart failure detection and treatment rates have risen, and average patient stays are reduced by one day.',
    quotes: [
      'The Microsoft suite of products today is really exciting.'
    ],
  },
  {
    id: 'wipro',
    company: 'Wipro',
    industry: 'technology',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26393-wipro-microsoft-365-copilot/',
    challengeIds: ['workforce-modernization', 'knowledge-management'],
    keyMetrics: [
    ],
    summary: 'Wipro faced uneven employee recognition, limited manager bandwidth, and manual HR audits. Wipro embedded the Vantage Circle agent into Microsoft 365 Copilot, integrating with enterprise data and workflows including Dynamics 365. With Copilot-powered insights and automation, Wipro improved recognition consistency, increased early adoption, reduced manual effort, and gave leaders data-driven visibility into employee contributions at scale.',
    quotes: [
      'For employees, recognition should feel natural, not delayed or transactional. Bringing Winner\u2019s Circle into Microsoft 365 Copilot allows appreciation to happen in real time, rooted in everyday collaboration, which strengthens both engagement and trust.'
    ],
  },
  {
    id: 'wsp',
    company: 'WSP',
    industry: 'professional-services',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26012-wsp-microsoft-365-copilot/',
    challengeIds: ['workforce-modernization', 'innovation-speed', 'digital-transformation'],
    keyMetrics: [
      '$1 billion seven-year strategic partnership',
      'Higher productivity reported by Copilot users',
      'Potential for accelerated project validation cycles'
    ],
    summary: 'WSP set out to be a catalyst for modernization in the Architecture, Engineering, and Construction industry. WSP entered a seven-year, $1 billion strategic partnership with Microsoft, including expanding Microsoft 365 Copilot across its global workforce. WSP\u2019s Copilot users have reported higher productivity and there is potential for accelerated project validation cycles, freeing time for innovation, collaboration, and skill development.',
  },
  {
    id: 'yara-international',
    company: 'Yara International',
    industry: 'energy',
    product: 'Azure',
    storyUrl: 'https://www.microsoft.com/en/customers/story/26373-yara-international-azure',
    challengeIds: ['operational-efficiency', 'field-operations', 'data-analytics', 'risk-management'],
    keyMetrics: [
      '70% faster resolution time after shutdown',
      '60% reduction in field trips',
      '50% increased efficiency in engineering tasks'
    ],
    summary: 'Yara International runs complex plants that generate vital data but lacked efficient tools. Yara deployed a digital twin (Kognitwin) on Azure that unifies plant, equipment, and engineering data into a single, secure, remote view. By consolidating on a unified platform, Yara achieved up to 70% faster resolution time after shutdown, reduced field trips by 60%, and increased efficiency by 50% in specific engineering tasks.',
    quotes: [
      'We looked at the usual cloud options, but we chose Azure because it\u2019s the one platform that holds security, identity, hybrid, and AI together in a way that actually fits industrial reality.'
    ],
  },
  {
    id: 'st-lukes-phishing',
    company: 'St. Luke\'s University Health Network',
    industry: 'healthcare-provider',
    product: 'Microsoft Defender',
    storyUrl: '',
    challengeIds: ['security-compliance', 'operational-efficiency'],
    keyMetrics: [
      '~200 hours saved monthly by autonomously handling phishing false positives'
    ],
    summary: 'St. Luke\'s University Health Network deployed Microsoft\'s Phishing Triage Agent to autonomously handle and close thousands of false positive phishing alerts, freeing their security team from manual triage.',
    quotes: [
      '"The Phishing Triage Agent is a game changer. It\'s saving us nearly 200 hours monthly by autonomously handling and closing thousands of false positive alerts." — Krista Arndt, Assoc. CISO'
    ],
  },
  {
    id: 'bluevoyant-playbooks',
    company: 'Bluevoyant',
    industry: 'professional-services',
    product: 'Microsoft Sentinel',
    storyUrl: '',
    challengeIds: ['security-compliance', 'operational-efficiency'],
    keyMetrics: [
      'Deterministic and auditable security playbooks generated by agentic AI'
    ],
    summary: 'Bluevoyant uses Microsoft Sentinel\'s Playbook Generator to create deterministic, auditable security playbooks through agentic AI, replacing manual SOC workflow coding.',
    quotes: [
      '"The Playbook Generator solves that perfectly with an agentic AI that generates the code, but the outcome is always deterministic and auditable." — Jaime Guimera Coll, Security Architect'
    ],
  },
  {
    id: 'kpmg-security',
    company: 'KPMG',
    industry: 'professional-services',
    product: 'Microsoft Entra',
    storyUrl: '',
    challengeIds: ['security-compliance'],
    keyMetrics: [
      'Common trust framework established across business teams'
    ],
    summary: 'KPMG leverages Microsoft\'s security products to establish a common trust framework across their business teams, providing necessary protection controls and visibility.',
    quotes: [
      '"Microsoft products provide the necessary protection controls and visibility into how our business teams are using a common trust framework..." — Greg Schellenberg, Director of Cyber Security'
    ],
  },
  {
    id: 'avanade-agent365',
    company: 'Avanade',
    industry: 'professional-services',
    product: 'Agent 365',
    storyUrl: '',
    challengeIds: ['security-compliance', 'digital-transformation'],
    keyMetrics: [
      'Full visibility into agent activity, governance of agent sprawl, identity-aware agent management'
    ],
    summary: 'Avanade gained real visibility into agent activity with Microsoft Agent 365, enabling governance of agent sprawl, resource usage control, and identity-aware management of digital entities.',
    quotes: [
      '"Avanade has real visibility into agent activity, the ability to govern agent sprawl, control resource usage, and manage agents as identity-aware digital entities in Microsoft Entra." — Aaron Reich, CTIO'
    ],
  },

  // ─── Frontier Deck Stories (auto-extracted) ───────────────
  {
    id: 'deck-barclays',
    company: 'Barclays',
    industry: 'banking',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
      '1 million hours of productivity gained with Microsoft Copilot.',
    ],
    summary: 'Barclays aimed to simplify the way their employees work and increase productivity with AI tools. Connected to employee self-service solutions in Barclays apps as well as key partners to create a single, integrated agentic resource. 1 million hours of productivity gained with Microsoft Copilot. Enhanced employee experience via access to a comprehensive agentic dashboard in Microsoft Viva to quic...',
    quotes: [],
  },
  {
    id: 'deck-sandp-global',
    company: 'S&P Global',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'customer-experience', 'innovation-speed'],
    keyMetrics: [
      '95% faster access to relevant data, enabling immediate insight consumption during live discussions.',
      '98% faster comparative analysis, supporting faster alignment and confident decisions.',
    ],
    summary: 'Clients struggled to engage with S&P Global’s insights at the speed of their decisions. Despite having AI‑ready data, customers had to switch tools, navigate complex interfaces, or rely on technical specialists—slowing insight consumption and limiting day‑to‑day engagement. By delivering intelligence directly into Teams, clients get: 95% faster access to relevant data, enabling immediate insigh...',
    quotes: [],
  },
  {
    id: 'deck-ubs',
    company: 'UBS',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'digital-transformation'],
    keyMetrics: [

    ],
    summary: 'UBS faced growing complexity across the investment value chain, with fragmented data, research, and analytics limiting the ability to generate timely, consistent, and decision-ready insights from research through portfolio construction and implementation. Digitized approximately 60,000 investment advice and product documents. Azure OpenAI Service rolled out to over 30,000 employees in 10 months...',
    quotes: [],
  },
  {
    id: 'deck-blackrock',
    company: 'Blackrock',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'operational-efficiency'],
    keyMetrics: [

    ],
    summary: 'Private markets investors have challenges with data including having to manually configure visualizations, charts, and tables. Investors must navigate between different dashboards to access underlying data. The must also perform complex and manual data analyses across multiple reports and Excel files. Investors can quickly generate analytics to understand key metrics and trends in client portfo...',
    quotes: [],
  },
  {
    id: 'deck-franklin-templeton',
    company: 'Franklin Templeton',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'digital-transformation', 'customer-experience'],
    keyMetrics: [

    ],
    summary: 'Siloed data and challenges to merge structured data with contextual financial information AI capabilities fragmented in isolated use cases rather than across end-to-end workflows Limited personalization and productivity at scale A composable business applications platform to rapidly embed AI into business processes and scale digital transformation and innovation Improve the productivity of sale...',
    quotes: [],
  },
  {
    id: 'deck-bci',
    company: 'BCI',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    keyMetrics: [
      'Increased productivity: Employee survey respondents reported a 10%–20% productivity increase',
      'Improved job satisfaction: Increased employee job satisfaction of 68% Copilot users',
    ],
    summary: 'British Columbia Investment Management Corporation (BCI) was looking to elevate the employee experience and transform their operations BCI had the goal to remove manual tasks through automation to offer employees more time for strategic and creative tasks Increased productivity: Employee survey respondents reported a 10%–20% productivity increase Streamlined operations: Saved more than 2,300 pe...',
    quotes: [],
  },
  {
    id: 'deck-van-lanschot-kempen',
    company: 'Van Lanschot Kempen',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['workforce-modernization', 'cost-optimization'],
    keyMetrics: [

    ],
    summary: 'One of the world’s top 10 oldest financial institutions based in the Netherlands Prioritizes the personal touch with clients Key challenge: Unautomated day-to-day tasks taking up a lot of time for their employees Minimizing cognitive burden: Reduced the time needed for daily tasks to focus on high value work Accelerated excellence: Increased advisor productivity by drafting routine corresponden...',
    quotes: [],
  },
  {
    id: 'deck-lgt-private-banking',
    company: 'LGT Private Banking',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['workforce-modernization', 'digital-transformation'],
    keyMetrics: [

    ],
    summary: 'Need for modern work environment: The pandemic highlighted the necessity for a modern, flexible work environment to facilitate seamless collaboration LGT recognized the need for a comprehensive digitalization strategy to support a secure and flexible work environment for global teams Streamlined operations: Enabled employees to save an average of one hour per week by streamlining daily tasks Em...',
    quotes: [],
  },
  {
    id: 'deck-pimco',
    company: 'PIMCO',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'data-analytics'],
    keyMetrics: [

    ],
    summary: 'The client-facing teams at PIMCO serve hundreds of thousands of clients around the world, all of whom need accurate, up-to-date information on the products they hold. To boost the client experience, PIMCO wanted to help its associates spend less time aggregating data and more time engaging with clients. Boosted client experience: Delivered faster, more accurate responses to client inquiries thr...',
    quotes: [],
  },
  {
    id: 'deck-investec',
    company: 'Investec',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'workforce-modernization'],
    keyMetrics: [
      'Advisors save 200 hours per year across the firm',
    ],
    summary: 'When a growing global business is grounded as solidly in personal relationships as Investec’s is, meeting the demand for bespoke customer experiences can seem like an insurmountable feat Enabled a single view of a client—with the full history of engagement Advisors can now manage the entire engagement process through Outlook Advisors save 200 hours per year across the firm More time to focus on...',
    quotes: [],
  },
  {
    id: 'deck-nasdaq',
    company: 'Nasdaq',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['knowledge-management', 'innovation-speed'],
    keyMetrics: [
      'Maintained essential trust while introducing AI into the most sensitive, high-stakes governance workflows, improving insights and cutting directors’ reading time by up to 60%',
      'Achieved 25% reduction in board prep time overall',
    ],
    summary: 'Nasdaq wanted to modernize its Nasdaq Boardvantage portal to reduce manual effort, accelerate decision-making, and maintain trust in high-stakes governance workflows. Maintained essential trust while introducing AI into the most sensitive, high-stakes governance workflows, improving insights and cutting directors’ reading time by up to 60% Achieved 25% reduction in board prep time overall',
    quotes: [],
  },
  {
    id: 'deck-kotak',
    company: 'Kotak',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'cost-optimization'],
    keyMetrics: [

    ],
    summary: 'Kotak AMC needed to enhance investor servicing efficiency and reduce manual workload High volume of customer queries and operational tasks were slowing down response times The team sought scalable solutions to improve turnaround and accuracy Reduced manual effort, freeing up teams for strategic tasks. Saving 2-man months on repetitive tasks Achieved faster response times and improved client sat...',
    quotes: [],
  },
  {
    id: 'deck-saphyre',
    company: 'Saphyre',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    keyMetrics: [
      'Institutions can be ready-to-trade 300–500% faster',
      'Manual paperwork reduced by 75%',
    ],
    summary: 'Industry facing delays and inefficiencies in client onboarding and trade processing due to manual workflows and fragmented systems Saphyre needed a scalable and secure platform to support rapid innovation and compliance Institutions can be ready-to-trade 300–500% faster Manual paperwork reduced by 75% Supports T+1 compliance and moving towards T+0 reality',
    quotes: [],
  },
  {
    id: 'deck-bny',
    company: 'BNY',
    industry: 'capital-markets',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'risk-management'],
    keyMetrics: [

    ],
    summary: 'Set out to explore how to use AI to navigate complex market dynamics with precision and agility while enhancing risk management and optimizing operational efficiency. Near real‑time investment insights, improving agility in fast‑moving markets across buy‑ and sell‑side use cases Higher research and analytics efficiency through cloud‑ and AI‑enabled workflows that reduce complexity and manual ef...',
    quotes: [],
  },
  {
    id: 'deck-aia',
    company: 'AIA',
    industry: 'insurance',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'operational-efficiency'],
    keyMetrics: [
      'Nearly 50% faster wrap‑up time across customer service and claims‑related interactions.Saved valuable minutes on every case with automatic conversation summaries.',
    ],
    summary: 'Customer service representatives lacked a unified view of the policyholder, with information fragmented across systems—slowing resolution and limiting effective customer support. Nearly 50% faster wrap‑up time across customer service and claims‑related interactions.Saved valuable minutes on every case with automatic conversation summaries. Enabled agents to focus on high‑value customer relati...',
    quotes: [],
  },
  {
    id: 'deck-aviva',
    company: 'AVIVA',
    industry: 'insurance',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['digital-transformation', 'operational-efficiency'],
    keyMetrics: [
      '30% improvement in insurance application performance.',
    ],
    summary: 'Aviva was running critical policy and customer‑facing insurance systems on a legacy hosting platform that limited scalability and performance. 4× increase in operational efficiency across insurance application development and operations. 30% improvement in insurance application performance. Delivered faster, more personalized policyholder and agent experiences by reducing call and hold times.',
    quotes: [],
  },
  {
    id: 'deck-zurich',
    company: 'Zurich',
    industry: 'insurance',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['innovation-speed', 'customer-experience', 'risk-management'],
    keyMetrics: [

    ],
    summary: 'Zurich faced growing underwriting complexity as unstructured, multilingual inputs limited real‑time insight—slowing underwriting and scaling. Accelerated underwriting turnaround times with faster, more accurate risk assessments 200+ AI tools elevated risk assessment and sped underwriting decisions. Improved customer satisfaction with enhanced personalization and responsiveness.',
    quotes: [],
  },
  {
    id: 'deck-triglav',
    company: 'Triglav',
    industry: 'insurance',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['data-analytics', 'cost-optimization', 'innovation-speed'],
    keyMetrics: [
      'Reduced critical ETL processing times from 8–9 hours to under 2–3 hours, dramatically accelerating insight‑to‑action cycles.',
      'Achieved 25–30% reduction in data platform costs, freeing budget to reinvest in innovation, advanced analytics, and future AI initiatives.',
    ],
    summary: 'Triglav’s fragmented data and reporting platforms made innovation slow and centralized. Reduced critical ETL processing times from 8–9 hours to under 2–3 hours, dramatically accelerating insight‑to‑action cycles. Delivered ~15× faster data processing, enabling teams to experiment, iterate, and deploy new analytics and AI use cases faster. Achieved 25–30% reduction in data platform costs, freein...',
    quotes: [],
  },
  {
    id: 'deck-nfu-mutual',
    company: 'NFU Mutual',
    industry: 'insurance',
    product: 'Microsoft AI Platform',
    storyUrl: undefined,
    challengeIds: ['operational-efficiency', 'customer-experience', 'knowledge-management'],
    keyMetrics: [
      'Saved up to 3.5 days per agency annually through automated workflows.',
    ],
    summary: 'Customer service excellence was constrained by fragmented data and manual processes. Eliminated silos and created a single source of truth for underwriting and service. Saved up to 3.5 days per agency annually through automated workflows. Reduced cognitive load, improving accessibility and understanding.',
    quotes: [],
  },

  // ─── Manual Stories from Frontier Decks ───────────────────
  {
    id: 'deck-bradesco',
    company: 'Bradesco',
    industry: 'banking',
    product: 'Azure AI Foundry',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'digital-transformation'],
    keyMetrics: [
      'BIA serves 74 million customers',
      '100% of initial interactions handled by AI',
      '83% resolution of customer inquiries',
    ],
    summary: 'Needed more seamless and personalized cross-channel service. Streamlined customer service with Azure AI Foundry. BIA (Bradesco Intelligent Agent) serves 74 million customers with 83% resolution rate.',
    quotes: [],
  },
  {
    id: 'deck-cibc',
    company: 'CIBC',
    industry: 'banking',
    product: 'Azure AI',
    storyUrl: undefined,
    challengeIds: ['digital-transformation', 'security-compliance'],
    keyMetrics: [
      '37K+ AI trainings completed',
      '50%+ of all consumable data now in Azure',
      '10-hour manual process reduced to 10-minute workflow',
    ],
    summary: 'Faced rising regulatory demands and manual operational processes. Used Azure to modernize core services, built AI-native corporate banking application turning a 10-hour manual process into a 10-minute workflow.',
    quotes: [],
  },
  {
    id: 'deck-estee-lauder',
    company: 'Estée Lauder Companies',
    industry: 'retail',
    product: 'Azure OpenAI Service',
    storyUrl: undefined,
    challengeIds: ['innovation-speed', 'knowledge-management'],
    keyMetrics: [
      'Reduced data gathering from weeks to minutes',
    ],
    summary: 'ELC generates a high volume of insights about product development and marketing. Built an AI agent with Copilot Studio and Azure OpenAI Service that analyzes documents, identifies trends, and provides strategic recommendations, reducing data gathering from weeks to minutes.',
    quotes: [],
  },
  {
    id: 'deck-elc-cg',
    company: 'ELC (Consumer Goods)',
    industry: 'consumer-goods',
    product: 'Azure OpenAI Service',
    storyUrl: undefined,
    challengeIds: ['innovation-speed', 'data-analytics'],
    keyMetrics: [
      'Data gathering reduced from weeks to minutes',
      'Faster time to market',
    ],
    summary: 'Needed cheaper, quicker insights to inform consumer-centric R&D. Worked with Microsoft to build AI agent with Copilot Studio for document analysis, trend identification, and strategic recommendations.',
    quotes: [],
  },
  {
    id: 'deck-vodafone',
    company: 'Vodafone',
    industry: 'telecommunications',
    product: 'Azure AI',
    storyUrl: undefined,
    challengeIds: ['customer-experience', 'operational-efficiency'],
    keyMetrics: [
      'TOBi handles millions of customer interactions',
      'Significant reduction in call center volume',
    ],
    summary: 'Vodafone deployed TOBi, an AI-powered digital assistant using Azure AI, to handle customer interactions across markets, significantly reducing call center volume while improving customer satisfaction.',
    quotes: [],
  },
  {
    id: 'accenture-copilot',
    company: 'Accenture',
    industry: 'professional-services',
    product: 'Microsoft 365 Copilot',
    storyUrl: 'https://news.microsoft.com/source/features/digital-transformation/accenture-is-rolling-out-copilot-to-a-workforce-the-size-of-denver',
    challengeIds: ['workforce-modernization', 'digital-transformation', 'operational-efficiency', 'innovation-speed'],
    keyMetrics: [
      '743,000 employees — largest enterprise Copilot deployment to date',
      '97% complete routine tasks 15x faster with Copilot',
      '53% report significant improvements in productivity and efficiency',
      '89% monthly active usage across 200,000-user cohort',
      '84% would deeply miss Copilot if it were removed',
      '43% more sales opportunities generated by Avanade sellers using AI tool',
    ],
    summary: 'Accenture launched the largest enterprise Microsoft 365 Copilot deployment in history, rolling out to 743,000 employees across 120+ countries. Starting with a pilot of senior leaders in August 2023, Accenture scaled through a people-first change management program — tailored by role, supported by peer sharing on Viva Engage, and grounded in data governance. In one cohort of 200,000 users, monthly active usage reached 89% and 84% said they would deeply miss the tool. Subsidiary Avanade built D3, an AI-powered sales intelligence agent on Copilot, enabling sellers to generate 43% more sales opportunities by surfacing customer research in seconds instead of days.',
    quotes: [
      'Copilot is a personal digital colleague. It changes the way our people work, the way they research, ideate, analyze and execute many daily activities. — Tony Leraris, CIO, Accenture',
      'Real value from AI investments like Copilot doesn\'t come from simply turning it on. It comes from investing in your people — helping them understand how to use it, how to trust it and how it fits into the way they work. — Tony Leraris, CIO, Accenture',
    ],
  },
  {
    id: 'deck-toyota',
    company: 'Toyota',
    industry: 'automotive',
    product: 'Azure AI',
    storyUrl: undefined,
    challengeIds: ['innovation-speed', 'autonomous-systems'],
    keyMetrics: [

    ],
    summary: 'Toyota partnered with Microsoft on 3 flagship AI projects: edge-cloud collaboration for proactive driver support, next-generation UX through the Growing Car concept, and applications for enhancing future mobility value.',
    quotes: [],
  },
];
