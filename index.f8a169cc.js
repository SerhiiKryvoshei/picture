const e=()=>{let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t};let t=!1;const o=e=>{e.forEach(e=>{e.style.display="none",e.classList.add("animated","fadeIn")})},l=e=>(e.forEach(e=>{if("none"!==getComputedStyle(e).display)return!0}),!1),n=e=>{window.addEventListener("scroll",()=>{!t&&window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&document.querySelector(e).click()})};function d(l,n,d,i=!0,s=!1){let c=document.querySelectorAll(l),r=document.querySelector(n),a=document.querySelector(d),u=document.querySelectorAll("[data-modal]"),p=e();c.forEach(e=>{e.addEventListener("click",l=>{l.target&&l.preventDefault(),t=!0,s&&e.remove(),o(u),r.style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=`${p}px`})}),a.addEventListener("click",()=>{o(u),r.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px"}),r.addEventListener("click",e=>{e.target===r&&i&&(o(u),r.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px")})}const i=()=>{d(".button-order.button-design",".popup-design",".popup-design .popup-close"),d(".button-order.button-consultation",".popup-consultation",".popup-consultation .popup-close"),d(".fixed-gift",".popup-gift",".popup-gift .popup-close",!0,!0),n(".fixed-gift"),setTimeout(()=>{let t=document.querySelectorAll("[data-modal]");if(!l(t)){let t=e();document.querySelector(".popup-consultation").style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=`${t}px`}},6e4)},s=(e,t=1,o,l,n)=>{let d=!1,i=document.querySelectorAll(e);try{let e=document.querySelector(l),o=document.querySelector(n);e.addEventListener("click",()=>{c(-1),i[t-1].classList.remove("slideInLeft"),i[t-1].classList.add("slideInRight")}),o.addEventListener("click",()=>{c(1),i[t-1].classList.remove("slideInRight"),i[t-1].classList.add("slideInLeft")})}catch(e){}let s=e=>{i.length<e&&(t=1),e<1&&(t=i.length),i.forEach(e=>{e.classList.add("animated"),e.style.display="none"}),i[t-1].style.display="block"},c=e=>{s(t+=e)},r=()=>{d="vertical"===o?setInterval(()=>{c(1),i[t-1].classList.add("slideInDown")},3e3):setInterval(()=>{c(1),i[t-1].classList.remove("slideInRight"),i[t-1].classList.add("slideInLeft")},3e3)};i[0].parentNode.addEventListener("mouseenter",()=>{clearInterval(d)}),i[0].parentNode.addEventListener("mouseleave",()=>{r()}),s(t),r()};window.addEventListener("DOMContentLoaded",function(){"use strict";i(),s(".main-slider-item",1,"vertical"),s(".feedback-slider-item",1,"horizontal",".main-prev-btn",".main-next-btn")});
//# sourceMappingURL=index.f8a169cc.js.map
