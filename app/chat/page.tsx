"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Search, Paperclip, Mic, User } from "lucide-react";

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedChat, setSelectedChat] = useState(1);

  const conversations = [
    {
      id: 1,
      name: "John",
      lastMessage: "These are the prescribed meds for...",
      time: "11:30PM",
      unread: true,
    },
    {
      id: 2,
      name: "John",
      lastMessage: "There are the pro...",
      time: "11:28PM",
      unread: false,
    },
    {
      id: 3,
      name: "John",
      lastMessage: "These are the prescribed meds for...",
      time: "11:25PM",
      unread: true,
    },
    {
      id: 4,
      name: "John",
      lastMessage: "There are the pro...",
      time: "11:20PM",
      unread: false,
    },
    {
      id: 5,
      name: "John",
      lastMessage: "These are the prescribed meds for...",
      time: "11:15PM",
      unread: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John",
      text: "My heart rate is 97 bpm. What can I do to improve my health?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      text: "Thanks for sharing your heart rate. A resting heart rate of 97 bpm is still within the normal range (60-100 bpm), but it's on the higher side. This can sometimes be influenced by stress, caffeine, dehydration, or lack of sleep. To help bring it down, I recommend: - Staying hydrated and limiting caffeine or alcohol. - Getting enough rest and practicing relaxation techniques like deep breathing. - Maintaining regular physical activity such as walking or light exercise. If your heart rate stays elevated over time or you notice symptoms like chest pain, dizziness, or shortness of breath, it's important to schedule a check-up so we can rule out any underlying issues.",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "John",
      text: "Ok, Thank You!",
      time: "10:35 AM",
      isMe: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 flex overflow-hidden">
          {/* Messages List Panel */}
          <div className="w-80 bg-white border-r flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Messages</h2>

              {/* Search */}
              <div className="relative mb-4">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search conversations"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("active")}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeTab === "active"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  ACTIVE
                </button>
                <button
                  onClick={() => setActiveTab("archive")}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeTab === "archive"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  ARCHIVE
                </button>
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    selectedChat === conversation.id ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800">
                        {conversation.name}
                      </h3>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {conversation.time}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Conversation Panel */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dr. John Doe</h3>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Date Separator */}
              <div className="text-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              {/* Messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.isMe ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-gray-600" />
                  </div>
                  <div
                    className={`flex-1 max-w-[70%] ${
                      message.isMe ? "flex flex-col items-end" : ""
                    }`}
                  >
                    <div
                      className={`rounded-lg p-3 ${
                        message.isMe
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {message.text}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type something..."
                  className="flex-1 px-4 py-3 bg-blue-50 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip size={20} className="text-gray-600" />
                </button>
                <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mic size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
