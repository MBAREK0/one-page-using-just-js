//& first thing I need to create a new html file
//* done
//& then I need to link this script in it
//* done
//& create the header element, style it
//* done
//& create the heading(h1) element, style it
//* done
//& create the heading(ul) element, style it
//* done
//& create the heading(li) element, style it
//* done
//& create the heading(a) element, style it
//* done
//& create the div.content element, style it
//& create inside the div.content element 15 div.product, style it

document.body.style.cssText =
  "margin: 0px;background-color:rgb(236,236,236);font-family:Tahoma, Arial;text-transform:capitalize;";

// let all = document.getElementsByTagName("*")

let header = document.createElement("div");
header.className = "website-head";
header.style.cssText =
  "background-color:white;display:flex;padding:15px 20px;justify-content:space-between;align-items:center;color:gray;";

let div = document.createElement("div");
div.className = "logo";
div.title = "Website Logo";
let divText = document.createTextNode("Hamza");
let greenColor = "rgb(35,169,110)";
div.style.cssText = `color: ${greenColor};font-weight:bold;font-size:26px`;

let ul = document.createElement("ul");
ul.classList = "menu";
ul.style.cssText = "display: flex;gap:20px;list-style:none;align-items:center";

for (let i = 1; i <= 4; i++) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  if (i === 1) {
    link.innerHTML = "Home";
  } else if (i === 2) {
    link.innerHTML = "About";
  } else if (i === 3) {
    link.innerHTML = "service";
  } else if (i === 4) {
    link.innerHTML = "Contact";
  }

  li.appendChild(link);
  ul.appendChild(li);
}

let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: flex;justify-content:center;flex-wrap: wrap;gap: 40px;min-height:calc(100% - 57.524px);box-sizing: border-box;padding:20px";

for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding:20px;text-align:center;border:1px solid rgba(221, 221, 221);border-radius:6px;width:calc((100% - 40px) / 4);color:rgb(136,136,136);box-sizing:border-box;background-color:white;flex-grow:1";
  let iteration = document.createElement("span");
  iteration.style.cssText = "font-size: 40px;color: black; font-weight: normal;display: block;margin-bottom:10px;"
  let iterationText = document.createTextNode(`${i + 1}`)
  iteration.appendChild(iterationText)
  product.prepend(iteration,"product")
  content.appendChild(product)
}

let footer = document.createElement("footer")
footer.className = "footer"
footer.style.cssText = `background-color:${greenColor};text-align:center;color: white;padding: 20px;font-size: 26px;`
footer.innerHTML = "copyright 2023"

div.appendChild(divText);
header.prepend(ul);
header.prepend(div);
document.body.prepend(footer);
document.body.prepend(content);
document.body.prepend(header);