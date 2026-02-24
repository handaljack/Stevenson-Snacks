export default function ContactPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded-2xl bg-white p-6 shadow-card">
        <h1 className="text-3xl text-stevenson-green">Contact the Snack Team</h1>
        <p className="mt-3 text-stevenson-coolGray10">Have a product suggestion or pickup question? Send us a note.</p>
        <p className="mt-4 font-semibold text-stevenson-green">Instagram: @patriotsnackstop (placeholder)</p>
      </section>
      <form className="space-y-3 rounded-2xl bg-white p-6 shadow-card">
        <input className="w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Your name" />
        <input className="w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Email (optional)" />
        <textarea className="h-32 w-full rounded-xl border border-stevenson-coolGray7 px-3 py-2" placeholder="Message" />
        <button type="button" className="rounded-full bg-stevenson-green px-4 py-2 font-bold text-white">Send Message</button>
      </form>
    </div>
  );
}
