const ChatContainer = () => {
    return (
        <ChatHeader/>

        <div>
            <button className="option">Matches</button>
            <button className="option">Chat</button>
        </div>

        <MatchesDisplay/>

        <Chat/>
    )
}

export default ChatContainer