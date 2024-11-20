import React from 'react'

type TInvitationProps = {
    params: {
        alias: string
    }
}

export default function Invitation({ params }: TInvitationProps): React.JSX.Element {

    return (
        <div>{params.alias}</div>
    )
}
