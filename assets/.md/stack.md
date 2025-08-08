# Stack Technique — Application Web de Réservation pour Masseuse

## Frontend

- **Framework** : [Next.js](https://nextjs.org/) (TypeScript)  
  → SEO-friendly grâce au rendu côté serveur (SSR) et au pré-rendu statique (SSG).  
- **UI & CSS** : [Bootstrap](https://getbootstrap.com/)  
  → Design responsive, rapide à mettre en place, mobile-first.  
- **Formulaires & validation** : [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)  
  → Gestion efficace des formulaires, validation côté client et côté serveur.  
- **Gestion des données côté client** : [SWR](https://swr.vercel.app/) ou [React Query](https://tanstack.com/query)  
  → Caching et synchronisation automatique avec le backend.  
- **Calendrier** : [FullCalendar](https://fullcalendar.io/) ou [React Big Calendar](https://github.com/jquense/react-big-calendar)  
  → Affichage et sélection de créneaux horaires.

## Backend

- **API** : Next.js API routes ou [Supabase Edge Functions](https://supabase.com/docs/guides/functions)  
  → Pour logique personnalisée non gérable directement via le client.  
- **Gestion des accès** : [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security) dans Postgres  
  → Protection des données par utilisateur et par rôle (CLIENT / ADMIN).  
- **Déploiement** :  
  - Frontend/Backend sur [Vercel](https://vercel.com/) (plan Hobby gratuit) ou [Cloudflare Pages](https://pages.cloudflare.com/).  
  - Variables d'environnement pour clé et URL Supabase.

## Base de données

- **Type** : PostgreSQL (hébergé sur [Supabase](https://supabase.com/))  
- **Stockage inclus** : 500 MB de données (plan gratuit)  
- **Tables** : Basées sur ton schéma BDD (User, Prestation, Product, Category, Reservation, Purchase, Review, RecurringSlot, RecurringSlotException, OneTimeSlot)  
- **Extensions utiles** : `uuid-ossp` pour IDs, `pgcrypto` si hash côté DB.

## Authentification

- **Service** : Supabase Auth (email / mot de passe)  
- **Gestion des sessions** : via JWT gérés par `@supabase/supabase-js`  
- **Réinitialisation de mot de passe** : non prévue au départ (reset manuel par l’admin),  
  mais possible d’activer plus tard avec l’envoi d’email via Supabase.

## Autres outils & services

- **Stockage des fichiers** : Supabase Storage (1 GB gratuit)  
  - Pour images de produits, prestations, galerie.  
  - En cas de dépassement, possibilité d’héberger des images statiques directement dans le projet.
- **Gestion du code** : [GitHub](https://github.com/) (open-source)  
- **CI/CD** : Intégration continue automatique via Vercel ou Cloudflare Pages.
- **Internationalisation** : Contenu 100% français, optimisé SEO FR.
- **Gratuit en production** :  
  - Supabase (Free Tier)  
  - Vercel ou Cloudflare Pages (Free Tier)  
  - GitHub (Free Tier)
