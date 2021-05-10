// 1.) Import React and any other needed components/packages
import React from 'react'

// 2.) Define functional component with name of component and parameters
function Footer() {
    // 3.) Define a state or any internal functions that this component has

    // 4.) Define what html this component will return using jsx
    return (
        <div className="footer">
            <span>Need Help? Email <a href="mailto:marketviewhelp@gmail.com">marketviewhelp@gmail.com</a></span>
        </div>
    )
}

// 5.) Export component so it can be imported elsewhere
export default Footer