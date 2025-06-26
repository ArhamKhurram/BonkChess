import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import SocialLinks from '@/components/SocialLinks';

const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('[Landing.tsx] useEffect', { loading, user });
    if (!loading && user) {
      console.log('[Landing.tsx] Redirecting to /play');
      navigate('/play', { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--bonk-bg-start))] to-[hsl(var(--bonk-bg-end))] flex flex-col items-center justify-center text-white p-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[hsl(var(--bonk-yellow))] to-[hsl(var(--bonk-orange))] bg-clip-text text-transparent mb-12 tracking-wide">
          Bonk Chess
        </h1>
        <div className="mb-16">
          <img 
            src="/assets/landing.png" 
            alt="Bonk Chess" 
            className="max-w-sm w-full mx-auto rounded-2xl shadow-2xl border-4 border-[hsl(var(--bonk-border))] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="bg-[hsl(var(--bonk-orange))] hover:bg-[hsl(var(--bonk-orange-dark))] text-black font-bold px-12 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-[hsl(var(--bonk-border))] bg-black/30 backdrop-blur-sm text-[hsl(var(--bonk-text))] hover:bg-black/50 hover:text-white px-12 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/play">Go to Practice</Link>
          </Button>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Landing; 