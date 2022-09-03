import{L as f}from"./App.6e0cfe74.js";import{H as b,L as h,r as v,a as p,o as d,c as l,b as w,i as y,d as s,w as x,f as n,v as i,n as c,t as m,e as _,F as g,g as C,h as E}from"./app.83f2a93a.js";import{S as N}from"./sweetalert2.all.3032b309.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const T={layout:f,components:{Head:b,Link:h},props:{customer:Object,errors:Object},setup(r){const e=v({name:r.customer.name,no_telp:r.customer.no_telp,address:r.customer.address});return{form:e,submit:()=>{C.Inertia.put(`/apps/customers/${r.customer.id}`,{name:e.name,no_telp:e.no_telp,address:e.address},{onSuccess:()=>{N.fire({title:"Success!",text:"Customer updated successfully.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},k=s("title",null,"Edit Customer - Aplikasi Kasir",-1),V={class:"c-main"},A={class:"container-fluid"},U={class:"fade-in"},B={class:"row"},D={class:"col-md-12"},F={class:"card border-0 rounded-3 shadow border-top-purple"},H=s("div",{class:"card-header"},[s("span",{class:"font-weight-bold"},[s("i",{class:"fa fa-user-circle"}),E(" EDIT CUSTOMER")])],-1),L={class:"card-body"},M={class:"row"},O={class:"col-md-6"},j={class:"mb-3"},I=s("label",{class:"fw-bold"},"Full Name",-1),R={key:0,class:"alert alert-danger"},z={class:"col-md-6"},K={class:"mb-3"},P=s("label",{class:"fw-bold"},"No. Telp",-1),q={key:0,class:"alert alert-danger"},G={class:"mb-3"},J=s("label",{class:"fw-bold"},"Address",-1),Q={key:0,class:"alert alert-danger"},W=s("div",{class:"row"},[s("div",{class:"col-12"},[s("button",{class:"btn btn-primary shadow-sm rounded-sm",type:"submit"},"UPDATE"),s("button",{class:"btn btn-warning shadow-sm rounded-sm ms-3",type:"reset"},"RESET")])],-1);function X(r,e,t,o,Y,Z){const u=p("Head");return d(),l(g,null,[w(u,null,{default:y(()=>[k]),_:1}),s("main",V,[s("div",A,[s("div",U,[s("div",B,[s("div",D,[s("div",F,[H,s("div",L,[s("form",{onSubmit:e[3]||(e[3]=x((...a)=>o.submit&&o.submit(...a),["prevent"]))},[s("div",M,[s("div",O,[s("div",j,[I,n(s("input",{class:c(["form-control",{"is-invalid":t.errors.name}]),"onUpdate:modelValue":e[0]||(e[0]=a=>o.form.name=a),type:"text",placeholder:"Full Name"},null,2),[[i,o.form.name]])]),t.errors.name?(d(),l("div",R,m(t.errors.name),1)):_("",!0)]),s("div",z,[s("div",K,[P,n(s("input",{class:c(["form-control",{"is-invalid":t.errors.no_telp}]),"onUpdate:modelValue":e[1]||(e[1]=a=>o.form.no_telp=a),type:"number",placeholder:"No. Telp"},null,2),[[i,o.form.no_telp]])]),t.errors.no_telp?(d(),l("div",q,m(t.errors.no_telp),1)):_("",!0)])]),s("div",G,[J,n(s("textarea",{class:c(["form-control",{"is-invalid":t.errors.address}]),"onUpdate:modelValue":e[2]||(e[2]=a=>o.form.address=a),type:"text",rows:"4",placeholder:"Address"},null,2),[[i,o.form.address]])]),t.errors.address?(d(),l("div",Q,m(t.errors.address),1)):_("",!0),W],32)])])])])])])])],64)}var os=S(T,[["render",X]]);export{os as default};