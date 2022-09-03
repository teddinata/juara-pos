import{L as v}from"./App.6e0cfe74.js";import{H as y,L as h,r as g,a as k,o as i,c as l,b as w,i as p,d as e,w as P,n as a,t as c,e as n,f as _,v as m,C as S,F as u,s as x,g as V,h as U}from"./app.83f2a93a.js";import{S as C}from"./sweetalert2.all.3032b309.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const B={layout:v,components:{Head:y,Link:h},props:{errors:Object,categories:Array,product:Object},setup(d){const s=g({image:"",barcode:d.product.barcode,category_id:d.product.category_id,title:d.product.title,description:d.product.description,buy_price:d.product.buy_price,sell_price:d.product.sell_price,stock:d.product.stock});return{form:s,submit:()=>{V.Inertia.post(`/apps/products/${d.product.id}`,{_method:"PUT",image:s.image,barcode:s.barcode,category_id:s.category_id,title:s.title,description:s.description,buy_price:s.buy_price,sell_price:s.sell_price,stock:s.stock},{onSuccess:()=>{C.fire({title:"Success!",text:"Product updated successfully.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},D=e("title",null,"Edit Product - Aplikasi Kasir",-1),E={class:"c-main"},L={class:"container-fluid"},A={class:"fade-in"},H={class:"row"},N={class:"col-md-12"},I={class:"card border-0 rounded-3 shadow border-top-purple"},M=e("div",{class:"card-header"},[e("span",{class:"font-weight-bold"},[e("i",{class:"fa fa-shopping-bag"}),U(" EDIT PRODUCT")])],-1),O={class:"card-body"},j={class:"mb-3"},F={key:0,class:"alert alert-danger"},R={class:"row"},z={class:"col-md-6"},K={class:"mb-3"},q=e("label",{class:"fw-bold"},"Barcode",-1),G={key:0,class:"alert alert-danger"},J={class:"col-md-6"},Q={class:"mb-3"},W=e("label",{class:"fw-bold"},"Category",-1),X=["value"],Y={key:0,class:"alert alert-danger"},Z={class:"row"},$={class:"col-md-6"},ee={class:"mb-3"},se=e("label",{class:"fw-bold"},"Title Product",-1),oe={key:0,class:"alert alert-danger"},te={class:"col-md-6"},re={class:"mb-3"},ie=e("label",{class:"fw-bold"},"Stock",-1),le={key:0,class:"alert alert-danger"},de={class:"mb-3"},ce=e("label",{class:"fw-bold"},"Description",-1),ae={key:1,class:"alert alert-danger"},ne={class:"row"},_e={class:"col-md-6"},me={class:"mb-3"},ue=e("label",{class:"fw-bold"},"Buy Price",-1),be={key:0,class:"alert alert-danger"},fe={class:"col-md-6"},ve={class:"mb-3"},ye=e("label",{class:"fw-bold"},"Sell Price",-1),he={key:0,class:"alert alert-danger"},ge=e("div",{class:"row"},[e("div",{class:"col-12"},[e("button",{class:"btn btn-primary shadow-sm rounded-sm",type:"submit"},"UPDATE"),e("button",{class:"btn btn-warning shadow-sm rounded-sm ms-3",type:"reset"},"RESET")])],-1);function ke(d,s,o,r,we,pe){const b=k("Head");return i(),l(u,null,[w(b,null,{default:p(()=>[D]),_:1}),e("main",E,[e("div",L,[e("div",A,[e("div",H,[e("div",N,[e("div",I,[M,e("div",O,[e("form",{onSubmit:s[8]||(s[8]=P((...t)=>r.submit&&r.submit(...t),["prevent"]))},[e("div",j,[e("input",{class:a(["form-control",{"is-invalid":o.errors.image}]),onInput:s[0]||(s[0]=t=>r.form.image=t.target.files[0]),type:"file"},null,34)]),o.errors.image?(i(),l("div",F,c(o.errors.image),1)):n("",!0),e("div",R,[e("div",z,[e("div",K,[q,_(e("input",{class:a(["form-control",{"is-invalid":o.errors.barcode}]),"onUpdate:modelValue":s[1]||(s[1]=t=>r.form.barcode=t),type:"text",placeholder:"Barcode / Code Product"},null,2),[[m,r.form.barcode]])]),o.errors.barcode?(i(),l("div",G,c(o.errors.barcode),1)):n("",!0)]),e("div",J,[e("div",Q,[W,_(e("select",{class:a(["form-select form-control",{"is-invalid":o.errors.category_id}]),"onUpdate:modelValue":s[2]||(s[2]=t=>r.form.category_id=t)},[(i(!0),l(u,null,x(o.categories,(t,f)=>(i(),l("option",{key:f,value:t.id},c(t.name),9,X))),128))],2),[[S,r.form.category_id]])]),o.errors.category_id?(i(),l("div",Y,c(o.errors.category_id),1)):n("",!0)])]),e("div",Z,[e("div",$,[e("div",ee,[se,_(e("input",{class:a(["form-control",{"is-invalid":o.errors.title}]),"onUpdate:modelValue":s[3]||(s[3]=t=>r.form.title=t),type:"text",placeholder:"Title Product"},null,2),[[m,r.form.title]])]),o.errors.title?(i(),l("div",oe,c(o.errors.title),1)):n("",!0)]),e("div",te,[e("div",re,[ie,_(e("input",{class:a(["form-control",{"is-invalid":o.errors.stock}]),"onUpdate:modelValue":s[4]||(s[4]=t=>r.form.stock=t),type:"number",placeholder:"Stock"},null,2),[[m,r.form.stock]])]),o.errors.stock?(i(),l("div",le,c(o.errors.stock),1)):n("",!0)])]),e("div",de,[ce,_(e("textarea",{class:a(["form-control",{"is-invalid":o.errors.description}]),"onUpdate:modelValue":s[5]||(s[5]=t=>r.form.description=t),type:"text",rows:"4",placeholder:"Description"},null,2),[[m,r.form.description]])]),o.errors.description?(i(),l("div",ae,c(o.errors.description),1)):n("",!0),e("div",ne,[e("div",_e,[e("div",me,[ue,_(e("input",{class:a(["form-control",{"is-invalid":o.errors.buy_price}]),"onUpdate:modelValue":s[6]||(s[6]=t=>r.form.buy_price=t),type:"number",placeholder:"Buy Price"},null,2),[[m,r.form.buy_price]])]),o.errors.buy_price?(i(),l("div",be,c(o.errors.buy_price),1)):n("",!0)]),e("div",fe,[e("div",ve,[ye,_(e("input",{class:a(["form-control",{"is-invalid":o.errors.sell_price}]),"onUpdate:modelValue":s[7]||(s[7]=t=>r.form.sell_price=t),type:"number",placeholder:"Sell Price"},null,2),[[m,r.form.sell_price]])]),o.errors.sell_price?(i(),l("div",he,c(o.errors.sell_price),1)):n("",!0)])]),ge],32)])])])])])])])],64)}var Ue=T(B,[["render",ke]]);export{Ue as default};