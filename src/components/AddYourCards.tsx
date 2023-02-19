import React from 'react'

export default function AddYourCards() {
    return (
        // <div>AddYourCards</div>
        <form>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}>
                <div className="email">
                    <input type="email" placeholder="john" />
                </div>
                <br />
                <input type="email" placeholder="Blake" />
                <br />
                <input type="email" placeholder="john@xyz.com" />
            </div>
        </form>
    )
}
