import { results } from "../data/results.js";
const summaryList = document.getElementById("summaryList");

function createSummaryItem(result)
{
    return `
        <article class="summary-item summary-item--${result.theme}" data-category="${result.theme}">

            <div class="summary-item__category">
                <img class="summary-item__icon"
                src="${result.icon}"
                alt=""
                aria-hidden="true">

                <span class="summary-item__name">
                ${result.category}
                </span>
            </div>

            <p class="summary-item__score"
                aria-label="${result.score} out of 100">

                <strong>${result.score}</strong>
                <span>/ 100 </span>
            </p>
        </article>
    `;
}

function renderResults() {
  summaryList.innerHTML = results
    .map(createSummaryItem)
    .join("");
}

renderResults();