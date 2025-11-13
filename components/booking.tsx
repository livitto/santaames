"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Mail, User, Sparkles, Loader2, Phone, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send booking request")
      }

      console.log("[v0] Booking request sent successfully")
      setShowConfirmation(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      })
    } catch (err) {
      console.error("[v0] Error submitting booking:", err)
      setError("Failed to send booking request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-full mb-4 font-bold text-sm shadow-lg">
            <Clock className="w-4 h-4" />
            <span>Usually Respond in 24Hr</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Book Santaames</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Reserve your holiday magic today</p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-[#FFD700] shadow-2xl bg-white">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>
              )}

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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Family Visits">Family Visits</SelectItem>
                    <SelectItem value="Corporate Events">Corporate Events</SelectItem>
                    <SelectItem value="Community Events">Community Events</SelectItem>
                    <SelectItem value="Schools & Nursing Homes">Schools & Nursing Homes</SelectItem>
                  </SelectContent>
                </Select>
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white text-lg py-6 rounded-full border-2 border-[#FFD700] font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Booking Request"
                )}
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
