import React from 'react'

const Header = () => {
//Styling
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5rem',
    }

    return(
        <header style={headerStyle}>
            <h1 style={{
                fontSize: '6rem',
                fontWeight: '600',
                marginBottom: '2rem',
                lineHeight: '1rem',
                color: 'purple',
                textTransform: 'uppercase',
                textAlign: 'center',
                }}
            >
                Todos
            </h1>
        </header>
    )
}

export default Header