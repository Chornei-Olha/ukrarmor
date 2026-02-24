import ContactForm from '@/components/ui/ContactForm';

export default function SystemaZakhystuVidDronivPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Система захисту від дронів та БПЛА</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900">Система захисту від дронів і БПЛА</h2>

        <p>
          Огороджувальні конструкції UKRARMOR складаються з міцних хомутових лісів і армованої
          сітки, яка забезпечує надійну фізичну перешкоду на шляху БПЛА і запобігає
          несанкціонованому проникненню будь-яких літальних апаратів.
        </p>

        <p>
          Захисні системи легко монтуються і адаптуються під різні об'єкти: будівлі, відкриті
          майданчики і периметри. Сталева антидронова сітка має високу міцність і стійкість до
          пошкоджень.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">Область застосування</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Об'єкти критичної інфраструктури</li>
          <li>Військові та державні об'єкти</li>
          <li>Промислові підприємства</li>
          <li>Корпоративна безпека</li>
          <li>Масові заходи</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Переваги систем UKRARMOR</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Висока ефективність</strong> — блокує проникнення БПЛА
          </li>
          <li>
            <strong>Простота монтажу</strong> — швидке встановлення
          </li>
          <li>
            <strong>Адаптивність</strong> — під будь-який об'єкт
          </li>
          <li>
            <strong>Довговічність</strong> — стійкість до погодних умов
          </li>
          <li>
            <strong>Економічність</strong> — мінімальні витрати на обслуговування
          </li>
        </ul>

        <p>Компанія UKRARMOR здійснює послуги з монтажу вироблених виробів.</p>

        <p className="font-semibold text-gray-900">З повагою до Вас, команда UKRARMOR!</p>
      </div>

      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  );
}
