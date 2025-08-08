"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type Prestation = {
  id: string;
  title: string;
  description: string | null;
  duration: number;
  price: number;
};

export default function PrestationsPage() {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrestations() {
      setLoading(true);
      const { data, error } = await supabase
        .from("prestations")
        .select("id, title, description, duration, price");

				if (error) {
        setError(error.message);
        setPrestations([]);
      } else {
        setPrestations(data || []);
        setError(null);
      }
      setLoading(false);
    }

    fetchPrestations();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-danger">Erreur : {error}</p>;

  return (
    <div className="container mt-4">
      <h1>Prestations disponibles</h1>
      {prestations.length === 0 && <p>Aucune prestation trouvée.</p>}
      <div className="list-group">
        {prestations.map((p) => (
          <div key={p.id} className="list-group-item">
            <h5>{p.title}</h5>
            <p>{p.description}</p>
            <small>
              Durée : {p.duration} min - Prix : {p.price.toFixed(2)} €
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
