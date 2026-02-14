import React, { useState } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { BsRobot, BsCalendar3, BsHeadset } from 'react-icons/bs';

function Chatbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleOptionClick = (option) => {
        setShowOptions(false);
        setMessages([{
            text: `Hi there! 👋\n\nLooking for something specific today?`,
            sender: "bot"
        }]);
        
        if (option === 'chat') {
            setMessages(prev => [...prev, {
                text: "Great! I'm here to help. What would you like to know about enesHR?",
                sender: "bot"
            }]);
        } else if (option === 'meeting') {
            setMessages(prev => [...prev, {
                text: "I'd be happy to help you schedule a meeting. Please provide your preferred date and time.",
                sender: "bot"
            }]);
        } else if (option === 'support') {
            setMessages(prev => [...prev, {
                text: "Our support team is here to help! What issue are you experiencing?",
                sender: "bot"
            }]);
        }
    };

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = input;
            setMessages([...messages, { text: userMessage, sender: "user" }]);
            setInput('');
            
            try {
                const response = await fetch('http://localhost:5000/chat/public', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: userMessage })
                });
                
                const data = await response.json();
                
                if (response.ok && data.reply) {
                    setMessages(prev => [...prev, { 
                        text: data.reply, 
                        sender: "bot" 
                    }]);
                } else {
                    setMessages(prev => [...prev, { 
                        text: data.error || "Sorry, I couldn't process your request.", 
                        sender: "bot" 
                    }]);
                }
            } catch (error) {
                setMessages(prev => [...prev, { 
                    text: "Connection error. Make sure your backend is running.", 
                    sender: "bot" 
                }]);
            }
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        if (messages.length === 0) {
            setShowOptions(true);
        }
    };

    return (
        <>
            <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbox-header">
                    <h4>enesHR Assistant</h4>
                    <FiX onClick={() => setIsOpen(false)} className="close-chat" />
                </div>
                
                {showOptions ? (
                    <div className="chatbox-options">
                        <div className="welcome-message">
                            <h3>Hi, there! 👋</h3>
                            <p>Looking for something specific today?</p>
                        </div>
                        
                        <div className="option-buttons">
                            <button className="option-btn" onClick={() => handleOptionClick('chat')}>
                                <BsRobot /> Chat with Harper our AI Sales Agent
                            </button>
                            <button className="option-btn" onClick={() => handleOptionClick('meeting')}>
                                <BsCalendar3 /> Schedule a meeting 📅
                            </button>
                            <button className="option-btn" onClick={() => handleOptionClick('support')}>
                                <BsHeadset /> Customer Support 🔧
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="chatbox-messages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chatbox-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                            />
                            <FiSend onClick={handleSend} className="send-icon" />
                        </div>
                    </>
                )}
            </div>

            <div className="chatbox-toggle" onClick={handleOpen}>
                <FiMessageCircle size={24} />
            </div>
        </>
    );
}

export default Chatbox;
