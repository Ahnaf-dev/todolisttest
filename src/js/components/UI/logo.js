import makeElement from "../../utilis/makeElement";

const logo = function () {

  const template = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="150px" viewBox="0 0 24 24" width="150px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z M18,11.09c0,4-2.55,7.7-6,8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/></svg>`;

  const element = makeElement(template)
 
  return element
 
}

export default logo