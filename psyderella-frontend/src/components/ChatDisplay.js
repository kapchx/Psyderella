const ChatDisplay = () => {
    return (
        <>
            <Chat descendingOrderMessages={descendingOrderMessages} />
            <ChatInput
                user={user}
                clickedUser={clickedUser} getUserMessages={getUsersMessages} getClickedUsersMessages={getClickedUsersMessages} />
        </>
    )
}

export default ChatDisplay