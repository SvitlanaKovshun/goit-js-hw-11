import{a as m,S as f,i as o}from"./assets/vendor-CI2P6j_B.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h="https://pixabay.com/api/",g="52923405-4f454c0beaa3d564f6127cb92";function y(a){return m(h,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>t).catch(t=>{throw console.error("Error fetching images:",t),t})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(a){const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:n,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="stats">
          <div class="stats-params">
            <span class="stats-item">Likes</span>
            <span class="stats-number">${s}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Views</span>
            <span class="stats-number">${n}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Comments</span>
            <span class="stats-number">${d}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Downloads</span>
            <span class="stats-number">${p}</span>
          </div>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function L(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector(".form"),q=document.querySelector(".input");w.addEventListener("submit",P);function P(a){a.preventDefault();const t=q.value.trim();t&&(L(),S(),y(t).then(r=>{if(c(),r.hits.length===0){o.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(()=>{c(),o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{a.target.reset()}))}
//# sourceMappingURL=index.js.map
