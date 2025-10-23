"use client"

import ChessboardComponent from "@/components/game/chessboard";
import ChatWindow from "@/components/game/chat-window";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function GamePage() {
    return (
        <div className="min-h-screen">
            {/* Main Content Area */}
            <div className="flex-1">
                <ChessboardComponent />
            </div>

            {/* Chat Sheet */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size="lg"
                        className="fixed right-6 bottom-6 size-12 rounded-full shadow-lg"
                    >
                        <MessageCircle className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
                    <ChatWindow />
                </SheetContent>
            </Sheet>
        </div>
    );
}