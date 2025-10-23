import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

export default function ChatWindow() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey, good luck!", sender: "opponent", name: "Player 2", time: "10:00" },
        { id: 2, text: "Thanks! You too!", sender: "you", name: "You", time: "10:01" },
        { id: 3, text: "Nice move!", sender: "opponent", name: "Player 2", time: "10:05" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (inputValue.trim()) {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    text: inputValue,
                    sender: "you",
                    name: "You",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
            setInputValue("");
        }
    };

    return (
        <div className="flex flex-col h-full">
            <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle>Chat</SheetTitle>
                <SheetDescription>
                    Chat with your opponent during the game
                </SheetDescription>
            </SheetHeader>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className="flex flex-col">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="font-semibold text-sm">{message.name}</span>
                                <span className="text-xs">{message.time}</span>
                            </div>
                            <div className="rounded-lg p-3 border">
                                <p className="text-sm">{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
                <div className="flex gap-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

