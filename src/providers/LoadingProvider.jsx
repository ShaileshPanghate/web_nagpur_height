'use client'
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import RouteLoader from '@/components/RouteLoader';

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay (remove in production)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <RouteLoader />}
      {children}
    </>
  );
}