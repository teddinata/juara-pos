import{L as b}from"./Auth.402bf413.js";import{H as w,L as g,r as k,a as n,o as i,c as l,b as m,i as u,d as s,t as d,e as c,w as y,f as _,v as f,n as p,F as x,g as L,k as V,h as C}from"./app.306a321d.js";import{_ as N}from"./logo.b721e118.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const H={layout:b,components:{Head:w,Link:g},props:{errors:Object,session:Object},setup(){const a=k({email:"",password:""});return{form:a,submit:()=>{L.Inertia.post("/login",{email:a.email,password:a.password})}}}},B=s("title",null,"Login Account - Aplikasi Kasir",-1),E={class:"card o-hidden border-0 shadow-lg my-5"},F={class:"card"},I={class:"card-body"},S=s("div",{class:"text-center pt-3"},[s("a",{href:"index.html"},[s("img",{src:N,alt:"logo",height:"200"})])],-1),j={key:0,class:"alert alert-success mt-2"},z={class:"px-3 pb-3"},D={class:"form-group row"},M={class:"col-12"},O={key:0,class:"alert alert-danger"},P={class:"form-group row"},T={class:"col-12"},U={key:1,class:"alert alert-danger"},K=V('<div class="form-group row"><div class="col-12"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1"><label class="custom-control-label" for="customCheck1">Remember me</label></div></div></div><div class="form-group text-right row m-t-20"><div class="col-12"><button class="btn btn-primary btn-raised btn-block waves-effect waves-light" type="submit">Log In</button></div></div>',2),R={class:"form-group m-t-10 mb-0 row"},q={class:"col-sm-7 m-t-20"},G=s("i",{class:"mdi mdi-lock"},null,-1),J=C(" Forgot your password ?");function Q(a,t,o,e,W,X){const v=n("Head"),h=n("Link");return i(),l(x,null,[m(v,null,{default:u(()=>[B]),_:1}),s("div",E,[s("div",F,[s("div",I,[S,o.session.status?(i(),l("div",j,d(o.session.status),1)):c("",!0),s("div",z,[s("form",{onSubmit:t[2]||(t[2]=y((...r)=>e.submit&&e.submit(...r),["prevent"])),class:"form-horizontal m-t-20 mb-0"},[s("div",D,[s("div",M,[_(s("input",{type:"email",class:p(["form-control form-control-user",{"is-invalid":o.errors.email}]),"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.email=r),id:"email","aria-describedby":"email",placeholder:"Enter Email Address..."},null,2),[[f,e.form.email]])])]),o.errors.email?(i(),l("div",O,d(o.errors.email),1)):c("",!0),s("div",P,[s("div",T,[_(s("input",{type:"password",class:p(["form-control form-control-user",{"is-invalid":o.errors.password}]),"onUpdate:modelValue":t[1]||(t[1]=r=>e.form.password=r),id:"exampleInputPassword",placeholder:"Password"},null,2),[[f,e.form.password]])])]),o.errors.password?(i(),l("div",U,d(o.errors.password),1)):c("",!0),K,s("div",R,[s("div",q,[m(h,{href:"/forgot-password",class:"text-muted"},{default:u(()=>[G,J]),_:1})])])],32)])])])])],64)}var os=A(H,[["render",Q]]);export{os as default};
