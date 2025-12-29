import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Thermometer,
  Leaf,
  CheckCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";
import logo from "@/assets/strona duze logo.png";
import { title } from "process";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Państwem w ciągu 24 godzin.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
            <div className="logoPhoto">
              <img src={logo} alt="SYSTEM I – logo" className="h-20 w-auto" />
            </div>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Hydroizolacja i termoizolacja przegród w budownictwie.
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-100">
            Zaufanie • Doświadczenie • Energooszczędność
          </p>
          <Button
            size="lg"
            className="  hover:bg-accent-light text-accent-foreground shadow-button transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
            <div className="justify-text text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 space-y-6">
              <p>
                Firma <b style={{color: "hsl(var(--primary-light))"}}>SYSTEM I</b> to Twój niezawodny partner w dziedzinie
                dekarstwa. Specjalizujemy się w kompleksowym wykonaniu izolacji
                zarówno podczas wznoszenia nowych budynków, jak i przy
                remontowaniu już istniejących. Nasze wieloletnie doświadczenie
                oraz zaangażowanie w proces budowlany gwarantują trwałość,
                bezpieczeństwo i wysoką jakość wykonania. Dbamy o każdy detal,
                bo w naszej branży to bardzo ważne. Stosujemy materiały
                sprawdzonych dostawców technologii.
              </p>
              <p>
                Nasze realizacje charakteryzuje najwyższa jakość prac,
                uczciwość, terminowość i transparentność. Zawsze uczestniczymy w
                procesach budowlanych a rozwiązania projektowe są omawiane z
                projektantami, kierownictwem budowy oraz inspektorami nadzoru.
                Zawsze staramy się znaleźć najlepsze rozwiązania dopasowane do
                indywidualnych potrzeb i budżetu. Wykonujemy izolacje dachów
                budynków mieszkalnych i przemysłowych, tarasów, balkonów a także
                izolacje patio i fundamentów.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    Zaufanie
                  </h3>
                  <p className="text-muted-foreground">
                    Wieloletnie doświadczenie i referencje zadowolonych klientów
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Thermometer className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    Ekspertyza
                  </h3>
                  <p className="text-muted-foreground">
                    Specjalizacja w nowoczesnych rozwiązaniach termoizolacyjnych
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    Ekologia
                  </h3>
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
      <section className="py-24 bg-background bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Ekspertyza oraz naprawa
            </h2>
            <div className="justify-text shadow-card card-look">
              <p className="text-lg md:text-xl text-muted-foreground">
                Bazując na bogatym doświadczeniu skutecznie usuwamy przecieki i nieszczelności,
                 poprzez wykonywanie badań szczelności dachów metodą impedancji elektrycznej, metodą elektrooporową, przy pomocy prób dymowych, prób wodnych i innych.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Nasze prace dotyczące wykrywania nieszczelności na dachach, pozwalają na uniknięcie kosztownych napraw uszkodzeń zniszczonych wewnątrz budynków.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Partnerzy i współpraca
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Działamy na technologiach sprawdzonych producentów i współpracujemy z firmami wykonawczymi przy realizacji inwestycji budowlanych, zarówno mieszkaniowych jak i przemysłowych.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                    Partnerzy handlowi i dostawcy technologii
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Bauder",
                      "Protan",
                      "Soprema",
                      "Rockwool",
                      "Styropmin",
                      "Austrotherm",
                      "Synthos",
                      "Ejot",
                      "Etanco",
                      "Swisspor",
                    ].map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full text-sm bg-background border border-input text-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                    Firmy, z którymi współpracujemy
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Ferrero Polska Sp. z o.o.",
                      "Mostostal Warszawa SA",
                      "Warbud SA",
                      "Budimex SA",
                      "Instalnika Sp. z o.o.",
                      "Teatr Wielki - Opera Narodowa",
                      "WB Electronics SA",
                      "Eiffage Polska",
                      "Budownictwo SA",
                      "Strabag Sp. z o.o.",
                      "Adamietz Sp. z o.o.",
                    ].map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full text-sm bg-background border border-input text-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    Lista obejmuje wybrane podmioty; przedstawiamy ją w celach
                    informacyjnych.
                  </p>
                </CardContent>
              </Card>
            </div>
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
              <p className="text-lg md:text-xl text-muted-foreground"></p>
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
                          <p className="font-medium text-card-foreground">
                            Adres
                          </p>
                          <p className="text-muted-foreground">
                            01-991 Warszawa
                          </p>
                          <p className="text-muted-foreground">
                            ul. Heroldów 21E lok. 38
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-card-foreground">
                            Telefon
                          </p>
                          <a
                            href="tel:+48603966676"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            +48 603 966 676
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-card-foreground">
                            Email
                          </p>
                          <a
                            href="mailto:biuro@system-i.pl"
                            className="text-primary hover:text-primary-light transition-colors block"
                          >
                            system.i@wp.pl
                          </a>
                          <a
                            href="mailto:czarek.stepniak@system-i.pl"
                            className="text-primary hover:text-primary-light transition-colors block"
                          >
                            biuro@system-i.pl
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-8">
                  <iframe
                    src="https://www.google.com/maps?q=01-991%20Warszawa%20ul.%20Herold%C3%B3w%2021E%20lok.%2038&output=embed"
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">System I</h3>
              <p className="text-blue-100 mb-4">
                Hydroizolacja i termoizolacja przegród w budownictwie.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-blue-100">
                <p>01-991 Warszawa, ul. Heroldów 21E lok. 38</p>
                <p>Tel: +48 603 966 676</p>
                <p>Email: system.i@wp.pl</p>
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
            <p>SYSTEM I</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
