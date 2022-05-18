(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{5924:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/side-effects-complect",function(){return n(7907)}])},7907:function(e,t,n){"use strict";n.r(t);var i=n(5893),o=n(1438);t.default=function(){return(0,i.jsxs)(o.By,{children:[(0,i.jsx)(o.Dx,{text:"Side Effects, Complecting a la Carte"}),(0,i.jsxs)("p",{children:["There are many concepts we learn as we continue our adventure in programming languages. Objects, polymorphism, inheritance, and a whole host of others. Often these concepts are taught with the goal of making our code simpler, yet more often than not, they make our code more complex, in other words, they ",(0,i.jsx)("a",{href:"/beautiful-code",children:"complect"})," them. In this post, we dive into where most of the inessential complexity of our programs comes from, side effects."]}),(0,i.jsx)(o.X6,{size:"2",text:"Programming Functions are Algebraic Functions"}),(0,i.jsx)("p",{children:"A function in a programming language is the exact same thing as the function you learned about in mathematics."}),(0,i.jsx)(o.Q_,{children:"\n    f(x) = 2x\n    const f = (x) => x * 2; \n  "}),(0,i.jsx)("p",{children:"The first example above is a mathematical function. The second is the exact same function in javascript. Functions serve one purpose, to take an input, apply a transformation, and return the new value. When we start thinking about functions in programming as mathematical functions we can smuggle mathematical concepts into our programming."}),(0,i.jsx)(o.Q_,{children:"\n    f \u2218 (g\u2009\u2218\u2009h) = (f\u2009\u2218\u2009g) \u2218 h\n  "}),(0,i.jsx)("p",{children:"Above is the mathematical definition of function composition. It states that composing g and f is the same thing as first applying f to some value, then apply g to the return value of f. A simple implementation in javascript would be the following:"}),(0,i.jsx)(o.Q_,{children:"\n    var compose = (g, f) => (x) => g(f(x))\n  "}),(0,i.jsx)("p",{children:"This code says that compose is a function that takes two functions f and g. Compose returns a function that takes an x, applies f to x, and then g to the result of f applied to x."}),(0,i.jsx)(o.X6,{size:"3",text:"What mathematics gains us"}),(0,i.jsx)("p",{children:"Our compose function has a limitation, it can only compose two functions, but it seems like we should be able to chain compositions together to get more than two things composed as follows:"}),(0,i.jsx)(o.Q_,{children:"\n    compose(h, compose(g, f));\n  "}),(0,i.jsx)("p",{children:"This seems correct enough but couldn't we also do the following?"}),(0,i.jsx)(o.Q_,{children:"\n    compose(compose(h, g), f);\n  "}),(0,i.jsx)("p",{children:"Are these different? How can we tell? Well, we could try a few examples."}),(0,i.jsx)(o.Q_,{children:"\n    compose(add2, compose(add4, add3))(2) \n    // 11\n    compose(compose(add2, add4), add3)(2)\n    // 11\n  "}),(0,i.jsx)("p",{children:"Well, it seems to hold in the case we thought of, but how do we know if it holds in general? This is what mathematics gives us. Since our functions are exactly the same as mathematical functions the laws which apply to mathematical functions apply to programming functions. In this case, the pertinent law is associativity."}),(0,i.jsx)(o.Q_,{children:"f \u2218 (g\u2009\u2218\u2009h) = (f\u2009\u2218\u2009g) \u2218 h"}),(0,i.jsx)("p",{children:"Associativity tells us that how we group our composition makes no difference to the result. Given this knowledge extending our composition function to an indefinite number of arguments is actually quite easy."}),(0,i.jsx)(o.Q_,{children:"\n    const compose2 = (g, f) => (x) => g(f(x));\n    const compose = (...fns) => fns.reduce(compose2);\n  "}),(0,i.jsxs)("p",{children:["First, we renamed our old compose function. Here the ",(0,i.jsx)(o.Rh,{children:"..."})," just says take the rest of the arguments and pack them into an array for us. Now we can simply compose as follows:"]}),(0,i.jsx)(o.Q_,{children:"\n    compose(add2, add4, add3)(2);\n  "}),(0,i.jsx)(o.X6,{size:"2",text:"When Functions Aren't"}),(0,i.jsx)("p",{children:"Functions when they are mathematical objects give us ways to reason about our code. Even if we don't bust out the associative law all the time we do get some guarantees from functions. For instance:"}),(0,i.jsx)(o.Q_,{children:"\n    f(x) === f(x)\n  "}),(0,i.jsx)("p",{children:"Seems rather obvious, but it is very easy to make this not hold. In other words, sometimes functions can cease to be functions."}),(0,i.jsx)(o.Q_,{children:"\n    var enabled = true;\n    var f = function (x) {\n        if (enabled) {\n            enabled = false;\n            return x + 2;\n        }\n        else {\n            return x;\n        }\n    }\n    f(2) === f(2)\n    // false\n  "}),(0,i.jsx)("p",{children:'Here "functions" in javascript do something that algebraic functions certainly can\'t do, side effects. Side effects occur when our function accesses something outside itself. This reaching out of itself often involves changing the value of some variable, but can involve causing an effect, such as printing to the console or making an http request.'}),(0,i.jsx)(o.X6,{size:"3",text:"But They Are Still Functions"}),(0,i.jsxs)("p",{children:["Calling these side-effecting functions not \"functions\" is not great terminologically. Javascript is going to call them functions whether they have side effects or not. So while it may be true in the mathematics sense, it doesn't hold in javascript land. So instead let's refer to functions in the algebraic sense as ",(0,i.jsx)("em",{children:"pure functions"})," and side effecting functions as ",(0,i.jsx)("em",{children:"impure functions"}),"."]}),(0,i.jsx)("p",{children:"Pure functions are the perfect example of decomplected code. Pure functions do one thing, transform input. Impure functions are complecting a la carte. Inside an impure function, we can change anything, we can return different results depending on the time of the day and even return nothing. These side effects weave together the notion of an effect with the computation that needs to be done."}),(0,i.jsx)(o.X6,{size:"3",text:"But My Programs Need to do Something"}),(0,i.jsx)("p",{children:"Side-effects (in Javascript) are of course necessary. Our programs must communicate with the outside world in some way. But unconstrained side-effects can incredibly complicate our code. Mixing our data transformations with side effects causes us to lose the ability to reason about our code accurately. Mutating variables causes us to have to keep track of more and more state as variables change. In fact, it is my conjecture that a large majority of hard to trace bugs come from some variable somewhere being changed to some value we did not expect."}),(0,i.jsx)(o.X6,{size:"2",text:"Conclusion"}),(0,i.jsx)("p",{children:"So how do we constrain side effects? That de serves a whole post or three on that very topic but for now, we can keep it simple. First, always strive to write pure functions. Secondly, avoid mutation if at all possible. Finally, move all side effects to the edges of your programs. Future posts will explore these topics showing how constraining our side-effects eliminates whole classes of bugs commonly encountered in programming and leads to simpler code."})]})}},1438:function(e,t,n){"use strict";n.d(t,{By:function(){return X},CN:function(){return O},Dx:function(){return N},Ee:function(){return j},Fz:function(){return S},Mc:function(){return E},Q_:function(){return F},R4:function(){return P},Rh:function(){return A},X6:function(){return T},rU:function(){return x}});var i=n(5893),o=n(5988),s=n.n(o),r=n(9008),a=n(1664),c=n.n(a),l=n(7294),u=n(4394),h=n(2041),f=n(8903),d=n(6410),m=n(8603);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){p(e,t,n[t])}))}return e}var x=c(),j=function(e){var t=e.src,n=(0,l.useState)(!1),o=n[0],s=n[1],r=o?{position:"fixed",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}:{};return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{onClick:function(e){return s(!1)},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0,0,0,0.8)"}}),(0,i.jsx)("div",{style:g({},r),children:o&&(0,i.jsx)("img",{onClick:function(){return s((function(e){return!e}))},style:{width:"100%"},src:t})}),(0,i.jsx)("img",{onClick:function(){return s((function(e){return!e}))},style:{width:"100%"},src:t})]})},w=function(e){(0,d.Z)(e),e.languages.clojure=g({},e.languages.clojure,{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};w.displayName="clojure",w.aliases=[],u.Z.registerLanguage("javascript",h.Z),u.Z.registerLanguage("haskell",f.Z),u.Z.registerLanguage("clojure",w);var v=function(e){var t=e.children,n=e.right,o=e.top,s=e.left;e.buttom;return(0,i.jsx)("div",{style:p({position:"absolute",right:n,left:s,top:o},"left",s),children:t})},y=function(e){var t=e.children,n=e.top,o=e.left,s=e.right,r=e.bottom;return(0,i.jsx)("div",{style:{paddingTop:n,paddingLeft:o,paddingRight:s,paddingBottom:r},children:t})},b=function(e){return function(e){var t,n=((t=e.split("\n")).length>1&&t.shift(),t),i=function(e){return/^ */.exec(e)[0].length}(n[0]);return n.map((function(e){return e.substring(i,e.length)})).join("\n")}(e)},k=g({},m.mQ,{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':g({},m.mQ['pre[class*="language-"]'],{backgroundColor:"#fff"})}),_=function(e){var t=e.source,n=e.language;return(0,i.jsx)(u.Z,{language:n,style:k,children:b(t)})},F=function(e){var t=e.children;return(0,i.jsx)(_,{language:"javascript",source:t})},S=function(e){var t=e.children;return(0,i.jsx)(_,{language:"haskell",source:t})},O=function(e){var t=e.children;return(0,i.jsx)(_,{language:"clojure",source:t})},z=function(){return(0,i.jsx)(s(),{id:"4dc580444c2ee173",children:"body{font-family:helvetica,sans-serif;color:#333;line-height:1.5}a{color:#333}"})},C=function(e){var t=e.children;return(0,i.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},Q=function(e){var t=e.children;return(0,i.jsx)("p",{style:{fontSize:"1.5em"},children:t})},E=function(e){var t=e.items,n=e.Elem,o=void 0===n?Q:n,s=e.title;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{text:s}),(0,i.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,o=e.Elem;return(0,i.jsx)("li",{children:(0,i.jsx)(o,{children:(0,i.jsx)(x,{href:t,children:(0,i.jsx)("a",{children:n})})})},t)}(g({},e,{Elem:o}))}))})]})},T=function(e){var t=e.color,n=e.text,o=e.size,s={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===o?1:o];return(0,i.jsx)(s,{style:{color:t},children:n})},A=function(e){var t=e.children;return(0,i.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},P=function(e){var t=e.children;return(0,i.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},N=function(e){var t=e.text;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:t})}),(0,i.jsx)(T,{text:t,size:1})]})},X=function(e){var t=e.children;return(0,l.useEffect)((function(){fetch("https://github-sites-simple-stats-jimmyhmiller.vercel.app/api".concat("/"===window.location.pathname?"/index":window.location.pathname))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,i.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,i.jsx)(z,{}),(0,i.jsxs)(C,{children:[(0,i.jsx)("div",{style:{position:"relative"},children:(0,i.jsx)(v,{right:0,top:0,children:(0,i.jsx)(x,{href:"/",children:(0,i.jsx)("a",{style:{textDecoration:"none"},children:(0,i.jsx)(T,{color:"#999",text:"Jimmy Miller"})})})})}),(0,i.jsx)(y,{top:70,children:t})]})]})}}},function(e){e.O(0,[774,346,854,888,179],(function(){return t=5924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);