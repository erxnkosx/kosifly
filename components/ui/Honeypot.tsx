/**
 * Verborgen veld tegen spam: bezoekers zien en vullen het niet in, bots meestal wel.
 * functions/api/contact.ts weigert een aanvraag waarin dit veld ingevuld is (zelfde veldnaam daar).
 */
export function Honeypot() {
  return (
    <div className="hp-field" aria-hidden="true">
      <label>
        Laat dit veld leeg
        <input type="text" name="bedrijfsfax" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
