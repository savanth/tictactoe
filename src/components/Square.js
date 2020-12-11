import React from 'react'


const Square = ({value, onClick, isWinningSquare}) => {
    return (
        <button 
            style={{
                fontWeight: isWinningSquare ? 'bold' : 'normal',
            }}
            type="button" 
            className="square" 
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square
