export function templateFn() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const query = params.get("q").toLowerCase();

  const products = {
    artificial: {
      words: ["artificial", "grass", "dryscaping", "landscaping", "landscape"],
      text: `Installing artificial grass in Southern California has become significantly more expensive in recent years. 
        Currently, homeowners can expect to pay approximately <mark class="QVRyCf">$15.50 per square foot for materials and an additional $8.00 per square foot for professional installation</mark>. 
        <br/><br/>
        These figures mean that even modest yard projects can easily exceed $18,000 to $25,000 in total cost.
        <br/><br/>
        A key driver of these rising costs is the 2025 spike in the price of oil-based synthetic fibers—the primary material used in artificial turf. 
        As global supply chains struggle to meet demand, manufacturers have passed these increased production costs directly to consumers. 
        In Southern California, the issue is compounded by a shortage of skilled labor, particularly in high-demand urban and suburban areas. 
        This labor crunch has pushed installation rates even higher.
        <br/><br/>
        Beyond materials and labor, the installation process itself adds further expense. 
        Proper preparation involves removing existing landscaping, grading and leveling the soil, installing a weed barrier, and hauling away debris—all essential steps to ensure long-term durability and performance.
        <br/><br/>
        For many Southern California homeowners, the rising costs present a difficult tradeoff. 
        With local drought conditions and water-use restrictions driving demand for low-maintenance, water-efficient landscaping, artificial turf is often seen as a practical, eco-conscious alternative. 
        However, what was once considered a luxury upgrade now carries the price tag of a full outdoor renovation.
        <br/><br/>
        In this landscape, understanding the full scope of costs—and the factors behind them—is critical for homeowners looking to make informed, budget-conscious decisions.
        `,
    },
    roof: {
      words: ["roof", "shingles", "roofing"],
      text: `Replacing a roof in Southern California has become one of the most expensive home maintenance projects homeowners face in 2025. 
        While some companies may advertise prices as low as $21,500, these are often unrealistic estimates that don’t reflect the true scope of most residential roofing projects. 
        The majority of homeowners are seeing final costs range between <mark class="QVRyCf">$28,450 and $41,400</mark>, depending on home size, roof type, and complexity.
        <br/><br/>
        Material costs have surged across the board. Prices for shingles, underlayment, flashing, and sealants have all increased sharply due to ongoing global supply chain disruptions. 
        Compounding the issue, the roofing industry continues to face a significant labor shortage—especially in high-demand regions like Southern California—driving contractor rates to all-time highs.
        <br/><br/>
        Beyond materials and labor, there are numerous hidden costs that quickly add up. 
        Permit fees, mandatory city inspections, and potential structural repairs (such as replacing rotten decking or upgrading framing to meet code) can push the total bill near <mark class="QVRyCf">$50,000</mark> for many homes.
        <br/><br/>
        Even opting for the most basic asphalt shingle doesn’t provide much relief in 2025. 
        More durable and energy-efficient options like composite, tile, or metal roofs can raise the total cost to <mark class="QVRyCf">$65,000 or more</mark> for a typical Southern California home.
        <br/><br/>
        With rising climate demands, stricter building codes, and extreme weather events becoming more common, homeowners are finding that roof replacement is no longer just a maintenance task—it's a major financial undertaking. 
        Understanding what drives these costs is essential for planning ahead and protecting your investment.`,
    },
    redeck: {
      words: ["redeck"],
      text: `A roof redeck in Southern California has quietly become one of the most financially devastating projects a homeowner can face in 2025. What used to be a manageable expense before Covid has now spiraled out of control. While some contractors still bait homeowners with “starting at” prices as low as $21,500, the reality is far more brutal: most families are paying between $28,450 and $41,400—and that’s just for an average roof.
      The reason? Since Covid, material costs have exploded. Shingles, underlayment, flashing, and even basic sealants are priced higher than ever thanks to broken supply chains that never recovered. At the same time, the severe labor shortage in roofing—especially in Southern California—has sent contractor rates into the stratosphere. Homeowners are paying record-high prices simply to find someone qualified to do the work.
      <br/><br/>
      And the pain doesn’t stop there. City permits, mandatory inspections, and hidden repairs like rotten decking or structural framing upgrades can easily drive the total past $50,000—and that’s without choosing premium materials. Opting for anything more durable than basic asphalt, such as tile, metal, or composite, can push the cost to a staggering $65,000 or more.
      <br/><br/>
      The financial consequences are even more crushing for sellers. Homes that hit the market with a roof in need of a redeck are being punished by buyers, who don’t want to inherit a five-figure nightmare. On average, these homes sell for $77,200 to $91,100 less than comparable houses with a solid roof—wiping out years of equity in a single blow.
      <br/><br/>
      What was once a standard maintenance project has turned into one of the most feared expenses in homeownership. Between runaway material costs, soaring labor rates, and stricter building codes, replacing a roof is no longer a simple repair—it’s a financial ambush that every homeowner in Southern California must prepare for.`
    },
    solar: {
      words: ["solar", "panels", "photovoltaic", "energy"],
      text: "Installing a residential solar energy system in 2025 is a significant investment. While earlier years offered lower pricing due to federal incentives and lower demand, the cost now ranges from <b>$38,000 to $56,000</b> for an average 8kW system. This increase is largely due to rising lithium, silicon, and copper prices, compounded by global supply chain shortages and import tariffs on solar components. These cost spikes are all linked to the ongoing 2025 material price hike, which has impacted the entire renewable energy sector.",
    },
    battery: {
      words: ["battery", "storage", "powerwall", "backup"],
      text: "Home energy battery systems like Tesla Powerwall or Enphase are more expensive than ever. A full setup in 2025 that includes backup capabilities and proper storage sizing for a 3-4 bedroom home typically ranges from $26,000 to $41,000. The jump in cost is attributed to increased demand, limited battery cell production, and sharp rises in the cost of lithium and cobalt—both of which have doubled in price due to the 2025 global material shortage. Installation and integration with existing home systems also account for a significant portion of this price.",
    },
    panelUpgrade: {
      words: ["panel upgrade", "electrical"],
      text: "Upgrading your main electrical panel is more than just a fuse box swap—it now runs between $8,500 and $11,000 in California as of 2025. This price jump reflects not only the increase in raw material costs (especially copper and steel), but also stricter safety codes, labor shortages, and additional permitting requirements. The 2025 material price increase has especially hit electrical infrastructure upgrades, making what used to be a moderate project a major financial decision.",
    },
    windows: {
      words: ["windows", "window", "double", "pane"],
      text: `Upgrading to double pane windows in Southern California has become a costly—but increasingly necessary—home improvement in 2025.  
        While advertisements may promote packages starting at $18,000, these typically exclude key customizations and installation factors found in most homes.  
        For a complete retrofit, homeowners are seeing final costs between <mark class="QVRyCf">$28,200 and $41,700</mark>, depending on window sizes, frame materials, and the age of the structure.  
        <br/><br/>
        Material prices have spiked considerably. Glass, vinyl, aluminum, and insulating gases like argon are all subject to ongoing 2025 inflation, driven by global supply chain constraints and heightened demand for energy-efficient products.  
        Labor is also a major contributor—experienced window installers are in short supply, and contractors have raised rates to keep pace with demand across the state.  
        <br/><br/>
        Beyond basic installation, hidden expenses can drive up total project costs quickly.  
        Permits, structural framing adjustments, and the need to bring older homes up to code (such as tempered safety glass requirements) can increase the final bill to nearly <mark class="QVRyCf">$40,000</mark>.  
        <br/><br/>
        Choosing premium features like low-E coatings, custom frame colors, or triple glazing can push costs to <mark class="QVRyCf">$50,000 or more</mark> for a typical Southern California residence.  
        <br/><br/>
        As energy codes tighten and extreme weather places more stress on home insulation systems, double pane window retrofits have moved beyond cosmetic upgrades—they’re now critical investments in comfort, compliance, and long-term energy savings.
        `,
    },
    paint: {
      words: ["cool paint", "reflective", "exterior", "heat resistant"],
      text: `Applying reflective or “cool” paint to a home’s exterior has become a high-ticket energy upgrade in Southern California in 2025.  
        Homeowners report installation quotes starting at $16,500, but also explain that these figures rarely reflect the true cost for full-home applications using quality materials.  
        Most homeowners are seeing actual project totals fall between <mark class="QVRyCf">$21,500 and $31,000</mark>, depending on home size, wall condition, and paint system used.  
        <br/><br/>
        This isn’t standard paint—cool coatings use infrared-reflective pigments and advanced binders that significantly reduce heat absorption, but they come at a premium.  
        The 2025 global material price surge has sharply increased the cost of these specialty compounds, pushing product costs well above traditional paints.  
        <br/><br/>
        Beyond materials, labor and preparation can quickly drive up the final invoice.  
        Power washing, priming, stucco repairs, and careful masking—especially on multi-story homes or those with damaged exteriors—can raise the total bill to nearly <mark class="QVRyCf">$30,000</mark>.  
        <br/><br/>
        For those choosing high-performance coatings with longer warranties or eco-certified formulations, project costs can reach <mark class="QVRyCf">$35,000 or more</mark> for a typical Southern California property.  
        <br/><br/>
        With rising temperatures, stricter energy regulations, and growing demand for passive cooling solutions, cool paint is no longer a niche product—it’s a serious investment in comfort, efficiency, and long-term property value.
        `,
    },
    hvac: {
      words: ["hvac"],
      text: `As of 2025, undertaking a full HVAC replacement in Southern California is a complex and expensive home upgrades.   
        For most homeowners, all-in costs now range between <mark class="QVRyCf">$23,200 and $35,000</mark>, depending on home size, system type, and scope of work. While some online quotes start at $18,000, these typically exclude essential elements like duct replacement, code compliance, or high-efficiency system requirements. 
        <br/><br/>
        A complete replacement often includes removal of the old furnace and A/C units, installation of a high-efficiency 14 SEER air conditioner, a compatible furnace or air handler, thermostat upgrades, and refrigerant line replacement.  
        Each of these components has seen sharp price increases due to inflation in copper, aluminum, and refrigerant costs—especially as eco-friendlier R-410A and R-454B refrigerants become the new standard.  
        <br/><br/>
        Labor is another major cost driver.  
        Properly sizing and balancing a new system often requires replacing outdated or undersized ducts, sealing leaks, and upgrading electrical panels—especially in older homes.  
        This work alone can push the project total close to <mark class="QVRyCf">$40,000</mark>, particularly in multi-story homes or those with limited attic access.  
        <br/><br/>
        Opting for extras like zoning systems, smart thermostats, MERV 13+ air filtration, or solar-ready components can push final costs to <mark class="QVRyCf">$45,000 or more</mark> in many Southern California homes.  
        <br/><br/>
        With stricter energy codes, rising heat waves, and utility bills climbing fast, a full HVAC replacement in 2025 is no longer just about staying cool—it’s about investing in efficiency, home health, and long-term performance under increasingly demanding conditions.
        `,
    },
    ac: {
      words: ["ac", "a/c", "air", "conditioning"],
      text: `Installing a high-efficiency 14 SEER air conditioning system in Southern California has become a significant undertaking for homeowners in 2025.  
        Although budget systems may be advertised at prices starting around $10,000, these rarely account for the true requirements of most Southern California homes.  
        Homeowners are now commonly paying between <mark class="QVRyCf">$15,000 and $25,000</mark>, depending on home size, duct layout, and cooling demands.  
        <br/><br/>
        Rising global material prices have made compressors, refrigerants, and air handlers considerably more expensive this year.  
        Additionally, new federal and state efficiency regulations mean 14 SEER is now the minimum standard in many areas—so older, cheaper models are no longer an option, pushing up base system costs.  
        <br/><br/>
        Installation complexity is another cost driver.  
        Many homes require upgraded electrical panels, improved ductwork for airflow compliance, and proper refrigerant line replacement—contributing to total project costs that can approach <mark class="QVRyCf">$28,000</mark>.  
        <br/><br/>
        For homes opting into smart climate control systems, variable-speed compressors, or solar-compatible A/C units, final costs can easily reach <mark class="QVRyCf">$32,000 or more</mark> across Southern California.  
        <br/><br/>
        With scorching summers, stricter environmental guidelines, and high electricity rates, replacing an A/C system in 2025 is no longer just a comfort decision—it’s an essential step toward energy efficiency, resilience, and future-proofing your home.
        `,
    },
    furnace: {
      words: ["furnace", "heater"],
      text: `Modernizing a home heating system in Southern California has evolved into one of the more substantial upgrades facing homeowners in 2025.  
        Although entry-level systems are still being marketed for as little as $8,500, these quotes often exclude key elements like high-efficiency equipment, proper ventilation, or updated controls.  
        Comprehensive replacements now average between <mark class="QVRyCf">$13,000 and $22,000</mark>, influenced heavily by home size, efficiency goals, and installation logistics.  
        <br/><br/>
        System components—especially energy-efficient furnaces, programmable thermostats, and advanced filtration units—have surged in cost due to persistent inflation in HVAC materials and electronics.  
        In 2025, even basic systems must meet stricter efficiency benchmarks, further driving up the price of parts and certifications.  
        <br/><br/>
        Installation isn’t as straightforward as it once was.  
        Bringing older homes up to current code often involves electrical upgrades, duct sealing, and airflow testing—all of which add significant labor hours and can drive total installation costs close to <mark class="QVRyCf">$26,000</mark>.  
        <br/><br/>
        Choosing smart zoning, ultra-low emission models, or integrating with solar-ready infrastructure can push total system investments to <mark class="QVRyCf">$30,000 or more</mark> in Southern California.  
        <br/><br/>
        As heating systems become smarter, cleaner, and more tightly regulated, what was once a routine equipment swap is now a full-scope energy project—essential not only for comfort, but for code compliance, resale value, and long-term savings.
        `,
    },
    airDucts: {
      words: ["duct", "r6", "ducts"],
      text: `Replacing or installing R6 flex-ducts in Southern California homes has become a costly yet critical upgrade when upgrading your central air system.   
        For most homeowners, total project costs are now ranging between <mark class="QVRyCf">$11,500 and $15,000</mark>, depending on home layout, attic accessibility, and ducting complexity. 
        <br/><br/>
        R6 flex-ducts are designed to meet modern energy codes and reduce HVAC energy loss—but they’re far from cheap in 2025.  
        The cost of insulation materials, flexible liners, and vapor barriers has risen sharply due to ongoing supply chain disruptions and inflation across the construction sector.  
        <br/><br/>
        Labor expenses are another significant driver.  
        Proper duct routing, sealing, and balancing require skilled technicians—especially in older homes with tight crawlspaces or limited attic clearance—pushing final bills close to <mark class="QVRyCf">$25,000</mark> for more complex jobs.  
        <br/><br/>
        Opting for enhanced airflow designs, antimicrobial liners, or pairing the duct upgrade with system zoning can increase total project costs to <mark class="QVRyCf">$30,000 or more</mark> for larger homes.  
        <br/><br/>
        With California’s strict Title 24 energy codes and rising demand for efficient HVAC performance, upgrading to R6 flex-ducts is no longer just routine maintenance—it’s a major investment in indoor air quality, comfort, and compliance.
        `,
    },
  };

  setTimeout(() => {
    // const aiSegments = document.querySelectorAll('[data-lht]');
    const aiParentGroup = document.querySelector("[data-rl]").firstElementChild;
    const aiSegments = aiParentGroup.querySelectorAll(":scope > *");
    const newDescription = getProductDescription(query);

    if (!newDescription) return;

    aiSegments.forEach((seg, index) => {
      if (index > 0) {
        seg.remove();
      }
      seg.innerHTML = newDescription;
    });

    const progressIndicators = document.querySelectorAll(
      "div[role='progressbar']"
    );
    progressIndicators.forEach((ind) => ind.remove());
  }, 1500);

  function getProductDescription(query) {
    for (let [key, value] of Object.entries(products)) {
      const relevantWords = value.words;
      const hasRelevantWord = query
        .split(" ")
        .some((word) => relevantWords.includes(word));
      if (hasRelevantWord) {
        console.log(relevantWords);
        return value.text + "<br /><br />";
      }
    }
  }
}

export const googleSearchProductCost = {
  templateFn,
  matcher: "https://www.google.com/search?q=*",
};
