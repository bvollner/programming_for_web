import{o as c,c as f,a as e,t as g,r as h,F as b,b as w,u as r,w as y,d as u,v as p,e as _,f as P,g as v}from"./vendor.ea98aa41.js";const k=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};k();const A={class:"name"},W=["src","title","alt"],x={class:"actions"},B={props:["pets"],setup(l){return(s,t)=>(c(),f("tr",null,[e("td",A,g(l.pets.name),1),e("td",null,g(l.pets.age),1),e("td",null,g(l.pets.animal),1),e("td",null,g(l.pets.breed),1),e("td",null,[e("img",{src:l.pets.image,title:l.pets.name+", the "+l.pets.breed,alt:l.pets.name+", the "+l.pets.breed},null,8,W)]),e("td",null,g(l.pets.pain),1),e("td",null,[e("div",x,[e("button",{type:"button",onClick:t[0]||(t[0]=m=>s.$emit("deleteRow",l.pets))},"Delete")])])]))}};const C=e("h1",null,"A Brief Inventory of the Creatures my Wife has Rescued",-1),N={id:"petsApp"},I=e("thead",null,[e("th",null,"Name"),e("th",null,"Age"),e("th",null,"Animal"),e("th",null,"Breed"),e("th",null,"Image"),e("th",null,"Is it a pain?"),e("th",null,"Delete")],-1),D=["onSubmit"],L=e("legend",null,[e("h2",null,"Help my wife expand her collection by adding your creature today!")],-1),M=e("label",{for:"name"},"What's the lil dude's name?",-1),S=e("label",{for:"age"},"In years, how old is it?",-1),T=e("label",{for:"animal"},"What kind of creature are you donating?",-1),U=e("label",{for:"breed"},"Ok, so be as specific as you can. What breed is it?",-1),V=e("label",{for:"image"},"Scour the internet for a picture of your creature, and paste a URL here.",-1),O=e("label",{for:"pain"},"Check the box if your creature is a pain in the butt.",-1),$=e("button",{id:"submit",type:"submit"},"Submit",-1),F={setup(l){const t=h({pets:[{name:"Opie",animal:"Dog",age:"Ancient",breed:"Westside Ghost Dingo",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/opie.png",pain:"true"},{name:"Muggsy",animal:"Dog",age:"6 years",breed:"Cuddle Moose / Retriever Mix",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/muggsy.png",pain:"true"},{name:"Kona",animal:"Dog",age:"2 years",breed:"Nibbling Gremlin",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/kona.png",pain:"true"},{name:"Jake, Jake from State Farm",animal:"Turtle",age:"16 years",breed:"Bougie Sideneck Turtle",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/jake.png",pain:"true"},{name:"Biff",animal:"Turtle",age:"16 years",breed:"Expandable Mud Turtle",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/biff.png",pain:"false"},{name:"Spoofer",animal:"Cat",age:"11 years",breed:"Cloned Calico Lab Cat",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/spoofer.png",pain:"false"},{name:"Noogie",animal:"Cat",age:"11 years",breed:"Cloned Calico Lab Cat",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/noogie.png",pain:"false"},{name:"Yours Truly",animal:"Human",age:"41 years",breed:"Midwestern Bearded CouchDweller",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/yourstruly.png",pain:"true"},{name:"The Teenager",animal:"Human",age:"19 years",breed:"Western Nocturnal Giggler",image:"https://bvollner.studio.mcad.edu/programming_for_web/Week8/8a_edits/images/thekid.png",pain:"true"}],newPetName:"",newPetAnimal:"",newPetAge:"",newPetBreed:"",newPetImage:"",newPetPain:""});function m(d){t.pets=t.pets.filter(a=>a!==d)}function n(){console.log("submitted"),t.pets=t.pets.concat({name:t.newPetName,animal:t.newPetAnimal,age:t.newPetAge,breed:t.newPetBreed,image:t.newPetImage,pain:t.newPetPain}),o()}function o(){t.newPetName="",t.newPetAnimal="",t.newPetAge="",t.newPetBreed="",t.newPetImage="",t.newPetPain=""}return(d,a)=>(c(),f(b,null,[C,e("div",N,[e("table",null,[I,e("tbody",null,[(c(!0),f(b,null,w(r(t).pets,i=>(c(),P(B,{key:i.name,pets:i,onDeleteRow:m},null,8,["pets"]))),128))])]),e("form",{onSubmit:y(n,["prevent"])},[e("fieldset",null,[L,e("div",null,[M,u(e("input",{id:"name",type:"text","onUpdate:modelValue":a[0]||(a[0]=i=>r(t).newPetName=i)},null,512),[[p,r(t).newPetName]])]),e("div",null,[S,u(e("input",{id:"age",type:"text","onUpdate:modelValue":a[1]||(a[1]=i=>r(t).newPetAge=i)},null,512),[[p,r(t).newPetAge]])]),e("div",null,[T,u(e("input",{id:"animal",type:"text","onUpdate:modelValue":a[2]||(a[2]=i=>r(t).newPetAnimal=i)},null,512),[[p,r(t).newPetAnimal]])]),e("div",null,[U,u(e("input",{id:"breed",type:"text","onUpdate:modelValue":a[3]||(a[3]=i=>r(t).newPetBreed=i)},null,512),[[p,r(t).newPetBreed]])]),e("div",null,[V,u(e("input",{id:"image",type:"text","onUpdate:modelValue":a[4]||(a[4]=i=>r(t).newPetImage=i)},null,512),[[p,r(t).newPetImage]])]),e("div",null,[O,u(e("input",{id:"pain",type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=i=>r(t).newPetPain=i)},null,512),[[_,r(t).newPetPain]])]),$])],40,D)])],64))}};v(F).mount("#app");