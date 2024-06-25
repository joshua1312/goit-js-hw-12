import{a as b,i as u,S as w}from"./assets/vendor-53a1b719.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function f(t,r){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"44481780-b4b938698ada11f180983274a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r})}`;try{return(await b(n)).data}catch{throw new Error("Failed to fetch images")}}const L=document.getElementById("gallery");function y(t){let r="";r=t.map(({largeImageURL:o,webformatURL:n,tags:e,likes:s,views:i,comments:h,downloads:g})=>`<li class="card">
        <a href="${o}">
          <img src="${n}" alt="${e}">
        </a>
        <ul class="info-list">
            <li>
                <p class="info-title">Likes</p>
                <p class="info-data">${s}</p>
            </li>
            <li>
                <p class="info-title">Views</p>
                <p class="info-data">${i}</p>
            </li>
            <li>
                <p class="info-title">Comments</p>
                <p class="info-data">${h}</p>
            </li>
            <li>
                <p class="info-title">Downloads</p>
                <p class="info-data">${g}</p>
            </li>
          </ul>
      </li>`).join(""),L.insertAdjacentHTML("beforeend",r)}function d(t){u.error({message:t,position:"bottomCenter"})}function P(t){u.warning({message:t,position:"bottomCenter"})}function I(t){u.info({message:t,position:"bottomCenter"})}const E=document.getElementById("search-form"),$=document.getElementById("search-input"),l=document.querySelector(".load-more"),c=document.getElementById("pending-icon");let a=1,p="";const m=new w(".gallery a",{captionsData:"alt",captionDelay:250});E.addEventListener("submit",async t=>{t.preventDefault();const r=$.value.trim();if(r===""){P("Please enter a search query");return}p=r,a=1;try{c.style.display="block";const o=await f(p,a);o.hits.length===0?d("Sorry, there are no images matching your search query. Please try again!"):(gallery.innerHTML="",y(o.hits),m.refresh(),a++,o.totalHits>a*15?l.style.display="block":l.style.display="none")}catch{d("Failed to fetch images. Please try again later.")}finally{c.style.display="none"}});l.addEventListener("click",async()=>{try{const t=await f(p,a);if(c.style.display="none",t.hits.length>0){y(t.hits),m.refresh(),a++,t.totalHits>a*15?l.style.display="block":(l.style.display="none",I("We're sorry, but you've reached the end of search results."));const r=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch{d("Failed to load more images. Please try again later.")}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
