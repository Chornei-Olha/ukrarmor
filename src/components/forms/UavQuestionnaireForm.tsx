'use client';

import { useMemo, useRef, useState } from 'react';

type ObjectType =
  | 'Паливний'
  | 'Газовий'
  | 'Електричний'
  | 'Хімічний'
  | 'Промисловий'
  | 'Транспорт'
  | 'Інше';

type ProtectionLevel = 'Перший' | 'Другий' | 'Третій' | 'Четвертий';
type UavType = 'Малий' | 'Легкий' | 'Середній' | 'Можливість скидання';
type ShelterType = 'Стаціонарні' | 'Швидкомонтовані';

type FormState = {
  objectName: string; // Назва об'єкта *
  objectLocation: string; // Розташування об'єкта*
  objectLabel: string; // Найменування об'єкта

  lengthM: string;
  widthM: string;
  heightM: string;

  objectTypes: ObjectType[];
  otherObjectType: string;

  heightDiffMm: string; // Перепад є мм

  docsNote: string; // optional text

  files: File[];

  protectionLevel: ProtectionLevel | '';
  uavType: UavType | '';

  uavMassKg: string;
  uavSpeedKmh: string;
  chargeMassKg: string; // Маса ВР до, кг/тротил.екв

  shelterType: ShelterType | '';

  surfaceFeatures: string[]; // чекбоксы поверхности
  surfaceOther: string;

  contactName: string;
  contactPhone: string;
  contactEmail: string;
  comment: string;

  consent: boolean;
};

const ACCEPTED_EXTENSIONS = ['pdf', 'dwg', 'doc', 'docx', 'step', 'stp', 'xls', 'xlsx'];

function isAllowedFile(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase() || '';
  return ACCEPTED_EXTENSIONS.includes(ext);
}

const SURFACES = [
  'Асфальт',
  'Бетонні плити',
  'Пісок',
  'Глина',
  'Скальний',
  'Підтоплюваний грунт',
  'Вічна мерзлота',
];

export default function UavQuestionnaireForm() {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState<FormState>({
    objectName: '',
    objectLocation: '',
    objectLabel: '',

    lengthM: '',
    widthM: '',
    heightM: '',

    objectTypes: [],
    otherObjectType: '',

    heightDiffMm: '',

    docsNote: '',

    files: [],

    protectionLevel: '',
    uavType: '',

    uavMassKg: '',
    uavSpeedKmh: '',
    chargeMassKg: '',

    shelterType: '',

    surfaceFeatures: [],
    surfaceOther: '',

    contactName: '',
    contactPhone: '',
    contactEmail: '',
    comment: '',

    consent: false,
  });

  const objectTypeOptions: ObjectType[] = useMemo(
    () => ['Паливний', 'Газовий', 'Електричний', 'Хімічний', 'Промисловий', 'Транспорт', 'Інше'],
    []
  );

  const toggleArrayValue = (arr: string[], v: string) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const incoming = Array.from(files).filter(isAllowedFile);

    setForm((prev) => {
      const existing = new Set(prev.files.map((f) => `${f.name}:${f.size}`));
      const merged = [...prev.files];
      for (const f of incoming) {
        const key = `${f.name}:${f.size}`;
        if (!existing.has(key)) merged.push(f);
      }
      return { ...prev, files: merged };
    });
  };

  const removeFile = (name: string, size: number) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((f) => !(f.name === name && f.size === size)),
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.consent) {
      alert('Підтвердіть згоду на обробку персональних даних.');
      return;
    }

    const fd = new FormData();

    Object.entries(form).forEach(([k, v]) => {
      if (k === 'files') return;

      if (Array.isArray(v)) {
        fd.append(k, JSON.stringify(v));
      } else {
        fd.append(k, String(v ?? ''));
      }
    });

    form.files.forEach((f) => fd.append('files[]', f));

    // honeypot: должно оставаться пустым
    fd.append('website', '');

    try {
      const res = await fetch('/send-form.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: fd,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Помилка відправки');
      }

      alert('Дякуємо! Заявку надіслано.');
    } catch (error) {
      console.error(error);
      alert('Помилка відправки форми');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-10 py-7 border-b border-neutral-200">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
          Опитувальний лист для розрахунку виробництва укриттів від БПЛА
        </h1>
      </div>

      <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-10">
        {/* SECTION: general */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Загальні характеристики об&apos;єкту
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Назва об'єкта *"
              value={form.objectName}
              onChange={(v) => setForm((p) => ({ ...p, objectName: v }))}
              required
            />
            <Field
              label="Розташування об'єкта *"
              value={form.objectLocation}
              onChange={(v) => setForm((p) => ({ ...p, objectLocation: v }))}
              required
            />
          </div>

          <Field
            label="Найменування об'єкта"
            value={form.objectLabel}
            onChange={(v) => setForm((p) => ({ ...p, objectLabel: v }))}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <Field
              label="Довжина, м"
              value={form.lengthM}
              onChange={(v) => setForm((p) => ({ ...p, lengthM: v }))}
              inputMode="decimal"
            />
            <Field
              label="Ширина, м"
              value={form.widthM}
              onChange={(v) => setForm((p) => ({ ...p, widthM: v }))}
              inputMode="decimal"
            />
            <Field
              label="Висота, м"
              value={form.heightM}
              onChange={(v) => setForm((p) => ({ ...p, heightM: v }))}
              inputMode="decimal"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_200px] gap-6 items-start">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-neutral-900">Тип об&apos;єкту</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {objectTypeOptions.map((t) => (
                  <label key={t} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-blue-700"
                      checked={form.objectTypes.includes(t)}
                      onChange={() =>
                        setForm((p) => ({
                          ...p,
                          objectTypes: toggleArrayValue(p.objectTypes, t) as ObjectType[],
                        }))
                      }
                    />
                    <span className="text-sm text-neutral-700">{t}</span>
                  </label>
                ))}
              </div>

              {form.objectTypes.includes('Інше') && (
                <Field
                  label="Інше (вкажіть)"
                  value={form.otherObjectType}
                  onChange={(v) => setForm((p) => ({ ...p, otherObjectType: v }))}
                />
              )}
            </div>

            <Field
              label="Перепад є, мм"
              value={form.heightDiffMm}
              onChange={(v) => setForm((p) => ({ ...p, heightDiffMm: v }))}
              inputMode="numeric"
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-800 transition"
            onClick={() => alert('Тут логіка “Додати обʼєкт” (якщо треба мульти-обʼєкти)')}
          >
            Додати об&apos;єкт
          </button>
        </section>

        {/* SECTION: documents upload */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Документи необхідні для розрахунку (КЖ, КМ АР)
          </h2>
          <p className="text-sm text-neutral-600">
            Вкладіть файли з проектом, фотографії об&apos;єкта, генплан
          </p>

          <div
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDragging(true);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDragging(false);
              addFiles(e.dataTransfer.files);
            }}
            className={[
              'rounded-xl border-2 border-dashed p-8 text-center transition',
              isDragging ? 'border-blue-700 bg-blue-50' : 'border-blue-300 bg-neutral-50',
            ].join(' ')}
          >
            <p className="font-semibold text-neutral-900">Перетягніть файли проекту сюди</p>
            <p className="mt-2 text-sm text-neutral-600">{ACCEPTED_EXTENSIONS.join(', ')}</p>

            <div className="mt-5 flex flex-col items-center gap-3">
              <span className="text-sm text-neutral-600">Або натисніть кнопку</span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-md bg-yellow-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-yellow-200 transition"
              >
                Вкласти проект
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                accept={ACCEPTED_EXTENSIONS.map((e) => `.${e}`).join(',')}
                onChange={(e) => addFiles(e.target.files)}
              />
            </div>
          </div>

          {form.files.length > 0 && (
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-neutral-900">Вкладені файли</p>
              <ul className="mt-3 space-y-2">
                {form.files.map((f) => (
                  <li
                    key={`${f.name}:${f.size}`}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-neutral-700 truncate">
                      {f.name}{' '}
                      <span className="text-neutral-400">({Math.round(f.size / 1024)} KB)</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(f.name, f.size)}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                    >
                      Видалити
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* SECTION: protection */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-neutral-900">Необхідний захист від БПЛА</h2>

          {/* table block */}
          <div className="rounded-xl border border-neutral-200 overflow-hidden">
            <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-200">
              <p className="text-sm font-semibold text-neutral-900">
                Зведена таблиця характеристик щодо БПЛА та рівня захисту об&apos;єкта
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[860px] w-full text-sm">
                <thead className="bg-white">
                  <tr className="border-b border-neutral-200">
                    <th className="text-left p-4">Тип БПЛА</th>
                    <th className="text-center p-4" colSpan={4}>
                      Рівень захисту
                    </th>
                    <th className="text-left p-4">Злітна маса (кг)</th>
                    <th className="text-left p-4">Швидкість (км/год)</th>
                    <th className="text-left p-4">Маса заряду (кг)</th>
                  </tr>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left p-4" />
                    {['1-ий', '2-ий', '3-ій', '4-ий'].map((x) => (
                      <th key={x} className="text-center p-4 font-semibold text-neutral-700">
                        {x}
                      </th>
                    ))}
                    <th className="text-left p-4" />
                    <th className="text-left p-4" />
                    <th className="text-left p-4" />
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    {
                      type: 'Малий',
                      mass: 'до 30',
                      speed: 'до 60',
                      charge: 'до 6',
                      levels: [1, 1, 1, 1],
                    },
                    {
                      type: 'Легкий',
                      mass: '30-100',
                      speed: '60-120',
                      charge: '6-10',
                      levels: [1, 1, 1, 0],
                    },
                    {
                      type: 'Середній',
                      mass: '100-250',
                      speed: '120-200',
                      charge: '10-15',
                      levels: [1, 1, 0, 0],
                    },
                    {
                      type: 'Можливість скидання',
                      mass: '—',
                      speed: '—',
                      charge: '—',
                      levels: [1, 0, 0, 0],
                    },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-neutral-100">
                      <td className="p-4 font-medium text-neutral-900">{row.type}</td>

                      {row.levels.map((on, idx) => (
                        <td key={idx} className="p-4 text-center">
                          <span
                            className={[
                              'inline-flex h-5 w-5 rounded-full border',
                              on
                                ? 'bg-blue-700 border-blue-700'
                                : 'bg-yellow-200 border-yellow-300',
                            ].join(' ')}
                            aria-label={on ? 'supported' : 'not supported'}
                          />
                        </td>
                      ))}

                      <td className="p-4 text-neutral-700">{row.mass}</td>
                      <td className="p-4 text-neutral-700">{row.speed}</td>
                      <td className="p-4 text-neutral-700">{row.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* selects + individual params */}
          <div className="grid lg:grid-cols-2 gap-6">
            <SelectField
              label="Необхідний рівень захисту від БПЛА"
              value={form.protectionLevel}
              onChange={(v) => setForm((p) => ({ ...p, protectionLevel: v as ProtectionLevel }))}
              options={['Перший', 'Другий', 'Третій', 'Четвертий']}
              placeholder="Оберіть рівень"
              required
            />

            <SelectField
              label="Тип БПЛА"
              value={form.uavType}
              onChange={(v) => setForm((p) => ({ ...p, uavType: v as UavType }))}
              options={['Малий', 'Легкий', 'Середній', 'Можливість скидання']}
              placeholder="Оберіть тип"
              required
            />
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold text-neutral-900">
              Індивідуальні параметри типу БПЛА
            </h3>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <Field
                label="Маса БПЛА до, кг"
                value={form.uavMassKg}
                onChange={(v) => setForm((p) => ({ ...p, uavMassKg: v }))}
                inputMode="decimal"
              />
              <Field
                label="Швидкість до, км/год"
                value={form.uavSpeedKmh}
                onChange={(v) => setForm((p) => ({ ...p, uavSpeedKmh: v }))}
                inputMode="decimal"
              />
              <Field
                label="Маса ВР до, кг / тротил.екв"
                value={form.chargeMassKg}
                onChange={(v) => setForm((p) => ({ ...p, chargeMassKg: v }))}
                inputMode="decimal"
              />
            </div>
          </div>
        </section>

        {/* SECTION: shelter type + surface */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-neutral-900">Тип укриття</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            {(['Стаціонарні', 'Швидкомонтовані'] as ShelterType[]).map((v) => {
              const active = form.shelterType === v;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, shelterType: v }))}
                  className={[
                    'rounded-md px-6 py-3 text-sm font-semibold border transition',
                    active
                      ? 'bg-blue-700 text-white border-blue-700'
                      : 'bg-white text-neutral-900 border-neutral-300 hover:border-neutral-500',
                  ].join(' ')}
                >
                  {v}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold text-neutral-900">
              Особливості поверхні для монтажу
            </h3>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SURFACES.map((s) => (
                <label key={s} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-yellow-300"
                    checked={form.surfaceFeatures.includes(s)}
                    onChange={() =>
                      setForm((p) => ({
                        ...p,
                        surfaceFeatures: toggleArrayValue(p.surfaceFeatures, s),
                      }))
                    }
                  />
                  <span className="text-sm text-neutral-700">{s}</span>
                </label>
              ))}
            </div>

            <div className="mt-4">
              <Field
                label="Інше (вкажіть)"
                value={form.surfaceOther}
                onChange={(v) => setForm((p) => ({ ...p, surfaceOther: v }))}
              />
            </div>
          </div>
        </section>

        {/* SECTION: contacts */}
        <section className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-xl border border-neutral-200 p-5">
            <h2 className="text-xl font-semibold text-neutral-900">Дані про організацію</h2>

            <div className="mt-4 space-y-4">
              <Field
                label="* Ваше імʼя"
                value={form.contactName}
                onChange={(v) => setForm((p) => ({ ...p, contactName: v }))}
                required
              />
              <Field
                label="* Ваш телефон"
                value={form.contactPhone}
                onChange={(v) => setForm((p) => ({ ...p, contactPhone: v }))}
                required
              />
              <Field
                label="* Ваш email"
                value={form.contactEmail}
                onChange={(v) => setForm((p) => ({ ...p, contactEmail: v }))}
                type="email"
                required
              />
              <TextareaField
                label="Коментар:"
                value={form.comment}
                onChange={(v) => setForm((p) => ({ ...p, comment: v }))}
              />

              <label className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-blue-700"
                  checked={form.consent}
                  onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                />
                <span className="text-sm text-neutral-700">
                  Підтверджую свою згоду на обробку персональних даних
                </span>
              </label>

              <button
                type="submit"
                className="w-full sm:w-[220px] rounded-md bg-yellow-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-200 transition"
              >
                Надіслати
              </button>
            </div>
          </div>

          <div className="text-sm text-neutral-500">
            <p>* Усі обрані параметри будуть передані менеджеру разом із заявкою.</p>
          </div>
        </section>
      </form>
    </div>
  );
}

/* ---------- small UI helpers ---------- */

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-neutral-700 mb-2">{props.label}</span>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type ?? 'text'}
        required={props.required}
        inputMode={props.inputMode}
        className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
      />
    </label>
  );
}

function TextareaField(props: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-neutral-700 mb-2">{props.label}</span>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        rows={4}
        className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
      />
    </label>
  );
}

function SelectField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-neutral-700 mb-2">{props.label}</span>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        required={props.required}
        className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
      >
        <option value="">{props.placeholder ?? 'Оберіть'}</option>
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
