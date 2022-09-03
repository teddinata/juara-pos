import{L as C}from"./App.38ddbbf3.js";import{P as x}from"./Pagination.9829baab.js";import{H as S,L as A,q as B,a as l,o as a,c as r,b as m,i as d,d as e,w as p,m as f,e as h,f as E,v as L,F as b,s as P,g,h as i,t as I}from"./app.306a321d.js";import{S as y}from"./sweetalert2.all.e3affdbd.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";const T={layout:C,components:{Head:S,Link:A,Pagination:x},props:{categories:Object},setup(){const o=B(new URL(document.location).searchParams.get("q"));return{search:o,handleSearch:()=>{g.Inertia.get("/apps/categories",{q:o.value})},destroy:s=>{y.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(_=>{_.isConfirmed&&(g.Inertia.delete(`/apps/categories/${s}`),y.fire({title:"Deleted!",text:"Category deleted successfully.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},D=e("title",null,"Categories - Aplikasi Kasir",-1),H={class:"c-main"},V={class:"container-fluid"},q={class:"fade-in"},R={class:"row"},F={class:"col-md-12"},M={class:"card border-0 rounded-3 shadow border-top-purple"},O=e("div",{class:"card-header"},[e("span",{class:"font-weight-bold"},[e("i",{class:"fa fa-folder"}),i(" CATEGORIES")])],-1),U={class:"card-body"},Y={class:"input-group mb-3"},j=e("i",{class:"fa fa-plus-circle me-2"},null,-1),G=i(" NEW"),K=e("button",{class:"btn btn-primary input-group-text",type:"submit"},[e("i",{class:"fa fa-search me-2"}),i(" SEARCH")],-1),W={class:"table table-striped table-bordered table-hover"},z=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Name"),e("th",{scope:"col"},"Image"),e("th",{scope:"col",style:{width:"20%"}},"Actions")])],-1),J={class:"text-center"},Q=["src"],X={class:"text-center"},Z=e("i",{class:"fa fa-pencil-alt me-1"},null,-1),$=i(" EDIT"),ee=["onClick"],te=e("i",{class:"fa fa-trash"},null,-1),se=i(" DELETE"),oe=[te,se];function ae(o,n,c,s,_,ne){const v=l("Head"),u=l("Link"),k=l("Pagination");return a(),r(b,null,[m(v,null,{default:d(()=>[D]),_:1}),e("main",H,[e("div",V,[e("div",q,[e("div",R,[e("div",F,[e("div",M,[O,e("div",U,[e("form",{onSubmit:n[1]||(n[1]=p((...t)=>s.handleSearch&&s.handleSearch(...t),["prevent"]))},[e("div",Y,[o.hasAnyPermission(["categories.create"])?(a(),f(u,{key:0,href:"/apps/categories/create",class:"btn btn-primary input-group-text"},{default:d(()=>[j,G]),_:1})):h("",!0),E(e("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=t=>s.search=t),placeholder:"search by category name..."},null,512),[[L,s.search]]),K])],32),e("table",W,[z,e("tbody",null,[(a(!0),r(b,null,P(c.categories.data,(t,w)=>(a(),r("tr",{key:w},[e("td",null,I(t.name),1),e("td",J,[e("img",{src:t.image,width:"40"},null,8,Q)]),e("td",X,[o.hasAnyPermission(["categories.edit"])?(a(),f(u,{key:0,href:`/apps/categories/${t.id}/edit`,class:"btn btn-success btn-sm me-2"},{default:d(()=>[Z,$]),_:2},1032,["href"])):h("",!0),o.hasAnyPermission(["categories.delete"])?(a(),r("button",{key:1,onClick:p(ie=>s.destroy(t.id),["prevent"]),class:"btn btn-danger btn-sm"},oe,8,ee)):h("",!0)])]))),128))])]),m(k,{links:c.categories.links,align:"end"},null,8,["links"])])])])])])])])],64)}var _e=N(T,[["render",ae]]);export{_e as default};
