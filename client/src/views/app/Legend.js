import React from 'react'

const LegendBox = ({ colors, lebel }) => {
    return (
        <div className="d-flex">
            {
                colors.map((el, i) => (
                    <span title={lebel[i]} >
                        <span className=" log-indicator align-middle  " style={{ border: `none`, backgroundColor: `${el}` }}></span> <span className="mr-3"  style={{fontSize:'14px'}} > {lebel[i]}</span>
                    </span>
                ))
            }
        </div>
    )
}

export default LegendBox
