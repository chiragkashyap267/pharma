"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Chip,
  Stack,
  Rating,
  Avatar,
  Divider,
  TextField,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import {
  AutoAwesome,
  ArrowForward,
  Star,
  FormatQuote,
  CheckCircle,
  Speed,
  Security,
  Psychology,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

// --- Types & Interfaces ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
  direction?: string;
}

interface BentoCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  colSpan?: number;
  gradient?: boolean;
}

interface ModernProductCardProps {
  title: string;
  price: string;
  tag: string;
  image: string;
}

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
}

// --- Theme & Design Tokens ---
const themeColors = {
  bg: '#030712', // Richer, darker black
  primary: '#3b82f6',
  textMain: '#f8fafc',
  textMuted: '#94a3b8',
  border: 'rgba(255, 255, 255, 0.08)',
  glass: 'rgba(255, 255, 255, 0.03)',
  glassHigh: 'rgba(255, 255, 255, 0.08)',
};

// --- Custom Animations & Effects ---
const AuroraBackground = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: themeColors.bg,
    }}
  >
    <div className="aurora-blob blob-1" />
    <div className="aurora-blob blob-2" />
    <div className="aurora-blob blob-3" />
    <div className="grid-overlay" />
  </Box>
);

// --- Scroll Reveal Component ---
const FadeIn = ({ children, delay = '0ms', direction = 'up' }: FadeInProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-anim ${direction} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

// --- Navbar ---
const Navbar = () => (
  <AppBar
    position="fixed"
    elevation={0}
    sx={{
      background: 'rgba(3, 7, 18, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${themeColors.border}`,
      zIndex: 1000,
    }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 72 }}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <Box
            sx={{
              width: 36,
              height: 36,
              background: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AutoAwesome sx={{ color: 'white', fontSize: 20 }} />
          </Box>
          <Typography variant="h6" fontWeight="800" letterSpacing={0.5} sx={{ color: 'white' }}>
            MEDICO VERGE
          </Typography>
        </Stack>
        
        <Stack direction="row" gap={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {['Platform', 'Care Plans', 'Specialists', 'About'].map((item) => (
            <Typography
              key={item}
              variant="body2"
              fontWeight="500"
              sx={{
                cursor: 'pointer',
                color: themeColors.textMuted,
                transition: '0.2s',
                '&:hover': { color: 'white' }
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" gap={1.5}>
           <Button
            variant="text"
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Patient Login
          </Button>
          <Button
            variant="contained"
            sx={{
              background: 'white',
              color: 'black',
              borderRadius: '8px',
              px: 2.5,
              textTransform: 'none',
              fontWeight: 700,
              '&:hover': { background: '#e2e8f0' }
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

// --- Modern Bento Card ---
const BentoCard = ({ title, desc, icon, colSpan = 4, gradient = false }: BentoCardProps) => (
  <Grid item xs={12} md={colSpan as any} sx={{ height: '100%' }}>
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        minHeight: '240px',
        p: 4,
        background: gradient ? 'linear-gradient(145deg, rgba(59, 130, 246, 0.1) 0%, rgba(3, 7, 18, 0.4) 100%)' : themeColors.glass,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${themeColors.border}`,
        borderRadius: '24px',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          borderColor: 'rgba(255,255,255,0.2)',
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }
      }}
    >
      <Box sx={{ zIndex: 1 }}>
        <Box sx={{ 
          width: 48, 
          height: 48, 
          borderRadius: '12px', 
          background: 'rgba(255,255,255,0.05)', 
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 3,
          color: 'white'
        }}>
          {icon}
        </Box>
        <Typography variant="h5" fontWeight="700" color="white" gutterBottom>{title}</Typography>
        <Typography variant="body1" color={themeColors.textMuted} sx={{ lineHeight: 1.6 }}>{desc}</Typography>
      </Box>
    </Paper>
  </Grid>
);

// --- Product Card with Real Image ---
const ModernProductCard = ({ title, price, tag, image }: ModernProductCardProps) => (
  <Paper
    elevation={0}
    sx={{
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${themeColors.border}`,
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      height: '100%',
      '&:hover': {
        borderColor: themeColors.primary,
        transform: 'translateY(-4px)',
        '& .img-zoom': {
          transform: 'scale(1.05)'
        }
      }
    }}
  >
    <Box sx={{ height: 240, overflow: 'hidden', position: 'relative' }}>
       <Box 
        component="img"
        src={image}
        className="img-zoom"
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
       />
       <Chip 
        label={tag} 
        size="small" 
        sx={{ 
          position: 'absolute', 
          top: 12, 
          left: 12, 
          bgcolor: 'rgba(0,0,0,0.6)', 
          backdropFilter: 'blur(4px)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.1)',
          fontWeight: 600,
          fontSize: '0.75rem'
        }} 
      />
    </Box>
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="start" mb={2}>
        <Box>
          <Typography variant="h6" fontWeight="700" color="white" lineHeight={1.2}>{title}</Typography>
          <Typography variant="body2" color={themeColors.textMuted}>Premium Grade</Typography>
        </Box>
        <Typography variant="h6" fontWeight="600" color="white">{price}</Typography>
      </Stack>
      <Button 
        fullWidth 
        variant="outlined" 
        sx={{ 
          borderColor: themeColors.border, 
          color: 'white', 
          '&:hover': { borderColor: 'white', background: 'transparent' } 
        }}
      >
        Add to Cart
      </Button>
    </Box>
  </Paper>
);

// --- Testimonial Card ---
const TestimonialCard = ({ name, role, quote, image, stars }: TestimonialCardProps) => (
  <Paper
    sx={{
      p: 4,
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${themeColors.border}`,
      borderRadius: '20px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
  >
    <Box>
      <Rating value={stars} readOnly size="small" sx={{ color: '#fbbf24', mb: 2 }} />
      <Typography variant="body1" sx={{ color: '#e2e8f0', mb: 3, lineHeight: 1.7, fontStyle: 'italic' }}>
        "{quote}"
      </Typography>
    </Box>
    <Stack direction="row" gap={2} alignItems="center">
      <Avatar src={image} sx={{ width: 48, height: 48, border: '2px solid rgba(255,255,255,0.1)' }} />
      <Box>
        <Typography variant="subtitle2" fontWeight="bold" color="white">{name}</Typography>
        <Typography variant="caption" sx={{ color: themeColors.textMuted }}>{role}</Typography>
      </Box>
    </Stack>
  </Paper>
);

// --- Main Page Component ---

export default function AnviraHome() {
  return (
    <Box sx={{ minHeight: '100vh', color: themeColors.textMain, position: 'relative' }}>
      <AuroraBackground />
      <Navbar />

      {/* HERO SECTION */}
      <Container maxWidth="lg" sx={{ pt: 20, pb: 12, position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <FadeIn>
          <Chip 
            label="Medico Verge Intelligence 2.0 is Live" 
            sx={{ 
              bgcolor: 'rgba(59, 130, 246, 0.1)', 
              color: '#93c5fd', 
              mb: 4, 
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontWeight: 600 
            }} 
          />
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5.5rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              mb: 3,
              background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Medicine without <br /> the waiting room.
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: themeColors.textMuted,
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              fontWeight: 400
            }}
          >
            Connect with board-certified physicians in minutes. AI-driven diagnostics meets human compassion for faster, more accurate care.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: 'white',
                color: 'black',
                px: 5,
                py: 2,
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 30px rgba(255,255,255,0.3)'
                }
              }}
            >
              Find a Doctor
            </Button>
            <Button
              size="large"
              sx={{
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                border: `1px solid ${themeColors.border}`,
                px: 5,
                py: 2,
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  borderColor: 'white'
                }
              }}
            >
              How it works
            </Button>
          </Stack>
        </FadeIn>
      </Container>

      {/* DASHBOARD PREVIEW (Professional Medical UI) */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, mb: 10 }}>
        <FadeIn delay="200ms">
          <Box
            sx={{
              borderRadius: '24px',
              border: `1px solid ${themeColors.border}`,
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              p: 1.5,
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)'
            }}
          >
             {/* Main App Window */}
             <Box sx={{ bgcolor: '#0f172a', borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: { xs: 'auto', md: '21/9' }, minHeight: 400 }}>
                {/* Header */}
                <Box sx={{ height: 60, borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', px: 4, justifyContent: 'space-between' }}>
                   <Stack direction="row" gap={4} alignItems="center">
                      <Typography fontWeight="bold" color="white">Patient Portal</Typography>
                      <Stack direction="row" gap={3}>
                         <Typography variant="body2" color="primary">Overview</Typography>
                         <Typography variant="body2" color={themeColors.textMuted}>Consultations</Typography>
                         <Typography variant="body2" color={themeColors.textMuted}>Prescriptions</Typography>
                      </Stack>
                   </Stack>
                   <Avatar src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80" sx={{ width: 32, height: 32 }} />
                </Box>
                
                {/* Body Content */}
                <Grid container sx={{ height: 'calc(100% - 60px)' }}>
                   {/* Sidebar */}
                   <Grid item xs={3} sx={{ borderRight: '1px solid rgba(255,255,255,0.05)', p: 4, display: { xs: 'none', md: 'block' } }}>
                      <Typography variant="caption" color={themeColors.textMuted} sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>Next Appointment</Typography>
                      <Paper sx={{ mt: 2, p: 2, bgcolor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '12px' }}>
                         <Typography fontWeight="bold" color="white">Dr. Sarah Kline</Typography>
                         <Typography variant="caption" color="primary">Today, 2:30 PM</Typography>
                         <Typography variant="body2" color={themeColors.textMuted} mt={1}>General Checkup • Video Call</Typography>
                      </Paper>
                      
                      <Typography variant="caption" color={themeColors.textMuted} sx={{ textTransform: 'uppercase', letterSpacing: 1, display: 'block', mt: 4 }}>Vitals</Typography>
                      <Stack spacing={2} mt={2}>
                         {['Heart Rate: 72 bpm', 'Blood Pressure: 120/80', 'Oxygen: 98%'].map(vital => (
                            <Box key={vital} sx={{ p: 1.5, borderRadius: '8px', bgcolor: 'rgba(255,255,255,0.03)' }}>
                               <Typography variant="body2" color="white">{vital}</Typography>
                            </Box>
                         ))}
                      </Stack>
                   </Grid>
                   
                   {/* Main Content Area */}
                   <Grid item xs={12} md={9} sx={{ p: 4 }}>
                      <Typography variant="h5" fontWeight="bold" color="white" mb={4}>Recent Analysis</Typography>
                      <Grid container spacing={3}>
                         <Grid item xs={12} md={8}>
                            <Box sx={{ height: 200, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                               <img 
                                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                                 style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, borderRadius: '16px' }} 
                                 alt="Analytics Graph"
                               />
                            </Box>
                         </Grid>
                         <Grid item xs={12} md={4}>
                            <Paper sx={{ height: 200, p: 3, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                               <Typography fontWeight="bold" color="white" mb={2}>Prescriptions</Typography>
                               <Stack spacing={2}>
                                  <Stack direction="row" alignItems="center" gap={2}>
                                     <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
                                     <Typography variant="body2" color={themeColors.textMuted}>Amoxicillin 500mg</Typography>
                                  </Stack>
                                  <Stack direction="row" alignItems="center" gap={2}>
                                     <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
                                     <Typography variant="body2" color={themeColors.textMuted}>Vitamin D3</Typography>
                                  </Stack>
                               </Stack>
                               <Button variant="outlined" size="small" fullWidth sx={{ mt: 4, color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Refill All</Button>
                            </Paper>
                         </Grid>
                      </Grid>
                   </Grid>
                </Grid>
             </Box>
          </Box>
        </FadeIn>
      </Container>

      {/* BENTO GRID FEATURES */}
      <Box sx={{ py: 15, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <FadeIn>
              <Typography variant="h2" fontWeight="800" mb={2}>Everything you need.</Typography>
              <Typography variant="h5" color={themeColors.textMuted}>A complete ecosystem for modern health.</Typography>
            </FadeIn>
          </Box>
          
          <Grid container spacing={3} sx={{ height: { md: '600px' } }}>
            {/* Left Large Card */}
            <BentoCard 
              colSpan={7} 
              icon={<Psychology fontSize="large" />}
              title="AI-Powered Diagnostics" 
              desc="Our proprietary LLM analyzes symptoms, genetic history, and lifestyle data to provide clinical-grade insights in seconds. It's like having a team of specialists in your pocket."
              gradient={true}
            />
            
            {/* Right Stack */}
            <Grid item xs={12} md={5} container spacing={3} direction="column" sx={{ height: '100%' }}>
              <Grid item xs={12} sx={{ flex: 1 }}>
                 <BentoCard 
                  colSpan={12}
                  icon={<Speed fontSize="large" />}
                  title="Instant Consultations" 
                  desc="Wait times under 90 seconds. Speak to real doctors, anytime."
                />
              </Grid>
              <Grid item xs={12} sx={{ flex: 1 }}>
                 <BentoCard 
                  colSpan={12}
                  icon={<Security fontSize="large" />}
                  title="Bank-Grade Privacy" 
                  desc="HIPAA compliant. Your data is vaulted with military-grade AES-256."
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WORKFLOW (With Real Doctor Image) */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
         <Grid container alignItems="center" spacing={8}>
            <Grid item xs={12} md={6}>
              <FadeIn direction="right">
                <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={2}>WORKFLOW</Typography>
                <Typography variant="h3" fontWeight="800" mb={4} mt={1}>Care that revolves<br/>around you.</Typography>
                
                {[
                  { title: 'Digital Triage', desc: 'Input your symptoms and history via our secure app.', step: '01' },
                  { title: 'Specialist Review', desc: 'A board-certified doctor reviews your case instantly.', step: '02' },
                  { title: 'Treatment Plan', desc: 'Prescriptions sent to your pharmacy or delivered to your door.', step: '03' }
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 3, mb: 4, position: 'relative' }}>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.1)', fontWeight: 900, fontSize: '2rem' }}>{item.step}</Typography>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="white">{item.title}</Typography>
                      <Typography variant="body2" color={themeColors.textMuted}>{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </FadeIn>
            </Grid>
            <Grid item xs={12} md={6}>
               <FadeIn delay="200ms">
                 <Box 
                  sx={{ 
                    height: 500, 
                    width: '100%', 
                    borderRadius: '32px', 
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                 >
                   <Box 
                     component="img"
                     src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                     sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
                   />
                   <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      p: 4, 
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' 
                    }}
                   >
                     <Stack direction="row" alignItems="center" gap={1} mb={1}>
                       <CheckCircle sx={{ color: '#22c55e', fontSize: 20 }} />
                       <Typography fontWeight="bold" color="white">Verified Specialist</Typography>
                     </Stack>
                     <Typography variant="h6" color="white">Dr. Emily Chen, MD</Typography>
                     <Typography variant="body2" color="rgba(255,255,255,0.7)">Cardiology • 15 Yrs Exp</Typography>
                   </Box>
                 </Box>
               </FadeIn>
            </Grid>
         </Grid>
      </Container>

      {/* SHOP SECTION (Real Images) */}
      <Box sx={{ py: 15, borderTop: `1px solid ${themeColors.border}` }}>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" alignItems="end" mb={6}>
            <Typography variant="h4" fontWeight="800">Essentials Store</Typography>
            <Button sx={{ color: 'white', textTransform: 'none' }} endIcon={<ArrowForward />}>View Catalog</Button>
          </Stack>
          
          <Grid container spacing={3}>
             {[
               { title: "Omega-3 Complex", price: "$24.00", tag: "Heart Health", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80" },
               { title: "Neuro Focus", price: "$32.50", tag: "Brain", image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80" },
               { title: "Daily Multivitamin", price: "$18.00", tag: "Wellness", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80" },
               { title: "Hydrate+", price: "$12.00", tag: "Sport", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80" }
             ].map((product, i) => (
               <Grid item xs={12} sm={6} md={3} key={i}>
                 <FadeIn delay={`${i * 100}ms`}>
                   <ModernProductCard {...product} />
                 </FadeIn>
               </Grid>
             ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS SECTION */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <FadeIn>
          <Typography variant="h3" fontWeight="800" textAlign="center" mb={8}>Trusted by thousands.</Typography>
        </FadeIn>
        <Grid container spacing={4}>
          {[
            { 
              name: "Michael Ross", 
              role: "Marathon Runner", 
              quote: "The speed of service is unmatched. I got my consultation and prescription sorted before my lunch break ended.", 
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
              stars: 5 
            },
            { 
              name: "Elena Rodriguez", 
              role: "Working Mom", 
              quote: "Finally, a healthcare platform that respects my time. The AI diagnostics were surprisingly accurate and the doctor was lovely.", 
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
              stars: 5 
            },
            { 
              name: "David Chen", 
              role: "Software Engineer", 
              quote: "The interface is beautiful and intuitive. It feels like the future of medicine is finally here.", 
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
              stars: 4 
            },
            { 
              name: "Sarah Kline", 
              role: "Yoga Instructor", 
              quote: "I use the essentials store monthly. High quality supplements and I love the eco-friendly packaging.", 
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
              stars: 5 
            }
          ].map((t, i) => (
            <Grid item xs={12} md={3} key={i}>
              <FadeIn delay={`${i * 150}ms`}>
                <TestimonialCard {...t} />
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}
      <Box sx={{ borderTop: `1px solid ${themeColors.border}`, py: 8, bgcolor: 'rgba(0,0,0,0.4)' }}>
        <Container maxWidth="lg">
           <Grid container spacing={8} justifyContent="space-between">
              <Grid item xs={12} md={4}>
                 <Stack direction="row" alignItems="center" gap={1} mb={2}>
                    <AutoAwesome sx={{ color: themeColors.primary, fontSize: 20 }} />
                    <Typography variant="h6" fontWeight="800">MEDICO VERGE</Typography>
                 </Stack>
                 <Typography variant="body2" color={themeColors.textMuted} sx={{ maxWidth: '300px', lineHeight: 1.6 }}>
                   Redefining personalized healthcare through artificial intelligence and human compassion.
                 </Typography>
                 <Stack direction="row" spacing={2} mt={3}>
                    {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                       <IconButton key={i} size="small" sx={{ color: themeColors.textMuted, border: `1px solid ${themeColors.border}`, '&:hover': { color: 'white', borderColor: 'white' } }}>
                          <Icon fontSize="small" />
                       </IconButton>
                    ))}
                 </Stack>
              </Grid>
              
              <Grid item xs={6} md={2}>
                 <Typography variant="subtitle2" fontWeight="bold" color="white" mb={3}>Patient Care</Typography>
                 <Stack spacing={2}>
                   {['Find a Doctor', 'Urgent Care', 'Mental Health', 'Prescriptions'].map(i => (
                     <Typography key={i} variant="body2" color={themeColors.textMuted} sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>{i}</Typography>
                   ))}
                 </Stack>
              </Grid>
              
              <Grid item xs={6} md={2}>
                 <Typography variant="subtitle2" fontWeight="bold" color="white" mb={3}>Company</Typography>
                 <Stack spacing={2}>
                   {['About Us', 'Careers', 'Press', 'Contact'].map(i => (
                     <Typography key={i} variant="body2" color={themeColors.textMuted} sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>{i}</Typography>
                   ))}
                 </Stack>
              </Grid>
              
              <Grid item xs={12} md={3}>
                 <Typography variant="subtitle2" fontWeight="bold" color="white" mb={3}>Newsletter</Typography>
                 <TextField 
                    placeholder="Enter your email" 
                    variant="outlined" 
                    size="small" 
                    fullWidth
                    sx={{ 
                       mb: 2,
                       '& .MuiOutlinedInput-root': { 
                          color: 'white',
                          bgcolor: 'rgba(255,255,255,0.05)',
                          '& fieldset': { borderColor: themeColors.border },
                          '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' }
                       } 
                    }} 
                 />
                 <Button fullWidth variant="contained" sx={{ bgcolor: 'white', color: 'black', fontWeight: 'bold', '&:hover': { bgcolor: '#e2e8f0' } }}>Subscribe</Button>
              </Grid>
           </Grid>
           
           <Divider sx={{ borderColor: themeColors.border, my: 6 }} />
           
           <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" gap={2}>
              <Typography variant="caption" color={themeColors.textMuted}>© 2026 Medico Verge Inc. All rights reserved.</Typography>
              <Stack direction="row" spacing={4}>
                 <Typography variant="caption" color={themeColors.textMuted} sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
                 <Typography variant="caption" color={themeColors.textMuted} sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Terms of Service</Typography>
                 <Typography variant="caption" color={themeColors.textMuted} sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Cookie Settings</Typography>
              </Stack>
           </Stack>
        </Container>
      </Box>

      {/* GLOBAL CSS FOR AURORA & ANIMATIONS */}
      <style>{`
        body { margin: 0; background: #030712; }
        
        /* AURORA ANIMATION */
        .aurora-blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.4;
          border-radius: 50%;
          animation: drift 20s infinite alternate;
        }
        .blob-1 {
          top: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: #3b82f6;
          animation-delay: 0s;
        }
        .blob-2 {
          top: 20%;
          right: -10%;
          width: 40vw;
          height: 40vw;
          background: #8b5cf6;
          animation-delay: -5s;
        }
        .blob-3 {
          bottom: -10%;
          left: 20%;
          width: 60vw;
          height: 40vw;
          background: #2dd4bf;
          animation-delay: -10s;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
          100% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* REVEAL ANIMATIONS */
        .reveal-anim {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-anim.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-anim.right {
           transform: translateX(-20px);
        }
        .reveal-anim.right.visible {
           transform: translateX(0);
        }
      `}</style>
    </Box>
  );
}