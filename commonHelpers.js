import{a as b,S as w,i as u}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function y(t,s){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44481780-b4b938698ada11f180983274a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s})}`;try{return(await b(a)).data}catch{throw new Error("Failed to fetch images")}}const L=document.getElementById("gallery");function f(t){let s="";s=t.map(({largeImageURL:a,webformatURL:e,tags:r,likes:i,views:m,comments:h,downloads:g})=>`<li class="card">
        <a href="${a}">
          <img src="${e}" alt="${r}">
        </a>
        <ul class="info-list">
            <li>
                <p class="info-title">Likes</p>
                <p class="info-data">${i}</p>
            </li>
            <li>
                <p class="info-title">Views</p>
                <p class="info-data">${m}</p>
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
      </li>`).join(""),L.insertAdjacentHTML("beforeend",s),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function d(t){u.error({message:t,position:"bottomCenter"})}function P(t){u.warning({message:t,position:"bottomCenter"})}function I(t){u.info({message:t,position:"bottomCenter"})}const E=document.getElementById("search-form"),$=document.getElementById("search-input"),l=document.querySelector(".load-more"),c=document.getElementById("pending-icon");let n=1,p="";E.addEventListener("submit",async t=>{t.preventDefault();const s=$.value.trim();if(s===""){P("Please enter a search query");return}p=s,n=1;try{c.style.display="block";const o=await y(p,n);o.hits.length===0?d("Sorry, there are no images matching your search query. Please try again!"):(gallery.innerHTML="",f(o.hits),o.totalHits>n*15?l.style.display="block":l.style.display="none")}catch{d("Failed to fetch images. Please try again later.")}finally{c.style.display="none"}});l.addEventListener("click",async()=>{n++,c.style.display="block";try{const t=await y(p,n);if(c.style.display="none",t.hits.length>0){f(t.hits),t.totalHits>n*15?l.style.display="block":(l.style.display="none",I("We're sorry, but you've reached the end of search results."));const s=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{d("Failed to load more images. Please try again later.")}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
