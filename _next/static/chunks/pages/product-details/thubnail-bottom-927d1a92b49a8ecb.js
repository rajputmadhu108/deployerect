(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6563],{32629:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/thubnail-bottom",function(){return i(74196)}])},74196:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return k}});var r=i(85893),n=i(67294),a=i(14981),t=i(27634),l=i(47478),c=i(59229),d=i(7297),o=i(35773),h=i(75063),x=i(76312),m=i(95305),j=i(51436),u=i(46066),p=i(30681),f=i(56510),v=i(17677),N=i(21442),b=function(e){var s=e.item,i=n.useContext(v.j).addToWish;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"product-right product-description-box",children:[(0,r.jsx)("h2",{children:s.title}),(0,r.jsxs)("div",{className:"border-product",children:[(0,r.jsx)("h6",{className:"product-title",children:"product details"}),(0,r.jsx)("p",{children:s.description})]}),(0,r.jsx)("div",{className:"single-product-tables border-product detail-section",children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Febric:"}),(0,r.jsx)("td",{children:"Chiffon"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Color:"}),(0,r.jsx)("td",{children:"Red"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Material:"}),(0,r.jsx)("td",{children:"Crepe printed"})]})]})})}),(0,r.jsxs)("div",{className:"border-product",children:[(0,r.jsx)("h6",{className:"product-title",children:"share it"}),(0,r.jsxs)("div",{className:"product-icon",children:[(0,r.jsxs)("ul",{className:"product-social",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"fa fa-facebook"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"fa fa-google-plus"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"fa fa-twitter"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"fa fa-instagram"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("i",{className:"fa fa-rss"})})})]}),(0,r.jsx)(N.Z,{className:"d-inline-block",children:(0,r.jsxs)("button",{className:"wishlist-btn",onClick:function(){return i(s.product)},children:[" ",(0,r.jsx)("i",{className:"fa fa-heart"}),(0,r.jsx)("span",{className:"title-font",children:"Add To WishList"})]})})]})]}),(0,r.jsxs)("div",{className:"border-product",children:[(0,r.jsx)("h6",{className:"product-title",children:"100% SECURE PAYMENT"}),(0,r.jsx)("div",{className:"payment-card-bottom",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(j.Z,{src:"/images/layout-1/pay/1.png",alt:""})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(j.Z,{src:"/images/layout-1/pay/2.png",alt:""})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(j.Z,{src:"/images/layout-1/pay/3.png",alt:""})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(j.Z,{src:"/images/layout-1/pay/4.png",alt:""})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(j.Z,{src:"/images/layout-1/pay/1.png",alt:""})})})]})})]})]})})},g=function(e){var s=e.item,i=e.accordian,a=e.thumbnail,t=(0,n.useState)({nav1:null,nav2:null}),l=t[0],c=t[1],d=n.useRef(),h=n.useRef();n.useEffect((function(){c({nav1:d.current,nav2:h.current})}),[s]);var x=l.nav1,v=l.nav2;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.Z,{lg:"4",children:[(0,r.jsx)(u.Z,{className:"product-slick",asNavFor:v,ref:function(e){return d.current=e},children:s&&s.images.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(j.Z,{src:"/images/".concat(e.src),alt:"",className:"img-fluid image_zoom_cls-0"})},s)}))}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(m.Z,{children:(0,r.jsx)(u.Z,{className:"slider-nav",asNavFor:x,ref:function(e){return h.current=e},slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,children:s&&s.images.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(j.Z,{src:"/images/".concat(e.src),alt:"",className:"img-fluid image_zoom_cls-0"})},s)}))})})})]}),(0,r.jsxs)(m.Z,{lg:"4",children:[i?(0,r.jsx)(p.Z,{item:s}):"",a?(0,r.jsx)(b,{item:s}):""]}),(0,r.jsx)(m.Z,{lg:"4",children:(0,r.jsx)(f.Z,{item:s,changeColorVar:function(e){d.current.slickGoTo(e)}})})]})};function Z(){var e=(0,d.Z)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return Z=function(){return e},e}var y=(0,h.Ps)(Z()),w=function(){var e=(0,x.a)(y,{variables:{id:1}}),s=e.loading,i=e.data;return(0,r.jsx)("div",{className:"collection-wrapper thumbnail-bottom",children:(0,r.jsx)("div",{className:"custom-container",children:i&&!s?(0,r.jsx)(o.Z,{children:(0,r.jsx)(g,{item:i.product,accordian:!1,thumbnail:!0})}):""})})},k=function(){return(0,r.jsx)("div",{className:"b-g-light",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(t.Z,{title:"Thubnail Bottom",parent:"product"}),(0,r.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,r.jsx)(w,{})}),(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(c.Z,{})]})})}},47478:function(e,s,i){"use strict";var r=i(85893),n=i(67294),a=i(35773),t=i(95305),l=i(79862),c=i(35510),d=i(81051),o=i(81780),h=i(33073),x=i(21442),m=i(3126),j=i(87261);s.Z=function(){var e=(0,n.useState)("1"),s=e[0],i=e[1];return(0,r.jsx)("section",{className:"tab-product tab-exes creative-card creative-inner mb-0",children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(t.Z,{sm:"12",lg:"12",children:[(0,r.jsxs)(l.Z,{tabs:!0,className:"nav-material",id:"top-tab",role:"tablist",children:[(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{className:"1"===s?"active":"",onClick:function(){return i("1")},children:["Description",(0,r.jsx)("div",{className:"material-border"})]})}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{className:"2"===s?"active":"",onClick:function(){return i("2")},children:["Video",(0,r.jsx)("div",{className:"material-border"})]})}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{className:"3"===s?"active":"",onClick:function(){return i("3")},children:["Write Review",(0,r.jsx)("div",{className:"material-border"})]})})]}),(0,r.jsxs)(o.Z,{className:"nav-material",activeTab:s,children:[(0,r.jsxs)(h.Z,{tabId:"1",children:[(0,r.jsx)("p",{className:"ps-0",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,r.jsxs)("div",{className:"single-product-tables",children:[(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Febric"}),(0,r.jsx)("td",{children:"Chiffon"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Color"}),(0,r.jsx)("td",{children:"Red"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Material"}),(0,r.jsx)("td",{children:"Crepe printed"})]})]})}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Length"}),(0,r.jsx)("td",{children:"50 Inches"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Size"}),(0,r.jsx)("td",{children:"S, M, L .XXL"})]})]})})]})]}),(0,r.jsx)(h.Z,{tabId:"2",children:(0,r.jsx)("div",{className:"mt-3 text-center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0})})}),(0,r.jsx)(h.Z,{tabId:"3",children:(0,r.jsx)(x.Z,{children:(0,r.jsxs)("div",{className:"form-row row",children:[(0,r.jsx)(t.Z,{md:"12",children:(0,r.jsxs)("div",{className:"media",children:[(0,r.jsx)(m.Z,{className:"mb-0",children:"Rating"}),(0,r.jsx)("div",{className:"media-body ms-3",children:(0,r.jsxs)("div",{className:"rating three-star",children:[(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})]})})]})}),(0,r.jsxs)(t.Z,{md:"6",children:[(0,r.jsx)(m.Z,{htmlFor:"name",children:"Name"}),(0,r.jsx)(j.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:!0})]}),(0,r.jsxs)(t.Z,{md:"6",children:[(0,r.jsx)(m.Z,{htmlFor:"email",children:"Email"}),(0,r.jsx)(j.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,r.jsxs)(t.Z,{md:"12",children:[(0,r.jsx)(m.Z,{htmlFor:"review",children:"Review Title"}),(0,r.jsx)(j.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your Review Subjects",required:!0})]}),(0,r.jsxs)(t.Z,{md:"12",children:[(0,r.jsx)(m.Z,{htmlFor:"review",children:"Review Title"}),(0,r.jsx)("textarea",{className:"form-control",rows:4,placeholder:"Write Your Testimonial Here",id:"exampleFormControlTextarea1"})]}),(0,r.jsx)(t.Z,{md:"12",children:(0,r.jsx)("button",{className:"btn btn-normal",type:"submit",children:"Submit YOur Review"})})]})})})]})]})})})}}},function(e){e.O(0,[2016,1551,4597,7625,9290,7084,7023,7760,4981,3768,1238,9774,2888,179],(function(){return s=32629,e(e.s=s);var s}));var s=e.O();_N_E=s}]);