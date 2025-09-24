'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';

import { MailIcon, MapPinIcon, Clock, Loader, MessageCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { useState } from 'react';

// Валидация Zod
const formSchema = z.object({
  firstName: z.string().min(2, 'Bitte geben Sie einen gültigen Vornamen ein.'),
  lastName: z.string().min(2, 'Bitte geben Sie einen gültigen Nachnamen ein.'),
  email: z.email('Bitte geben Sie eine gültige E-Mail ein.'),
  message: z.string().min(10, 'Die Nachricht sollte mindestens 10 Zeichen enthalten.'),
  acceptTerms: z.boolean().refine((v) => v, 'Bitte stimmen Sie den AGB zu.')
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      acceptTerms: false
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      if (data.ok) {
        toast.success('Ihre Nachricht wurde erfolgreich gesendet');
        form.reset(); // очистка формы
      } else {
        toast.error('Fehler: ' + (data.error || 'Nachricht konnte nicht gesendet werden.'));
      }
    } catch (error) {
      console.error(error);
      toast.error('Serverfehler – bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontakt" className="bg-custom-light flex items-center justify-center py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          <span className="block uppercase tracking-wider text-base font-medium span-custom-color">Kontakt</span>
          <h2 className="text-4xl font-bold lg:text-5xl">Sprechen Sie mit unserem Team</h2>
          <p className="text-pretty text-lg">
            Wir freuen uns auf Ihre Anfrage. Füllen Sie einfach das Formular aus oder schreiben Sie uns direkt.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
          {/* Kontakt-Infos */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="bg-custom-dark h-12 w-12 flex items-center justify-center rounded-full">
                <MailIcon color="white" />
              </div>
              <h3 className="mt-6 font-semibold text-xl">E-Mail</h3>
              <p className="my-2.5 text-muted-foreground">
                Schreiben Sie uns – wir melden uns schnellstmöglich zurück.
              </p>
              <Link className="font-medium text-primary hover:underline" href="mailto:info@anzorov-cons.de">
                info@anzorov-cons.de
              </Link>
            </div>
            <div>
              <div className="bg-custom-dark h-12 w-12 flex items-center justify-center rounded-full">
                <Clock color="white" />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Bürozeiten</h3>
              <p className="my-2.5 text-muted-foreground">Wir sind für Sie erreichbar von:</p>
              <div className="font-medium text-primary">
                Montag – Freitag <br /> 09:00 – 12:00 Uhr <br /> 14:00 – 17:00 Uhr
              </div>
            </div>
            <div>
              <div className="bg-custom-dark h-12 w-12 flex items-center justify-center rounded-full">
                <MapPinIcon color="white" />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Büro</h3>
              <p className="my-2.5 text-muted-foreground">Besuchen Sie uns gerne in unserem Büro.</p>
              <Link
                className="font-medium text-primary hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Eugen-Richter-Straße+45,+99085+Erfurt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eugen-Richter-Straße 45 / 4.OG <br /> D-99085 Erfurt
              </Link>
            </div>
            <div>
              <div className="bg-custom-dark h-12 w-12 flex items-center justify-center rounded-full">
                <MessageCircle color="white" />
              </div>
              <h3 className="mt-6 font-semibold text-xl">WhatsApp</h3>
              <p className="my-2.5 text-muted-foreground">Schnelle Hilfe? Einfach per WhatsApp kontaktieren.</p>
              <Link
                className="font-medium text-primary inline-flex items-center gap-1 hover:underline"
                href="https://wa.me/4936121523277"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt Chat starten <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>

          {/* Formular */}
          <Card className="card-custom-bg shadow-none">
            <CardContent className="p-6 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="col-span-2 sm:col-span-1">
                          <FormLabel>Vorname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Vorname"
                              className="bg-white mt-1.5 h-11 text-black shadow-none"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="col-span-2 sm:col-span-1">
                          <FormLabel>Nachname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nachname"
                              className="bg-white mt-1.5 text-black h-11 shadow-none"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>E-Mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="E-Mail"
                              className="bg-white mt-1.5 text-black h-11 shadow-none"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Nachricht</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ihre Nachricht"
                              rows={6}
                              className="bg-white mt-1.5 text-black shadow-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Die Nachricht sollte mindestens 10 Zeichen enthalten.</FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="col-span-2 flex items-center gap-2 flex-wrap sm:flex-nowrap">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="cursor-pointer border-custom-color data-[state=checked]:bg-[#112D4E] data-[state=checked]:text-white"
                            />
                          </FormControl>
                          <FormLabel className="flex flex-wrap">
                            <span>Ich stimme der</span>
                            <Link href="/datenschutz" className="underline">
                              Datenschutzerklärung
                            </Link>
                            <span>zu.</span>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="btn-custom-bg cursor-pointer mt-6 w-full text-base"
                    size="lg"
                  >
                    {isLoading ? <Loader className="animate-spin" /> : 'Absenden'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
