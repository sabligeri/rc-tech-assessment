import { useState, useEffect } from "react";
import { callApi } from "../call-api";

interface Hero {
    id: number;
    name: string;
    available: boolean;
  }

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heroes = await callApi<Hero[]>('heroes');
        setHeroes(heroes);
        setLoading(false);
      } catch {
        setErrors('Failed to fetch heroes');
        setLoading(false);
      }
    }
    fetchHeroes()
  }, []);


  const toggleAvailablity = (id: number) => {
    setHeroes((prevHeroes) =>
      prevHeroes.map((hero) =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };

  return { heroes, loading, errors, toggleAvailablity };
}