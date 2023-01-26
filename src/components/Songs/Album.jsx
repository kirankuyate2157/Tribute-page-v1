import React from 'react'

const Album = () => {
    return (
        <>
            <div className="py-2">
                <div className=" px-8 border-x-2 border-red-500">
                    <img src="data:image/jpeg;base64,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"
                        alt='album img'
                        className="h-64 w-full" />

                </div>
            </div>
        </>
    )
}

export default Album