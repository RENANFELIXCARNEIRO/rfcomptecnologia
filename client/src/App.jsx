import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Cpu, Zap, Settings, Shield, Star, Phone, Mail, MapPin, Monitor, Package, ExternalLink } from 'lucide-react'
import rfcompLogo from './assets/rfcomp-logo.png'
import pc1 from './assets/IMG-20250630-WA0037.jpg'
import pc2 from './assets/IMG-20250630-WA0039.jpg'
import pc3 from './assets/IMG-20250630-WA0040.jpg'
import pc4 from './assets/IMG-20250630-WA0041.jpg'
import pc5 from './assets/IMG-20250630-WA0042.jpg'
import pc6 from './assets/IMG-20250630-WA0043.jpg'
import pc7 from './assets/IMG-20250630-WA0044.jpg'
import pc8 from './assets/IMG-20250630-WA0045.jpg'
import pc9 from './assets/IMG-20250630-WA0046.jpg'
import pc10 from './assets/IMG-20250630-WA0047.jpg'
import pc11 from './assets/IMG-20250630-WA0048.jpg'
import pc12 from './assets/IMG-20250630-WA0049.jpg'
import pc13 from './assets/IMG-20250630-WA0050.jpg'
import pc14 from './assets/IMG-20250630-WA0051.jpg'
import pc15 from './assets/pc-portfolio-15.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedImage, setSelectedImage] = useState(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  const pcPortfolio = [
    { id: 1, image: pc1, title: "Pc Gamer Full White" },
    { id: 2, image: pc2, title: "Pc Gamer Xeon" },
    { id: 3, image: pc3, title: "Pc Gamer Ryzen 5 Vega 11" },
    { id: 4, image: pc4, title: "Pc Gamer Ryzen 7 e Rtx 3080" },
    { id: 5, image: pc5, title: "Pc Gamer AMD" },
    { id: 6, image: pc6, title: "Pc Gamer Xeon Rtx 3060" },
    { id: 7, image: pc7, title: "Pc Gamer AM5" },
    { id: 8, image: pc8, title: "Pc Gamer Mini ITX" },
    { id: 9, image: pc9, title: "Pc Gamer Am4" },
    { id: 10, image: pc10, title: "Pc Gamer Lian Li" },
    { id: 11, image: pc11, title: "Pc Gamer Ryzen 5 + Rx 580" },
    { id: 12, image: pc12, title: "Pc Gamer The Tower 100" },
    { id: 13, image: pc13, title: "Pc Gamer Infinity" },
    { id: 14, image: pc14, title: "Pc Gamer Xeon Full White" },
    { id: 15, image: pc15, title: "Pc Gamer Intel I7 e RX 570" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={rfcompLogo} alt="RFComp Logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('parts')}
              className="text-cyan-300 hover:text-cyan-100 transition-colors"
            >
              Peças
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img src={rfcompLogo} alt="RFComp" className="h-32 w-auto mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            PCs Gamer de Alta Performance
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Qualidade e Personalização ao Seu Alcance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Nossos Serviços
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 text-lg"
            >
              Ver Portfólio
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Monitor className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-cyan-300">Montagem Personalizada</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  PCs gamer sob encomenda
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Construa o PC dos seus sonhos! Escolha processador, placa-mãe, memória, armazenamento e muito mais. Cada máquina é montada com precisão e testada para desempenho máximo.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Package className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-purple-300">Venda de Componentes</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Peças de qualidade com preços competitivos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Processadores, placas-mãe, RAM, SSDs, fontes, coolers e muito mais. Todos os componentes são testados e vem com garantia. Confira nosso catálogo na OLX.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-blue-300">Suporte Técnico</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Consultoria e suporte pós-venda
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Tire suas dúvidas sobre especificações, compatibilidade de componentes e performance. Oferecemos consultoria técnica para ajudar na melhor escolha.</p>
              </CardContent>
            </Card>
          </div>

          {/* Quality Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 text-cyan-300">Qualidade e Confiabilidade</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Peças de Qualidade</h4>
                <p className="text-slate-400">Utilizamos apenas componentes das marcas mais renomadas do mercado</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Montagem Meticulosa</h4>
                <p className="text-slate-400">Atenção aos detalhes em cada aspecto da montagem</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold text-blue-300 mb-2">Performance Máxima</h4>
                <p className="text-slate-400">Sistemas testados para operar em seu potencial máximo</p>
              </div>
            </div>
          </div>

          {/* Custom Build Section */}
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-cyan-500/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Montagens Sob Encomenda
              </CardTitle>
              <CardDescription className="text-lg text-slate-300">
                Seu PC, do Seu Jeito
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Oferecemos um serviço de montagem sob encomenda, onde você tem total liberdade para personalizar cada aspecto da sua máquina. 
                Compartilhe suas necessidades, orçamento e jogos favoritos, e nós construiremos um PC que atenda precisamente às suas especificações.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3"
              >
                Solicite Seu Orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nossos PCs Montados
          </h2>
          <div className="flex items-center justify-center mb-12">
            <Monitor className="h-8 w-8 text-cyan-400 mr-3" />
            <p className="text-lg text-slate-300 text-center">
              Confira nossos PCs gamer disponíveis na OLX
            </p>
          </div>
          <div className="text-center mb-8">
            <a
              href="https://www.olx.com.br/perfil/renan-felix-6ab2f56f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Monitor className="h-5 w-5" />
              Ver Todos os PCs na OLX
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {pcPortfolio.map((pc) => (
              <a
                key={pc.id}
                href="https://www.olx.com.br/perfil/renan-felix-6ab2f56f"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-lg bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <img 
                    src={pc.image} 
                    alt={pc.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-cyan-300 font-semibold text-sm">{pc.title}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-slate-900/50 hover:bg-slate-900/80 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-cyan-300 font-semibold text-lg bg-slate-900/80 rounded-lg p-2">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Sobre a RFComp
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663044498456/68HKDYGGBEmamgzDeX896d/rfcomp_mascote-removebg-preview_9e2ee7bd.png" 
              alt="Mascote RFComp" 
              className="h-48 w-auto mascote-bounce cursor-pointer"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 mb-6">
              Na busca pela experiência de jogo definitiva, cada componente importa. É por isso que nos dedicamos a montar PCs gamer 
              que não apenas atendem, mas superam as expectativas dos nossos clientes.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Nosso compromisso é com a excelência, utilizando apenas peças de qualidade comprovada e das marcas mais renomadas do mercado, 
              garantindo durabilidade, desempenho e estabilidade para suas sessões de jogo mais intensas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                Qualidade Garantida
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Atendimento Personalizado
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Suporte Técnico
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Section */}
      <section id="parts" className="py-16 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Venda de Peças
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Package className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-cyan-300">Componentes de Qualidade</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Peças novas e seminovas para seu PC
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Processadores, placas-mãe, memória RAM, SSDs, fontes, coolers e muito mais. Todos os componentes são testados e vêm com garantia.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-purple-300">Preços Competitivos</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Melhor custo-benefício do mercado
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Oferecemos peças com os melhores preços da região, sem comprometer a qualidade. Consulte nosso catálogo na OLX.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Confira nosso catálogo completo de peças na OLX. Temos uma grande variedade de componentes para montar ou atualizar seu PC gamer.
            </p>
            <a
              href="https://www.olx.com.br/perfil/renan-felix-6ab2f56f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Package className="h-5 w-5" />
              Ver Peças na OLX
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-cyan-500/20 text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-cyan-300">Telefone</CardTitle>
              </CardHeader>
              <CardContent>               
                <p className="text-slate-300">(11) 96903-9608</p>
                <p className="text-slate-300">Entre via Whatsapp em contato para orçamentos e dúvidas</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-purple-300">Email</CardTitle>
              </CardHeader>
              <CardContent>                
                <p className="text-slate-300">renan.rfcomp@gmail.com</p>
                <p className="text-slate-300">Envie suas especificações e receba um orçamento</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-300">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Osasco, SP</p>
                <p className="text-slate-300">Atendemos em toda a região</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={rfcompLogo} alt="RFComp" className="h-8 w-auto" />
          </div>
          <p className="text-slate-400 mb-2">© 2024 RFComp. Todos os direitos reservados.</p>
          <p className="text-slate-500 text-sm">PCs Gamer de Alta Performance - Qualidade e Personalização</p>
        </div>
      </footer>
    </div>
  )
}

export default App

