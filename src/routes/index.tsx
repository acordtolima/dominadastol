import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({
      href: "/dominadas.html",
      reloadDocument: true,
    });
  },
  component: IrAlJuego,
});

function IrAlJuego() {
  useEffect(() => {
    window.location.replace("/dominadas.html");
  }, []);

  return (
    <main className="juego-marco">
      <p className="juego-aviso">Abriendo Dominadas…</p>
    </main>
  );
}
