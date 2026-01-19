"use client";

import { useEffect } from "react";
import { API_BASE_URL } from "@/config/api";

/**
 * Componente que hace una llamada a la API al cargar la página
 * para iniciarla y evitar el tiempo de espera cuando se accede a la demo
 */
export default function ApiWarmup() {
    useEffect(() => {
        const warmupApi = async () => {
            try {
                await fetch(API_BASE_URL + "/API/Atletismo/campeonatos", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal: AbortSignal.timeout(5000),
                });
            } catch {
            }
        };

        // Llamamos a la API cuando el componente se monta
        warmupApi();
    }, []);

    // Este componente no renderiza nada
    return null;
}
