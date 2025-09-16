import { ScriptTemplate } from "@/types/templates";

function templateFn() {
  const upgrades = [
    {
      name: "Solar Panels",
      cost: 43448,
      recoup: 1.35,
    },
    {
      name: "Roofing replacement",
      cost: 31130,
      recoup: 1.28,
    },
    {
      name: "HVAC upgrade",
      cost: 29760,
      recoup: 1.23,
    },
    {
      name: "Double pane windows",
      cost: 32550,
      recoup: 1.22,
    },
    {
      name: "Dry landscaping",
      cost: 25871,
      recoup: 1.22,
    },
    {
      name: "Main panel upgrade",
      cost: 7800,
      recoup: 1.2,
    },
    {
      name: "Additional Dwelling Unit",
      cost: 296445,
      recoup: 1.15,
    },
    {
      name: "Attic insulation",
      cost: 14540,
      recoup: 1.15,
    },
    {
      name: "Kitchen upgrade",
      cost: 62000,
      recoup: 1.13,
    },
    {
      name: "Bathroom upgrade",
      cost: 39500,
      recoup: 1.11,
    },
  ];

  function formatAsCurrency(number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  }

  const headings = Array.from(document.querySelectorAll("h3")).slice(0, 10);

  headings.forEach((heading, index) => {
    const currentUpgrade = upgrades[index];
    const list = heading.nextElementSibling;

    if (!headings[index] || !currentUpgrade) return;

    headings[index].innerHTML =
      `${index + 1}. <strong>${currentUpgrade.name}</strong>`;

    const lines = list.querySelectorAll("li");

    const resaleAmt = currentUpgrade.cost * currentUpgrade.recoup;

    if (!lines[0] || !lines[1] || !lines[2]) return;

    lines[0].innerText = "Cost: " + formatAsCurrency(currentUpgrade.cost);
    lines[1].innerText = "Resale: " + formatAsCurrency(resaleAmt);
    lines[2].innerText =
      "Recoup: " + `${Math.round(currentUpgrade.recoup * 100)}%`;
  });
}

export const zillowTop10HiPv = {
  templateFn,
  matcher:
    "https://www.zillow.com/learn/best-home-improvements-to-increase-value",
};
