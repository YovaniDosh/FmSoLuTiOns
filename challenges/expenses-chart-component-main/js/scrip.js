const chartList = document.querySelector(".chart__list");
const chartStatus = document.querySelector(".chart__status");
const dayNames = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

function createBar({ day, amount }, highestAmount)
{
  const chartItem = document.createElement("li");
  const bar = document.createElement("button");
  const tooltip = document.createElement("span");
  const label = document.createElement("span");
  const height = (amount / highestAmount) * 100;

  chartItem.className = "chart__item";
  bar.className = "chart__bar";
  bar.type = "button";
  bar.style.setProperty("--bar-height", `${height}%`);
  bar.setAttribute("aria-label", `${dayNames[day]}: $${amount.toFixed(2)}`);

  if (amount === highestAmount) {
    bar.classList.add("chart__bar--highest");
  }

  tooltip.className = "chart__tooltip";
  tooltip.textContent = `$${amount.toFixed(2)}`;
  tooltip.setAttribute("aria-hidden", "true");

  label.className = "chart__label";
  label.textContent = day;

  bar.append(tooltip);
  chartItem.append(bar, label);

  return chartItem;
}

async function renderChart()
{
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error("Expenses data could not be loaded.");
    }

    const expenses = await response.json();
    const highestAmount = Math.max(...expenses.map(({ amount }) => amount));
    const bars = expenses.map((expense) => createBar(expense, highestAmount));

    chartList.append(...bars);
    chartStatus.hidden = true;
  } catch (error) {
    chartStatus.textContent = error.message;
  }
}

renderChart();
