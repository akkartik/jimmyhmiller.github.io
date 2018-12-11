(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(e,t,n){__NEXT_REGISTER_PAGE("/side-effects-complect",function(){return e.exports=n(460),{page:e.exports.default}})},460:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(1);t.default=function(){return o.a.createElement(s.b,null,o.a.createElement(s.h,{text:"Side Effects, Complecting a la Carte"}),o.a.createElement("p",null,"There are many concepts we learn as we continue our adventure in programming languages. Objects, polymorphism, inheritance, and a whole host of others. Often these concepts are taught with the goal of making our code simpler, yet more often than not, they makes our code more complex, in other words, they ",o.a.createElement("a",{href:"/beautiful-code"},"complect")," them. In these post we dive into where most of the inessential complexity of our programs come from, side effects."),o.a.createElement(s.d,{size:"2",text:"Programming Functions are Algebraic Functions"}),o.a.createElement("p",null,"A function in a programming language is the exact same thing as the function you learned about in mathematics."),o.a.createElement(s.e,null,"\n      f(x) = 2x\n      const f = (x) => x * 2; \n    "),o.a.createElement("p",null,"The first example above is a mathematical function. The second is the exact same function in javascript. Functions serve one purpose, to take an input, apply a transformation, and return the new value. When we start thinking about functions in programming as mathematical functions we can smuggle mathematical concepts into our programming."),o.a.createElement(s.e,null,"\n      f ∘ (g ∘ h) = (f ∘ g) ∘ h\n    "),o.a.createElement("p",null,"Above is the mathematical definition of function composition. It states that composing g and f is the same thing as first applying f to some value, then apply g to the return of f. A simple implementation in javascript would be the following:"),o.a.createElement(s.e,null,"\n      var compose = (g, f) => (x) => g(f(x))\n    "),o.a.createElement("p",null,"This code says that compose is a function that takes two functions f and g. Compose returns a function that takes an x, and applies f to x, and then g to the result of f applied to x."),o.a.createElement(s.d,{size:"3",text:"What mathematics gains us"}),o.a.createElement("p",null,"Our compose function has a limitation, it can only compose two functions, but it seems like we should be able to chain compositions together to get more than two things composed as follows:"),o.a.createElement(s.e,null,"\n      compose(h, compose(g, f));\n    "),o.a.createElement("p",null,"This seems correct enough but couldn't we also do the following?"),o.a.createElement(s.e,null,"\n      compose(compose(h, g), f);\n    "),o.a.createElement("p",null,"Are these different? How can we tell? Well, we could try a few examples."),o.a.createElement(s.e,null,"\n      compose(add2, compose(add4, add3))(2) \n      // 11\n      compose(compose(add2, add4), add3)(2)\n      // 11\n    "),o.a.createElement("p",null,"Well, it seems to hold in the case we thought of, but how do we know if it holds in general? This is what mathematics gives us. Since our functions are exactly the same as mathematical functions the laws which apply to mathematical functions apply to programming functions. In this case the pertinent law is associativity."),o.a.createElement(s.e,null,"f ∘ (g ∘ h) = (f ∘ g) ∘ h"),o.a.createElement("p",null,"Associativity tells us that how we group our composition makes no difference to the result. Given this knowledge extending our composition function to and indefinite number of arguments is actually quite easy."),o.a.createElement(s.e,null,"\n      const compose2 = (g, f) => (x) => g(f(x));\n      const compose = (...fns) => fns.reduce(compose2);\n    "),o.a.createElement("p",null,"First we renamed our old compose function. Here the ",o.a.createElement(s.g,null,"...")," just says take the rest of the arguments and pack them into an array for us. Now we can simply compose as follows:"),o.a.createElement(s.e,null,"\n      compose(add2, add4, add3)(2);\n    "),o.a.createElement(s.d,{size:"2",text:"When Functions Aren't"}),o.a.createElement("p",null,"Functions when they are mathematical objects give us ways to reason about our code. Even if we don't bust out the associative law all the time we do get some guarantees from functions. For instance:"),o.a.createElement(s.e,null,"\n      f(x) === f(x)\n    "),o.a.createElement("p",null,"Seems rather obvious, but it is very easy to make this not hold. In other words, sometimes functions can cease to be functions."),o.a.createElement(s.e,null,"\n      var enabled = true;\n      var f = function (x) {\n          if (enabled) {\n              enabled = false;\n              return x + 2;\n          }\n          else {\n              return x;\n          }\n      }\n      f(2) === f(2)\n      // false\n    "),o.a.createElement("p",null,'Here "functions" in javascript do something that algebraic functions certainly can\'t do, side effects. Side effects occur when our function accesses something outside itself. This reaching out of itself often involves changing the value of some variable, but can involve causing an effect, such as printing to the console or making an http request.'),o.a.createElement(s.d,{size:"3",text:"But They Are Still Functions"}),o.a.createElement("p",null,"Calling these side-effecting functions not \"functions\" is not great terminologically. Javascript is going to call them functions whether they have side effects or not. So while it may be true in the mathematics sense, it doesn't hold in javascript land. So instead let's refer to functions in the algebraic sense as ",o.a.createElement("em",null,"pure functions")," and side effecting functions as ",o.a.createElement("em",null,"impure functions"),"."),o.a.createElement("p",null,"Pure functions are the perfect example of decomplected code. Pure functions do one thing, transform input. Impure functions are complecting a la carte. Inside an impure function we can change anything, we can return different results depending on the time of the day, and even return nothing. These side effects weave together the notion of an effect with the computation that needs to be done."),o.a.createElement(s.d,{size:"3",text:"But My Programs Need to do Something"}),o.a.createElement("p",null,"Side-effects (in Javascript) are of course necessary. Our programs must communicate with the outside world in some way. But unconstrained side-effects can incredibly complicate our code. Mixing our data transformations with side-effects causes us to lose the ability to reason about our code accurately. Mutating variables causes us to have to keep track of more and more state as variables change. In fact, it is my conjecture that a large majority of hard to trace bugs come from some variable somewhere being changed to some value we did not expect."),o.a.createElement(s.d,{size:"2",text:"Conclusion"}),o.a.createElement("p",null,"So how do we constrain side-effects? That deserves a whole post or three on that very topic but for now we can keep it simple. First, always strive to write pure functions. Secondly, avoid mutation if at all possible. Finally move all side effects to the edges of your programs. Future posts will explore these topics showing how constraining our side-effects eliminates whole classes of bugs commonly encountered in programming and leads to simpler code."))}}},[[459,1,0]]]);