"use client";

import { useEffect } from "react";
import { API_BASE_URL } from "@/config/api";

/**
 * Componente que hace una llamada a la API al cargar la página
 * para iniciarla y evitar el tiempo de espera cuando se accede a la demo
 */
export default function ApiWarmup() {
    useEffect(() => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const warmupApi = async () => {
            try {
                await fetch(`${API_BASE_URL}/API/Atletismo/campeonatos`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal: controller.signal,
                });
            } catch {
                // Silent fail - la API puede no estar disponible
            }
        };

        warmupApi();

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, []);

    // Este componente no renderiza nada
    return null;
}
