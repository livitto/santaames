"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Mail, User, Baby, Gift, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function MagicVideoMessage() {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    childName: "",
    childAge: "",
    specialInfo: "",
    wishList: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Load Wistia scripts
    const playerScript = document.createElement("script")
    playerScript.src = "https://fast.wistia.com/player.js"
    playerScript.async = true
    document.body.appendChild(playerScript)

    const embedScript = document.createElement("script")
    embedScript.src = "https://fast.wistia.com/embed/qksyuci38w.js"
    embedScript.async = true
    embedScript.type = "module"
    embedScript.onload = () => setScriptLoaded(true)
    document.body.appendChild(embedScript)

    // Add Wistia styles
    const style = document.createElement("style")
    style.innerHTML = `
      wistia-player[media-id='qksyuci38w']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qksyuci38w/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:100.0%; 
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.removeChild(playerScript)
      document.body.removeChild(embedScript)
      document.head.removeChild(style)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/send-magic-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send request")
      }

      setShowConfirmation(true)

      // Reset form
      setFormData({
        parentName: "",
        parentEmail: "",
        childName: "",
        childAge: "",
        specialInfo: "",
        wishList: "",
      })
    } catch (err) {
      console.error("[v0] Error submitting magic message request:", err)
      setError("Failed to send request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="magic-video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#B71C1C] px-4 py-2 rounded-full mb-4 font-bold text-sm shadow-lg border-2 border-[#B71C1C]">
            <Sparkles className="w-4 h-4" />
            <span>FREE Service - Limited Spots!</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Santa's Magic Video Message</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized 30-second video message from Santa for your child - absolutely FREE! Delivered before
            Christmas.
          </p>
        </div>

        {/* Video and Form Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Video Container */}
            <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FFFAF7] p-4 md:p-6 rounded-2xl border-2 border-[#FFD700] shadow-xl flex flex-col justify-center">
              <div className="aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <wistia-player media-id="qksyuci38w" aspect="1.0" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Watch Santa explain how to get your personalized video message!
                </p>
              </div>
            </div>

            {/* Form Container */}
            <Card className="border-2 border-[#FFD700] shadow-2xl bg-white flex flex-col">
              <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#B71C1C] mb-1">
                    Request Your Magic Message
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Fill out the form below and Santa will create a special video just for your child!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>
                  )}

                  <div className="space-y-1.5">
                    <Label htmlFor="parentName" className="flex items-center gap-2 text-xs md:text-sm">
                      <User className="w-4 h-4" />
                      Your Name (Parent/Guardian)
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Your name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="parentEmail" className="flex items-center gap-2 text-xs md:text-sm">
                      <Mail className="w-4 h-4" />
                      Your Email Address
                    </Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="childName" className="flex items-center gap-2 text-xs md:text-sm">
                      <Baby className="w-4 h-4" />
                      Child's Name
                    </Label>
                    <Input
                      id="childName"
                      placeholder="Child's first name"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="childAge" className="text-xs md:text-sm">
                      Child's Age
                    </Label>
                    <Input
                      id="childAge"
                      type="number"
                      placeholder="Age"
                      min="1"
                      max="12"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="specialInfo" className="flex items-center gap-2 text-xs md:text-sm">
                      <Sparkles className="w-4 h-4" />
                      What Makes Them Special?
                    </Label>
                    <Textarea
                      id="specialInfo"
                      placeholder="Tell Santa about your child's achievements, interests, or special qualities..."
                      value={formData.specialInfo}
                      onChange={(e) => setFormData({ ...formData, specialInfo: e.target.value })}
                      rows={2}
                      required
                      disabled={isSubmitting}
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="wishList" className="flex items-center gap-2 text-xs md:text-sm">
                      <Gift className="w-4 h-4" />
                      Christmas Wish List
                    </Label>
                    <Textarea
                      id="wishList"
                      placeholder="What would they like for Christmas?"
                      value={formData.wishList}
                      onChange={(e) => setFormData({ ...formData, wishList: e.target.value })}
                      rows={2}
                      required
                      disabled={isSubmitting}
                      className="text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white text-base md:text-lg py-4 md:py-6 rounded-full border-2 border-[#FFD700] font-bold mt-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending to Santa...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Request Magic Video
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Limited spots available! Videos will be delivered before Christmas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 mx-auto mb-4 bg-[#B71C1C] rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#FFD700]" />
            </div>
            <DialogTitle className="text-center font-serif text-2xl text-[#B71C1C]">
              Magic Message Request Received!
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Ho, ho, ho! Santa has received your request and will create a special personalized video message for your
              child. You'll receive it via email before Christmas. Keep an eye on your inbox!
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
    </section>
  )
}
