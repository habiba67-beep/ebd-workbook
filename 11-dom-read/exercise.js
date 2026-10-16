
/**
 * The text of the page's main heading.
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * How many product cards are on the page.
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (heading) => heading.textContent
  );
}

/**
 * The price text shown on the card with that name.
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  return card ? card.querySelector(".price").textContent : null;
}

/**
 * Names of all sold-out products.
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}
