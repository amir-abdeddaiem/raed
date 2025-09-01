"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { personalInfo } from "@/lib/data"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const { t, language, isRTL } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.required
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.invalidEmail
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.form.required
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.required
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setStatusMessage(data.message || t.contact.form.success)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setErrors({})
      } else {
        setStatus("error")
        setStatusMessage(data.error || t.contact.form.error)
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")
      setStatusMessage(t.contact.form.error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
            {/* Contact Information */}
            <div className={`space-y-8 ${isRTL ? "lg:col-start-2" : ""}`}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">{t.contact.info}</h3>
                <div className="space-y-6">
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <p className="font-medium text-foreground">{t.contact.form.email}</p>
                      <p className="text-muted-foreground">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card
                className={`border-t-0 border-r-0 border-b-0 shadow-sm ${isRTL ? "border-r-4 border-r-primary border-l-0" : "border-l-4 border-l-primary"}`}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{t.contact.connect}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{t.contact.connectDesc}</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className={`shadow-lg border-0 ${isRTL ? "lg:col-start-1" : ""}`}>
              <CardContent className="p-8">
                {status === "success" && (
                  <div
                    className={`mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm">{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div
                    className={`mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 text-sm">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.form.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`${isRTL ? "text-right" : ""} ${errors.name ? "border-red-500" : ""}`}
                        disabled={status === "loading"}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.form.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`${isRTL ? "text-right" : ""} ${errors.email ? "border-red-500" : ""}`}
                        disabled={status === "loading"}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.subject}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      className={`${isRTL ? "text-right" : ""} ${errors.subject ? "border-red-500" : ""}`}
                      disabled={status === "loading"}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`${isRTL ? "text-right" : ""} ${errors.message ? "border-red-500" : ""}`}
                      disabled={status === "loading"}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full group" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 className={`h-4 w-4 animate-spin ${isRTL ? "ml-2" : "mr-2"}`} />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <Send
                          className={`h-4 w-4 group-hover:translate-x-1 transition-transform ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {t.contact.form.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
