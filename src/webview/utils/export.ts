export function exportHtmlJs() {
  const html = `<div id=\"box\" style=\"width:100px;height:100px;background:limegreen\"></div>`;
  const js = `gsap.to(\"#box\", { x:200, rotation:360, duration: 1 });`;
  return { html, js };
}
