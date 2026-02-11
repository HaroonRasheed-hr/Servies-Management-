import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FloatingChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "agent", text: "Hi there! 👋 I'm your Servico assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim().slice(0, 500);
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "agent", text: "Thanks for reaching out! A team member will get back to you shortly. 🙌" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 bg-card rounded-2xl card-shadow border border-border overflow-hidden"
          >
            <div className="bg-accent/10 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-md">
                  <MessageCircle className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">Servico Agent</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={msg.from === "agent" ? "" : "flex justify-end"}>
                  <div
                    className={`rounded-xl px-3 py-2 text-sm max-w-[85%] ${
                      msg.from === "agent"
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "bg-accent/15 text-foreground rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 pb-4 flex gap-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="rounded-full text-sm"
                maxLength={500}
              />
              <Button size="icon" onClick={handleSend} className="rounded-full accent-gradient text-accent-foreground border-0 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble with pulse */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full accent-gradient text-accent-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
        )}
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageCircle className="w-6 h-6 relative z-10" />}
      </motion.button>
    </div>
  );
};

export default FloatingChatBubble;
