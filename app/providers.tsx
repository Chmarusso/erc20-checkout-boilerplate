"use client";
import { WagmiProvider } from 'wagmi' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/config/wagmi';

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient() 
  
  return (
    <WagmiProvider config={config}> 
      <QueryClientProvider client={queryClient}> 
        {children}
      </QueryClientProvider> 
    </WagmiProvider> 
  )
}