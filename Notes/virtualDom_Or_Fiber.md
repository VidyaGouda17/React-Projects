https://github.com/acdlite/react-fiber-architecture

1. What is fiber ?

- Fiber is a data structure used by React to manage the rendering process of components in an
  efficient manner. It helps React to schedule and prioritize work, which leads to better performance
  and responsiveness for applications with complex or large component trees.

2. CreateRoot : It will create a dom tree in the browser

- `ReactDOM.createRoot(container[, options])`
- Main Dom and React Dom it will compare only changed data will be updated in the main dom
- Whenever there is change in the data the main dom will vanish and create new dom
- Virtual Dom : will trace the dom and will check the changed data or value only these data will get updated (Js will work like virtual dom)

3. When there are completely changes in the data then every time the dom will get updated it's not the correct way to do

4. what is fiber ?
   The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

5. key features of fiber ?
   pause work and come back to it later.
   assign priority to different types of work.
   reuse previously completed work.
   abort work if it's no longer needed.

6. What is the reconciliation ?
   :- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
   : - update
   A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
   The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).
   Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called

   Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
