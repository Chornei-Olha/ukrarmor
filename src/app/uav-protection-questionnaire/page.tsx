import UavQuestionnaireForm from '@/components/forms/UavQuestionnaireForm';

export const metadata = {
  title: 'Опитувальний лист | UKRARMOR',
  description:
    'Опитувальний лист для розрахунку виробництва укриттів від БПЛА. Заповніть параметри об’єкта та вимоги до захисту.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="container mx-auto px-6 py-10">
        <UavQuestionnaireForm />
      </div>
    </div>
  );
}
