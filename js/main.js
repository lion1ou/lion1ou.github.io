!function(o,i){var n=null;var a=[];function t(){for(var e=0;e<a.length;e++)a[e].alpha<=0?(i.body.removeChild(a[e].el),a.splice(e,1)):(a[e].y--,a[e].scale+=.004,a[e].alpha-=.013,a[e].el.style.cssText="left:"+a[e].x+"px;top:"+a[e].y+"px;opacity:"+a[e].alpha+";transform:scale("+a[e].scale+","+a[e].scale+") rotate(45deg);background:"+a[e].color);requestAnimationFrame(t)}function l(e){var t=i.createElement("div");t.className="heart",a.push({el:t,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),i.body.appendChild(t)}function r(){const e=i.getElementsByClassName("big-img-container");e.length&&e[0].remove()}o.requestAnimationFrame=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(t){var n=i.createElement("style");n.type="text/css";try{n.appendChild(i.createTextNode(t))}catch(e){n.styleSheet.cssText=t}i.getElementsByTagName("head")[0].appendChild(n)}(".heart{z-index:9999;width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),function(){var t="function"==typeof o.onclick&&o.onclick,e=i.getElementById("logo");e&&(e.onclick=function(e){cancelAnimationFrame(n),n=requestAnimationFrame(function e(){var t=i.body.scrollTop||i.documentElement.scrollTop;0<t?(i.body.scrollTop=i.documentElement.scrollTop=t-50,n=requestAnimationFrame(e)):cancelAnimationFrame(n)}),t&&t(),l(e)});o.onclick=function(e){t&&t(),l(e)}}(),function(){var t=i.querySelectorAll(".post-content img");for(let e=0;e<t.length;e++){const n=t[e];n.onclick=function(){!function(e){i.body.style.overflow="hidden",r();const t=i.createElement("div");t.className="big-img-container";const n=i.createElement("img");n.className="big-img-content",n.src=e,n.onload=function(){var e=o.innerWidth||i.documentElement.clientWidth||i.body.clientWidth,t=o.innerHeight||i.documentElement.clientHeight||i.body.clientHeight;n.offsetHeight>t&&(n.style.height=t+"px",n.style.width="auto"),n.offsetWidth>e&&(n.style.width=e+"px",n.style.height="auto")},n.onclick=function(){r(),i.body.style.overflow=""},t.onclick=function(){r(),i.body.style.overflow=""},t.appendChild(n),i.body.appendChild(t)}(n.src)}}}(),t(),function(){var e=i.getElementById("menu-main-post");{var t;e&&((t=i.getElementById("toc"))?e.onclick=function(){t&&("block"==t.style.display?t.style.display="none":t.style.display="block")}:e.style.display="none")}}()}(window,document);