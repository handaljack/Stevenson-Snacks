export default function AboutPage() {
  return (
    <div className="space-y-6 rounded-2xl bg-white p-6 shadow-card">
      <h1 className="text-3xl text-stevenson-green">About Patriot Snack Stop</h1>
      <p className="text-stevenson-coolGray10">
        We are a student-run snack project focused on quick service, fair pricing, and convenient pickup around the school day.
        Our goal is to help classmates stay energized between classes and activities.
      </p>
      <p className="text-stevenson-coolGray10">
        Inspired by Stevenson&apos;s “Success for Every Student” spirit, we prioritize reliability, communication, and access for all students.
        This project is independent and not an official school or district program.
      </p>
      <div className="rounded-xl border border-stevenson-coolGray2 bg-stevenson-coolGray2/30 p-4">
        <p className="font-semibold text-stevenson-green">
          Not affiliated with or endorsed by Stevenson High School / District 125. Student-run.
        </p>
      </div>
    </div>
  );
}
