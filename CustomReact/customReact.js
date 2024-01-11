

// i want to render the html element into the browser
// tree element in the dom
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://googl.com',
    target: '_black'
  },
  children: 'Click Me to Visit Google'
};


// this function takes ReactElement and this element will inject inside the mainRoot element 
function CustomRender ( ReactElement, mainRoot )
{
  // 1 create dom Element
  // const domElement = document.createElement( ReactElement.type );
  // domElement.innerHTML = ReactElement.children;
  // domElement.setAttribute( "href", ReactElement.props.href );
  // domElement.setAttribute( "target", ReactElement.props.target );
  // mainRoot.appendChild( domElement );

  // optimise the above code

  const domElement = document.createElement( ReactElement.type );
  domElement.innerHTML = ReactElement.children;
  for ( const prop in ReactElement.props )
  {
    if ( prop === 'children' ) continue;
    domElement.setAttribute( prop, ReactElement.props[ prop ] );
  }
  mainRoot.appendChild( domElement );
};



// access the main root element from the html
const mainRoot = document.querySelector( '#customReact' );

// how to render the react element into the root

CustomRender( ReactElement, mainRoot );

//  In react the work flow will be like above the element will be created and the tree will created and injected into the browser