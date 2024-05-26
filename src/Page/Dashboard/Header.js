import React from 'react'


function Header({ setIsAdding }) {

    return (
        <header>
            <h1>Employee Management Application</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>

            </div>
            <div className="app">
    <input type="text" placeholder="search..." className="search"  />
    
  </div>
            
        </header>
    )
}

export default Header