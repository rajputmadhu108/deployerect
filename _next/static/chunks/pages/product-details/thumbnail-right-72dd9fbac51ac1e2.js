(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4171],{83178:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/thumbnail-right",function(){return s(92830)}])},92830:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var i=s(7297),r=s(85893),c=s(67294),t=s(35773),a=s(75063),l=s(76312),u=s(27634),o=s(14981),d=s(59229),m=s(41799),h=s(69396),f=s(95305),g=s(51436),v=s(46066),x=s(30681),j=s(56510),p=function(n){var e=n.item,s=(0,c.useState)({nav1:null,nav2:null}),i=s[0],a=s[1],l=c.useRef(),u=c.useRef();c.useEffect((function(){a({nav1:l.current,nav2:u.current})}),[e]);var o=i.nav1,d=i.nav2;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{lg:"3",sm:"10",xs:"12",className:"order-up",children:(0,r.jsx)(v.Z,{className:"product-slick",asNavFor:d,ref:function(n){return l.current=n},children:e&&e.images.map((function(n,e){return(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{src:"/images/".concat(n.src),alt:"",className:"img-fluid image_zoom_cls-0"})},e)}))})}),(0,r.jsx)(f.Z,{lg:"1",sm:"2",xs:"12",children:(0,r.jsx)(t.Z,{children:(0,r.jsx)(f.Z,{children:(0,r.jsx)(v.Z,(0,h.Z)((0,m.Z)({},{responsive:[{breakpoint:767,settings:{vertical:!1,slidesToShow:3}}]}),{className:"slider-right-nav",asNavFor:o,ref:function(n){return u.current=n},slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,vertical:!0,children:e&&e.images.map((function(n,e){return(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{src:"/images/".concat(n.src),alt:"",className:"img-fluid image_zoom_cls-0"})},e)}))}))})})}),(0,r.jsx)(f.Z,{lg:"4",children:(0,r.jsx)(x.Z,{item:e})}),(0,r.jsx)(f.Z,{lg:"4",children:(0,r.jsx)(j.Z,{item:e,changeColorVar:function(n){l.current.slickGoTo(n)}})})]})};function Z(){var n=(0,i.Z)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return Z=function(){return n},n}var N=(0,a.Ps)(Z()),_=function(){var n=(0,l.a)(N,{variables:{id:1}}),e=n.loading,s=n.data;return(0,r.jsx)("div",{className:"b-g-light",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(u.Z,{title:"Thumbnail Right",parent:"product"}),(0,r.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,r.jsx)("div",{className:"collection-wrapper",children:s&&s.product&&!e?(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(t.Z,{className:"left-slick",children:(0,r.jsx)(p,{item:s.product})})}):""})}),(0,r.jsx)(d.Z,{})]})})}}},function(n){n.O(0,[2016,1551,4597,7625,9290,7084,7760,4981,3768,1238,9774,2888,179],(function(){return e=83178,n(n.s=e);var e}));var e=n.O();_N_E=e}]);