"use client";
import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Volume2, Home, BarChart3, BookOpen, Settings, Heart, Activity, Menu, X } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface JournalEntry {
  id: number;
  date: string;
  emotions: string;
  routine: string;
}

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Serenity, your mental health companion. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleTextSubmit = () => {
    if (inputText.trim() === "") return;
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I understand how you're feeling. It's important to acknowledge these emotions. Would you like to talk more about what's on your mind?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      const userMessage = {
        id: messages.length + 1,
        text: "I'm feeling a bit overwhelmed with work lately.",
        isUser: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "It sounds like you're under a lot of pressure. Remember to take breaks and practice self-care. Would you like some breathing exercises to help you relax?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1500);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  const weeklyData = [
    { day: "Mon", mood: 65, stress: 40 },
    { day: "Tue", mood: 55, stress: 50 },
    { day: "Wed", mood: 70, stress: 35 },
    { day: "Thu", mood: 60, stress: 45 },
    { day: "Fri", mood: 75, stress: 30 },
    { day: "Sat", mood: 80, stress: 25 },
    { day: "Sun", mood: 70, stress: 35 },
  ];

  const monthlyData = [
    { week: "Week 1", wellness: 60 },
    { week: "Week 2", wellness: 65 },
    { week: "Week 3", wellness: 70 },
    { week: "Week 4", wellness: 75 },
  ];

  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      emotions: "Feeling optimistic and focused",
      routine: "Morning meditation, work tasks, evening walk",
    },
  ]);
  const [newJournalEntry, setNewJournalEntry] = useState({
    emotions: "",
    routine: "",
  });

  const handleJournalSubmit = () => {
    if (newJournalEntry.emotions.trim() === "" && newJournalEntry.routine.trim() === "") return;
    const entry = {
      id: journalEntries.length + 1,
      date: new Date().toLocaleDateString(),
      emotions: newJournalEntry.emotions,
      routine: newJournalEntry.routine,
    };
    setJournalEntries([entry, ...journalEntries]);
    setNewJournalEntry({ emotions: "", routine: "" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium text-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">Serenity</h1>
                <p className="text-xs text-muted-foreground">Mental Wellness</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => { setActiveTab("chat"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "chat"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Chat</span>
            </button>
            <button
              onClick={() => { setActiveTab("analytics"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "analytics"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </button>
            <button
              onClick={() => { setActiveTab("journal"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "journal"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Journal</span>
            </button>
            <button
              onClick={() => { setActiveTab("tools"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "tools"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Activity className="w-5 h-5" />
              <span className="font-medium">Wellness Tools</span>
            </button>
          </nav>

          {/* Settings */}
          <div className="p-4 border-t border-border">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-30">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-all"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h2 className="text-xl font-bold text-foreground">
                {activeTab === "chat" && "Chat with Serenity"}
                {activeTab === "analytics" && "Your Analytics"}
                {activeTab === "journal" && "Daily Journal"}
                {activeTab === "tools" && "Wellness Tools"}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {/* Chat Tab */}
          {activeTab === "chat" && (
            <div className="max-w-4xl mx-auto h-full flex flex-col">
              <div className="flex-1 bg-card rounded-2xl shadow-sm border border-border p-6 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.isUser
                            ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-md"
                            : "bg-muted text-foreground rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Input Area */}
              <div className="bg-card rounded-2xl shadow-sm border border-border p-4 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleTextSubmit()}
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all bg-background"
                  />
                  <button
                    onClick={handleTextSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex justify-center gap-3">
                  <button
                    onClick={toggleListening}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      isListening
                        ? "bg-destructive text-destructive-foreground shadow-lg"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span className="text-sm font-medium">{isListening ? "Stop" : "Voice"}</span>
                  </button>
                  <button
                    onClick={toggleSpeaking}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      isSpeaking
                        ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Speak</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Mood & Stress */}
              <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Weekly Mood & Stress</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="w-full flex flex-col items-center gap-1 mb-2">
                        <div 
                          className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t transition-all duration-700"
                          style={{ height: `${day.mood}%`, minHeight: '10px' }}
                        ></div>
                        <div 
                          className="w-full bg-gradient-to-t from-destructive/80 to-destructive rounded-t transition-all duration-700"
                          style={{ height: `${day.stress}%`, minHeight: '10px' }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Mood</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Stress</span>
                  </div>
                </div>
              </div>

              {/* Monthly Wellness */}
              <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Monthly Wellness Trend</h3>
                <div className="h-64 flex items-end justify-between gap-4">
                  {monthlyData.map((week, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t transition-all duration-700"
                        style={{ height: `${week.wellness}%`, minHeight: '10px' }}
                      ></div>
                      <span className="text-xs text-muted-foreground font-medium mt-2">{week.week}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Wellness Score</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Journal Tab */}
          {activeTab === "journal" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">New Entry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Today's Emotions</label>
                    <textarea
                      value={newJournalEntry.emotions}
                      onChange={(e) => setNewJournalEntry({ ...newJournalEntry, emotions: e.target.value })}
                      placeholder="How are you feeling today?"
                      className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent min-h-[100px] bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Daily Routine</label>
                    <textarea
                      value={newJournalEntry.routine}
                      onChange={(e) => setNewJournalEntry({ ...newJournalEntry, routine: e.target.value })}
                      placeholder="What did your day look like?"
                      className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent min-h-[100px] bg-background"
                    />
                  </div>
                  <button
                    onClick={handleJournalSubmit}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all font-medium"
                  >
                    Save Entry
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Recent Entries</h3>
                <div className="space-y-4">
                  {journalEntries.map((entry) => (
                    <div key={entry.id} className="p-4 rounded-xl bg-muted border border-border">
                      <div className="text-xs font-medium text-primary mb-3">{entry.date}</div>
                      {entry.emotions && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-foreground mb-1">Emotions:</p>
                          <p className="text-sm text-muted-foreground">{entry.emotions}</p>
                        </div>
                      )}
                      {entry.routine && (
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">Routine:</p>
                          <p className="text-sm text-muted-foreground">{entry.routine}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Wellness Tools Tab */}
          {activeTab === "tools" && (
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl shadow-sm border border-border p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Breathing Exercise</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Guided breathing to help you relax and refocus
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all font-medium">
                  Start Exercise
                </button>
              </div>

              <div className="bg-card rounded-2xl shadow-sm border border-border p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Mood Tracker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your emotions over time to identify patterns
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all font-medium">
                  View Tracker
                </button>
              </div>

              <div className="bg-card rounded-2xl shadow-sm border border-border p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Guided Meditation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calm your mind with guided meditation sessions
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all font-medium">
                  Start Session
                </button>
              </div>

              <div className="bg-card rounded-2xl shadow-sm border border-border p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Stress Relief</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick exercises to reduce stress and anxiety
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg transition-all font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}