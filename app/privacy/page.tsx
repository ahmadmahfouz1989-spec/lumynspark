export const metadata = {
  title: 'Privacy Policy — Spark AI Tutor',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: May 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">1. About Spark</h2>
        <p>Spark is a personalized AI tutoring app for children ages 7–12, developed by Lumyn Spark. This Privacy Policy explains how we collect, use, and protect your information when you use the Spark mobile application.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Account information:</strong> Parent email address, first name, and last name.</li>
          <li><strong>Child profiles:</strong> Child's first name, grade level, and school level. We do not collect the child's full name, date of birth, or any government ID.</li>
          <li><strong>Learning data:</strong> Tutoring session messages, uploaded lesson images, exam results, and homework photos used to power the AI tutor.</li>
          <li><strong>Usage data:</strong> Session activity, mastery scores, and progress tracking to personalize the learning experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and personalize the AI tutoring experience.</li>
          <li>To generate session summaries and progress reports for parents.</li>
          <li>To improve the app and our AI models.</li>
          <li>To send account-related emails (verification, password reset).</li>
        </ul>
        <p className="mt-3">We do not sell your personal data. We do not use your data for advertising purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">4. Children's Privacy</h2>
        <p>Spark is designed for use by parents on behalf of their children. Parents create and manage all child profiles. We do not knowingly collect personal information directly from children. All accounts are created and controlled by a parent or guardian. If you believe a child has provided us with personal information without parental consent, please contact us immediately.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
        <p>We share data only with the following trusted service providers, solely to operate the app:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Anthropic:</strong> AI model provider that processes tutoring messages and lesson content.</li>
          <li><strong>Railway:</strong> Cloud hosting for our backend and database.</li>
          <li><strong>Stripe:</strong> Payment processing for subscriptions.</li>
        </ul>
        <p className="mt-3">We do not share your data with any other third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
        <p>We retain your data for as long as your account is active. You may delete your account at any time from within the app, which permanently removes all associated data including child profiles, sessions, and messages.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
        <p>We use industry-standard security practices including encrypted data transmission (HTTPS), hashed passwords, and JWT-based authentication. We never store plaintext passwords.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at the email below or use the account deletion feature in the app.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
        <p>For any privacy-related questions, contact us at:</p>
        <p className="mt-2 font-semibold text-white">ahmadmahfouz1989@gmail.com</p>
      </section>
    </main>
  )
}
