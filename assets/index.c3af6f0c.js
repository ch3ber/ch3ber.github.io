const r=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};r();const l=()=>{const o=document.getElementById("navModal"),s=document.querySelector("body"),n=o.classList.contains("h-screen");n&&(s.classList.remove("h-screen","overflow-hidden"),o.classList.remove("h-screen"),o.classList.add("h-0")),n||(s.classList.add("h-screen","overflow-hidden"),o.classList.remove("h-0"),o.classList.add("h-screen"))},a=o=>{const s=window.scrollY>10,n=document.querySelector("html").classList.contains("dark");let d="shadow-zinc-500/30";n&&(document.getElementById("nav").classList.remove("shadow-zinc-500/30"),d="shadow-slate8700"),n||document.getElementById("nav").classList.remove("shadow-slate-800"),s&&document.getElementById("nav").classList.add("shadow-md",d),s||document.getElementById("nav").classList.remove("shadow-md",d)},i=()=>{document.querySelector("html").classList.toggle("dark")},m=()=>{window.localStorage.theme==="dark"||!("theme"in window.localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};document.addEventListener("DOMContentLoaded",()=>{m(),document.querySelectorAll("[data-showNav]").forEach(o=>o.addEventListener("click",l)),document.getElementById("toggleDarkMode").addEventListener("click",i),document.addEventListener("scroll",a)});
