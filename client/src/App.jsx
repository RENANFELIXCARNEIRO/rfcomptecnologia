import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Cpu, Zap, Settings, Shield, Star, Phone, Mail, MapPin, Monitor } from 'lucide-react'
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
    { id: 1, image: pc1, title: "PC Gamer Intel" },
    { id: 2, image: pc2, title: "PC Gamer AMD" },
    { id: 3, image: pc3, title: "Setup Completo" },
    { id: 4, image: pc4, title: "PC High-End" },
    { id: 5, image: pc5, title: "Gaming Station" },
    { id: 6, image: pc6, title: "PC Personalizado" },
    { id: 7, image: pc7, title: "Setup RGB" },
    { id: 8, image: pc8, title: "PC Performance" },
    { id: 9, image: pc9, title: "Gaming Build" },
    { id: 10, image: pc10, title: "PC Custom" },
    { id: 11, image: pc11, title: "Setup Gamer" },
    { id: 12, image: pc12, title: "PC Montado" },
    { id: 13, image: pc13, title: "Gaming PC" },
    { id: 14, image: pc14, title: "PC Completo" },
    { id: 15, image: pc15, title: "Setup Premium" }
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
                  <Cpu className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-cyan-300">Processadores Intel</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Alto desempenho em jogos e excelente performance em tarefas de núcleo único
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Ideais para gamers que buscam a máxima taxa de quadros e fluidez em seus títulos favoritos. Com tecnologias avançadas e frequências de clock elevadas.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-purple-300">Processadores AMD</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Versatilidade e excelente custo-benefício com grande número de núcleos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Perfeitos para jogos, multitarefas, streaming e criação de conteúdo. Desempenho excepcional em diversas aplicações simultâneas.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Settings className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-blue-300">Processadores Xeon</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Excelente custo-benefício para configurações de entrada e intermediárias
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Grande número de núcleos a preço acessível. Robustos para multitarefas e aplicações que se beneficiam de muitos núcleos.</p>
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
              Confira alguns dos PCs gamer que já montamos para nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {pcPortfolio.map((pc) => (
              <div 
                key={pc.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(pc)}
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
              </div>
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
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 mb-6">
              Na busca pela experiência de jogo definitiva, cada componente importa. É por isso que nos dedicamos a montar PCs gamer 
              que não apenas atendem, mas superam as expectativas dos nossos clientes.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Nosso compromisso é com a excelência, utilizando apenas peças de qualidade comprovada e das marcas mais renomadas do mercado, 
              garantindo durabilidade, desempenho e estabilidade para suas sessões de jogo mais intensas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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

