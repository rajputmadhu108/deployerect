(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{95588:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/sticky-page",function(){return r(92178)}])},58047:function(e,s,r){"use strict";r.d(s,{O:function(){return l}});var i=r(85893),n=(r(67294),r(24561)),t=function(e){return(0,i.jsxs)(n.ZP,{className:"skeleton-svg",speed:1,children:[(0,i.jsx)("rect",{className:"skeleton-img",x:"2",y:"2",rx:"0",ry:"0"}),(0,i.jsx)("rect",{className:"skeleton-c1",x:"0",rx:"0",ry:"0"}),(0,i.jsx)("rect",{className:"skeleton-c2",x:"0",rx:"0",ry:"0"}),(0,i.jsx)("rect",{className:"skeleton-c3",x:"0",rx:"0",ry:"0"})]})},a=r(35773),c=r(95305),l=function(e){return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)("div",{className:"product-box",children:[(0,i.jsx)("div",{className:"img-wrapper"}),(0,i.jsx)(t,{})]})})]})}},92178:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return f}});var i=r(85893),n=(r(67294),r(14981)),t=r(27634),a=r(47478),c=r(59229),l=r(7297),d=r(35773),o=r(95305),x=r(75063),m=r(76312),h=r(75198),u=r.n(h),j=r(96858);function p(){var e=(0,l.Z)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return p=function(){return e},e}var v=(0,x.Ps)(p()),N=function(){var e=(0,m.a)(v,{variables:{id:1}}).data;return(0,i.jsx)("div",{className:"collection-wrapper",children:(0,i.jsx)("div",{className:"custom-container",children:(0,i.jsxs)(d.Z,{className:"block",children:[(0,i.jsx)(o.Z,{lg:"5",children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(o.Z,{className:"product_img_scroll image-scroll",children:(0,i.jsx)("div",{children:e&&e.product.images.map((function(e,s){return(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/images/".concat(e.src),alt:"",className:"img-fluid"})})},s)}))})})})}),e&&(0,i.jsx)(o.Z,{lg:"7",className:"rtl-text",children:(0,i.jsx)(u(),{boundaryElement:".block",children:(0,i.jsx)(j.Z,{item:e.product,bundle:!1,swatch:!1,changeColorVar:null})})})]})})})},f=function(){return(0,i.jsx)("div",{className:"b-g-light",children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(t.Z,{title:"stick page",parent:"product"}),(0,i.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,i.jsx)(N,{})}),(0,i.jsx)("div",{className:"custom-container",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)(c.Z,{})]})})}},59229:function(e,s,r){"use strict";var i=r(41799),n=r(69396),t=r(7297),a=r(85893),c=r(67294),l=r(75063),d=r(76312),o=r(46066),x=r(35773),m=r(95305),h=r(3768),u=r(58047),j=r(89914),p=r(17677),v=r(20733);function N(){var e=(0,t.Z)(["\n  query getProducts($type: String!, $id: Int!) {\n    relatedProducts(type: $type, id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n    }\n  }\n"]);return N=function(){return e},e}var f={arrows:!1,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]},b=(0,l.Ps)(N());s.Z=function(){var e=c.useContext(p.j).addToWish,s=c.useContext(j.A).addToCart,r=c.useContext(v.S).addToCompare,t=(0,d.a)(b,{variables:{type:"fashion",id:1}}),l=t.loading,N=t.data;return(0,a.jsx)("section",{className:"section-big-py-space ratio_asos bg-light",children:(0,a.jsxs)("div",{className:"custom-container",children:[(0,a.jsx)(x.Z,{children:(0,a.jsx)(m.Z,{className:"product-related",children:(0,a.jsx)("h2",{children:"related products"})})}),N&&N.relatedProducts&&0!==N.relatedProducts.length&&!l?(0,a.jsx)(x.Z,{children:(0,a.jsx)(m.Z,{className:"product",children:(0,a.jsx)(o.Z,(0,n.Z)((0,i.Z)({},f),{children:N&&N.relatedProducts.map((function(t,c){return(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,(0,n.Z)((0,i.Z)({newLabel:t.new},t),{item:t,addCart:function(){return s(t)},addCompare:function(){return r(t)},addWish:function(){return e(t)}}))},c)}))}))})}):(0,a.jsx)(u.O,{})]})})}},47478:function(e,s,r){"use strict";var i=r(85893),n=r(67294),t=r(35773),a=r(95305),c=r(79862),l=r(35510),d=r(81051),o=r(81780),x=r(33073),m=r(21442),h=r(3126),u=r(87261);s.Z=function(){var e=(0,n.useState)("1"),s=e[0],r=e[1];return(0,i.jsx)("section",{className:"tab-product tab-exes creative-card creative-inner mb-0",children:(0,i.jsx)(t.Z,{children:(0,i.jsxs)(a.Z,{sm:"12",lg:"12",children:[(0,i.jsxs)(c.Z,{tabs:!0,className:"nav-material",id:"top-tab",role:"tablist",children:[(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{className:"1"===s?"active":"",onClick:function(){return r("1")},children:["Description",(0,i.jsx)("div",{className:"material-border"})]})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{className:"2"===s?"active":"",onClick:function(){return r("2")},children:["Video",(0,i.jsx)("div",{className:"material-border"})]})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{className:"3"===s?"active":"",onClick:function(){return r("3")},children:["Write Review",(0,i.jsx)("div",{className:"material-border"})]})})]}),(0,i.jsxs)(o.Z,{className:"nav-material",activeTab:s,children:[(0,i.jsxs)(x.Z,{tabId:"1",children:[(0,i.jsx)("p",{className:"ps-0",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,i.jsxs)("div",{className:"single-product-tables",children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Febric"}),(0,i.jsx)("td",{children:"Chiffon"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Color"}),(0,i.jsx)("td",{children:"Red"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Material"}),(0,i.jsx)("td",{children:"Crepe printed"})]})]})}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Length"}),(0,i.jsx)("td",{children:"50 Inches"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Size"}),(0,i.jsx)("td",{children:"S, M, L .XXL"})]})]})})]})]}),(0,i.jsx)(x.Z,{tabId:"2",children:(0,i.jsx)("div",{className:"mt-3 text-center",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0})})}),(0,i.jsx)(x.Z,{tabId:"3",children:(0,i.jsx)(m.Z,{children:(0,i.jsxs)("div",{className:"form-row row",children:[(0,i.jsx)(a.Z,{md:"12",children:(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)(h.Z,{className:"mb-0",children:"Rating"}),(0,i.jsx)("div",{className:"media-body ms-3",children:(0,i.jsxs)("div",{className:"rating three-star",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]})})]})}),(0,i.jsxs)(a.Z,{md:"6",children:[(0,i.jsx)(h.Z,{htmlFor:"name",children:"Name"}),(0,i.jsx)(u.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:!0})]}),(0,i.jsxs)(a.Z,{md:"6",children:[(0,i.jsx)(h.Z,{htmlFor:"email",children:"Email"}),(0,i.jsx)(u.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,i.jsxs)(a.Z,{md:"12",children:[(0,i.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,i.jsx)(u.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your Review Subjects",required:!0})]}),(0,i.jsxs)(a.Z,{md:"12",children:[(0,i.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,i.jsx)("textarea",{className:"form-control",rows:4,placeholder:"Write Your Testimonial Here",id:"exampleFormControlTextarea1"})]}),(0,i.jsx)(a.Z,{md:"12",children:(0,i.jsx)("button",{className:"btn btn-normal",type:"submit",children:"Submit YOur Review"})})]})})})]})]})})})}}},function(e){e.O(0,[2016,1551,4597,7625,9290,7084,7023,7937,4981,3768,1267,9774,2888,179],(function(){return s=95588,e(e.s=s);var s}));var s=e.O();_N_E=s}]);