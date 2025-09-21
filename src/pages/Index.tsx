import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Shield, Thermometer, Leaf, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Państwem w ciągu 24 godzin.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            System-i
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Profesjonalna izolacja dachów i rozwiązania termoizolacyjne
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-100">
            Zaufanie • Doświadczenie • Energooszczędność
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-light text-accent-foreground shadow-button transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              O nas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Jesteśmy specjalistami w dziedzinie izolacji dachów z wieloletnim doświadczeniem. 
              Nasza misja to dostarczanie najwyższej jakości rozwiązań termoizolacyjnych, 
              które zwiększają efektywność energetyczną budynków i zapewniają komfort mieszkańców.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Zaufanie</h3>
                  <p className="text-muted-foreground">
                    Wieloletnie doświadczenie i referencje zadowolonych klientów
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Thermometer className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Ekspertyza</h3>
                  <p className="text-muted-foreground">
                    Specjalizacja w nowoczesnych rozwiązaniach termoizolacyjnych
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Ekologia</h3>
                  <p className="text-muted-foreground">
                    Rozwiązania przyjazne środowisku i energooszczędne
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Nasze usługi
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Oferujemy kompleksowe rozwiązania w zakresie izolacji dachów
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Izolacja dachów",
                description: "Profesjonalna izolacja dachów skośnych i płaskich z wykorzystaniem najnowszych materiałów"
              },
              {
                title: "Ochrona termiczna",
                description: "Kompleksowe systemy ochrony termicznej budynków zwiększające efektywność energetyczną"
              },
              {
                title: "Rozwiązania energooszczędne",
                description: "Nowoczesne technologie zmniejszające zużycie energii i koszty ogrzewania"
              },
              {
                title: "Doradztwo techniczne",
                description: "Profesjonalne doradztwo w wyborze optymalnych rozwiązań izolacyjnych"
              },
              {
                title: "Kontrola jakości",
                description: "Szczegółowa kontrola jakości wykonanych prac i długoterminowa gwarancja"
              },
              {
                title: "Serwis posprzedażny",
                description: "Kompleksowy serwis i wsparcie techniczne po zakończeniu realizacji"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Kontakt
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-card shadow-card border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                      Dane kontaktowe
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-card-foreground">Adres</p>
                          <p className="text-muted-foreground">01-684 Warszawa</p>
                          <p className="text-muted-foreground">ul. Klaudyny 18/200</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-card-foreground">Telefon</p>
                          <a href="tel:+48603966676" className="text-primary hover:text-primary-light transition-colors">
                            +48 603 966 676
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-card-foreground">Email</p>
                          <a href="mailto:biuro@system-i.pl" className="text-primary hover:text-primary-light transition-colors block">
                            biuro@system-i.pl
                          </a>
                          <a href="mailto:czarek.stepniak@system-i.pl" className="text-primary hover:text-primary-light transition-colors block">
                            czarek.stepniak@system-i.pl
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Map */}
                <Card className="bg-card shadow-card border-0">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8155634567985!2d21.09547397654321!3d52.286755771969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c9f8c8c8f%3A0x8c8c8c8c8c8c8c8c!2sKlaudyny%2018%2C%2001-684%20Warszawa!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                    Formularz kontaktowy
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Imię i nazwisko *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-input bg-background"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Adres email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-input bg-background"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Numer telefonu"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-input bg-background"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Wiadomość *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-input bg-background resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-button transition-all duration-300"
                      size="lg"
                    >
                      Wyślij wiadomość
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">System-i</h3>
              <p className="text-blue-100 mb-4">
                Profesjonalna izolacja dachów i rozwiązania termoizolacyjne
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-blue-100">
                <p>01-684 Warszawa, ul. Klaudyny 18/200</p>
                <p>Tel: +48 603 966 676</p>
                <p>Email: biuro@system-i.pl</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Dane prawne</h4>
              <div className="space-y-2 text-blue-100">
                <p>NIP: 522-116-56-01</p>
                <p>REGON: 016964754</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 System-i. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;