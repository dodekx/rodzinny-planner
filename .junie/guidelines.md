# Wytyczne dla Agenta - Rodzinny Planner

To jest dokumentacja opisująca projekt dla agentów AI pracujących nad tym repozytorium.

## Cel projektu
Stworzenie inteligentnej listy zadań (To-Do) zaprojektowanej dla rodzin i grup, która automatyzuje przypisywanie obowiązków na podstawie ról i integruje się z Kalendarzem Google.

## Kluczowe funkcjonalności (MVP)

- **Struktura**: Podział na projekty (np. Dom, Szkoła, Remont) z przypisanymi członkami.
- **System Ról**: Inteligentne reguły widoczności (np. zadania typu „zdrowie” widoczne dla rodziców i konkretnego dziecka).
- **Cykliczność**: Obsługa zadań powtarzalnych (np. co tydzień, co miesiąc).
- **Multimedia**: Możliwość załączania zdjęć i plików do zadań (Firebase Storage).
- **AI Integration**: Dodawanie zadań językiem naturalnym przez Gemini (np. "Dodaj wizytę u dentysty dla Kuby na czwartek"), które automatycznie parsuje datę, kategorię i przypisuje odpowiednie role.
- **Synchronizacja**: Pełna integracja z Google Calendar.

## Stack Techniczny

- **Frontend**: Angular (Signals, RxJS)
- **Backend**: Firebase (Firestore, Auth, Functions, Storage)
- **Jakość**: Testy Unit (Vitest), E2E (Playwright), CI/CD (GitHub Actions)

## Instrukcje dla Agenta
1.  **Zawsze przestrzegaj powyższego stacku technicznego.** Jeśli dodajesz nowe testy jednostkowe, używaj Vitest. Dla testów E2E używaj Playwrighta.
2.  **Integracja AI**: Wszystkie funkcje związane z parsowaniem języka naturalnego powinny wykorzystywać Gemini.
3.  **Firebase**: Dane powinny być przechowywane w Firestore, a pliki w Firebase Storage.
4.  **Styl kodowania**: Używaj Angular Signals tam, gdzie to możliwe, zamiast tradycyjnych mechanizmów detekcji zmian lub nadmiernego użycia RxJS do prostego stanu.
