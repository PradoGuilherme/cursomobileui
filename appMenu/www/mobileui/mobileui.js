/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);
/*component-menu*/window.openMenu=function(e){var a=e;if((e=document.getElementById(e)).className.indexOf("menu")>=0&&e.className.indexOf("open")<0){var n=document.createElement("div");if(n.className="backdrop backdrop-menu",e.parentNode.appendChild(n),setTimeout(function(){n.className+=" show"}),n.addEventListener("click",function(e){window.closeMenu(a)},!1),2===SO.code){e.style.height=window.innerHeight+"px";var s=" side-menu";if(e.className.indexOf("menu-right")>=0){s=" side-menu-right";var t=document.getElementsByClassName("header");if(t.length)for(i in t)t[i].className&&t[i].className.indexOf("side-menu-right")<0&&(t[i].className+=" side-menu-right")}e.parentNode.className.indexOf("body")>=0?e.parentNode.className+=s:document.getElementsByTagName("body")[0].className+=s}e.className+=" open";var m=new CustomEvent("openMenu",{detail:{menu:a}});document.dispatchEvent(m),document.addEventListener("firedCloseMenu",function(e){window.closeMenu(a)},!1)}},window.closeMenu=function(e){var a=e;if((e=document.getElementById(e)).className.indexOf("open")<0)return!1;var n=new CustomEvent("closeMenu",{detail:{menu:a}});document.dispatchEvent(n),e.className=e.className.replace("open","");var s=document.getElementsByClassName("header");if(s.length)for(i in s)s[i].className&&s[i].className.indexOf("side-menu-right")>=0&&(s[i].className=s[i].className.replace(" side-menu-right",""));var t=e.parentNode.getElementsByClassName("backdrop-menu");t&&t.length&&((t=t[0]).className=t.className.replace("show",""),setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},500)),1!==SO.code&&(e.parentNode.className.indexOf("body")>=0?e.parentNode.className=e.parentNode.className.replace("side-menu",""):document.getElementsByTagName("body")[0].className=document.getElementsByTagName("body")[0].className.replace("side-menu",""))};
/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||((s=document.createElement("span")).className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);