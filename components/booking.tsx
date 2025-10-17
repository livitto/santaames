"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, User, Sparkles } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking request:", formData)
    setShowConfirmation(true)
    // Reset form
    setFormData({
      name: "",
      email: "",
      eventType: "",
      date: "",
      message: "",
    })
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-[#FFF8F0] to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Book Santa Ames</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Reserve your holiday magic today</p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-[#FFD700] shadow-2xl bg-white">
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <Input
                  id="eventType"
                  placeholder="e.g., Private Party, Corporate Event, School Visit"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your event, number of guests, special requests, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white text-lg py-6 rounded-full border-2 border-[#FFD700] font-bold"
              >
                Send Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1B5E20] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#FFD700]" />
              </div>
              <DialogTitle className="text-center font-serif text-2xl text-[#B71C1C]">
                Booking Request Received!
              </DialogTitle>
              <DialogDescription className="text-center text-base pt-2">
                Thank you for your booking request! Santa Dave will review your information and get back to you shortly
                via email. We look forward to making your event magical!
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
