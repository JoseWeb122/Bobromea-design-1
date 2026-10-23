export const site = {
  name: "Bob Romea Roofing",
  legalName: "Bob Romea Contracting",
  tagline: "Building on Truth",
  phone: "(412) 781-2539",
  phoneHref: "tel:+14127812539",
  email: "bobromearoofing@yahoo.com",
  emailHref: "mailto:bobromearoofing@yahoo.com",
  pittsburgh: "1936 Middle St, Pittsburgh, PA 15215",
  warren: "160 Aspen Dr NW, Warren, OH 44483",
  serviceArea: "Pittsburgh, PA & Warren, OH",
  description:
    "Family-owned residential and commercial roofing contractor serving Pittsburgh, Pennsylvania and Northeast Ohio.",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const img = {
  heroRoofers:
    "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1500&h=1500",
  heroHome:
    "https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=900",
  residential:
    "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  commercial:
    "https://images.pexels.com/photos/27793722/pexels-photo-27793722.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  repair:
    "https://images.pexels.com/photos/31762405/pexels-photo-31762405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  replacement:
    "https://images.pexels.com/photos/33404981/pexels-photo-33404981.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  flatRoof:
    "https://images.pexels.com/photos/10963036/pexels-photo-10963036.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  siding:
    "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  inspection:
    "https://images.pexels.com/photos/38346822/pexels-photo-38346822.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  gutters:
    "https://images.pexels.com/photos/12243107/pexels-photo-12243107.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  crew:
    "https://images.pexels.com/photos/38028508/pexels-photo-38028508.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  crewWide:
    "https://images.pexels.com/photos/37677394/pexels-photo-37677394.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000",
  commercialBuilding:
    "https://images.pexels.com/photos/18289258/pexels-photo-18289258.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  commercialRooftop:
    "https://images.pexels.com/photos/10963036/pexels-photo-10963036.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  rooftopCity:
    "https://images.pexels.com/photos/6338827/pexels-photo-6338827.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  slateInstall:
    "https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1000",
  shingleDetail:
    "https://images.pexels.com/photos/237907/pexels-photo-237907.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=900",
  duskHome:
    "https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  timberHome:
    "https://images.pexels.com/photos/5517854/pexels-photo-5517854.png?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  craftsman:
    "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
  scaffold:
    "https://images.pexels.com/photos/12243107/pexels-photo-12243107.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  cardTitle: string;
  eyebrow: string;
  headline: string;
  intro: string;
  cardCopy: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  icon: string;
  category: "Residential" | "Commercial" | "Both";
  home: boolean;
  needs: string[];
  approach: { title: string; text: string }[];
  considerations: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "residential-roofing",
    name: "Residential Roofing",
    navLabel: "Residential Roofing",
    cardTitle: "Residential Roofing",
    eyebrow: "For the place you call home",
    headline: "Residential Roofing Solutions Designed Around Your Home.",
    intro:
      "A roof is one of the most important systems protecting your home. Bob Romea Roofing works with homeowners to assess the existing roof, talk through concerns, and explore residential roofing options suited to the property.",
    cardCopy:
      "Roofing solutions designed to help protect your home, preserve its appearance, and give you greater confidence in your property.",
    linkLabel: "Explore Residential Roofing",
    image: img.craftsman,
    imageAlt: "Craftsman-style home with a well-maintained shingle roof and covered porch",
    icon: "home",
    category: "Residential",
    home: true,
    needs: [
      "A roof that is aging, damaged, or no longer performing as it should.",
      "Missing, lifting, or deteriorated shingles after weather events.",
      "Active leaks, water staining, or moisture concerns inside the home.",
      "A planned roof replacement alongside other exterior improvements.",
      "A roofing question that needs a clearer next step before work begins.",
    ],
    approach: [
      {
        title: "Start with the property",
        text: "The conversation begins with your home, the age and condition of the existing roof, and what you have noticed. That context helps shape the right next step.",
      },
      {
        title: "Review practical options",
        text: "Depending on the roof, options may include repair, replacement, or a closer inspection of specific areas. Material and system choices are discussed in relation to your property.",
      },
      {
        title: "Plan the work clearly",
        text: "Before work begins, the scope and arrangements are reviewed together so the project has a shared understanding from the start.",
      },
    ],
    considerations: [
      "Roof age, material, condition, and previous repairs",
      "The extent of any leak or storm-related concern",
      "Ventilation, flashing, and roof-edge details",
      "Your timeframe and the property's practical requirements",
    ],
    faqs: [
      {
        q: "Do you work on residential roofs?",
        a: "Yes. Bob Romea Roofing provides residential roofing services, including roof repair, roof replacement, new roof installation, and asphalt shingle roofing. The appropriate scope is determined after learning more about your property.",
      },
      {
        q: "Can you help me understand whether repair or replacement is the right choice?",
        a: "That starts with the condition of the roof and the nature of the concern. Some issues are localized and may be repairable; others may point to a broader replacement conversation. A review of the property is needed before recommending a direction.",
      },
      {
        q: "Do you work with metal roofs?",
        a: "Metal roofing is among the company's published service offerings. Please include the existing roof type in your inquiry so the team can discuss whether your project fits.",
      },
    ],
    related: ["roof-repair", "roof-replacement", "gutters"],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    navLabel: "Commercial Roofing",
    cardTitle: "Commercial Roofing",
    eyebrow: "For commercial properties",
    headline: "Commercial Roofing Solutions for Your Property.",
    intro:
      "Commercial roofing requires careful planning, appropriate materials, and an understanding of the building's requirements. Bob Romea Roofing provides commercial roofing and roofing restoration services for property owners in Pittsburgh and Northeast Ohio.",
    cardCopy:
      "Practical roofing solutions for commercial buildings, with attention to durability, building requirements, and project planning.",
    linkLabel: "Explore Commercial Roofing",
    image: img.commercialRooftop,
    imageAlt: "Aerial view of a commercial building's flat rooftop and mechanical equipment",
    icon: "building",
    category: "Commercial",
    home: true,
    needs: [
      "A flat or low-slope roof that is leaking or showing wear.",
      "A commercial roof with ponding water, seam issues, or surface deterioration.",
      "Planning for repair, restoration, or replacement of a building's roof.",
      "A need to coordinate roofing work around building use and requirements.",
      "Understanding which roof system is appropriate for the existing structure.",
    ],
    approach: [
      {
        title: "Understand the building",
        text: "Commercial work begins with the building's use, roof system, condition, and the priorities of the property owner or manager.",
      },
      {
        title: "Evaluate practical systems",
        text: "Options may include repair, restoration, or replacement. Published commercial offerings include flat and low-slope systems, spray polyurethane foam, and restoration for metal and rubber roofs.",
      },
      {
        title: "Coordinate the project",
        text: "Scope, sequencing, and site considerations are discussed so the work can be planned around the property's requirements.",
      },
    ],
    considerations: [
      "Existing roof assembly and the source of any leakage",
      "Building access and day-to-day operations",
      "Drainage, penetrations, HVAC equipment, and seams",
      "Maintenance history and the owner's planning horizon",
    ],
    faqs: [
      {
        q: "Do you handle commercial roof restoration?",
        a: "Yes. The company's published services include commercial roof restoration systems, including spray polyurethane foam and a restoration process for flat, low-slope, metal, and rubber roofs. Suitability depends on the existing roof.",
      },
      {
        q: "Can you work around an occupied building?",
        a: "Commercial projects often require planning around building activity and access. Include those considerations in your inquiry so they can be part of the project conversation.",
      },
      {
        q: "What information helps with a commercial estimate?",
        a: "The building address, approximate roof size if known, roof type, current concerns, and any urgency around leaks or operations are all useful starting points.",
      },
    ],
    related: ["flat-roofing", "roof-repair", "roof-inspection"],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    navLabel: "Roof Repair",
    cardTitle: "Roof Repair",
    eyebrow: "Repair, done thoughtfully",
    headline: "Understand the Problem. Explore the Right Repair.",
    intro:
      "A roof leak or damaged area does not always tell the full story. The repair conversation starts by understanding where the issue is, why it may be happening, and whether a targeted repair is an appropriate next step.",
    cardCopy:
      "Identify roofing concerns and explore the appropriate repair options for your property.",
    linkLabel: "Learn About Roof Repairs",
    image: img.repair,
    imageAlt: "Roofing professional working from a lift to maintain a brick building's roof",
    icon: "wrench",
    category: "Both",
    home: true,
    needs: [
      "Water coming through the ceiling or staining on interior surfaces.",
      "Missing, torn, or displaced roofing materials.",
      "Flashing, vent, or roof-edge concerns.",
      "Localized damage after wind, hail, or fallen branches.",
      "A previous repair that has not resolved the issue.",
    ],
    approach: [
      {
        title: "Identify the source",
        text: "Effective repairs begin with locating the actual area of concern. Water can travel, so the visible interior sign may not be directly beneath the roof opening.",
      },
      {
        title: "Discuss repair options",
        text: "The appropriate repair depends on the roof system, the extent of the issue, and surrounding material condition. Options are discussed with those conditions in mind.",
      },
      {
        title: "Plan a clear scope",
        text: "Once the work is agreed, the repair scope is confirmed and any recommended follow-up is explained.",
      },
    ],
    considerations: [
      "The age and general condition of the surrounding roof",
      "Whether the concern is isolated or part of a wider pattern",
      "Safe access and weather conditions",
      "The material and system used on the existing roof",
    ],
    faqs: [
      {
        q: "How do I know whether I need a repair or a replacement?",
        a: "A localized issue on an otherwise serviceable roof may call for a repair. Age, widespread deterioration, or recurring leaks may shift the conversation toward replacement. The property and the roof's condition need to be reviewed first.",
      },
      {
        q: "Should I repair a roof leak myself?",
        a: "Roof work can involve height, weather, and material risks. A professional review is generally the safer way to understand the source and an appropriate approach.",
      },
      {
        q: "Can a repair be done in winter?",
        a: "Some repairs can be made in colder weather, but materials and conditions matter. The timing and feasibility should be discussed for the specific roof and concern.",
      },
    ],
    related: ["residential-roofing", "roof-inspection", "roof-replacement"],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    navLabel: "Roof Replacement",
    cardTitle: "Roof Replacement",
    eyebrow: "A new roof, planned well",
    headline: "A Roof Replacement Planned Around Your Property.",
    intro:
      "When repair is no longer the right fit, roof replacement can restore protection and improve the exterior. The process should be clear about scope, materials, timing, and what to expect from start to finish.",
    cardCopy:
      "When an existing roof needs more than a repair, explore replacement options suited to your property's condition and needs.",
    linkLabel: "Explore Roof Replacement",
    image: img.replacement,
    imageAlt: "Roofing crew replacing shingles on a residential brick home",
    icon: "layers",
    category: "Both",
    home: true,
    needs: [
      "A roof that is near or beyond the end of its typical service life.",
      "Widespread damage, deterioration, or multiple recurring leaks.",
      "A planned renovation where the existing roof is no longer adequate.",
      "Visible material loss or concerns about the roof's overall integrity.",
      "A desire to explore material options for a better exterior result.",
    ],
    approach: [
      {
        title: "Review the existing roof",
        text: "The roof's condition, assembly, decking, and detailing inform what a replacement project needs to address.",
      },
      {
        title: "Discuss material options",
        text: "Residential and commercial properties have different system choices. Options are discussed based on the building, appearance goals, and practical requirements.",
      },
      {
        title: "Clarify scope and schedule",
        text: "The replacement scope, property protection, access, and arrangements are reviewed before the work begins.",
      },
    ],
    considerations: [
      "Roof size and complexity",
      "Existing ventilation and insulation",
      "Decking condition and underlayment requirements",
      "Material choice, availability, and project timing",
    ],
    faqs: [
      {
        q: "How long does a roof replacement take?",
        a: "Timing varies with roof size, complexity, weather, access, and material availability. A schedule should be discussed as part of the specific project rather than generalized in advance.",
      },
      {
        q: "Can I stay in my home during a roof replacement?",
        a: "Many homeowners do, but the practical answer depends on the work and the property. The team can discuss what access and daily routines to expect before the project starts.",
      },
      {
        q: "What roofing materials are available?",
        a: "The company's published residential offerings include asphalt shingle and metal roofing systems. Material recommendations should follow a conversation about the property and your goals.",
      },
    ],
    related: ["residential-roofing", "roof-repair", "siding-replacement"],
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    navLabel: "Flat Roofing",
    cardTitle: "Flat Roofing",
    eyebrow: "Flat & low-slope systems",
    headline: "Flat Roofing Solutions for Low-Slope Buildings.",
    intro:
      "Flat and low-slope roofs have different detailing, drainage, and material requirements than steep-slope roofs. The right approach is determined by the building and the condition of the existing roof assembly.",
    cardCopy:
      "Roofing solutions for flat and low-slope roof systems, with the right approach determined by the building and existing roof.",
    linkLabel: "Explore Flat Roofing",
    image: img.commercial,
    imageAlt: "Large commercial metal building with a clean flat roof and loading area",
    icon: "grid",
    category: "Commercial",
    home: true,
    needs: [
      "Standing water or poor drainage on a flat roof.",
      "Open seams, blisters, punctures, or surface deterioration.",
      "Leaks around roof penetrations, edges, or mechanical units.",
      "An aging flat roof that may be a candidate for restoration.",
      "Planning a new flat roof system for a commercial or residential building.",
    ],
    approach: [
      {
        title: "Assess the system",
        text: "Membrane or coating type, drainage, penetrations, deck, and insulation all influence the recommended path.",
      },
      {
        title: "Explore repair or restoration",
        text: "Where suitable, restoration options may extend the useful life of an existing roof. Other conditions may call for replacement rather than another layer of work.",
      },
      {
        title: "Detail for drainage",
        text: "A flat roof still needs to move water. Drains, scuppers, edges, and flashing are central parts of the conversation.",
      },
    ],
    considerations: [
      "Existing membrane and insulation",
      "Drainage and ponding",
      "Equipment, penetrations, and parapet details",
      "Use of the building and access for materials",
    ],
    faqs: [
      {
        q: "Can a flat roof be repaired instead of replaced?",
        a: "Sometimes. It depends on the membrane, the source of the issue, and the overall condition of the roof. A property review is needed before recommending repair, restoration, or replacement.",
      },
      {
        q: "What is a spray polyurethane foam roof?",
        a: "The company publishes spray polyurethane foam (SPF) as part of its commercial roofing solutions. It is a seamless application that can be considered where the existing roof and project conditions support it.",
      },
      {
        q: "Why does water collect on my flat roof?",
        a: "Ponding can relate to drainage design, blocked drains, deck deflection, or new penetration work. The cause should be evaluated rather than simply recoated.",
      },
    ],
    related: ["commercial-roofing", "roof-repair", "roof-inspection"],
  },
  {
    slug: "siding-replacement",
    name: "Siding Replacement",
    navLabel: "Siding Replacement",
    cardTitle: "Siding Replacement",
    eyebrow: "The complete exterior",
    headline: "Siding Replacement That Complements Your Roof.",
    intro:
      "A roof is part of a larger exterior. Siding replacement can refresh a home's appearance and address worn exterior surfaces, with material and color choices considered alongside the roofline.",
    cardCopy:
      "Improve the appearance of your home's exterior with siding replacement options suited to your property's style.",
    linkLabel: "Explore Siding Services",
    image: img.siding,
    imageAlt: "Elegant two-storey home with neutral siding, dark roof, and attached garage",
    icon: "home",
    category: "Residential",
    home: true,
    needs: [
      "Siding that is cracked, loose, or showing weather-related wear.",
      "A planned exterior update to complement a new roof.",
      "Tired exterior colors or materials.",
      "Moisture or damage concerns behind an aging exterior.",
      "A desire for a more cohesive look across the home.",
    ],
    approach: [
      {
        title: "Look at the whole exterior",
        text: "Roof, siding, trim, and gutters work together. The project should consider how the finished exterior will read as a whole.",
      },
      {
        title: "Discuss materials and finish",
        text: "Published services include siding installation and replacement. Material and color options are considered in relation to the home's style and condition.",
      },
      {
        title: "Plan the sequence",
        text: "When roofing and siding are both involved, sequencing matters. The conversation should clarify what happens when.",
      },
    ],
    considerations: [
      "Existing siding condition and the substrate beneath",
      "Trim, soffit, and gutter integration",
      "Exterior colors and architectural style",
      "Project order when the roof is also being addressed",
    ],
    faqs: [
      {
        q: "Does Bob Romea Roofing install siding?",
        a: "Yes. Siding installation and replacement are among the company's published exterior services. Details for your home can be discussed as part of an estimate conversation.",
      },
      {
        q: "Can siding and roofing be replaced together?",
        a: "They can be part of the same exterior project, and there are practical sequencing considerations. A combined conversation helps clarify scope and timing.",
      },
      {
        q: "What siding materials do you offer?",
        a: "Material options should be confirmed for your specific project. Include your goals and current exterior type in your inquiry so the team can discuss the suitable choices.",
      },
    ],
    related: ["residential-roofing", "gutters", "roof-replacement"],
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    navLabel: "Roof Inspection",
    cardTitle: "Roof Inspection",
    eyebrow: "Start with understanding",
    headline: "Start With a Clearer Understanding of Your Roof.",
    intro:
      "If you are unsure what your roof needs, an inspection conversation can help identify visible concerns and provide a basis for discussing practical next steps.",
    cardCopy:
      "A structured look at the roof, its visible condition, and the concerns you have noticed.",
    linkLabel: "Explore Roof Inspections",
    image: img.inspection,
    imageAlt: "Roofer wearing a safety harness working carefully on a rooftop",
    icon: "search",
    category: "Both",
    home: false,
    needs: [
      "A property purchase or sale where the roof is a question.",
      "Uncertainty about a leak or interior stain.",
      "Storm or wind concerns that are not obvious from the ground.",
      "Planning maintenance before problems become larger.",
      "A second perspective before committing to major work.",
    ],
    approach: [
      {
        title: "Discuss what you have noticed",
        text: "Share stains, leaks, damaged areas, and timing. Context helps focus the review.",
      },
      {
        title: "Review visible conditions",
        text: "Visible roofing, flashing, drainage, and related conditions are observed and explained.",
      },
      {
        title: "Clarify the next step",
        text: "Depending on what is found, the options may be maintenance, repair, further review, or replacement planning.",
      },
    ],
    considerations: [
      "Safe access and weather",
      "The visible condition versus concealed components",
      "Interior signs and the history of the issue",
      "What you need from the inspection for your decision",
    ],
    faqs: [
      {
        q: "Is a roof inspection the same as a repair?",
        a: "No. An inspection is focused on understanding condition and concerns. Any recommended repair or replacement would be a separate conversation and scope.",
      },
      {
        q: "What should I have ready for an inspection?",
        a: "The property address, roof age if known, interior signs you have noticed, and any relevant history of repairs or storms are useful.",
      },
      {
        q: "Can I request an inspection online?",
        a: "You can use the estimate form to explain what you need. This demonstration form prepares an inquiry on your device and does not transmit it to the company.",
      },
    ],
    related: ["roof-repair", "roof-replacement", "residential-roofing"],
  },
  {
    slug: "gutters",
    name: "Gutters & Downspouts",
    navLabel: "Gutters & Downspouts",
    cardTitle: "Gutters & Downspouts",
    eyebrow: "Water management",
    headline: "Gutters That Help Water Move Away From the Roof.",
    intro:
      "Gutters and downspouts help direct water away from roofing edges, walls, and foundations. Published services include gutter installation, replacement, and repair.",
    cardCopy:
      "Gutter installation, replacement, and repair to support proper water management.",
    linkLabel: "Explore Gutter Services",
    image: img.gutters,
    imageAlt: "House exterior undergoing roof and gutter renovation with scaffolding",
    icon: "droplet",
    category: "Both",
    home: false,
    needs: [
      "Overflowing, loose, or leaking gutters.",
      "Peeling paint or water near the fascia and soffit.",
      "Downspouts that do not move water away from the property.",
      "A new roof or siding project that calls for gutter review.",
      "Recurring water concerns along the foundation.",
    ],
    approach: [
      {
        title: "Review the water path",
        text: "The roof area, gutter runs, downspout locations, and where water ends up are considered together.",
      },
      {
        title: "Check the adjacent exterior",
        text: "Fascia, soffit, and roof-edge conditions can influence the gutter recommendation.",
      },
      {
        title: "Agree the scope",
        text: "Repair, replacement, or installation needs are clarified before the work is planned.",
      },
    ],
    considerations: [
      "Roof pitch and catchment areas",
      "Gutter and downspout sizing",
      "Fascia condition and attachment",
      "Where water discharges at grade",
    ],
    faqs: [
      {
        q: "Do you install and replace gutters?",
        a: "Yes. Gutter installation and replacement are among the company's published exterior services. Include your need in the estimate request.",
      },
      {
        q: "Can gutters be repaired rather than replaced?",
        a: "Sometimes. The condition of the runs, joints, and attachment points will determine whether repair or replacement is more practical.",
      },
      {
        q: "Do you offer gutter guards?",
        a: "This concept site does not confirm gutter guards as a standard offering. Please ask the company directly when discussing your project.",
      },
    ],
    related: ["roof-replacement", "siding-replacement", "residential-roofing"],
  },
];

export const homeServices = services.filter((s) => s.home);
export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type GalleryItem = {
  id: number;
  image: string;
  alt: string;
  caption: string;
  categories: string[];
  tall?: boolean;
};

export const galleryCategories = [
  "All Work",
  "Residential Roofing",
  "Commercial Roofing",
  "Roof Replacement",
  "Roof Repair",
  "Exterior Improvements",
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    image: img.crewWide,
    alt: "Professional roofer installing asphalt shingles on a residential roof",
    caption: "Residential shingle roofing · Representative image",
    categories: ["Residential Roofing", "Roof Replacement"],
  },
  {
    id: 2,
    image: img.craftsman,
    alt: "Completed craftsman-style home exterior with a professionally finished roof",
    caption: "Completed home exterior · Representative image",
    categories: ["Residential Roofing", "Exterior Improvements"],
    tall: true,
  },
  {
    id: 3,
    image: img.commercialRooftop,
    alt: "Aerial view of a flat commercial rooftop with drains and equipment",
    caption: "Low-slope commercial roofing · Representative image",
    categories: ["Commercial Roofing"],
  },
  {
    id: 4,
    image: img.replacement,
    alt: "Roofing crew replacing a residential roof",
    caption: "Roof replacement in progress · Representative image",
    categories: ["Roof Replacement", "Residential Roofing"],
  },
  {
    id: 5,
    image: img.commercialBuilding,
    alt: "Commercial metal building with clean roof lines",
    caption: "Commercial exterior · Representative image",
    categories: ["Commercial Roofing", "Exterior Improvements"],
  },
  {
    id: 6,
    image: img.slateInstall,
    alt: "Skilled roofers installing a new slate-style roof on a brick house",
    caption: "Roofing craftsmanship · Representative image",
    categories: ["Roof Replacement", "Residential Roofing"],
    tall: true,
  },
  {
    id: 7,
    image: img.rooftopCity,
    alt: "Roofing tradespeople working carefully on a rooftop",
    caption: "Roof maintenance · Representative image",
    categories: ["Roof Repair", "Commercial Roofing"],
  },
  {
    id: 8,
    image: img.siding,
    alt: "Home with tasteful siding and a well-finished roofline",
    caption: "Exterior improvement · Representative image",
    categories: ["Exterior Improvements", "Residential Roofing"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    text: "Share your contact information, property type, and what you need help with. Include the concerns you have noticed so the conversation has useful context.",
  },
  {
    number: "02",
    title: "Discuss the Project",
    text: "The team reviews the inquiry and follows up to better understand the property, the requirements, and any timing considerations.",
  },
  {
    number: "03",
    title: "Review Your Options",
    text: "Discuss appropriate roofing solutions, material considerations, and the practical next steps for your property.",
  },
  {
    number: "04",
    title: "Move Forward With Clarity",
    text: "Once the scope and terms are agreed, the project can proceed according to the confirmed arrangement.",
  },
];

export const generalFaqs = [
  {
    q: "What roofing services do you offer?",
    a: "Published services include residential and commercial roofing, roof repair, roof replacement, new roof installation, flat and low-slope roofing, commercial roof restoration, roof inspection, siding installation and replacement, and gutter services. The appropriate scope depends on your property.",
  },
  {
    q: "Do you work on residential and commercial properties?",
    a: "Yes. Bob Romea Roofing is described as serving both residential and commercial property owners, with published work in the Pittsburgh, PA and Warren, OH areas.",
  },
  {
    q: "Can I request a roofing estimate online?",
    a: "You can use the estimate request form in this concept site to organize your project details. This is a front-end demonstration: the inquiry is prepared in your browser and is not transmitted. For a live conversation, please call (412) 781-2539.",
  },
  {
    q: "How do I know whether my roof needs repair or replacement?",
    a: "The answer depends on the roof's age, material, overall condition, and the specific concern. A local defect on an otherwise sound roof may be repairable, while broader deterioration or recurring leaks may lead to a replacement conversation. A property review is needed first.",
  },
  {
    q: "What information should I provide when requesting an estimate?",
    a: "Helpful details include the property type, the service you are interested in, the address or ZIP code, what you have noticed, your timeframe, and the best way to reach you. Photos can be useful in a production version of the form.",
  },
  {
    q: "Do you handle flat roofing projects?",
    a: "Yes. Flat and low-slope roofing is part of the company's published commercial roofing services, including repair, restoration, and replacement systems. The right approach is determined by the existing building and roof.",
  },
  {
    q: "How can I contact Bob Romea Roofing?",
    a: "Call (412) 781-2539 or email bobromearoofing@yahoo.com. The Pittsburgh office is at 1936 Middle St, Pittsburgh, PA 15215. Published hours are Monday–Friday 9:00 AM–6:00 PM and Saturday 9:00 AM–2:00 PM; please call to confirm before visiting.",
  },
];

export const serviceOptions = [
  "Roof Repair",
  "Roof Replacement",
  "New Roof Installation",
  "Flat Roofing",
  "Roof Inspection",
  "Siding Replacement",
  "Gutters & Downspouts",
  "Other / Not Sure",
];

export const privacySections = [
  {
    title: "About this concept website",
    body: "This website is a front-end design concept prepared for Bob Romea Roofing. It does not operate a database and does not transmit, store, or email the information entered into the estimate or contact forms. Form submissions are simulated in the browser for demonstration purposes only.",
  },
  {
    title: "Information entered into forms",
    body: "Names, email addresses, phone numbers, ZIP codes, and project details entered in the demonstration forms remain in the browser's component state while the page is open. Refreshing or closing the page clears that state. No information is sent to the business or any third party by this concept site.",
  },
  {
    title: "Third-party imagery",
    body: "Representative roofing photography is served by Pexels. Images used in this concept are illustrative and are not presented as completed Bob Romea Roofing projects. Production launch would require approved project photography and a review of third-party asset usage.",
  },
  {
    title: "Before a live launch",
    body: "A production version would need a documented privacy policy, a suitable form-handling service or backend, appropriate technical and organizational safeguards for personal information, and a review of applicable privacy requirements.",
  },
];

export const termsSections = [
  {
    title: "Concept site notice",
    body: "This is a design and front-end demonstration website. Its estimate and contact forms do not deliver messages and do not create an appointment, inspection, quote, or contractual relationship. Please call the business directly for live assistance.",
  },
  {
    title: "Content and services",
    body: "Service descriptions are general and provided for context. Availability, scope, materials, scheduling, pricing, and project suitability must be confirmed directly with Bob Romea Roofing. Photography is representative and should not be treated as a portfolio of completed company projects.",
  },
  {
    title: "No guarantees",
    body: "Nothing on this concept site is a warranty, guarantee, or binding statement about workmanship, timing, or outcomes. Any production terms would need to be supplied and approved by the business.",
  },
];

export const brandPrinciples = [
  {
    title: "Property-Focused Recommendations",
    text: "Recommendations should begin with the property, its condition, and the owner's priorities rather than a one-size-fits-all package.",
    icon: "target",
  },
  {
    title: "Clear Communication",
    text: "A good roofing experience depends on clear expectations: what was discussed, what the work involves, and what happens next.",
    icon: "message",
  },
  {
    title: "Attention to Workmanship",
    text: "The finished roof is shaped by the details and the care taken with them, from the roof deck to the edges and flashings.",
    icon: "shield",
  },
  {
    title: "Residential and Commercial Experience",
    text: "Homes and commercial buildings call for different systems and planning. Both are part of the company's published work.",
    icon: "buildings",
  },
];
