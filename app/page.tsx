"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Package } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <Package className="w-20 h-20 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sistema de Estoque</h1>
        <p className="text-gray-600">Gerencie seu estoque de forma simples e eficiente</p>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Bem-vindo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full" 
            size="lg"
            onClick={() => router.push("/login")}
          >
            Entrar
          </Button>
          <Button 
            className="w-full" 
            variant="outline" 
            size="lg"
            onClick={() => router.push("/register")}
          >
            Criar Conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}