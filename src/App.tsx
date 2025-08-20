import { AlertTriangle, Stethoscope, Send, Phone, Shield, Clock, MessageSquare } from 'lucide-react';
import React, { useState, useRef } from 'react';
import './styles/main.css';
import { analyzeSymptoms } from './utils/symptoms';

interface Message {
  text: string;
  isUser: boolean;
}

function App() {
  const [input, setInput] = useState('');
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your medical assistant. Please describe your symptoms, and I'll try to help. Remember, this is for informational purposes only and not a substitute for professional medical advice.",
      isUser: false
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const getGreetingResponse = (input: string): string | null => {
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    const userInput = input.toLowerCase().trim();
    
    if (greetings.some(greeting => userInput.includes(greeting))) {
      return "Hello! How are you feeling today? I'm here to help you understand your symptoms and provide general health information.";
    }

    if (userInput.includes('who are you') || userInput.includes('what are you') || userInput.includes('about you')) {
      return "I'm an AI medical assistant designed to help you understand potential health conditions based on your symptoms. I can provide general information about common ailments and suggest over-the-counter remedies. However, I'm not a replacement for professional medical advice, and you should always consult with a healthcare provider for proper diagnosis and treatment.";
    }
    if (userInput.includes('thank you') || userInput.includes('thanks')) {
      return "You're welcome! If you have any more questions or need assistance, feel free to ask.";
    }
    if (userInput.includes('bye') || userInput.includes('goodbye')) {
      return "Goodbye! Take care of yourself. If you have any more questions in the future, don't hesitate to reach out.Also enter your phone number and subscribe to get notification on medicine and health tips.";
    }
    if (userInput.includes('not feeling well') || userInput.includes('not good') || userInput.includes('sick')) {
      return "I'm sorry to hear that you're not feeling well. Please describe your symptoms, and I'll do my best to help you.";
    }
    if(userInput.includes('help') || userInput.includes('assist') || userInput.includes('support')) {
      return "I'm here to help! Please describe your symptoms or any health concerns you have, and I'll provide you with information and suggestions.";
    }
    if (userInput.includes('symptoms') || userInput.includes('condition') || userInput.includes('diagnosis')) {
      return "Please describe your symptoms in detail, and I'll try to help you understand what might be going on. Remember, this is for informational purposes only and not a substitute for professional medical advice.";
    }
    if (userInput.includes('ok') || userInput.includes('done') || userInput.includes('ok done')) {
      return "Hope I resolved your issue.Always feel free to contact me if you need help.";
    }
    if (userInput.includes('what do you do') || userInput.includes('your purpose')) {
      return "I'm here to assist you with understanding your symptoms and provide general health information. Please let me know how I can help you today.";
    }
    if (userInput.includes('medicine') || userInput.includes('medication') || userInput.includes('drugs')||userInput.includes('pills')) {
      return "I can provide general information about common over-the-counter medications. Please describe your symptoms, and I'll suggest some options.";
    }
    if (userInput.includes('advice') || userInput.includes('recommendation') || userInput.includes('suggestion')) {
      return "I'm here to provide general health information and suggestions based on your symptoms. Please describe what you're experiencing, and I'll do my best to assist you.";
    }
    if (userInput.includes('emergency') || userInput.includes('urgent') || userInput.includes('critical')) {
      return "If you're experiencing a medical emergency, please call your local emergency services or go to the nearest hospital immediately. Your health and safety are the top priority.";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
  
    setTimeout(() => {
      const greetingResponse = getGreetingResponse(input);
      const symptomAnalysis = analyzeSymptoms(input);
  
      let responseText = '';
      if (greetingResponse) {
        responseText = greetingResponse;
      } else if (symptomAnalysis) {
        responseText = `Based on your symptoms, you might be experiencing ${symptomAnalysis.condition}.\n\n` +
          `Common symptoms include:\n${symptomAnalysis.symptoms.join('\n')}\n\n` +
          `Recommendations:\n${symptomAnalysis.recommendations.join('\n')}\n\n` +
          `⚠️ Warning Signs (Seek immediate medical attention if you experience):\n${symptomAnalysis.warning_signs.join('\n')}\n\n` +
          `Pills:\n${symptomAnalysis.pills.join('\n')}\n\n` + // ADD THIS LINE
          `Urgency Level: ${symptomAnalysis.urgency.toUpperCase()}\n\n` +
          `Remember: This is for informational purposes only. Please consult a healthcare professional for proper diagnosis and treatment.`;
      } else {
        responseText = "I apologize, but I couldn't identify specific symptoms in your message. Could you please describe your symptoms more specifically? For example, mention if you have fever, cough, headache, etc.";
      }
  
      setMessages(prev => [...prev, { text: responseText, isUser: false }]);
      setIsLoading(false);
    }, 1000);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    // Handle phone submission logic here
    setPhone('');
  };

  return (
    <div className="chat-container">
      <header className="header">
        <div className="header-content">
          <div className="header-title">
            <Stethoscope size={32} />
            <h1>Medical Assistant</h1>
          </div>
        </div>
      </header>

      <div className="disclaimer">
        <div className="disclaimer-box">
          <div className="flex">
            <AlertTriangle size={20} />
            <p>
              This is an AI assistant for informational purposes only. Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>

      <main className="chat-main">
        <div className="chat-window">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="send-button"
              >
                <Send size={16} />
                Send
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="features-grid">
            <div className="feature-card">
              <Shield size={24} />
              <h3>Privacy First</h3>
              <p>Your health information is private and secure. We use state-of-the-art encryption to protect your data.</p>
            </div>
            <div className="feature-card">
              <Clock size={24} />
              <h3>24/7 Availability</h3>
              <p>Get instant responses to your health queries any time of the day or night.</p>
            </div>
            <div className="feature-card">
              <MessageSquare size={24} />
              <h3>Smart Analysis</h3>
              <p>Advanced AI technology to analyze your symptoms and provide relevant information.</p>
            </div>
          </div>
          

          <div className="contact-section">
            <h2>Stay Connected</h2>
            <p>Leave your contact number for personalized health updates and reminders.</p>
            <form onSubmit={handlePhoneSubmit} className="contact-form">
              <div className="phone-input-container">
                <Phone size={20} />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <button type="submit" className="contact-submit-button">
                Subscribe
              </button>
            </form>
          </div>
          <div>
      
  
    </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Medical Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  
  );
}

export default App;