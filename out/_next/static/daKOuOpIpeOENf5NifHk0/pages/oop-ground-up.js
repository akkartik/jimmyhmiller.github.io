(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{455:function(e,t,n){__NEXT_REGISTER_PAGE("/oop-ground-up",function(){return e.exports=n(456),{page:e.exports.default}})},456:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1);t.default=function(){return o.a.createElement(r.b,null,o.a.createElement(r.h,{text:"OOP from the ground up"}),o.a.createElement("p",null,"Any concept when taken for granted can lead to misunderstanding. Concepts we don't understand appear magical, making them either scary or compelling. In fact, typically the difference in attitude towards these magical objects is that of our peers. Despite the popular view that programming is an ever changing field, new ideas in the programming world must fight a hard fought battle. Often things which aren't familiar to the programmer who encounters them are met with suspicion or disdain. But not so with objects, or at least not anymore. Objects have captured the popular mindshare of developers. Objects are the bread and butter of programming, to the point where people are often confused at how languages with no objects can exist at all. We are going to peel back those covers and implement our own objects from the ground up."),o.a.createElement(r.d,{size:"2",text:"The Simplest Object"}),o.a.createElement("p",null,'In order to begin, we must have a target in mind for our first object. A "hello world" of objects, from there we will move to more advanced features implementing them ourselves along the way.'),o.a.createElement(r.e,null,'\n      const person = {\n        firstName: "Alonzo",\n        lastName: "Church"\n      }\n      \n      person.firstName // Alonzo\n      person.lastName // Church\n    '),o.a.createElement("p",null,'This is our target, so in order to implement it we must understand it. The object above has two properties, firstName and lastName and it has some way to access those properties (the . operator). Now, our "object", because it isn\'t built into the language, is certainly not going to have as nice of a syntax as the one above, but we can definitely emulate the behavior of the object above.'),o.a.createElement(r.e,null,"\n      function person(property) {\n        if (property === 'firstName') {\n          return 'Alonzo';\n        } else if (property === 'lastName') {\n          return 'Church';\n        }\n      }\n      \n      person('firstName') // Alonzo\n      person('lastName') // Church\n    "),o.a.createElement("p",null,'So here it is, our first "object". It might be hard to see exactly how our function here is an object, but with a little squinting we can see that it fulfills the exact same role as an object. The normal object has two properties which we can access, so does our "object". The only difference between them is the method of access. Our normal objects have their properties accessed through the dot operator, while our "objects" are through function application. In fact, a simple shift in language can show just how similar our "object" is to real objects.'," "),o.a.createElement(r.d,{size:"3",text:"Terminological"}),o.a.createElement("p",null,'SmallTalk is one the first OO languages; almost all of what is thought about as OO stems from it. Unfortunately we have lost a bit of SmallTalks terminology, terminology which would make things more clear. In the languages we are used to there are two ways to do things with objects, accessing properties (or fields) and invoking methods. With SmallTalk, there was just a single abstraction, message passing (This is called the "uniform access principle" and is the reason people often cite for Java getters/setters.) This "limitation" does not make SmallTalk any less capable. Everything you can do with objects in a modern language can be done in SmallTalk. Once we think about the dot operator as simple sending a message to our object, is our function application any different? We are simple sending the message as a string and our object is replying.'),o.a.createElement(r.d,{size:"2",text:"More Advanced Objects"}),o.a.createElement("p",null,"Our first object (I hope you can see that I am justified in remove those quotes) was fairly limited. In order to make a new person with a different name, we would have to go write a whole new function. But our original javascript object had the same problem, while simpler in syntax, we still how to write out the whole thing. Let's fix that."),o.a.createElement(r.e,null,"\n      function createPerson(firstName, lastName) {\n        return {\n          firstName: firstName,\n          lastName: lastName\n        }\n      }\n      \n      const person = createPerson('Alonzo', 'Church');\n      person.firstName // Alonzo\n      person.lastName // Church\n    "),o.a.createElement("p",null,"Simple enough change, we just made a function that takes some parameters and returns our object. In fact, we can do the same for our object."),o.a.createElement(r.e,null,"\n      function createPerson(firstName, lastName) {\n        return function(property) {\n          if (property === 'firstName') {\n            return firstName;\n          } else if (property === 'lastName') {\n            return lastName;\n          }\n        }\n      }\n      \n      const person = createPerson('Alonzo', 'Church');\n      person('firstName') // Alonzo\n      person('lastName') // Church\n    "),o.a.createElement("p",null,'Since our object is just a function, we create a function that returns a function. Even with this "factory" function, our object continues to work just as it did before. But some of you may think, that\'s not a "real" object, "real" objects have methods. So let\'s add a method.'),o.a.createElement(r.d,{size:"3",text:"Methods"}),o.a.createElement(r.e,null,"\n      function createPerson(firstName, lastName) {\n        return {\n          firstName: firstName,\n          lastName: lastName,\n          fullName: function() {\n              return firstName + \" \" + lastName;\n          }\n        }\n      const person = createPerson('Alonzo', 'Church');\n      person.fullName(); // Alonzo Church\n    "),o.a.createElement("p",null,"Alright, there we are, an object with a method, this won't be too hard to recreate using our function technique."),o.a.createElement(r.e,null,"\n      function createPerson(firstName, lastName) {\n        return function(property) {\n          if (property === 'firstName') {\n            return firstName;\n          } else if (property === 'lastName') {\n            return lastName;\n          } else if (property === 'fullName') {\n            return function() {\n              return firstName + \" \" + lastName;\n            }\n          }\n        }\n      }\n      \n      const person = createPerson('Alonzo', 'Church');\n      person('fullName')(); // Alonzo Church\n    "),o.a.createElement("p",null,'That was simple enough. A method is really just a function. So all we need to do is have our object return a function when you access a property. Then you can call that function. Again though, some people might be saying, this isn\'t a "real" object, "real" objects encapsulate state.'," "),o.a.createElement(r.d,{size:"3",text:"State"}),o.a.createElement(r.e,null,"\n      function makeCounter() {\n        return {\n          value: 0,\n          increment: function() {\n            this.value += 1;\n            return this.value;\n          }\n        }\n      }\n      \n      const counter1 = makeCounter();\n      const counter2 = makeCounter();\n      \n      counter1.increment() // 1\n      counter1.increment() // 2\n      \n      counter2.increment() // 1\n      counter1.increment() // 3\n    "),o.a.createElement("p",null,"Here we have an objects which encapsulates a bit of state. Each counter here keeps its own value. We can call increment on one counter, without affecting the other. This might seem a bit tricky to implement using our function-style objects, but it actually is no more complicated than any others."),o.a.createElement(r.e,null,"\n      function makeCounter() {\n        const value = 0;\n        return function(property) {\n          if (property === 'increment') {\n            return function() {\n              value += 1;\n              return value;\n            }\n          }\n        }\n      }\n      \n      const counter1 = makeCounter();\n      const counter2 = makeCounter();\n      \n      counter1('increment')() // 1\n      counter1('increment')() // 2\n      \n      counter2('increment')() // 1\n      counter1('increment')()// 3\n    "),o.a.createElement("p",null,"Our object with encapsulated state makes use of closures to hold state. In fact, in this version our state is actually further encapsulated because our value isn't publicly accessible. The only way anyone can get at the value is by sending the message 'increment'."),o.a.createElement(r.d,{size:"3",text:"More to come"}),o.a.createElement("p",null,"This is of course a lot more to object oriented programming than what has been shown here. Most notably missing from the discussion is inheritance. Unfortunately addressing inheritance is a bit outside the scope of this article. Perhaps we will revisit it at some point in the future. But even with that feature left out, I hope some of the magic has been removed from objects. Objects aren't special. We don't need magic to make them, we just need simple functions."))}}},[[455,1,0]]]);