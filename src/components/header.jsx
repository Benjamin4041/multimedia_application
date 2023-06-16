import React from 'react'

/* `const styles` is an object that contains CSS styles for the Header component. It defines three
properties: `main`, `main_h1`, and `main_p`, each of which contains CSS styles for different
elements within the Header component. These styles are then used in the JSX code to apply the
defined styles to the respective elements. */
const styles={
    main: {
        backgroundColor:'#393839',
        width:'100vw',
        padding:'0.5rem 0rem'
    },
    main_h1: {
        color:"white",
        textAlign:'center'
    },
    main_p: {
        color:"white",
        textAlign:'center'
    }
}
export default function Header() {

  return (
    <div style={styles.main} >
        <h1 style={styles.main_h1}>KM's Drive</h1>
        <p style={styles.main_p}>A File Manager created by kesh Money</p>
    </div>
  )
}
