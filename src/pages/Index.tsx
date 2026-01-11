import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Settings',
      title: 'Шиномонтаж',
      description: 'Профессиональная замена и балансировка колес премиум автомобилей',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Детейлинг',
      description: 'Полировка, защита кузова, химчистка салона класса люкс',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Ремонт дисков',
      description: 'Восстановление и реставрация легкосплавных дисков',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Правка геометрии',
      description: 'Профессиональное восстановление геометрии дисков',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'PaintBucket',
      title: 'Покраска дисков',
      description: 'Порошковая окраска в любой цвет с гарантией качества',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Диагностика',
      description: 'Комплексная проверка состояния колес и подвески',
      price: 'от 2 000 ₽'
    }
  ];

  const portfolioItems = [
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/dcfef57e-97f7-4b22-a9c4-bee63c64c616.jpg',
      category: 'shinoservice',
      title: 'Mercedes S-Class',
      description: 'Сезонная замена колес R20'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/62d807db-b0a4-4b87-823b-c835ca37841f.jpg',
      category: 'detailing',
      title: 'Porsche 911',
      description: 'Полный детейлинг + керамическое покрытие'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/b57123d3-a79f-4a64-9ff4-8e2639e789c8.jpg',
      category: 'wheel-repair',
      title: 'BMW M5',
      description: 'Ремонт и покраска дисков R19'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/dcfef57e-97f7-4b22-a9c4-bee63c64c616.jpg',
      category: 'shinoservice',
      title: 'Audi Q7',
      description: 'Шиномонтаж премиум класса'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/62d807db-b0a4-4b87-823b-c835ca37841f.jpg',
      category: 'detailing',
      title: 'Range Rover',
      description: 'Химчистка салона + полировка'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/b57123d3-a79f-4a64-9ff4-8e2639e789c8.jpg',
      category: 'wheel-repair',
      title: 'Lexus LS',
      description: 'Восстановление дисков после ДТП'
    }
  ];

  const reviews = [
    {
      name: 'Алексей Морозов',
      rating: 5,
      text: 'Великолепный сервис! Привез Mercedes на детейлинг – машина выглядит как новая. Внимание к деталям на высшем уровне.',
      date: '15 декабря 2024'
    },
    {
      name: 'Екатерина Волкова',
      rating: 5,
      text: 'Лучший шиномонтаж в Краснодаре! Профессиональная команда, современное оборудование, вежливое обслуживание.',
      date: '10 декабря 2024'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Отремонтировали диски после попадания в яму. Работа выполнена идеально, даже лучше чем были новые!',
      date: '5 декабря 2024'
    }
  ];

  const blogPosts = [
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/dcfef57e-97f7-4b22-a9c4-bee63c64c616.jpg',
      title: 'Как правильно выбрать шины для премиум автомобиля',
      excerpt: 'Подробное руководство по выбору летних и зимних шин для люксовых автомобилей...',
      date: '20 декабря 2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/62d807db-b0a4-4b87-823b-c835ca37841f.jpg',
      title: 'Детейлинг vs обычная мойка: в чем разница',
      excerpt: 'Разбираемся, почему профессиональный детейлинг стоит своих денег...',
      date: '18 декабря 2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/b57123d3-a79f-4a64-9ff4-8e2639e789c8.jpg',
      title: 'Восстановление дисков: когда это возможно',
      excerpt: 'Какие повреждения дисков можно устранить, а когда нужна замена...',
      date: '15 декабря 2024'
    }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" className="text-secondary" size={32} />
              <span className="text-2xl font-bold text-white">LUX AUTO SERVICE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white hover:text-secondary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-white hover:text-secondary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-white hover:text-secondary transition-colors">Отзывы</a>
              <a href="#blog" className="text-white hover:text-secondary transition-colors">Блог</a>
              <a href="#about" className="text-white hover:text-secondary transition-colors">О нас</a>
              <a href="#contacts" className="text-white hover:text-secondary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="hidden md:inline-flex bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                    Записаться
                  </Button>
                </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Запись на сервис</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="service">Услуга</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shinoservice">Шиномонтаж</SelectItem>
                        <SelectItem value="detailing">Детейлинг</SelectItem>
                        <SelectItem value="wheel-repair">Ремонт дисков</SelectItem>
                        <SelectItem value="geometry">Правка геометрии</SelectItem>
                        <SelectItem value="painting">Покраска дисков</SelectItem>
                        <SelectItem value="diagnostics">Диагностика</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="car">Автомобиль</Label>
                    <Input id="car" placeholder="Марка и модель" />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Дополнительная информация" rows={3} />
                  </div>
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
              </Dialog>
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-secondary hover:bg-white/10">
                    <Icon name="Menu" size={28} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-primary text-white border-secondary/20">
                  <SheetHeader>
                    <SheetTitle className="text-white flex items-center gap-2">
                      <Icon name="Car" className="text-secondary" size={28} />
                      <span className="text-xl">LUX AUTO SERVICE</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-6 mt-8">
                    <a 
                      href="#services" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Услуги
                    </a>
                    <a 
                      href="#portfolio" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Портфолио
                    </a>
                    <a 
                      href="#reviews" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Отзывы
                    </a>
                    <a 
                      href="#blog" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Блог
                    </a>
                    <a 
                      href="#about" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      О нас
                    </a>
                    <a 
                      href="#contacts" 
                      className="text-lg text-white hover:text-secondary transition-colors py-2 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Контакты
                    </a>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold mt-4">
                          Записаться на сервис
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Запись на сервис</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div>
                            <Label htmlFor="mobile-name">Имя</Label>
                            <Input id="mobile-name" placeholder="Ваше имя" />
                          </div>
                          <div>
                            <Label htmlFor="mobile-phone">Телефон</Label>
                            <Input id="mobile-phone" placeholder="+7 (___) ___-__-__" />
                          </div>
                          <div>
                            <Label htmlFor="mobile-service">Услуга</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите услугу" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="shinoservice">Шиномонтаж</SelectItem>
                                <SelectItem value="detailing">Детейлинг</SelectItem>
                                <SelectItem value="wheel-repair">Ремонт дисков</SelectItem>
                                <SelectItem value="geometry">Правка геометрии</SelectItem>
                                <SelectItem value="painting">Покраска дисков</SelectItem>
                                <SelectItem value="diagnostics">Диагностика</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                            Отправить заявку
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/dcfef57e-97f7-4b22-a9c4-bee63c64c616.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Премиум Сервис<br />
            <span className="text-secondary">Для Вашего Авто</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Профессиональный уход за автомобилями класса люкс в Краснодаре
          </p>
          <div className="flex gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8">
                  Записаться на сервис
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Запись на сервис</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name2">Имя</Label>
                    <Input id="name2" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone2">Телефон</Label>
                    <Input id="phone2" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="service2">Услуга</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shinoservice">Шиномонтаж</SelectItem>
                        <SelectItem value="detailing">Детейлинг</SelectItem>
                        <SelectItem value="wheel-repair">Ремонт дисков</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-semibold text-lg px-8">
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-primary">Премиум качество</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр профессионального обслуживания для вашего автомобиля
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary"
              >
                <CardContent className="p-8">
                  <div className="mb-6 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{service.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="group-hover:text-secondary">
                          Записаться <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Запись: {service.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div>
                            <Label>Имя</Label>
                            <Input placeholder="Ваше имя" />
                          </div>
                          <div>
                            <Label>Телефон</Label>
                            <Input placeholder="+7 (___) ___-__-__" />
                          </div>
                          <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                            Отправить заявку
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">Наши работы</Badge>
            <h2 className="text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных работ с автомобилями премиум класса
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>
                Все работы
              </TabsTrigger>
              <TabsTrigger value="shinoservice" onClick={() => setSelectedCategory('shinoservice')}>
                Шиномонтаж
              </TabsTrigger>
              <TabsTrigger value="detailing" onClick={() => setSelectedCategory('detailing')}>
                Детейлинг
              </TabsTrigger>
              <TabsTrigger value="wheel-repair" onClick={() => setSelectedCategory('wheel-repair')}>
                Ремонт дисков
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-white/90">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">Отзывы клиентов</Badge>
            <h2 className="text-5xl font-bold mb-4">Что говорят о нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнения владельцев премиум автомобилей о нашем сервисе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-secondary text-primary">О компании</Badge>
              <h2 className="text-5xl font-bold mb-6">15 лет опыта работы с премиум автомобилями</h2>
              <p className="text-lg text-muted-foreground mb-6">
                LUX AUTO SERVICE — ведущий специализированный центр по обслуживанию автомобилей класса люкс в Краснодаре. 
                Мы работаем только с премиум марками и знаем все тонкости работы с ними.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Сертифицированные специалисты</h3>
                    <p className="text-muted-foreground">Все мастера прошли обучение у официальных дилеров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Современное оборудование</h3>
                    <p className="text-muted-foreground">Используем только профессиональную технику последнего поколения</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем официальную гарантию на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/4f51a1d2-d77a-4efd-b8d7-8882594ae2ea/files/62d807db-b0a4-4b87-823b-c835ca37841f.jpg"
                alt="О нас"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">Блог</Badge>
            <h2 className="text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Советы по уходу за премиум автомобилями от наших экспертов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-secondary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-secondary text-primary">Контакты</Badge>
              <h2 className="text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Краснодар, ул. Автосервисная, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (861) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-muted-foreground">info@luxautoservice.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 09:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                    Отправить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" className="text-secondary" size={32} />
                <span className="text-xl font-bold">LUX AUTO SERVICE</span>
              </div>
              <p className="text-white/80">
                Премиум сервис для вашего автомобиля
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Шиномонтаж</li>
                <li>Детейлинг</li>
                <li>Ремонт дисков</li>
                <li>Диагностика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (861) 123-45-67</li>
                <li>info@luxautoservice.ru</li>
                <li>г. Краснодар</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 LUX AUTO SERVICE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;