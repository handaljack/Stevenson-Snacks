const faqs = [
  {
    q: 'When can I pick up my order?',
    a: 'Pickup windows are usually lunch periods and selected after-school times. Availability is shown during Reserve Order checkout.'
  },
  {
    q: 'How does ordering work?',
    a: 'Add items to cart, complete the Reserve Order form, and receive an order ID confirmation on submit.'
  },
  {
    q: 'How do you handle allergy information?',
    a: 'Every product card includes tags like gluten-free, contains-dairy, and nut-warning. Always review labels before consuming.'
  },
  {
    q: 'Can I return items?',
    a: 'Refund/return requests are handled case-by-case for incorrect or unavailable items at pickup.'
  },
  {
    q: 'How can I contact the snack shop team?',
    a: 'Use the contact page form or Instagram placeholder handle for updates.'
  }
];

export default function FaqPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-stevenson-green">Frequently Asked Questions</h1>
      <div className="space-y-3">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-2xl bg-white p-5 shadow-card">
            <h2 className="text-lg text-stevenson-green">{item.q}</h2>
            <p className="mt-2 text-stevenson-coolGray10">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
