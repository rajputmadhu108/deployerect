(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3338],{88163:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/4-image",function(){return r(76454)}])},58047:function(e,t,r){"use strict";r.d(t,{O:function(){return c}});var s=r(85893),n=(r(67294),r(24561)),i=function(e){return(0,s.jsxs)(n.ZP,{className:"skeleton-svg",speed:1,children:[(0,s.jsx)("rect",{className:"skeleton-img",x:"2",y:"2",rx:"0",ry:"0"}),(0,s.jsx)("rect",{className:"skeleton-c1",x:"0",rx:"0",ry:"0"}),(0,s.jsx)("rect",{className:"skeleton-c2",x:"0",rx:"0",ry:"0"}),(0,s.jsx)("rect",{className:"skeleton-c3",x:"0",rx:"0",ry:"0"})]})},a=r(35773),l=r(95305),c=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"product-box",children:[(0,s.jsx)("div",{className:"img-wrapper"}),(0,s.jsx)(i,{})]})})]})}},76454:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(85893),n=(r(67294),r(14981)),i=r(27634),a=r(47478),l=r(59229),c=r(7297),o=r(75063),d=r(76312),m=r(35773),u=r(95305),h=r(96858);function x(){var e=(0,c.Z)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return x=function(){return e},e}var p=(0,o.Ps)(x()),j=function(){var e=(0,d.a)(p,{variables:{id:2}}),t=e.loading,r=e.data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"collection-wrapper",children:r&&r.product&&!t&&(0,s.jsx)("div",{className:"custom-container",children:(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(u.Z,{lg:"5",children:(0,s.jsx)("div",{className:"row product_image_4",children:r&&r.product.images.map((function(e,t){return(0,s.jsx)("div",{className:"col-6",children:(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/images/".concat(e.src),alt:"",className:"img-fluid"})})},t)}))})}),(0,s.jsx)(u.Z,{lg:"7",className:"rtl-text",children:(0,s.jsx)(h.Z,{item:r.product,changeColorVar:null,swatch:!1,bundle:!1})})]})})})})},f=function(){return(0,s.jsx)("div",{className:"b-g-light",children:(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(i.Z,{title:"4 Image",parent:"product"}),(0,s.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,s.jsx)(j,{})}),(0,s.jsx)("div",{className:"custom-container",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)(l.Z,{})]})})}},59229:function(e,t,r){"use strict";var s=r(41799),n=r(69396),i=r(7297),a=r(85893),l=r(67294),c=r(75063),o=r(76312),d=r(46066),m=r(35773),u=r(95305),h=r(3768),x=r(58047),p=r(89914),j=r(17677),f=r(20733);function g(){var e=(0,i.Z)(["\n  query getProducts($type: String!, $id: Int!) {\n    relatedProducts(type: $type, id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n    }\n  }\n"]);return g=function(){return e},e}var v={arrows:!1,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]},b=(0,c.Ps)(g());t.Z=function(){var e=l.useContext(j.j).addToWish,t=l.useContext(p.A).addToCart,r=l.useContext(f.S).addToCompare,i=(0,o.a)(b,{variables:{type:"fashion",id:1}}),c=i.loading,g=i.data;return(0,a.jsx)("section",{className:"section-big-py-space ratio_asos bg-light",children:(0,a.jsxs)("div",{className:"custom-container",children:[(0,a.jsx)(m.Z,{children:(0,a.jsx)(u.Z,{className:"product-related",children:(0,a.jsx)("h2",{children:"related products"})})}),g&&g.relatedProducts&&0!==g.relatedProducts.length&&!c?(0,a.jsx)(m.Z,{children:(0,a.jsx)(u.Z,{className:"product",children:(0,a.jsx)(d.Z,(0,n.Z)((0,s.Z)({},v),{children:g&&g.relatedProducts.map((function(i,l){return(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,(0,n.Z)((0,s.Z)({newLabel:i.new},i),{item:i,addCart:function(){return t(i)},addCompare:function(){return r(i)},addWish:function(){return e(i)}}))},l)}))}))})}):(0,a.jsx)(x.O,{})]})})}},47478:function(e,t,r){"use strict";var s=r(85893),n=r(67294),i=r(35773),a=r(95305),l=r(79862),c=r(35510),o=r(81051),d=r(81780),m=r(33073),u=r(21442),h=r(3126),x=r(87261);t.Z=function(){var e=(0,n.useState)("1"),t=e[0],r=e[1];return(0,s.jsx)("section",{className:"tab-product tab-exes creative-card creative-inner mb-0",children:(0,s.jsx)(i.Z,{children:(0,s.jsxs)(a.Z,{sm:"12",lg:"12",children:[(0,s.jsxs)(l.Z,{tabs:!0,className:"nav-material",id:"top-tab",role:"tablist",children:[(0,s.jsx)(c.Z,{children:(0,s.jsxs)(o.Z,{className:"1"===t?"active":"",onClick:function(){return r("1")},children:["Description",(0,s.jsx)("div",{className:"material-border"})]})}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(o.Z,{className:"2"===t?"active":"",onClick:function(){return r("2")},children:["Video",(0,s.jsx)("div",{className:"material-border"})]})}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(o.Z,{className:"3"===t?"active":"",onClick:function(){return r("3")},children:["Write Review",(0,s.jsx)("div",{className:"material-border"})]})})]}),(0,s.jsxs)(d.Z,{className:"nav-material",activeTab:t,children:[(0,s.jsxs)(m.Z,{tabId:"1",children:[(0,s.jsx)("p",{className:"ps-0",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,s.jsxs)("div",{className:"single-product-tables",children:[(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Febric"}),(0,s.jsx)("td",{children:"Chiffon"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Color"}),(0,s.jsx)("td",{children:"Red"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Material"}),(0,s.jsx)("td",{children:"Crepe printed"})]})]})}),(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Length"}),(0,s.jsx)("td",{children:"50 Inches"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Size"}),(0,s.jsx)("td",{children:"S, M, L .XXL"})]})]})})]})]}),(0,s.jsx)(m.Z,{tabId:"2",children:(0,s.jsx)("div",{className:"mt-3 text-center",children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0})})}),(0,s.jsx)(m.Z,{tabId:"3",children:(0,s.jsx)(u.Z,{children:(0,s.jsxs)("div",{className:"form-row row",children:[(0,s.jsx)(a.Z,{md:"12",children:(0,s.jsxs)("div",{className:"media",children:[(0,s.jsx)(h.Z,{className:"mb-0",children:"Rating"}),(0,s.jsx)("div",{className:"media-body ms-3",children:(0,s.jsxs)("div",{className:"rating three-star",children:[(0,s.jsx)("i",{className:"fa fa-star"})," ",(0,s.jsx)("i",{className:"fa fa-star"})," ",(0,s.jsx)("i",{className:"fa fa-star"})," ",(0,s.jsx)("i",{className:"fa fa-star"})," ",(0,s.jsx)("i",{className:"fa fa-star"})]})})]})}),(0,s.jsxs)(a.Z,{md:"6",children:[(0,s.jsx)(h.Z,{htmlFor:"name",children:"Name"}),(0,s.jsx)(x.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:!0})]}),(0,s.jsxs)(a.Z,{md:"6",children:[(0,s.jsx)(h.Z,{htmlFor:"email",children:"Email"}),(0,s.jsx)(x.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,s.jsxs)(a.Z,{md:"12",children:[(0,s.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,s.jsx)(x.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your Review Subjects",required:!0})]}),(0,s.jsxs)(a.Z,{md:"12",children:[(0,s.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,s.jsx)("textarea",{className:"form-control",rows:4,placeholder:"Write Your Testimonial Here",id:"exampleFormControlTextarea1"})]}),(0,s.jsx)(a.Z,{md:"12",children:(0,s.jsx)("button",{className:"btn btn-normal",type:"submit",children:"Submit YOur Review"})})]})})})]})]})})})}},24561:function(e,t,r){"use strict";var s=r(67294),n=function(){return n=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var i=function(e){var t=e.animate,r=void 0===t||t,i=e.animateBegin,a=e.backgroundColor,l=void 0===a?"#f5f6f7":a,c=e.backgroundOpacity,o=void 0===c?1:c,d=e.baseUrl,m=void 0===d?"":d,u=e.children,h=e.foregroundColor,x=void 0===h?"#eee":h,p=e.foregroundOpacity,j=void 0===p?1:p,f=e.gradientRatio,g=void 0===f?2:f,v=e.gradientDirection,b=void 0===v?"left-right":v,y=e.uniqueKey,N=e.interval,w=void 0===N?.25:N,Z=e.rtl,k=void 0!==Z&&Z,E=e.speed,O=void 0===E?1.2:E,C=e.style,T=void 0===C?{}:C,S=e.title,P=void 0===S?"Loading...":S,_=e.beforeMask,I=void 0===_?null:_,L=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),F=y||Math.random().toString(36).substring(6),M=F+"-diff",R=F+"-animated-diff",q=F+"-aria",X=k?{transform:"scaleX(-1)"}:null,$="0; "+w+"; 1",A=O+"s",W="top-bottom"===b?"rotate(90)":void 0;return(0,s.createElement)("svg",n({"aria-labelledby":q,role:"img",style:n(n({},T),X)},L),P?(0,s.createElement)("title",{id:q},P):null,I&&(0,s.isValidElement)(I)?I:null,(0,s.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+m+"#"+M+")",style:{fill:"url("+m+"#"+R+")"}}),(0,s.createElement)("defs",null,(0,s.createElement)("clipPath",{id:M},u),(0,s.createElement)("linearGradient",{id:R,gradientTransform:W},(0,s.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:o},r&&(0,s.createElement)("animate",{attributeName:"offset",values:-g+"; "+-g+"; 1",keyTimes:$,dur:A,repeatCount:"indefinite",begin:i})),(0,s.createElement)("stop",{offset:"50%",stopColor:x,stopOpacity:j},r&&(0,s.createElement)("animate",{attributeName:"offset",values:-g/2+"; "+-g/2+"; "+(1+g/2),keyTimes:$,dur:A,repeatCount:"indefinite",begin:i})),(0,s.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:o},r&&(0,s.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+g),keyTimes:$,dur:A,repeatCount:"indefinite",begin:i})))))},a=function(e){return e.children?(0,s.createElement)(i,n({},e)):(0,s.createElement)(l,n({},e))},l=function(e){return(0,s.createElement)(a,n({viewBox:"0 0 476 124"},e),(0,s.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,s.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,s.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a},83024:function(e,t,r){"use strict";var s=r(67294),n=r(45697),i=r.n(n),a=r(93967),l=r.n(a),c=r(22040),o=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","close"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u={children:i().node,className:i().string,close:i().object,closeAriaLabel:i().string,cssModule:i().object,tag:c.iC,toggle:i().func,wrapTag:c.iC};function h(e){var t,r=e.className,n=e.cssModule,i=e.children,a=e.toggle,u=e.tag,h=void 0===u?"h5":u,x=e.wrapTag,p=void 0===x?"div":x,j=e.closeAriaLabel,f=void 0===j?"Close":j,g=e.close,v=m(e,o),b=(0,c.mx)(l()(r,"modal-header"),n);return!g&&a&&(t=s.createElement("button",{type:"button",onClick:a,className:(0,c.mx)("btn-close",n),"aria-label":f})),s.createElement(p,d({},v,{className:b}),s.createElement(h,{className:(0,c.mx)("modal-title",n)},i),g||t)}h.propTypes=u,t.Z=h}},function(e){e.O(0,[2016,1551,4597,7625,9290,7084,7023,4981,3768,1267,9774,2888,179],(function(){return t=88163,e(e.s=t);var t}));var t=e.O();_N_E=t}]);