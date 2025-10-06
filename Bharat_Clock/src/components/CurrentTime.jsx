import React from 'react'

const CurrentTime = () => {
    let currDate = new Date();
    return (
        <>
           <div className="d-flex justify-content-evenly timeData">
             <div className="date fw-bolder">
                <p>The current date is : {currDate.toLocaleDateString()}</p>
            </div>
            <div className="time fw-bolder">
                <p>The current time is : {
                    currDate.toLocaleTimeString()}</p>
            </div>
           </div>
        </>
    )
}

export default CurrentTime